import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { BehaviorSubject, Subject, zip } from 'rxjs'
import { DevisItem } from '../../shared/models/DevisItem'
import { DialogStatus } from '../../shared/enums/DialogState.enum'
import {
  GlobalEventsService,
  ModificationStatusEnum,
} from '@shared/globalEventsService'
import { FormatService } from '../../shared/services/format.service'
import { FakeService } from '@shared/services/fake.service'
import {
  ClientForAutoCompleteDto,
  ClientForAutoCompleteDtoListResultDto,
  ClientServiceProxy,
  DevisItemDto,
  DevisServiceProxy,
  DevisStatutEnum,
  FileApiServiceProxy,
} from '@shared/service-proxies/service-proxies'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import * as moment from 'moment'
import { DateHelper } from '@shared/helpers/DateHelper'
import { ToastService } from '@shared/services/toast.service'
import { Moment } from 'moment'
import { DevisDialogComponent } from './devis-dialog/devis-dialog.component'
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { ConfirmEventType, LazyLoadEvent } from 'primeng/api'
import { map } from 'rxjs/operators'
import { TableComponent } from '@app/table/table.component'
import { ConvertDevisToFactureService } from '@shared/services/ConvertDevisToFacture.service'
import * as printJS from 'print-js'
import { FacturesDialogComponent } from '@app/factures/factures-dialog/factures-dialog.component'
import { AppConsts } from '@shared/AppConsts'
import { AppSessionService } from '@shared/session/app-session.service'

import jsPDF from 'jspdf'

import html2canvas from 'html2canvas'
import jspdf from 'jspdf'
import domtoimage from 'dom-to-image'
import { ItemPreviewComponent } from '@shared/components/item-preview/item-preview.component'
import { DomSanitizer } from '@angular/platform-browser'
import { EstimateInvoiceStatusStateService } from '@shared/services/estimate-invoice-status-state.service'

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css'],
  providers: [DialogService, EstimateInvoiceStatusStateService],
})
export class DevisComponent implements OnInit, AfterViewInit {
  remiseAmount: number
  @ViewChild('factureDialog', {})
  sample: DynamicDialogRef

  @ViewChild('prv', { static: true }) template: ItemPreviewComponent

  sampleComponent = FacturesDialogComponent
  logoSrc: string
  constructor(
    private _formatService: FormatService,
    public _fakeService: FakeService,
    private _devisServiceProxy: DevisServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    private _toastService: ToastService,
    private _confirmDialogService: ConfirmDialogService,
    public dialogService: DialogService,
    public globalEventsService: GlobalEventsService,
    private _sessionService: AppSessionService,
    private _fileApiServiceProxy: FileApiServiceProxy,
    private _sanitizer: DomSanitizer,
    private _estimateInvoiceStatusStateService: EstimateInvoiceStatusStateService,
  ) {}

