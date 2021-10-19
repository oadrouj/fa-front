import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
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
  DevisStatutEnum
} from '@shared/service-proxies/service-proxies'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import * as moment from 'moment'
import { DateHelper } from '@shared/helpers/DateHelper'
import { ToastService } from '@shared/services/toast.service'
import { Moment } from 'moment'
import { DevisDialogComponent } from './devis-dialog/devis-dialog.component'
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { ConfirmEventType } from 'primeng/api'
import { map } from 'rxjs/operators'
import { TableComponent } from '@app/table/table.component'


@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']

})
export class DevisComponent implements OnInit, AfterViewInit {
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

  
  }

  ngAfterViewInit(){
    // this.tableChild.montantTotalAllDevis.subscribe(res => {
    //   console.log(res)
    //   this.montantTotalAllDevis = res
    // })
    
  }

  //#region Properties
  @ViewChild(DevisDialogComponent, { static: false })
  child: DevisDialogComponent
  @ViewChild(TableComponent, { static: false })
  tableChild: TableComponent
  title = 'Devis'
  imageSrc = 'assets/img/DevisLogo.png'
  primaryColor = 'green'
  secondaryColor = ''
  tableSelectionColor = 'var(--light-green-color)'
  searchText = '' //TODO: rename this variable
  selectedClient: any
  selectedDate: Moment[]
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
      format:(number) => this._referenceService.formatReferenceNumber(number, ReferencePrefix.Devis)
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
            this._toastService.info({ detail: 'Le devis est devient valide' })
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
      reference,
      ReferencePrefix.Devis,
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

  selectionChange(selectionEventObject) {
    console.log(selectionEventObject)
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
        remise: 0
      }
      newDevis.devisItems = newDevis.devisItems.map((item: any) => {
          let total_ht = item.unitPriceHT * item.quantity
          return {
            ...item,
            totalTtc: total_ht + (item.tva * total_ht) / 100,
          }
        })
        newDevis.montantTtc = newDevis.devisItems.map((item) => item.totalTtc)
            .reduce((accum, current) => accum + current) - newDevis.remise
        this.montantTotalAllDevis += newDevis.montantTtc
   
      this.tableChild.tableData = [...this.tableChild.tableData ,{...newDevis}]
      this.tableChild.tableData.sort((a, b) => a.reference < b.reference ? 1 : -1)
     
      this.selectedDevisItem.devisItems.forEach(devisItem => devisItem.date = devisItem.date.toDate())
      this.selectedDevisItem = {
        ...newDevis, 
      }
      this.emitNotificationSelectedDevisChanged({
        ...newDevis
      })

      
    }
    else if (event.crudOperation == 'update') {
      console.log(this.selectedDevisItem.dateEmission)
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

      this.selectedDevisItem = {...this.selectedDevisItem, dateEmission: this.selectedDevisItem.dateEmission.toDate() }
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
      this._devisServiceProxy
        .getAllDevisTotalRecords(0, 0, event.globalFilter, '', '', null), 
      this._devisServiceProxy
        .getAllDevis(event.first , event.rows, event.globalFilter, '', '', null),
      this._devisServiceProxy
       .getAllDevisMontantTotal(event.first , event.rows, event.globalFilter, '', '', null)
    ).pipe(map(([length, res, montantTotalAllDevis]: any) => {
      data = [...res.items]
      data.forEach((devis: any) => {
        devis.devisItems = devis.devisItems.map((item: any) => {
          let total_ht = item.unitPriceHT * item.quantity
          return {
            ...item,
            totalTtc: total_ht + (item.tva * total_ht) / 100,
          }
        })
        devis.statut = moment().isAfter((devis.dateEmission as Moment).add(devis.echeancePaiement, 'days')) 
          ? DevisStatutEnum.Expire : devis.statut
        
        devis.montantTtc = devis.devisItems.map((item) => item.totalTtc)
            .reduce((accum, current) => accum + current) - devis.remise
        
      })
      return {items: data, length, montantTotalAllDevis}
      
    }))
  }
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
          this.tableChild.tableData.forEach((item) => {
            item.id == this.selectedDevisItem.id && (item.statut = devisStatut)
          })
        }
        //Update list
      })
  }
  //#endregion
}
