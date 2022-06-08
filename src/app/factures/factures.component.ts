import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core'
import { Subject, zip } from 'rxjs'
import { DialogStatus } from '../../shared/enums/DialogState.enum'
import { GlobalEventsService } from '@shared/globalEventsService'
import {
  ClientForAutoCompleteDto,
  ClientForAutoCompleteDtoListResultDto,
  ClientServiceProxy,
  FactureServiceProxy,
  FactureInfosPaiementDto,
  ModePaiementEnum,
  FactureStatutEnum,
  FileApiServiceProxy,
  FactureItemDto,
  FactureDto,
} from '@shared/service-proxies/service-proxies'
import * as moment from 'moment'
import { DateHelper } from '@shared/helpers/DateHelper'
import { ToastService } from '@shared/services/toast.service'
import { Moment } from 'moment'
import { FacturesDialogComponent } from './factures-dialog/factures-dialog.component'
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { ConfirmEventType, LazyLoadEvent } from 'primeng/api'
import { map } from 'rxjs/operators'
import { TableComponent } from '@app/table/table.component'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { FacturePayementComponent } from './facture-payement/facture-payement.component'
import * as printJS from 'print-js'
import { DomSanitizer } from '@angular/platform-browser'
import { ItemPreviewComponent } from '@shared/components/item-preview/item-preview.component'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { EstimateInvoiceStatusStateService } from '@shared/services/estimate-invoice-status-state.service'
import { LazyTableService } from '@shared/services/lazy-table.service'
import { PreviewService } from '@shared/services/preview.service'

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css'],
  providers: [DialogService, EstimateInvoiceStatusStateService],
})
export class FacturesComponent implements OnInit, AfterViewInit, OnDestroy {
  remiseAmount: number
  favIcon: HTMLLinkElement = document.querySelector('#favIcon')
  logoSrc: string
  invoiceDialogStatus: DialogStatus
  invoiceItemProp: any
  firstLoad = true

  constructor(
    private _factureServiceProxy: FactureServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    private _toastService: ToastService,
    private _confirmDialogService: ConfirmDialogService,
    public globalEventsService: GlobalEventsService,
    public dialogService: DialogService,
    private _fileApiServiceProxy: FileApiServiceProxy,
    private _estimateInvoiceStatusStateService: EstimateInvoiceStatusStateService,
    private _sanitizer: DomSanitizer,
    private _lazyTableService: LazyTableService,
    private _previewService: PreviewService,
  ) {}

  ngOnInit() {
    this.globalEventsService.announcedThePageChangedColorSubject(
      `var(--${this.primaryColor}-color`,
    )

    this.favIcon.href = 'assets/img/FacturesLogo.png'

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

  updateInvoiceStatusToValid = (data) => {
    if (data) {
      this.updateApiCall(
        this.selectedDevisItem.id,
        this.parseStatutForStatutValide(this.selectedDevisItem),
        'Le devis est validé',
      )
    }
  }

  ngAfterViewInit() {
    this._estimateInvoiceStatusStateService.statusModifier$.subscribe(
      async (res) => {
        if (res.target == 'Invoice') {
          switch (res.statusAction) {
            case 'Validate':
              this.invoiceDialogStatus = DialogStatus.CheckFormValidity
              this.invoiceItemProp = { ...this.selectedDevisItem }
              break

            case 'Settle':
              await this.showFacturePayementDialog('addPayement')
              break

            case 'PartiallySettle':
              await this.showFacturePayementDialog('both')
              break

            case 'Historic':
              await this.showFacturePayementDialog('historic')
          }

          document.body.style.overflow = 'auto'
        }
      },
    )
  }

  ngOnDestroy() {
    if (this.ref) this.ref.close()
  }

  //#region Properties
  @ViewChild(FacturesDialogComponent, { static: false })
  child: FacturesDialogComponent
  @ViewChild(TableComponent, { static: false }) tableChild: TableComponent
  @ViewChild('prv', { static: true }) template: ItemPreviewComponent
  title = 'Facture'
  imageSrc = 'assets/img/FacturesLogo.png'
  primaryColor = 'orange'
  secondaryColor = ''
  tableSelectionColor = 'var(--light-orange-color)'
  searchText = ''
  selectedClient: any
  selectedDate: Moment[]
  selectedEcheance: number
  selectedMontant: number
  selectedStatut: FactureStatutEnum
  clientSuggestions: ClientForAutoCompleteDto[]
  echeanceOptions = [15, 20, 30]
  statutOptions = [
    { value: FactureStatutEnum.Cree, label: 'Créé' },
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
      colspan: 2,
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
      colspan: 2,
    },
  ]

