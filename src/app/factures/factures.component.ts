import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core'
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
  FactureServiceProxy,
  FactureInfosPaiementDto,
  ModePaiementEnum,
  FactureStatutEnum,
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
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { FacturePayementComponent } from './facture-payement/facture-payement.component'
import { AppConsts } from '@shared/AppConsts'
import * as printJS from 'print-js'

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css'],
  providers: [DialogService],
})
export class FacturesComponent implements OnInit, AfterViewInit, OnDestroy {
  remiseAmount: number
  favIcon: HTMLLinkElement = document.querySelector('#favIcon');

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
    
    this.favIcon.href = "assets/img/FacturesLogo.png"
    
  }

  ngAfterViewInit() {
    if (window.history.state.clientId) {
      console.log(window.history.state.clientId)
      this.newDevis(window.history.state.clientId)
    }

  }

  ngOnDestroy() {
    if (this.ref) this.ref.close()
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
      format: (number, customPrefix) =>
        this._referenceService.formatReferenceNumber(
          number,
          customPrefix ? customPrefix : ReferencePrefix.Facture,
        ),
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
      type: 'text',
      format: this.formatStatut,
    },
  ]
  DevisContentItemsCols = [
    { header: 'DESCRIPTION', field: 'description', type: 'text', colspan: 0 },
    { header: 'DATE', field: 'date', type: 'date', colspan: 0 },
    { header: 'quantity', field: 'quantity', type: 'text' },
    { header: 'UNITE', field: 'unit', type: 'text' },
    { header: 'PU HT', field: 'unitPriceHT', type: 'currency' },
    { header: 'TVA', field: 'tva', type: 'pourcentage' },
    { header: 'TOTAL TTC', field: 'totalTtc', type: 'currency', colspan: 0 },
  ]
  statusItems = [
    {
      actualStatus: FactureStatutEnum.ReglePartiellemt,
      label: 'Régler',
      icon: 'pi pi-check',
      command: async () => {
        await this.showFacturePayementDialog(true)
      },
    },
    {
      actualStatus: FactureStatutEnum.PaiementAttente,
      label: 'Régler',
      icon: 'pi pi-check',
      command: async () => {
        await this.showFacturePayementDialog()
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
  ref: DynamicDialogRef

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
        return 'Paiement en retard'
      default:
        return ''
    }
  }

  getDateEcheance(dateEmission: Date, echeance: number) {
    return moment(dateEmission).add(echeance, 'days').toDate()
  }

  factureFormatReferenceNumber(reference: number, customPrefix) {
    return this._referenceService.formatReferenceNumber(
      reference,
      customPrefix ? customPrefix : ReferencePrefix.Facture,
    )
    // return this._referenceService.formatReferenceNumber(
    //   reference,
    //   ReferencePrefix.Facture,
    // )
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
          client: this.selectedClient && this.selectedClient.id,
          dateEmission: this.selectedDate,
          echeancePaiement: this.selectedEcheance,
          statut: this.selectedStatut,
          montantTtc: this.selectedMontant,
        },
      })
    }
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
  //#endregion

  newDevis(clientId?) {
    this.displayDialog = true
    clientId && (this.child.selectedClientId = clientId)
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
              this.tableChild.tableData = this.tableChild.tableData.filter(
                (devis) => !devis || devis.id != this.selectedDevisItem.id,
              )
              this.calculateTotalMonatant()
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
  }

  firstTimeCharged = true
  selectionChange(selectionEventObject) {
    if (selectionEventObject.type == 'selectionChanged') {
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
    this.firstTimeCharged && (this.montantTotalAllDevis = this.tableChild.montantTotalAllDevis);
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
    this.montantTotalAllDevis = 0;
    this.tableChild.tableData.forEach((item) => {
      if(item) {
        let totalHt =  item.factureItems 
        .map((item) => item.unitPriceHT * item.quantity)
        .reduce((accum, current) => accum + current)

        this.montantTotalAllDevis += item.factureItems 
        .map((item) => item.totalTtc)
        .reduce((accum, current) => accum + current) -
            item.remise * totalHt / 100
        console.log(this.montantTotalAllDevis, item.remise * totalHt)
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
      let newDevis = {
        ...event.result,
        statut,
        client: {
          ...event.result.client,
          nom: event.result.client.nom
            ? event.result.client.nom
            : event.result.client.raisonSociale,
        },
      }
      newDevis.factureItems = newDevis.factureItems.map((item: any) => {
        let total_ht = item.unitPriceHT * item.quantity
        return {
          ...item,
          totalTtc: total_ht + (item.tva * total_ht) / 100,
        }
      })

      let remiseAmount =
        (newDevis.factureItems
          .map((item) => item.unitPriceHT * item.quantity)
          .reduce((accum, current) => accum + current) *
          newDevis.remise) / 100

      newDevis.montantTtc =
        newDevis.factureItems
          .map((item) => item.totalTtc)
          .reduce((accum, current) => accum + current) - remiseAmount
      this.montantTotalAllDevis += newDevis.montantTtc

      this.tableChild.tableData = [
        ...this.tableChild.tableData,
        { ...newDevis },
      ]
      this.tableChild.tableData.sort((a, b) =>
        a.reference < b.reference ? 1 : -1,
      )

      this.selectedDevisItem = {
        ...newDevis,
        dateEmission: newDevis.dateEmission.toDate(),
      }
      this.emitNotificationSelectedDevisChanged({
        ...this.selectedDevisItem,
      })
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
        console.log(this.selectedDevisItem.montantTtc)
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
  getListDevisApi$(event, data) {
    let clientFilter = event.filters.client && event.filters.client.value
    let dateEmissionFilter =
      event.filters.dateEmission && event.filters.dateEmission.value
    let echeancePaiementFilter =
      event.filters.echeancePaiement && event.filters.echeancePaiement.value
    let montantTtcFilter =
      event.filters.montantTtc && event.filters.montantTtc.value
    let statutFilter = event.filters.statut && event.filters.statut.value

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
        data = [...res.items]
        console.log(data)
        data.forEach((devis: any) => {
          devis.client.nom = !devis.client.nom
            ? devis.client.raisonSociale
            : devis.client.nom
          devis.factureItems = devis.factureItems.map((item: any) => {
            let total_ht = item.unitPriceHT * item.quantity
            return {
              ...item,
              // totalTtc: total_ht + (item.tva * total_ht) / 100,
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
          // devis.statut == FactureStatutEnum.Valide ?
          // this.parseStatutForStatutValide(devis.dateEmission, devis.echeancePaiement) : devis.statut

          let montantTtc = devis.factureItems.map((item) => item.totalTtc).reduce(
            (accum, current) => accum + current,
          )
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

  async showFacturePayementDialog(isPartiallySettled = false) {
    let facturePayementInfo: FactureInfosPaiementDto = new FactureInfosPaiementDto(
      {
        factureId: this.selectedDevisItem.id,
        id: 0,
        montantPaye: 0,
        datePaiement: moment(),
        modePaiement: ModePaiementEnum.Cheque,
      },
    )

    if (isPartiallySettled) {
      facturePayementInfo = await this._factureServiceProxy
        .getByFactureIdFactureInfosPaiement(this.selectedDevisItem.id)
        .toPromise()
    }

    this.ref = this.dialogService.open(FacturePayementComponent, {
      data: {
        reference: this.selectedDevisItem.reference,
        montantPaye: facturePayementInfo.montantPaye,
        modePaiement: facturePayementInfo.modePaiement,
        datePaiement: facturePayementInfo.datePaiement.toDate(),
      },
      header: 'Réler le payement',
      width: '35%',
      showHeader: false,
      contentStyle: {
        height: '380px',
        overflow: 'auto',
        padding: '0',
        borderRadius: '20px',
      },
      baseZIndex: 10000,
    })

    this.ref.onClose.subscribe((result) => {
      if (result) {
        let factureInfosPaiementDto = new FactureInfosPaiementDto({
          datePaiement: moment(result.datePaiement),
          montantPaye: result.montant,
          modePaiement: result.modePaiement,
          factureId: this.selectedDevisItem.id,
          id: facturePayementInfo.id,
        })

        if (result.montant == 0) {
          this._factureServiceProxy
            .changeFactureStatut(
              this.selectedDevisItem.id,
              FactureStatutEnum.Valide,
            )
            .subscribe((res) => {
              console.log(res)
              this.viewUpdateSelectedItemStatut(
                FactureStatutEnum.PaiementAttente,
              )
            })
          this._factureServiceProxy
            .deleteByFactureIdFactureInfosPaiement(this.selectedDevisItem.id)
            .subscribe((res) => {})
        } else if (result.montant >= this.selectedDevisItem.montantTtc) {
          this._factureServiceProxy
            .createOrUpdateFactureInfosPaiement(factureInfosPaiementDto)
            .subscribe((res) => {
              if (res) {
                this._toastService.info({ detail: 'La facture est réglée' })
              }
            })

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
        } else if (result.montant <= this.selectedDevisItem.montantTtc) {
          this._factureServiceProxy
            .createOrUpdateFactureInfosPaiement(factureInfosPaiementDto)
            .subscribe((res) => {
              if (res) {
                this._toastService.info({
                  detail: 'La facture est partiellement réglée',
                })
              }
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
      }
    })
  }

  print() {
    this._factureServiceProxy
      .getByIdFactureReport(this.selectedDevisItem.id)
      .subscribe((res) => {
        printJS({
          printable: res,
          type: 'pdf',
          base64: true,
        })
      })
  }

  downloadFacture() {
    // window.open(
    //   AppConsts.remoteServiceBaseUrl + '/FileLoader/GetFacture/0',
    //   '_blank',
    // )
    this._factureServiceProxy
      .getByIdFactureReport(this.selectedDevisItem.id)
      .subscribe((res) => {
        const linkSource = `data:application/pdf;base64,${res}`
        const downloadLink = document.createElement('a')
        const fileName = 'facture_template.pdf'

        downloadLink.href = linkSource
        downloadLink.download = fileName
        downloadLink.click()
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

  parseStatutForStatutValide(dateEmission: Moment, echeancePaiement: number) {
    return moment().isAfter(moment(dateEmission).add(echeancePaiement, 'days'))
      ? FactureStatutEnum.PaiementRetard
      : FactureStatutEnum.PaiementAttente
  }
}
