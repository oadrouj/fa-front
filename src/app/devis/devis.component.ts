import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core'
import { Subject, zip } from 'rxjs'
import { DevisItem } from '../../shared/models/DevisItem'
import { DialogStatus } from '../../shared/enums/DialogState.enum'
import { GlobalEventsService } from '@shared/globalEventsService'
import {
  ClientForAutoCompleteDto,
  ClientForAutoCompleteDtoListResultDto,
  ClientServiceProxy,
  DevisDto,
  DevisItemDto,
  DevisServiceProxy,
  DevisStatutEnum,
  FactureDto,
  FileApiServiceProxy,
  InfosEntrepriseServiceProxy,
} from '@shared/service-proxies/service-proxies'
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
import * as printJS from 'print-js'
import { FacturesDialogComponent } from '@app/factures/factures-dialog/factures-dialog.component'
import { AppSessionService } from '@shared/session/app-session.service'

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { ItemPreviewComponent } from '@shared/components/item-preview/item-preview.component'
import { DomSanitizer } from '@angular/platform-browser'
import { EstimateInvoiceStatusStateService } from '@shared/services/estimate-invoice-status-state.service'
import { LazyTableService } from '@shared/services/lazy-table.service'
import { PreviewService } from '@shared/services/preview.service'

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
  dialogStatus: DialogStatus
  invoiceDialogStatus: DialogStatus
  devisItemProp: any
  invoiceItemProp: FactureDto[]
  formIsValid: any
  firstLoad = true

  constructor(
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
    private _lazyTableService: LazyTableService,
    private _previewService: PreviewService,
    private _infosEntrepriseService: InfosEntrepriseServiceProxy,
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

    this._lazyTableService.rowSelected$.subscribe((res) => {
      this.firstLoad && (this.montantTotalAllDevis = this.tableChild.montantTotal)
      this.selectedDevisItem = res
      this.calculateSummaryTotalHTAndTVA()
      this.firstLoad = false

    })

  }

  updateEstimateStatusToValid = (data) => {
    if (data) {
      this.updateApiCall(
        this.selectedDevisItem.id,
        DevisStatutEnum.Valide,
        'Le devis est validé',
      )
    }
  }

  ngAfterViewInit() {
    this._estimateInvoiceStatusStateService.statusModifier$.subscribe((res) => {
      if (res.target == 'Estimate') {
        switch (res.statusAction) {
          case 'Validate':
            this.dialogStatus = DialogStatus.CheckFormValidity
            this.devisItemProp = { ...this.selectedDevisItem }
            break

          case 'Convert':
            this.showFactureDialog()
            break

          case 'Reject':
            this.updateApiCall(
              this.selectedDevisItem.id,
              DevisStatutEnum.Rejete,
              'Le devis est rejeté',
            )
            break
        }
        document.body.style.overflow = 'auto'
      }
    })
  }

  //#region Properties
  @ViewChild(DevisDialogComponent, { static: false })
  child: DevisDialogComponent
  @ViewChild(TableComponent, { static: false })
  tableChild: TableComponent
  title = 'Devis'
  entrepriseName = ''
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
      field: 'client.displayName',
      type: 'text',
    },
    {
      header: 'EMISSION',
      field: 'dateEmission',
      type: 'date',
      format: (date) => (date._i ? new Date(date._i) : new Date(date._d)),
    },
    /* Hidding Echeance
    {
      header: 'ECHEANCE',
      field: 'echeancePaiement',
      type: 'text',
      suffix: 'jours',
    },*/
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

  devisStatusItems = [
    {
      actualStatus: DevisStatutEnum.Valide,
      label: 'Convertir',
      icon: 'pi pi-check',
      command: () => {
        this._estimateInvoiceStatusStateService.statusModifier = {
          statusAction: 'Convert',
          target: 'Estimate',
        }
      },
    },
    {
      actualStatus: DevisStatutEnum.Valide,
      label: 'Rejeter',
      icon: 'pi pi-times',
      command: () => {
        this._estimateInvoiceStatusStateService.statusModifier = {
          statusAction: 'Reject',
          target: 'Estimate',
        }
      },
    },
    {
      actualStatus: DevisStatutEnum.Cree,
      label: 'Valider',
      icon: 'pi pi-check',
      command: () => {
        this._estimateInvoiceStatusStateService.statusModifier = {
          statusAction: 'Validate',
          target: 'Estimate',
        }
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

  emitDateFilterEvent(event) {
    if (this.selectedDate.every((x) => x != null))
      this.emitFilterEvent('filterByButton', null)
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

  newDevis() {
    this.displayDialog = true
    this.devisItemProp = null
    this.dialogStatus = DialogStatus.New
  }

  editDevis() {
    this.displayDialog = true
    this.devisItemProp = { ...this.selectedDevisItem }
    this.dialogStatus = DialogStatus.Edit
  }

  duplicateDevis() {
    this.displayDialog = true
    this.devisItemProp = { ...this.selectedDevisItem }
    this.dialogStatus = DialogStatus.Duplicate
  }

  deleteDevis() {
    this._confirmDialogService.deleteConfirm({
      acceptCallback: () => {
        this._devisServiceProxy
          .deleteDevis(this.selectedDevisItem.id)
          .subscribe((res) => {
            if (res) {
              this._lazyTableService.emitDataOperation = {
                action: 'remove',
                payload: this.selectedDevisItem.id,
              }
              this.summaryTotalHT = 0
              this.summaryTVA = 0
              this.montantTotalAllDevis -= this.selectedDevisItem.montantTtc
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
  }

  onDialogClose() {
    this.displayDialog = false
    this.dialogStatus = undefined
    document.body.style.overflow = 'auto'
  }

  calculateSummaryTotalHTAndTVA() {
    if (this.selectedDevisItem && this.selectedDevisItem.devisItems) {
      this.summaryTotalHT = this.selectedDevisItem.devisItems
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

  calculateRemise(remise, totalHT) {
    return (totalHT * remise) / 100
  }

  crudOperationTreatment(event) {
    let estimate: DevisDto = event.result
    if (event.crudOperation == 'create') {
      this._lazyTableService.emitDataOperation = {
        action: 'add',
        payload: estimate,
      }
      this.montantTotalAllDevis += estimate.montantTtc
    } else if (event.crudOperation == 'update') {
      this.montantTotalAllDevis +=
        estimate.montantTtc - this.selectedDevisItem.montantTtc
      this.selectedDevisItem = { ...estimate }

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
          devis.statut =
            devis.statut == DevisStatutEnum.Valide &&
            moment().isAfter(
              moment(devis.dateEmission).add(devis.echeancePaiement, 'days'),
            )
              ? DevisStatutEnum.Expire
              : devis.statut
        })

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
      })
  }
  //#endregion

  //#region FactureDialog

  dialogComponentShown = false

  showFactureDialog() {
    this.invoiceItemProp = {
      ...this.selectedDevisItem,
      factureItems: this.selectedDevisItem.devisItems,
    }

    delete this.invoiceItemProp['devisItems']

    this.dialogComponentShown = true
    this.invoiceDialogStatus = DialogStatus.Convert
  }

  //#endregion

  print() {
    this._previewService.print({
      item: this.selectedDevisItem,
      remiseAmount: this.remiseAmount,
      summaryTVA: this.summaryTVA,
      summaryTotalHT: this.summaryTotalHT,
      title: 'Devis',
      logoSrc: this.logoSrc
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

  downloadAsPDF() {
    this._previewService.download({
      item: this.selectedDevisItem,
      remiseAmount: this.remiseAmount,
      summaryTVA: this.summaryTVA,
      summaryTotalHT: this.summaryTotalHT,
      title: 'Devis',
      logoSrc: this.logoSrc
    })
  }

}
