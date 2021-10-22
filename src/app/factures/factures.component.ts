import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { BehaviorSubject, Subject, zip } from 'rxjs'
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
  FactureStatutEnum,
  FactureServiceProxy,
} from '@shared/service-proxies/service-proxies'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import * as moment from 'moment'
import { DateHelper } from '@shared/helpers/DateHelper'
import { ToastService } from '@shared/services/toast.service'
import { Moment } from 'moment'
import { FacturesDialogComponent } from './factures-dialog/factures-dialog.component'
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { ConfirmEventType } from 'primeng/api'
import { map } from 'rxjs/operators'
import { TableComponent } from '@app/table/table.component'
import { ConvertDevisToFactureService } from '@shared/services/ConvertDevisToFacture.service'
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { FacturePayementComponent } from './facture-payement/facture-payement.component'
import { AppConsts } from '@shared/AppConsts'


@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css'],
  providers: [DialogService]

})
export class FacturesComponent implements OnInit, AfterViewInit, OnDestroy  {
  constructor(
    private _referenceService: ReferenceService,
    public _fakeService: FakeService,
    private _factureServiceProxy: FactureServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    private _toastService: ToastService,
    private _confirmDialogService: ConfirmDialogService,
    public globalEventsService: GlobalEventsService,
    public dialogService: DialogService,
    private _convertDevisToFactureService: ConvertDevisToFactureService,
  ) {}

  ngOnInit() {
    this.globalEventsService.announcedThePageChangedColorSubject(
      `var(--${this.primaryColor}-color`,
    )
    
  }

  ngAfterViewInit(){
   
  }

  ngOnDestroy(){
    if(this.ref)
      this.ref.close();
  }

