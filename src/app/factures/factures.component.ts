import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {DevisItem} from '../../shared/models/DevisItem'
import {DialogStatus} from '../../shared/enums/DialogState.enum'
import { GlobalEventsService } from '@shared/globalEventsService';
import { ReferenceService } from '../../shared/services/reference.service'
import { FakeService } from '@shared/services/fake.service';
import { ClientForAutoCompleteDto, ClientForAutoCompleteDtoListResultDto, ClientServiceProxy, DevisServiceProxy, DevisStatutEnum } from '@shared/service-proxies/service-proxies';
import {ReferencePrefix} from '@shared/enums/reference-prefix.enum'
import * as moment from 'moment';
import { DateHelper } from '@shared/helpers/DateHelper';
import { ToastService } from '@shared/services/toast.service';


@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})

export class FacturesComponent implements OnInit {
 
 
  constructor(
    private _globalEventsService: GlobalEventsService,
    private _referenceService: ReferenceService,
    public _fakeService: FakeService,
    private _devisServiceProxy: DevisServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    private _toastService: ToastService,

  ) { }

  ngOnInit() {

    this._globalEventsService.announcedThePageChangedColorSubject(`var(--${this.primaryColor}-color`);
    this._fakeService.getData().subscribe((res: any) => {
      this.devisList = res
      this.selectedDevisItem = res[0]
    })

    this.emitNotificationSelectedDevisChanged(this.selectedDevisItem)
    
    this.devisList.forEach(
      (devis: any) => {
        devis.reference = this.devisFormatReferenceNumber(devis.reference)
        console.log(devis.reference);
        devis.contentItems = devis.contentItems.map(
          (item: any) => {
            let total_ht = item.pu * item.quantite;
            return {
               ...item, 
               total_ttc: total_ht+ (item.tva * total_ht/100),
               total_ht, 
            }
          },
        )

        devis.montant_ttc = devis.contentItems
          .map((item) => item.total_ttc)
          .reduce((accum, current) => accum + current) - devis.remise

        this.montantTTCAllDevis += devis.montant_ttc;
        
        }
    )

    this.calculateSummaryTotalHTAndTVA();
  }

  //#region Properties
  title = 'Facture';
  primaryColor = 'orange';
  imageSrc="assets/img/FacturesLogo.png"
  secondaryColor = ''
  tableSelectionColor = 'var(--light-orange-color)';

  searchText = ''
  selectedClient = ''
  selectedDate !: Date
  selectedEcheance = ''
  selectedMontant = ''
  selectedStatut = ''
  clientSuggestions : ClientForAutoCompleteDto[]
  echeanceOptions = [15, 20, 30]
  statutOptions = ['Créé', 'Validé', 'Converti', 'Expiré']
  cols = [
    {
      header: 'REFERENCE',
      field: 'reference',
      type: 'text',
    },
    {
      header: 'CLIENT',
      field: 'client.nom',
      type: 'text',
    },
    {
      header: 'DATE D’EMISSION',
      field: 'date_emission',
      type: 'date',
    },
    {
      header: 'ECHEANCE',
      field: 'echeance',
      type: 'text',
      suffix: 'jours',
    },
    {
      header: 'MONTANT TTC',
      field: 'montant_ttc',
      type: 'currency',
    },
    {
      header: 'STATUT',
      field: 'statut',
      type: 'text',
      format: this.formatStatut
    },
  ]
  DevisContentItemsCols = [
    { header: 'DESCRIPTION', field: 'description', type: 'text', colspan: 2 },
    { header: 'DATE', field: 'date', type: 'date', colspan: 0 },
    { header: 'QUANTITE', field: 'quantite', type: 'text' },
    { header: 'UNITE', field: 'unite', type: 'text' },
    { header: 'PU HT', field: 'pu', type: 'currency' },
    { header: 'TOTAL HT', field: 'total_ht', type: 'currency' },
    { header: 'TVA', field: 'tva', type: 'pourcentage' },
    { header: 'TOTAL TTC', field: 'total_ttc', type: 'currency', colspan: 0 },
  ]
  devisList : any
  statusItems = [
    {
      label: 'Accepté', 
      icon: 'pi pi-check', 
      command: () => {
        this.updateApiCall(this.selectedDevisItem.client.id, DevisStatutEnum.Converti, 'Le devis est converti en facture')
      }
    },
    {
      label: 'Rejeté', 
      icon: 'pi pi-times', 
      command: () => {
        this.updateApiCall(this.selectedDevisItem.client.id, DevisStatutEnum.Converti, 'Le devis est rejeté')
      }
    },
  ]
  displayDialog = false
  dialogState !:  DialogStatus
  autoCompleteText = ''
  suggestions = []
  dateEmission = new Date()
  echeancePayementOptions = [30, 60, 90]
  echeancePayementSelected = this.echeancePayementOptions[0] || ''
  selectedDevisItem!: DevisItem
  summaryTotalHT: number;
  summaryTVA: number;
  summaryTotalTTC: number;
  montantTTCAllDevis: number = 0;
  Currency = 'MAD'

