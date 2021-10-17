import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'
import { DevisItem } from '../../shared/models/DevisItem'
import { DialogStatus } from '../../shared/enums/DialogState.enum'
import {
  GlobalEventsService,
  ModificationStatusEnum,
} from '@shared/globalEventsService'
import { ReferenceService } from '../../shared/services/reference.service'
import { FakeService } from '@shared/services/fake.service'
import {
  ClientForAutoCompleteDto,
  ClientForAutoCompleteDtoListResultDto,
  ClientServiceProxy,
  DevisServiceProxy,
  DevisStatutEnum,
} from '@shared/service-proxies/service-proxies'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import * as moment from 'moment'
import { DateHelper } from '@shared/helpers/DateHelper'
import { ToastService } from '@shared/services/toast.service'
import { Moment } from 'moment'
import { DevisDialogComponent } from './devis-dialog/devis-dialog.component'
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { ConfirmEventType } from 'primeng/api'

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css'],
  // directives: [DevisDialogComponent]
})
export class DevisComponent implements OnInit {
  devisListForTable: any
  constructor(
    private _referenceService: ReferenceService,
    public _fakeService: FakeService,
    private _devisServiceProxy: DevisServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    private _toastService: ToastService,
    private _confirmDialogService: ConfirmDialogService,
    public globalEventsService: GlobalEventsService,
  ) {}

  ngOnInit() {
    this.globalEventsService.announcedThePageChangedColorSubject(
      `var(--${this.primaryColor}-color`,
    )

    // this._devisServiceProxy
    //   .getAllDevis(40, 20, '', '', '', null)
    //   .subscribe((res) => {
    //     this.devisList = res.items
    //     this.selectedDevisItem = this.devisList[0]
    //     this.devisList.forEach((devis: any) => {
    //       devis.devisItems = devis.devisItems.map((item: any) => {
    //         let total_ht = item.unitPriceHT * item.quantity
    //         return {
    //           ...item,
    //           totalTtc: total_ht + (item.tva * total_ht) / 100,
    //         }
    //       })
    //       devis.montantTtc = devis.devisItems.map((item) => item.totalTtc)
    //           .reduce((accum, current) => accum + current) - devis.remise
          
    //       this.montantTTCAllDevis += devis.montantTtc
    //     })
        
    //     this.devisListForTable = this.devisList.map((item) => ({
    //       ...item,
    //       reference: this.devisFormatReferenceNumber(item.reference),
    //     }))

    //     this.calculateSummaryTotalHTAndTVA()
    //     this.emitNotificationSelectedDevisChanged({
    //       ...this.devisList[0],
    //       reference: this.devisList[0].reference
    //     })
    //   })
  }