  favIcon: HTMLLinkElement = document.querySelector('#favIcon')
  ngOnInit() {
    this.globalEventsService.announcedThePageChangedColorSubject(
      `var(--${this.primaryColor}-color`,
    )

    this.favIcon.href = 'assets/img/DevisLogo.png'

    this._fileApiServiceProxy.download().subscribe((res) => {
      let objectURL = this._sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(res.data),
      )
      this.logoSrc = objectURL as string
    })
  }

  ngAfterViewInit() {
    if (window.history.state.clientId) {
      this.newDevis(window.history.state.clientId)
    }

    this._estimateInvoiceStatusStateService.statusModifier$.subscribe((res) => {
      console.log('yo', res)
      if (res.target == 'Estimate') {
        switch (res.statusAction) {
          case 'Validate':
            this.emitDialogStatus(DialogStatus.Edit, 'devis')
            this.child.validateDevis(true).subscribe((res) => {
              if (res.success) {
                this._toastService.success({
                  detail: 'Le devis est devient valide',
                })
                this.selectedDevisItem = {
                  ...this.selectedDevisItem,
                  statut: res.result.statut,
                }
                this.tableChild.tableData.find(
                  (item) => item.id == this.selectedDevisItem.id,
                ).statut = res.result.statut
              }
            })
            break

          case 'Convert':
            this.showFactureDialog()
            this.emitNotificationSelectedDevisChanged({
              ...this.selectedDevisItem,
              factureItems: this.selectedDevisItem.factureItems,
              dateEmission:
                this.selectedDevisItem.dateEmission instanceof Date
                  ? this.selectedDevisItem.dateEmission
                  : moment(this.selectedDevisItem.dateEmission).toDate(),
            })
            this.emitDialogStatus(DialogStatus.New, 'facture', true)
            break

          case 'Reject':
            this.updateApiCall(
              this.selectedDevisItem.id,
              DevisStatutEnum.Rejete,
              'Le devis est rejeté',
            )
            break
        }
      }
    })
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
  searchText = ''
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
      format: (date) => (date._i ? new Date(date._i) : new Date(date._d)),
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
      type: 'estimate-invoice-status-component',
      format: this.formatStatut,
    },
  ]

  //TODO: remove this property
  DevisContentItemsCols = [
    { header: 'DESIGNATION', field: 'designation', type: 'text', colspan: 2 },
    { header: 'DATE', field: 'date', type: 'date', colspan: 0 },
    { header: 'QTÉ', field: 'quantity', type: 'text' },
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
        console.log('selected', this.selectedDevisItem)
        this.showFactureDialog()
        this.emitNotificationSelectedDevisChanged({
          ...this.selectedDevisItem,
          factureItems: this.selectedDevisItem.factureItems,
          dateEmission:
            this.selectedDevisItem.dateEmission instanceof Date
              ? this.selectedDevisItem.dateEmission
              : moment(this.selectedDevisItem.dateEmission).toDate(),
        })
        this.emitDialogStatus(DialogStatus.New, 'facture', true)
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
        this.emitDialogStatus(DialogStatus.Edit, 'devis')
        this.child.validateDevis(true).subscribe((res) => {
          console.log(res)
          if (res.success) {
            this._toastService.success({
              detail: 'Le devis est devient valide',
            })
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
  summaryTotalHT = 0
  summaryTVA = 0
  summaryTotalTTC = 0
  montantTotalAllDevis = 0

  //#endregion

  emitDateFilterEvent(event){
    if(this.selectedDate.every(x => x != null))
      this.emitFilterEvent('filterByButton', null)
  }

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
        return ' '
    }
  }

  getDateEcheance(dateEmission: Date, echeance: number) {
    return moment(dateEmission).add(echeance, 'days').toDate()
  }

  getUserName = () => this._sessionService.user.userName

  devisFormatReferenceNumber(reference: number, customPrefix) {
    return this._formatService.formatReferenceNumber(
      reference,
      customPrefix ? customPrefix : ReferencePrefix.Devis,
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

  resetFilterFields() {
    this.selectedClient = null
    this.selectedDate = null
    this.selectedEcheance = null
    this.selectedMontant = null
    this.selectedStatut = null

    this.emitFilterEvent('filterByButton', null)
  }

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
          client: this.selectedClient && this.selectedClient.id,
          dateEmission: this.selectedDate,
          echeancePaiement: this.selectedEcheance,
          statut: this.selectedStatut,
          montantTtc: this.selectedMontant,
        },
      })
    }
  }

  dialogStatusEvent = new Subject<{
    statut: DialogStatus
    dialogComponent
    isConvertedDevis
  }>()
  emitDialogStatus(
    dialogStatus: DialogStatus,
    dialogComponent,
    isConvertedDevis?,
  ) {
    this.dialogStatusEvent.next({
      statut: dialogStatus,
      dialogComponent,
      isConvertedDevis,
    })
  }

  rowDeletedSubject = new Subject<DevisItem>()
  emitRowDeletedEvent(deviItem: DevisItem) {
    this.rowDeletedSubject.next(deviItem)
  }

  notifySelectedDevisChanged = new Subject<DevisItem>()
  emitNotificationSelectedDevisChanged(devisItem: DevisItem) {
    this.notifySelectedDevisChanged.next(devisItem)
  }

  newDevis(clientId?) {
    this.displayDialog = true
    clientId && (this.child.selectedClientId = clientId)
    this.emitDialogStatus(DialogStatus.New, 'devis')
  }

  editDevis() {
    this.displayDialog = true
    this.emitDialogStatus(DialogStatus.Edit, 'devis')
  }

  duplicateDevis() {
    this.displayDialog = true
    this.emitDialogStatus(DialogStatus.Duplicate, 'devis')
  }

  deleteDevis() {
    this._confirmDialogService.deleteConfirm({
      acceptCallback: () => {
        this._devisServiceProxy
          .deleteDevis(this.selectedDevisItem.id)
          .subscribe((res) => {
            if (res) {
              this.tableChild.tableData = this.tableChild.tableData.filter(
                (devis) => !devis || devis.id != this.selectedDevisItem.id,
              )
              this.calculateTotalMonatant()
              this.summaryTotalHT = 0
              this.summaryTVA = 0

              // this.montantTotalAllDevis -= this.selectedDevisItem.montantTtc
              this.selectedDevisItem = null
              this.emitRowDeletedEvent(this.tableChild.tableData[0])
              this._toastService.info({
                summary: 'Opération réussie',
                detail: 'Le devis est supprimé avec succès',
              })
            }
          })
      },

      rejectCallback: (type: any) => {
        // switch (type) {
        //   case ConfirmEventType.REJECT:
        //     this._toastService.error({
        //       summary: 'Erreur',
        //       detail: "Une erreur s'est produite lors de la suppression",
        //     })
        //     break
        //   case ConfirmEventType.CANCEL:
        //     break
        // }
      },
    })

    let element = document.body.querySelector('.cd') as HTMLElement
    element.style.display = 'none'

    // let element2 = document.body.querySelector('#cdDevis') as HTMLElement
    // element2.style.display = 'none'
  }

  firstTimeCharged = true
  selectionChange(selectionEventObject) {
    if (
      selectionEventObject.type == 'selectionChanged' ||
      selectionEventObject.type == 'firstSelectionChanged'
    ) {
      this.selectedDevisItem = selectionEventObject.result
    } else if (selectionEventObject.type == 'delete') {
      this.selectedDevisItem = selectionEventObject.result
    }
    this.calculateSummaryTotalHTAndTVA()
    this.emitNotificationSelectedDevisChanged({
      ...this.selectedDevisItem,
      dateEmission: new Date(this.selectedDevisItem.dateEmission._i),
    })
    this.firstTimeCharged &&
      (this.montantTotalAllDevis = this.tableChild.montantTotalAllDevis)
    this.firstTimeCharged = false
  }

  onDialogClose() {
    this.displayDialog = false
    document.body.style.overflow = 'auto'
    this.calculateTotalMonatant()
  }

  calculateSummaryTotalHTAndTVA() {
    if (this.selectedDevisItem) {
      this.summaryTotalHT = (this.selectedDevisItem as any).devisItems
        .map((item) => item.unitPriceHT * item.quantity)
        .reduce((accum, current) => accum + current)
      this.summaryTVA = this.selectedDevisItem.devisItems
        .map((item) => (item.unitPriceHT * item.quantity * item.tva) / 100)
        .reduce((accum, current) => accum + current)

      this.remiseAmount = this.calculateRemise(
        this.selectedDevisItem.remise,
        this.summaryTotalHT,
      )
    }
  }

  calculateTotalMonatant() {
    this.montantTotalAllDevis = 0
    this.tableChild.tableData.forEach((item) => {
      if (item) {
        let totalHt = item.devisItems
          .map((item) => item.unitPriceHT * item.quantity)
          .reduce((accum, current) => accum + current)

        this.montantTotalAllDevis +=
          item.devisItems
            .map((item) => item.totalTtc)
            .reduce((accum, current) => accum + current) -
          (item.remise * totalHt) / 100
      }
    })
  }

  calculateRemise(remise, totalHT) {
    return (totalHT * remise) / 100
  }

  crudOperationTreatment(event) {
    if (event.crudOperation == 'create') {
      this.tableChild.loadTableLazy()

      //Todo: remove this code
      // let newDevis = {
      //   ...event.result,
      //   client: {
      //     ...event.result.client,
      //     nom: event.result.client.nom
      //       ? event.result.client.nom
      //       : event.result.client.raisonSociale,
      //   },
      // }
      // newDevis.devisItems = newDevis.devisItems.map((item: any) => {
      //   let total_ht = item.unitPriceHT * item.quantity
      //   return {
      //     ...item,
      //     totalTtc: total_ht + (item.tva * total_ht) / 100,
      //   }
      // })

      // let remiseAmount =
      //   (newDevis.devisItems
      //     .map((item) => item.unitPriceHT * item.quantity)
      //     .reduce((accum, current) => accum + current) *
      //     newDevis.remise) /
      //   100

      // newDevis.montantTtc =
      //   newDevis.devisItems
      //     .map((item) => item.totalTtc)
      //     .reduce((accum, current) => accum + current) - remiseAmount
      // this.montantTotalAllDevis += newDevis.montantTtc

      // this.tableChild.totalRecords += 1

      // this.tableChild.tableData = [
      //   ...this.tableChild.tableData,
      //   { ...newDevis },
      // ]

      // this.tableChild.tableData = [...this.tableChild.tableData]

      // this.tableChild.tableData.sort((a, b) =>
      //   a.echeancePaiement < b.echeancePaiement ? 1 : -1,
      // )

      // this.selectedDevisItem &&
      //   this.selectedDevisItem.devisItems.forEach(
      //     (devisItem) => (devisItem.date = devisItem.date.toDate()),
      //   )
      // this.selectedDevisItem = {
      //   ...newDevis,
      //   dateEmission: newDevis.dateEmission.toDate(),
      // }
      // this.emitNotificationSelectedDevisChanged({
      //   ...this.selectedDevisItem,
      // })
    } else if (event.crudOperation == 'update') {
      this.selectedDevisItem = {
        ...event.result,
        client: {
          ...this.selectedDevisItem.client,
          nom: event.result.client.nom
            ? event.result.client.nom
            : event.result.client.raisonSociale,
        },
      }

      //Calculate total montant
      this.selectedDevisItem.devisItems = this.selectedDevisItem.devisItems.map(
        (item: any) => {
          let total_ht = item.unitPriceHT * item.quantity
          return { ...item, totalTtc: total_ht + (item.tva * total_ht) / 100 }
        },
      )

      let remiseAmount =
        (this.selectedDevisItem.devisItems
          .map((item) => item.unitPriceHT * item.quantity)
          .reduce((accum, current) => accum + current) *
          this.selectedDevisItem.remise) /
        100

      this.selectedDevisItem.montantTtc =
        this.selectedDevisItem.devisItems
          .map((item) => item.totalTtc)
          .reduce((accum, current) => accum + current) - remiseAmount

      this.selectedDevisItem = {
        ...this.selectedDevisItem,
        dateEmission: this.selectedDevisItem.dateEmission.toDate(),
      }

      this.child.selectedDevisItem = { ...this.selectedDevisItem }
      let index = this.tableChild.tableData.findIndex(
        (item) => item.id == this.selectedDevisItem.id,
      )
      this.tableChild.tableData[index] = {
        ...this.selectedDevisItem,
        dateEmission: moment(this.selectedDevisItem.dateEmission),
      }
      this.tableChild.tableData = [...this.tableChild.tableData]
    }

    this.calculateSummaryTotalHTAndTVA()
  }

  //#region Api Calls
  getListDevisApi$(event) {
    let clientFilter,
      dateEmissionFilter,
      echeancePaiementFilter,
      montantTtcFilter,
      statutFilter
    if (event.filters) {
      clientFilter = event.filters.client && event.filters.client.value
      dateEmissionFilter =
        event.filters.dateEmission && event.filters.dateEmission.value
      echeancePaiementFilter =
        event.filters.echeancePaiement && event.filters.echeancePaiement.value
      montantTtcFilter =
        event.filters.montantTtc && event.filters.montantTtc.value
      statutFilter = event.filters.statut && event.filters.statut.value
    }

    let shouldReturnExpiredEstimates: boolean
    
    if(statutFilter == DevisStatutEnum.Expire){
      statutFilter = DevisStatutEnum.Cree
      shouldReturnExpiredEstimates = true
    }

    return zip(
      this._devisServiceProxy.getAllDevisTotalRecords(
        0,
        0,
        event.globalFilter,
        '',
        '',
        clientFilter,
        dateEmissionFilter,
        echeancePaiementFilter,
        montantTtcFilter,
        statutFilter,
      ),
      this._devisServiceProxy.getAllDevis(
        event.first,
        event.rows,
        event.globalFilter,
        event.sortField,
        event.sortOrder,
        clientFilter,
        dateEmissionFilter,
        echeancePaiementFilter,
        montantTtcFilter,
        statutFilter,
      ),
      this._devisServiceProxy.getAllDevisMontantTotal(
        event.first,
        event.rows,
        event.globalFilter,
        '',
        '',
        clientFilter,
        dateEmissionFilter,
        echeancePaiementFilter,
        montantTtcFilter,
        statutFilter,
      ),
    ).pipe(
      map(([length, res, montantTotalAllDevis]: any) => {
        let data = [...res.items]
        data.forEach((devis: any) => {
          devis.client.nom = !devis.client.nom
            ? devis.client.raisonSociale
            : devis.client.nom
          devis.devisItems = devis.devisItems.map((item: any) => {
            let totalHt = item.unitPriceHT * item.quantity
            return {
              ...item,
              // totalTtc: total_ht + (item.tva * total_ht) / 100,
            }
          })

          devis.statut = moment().isAfter(moment(devis.dateEmission).add(devis.echeancePaiement, 'days'))
            ? DevisStatutEnum.Expire : devis.statut

          let montantTtc = devis.devisItems
            .map((item) => item.totalTtc)
            .reduce((accum, current) => accum + current)
          let montantHt = devis.devisItems
            .map((item) => item.unitPriceHT * item.quantity)
            .reduce((accum, current) => accum + current)

          devis.montantTtc = montantTtc - (montantHt * devis.remise) / 100
        })

        if(shouldReturnExpiredEstimates) 
          data = data.filter(x => x.statut == DevisStatutEnum.Expire)
        else if(!shouldReturnExpiredEstimates && !statutFilter)
          data = data.filter(x => x.statut != DevisStatutEnum.Expire)

        return { items: data, length, montantTotalAllDevis }
      }),

    )
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

  //#region FactureDialog

  dialogComponentShown = false

  showFactureDialog() {
    this.dialogComponentShown = true
  }

  factureFormatReferenceNumber(reference: number) {
    return this._formatService.formatReferenceNumber(
      reference,
      ReferencePrefix.Facture,
    )
  }

  factureCrudOperationTreatment(event) {
    if (event.crudOperation == 'create') {
      this.tableChild.loadTableLazy()
      // let newDevis = {
      //   ...event.result,
      //   remise: 0,
      // }
      // newDevis.factureItems = newDevis.factureItems.map((item: any) => {
      //   let total_ht = item.unitPriceHT * item.quantity
      //   return {
      //     ...item,
      //     totalTtc: total_ht + (item.tva * total_ht) / 100,
      //   }
      // })

      // let remiseAmount =
      //   (newDevis.factureItems
      //     .map((item) => item.unitPriceHT * item.quantity)
      //     .reduce((accum, current) => accum + current) *
      //     newDevis.remise) /
      //   100

      // newDevis.montantTtc =
      //   newDevis.factureItems
      //     .map((item) => item.totalTtc)
      //     .reduce((accum, current) => accum + current) - remiseAmount

      // this.montantTotalAllDevis += newDevis.montantTtc
    } else if (event.crudOperation == 'update') {
      this.selectedDevisItem = {
        ...event.result,
      }

      //Calculate total montant
      this.selectedDevisItem.factureItems = this.selectedDevisItem.factureItems.map(
        (item: any) => {
          let total_ht = item.unitPriceHT * item.quantity
          return {
            ...item,
            totalTtc: total_ht + (item.tva * total_ht) / 100,
          }
        },
      )

      let remiseAmount =
        (this.selectedDevisItem.factureItems
          .map((item) => item.unitPriceHT * item.quantity)
          .reduce((accum, current) => accum + current) *
          this.selectedDevisItem.remise) /
        100

      this.selectedDevisItem.montantTtc =
        this.selectedDevisItem.factureItems
          .map((item) => item.totalTtc)
          .reduce((accum, current) => accum + current) - remiseAmount

      this.selectedDevisItem = {
        ...this.selectedDevisItem,
        dateEmission: (this.selectedDevisItem.dateEmission as Moment).toDate(),
      }
      this.child.selectedDevisItem = { ...this.selectedDevisItem }
      let index = this.tableChild.tableData.findIndex(
        (item) => item.id == this.selectedDevisItem.id,
      )
      this.tableChild.tableData[index] = {
        ...this.selectedDevisItem,
        dateEmission: moment(this.selectedDevisItem.dateEmission),
      }
      this.tableChild.tableData = [...this.tableChild.tableData]
    }

    this.calculateSummaryTotalHTAndTVA()
  }
  //#endregion

  print() {
    html2canvas(document.getElementById('contentToConvert'), {
      scale: 2,
      onclone: (dcm) => {
        let data = dcm.getElementById('contentToConvert')
        data.classList.add('html2canvas')
        dcm.getElementById('pageHeader').innerHTML = "<span class='font-semibold'>Objet: </span>" + (this.selectedDevisItem.messageIntroduction || '')
        dcm.getElementById('pageFooter').innerText = this.selectedDevisItem.piedDePage

      },
    }).then((canvas) => {
      let docWidth = 205
      let docHeight = (canvas.height * docWidth) / canvas.width

      const contentDataURL = canvas.toDataURL('image/png')

      console.log(contentDataURL)
      printJS({
        printable: contentDataURL,
        type: 'image',
        base64: true,
      })
    })
  }

  //TODO:Create a service for these two methods
  isNullOrEmpty(str: string): boolean {
    return str == undefined || str.toString().trim() == ''
  }

  replaceIfIsNullOrEmpty(str: string): string {
    if (!str || this.isNullOrEmpty(str)) {
      return '...'
    } else {
      return str
    }
  }

  @ViewChild('pdfTable') pdfTable: ElementRef
  downloadAsPDF() {
    let data = document.getElementById('contentToConvert')
    this.convertToPDF(data)
  }

  
  convertToPDF(element) {
    html2canvas(element, {
      scale: 2,
      onclone: (dcm) => {
        let data = dcm.getElementById('contentToConvert')
        data.classList.add('html2canvas')
        dcm.getElementById('pageHeader').innerHTML = "<span class='font-semibold'>Objet: </span>" + (this.selectedDevisItem.messageIntroduction || '')
        dcm.getElementById('pageFooter').innerText = this.selectedDevisItem.piedDePage

      },
    }).then((canvas) => {
      let docWidth = 205
      let docHeight = (canvas.height * docWidth) / canvas.width

      const contentDataURL = canvas.toDataURL('image/png')
      let doc = new jsPDF('p', 'mm', 'a4')
      let position = 0

      const items = this.selectedDevisItem.devisItems
      let table = document.querySelector('#contentToConvert p-table')
      let rest = items.length % 5
      let count = (items.length - rest) / 5 + +!!rest,
        splittedItems: DevisItemDto
      doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
      // for(let i=0; i < count; i++){
      //   splittedItems = items.slice(length, length + 4)
      //   console.log(length)
      //   doc.addPage()
      //   doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)

      // }
      doc.save('exportedPdf.pdf')
    })
  }
}