  //#endregion

  formatStatut(statut?: DevisStatutEnum){
      
    switch(statut){
      case DevisStatutEnum.Cree: return 'Brouillon';
      case DevisStatutEnum.Valide: return 'Validé';
      case DevisStatutEnum.Converti: return 'Convéeti';
      case DevisStatutEnum.Expire: return 'Expiré';
    }
  }
   getDateEcheance(dateEmission: Date, echeance: number) {
    return moment(dateEmission).add(echeance, 'days').toDate()
     
   }
  
  devisFormatReferenceNumber(reference: number) {
    return this._referenceService.formatReferenceNumber(ReferencePrefix.Devis, reference)
  }

  clientAutoCompleteSearch(event: any) {
      setTimeout(() => {
        this._clientServiceProxy.getClientForAutoComplete(event.query)
        .subscribe((res: ClientForAutoCompleteDtoListResultDto) => {
          this.clientSuggestions = res.items
      })
      }, 500)
  }
  
  //#region events
  filterSubject = new Subject<any>();
  emitFilterEvent(filterType: string, value: any){
    if(filterType == 'filterByInput') {
      setTimeout(() => {
        this.filterSubject.next({
          type: 'filterByInput', 
          value
        })
      }, 500)
    }
    
    else if(filterType == 'filterByButton') 
      this.filterSubject.next({
        type: 'filterByButton',
        value: {
          client: this.selectedClient,
          date_emission: this.selectedDate,
          echeance: this.selectedEcheance,
          statut: this.selectedStatut,
          montant_ttc: this.selectedMontant
        }
      })
    
  }

  dialogStatusEvent = new Subject<DialogStatus>()
  emitDialogStatus(dialogStatus: DialogStatus) {
    this.dialogStatusEvent.next(dialogStatus)
  }

  rowDeletedSubject = new Subject<DevisItem>()
  emitRowDeletedEvent(deviItem: DevisItem) {
    this.rowDeletedSubject.next(deviItem)
  }

  notifySelectedDevisChanged = new BehaviorSubject<DevisItem>(null)
  emitNotificationSelectedDevisChanged(deviItem: DevisItem) {
    this.notifySelectedDevisChanged.next(deviItem)
  }
  //#endregion
  
  newDevis() {
    this.displayDialog = true;
    this.emitDialogStatus(DialogStatus.New);
  }
  
  editDevis() {
    this.displayDialog = true
    this.emitDialogStatus(DialogStatus.Edit)
  }

  duplicateDevis() {
    this.displayDialog = true
    this.emitDialogStatus(DialogStatus.Duplicate)
  }

  deleteDevis() {
    this.devisList = this.devisList.filter((devis) => {
              return devis.id != this.selectedDevisItem.id
      })
     this.emitRowDeletedEvent(this.devisList[0])
    // this._devisServiceProxy.deleteDevis(this.selectedDevisItem.id)
    // this._devisServiceProxy.deleteDevis(3).subscribe((res: any) => {
    //   console.log(res);
    //   this.confirmDialogService.deleteConfirm({
    //     acceptCallback: () => {
    //       this.devisList = this.devisList.filter((devis) => {
    //         return devis.reference != this.selectedDevisItem.reference
    //       })
    //       this.emitEventToChild(this.devisList[0])
    //       this.toastService.info({ summary: 'Confirmed', detail: 'You have accepted'});
    //     },
  
    //     rejectCallback: (type: any) => {
    //       switch (type) {
    //         case ConfirmEventType.REJECT:
    //           this.toastService.error({ summary: 'Erreur', detail: 'une erreur s\'est produite lors de la suppression'});
    //           break
    //         case ConfirmEventType.CANCEL:
    //           break
    //       }
    //     }
    //   })
    // })
    
  }

  selectionChange(devisItem: DevisItem) {
    this.selectedDevisItem = devisItem
    this.calculateSummaryTotalHTAndTVA();
    this.emitNotificationSelectedDevisChanged(devisItem);
  }

  calculateSummaryTotalHTAndTVA() {
    this.summaryTotalHT = this.selectedDevisItem.contentItems
      .map((item) => item.total_ht)
      .reduce((accum, current) => accum + current)

      this.summaryTVA = this.selectedDevisItem.contentItems
        .map((item) => (item.total_ht * item.tva) / 100)
        .reduce((accum, current) => accum + current)
    
  }
 
  //#region Api Calls
  updateApiCall(clientId: number, devisStatut: DevisStatutEnum, detail) {
  //  this._devisServiceProxy.updateByStatus(clientId, devisStatut).subscribe((res) => {
  //    if(res) {
  //     this._toastService.info({detail})
  //     //Update list
  //    }
  //  })
  }
  //#endregion
}