  //#region Properties
  @ViewChild(DevisDialogComponent, { static: false })
  child: DevisDialogComponent
  title = 'Devis'
  imageSrc = 'assets/img/DevisLogo.png'
  primaryColor = 'green'
  secondaryColor = ''
  tableSelectionColor = 'var(--light-green-color)'
  searchText = '' //TODO: rename this variable
  selectedClient: any
  selectedDate: Moment
  selectedEcheance: number
  selectedMontant: number
  selectedStatut: DevisStatutEnum
  clientSuggestions: ClientForAutoCompleteDto[]
  echeanceOptions = [15, 20, 30]
  statutOptions = [
    { value: DevisStatutEnum.Cree, label: 'Créé' },
    { value: DevisStatutEnum.Valide, label: 'Validé' },
    { value: DevisStatutEnum.Converti, label: 'Converti' },
    { value: DevisStatutEnum.Rejete, label: 'Rejeté' },
    { value: DevisStatutEnum.Expire, label: 'Expiré' },
  ]
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
      field: 'dateEmission',
      type: 'date',
    },
    {
      header: 'ECHEANCE',
      field: 'echeancePaiement',
      type: 'text',
      suffix: 'jours',
    },
    {
      header: 'MONTANT TTC',
      field: 'montantTtc',
      type: 'currency',
    },
    {
      header: 'STATUT',
      field: 'statut',
      type: 'text',
      format: this.formatStatut,
    },
  ]
  DevisContentItemsCols = [
    { header: 'DESCRIPTION', field: 'description', type: 'text', colspan: 2 },
    { header: 'DATE', field: 'date', type: 'date', colspan: 0 },
    { header: 'quantity', field: 'quantity', type: 'text' },
    { header: 'UNITE', field: 'unit', type: 'text' },
    { header: 'PU HT', field: 'unitPriceHT', type: 'currency' },
    { header: 'TVA', field: 'tva', type: 'pourcentage' },
    { header: 'TOTAL TTC', field: 'totalTtc', type: 'currency', colspan: 0 },
  ]
  devisList: any
  statusItems = [
    {
      actualStatus: DevisStatutEnum.Valide,
      label: 'Convertir',
      icon: 'pi pi-check',
      command: () => {
        this.updateApiCall(
          this.selectedDevisItem.id,
          DevisStatutEnum.Converti,
          'Le devis est converti en facture',
        )
      },
    },
    {
      actualStatus: DevisStatutEnum.Valide,
      label: 'Rejeter',
      icon: 'pi pi-times',
      command: () => {
        this.updateApiCall(
          this.selectedDevisItem.id,
          DevisStatutEnum.Rejete,
          'Le devis est rejeté',
        )
      },
    },
    {
      actualStatus: DevisStatutEnum.Cree,
      label: 'Valider',
      icon: 'pi pi-check',
      command: () => {
        this.emitDialogStatus(DialogStatus.Edit)
        this.child.validateDevis(true).subscribe((res) => {
          if (res.success) {
            this.selectedDevisItem = {
              ...this.selectedDevisItem,
              statut: res.result.statut,
            }
            this.devisListForTable.find(
              (item) => item.id == this.selectedDevisItem.id,
            ).statut = res.result.statut
          }
        })
      },
    },
  ]
  displayDialog = false
  dialogState!: DialogStatus
  autoCompleteText = ''
  suggestions = []
  dateEmission = new Date()
  echeancePayementOptions = [30, 60, 90]
  echeancePayementSelected = this.echeancePayementOptions[0] || ''
  selectedDevisItem!: any
  summaryTotalHT: number
  summaryTVA: number
  summaryTotalTTC: number
  montantTTCAllDevis: number = 0
  Currency = 'MAD'

  //#endregion

  getStatusOptions() {
    let actualStatus = this.selectedDevisItem && this.selectedDevisItem.statut
    return this.statusItems.filter((item) => item.actualStatus == actualStatus)
  }

  formatStatut(statut?: DevisStatutEnum) {
  
    switch (statut) {
      case DevisStatutEnum.Cree:
        return 'Brouillon'
      case DevisStatutEnum.Valide:
        return 'Validé'
      case DevisStatutEnum.Converti:
        return 'Convérti'
      case DevisStatutEnum.Rejete:
        return 'Rejeté'
      case DevisStatutEnum.Expire:
        return 'Expiré'
      case DevisStatutEnum.Undefined:
        return ''
    }
  }

  getDateEcheance(dateEmission: Date, echeance: number) {
    return moment(dateEmission).add(echeance, 'days').toDate()
  }

  devisFormatReferenceNumber(reference: number) {
    return this._referenceService.formatReferenceNumber(
      ReferencePrefix.Devis,
      reference,
    )
  }

  clientAutoCompleteSearch(event: any) {
    setTimeout(() => {
      this._clientServiceProxy
        .getClientForAutoComplete(event.query)
        .subscribe((res: ClientForAutoCompleteDtoListResultDto) => {
          this.clientSuggestions = res.items
        })
    }, 500)
  }

  //#region events
  filterSubject = new Subject<any>()
  emitFilterEvent(filterType: string, value: any) {
    if (filterType == 'filterByInput') {
      setTimeout(() => {
        this.filterSubject.next({
          type: 'filterByInput',
          value,
        })
      }, 500)
    } else if (filterType == 'filterByButton') {
      this.filterSubject.next({
        type: 'filterByButton',
        value: {
          client: (this.selectedClient && this.selectedClient.id) ?? -1,
          date_emission: this.selectedDate ?? moment.unix(0),
          echeance: this.selectedEcheance ?? -1,
          statut: this.selectedStatut ?? -1,
          montantTtc: this.selectedMontant ?? -1,
        },
      })
    }
  }

  //TODO: delete this event code
  validateDevisSubject = new BehaviorSubject<ModificationStatusEnum>(
    ModificationStatusEnum.No_Modification,
  )
  validateDevis$ = this.validateDevisSubject.asObservable()
  emitValidateDevisEvent(value: ModificationStatusEnum) {
    this.validateDevisSubject.next(value)
  }

  dialogStatusEvent = new Subject<DialogStatus>()
  emitDialogStatus(dialogStatus: DialogStatus) {
    this.dialogStatusEvent.next(dialogStatus)
  }

  rowDeletedSubject = new Subject<DevisItem>()
  emitRowDeletedEvent(deviItem: DevisItem) {
    this.rowDeletedSubject.next(deviItem)
  }

  notifySelectedDevisChanged = new Subject<DevisItem>()
  emitNotificationSelectedDevisChanged(deviItem: DevisItem) {
    this.notifySelectedDevisChanged.next(deviItem)
  }
  //#endregion

  newDevis() {
    this.displayDialog = true
    this.emitDialogStatus(DialogStatus.New)
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
    this._confirmDialogService.deleteConfirm({
      acceptCallback: () => {
        this._devisServiceProxy
          .deleteDevis(this.selectedDevisItem.id)
          .subscribe((res) => {
            if (res) {
              this.devisListForTable = this.devisListForTable.filter(
                (devis) => devis.id != this.selectedDevisItem.id,
              )
              this.emitRowDeletedEvent(this.devisListForTable[0])
              this._toastService.info({
                summary: 'Confirmed',
                detail: 'You have accepted',
              })
            }
          })
      },

      rejectCallback: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this._toastService.error({
              summary: 'Erreur',
              detail: "une erreur s'est produite lors de la suppression",
            })
            break
          case ConfirmEventType.CANCEL:
            break
        }
      },
    })
  }

  selectionChange(selectionEventObject) {
    if (selectionEventObject.type == 'selectionChanged') {
      this.selectedDevisItem = this.devisList.find(
        (item) => item.id == selectionEventObject.result,
      )
    } else if (selectionEventObject.type == 'delete') {
      this.selectedDevisItem = selectionEventObject.result
    }
    this.calculateSummaryTotalHTAndTVA()
    this.emitNotificationSelectedDevisChanged(this.selectedDevisItem)
  }

  calculateSummaryTotalHTAndTVA() {
    if(this.selectedDevisItem){
      this.summaryTotalHT = (this.selectedDevisItem as any).devisItems
      .map((item) => item.unitPriceHT * item.quantity)
      .reduce((accum, current) => accum + current)
    this.summaryTVA = this.selectedDevisItem.devisItems
      .map((item) => ((item.unitPriceHT * item.quantity) * item.tva) / 100)
      .reduce((accum, current) => accum + current)
    }
  }

  crudOperationTreatment(event) {

    if (event.crudOperation == 'create') {
      let newDevis = {
        ...event.result, 
        montantTtc: 0
      }
      newDevis.montantTtc =  newDevis.devisItems.map((item) => item.totalTtc)
      .reduce((accum, current) => accum + current) -  this.selectedDevisItem.remise
   
      this.devisListForTable = [...this.devisListForTable, {...newDevis, 
        reference: this.devisFormatReferenceNumber(newDevis.reference), 
      }]

      this.devisListForTable.sort((a, b) => a.reference < b.reference ? 1 : -1)
      this.emitNotificationSelectedDevisChanged({
        ...newDevis
      })
      
      this.selectedDevisItem.montantTtc = this.selectedDevisItem.devisItems.map((item) => item.totalTtc)
      .reduce((accum, current) => accum + current) - this.selectedDevisItem.remise
         this.montantTTCAllDevis +=  this.selectedDevisItem.montantTtc

    }
    else if (event.crudOperation == 'update') {
      this.selectedDevisItem = { 
        ...event.result,
        
       }
       
      //Calculate total montant
      this.selectedDevisItem.devisItems =  this.selectedDevisItem.devisItems.map((item: any) => {
        let total_ht = item.unitPriceHT * item.quantity
        return {
          ...item,
          totalTtc: total_ht + (item.tva * total_ht) / 100,
        }
      })
      this.selectedDevisItem.montantTtc =  this.selectedDevisItem.devisItems.map((item) => item.totalTtc)
          .reduce((accum, current) => accum + current) -  this.selectedDevisItem.remise
      this.montantTTCAllDevis +=  this.selectedDevisItem.montantTtc
      this.selectedDevisItem = {...this.selectedDevisItem}
      //

      this.child.selectedDevisItem = { ...this.selectedDevisItem  }
      this.devisListForTable = this.devisListForTable.map((item) =>
        item.id == this.selectedDevisItem.id ? 
          (item = { ...this.selectedDevisItem ,
             reference: this.devisFormatReferenceNumber(this.selectedDevisItem .reference)}) 
          : item,
      )
      
    
    }
  }

  //#region Api Calls
  updateApiCall(devisId: number, devisStatut: DevisStatutEnum, detail) {
    this._devisServiceProxy
      .changeDevisStatut(devisId, devisStatut)
      .subscribe((res) => {
        if (res) {
          this._toastService.info({ detail })
          this.selectedDevisItem = {
            ...this.selectedDevisItem,
            statut: devisStatut,
          }
          this.devisListForTable.forEach((item) => {
            item.id == this.selectedDevisItem.id && (item.statut = devisStatut)
          })
        }
        //Update list
      })
  }
  //#endregion
}