  //#region Properties
  @ViewChild(FacturesDialogComponent, { static: false })
  child: FacturesDialogComponent
  @ViewChild(TableComponent, { static: false })
  tableChild: TableComponent
  title = 'Facture'
  imageSrc = 'assets/img/FacturesLogo.png'
  primaryColor = 'orange'
  secondaryColor = ''
  tableSelectionColor = 'var(--light-orange-color)'
  searchText = '' //TODO: rename this variable
  selectedClient: any
  selectedDate: Moment[]
  selectedEcheance: number
  selectedMontant: number
  selectedStatut: FactureStatutEnum
  clientSuggestions: ClientForAutoCompleteDto[]
  echeanceOptions = [15, 20, 30]
  statutOptions = [
    { value: FactureStatutEnum.Cree, label: 'Créé' },
    { value: FactureStatutEnum.Valide, label: 'Validé' },
    { value: FactureStatutEnum.Regle, label: 'Réglé' },
    { value: FactureStatutEnum.ReglePartiellemt, label: 'Réglé Partiellement' },
    { value: FactureStatutEnum.PaiementAttente, label: 'Paiement en attente' },
    { value: FactureStatutEnum.PaiementRetard, label: 'Paiement en retard' },
  ]
  cols = [
    {
      header: 'REFERENCE',
      field: 'reference',
      type: 'text',
      format:(number) => this._referenceService.formatReferenceNumber(number, ReferencePrefix.Facture)
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
      format: (date) => date._i ? new Date(date._i) : new Date(date._d)
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
  statusItems = [
    {
      actualStatus: FactureStatutEnum.PaiementAttente,
      label: 'Régler',
      icon: 'pi pi-check',
      command: () => {
        // this.updateApiCall(
        //   this.selectedDevisItem.id,
        //   FactureStatutEnum.Regle,
        //   'La facture est réglée',
        // )
        this.showFacturePayementDialog()
      },
    },
   
    {
      actualStatus: FactureStatutEnum.Cree,
      label: 'Valider',
      icon: 'pi pi-check',
      command: () => {
        this.emitDialogStatus(DialogStatus.Edit, 'facture')
        this.child.validateDevis(true).subscribe((res) => {
          if (res.success) {
            this._toastService.info({ detail: 'La facture est devient valide' })
            this.selectedDevisItem = {
              ...this.selectedDevisItem,
              statut: res.result.statut,
            }
            this.tableChild.tableData.find(
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
  montantTotalAllDevis = 0
  Currency = 'MAD'
  ref: DynamicDialogRef;

  //#endregion

  getStatusOptions() {
    let actualStatus = this.selectedDevisItem && this.selectedDevisItem.statut
    return this.statusItems.filter((item) => item.actualStatus == actualStatus)
  }

  formatStatut(statut?: FactureStatutEnum) {
    switch (statut) {
      case FactureStatutEnum.Cree:
        return 'Brouillon'
      case FactureStatutEnum.Valide:
        return 'Validé'
      case FactureStatutEnum.Regle:
        return 'Réglé'
      case FactureStatutEnum.ReglePartiellemt:
        return 'Réglé Partiellement'
      case FactureStatutEnum.PaiementAttente:
        return 'Paiement en attente'
      case FactureStatutEnum.PaiementRetard:
        return 'Paiement en'
      default :
        return ''
    }
  }

  getDateEcheance(dateEmission: Date, echeance: number) {
    return moment(dateEmission).add(echeance, 'days').toDate()
  }

  factureFormatReferenceNumber(reference: number) {
    return this._referenceService.formatReferenceNumber(
      reference,
      ReferencePrefix.Facture,
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
          dateEmission: this.selectedDate ?? moment.unix(0),
          echeancePaiement: this.selectedEcheance ?? -1,
          statut: this.selectedStatut ?? -1,
          montantTtc: this.selectedMontant ?? -1,
        },
      })
    }
  }

  dialogStatusEvent = new Subject<{statut: DialogStatus, dialogComponent}>()
  emitDialogStatus(dialogStatus: DialogStatus, dialogComponent) {
    this.dialogStatusEvent.next({statut: dialogStatus, dialogComponent})
  }

  rowDeletedSubject = new Subject<any>()
  emitRowDeletedEvent(deviItem: any) {
    this.rowDeletedSubject.next(deviItem)
  }

  notifySelectedDevisChanged = new Subject<any>()
  emitNotificationSelectedDevisChanged(deviItem: any) {
    this.notifySelectedDevisChanged.next(deviItem)
  }
  //#endregion

  newDevis() {
    this.displayDialog = true
    this.emitDialogStatus(DialogStatus.New, 'facture')
  }

  editDevis() {
    this.displayDialog = true
    this.emitDialogStatus(DialogStatus.Edit, 'facture')
  }

  duplicateDevis() {
    this.displayDialog = true
    this.emitDialogStatus(DialogStatus.Duplicate, 'facture')
  }

  deleteDevis() {
    this._confirmDialogService.deleteConfirm({
      acceptCallback: () => {
        this._factureServiceProxy
          .deleteFacture(this.selectedDevisItem.id)
          .subscribe((res) => {
            if (res) {
              this.tableChild.tableData =  this.tableChild.tableData.filter(
                (devis) => !devis || (devis.id != this.selectedDevisItem.id) 
                
              )
              this.montantTotalAllDevis -= this.selectedDevisItem.montantTtc
              this.emitRowDeletedEvent( this.tableChild.tableData[0])
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

  downloadFacture(){
    window.open(AppConsts.remoteServiceBaseUrl + "/FileLoader/GetFacture/0", "_blank");
    
  }

  selectionChange(selectionEventObject) {
    if (selectionEventObject.type == 'selectionChanged') {
      this.selectedDevisItem = selectionEventObject.result
      
    } else if (selectionEventObject.type == 'delete') {
      this.selectedDevisItem = selectionEventObject.result
    }
    this.calculateSummaryTotalHTAndTVA()
    this.emitNotificationSelectedDevisChanged({
      ...this.selectedDevisItem,
          
          dateEmission : this.selectedDevisItem.dateEmission ?
            new Date( this.selectedDevisItem.dateEmission._i) : new Date( this.selectedDevisItem.dateEmission._d)
    })
    this.montantTotalAllDevis = this.tableChild.montantTotalAllDevis
  }

  calculateSummaryTotalHTAndTVA() {
    if(this.selectedDevisItem){
      this.summaryTotalHT = (this.selectedDevisItem as any).factureItems
      .map((item) => item.unitPriceHT * item.quantity)
      .reduce((accum, current) => accum + current)
    this.summaryTVA = this.selectedDevisItem.factureItems
      .map((item) => ((item.unitPriceHT * item.quantity) * item.tva) / 100)
      .reduce((accum, current) => accum + current)
    }
  }

  crudOperationTreatment(event) {
    if (event.crudOperation == 'create') {
      let newDevis = {
        ...event.result, 
        remise: 0
      }
      newDevis.factureItems = newDevis.factureItems.map((item: any) => {
          let total_ht = item.unitPriceHT * item.quantity
          return {
            ...item,
            totalTtc: total_ht + (item.tva * total_ht) / 100,
          }
        })
        newDevis.montantTtc = newDevis.factureItems.map((item) => item.totalTtc)
            .reduce((accum, current) => accum + current) - newDevis.remise
        this.montantTotalAllDevis += newDevis.montantTtc
   
      this.tableChild.tableData = [...this.tableChild.tableData ,{...newDevis}]
      this.tableChild.tableData.sort((a, b) => a.reference < b.reference ? 1 : -1)
        
      this.selectedDevisItem = {
        ...newDevis,
        dateEmission: newDevis.dateEmission.toDate()
      }
      this.emitNotificationSelectedDevisChanged({
        ...this.selectedDevisItem
      })

    }

    else if (event.crudOperation == 'update') {
      this.selectedDevisItem = { 
        ...event.result,
        
       }
       
      //Calculate total montant
      this.selectedDevisItem.factureItems =  this.selectedDevisItem.factureItems.map((item: any) => {
        let total_ht = item.unitPriceHT * item.quantity
        return {
          ...item,
          totalTtc: total_ht + (item.tva * total_ht) / 100,
        }
      })

      this.selectedDevisItem.montantTtc =  this.selectedDevisItem.factureItems.map((item) => item.totalTtc)
          .reduce((accum, current) => accum + current) -  this.selectedDevisItem.remise

      this.selectedDevisItem = {...this.selectedDevisItem, dateEmission: (this.selectedDevisItem.dateEmission as Moment).toDate() }
      this.child.selectedDevisItem = { ...this.selectedDevisItem  }
      let index = this.tableChild.tableData.findIndex(item =>  item.id == this.selectedDevisItem.id)
      this.tableChild.tableData[index] = { ...this.selectedDevisItem, dateEmission: moment(this.selectedDevisItem.dateEmission) }
      this.tableChild.tableData = [... this.tableChild.tableData]
      
    }

    this.calculateSummaryTotalHTAndTVA()
  }

  //#region Api Calls
  getListDevisApi$(event, data){
    return zip(
      this._factureServiceProxy
        .getAllFactureTotalRecords(0, 0, event.globalFilter, '', '', null), 
      this._factureServiceProxy
        .getAllFacture(event.first , event.rows, event.globalFilter, event.sortField, event.sortOrder, null),
      this._factureServiceProxy
       .getAllFactureMontantTotal(event.first , event.rows, event.globalFilter, '', '', null)
    ).pipe(map(([length, res, montantTotalAllDevis]: any) => {
      data = [...res.items]
      data.forEach((devis: any) => {
        devis.factureItems = devis.factureItems.map((item: any) => {
          let total_ht = item.unitPriceHT * item.quantity
          return {
            ...item,
            totalTtc: total_ht + (item.tva * total_ht) / 100,
          }
        })

        devis.statut = devis.statut == FactureStatutEnum.Valide && 
          moment().isAfter((devis.dateEmission as Moment).add(devis.echeancePaiement, 'days')) 
          ? FactureStatutEnum.PaiementRetard : FactureStatutEnum.PaiementAttente
        
        devis.montantTtc = devis.factureItems.map((item) => item.totalTtc)
            .reduce((accum, current) => accum + current) - devis.remise
        
      })
      return {items: data, length, montantTotalAllDevis}
      
    }))
  }
  updateApiCall(devisId: number, devisStatut: FactureStatutEnum, detail) {
    this._factureServiceProxy
      .changeFactureStatut(devisId, devisStatut)
      .subscribe((res) => {
        if (res) { 
          this._toastService.info({ detail })
          this.selectedDevisItem = {
            ...this.selectedDevisItem,
            statut: devisStatut,
          }
          this.tableChild.tableData.forEach((item) => {
            item.id == this.selectedDevisItem.id && (item.statut = devisStatut)
          })
        }
        //Update list
      })
  }
  //#endregion

  getSelectedItemMontantTtc(){
    return this.selectedDevisItem.factureItems.map((item) => item.totalTtc)
    .reduce((accum, current) => accum + current) - this.selectedDevisItem.remise
  }

  showFacturePayementDialog(){
    this.ref = this.dialogService.open(FacturePayementComponent, {
      data: {
        reference: this.selectedDevisItem.reference
      },
      header: 'Réler le payement',
      width: '35%',
      showHeader: false,
      contentStyle: {
        "height": "380px", 
        "overflow": "auto", 
        "padding": "0",
        "border-radius": "20px"
      },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((result) => {
      if(result){
        if(result.montant == this.selectedDevisItem.montantTtc) {
          this._toastService.info({detail: 'La facture est réglée'})
          //Api call (id: this.selectedFactureItem.id, statut)
        }
        else if(result.montant <= this.selectedDevisItem.montantTtc) {
          this._toastService.info({detail: 'La facture est partiellement réglée'})
          //Api call (id: this.selectedFactureItem.id, statut)
        }
        //if result.montant >= this.selectedDevisItem.montantTtc
      }
    })
  }
}
