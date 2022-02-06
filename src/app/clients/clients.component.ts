import {
  AfterViewInit,
  Component,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core'
import { Router } from '@angular/router'
import { TableComponent } from '@app/table/table.component'
import { AppComponentBase } from '@shared/app-component-base'
import { DialogStatus } from '@shared/enums/DialogState.enum'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import { GlobalEventsService } from '@shared/globalEventsService'
import { EntityDto } from '@shared/paged-listing-component-base'
import {
  // Client,
  ClientDto,
  ClientServiceProxy,
  CountryDto,
  CountryServiceAppServiceProxy,
  DevisDto,
  DevisServiceProxy,
  DevisStatutEnum,
  FactureDto,
  FactureServiceProxy,
  FactureStatutEnum,
} from '@shared/service-proxies/service-proxies'

import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { FormatService } from '@shared/services/format.service'
import { LazyTableService } from '@shared/services/lazy-table.service'
import { ToastService } from '@shared/services/toast.service'
import * as moment from 'moment'
import {
  MessageService,
  ConfirmationService,
  LazyLoadEvent,
  SortEvent,
  ConfirmEventType,
} from 'primeng/api'
import { Subject } from 'rxjs'
import { map } from 'rxjs/operators'

interface Category {
  name: string
  code: string
}
interface Type {
  name: string
  code: string
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent extends AppComponentBase implements OnInit {
  constructor(
    injector: Injector,
    private confirmationService: ConfirmationService,
    private _clientServiceProxy: ClientServiceProxy,
    private _globalEventsService: GlobalEventsService,
    private _formatService: FormatService,
    private _factureServiceProxy: FactureServiceProxy,
    private _devisServiceProxy: DevisServiceProxy,
    private _toastService: ToastService,
    private _confirmDialogService: ConfirmDialogService,
    private _lazyTableService: LazyTableService,
  ) {
    super(injector)
  }

  //#region properties
  tableSelectionColor = 'var(--light-green-color)'
  primaryColor = 'blue'
  @ViewChild(TableComponent, { static: false }) tableChild: TableComponent
  champsRecherche: string = ''
  categories: Category[]
  categories2: Category[]
  types: Type[]
  client: ClientDto = new ClientDto()
  clientApercu: ClientDto
  cols = [
    {
      header: 'REFERENCE',
      field: 'reference',
      type: 'text',
      format: (number) =>
        this._formatService.formatReferenceNumber(
          number,
          ReferencePrefix.Client,
        ),
    },
    {
      header: "DATE D'AJOUT",
      field: 'creationTime',
      type: 'date',
      format: (date) => (date._i ? new Date(date._i) : new Date(date._d)),
    },
    {
      header: 'CLIENT',
      field: 'displayName',
      type: 'text',
    },
    {
      header: 'FACTURES EN ATTENTE',
      field: 'pendingInvoicesAmount',
      type: 'currency',
    },
    {
      header: 'FACTURES EN RETARD',
      field: 'overdueInvoicesAmount',
      type: 'currency',
    },
  ]
  selectedCategory = ''
  selectedType = ''
  Currency = 'MAD'
  hasFactures: boolean
  hasDevis: boolean
  factureList: FactureDto[]
  devisList: DevisDto[]
  totalAmountPendingFactures = 0
  totalAmountOverdueFactures = 0
  scrollHeight: string = '0px'
  favIcon: HTMLLinkElement = document.querySelector('#favIcon')
  estimateDialogIsVisible: boolean
  isClientProfetionnel: boolean
  invoiceDialogIsVisible: boolean
  documentDialogStatus: DialogStatus
  documentDataItem: any
  clientDialogStatus: DialogStatus
  clientDialogIsVisible: boolean
  selectedTabName = ''
  devisCols = [
    {
      header: 'REFERENCE',
      field: 'reference',
      type: 'text',
      format: (number, customPrefix) =>
        this._formatService.formatReferenceNumber(
          number,
          customPrefix ? customPrefix : ReferencePrefix.Devis,
        ),
    },
    {
      header: 'DATE D’EMISSION',
      field: 'dateEmission',
      type: 'date',
      format: (date) =>
        date && (date._i ? new Date(date._i) : new Date(date._d)),
    },
    {
      header: 'ECHEANCE',
      field: 'echeancePaiement',
      type: 'text',
      suffix: 'jours',
    },
    {
      header: 'TOTAL HT',
      field: 'montantHt',
      type: 'currency',
    },
    {
      header: 'TOTAL TTC',
      field: 'montantTtc',
      type: 'currency',
    },
    {
      header: 'STATUT',
      field: 'statut',
      type: 'text',
      format: this._formatService.formatDevisStatut,
    },
  ]

  factureCols = [
    {
      header: 'REFERENCE',
      field: 'reference',
      type: 'text',
      format: (number, customPrefix) =>
        this._formatService.formatReferenceNumber(
          number,
          customPrefix ? customPrefix : ReferencePrefix.Facture,
        ),
    },
    {
      header: 'DATE D’EMISSION',
      field: 'dateEmission',
      type: 'date',
      format: (date) =>
        date && (date._i ? new Date(date._i) : new Date(date._d)),
    },
    {
      header: 'ECHEANCE',
      field: 'echeancePaiement',
      type: 'text',
      suffix: 'jours',
    },
    {
      header: 'TOTAL HT',
      field: 'montantHt',
      type: 'currency',
    },
    {
      header: 'TOTAL TTC',
      field: 'montantTtc',
      type: 'currency',
    },
    {
      header: 'STATUT',
      field: 'statut',
      type: 'text',
      format: this._formatService.formatFactureStatut,
    },
  ]

  //#endregion

  ngOnInit(): void {
    this._globalEventsService.announcedThePageChangedColorSubject('#2A95D1')

    if (window.history.state.clientCreationFromDevis) {
      this.showDialogNouveau()
    }

    this.favIcon.href = '../../assets/img/ClientsTitreIcon.png'
    this.factureList = [new FactureDto()]
    this.devisList = [new DevisDto()]

    var height = Math.max(document.body.offsetHeight, 770)

    this.scrollHeight = (height - 356).toString() + 'px'

    this._lazyTableService.rowSelected$.subscribe((res) => {
      this.totalAmountPendingFactures = 0
      this.totalAmountOverdueFactures = 0
      this.tableChild.tableData.forEach((item) => {
        this.totalAmountPendingFactures += item.pendingInvoicesAmount
        this.totalAmountOverdueFactures += item.overdueInvoicesAmount
      })

      this.client = res
      this.client && this.getFiveLastFacturesOrDevisElements(this.selectedTabName)
      if (this.client == null) this.client = new ClientDto()
      this.isClientProfetionnel = this.client.categorieClient == 'PRFS'
    })
    this.categories = [
      { name: 'Particulier', code: 'PRTC' },
      { name: 'Professionnel', code: 'PRFS' },
    ]
   
    this.types = [
      { name: 'Client', code: 'client' },
      { name: 'Prospect', code: 'prospect' },
    ]
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
    console.log(this.selectedCategory)

      this.filterSubject.next({
        type: 'filterByButton',
        value: {
          category: this.selectedCategory,
          type: this.selectedType,
        },
      })
    }
  }

  resetFilterFields() {
    this.selectedCategory = ''
    this.selectedType = ''
    this.emitFilterEvent('filterByButton', null)
  }

  chargerListeClients(event) {
    let categorieFilter =
      event.filters && event.filters.category && event.filters.category.value
    let typeFilter =
      event.filters && event.filters.type && event.filters.type.value
    return this._clientServiceProxy
      .getAllClients(
        event.first,
        event.rows,
        event.globalFilter,
        event.sortField,
        event.sortOrder,
        categorieFilter,
        typeFilter,
      )
      .pipe(
        map((data) => {
          return {
            items: data.items,
            length: data.totalEntityItems,
            montantTotalAllDevis: 0,
          }
        }),
      )
  }

  getFiveLastFacturesOrDevisElements(element: string) {
    this.hasFactures = false
    this.hasDevis = false
    if (element == 'factures') {
      this._factureServiceProxy
        .getAllFacture(
          0,
          5,
          '',
          '',
          '',
          this.client.id,
          undefined,
          undefined,
          undefined,
          undefined,
        )
        .subscribe((res) => {
          if (res.items.length > 0) {
            this.hasFactures = true
            res.items.forEach((devis: any) => {
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
              devis.montantHt = devis.factureItems
                .map((item) => item.unitPriceHT * item.quantity)
                .reduce((accum, current) => accum + current)

              devis.montantTtc =
                montantTtc - (devis.montantHt * devis.remise) / 100
            })
            this.factureList = res.items
          }
        })
    } else {
      this._devisServiceProxy
        .getAllDevis(
          0,
          5,
          '',
          '',
          '',
          this.client.id,
          undefined,
          undefined,
          undefined,
          undefined,
        )
        .subscribe((res) => {
          if (res.items.length > 0) {
            this.hasDevis = true
            res.items.forEach((devis: any) => {
              devis.statut = moment().isAfter(
                moment(devis.dateEmission).add(devis.echeancePaiement, 'days'),
              )
                ? DevisStatutEnum.Expire
                : devis.statut

              let montantTtc = devis.devisItems
                .map((item) => item.totalTtc)
                .reduce((accum, current) => accum + current)
              devis.montantHt = devis.devisItems
                .map((item) => item.unitPriceHT * item.quantity)
                .reduce((accum, current) => accum + current)

              devis.montantTtc =
                montantTtc - (devis.montantHt * devis.remise) / 100
            })

            this.devisList = res.items
          }
        })
    }
  }

  handleTabChange(event) {
    if (event.index == 1) {
      this.getFiveLastFacturesOrDevisElements('factures')
      this.selectedTabName = 'factures'
    } else if (event.index == 2) {
      this.getFiveLastFacturesOrDevisElements('devis')
      this.selectedTabName = 'devis'
    }
  }

  showDialogNouveau() {
    this.clientDialogIsVisible = true
    this.clientDialogStatus = DialogStatus.New
  }

  showDialogModifier() {
    this.clientDialogIsVisible = true
    this.clientDialogStatus = DialogStatus.Edit
  }

  closeClientDialog() {
    this.clientDialogIsVisible = false
    this.clientDialogStatus = undefined
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

  getReferenceFromReferenceNumber = (referenceNumber: number) => 
    this._formatService.formatReferenceNumber(referenceNumber, ReferencePrefix.Client)

  supprimerClient(): void {
    this._confirmDialogService.deleteConfirm({
      acceptCallback: () => {
        this._clientServiceProxy.deleteClient(this.client.id).subscribe(() => {
          var referenceClient = this.getReferenceFromReferenceNumber(
            this.client.reference,
          )

          this._lazyTableService.emitDataOperation = {
            action: 'remove',
            payload: this.client.id,
          }
          this.totalAmountPendingFactures = 0
          this.totalAmountOverdueFactures = 0
          this._toastService.success({
            summary: 'Opération réussie',
            detail:
              'Le client ' + referenceClient + ' est supprimé avec succès.',
          })
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

  newDevis() {
    this.estimateDialogIsVisible = true
    this.documentDialogStatus = DialogStatus.New
    this.documentDataItem = new DevisDto()
    this.documentDataItem.client = this.client
  }

  newFacture() {
    this.invoiceDialogIsVisible = true
    this.documentDialogStatus = DialogStatus.New
    this.documentDataItem = new FactureDto()
    this.documentDataItem.client = this.client
  }

  resetDocumentDialogStatus = () => this.documentDialogStatus = undefined

  onEstimateDialogClose(){
    this.resetDocumentDialogStatus()
    this.estimateDialogIsVisible = false
  }

  onInvoiceDialogClose(){
    this.resetDocumentDialogStatus()
    this.invoiceDialogIsVisible = false
  }

}
