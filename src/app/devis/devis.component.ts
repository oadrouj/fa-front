import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
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
import { map } from 'rxjs/operators'
import { TableComponent } from '@app/table/table.component'
import { ConvertDevisToFactureService } from '@shared/services/ConvertDevisToFacture.service'
import * as printJS from 'print-js'

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css'],
})
export class DevisComponent implements OnInit, AfterViewInit {
  remiseAmount: number
  constructor(
    private _formatService: FormatService,
    public _fakeService: FakeService,
    private _devisServiceProxy: DevisServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    private _toastService: ToastService,
    private _confirmDialogService: ConfirmDialogService,
    public globalEventsService: GlobalEventsService,
    private _convertDevisToFactureService: ConvertDevisToFactureService,
  ) {}

  favIcon: HTMLLinkElement = document.querySelector('#favIcon');
  ngOnInit() {
    this.globalEventsService.announcedThePageChangedColorSubject(
      `var(--${this.primaryColor}-color`,
    )
    
    this.favIcon.href = "assets/img/DevisLogo.png"
  }

  ngAfterViewInit() {
    if (window.history.state.clientId) {
      console.log(window.history.state.clientId);
      this.newDevis(window.history.state.clientId);
    }
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
      format: (number, customPrefix) =>
      this._formatService.formatReferenceNumber(
        number,
        customPrefix ? customPrefix : ReferencePrefix.Devis,
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
        console.log('selected', this.selectedDevisItem)
        this.showFactureDialog()
        this.emitNotificationSelectedDevisChanged({
          ...this.selectedDevisItem,
          factureItems: this.selectedDevisItem.factureItems,
          dateEmission : this.selectedDevisItem.dateEmission instanceof Date 
            ? this.selectedDevisItem.dateEmission
          : moment(this.selectedDevisItem.dateEmission).toDate()
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
          if (res.success) {
            this._toastService.success({ detail: 'Le devis est devient valide' })
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

  devisFormatReferenceNumber(reference: number, customPrefix ) {
    return  this._formatService.formatReferenceNumber(
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
  //#endregion

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
              this.calculateTotalMonatant();

              // this.montantTotalAllDevis -= this.selectedDevisItem.montantTtc
              this.emitRowDeletedEvent(this.tableChild.tableData[0])
              this._toastService.info({
                summary: 'Opération réussie',
                detail:  'Le devis est supprimé avec succès',
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
    if (selectionEventObject.type == 'selectionChanged' || selectionEventObject.type == 'firstSelectionChanged') {
      this.selectedDevisItem = selectionEventObject.result
    } else if (selectionEventObject.type == 'delete') {
      this.selectedDevisItem = selectionEventObject.result
    }
    this.calculateSummaryTotalHTAndTVA();
    this.emitNotificationSelectedDevisChanged({
      ...this.selectedDevisItem,
      dateEmission: new Date(this.selectedDevisItem.dateEmission._i)
        // ? new Date(this.selectedDevisItem.dateEmission._i)
        // : new Date(this.selectedDevisItem.dateEmission._d),
    })
    this.firstTimeCharged && (this.montantTotalAllDevis = this.tableChild.montantTotalAllDevis);
    this.firstTimeCharged = false
    // this.montantTotalAllDevis = this.tableChild.montantTotalAllDevis
  } 

  onDialogClose(){
    this.displayDialog = false
    document.body.style.overflow = 'auto'
    this.calculateTotalMonatant();
  }
  
  calculateSummaryTotalHTAndTVA() {
    if (this.selectedDevisItem) {
      this.summaryTotalHT = (this.selectedDevisItem as any).devisItems
        .map((item) => item.unitPriceHT * item.quantity)
        .reduce((accum, current) => accum + current)
      this.summaryTVA = this.selectedDevisItem.devisItems
        .map((item) => (item.unitPriceHT * item.quantity * item.tva) / 100)
        .reduce((accum, current) => accum + current)
      
      this.remiseAmount = this.calculateRemise( this.selectedDevisItem.remise, this.summaryTotalHT)

    }
  }
  calculateTotalMonatant() {
    this.montantTotalAllDevis = 0;
    this.tableChild.tableData.forEach((item) => {
      if(item) {
        let totalHt =  item.devisItems 
        .map((item) => item.unitPriceHT * item.quantity)
        .reduce((accum, current) => accum + current)

        this.montantTotalAllDevis += item.devisItems
        .map((item) => item.totalTtc)
        .reduce((accum, current) => accum + current) -
            item.remise * totalHt / 100
            }
    })


  }

  calculateRemise(remise, totalHT) {
    return totalHT * remise /100;
  }

  crudOperationTreatment(event) {
    if (event.crudOperation == 'create') {

      let newDevis = {
        ...event.result,
        client: {
          ...event.result.client,
          nom: event.result.client.nom ? event.result.client.nom : event.result.client.raisonSociale
          },
      }
      newDevis.devisItems = newDevis.devisItems.map((item: any) => {
        let total_ht = item.unitPriceHT * item.quantity
        return {
          ...item,
          totalTtc: total_ht + (item.tva * total_ht) / 100,
        }
      })

      let remiseAmount = 
      (newDevis.devisItems
        .map((item) => item.unitPriceHT * item.quantity)
        .reduce((accum, current) => accum + current) * newDevis.remise) /100
      

      newDevis.montantTtc =
        newDevis.devisItems
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

      this.selectedDevisItem && this.selectedDevisItem.devisItems.forEach(
        (devisItem) => (devisItem.date = devisItem.date.toDate()),
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
        client: {
          ...this.selectedDevisItem.client,
          nom: event.result.client.nom ? event.result.client.nom : event.result.client.raisonSociale
          },
      }

      //Calculate total montant
      this.selectedDevisItem.devisItems = this.selectedDevisItem.devisItems.map(
        (item: any) => {
          let total_ht = item.unitPriceHT * item.quantity
          return {
            ...item,
            totalTtc: total_ht + (item.tva * total_ht) / 100,
          }
        },
      )

      let remiseAmount = 
      (this.selectedDevisItem.devisItems
        .map((item) => item.unitPriceHT * item.quantity)
        .reduce((accum, current) => accum + current) * this.selectedDevisItem.remise) /100
        
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
  getListDevisApi$(event, data) {
    console.log(event.filters.echeancePaiement)
    let clientFilter = event.filters.client && event.filters.client.value
    let dateEmissionFilter = event.filters.dateEmission && event.filters.dateEmission.value
    let echeancePaiementFilter = event.filters.echeancePaiement && event.filters.echeancePaiement.value
    let montantTtcFilter = event.filters.montantTtc && event.filters.montantTtc.value
    let statutFilter = event.filters.statut && event.filters.statut.value

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
        data = [...res.items]
        data.forEach((devis: any) => {
          devis.client.nom = !devis.client.nom ? devis.client.raisonSociale : devis.client.nom
          devis.devisItems = devis.devisItems.map((item: any) => {
            let totalHt = item.unitPriceHT * item.quantity
            return {
              ...item,
              // totalTtc: total_ht + (item.tva * total_ht) / 100,
            }
          })
          devis.statut = moment().isAfter(
            (moment(devis.dateEmission)).add(devis.echeancePaiement, 'days'),
          )
            ? DevisStatutEnum.Expire
            : devis.statut

          let montantTtc =
            devis.devisItems
              .map((item) => item.totalTtc)
              .reduce((accum, current) => accum + current)
          let montantHt =
              devis.devisItems
                .map((item) => item.unitPriceHT * item.quantity)
                .reduce((accum, current) => accum + current)

          devis.montantTtc = montantTtc - ( montantHt * devis.remise / 100)
          
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
      let newDevis = {
        ...event.result,
        remise: 0,
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
        .reduce((accum, current) => accum + current) * newDevis.remise) /100
        
      newDevis.montantTtc =
        newDevis.factureItems
          .map((item) => item.totalTtc)
          .reduce((accum, current) => accum + current) - remiseAmount
 
      this.montantTotalAllDevis += newDevis.montantTtc

      // this.tableChild.tableData = [...this.tableChild.tableData ,{...newDevis}]
      // this.tableChild.tableData.sort((a, b) => a.reference < b.reference ? 1 : -1)

      // this.selectedDevisItem = {
      //   ...newDevis,
      //   dateEmission: newDevis.dateEmission.toDate()
      // }
      // this.emitNotificationSelectedDevisChanged({
      //   ...this.selectedDevisItem
      // })
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
        .reduce((accum, current) => accum + current) * this.selectedDevisItem.remise) /100
        
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

   downloadDevis() {
    this._devisServiceProxy.getByIdDevisReport(this.selectedDevisItem.id).subscribe(res => {
      const linkSource = `data:application/pdf;base64,${res}`;
      const downloadLink = document.createElement("a");
      const fileName = "Devis.pdf";
  
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    })
  }

    print(){
    this._devisServiceProxy.getByIdDevisReport(this.selectedDevisItem.id).subscribe(res => {
      printJS({
        printable: res,
        type: "pdf",
        base64: true
      })
    })
  }

}
