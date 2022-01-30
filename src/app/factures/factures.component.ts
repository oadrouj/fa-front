import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core'
import { Subject, zip } from 'rxjs'
import { DialogStatus } from '../../shared/enums/DialogState.enum'
import {
  GlobalEventsService,
} from '@shared/globalEventsService'
import { FormatService } from '../../shared/services/format.service'
import { FakeService } from '@shared/services/fake.service'
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
} from '@shared/service-proxies/service-proxies'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
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

  constructor(
    private _formatService: FormatService,
    public _fakeService: FakeService,
    private _factureServiceProxy: FactureServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    private _toastService: ToastService,
    private _confirmDialogService: ConfirmDialogService,
    public globalEventsService: GlobalEventsService,
    public dialogService: DialogService,
    private _fileApiServiceProxy: FileApiServiceProxy,
    private _estimateInvoiceStatusStateService: EstimateInvoiceStatusStateService,
    private _sanitizer: DomSanitizer,
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
  }

  ngAfterViewInit() {
    if (window.history.state.clientId) {
      this.newDevis(window.history.state.clientId)
    }

    this._estimateInvoiceStatusStateService.statusModifier$.subscribe(async(res) => {
      if (res.target == 'Invoice') {
        switch (res.statusAction) {
          case 'Validate':
            this.emitDialogStatus(DialogStatus.Edit, 'facture')
            this.child.validateDevis(true).subscribe((res) => {
              if (res.success) {
                this._toastService.info({ detail: 'La facture est devient valide' })
                this.selectedDevisItem = {
                  ...this.selectedDevisItem,
                  statut: this.parseStatutForStatutValide(
                    res.result.dateEmission,
                    res.result.echeancePaiement,
                  ),
                }
                this.tableChild.tableData.find(
                  (item) => item.id == this.selectedDevisItem.id,
                ).statut = this.selectedDevisItem.statut
              }
            })
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
    })
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
      field: 'client.nom',
      type: 'text',
    },
    {
      header: 'DATE D’EMISSION',
      field: 'dateEmission',
      type: 'date',
      format: (date) => (date._i ? new Date(date._i) : new Date(date._d)),
      colspan: 2
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
      colspan: 2
    },
  ]
  DevisContentItemsCols = [
    { header: 'DESIGNATION', field: 'designation', type: 'text', colspan: 0 },
    { header: 'DATE', field: 'date', type: 'date', colspan: 0 },
    { header: 'QTÉ', field: 'quantity', type: 'text' },
    { header: 'UNITE', field: 'unit', type: 'text' },
    { header: 'PU HT', field: 'unitPriceHT', type: 'currency' },
    { header: 'TVA', field: 'tva', type: 'pourcentage' },
    { header: 'TOTAL TTC', field: 'totalTtc', type: 'currency', colspan: 0 },
  ]
  
  factureStatusItems = [
    {
      actualStatus: FactureStatutEnum.ReglePartiellemt,
      label: 'Ajouter un paiement',
      icon: 'pi pi-check',
      command: async () => {
        this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'PartiallySettle',target: 'Invoice'}
      },
    },
    {
      actualStatus: FactureStatutEnum.PaiementAttente,
      label: 'Régler',
      icon: 'pi pi-check',
      command: async () => {
        this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'Settle',target: 'Invoice'}
      },
    },

    {
      actualStatus: FactureStatutEnum.PaiementRetard,
      label: 'Régler',
      icon: 'pi pi-check',
      command: async () => {
        this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'Settle',target: 'Invoice'}
      },
    },

    {
      actualStatus: FactureStatutEnum.Cree,
      label: 'Valider',
      icon: 'pi pi-check',
      command: () => {
        this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'Validate',target: 'Invoice'}
      },
    },
    {
      actualStatus: FactureStatutEnum.Regle,
      label: 'Voir l\'historique',
      icon: 'pi pi-check',
      command: async () => {
        this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'Historic',target: 'Invoice'}
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
  ref: DynamicDialogRef

  //#endregion

  emitDateFilterEvent(event){
    if(this.selectedDate.every(x => x != null))
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

  factureFormatReferenceNumber(reference: number, customPrefix) {
    return this._formatService.formatReferenceNumber(
      reference,
      customPrefix ? customPrefix : ReferencePrefix.Facture,
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
  dialogStatusEvent = new Subject<{ statut: DialogStatus; dialogComponent }>()
  emitDialogStatus(dialogStatus: DialogStatus, dialogComponent) {
    this.dialogStatusEvent.next({ statut: dialogStatus, dialogComponent })
  }

  rowDeletedSubject = new Subject<any>()
  emitRowDeletedEvent(deviItem: any) {
    this.rowDeletedSubject.next(deviItem)
  }

  notifySelectedDevisChanged = new Subject<any>()
  emitNotificationSelectedDevisChanged(deviItem: any) {
    this.notifySelectedDevisChanged.next(deviItem)
  }

  newDevis(clientId?) {
    clientId && (this.child.selectedClientId = clientId)
    this.emitDialogStatus(DialogStatus.New, 'facture')
    this.displayDialog = true
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
              this.tableChild.tableData = this.tableChild.tableData.filter(
                (devis) => !devis || devis.id != this.selectedDevisItem.id,
              )
              this.calculateTotalMonatant()
              this.selectedDevisItem = null
              this.summaryTotalHT = 0
              this.summaryTVA = 0

              this.emitRowDeletedEvent(this.tableChild.tableData[0])
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

    let element = document.body.querySelector('.cd') as HTMLElement
    element.style.display = 'none'
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
      // ? new Date(this.selectedDevisItem.dateEmission._i)
      // : new Date(this.selectedDevisItem.dateEmission._d),
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
      this.summaryTotalHT = (this.selectedDevisItem as any).factureItems
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

  calculateTotalMonatant() {
    this.montantTotalAllDevis = 0
    this.tableChild.tableData.forEach((item) => {
      if (item) {
        let totalHt = item.factureItems
          .map((item) => item.unitPriceHT * item.quantity)
          .reduce((accum, current) => accum + current)

        this.montantTotalAllDevis +=
          item.factureItems
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
    let statut =
      event.result.statut == FactureStatutEnum.Valide
        ? this.parseStatutForStatutValide(
            event.result.dateEmission,
            event.result.echeancePaiement,
          )
        : event.result.statut

    if (event.crudOperation == 'create') {
    
      this.tableChild.loadTableLazy()

      // let newDevis = {
      //   ...event.result,
      //   statut,
      //   client: {
      //     ...event.result.client,
      //     nom: event.result.client.nom
      //       ? event.result.client.nom
      //       : event.result.client.raisonSociale,
      //   },
      // }
      // newDevis.factureItems = newDevis.factureItems.map((item: any) => {
      //   let total_ht = item.unitPriceHT * item.quantity
      //   return { ...item, totalTtc: total_ht + (item.tva * total_ht) / 100 }
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

      // this.tableChild.tableData = [
      //   ...this.tableChild.tableData,
      //   { ...newDevis },
      // ]

      // this.tableChild.tableData.sort((a, b) =>
      //   a.reference < b.reference ? 1 : -1,
      // )

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
        statut,
        client: {
          ...this.selectedDevisItem.client,
          nom: event.result.client.nom
            ? event.result.client.nom
            : event.result.client.raisonSociale,
        },
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
        dateEmission: moment(this.selectedDevisItem.dateEmission).toDate(),
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
    let clientFilter, dateEmissionFilter, echeancePaiementFilter, montantTtcFilter, statutFilter
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
          devis.client.nom = !devis.client.nom
            ? devis.client.raisonSociale
            : devis.client.nom
          devis.factureItems = devis.factureItems.map((item: any) => {
            let total_ht = item.unitPriceHT * item.quantity
            return {
              ...item,
            }
          })

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

          let montantTtc = devis.factureItems
            .map((item) => item.totalTtc)
            .reduce((accum, current) => accum + current)
          let montantHt = devis.factureItems
            .map((item) => item.unitPriceHT * item.quantity)
            .reduce((accum, current) => accum + current)

          devis.montantTtc = montantTtc - (montantHt * devis.remise) / 100
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

  async showFacturePayementDialog(tabPanelShowMode: 'both' | 'addPayement' | 'historic') {
    let facturePayementInfo: FactureInfosPaiementDto = new FactureInfosPaiementDto(
      {
        factureId: this.selectedDevisItem.id,
        id: 0,
        montantPaye: 0,
        datePaiement: moment(),
        modePaiement: ModePaiementEnum.Cheque,
      },
    )

    let totalPayments = (await this._factureServiceProxy.getRestOfAmount(this.selectedDevisItem.id).toPromise())
    let restAmount = this.selectedDevisItem.montantTtc - totalPayments;

    this.ref = this.dialogService.open(FacturePayementComponent, {
      data: {
       
        factureId: this.selectedDevisItem.id,
        status: this.selectedDevisItem.statut,
        restAmount: restAmount,
        currency:  this.selectedDevisItem.currency,
        tabPanelShowMode: tabPanelShowMode
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

    this.ref.onClose.subscribe(async(result) => {
      if (result && result.montant != 0) {
        let factureInfosPaiementDto = new FactureInfosPaiementDto({
          datePaiement: moment(result.datePaiement).add('day', 1),
          montantPaye: result.montant,
          modePaiement: result.modePaiement,
          factureId: this.selectedDevisItem.id,
          id: facturePayementInfo.id,
        })

        let payedAmount = 0
        if(this.selectedDevisItem.statut == FactureStatutEnum.ReglePartiellemt){
          payedAmount = totalPayments + result.montant
        }
        else {
          payedAmount = result.montant
        }
       
        if (payedAmount.toFixed(2) == this.selectedDevisItem.montantTtc) {
          this._factureServiceProxy
            .createOrUpdateFactureInfosPaiement(factureInfosPaiementDto)
            .subscribe((res) => {
              if (res) {
                this._toastService.info({ detail: 'La facture est réglée' })
                this._factureServiceProxy.changeFactureStatut(this.selectedDevisItem.id, FactureStatutEnum.Regle)
                .subscribe((res) => {
                  if (res) {
                    this.viewUpdateSelectedItemStatut(FactureStatutEnum.Regle)
                  }
                })
              }
            })

        } else if (payedAmount.toFixed(2) <= this.selectedDevisItem.montantTtc) {
          this._factureServiceProxy
            .createOrUpdateFactureInfosPaiement(factureInfosPaiementDto)
            .subscribe((res) => {
              if (res) {
                this._toastService.info({
                  detail: 'La facture est partiellement réglée',
                })

                this._factureServiceProxy.changeFactureStatut(this.selectedDevisItem.id, FactureStatutEnum.ReglePartiellemt)
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

      printJS({
        printable: contentDataURL,
        type: 'image',
        base64: true,
      })
    })
  }

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

      const items =
        this.selectedDevisItem.devisItems || this.selectedDevisItem.factureItems
      let table = document.querySelector('#contentToConvert p-table')
      let rest = items.length % 5
      let count = (items.length - rest) / 5 + +!!rest,
        splittedItems: FactureItemDto
      doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
      // for(let i=0; i < count; i++){
      //   splittedItems = items.slice(length, length + 4)
      //   doc.addPage()
      //   doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)

      // }
      doc.save('exportedPdf.pdf')
    })
  }

  // downloadFacture() {
  // window.open(
  //   AppConsts.remoteServiceBaseUrl + '/FileLoader/GetFacture/0',
  //   '_blank',
  // )
  // this._factureServiceProxy
  //   .getByIdFactureReport(this.selectedDevisItem.id)
  //   .subscribe((res) => {
  //     const linkSource = `data:application/pdf;base64,${res}`
  //     const downloadLink = document.createElement('a')
  //     const fileName = 'facture_template.pdf'

  //     downloadLink.href = linkSource
  //     downloadLink.download = fileName
  //     downloadLink.click()
  //   })
  // }

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

  parseStatutForStatutValide(dateEmission: Moment, echeancePaiement: number) {
    return moment().isAfter(moment(dateEmission).add(echeancePaiement, 'days'))
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