  factureStatusItems = [
    {
      actualStatus: FactureStatutEnum.ReglePartiellemt,
      label: 'Ajouter un paiement',
      icon: 'pi pi-check',
      command: async () => {
        this._estimateInvoiceStatusStateService.statusModifier = {
          statusAction: 'PartiallySettle',
          target: 'Invoice',
        }
      },
    },
    {
      actualStatus: FactureStatutEnum.PaiementAttente,
      label: 'Régler',
      icon: 'pi pi-check',
      command: async () => {
        this._estimateInvoiceStatusStateService.statusModifier = {
          statusAction: 'Settle',
          target: 'Invoice',
        }
      },
    },

    {
      actualStatus: FactureStatutEnum.PaiementRetard,
      label: 'Régler',
      icon: 'pi pi-check',
      command: async () => {
        this._estimateInvoiceStatusStateService.statusModifier = {
          statusAction: 'Settle',
          target: 'Invoice',
        }
      },
    },

    {
      actualStatus: FactureStatutEnum.Cree,
      label: 'Valider',
      icon: 'pi pi-check',
      command: () => {
        this._estimateInvoiceStatusStateService.statusModifier = {
          statusAction: 'Validate',
          target: 'Invoice',
        }
      },
    },
    {
      actualStatus: FactureStatutEnum.Regle,
      label: "Voir l'historique",
      icon: 'pi pi-check',
      command: async () => {
        this._estimateInvoiceStatusStateService.statusModifier = {
          statusAction: 'Historic',
          target: 'Invoice',
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
  montantTotalAllDevis
  ref: DynamicDialogRef

  //#endregion

  emitDateFilterEvent(event) {
    if (this.selectedDate.every((x) => x != null))
      this.emitFilterEvent('filterByButton', null)
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
        return 'Paiement en retard'
      default:
        return ' '
    }
  }

  getDateEcheance(dateEmission: Date, echeance: number) {
    return moment(dateEmission).add(echeance, 'days').toDate()
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

  resetFilterFields() {
    this.selectedClient = null
    this.selectedDate = null
    this.selectedEcheance = null
    this.selectedMontant = null
    this.selectedStatut = null
    this.emitFilterEvent('filterByButton', null)
  }

  newDevis() {
    this.displayDialog = true
    this.invoiceItemProp = null
    this.invoiceDialogStatus = DialogStatus.New
  }

  editDevis() {
    this.displayDialog = true
    this.invoiceItemProp = { ...this.selectedDevisItem }
    this.invoiceDialogStatus = DialogStatus.Edit
  }

  duplicateDevis() {
    this.displayDialog = true
    this.invoiceItemProp = { ...this.selectedDevisItem }
    this.invoiceDialogStatus = DialogStatus.Duplicate
  }

  deleteDevis() {
    this._confirmDialogService.deleteConfirm({
      acceptCallback: () => {
        this._factureServiceProxy
          .deleteFacture(this.selectedDevisItem.id)
          .subscribe((res) => {
            if (res) {
              this._lazyTableService.emitDataOperation = {
                action: 'remove',
                payload: this.selectedDevisItem.id,
              }
              this.montantTotalAllDevis -= this.selectedDevisItem.montantTtc
              this.summaryTotalHT = 0
              this.summaryTVA = 0
              this._toastService.info({
                summary: 'Opération réussie',
                detail: 'La facture est supprimée avec succès',
              })
            }
          })
      },

      rejectCallback: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this._toastService.error({
              summary: 'Erreur',
              detail: "Une erreur s'est produite lors de la suppression",
            })
            break
          case ConfirmEventType.CANCEL:
            break
        }
      },
    })
  }

  onDialogClose() {
    this.displayDialog = false
    this.invoiceDialogStatus = undefined

    document.body.style.overflow = 'auto'
  }

  calculateSummaryTotalHTAndTVA() {
    if (this.selectedDevisItem && this.selectedDevisItem.factureItems) {
      this.summaryTotalHT = this.selectedDevisItem.factureItems
        .map((item) => item.unitPriceHT * item.quantity)
        .reduce((accum, current) => accum + current)
      this.summaryTVA = this.selectedDevisItem.factureItems
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
    let invoice: FactureDto = event.result
    invoice.statut =
    invoice.statut == FactureStatutEnum.Valide
        ? this.parseStatutForStatutValide(event)
        : invoice.statut

    if (event.crudOperation == 'create') {
      this._lazyTableService.emitDataOperation = {
        action: 'add',
        payload: invoice,
      }
      this.montantTotalAllDevis += invoice.montantTtc
    } else if (event.crudOperation == 'update') {
      this.montantTotalAllDevis +=
        invoice.montantTtc - this.selectedDevisItem.montantTtc
      this.selectedDevisItem = invoice
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
      this._factureServiceProxy.getAllFactureTotalRecords(
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
      this._factureServiceProxy.getAllFacture(
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
      this._factureServiceProxy.getAllFactureMontantTotal(
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
            devis.statut == FactureStatutEnum.Valide
              ? moment().isAfter(
                  moment(devis.dateEmission).add(
                    devis.echeancePaiement,
                    'days',
                  ),
                )
                ? FactureStatutEnum.PaiementRetard
                : FactureStatutEnum.PaiementAttente
              : devis.statut
        })
        return { items: data, length, montantTotalAllDevis }
      }),
    )
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

  getSelectedItemMontantTtc() {
    return (
      this.selectedDevisItem.factureItems
        .map((item) => item.totalTtc)
        .reduce((accum, current) => accum + current) -
      this.selectedDevisItem.remise
    )
  }

  async showFacturePayementDialog(
    tabPanelShowMode: 'both' | 'addPayement' | 'historic',
  ) {
    let facturePayementInfo: FactureInfosPaiementDto = new FactureInfosPaiementDto(
      {
        factureId: this.selectedDevisItem.id,
        id: 0,
        montantPaye: 0,
        datePaiement: moment(),
        modePaiement: ModePaiementEnum.Cheque,
      },
    )

    let totalPayments = await this._factureServiceProxy
      .getRestOfAmount(this.selectedDevisItem.id)
      .toPromise()
    let restAmount = this.selectedDevisItem.montantTtc - totalPayments

    this.ref = this.dialogService.open(FacturePayementComponent, {
      data: {
        factureId: this.selectedDevisItem.id,
        status: this.selectedDevisItem.statut,
        restAmount: restAmount,
        currency: this.selectedDevisItem.currency,
        tabPanelShowMode: tabPanelShowMode,
      },
      header: 'Réler le payement',
      width: '34vw',
      showHeader: false,
      contentStyle: {
        height: '31.56rem',

        overflow: 'auto',
        padding: '0',
        borderRadius: '20px',
      },
      baseZIndex: 10000,
    })

    this.ref.onClose.subscribe(async (result) => {
      if (result && result.montant != 0) {
        let factureInfosPaiementDto = new FactureInfosPaiementDto({
          datePaiement:  moment(result.datePaiement),
          montantPaye: result.montant,
          modePaiement: result.modePaiement,
          factureId: this.selectedDevisItem.id,
          id: facturePayementInfo.id,
        })

        let payedAmount = 0
        if (
          this.selectedDevisItem.statut == FactureStatutEnum.ReglePartiellemt
        ) {
          payedAmount = totalPayments + result.montant
        } else {
          payedAmount = result.montant
        }

        if (payedAmount.toFixed(2) == this.selectedDevisItem.montantTtc) {
          this._factureServiceProxy
            .createOrUpdateFactureInfosPaiement(factureInfosPaiementDto)
            .subscribe((res) => {
              if (res) {
                this._toastService.info({ detail: 'La facture est réglée' })
                this._factureServiceProxy
                  .changeFactureStatut(
                    this.selectedDevisItem.id,
                    FactureStatutEnum.Regle,
                  )
                  .subscribe((res) => {
                    if (res) {
                      this.viewUpdateSelectedItemStatut(FactureStatutEnum.Regle)
                    }
                  })
              }
            })
        } else if (
          payedAmount.toFixed(2) <= this.selectedDevisItem.montantTtc
        ) {
          this._factureServiceProxy
            .createOrUpdateFactureInfosPaiement(factureInfosPaiementDto)
            .subscribe((res) => {
              if (res) {
                this._toastService.info({
                  detail: 'La facture est partiellement réglée',
                })

                this._factureServiceProxy
                  .changeFactureStatut(
                    this.selectedDevisItem.id,
                    FactureStatutEnum.ReglePartiellemt,
                  )
                  .subscribe((res) => {
                    if (res) {
                      this.viewUpdateSelectedItemStatut(
                        FactureStatutEnum.ReglePartiellemt,
                      )
                    }
                  })
              }
            })
        }
      }
    })
  }

  print() {
    this._previewService.print({
      item: this.selectedDevisItem,
      remiseAmount: this.remiseAmount,
      summaryTVA: this.summaryTVA,
      summaryTotalHT: this.summaryTotalHT,
      title: 'Facture',
      logoSrc: this.logoSrc
    })
  }

  downloadAsPDF() {
    this._previewService.download({
      item: this.selectedDevisItem,
      remiseAmount: this.remiseAmount,
      summaryTVA: this.summaryTVA,
      summaryTotalHT: this.summaryTotalHT,
      title: 'Facture',
      logoSrc: this.logoSrc
    })
  }

  viewUpdateSelectedItemStatut(statut: any) {
    this.selectedDevisItem = {
      ...this.selectedDevisItem,
      dateEmission: moment(this.selectedDevisItem.dateEmission),
      statut: statut,
    }
    let index = this.tableChild.tableData
      .filter((item) => item)
      .findIndex((item) => item.id == this.selectedDevisItem.id)
    this.tableChild.tableData[index] = { ...this.selectedDevisItem }
    this.tableChild.tableData = [...this.tableChild.tableData]
  }

  parseStatutForStatutValide(documentItem) {
    return moment().isAfter(
      moment(documentItem.dateEmission).add(
        documentItem.echeancePaiement,
        'days',
      ),
    )
      ? FactureStatutEnum.PaiementRetard
      : FactureStatutEnum.PaiementAttente
  }

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
}
