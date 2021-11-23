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
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import { GlobalEventsService } from '@shared/globalEventsService'
import {
  // Client,
  ClientDto,
  ClientServiceProxy,
  DevisDto,
  DevisServiceProxy,
  DevisStatutEnum,
  FactureDto,
  FactureServiceProxy,
  FactureStatutEnum,
} from '@shared/service-proxies/service-proxies'

import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { FormatService } from '@shared/services/format.service'
import { ToastService } from '@shared/services/toast.service'
import csc, { ICountry } from 'country-state-city'
import { environment } from 'environments/environment'
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
interface Devise {
  name: string
  code: string
}
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent extends AppComponentBase
  implements OnInit {
  display: boolean = false
  nouveau: boolean = true
  titreFormulaire: string = ''
  rSClass: string = ''
  nomClass: string = ''
  tableSelectionColor = 'var(--light-green-color)'
  formClient: ClientDto = new ClientDto()
  @ViewChild(TableComponent, { static: false })
  tableChild: TableComponent
  champsRecherche: string = ''
  categories: Category[]
  categories2: Category[]
  types: Type[]

  client: ClientDto = new ClientDto()
  clientApercu: ClientDto
  clients: ClientDto[]

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
      field: 'nom',
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
    }
  ]
  selectedCategory: string
  selectedType: string

  countries: ICountry[]
  Currency = 'MAD'
  telRegEx: RegExp = /^[^<>*!]+$/

  devises: Devise[]

  isFormProfetionnel: boolean = true
  isInsert: boolean
  hasFactures: boolean
  hasDevis: boolean
  factureList: FactureDto[]
  devisList: DevisDto[]
  localFacturesList : {clientId: number, items: FactureDto[]}[] = []
  localDevisList: {clientId: number, items: DevisDto[]}[] = []
  totalAmountPendingFactures: number
  totalAmountOverdueFactures: number

  constructor(
    injector: Injector,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private _clientServiceProxy: ClientServiceProxy,
    private _globalEventsService: GlobalEventsService,
    private _formatService: FormatService,
    private _factureServiceProxy: FactureServiceProxy,
    private _devisServiceProxy: DevisServiceProxy,
    private _toastService: ToastService,
    private _confirmDialogService: ConfirmDialogService,
    private _router: Router,
  ) {
    super(injector)
  }

  scrollHeight: string = '0px'
  favIcon: HTMLLinkElement = document.querySelector('#favIcon')

  ngOnInit(): void {
    this._globalEventsService.announcedThePageChangedColorSubject('#2A95D1')

    this.favIcon.href = '../../assets/img/ClientsTitreIcon.png'
    this.factureList = [new FactureDto()]
    this.devisList = [new DevisDto()]
    this.categories = [
      { name: 'Particulier', code: 'PRTC' },
      { name: 'Professionnel', code: 'PRFS' },
    ]
    this.categories2 = [
      { name: 'PROFESSIONNEL', code: 'PRFS' },
      { name: 'PARTICULIER', code: 'PRTC' },
    ]
    this.formClient.categorieClient = 'PRFS'
    this.types = [
      { name: 'Client', code: 'client' },
      { name: 'Prospect', code: 'prospect' },
    ]
    this.devises = [
      { name: 'MAD', code: 'MAD' },
      { name: 'EUR', code: 'EUR' },
      { name: 'DOL', code: 'DOL' },
    ]

    // this.chargerListeClients();
    // if (this.clients.length != 0) {
    //   this.fillClientApercu(this.clients[0]);
    // } else {
    //   this.clientApercu = new ClientDto();
    // }

    this.countries = csc.getAllCountries()
    this.initialiseForm()

    var height = Math.max(document.body.offsetHeight, 770)

    this.scrollHeight = (height - 356).toString() + 'px'
  }

  sortField: string
  sortOrder: number
  selectedTabName = ""
  devisCols =  [
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
      format: (date) => (date._i ? new Date(date._i) : new Date(date._d)),
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

  factureCols =  [
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
      format: (date) => (date._i ? new Date(date._i) : new Date(date._d)),
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
  
  //#region Subject Events
  notifySelectedDevisChanged = new Subject<any>()
  emitNotificationSelectedDevisChanged(client: any) {
    this.notifySelectedDevisChanged.next(client)
  }
  
  rowDeletedSubject = new Subject<any>()
  emitRowDeletedEvent(deviItem: any) {
    this.rowDeletedSubject.next(deviItem)
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
          category: this.selectedCategory,
          type: this.selectedType,
        },
      })
    }
  }
  //#endregion
  // chargerListeClients(): void {
  //   this._clientServiceProxy.getAllClients(this.champsRecherche, this.selectedCategory, this.selectedType,
  //     this.sortField, this.sortOrder).subscribe((listResult) => {
  //       this.clients = listResult.items;
  //       if (this.clients.length != 0) {
  //         this.fillClientApercu(this.clients[0]);
  //       } else {
  //         this.clientApercu = new ClientDto();
  //       }
  //     });
  // }
  chargerListeClients(event, data) {
    
    let categorieFilter = event.filters.category && event.filters.category.value
    let typeFilter = event.filters.type && event.filters.type.value
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
          data.items.forEach(
            (item) => {
              item.categorieClient == 'PRFS' && (item.nom = item.raisonSociale)
            }
          )
       
          return {
            items: data.items,
            length: data.items.length,
            montantTotalAllDevis: 0,
          }
        }),
      )
  }

  getFiveLastFacturesOrDevisElements(element: string) {
    this.hasFactures = false
    this.hasDevis = false
    if (element == 'factures') {
      let index;
      if((index = this.localFacturesList.findIndex(item => item.clientId == this.client.id)) >= 0){
        let items = this.localFacturesList[index].items
        this.hasFactures = items.length > 0
        this.factureList = this.hasFactures ? [...items] : [new FactureDto()];
      }
      else {
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
              
              devis.montantTtc = montantTtc - (devis.montantHt * devis.remise) / 100
            })
            this.factureList = res.items;
          }

          this.localFacturesList = [...this.localFacturesList, {clientId : this.client.id, items:  res.items}]
        })
      }
    } else {

      let index;
      if((index = this.localDevisList.findIndex(item => item.clientId == this.client.id)) >= 0){
        let items = this.localDevisList[index].items
        this.hasDevis = items.length > 0
        this.devisList = this.hasDevis ? [...items] : [new DevisDto()];

      }
      else {
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

              devis.montantTtc = montantTtc - (devis.montantHt * devis.remise) / 100
            })

            this.devisList = res.items;
          }
          this.localDevisList = [...this.localDevisList, {clientId : this.client.id, items: res.items}]
        })
      }
    }

  }

  handleTabChange(event) {
    if (event.index == 1) {
      this.getFiveLastFacturesOrDevisElements('factures')
      this.selectedTabName = 'factures';

    } else if (event.index == 2) {
      this.getFiveLastFacturesOrDevisElements('devis')
      this.selectedTabName = "devis";

    }
  }

  initialiseForm(): void {
    this.formClient = new ClientDto()
    this.formClient.pays = 'MA'
    this.formClient.deviseFacturation = 'MAD'
    this.formClient.categorieClient = 'PRFS'
    this.onFormCategorySelected()
  }

  isClientProfetionnel: boolean

  selectionChange(selectionEventObject) {
    if(selectionEventObject.type == 'firstSelectionChanged'){
      this.totalAmountPendingFactures = 0
      this.totalAmountOverdueFactures = 0
      this.tableChild.tableData.forEach(
        (item) => {
          item.categorieClient == 'PRFS' && (item.nom = item.raisonSociale)
          this.totalAmountPendingFactures += item.pendingInvoicesAmount
          this.totalAmountOverdueFactures += item.overdueInvoicesAmount

        }
      )
    }
    
    this.client = selectionEventObject.result
    
    this.emitNotificationSelectedDevisChanged({
      ...this.client,
    })

    this.client && this.getFiveLastFacturesOrDevisElements(this.selectedTabName)
    if (this.client == null) this.client = new ClientDto()
      this.isClientProfetionnel = this.client.categorieClient == 'PRFS'
  }

  fillClientApercu(client): void {
    this.clientApercu = client
  }

  getPaysFromIsoCode(): string {
    return csc.getCountryByCode(this.client.pays).name
  }

  showDialogNouveau() {
    this.isInsert = true
    this.nouveau = true
    this.titreFormulaire = 'NOUVEAU CLIENT'
    this.initialiseForm()
    this.display = true
  }

  showDialogModifier() {
    this.isInsert = false
    this.nouveau = false
    this.titreFormulaire = 'MODIFIER CLIENT'
    this._clientServiceProxy
      .getByIdClient(this.client.id)
      .subscribe((result) => {
        this.formClient = result
        this.onFormCategorySelected()
        this.display = true
      })
  }

  onFormCategorySelected(): void {
    this.isFormProfetionnel = this.formClient.categorieClient == 'PRFS'
  }

  isNullOrEmpty(str: string): boolean {
    return str == undefined || str.toString().trim() == ''
  }

  replaceIfIsNullOrEmpty(str: string): string {
    if (this.isNullOrEmpty(str)) {
      return '...'
    } else {
      return str
    }
  }

  isFormValid: boolean
  validateForm(): void {
    this.isFormValid = false

    var isRaisonSocialeValide =
      !this.isFormProfetionnel ||
      !this.isNullOrEmpty(this.formClient.raisonSociale)
    var isNomValide =
      this.isFormProfetionnel || !this.isNullOrEmpty(this.formClient.nom)

    this.rSClass = isRaisonSocialeValide ? '' : 'rSClass'
    this.nomClass = isNomValide ? '' : 'nomClass'

    if (!isRaisonSocialeValide) {
      this.messageService.add({
        key: 'default',
        severity: 'error',
        summary: 'Champs requis !',
        detail: 'Veuillez remplir le champs : Raison sociale',
      })
    } else if (!isNomValide) {
      this.messageService.add({
        key: 'default',
        severity: 'error',
        summary: 'Champs requis !',
        detail: 'Veuillez remplir le champs : Nom',
      })
    } else {
      this.formClient.raisonSociale = this.isFormProfetionnel
        ? this.formClient.raisonSociale
        : ''
      this.formClient.ice = this.isFormProfetionnel ? this.formClient.ice : ''
      this.formClient.secteurActivite = this.isFormProfetionnel
        ? this.formClient.secteurActivite
        : ''
      this.formClient.nom = !this.isFormProfetionnel ? this.formClient.nom : ''
      this.isFormValid = true
    }
  }

  getReferenceFromReferenceNumber(referenceNumber: number): string {
    let reference = referenceNumber + ''
    while (reference.length < 5) reference = '0' + reference
    return referenceNumber == undefined || referenceNumber == 0
      ? '...'
      : 'C' + reference
  }

  getNomFromClient(client: ClientDto): string {
    if (client.categorieClient == 'PRFS') {
      return client.raisonSociale
    } else if (client.categorieClient == 'PRTC') {
      return client.nom
    }
  }

  getCreationDateFromClient(client: ClientDto): string {
    return client.creationTime.toDate().toLocaleDateString()
  }

  valider() {
    this.validateForm()
    if (this.isFormValid) {
      if (this.isInsert) {

        this._clientServiceProxy
          .createClient(this.formClient)
          .subscribe((result) => {
            if (result != undefined) {
              this.display = false
              var referenceClient = this.getReferenceFromReferenceNumber(
                result.reference,
              )
              // this.chargerListeClients();
              this.messageService.add({
                key: 'default',
                severity: 'success',
                summary: 'Opération réussie !',
                detail:
                  'Le client est ajouté avec la référence : ' + referenceClient,
              })

              result = {
                ...result,
                nom:
                  result.categorieClient == 'PRFS' &&
                  (result.nom = result.raisonSociale),
              } as any

              this.tableChild.tableData = [
                ...this.tableChild.tableData,
                { ...result },
              ]

              this.tableChild.tableData.sort((a, b) =>
                a.reference < b.reference ? 1 : -1,
              )

              this.client = new ClientDto({ ...result })
              this.emitNotificationSelectedDevisChanged({
                ...this.client,
              })
            } else {
              this.messageService.add({
                key: 'default',
                severity: 'error',
                summary: 'Opération échouée !',
                detail:
                  'Une erreur serveur est parvenue ! Veuillez reessayer plutard.',
              })
            }
          })
      } else {
        this._clientServiceProxy
          .updateClient(this.formClient)
          .subscribe((result) => {
            if (result != undefined) {
              this.display = false
              var referenceClient = this.getReferenceFromReferenceNumber(
                result.reference,
              )
              // this.chargerListeClients();
              let index = this.tableChild.tableData.findIndex(
                (item) => item.id == this.client.id,
              )

              result = {
                ...result,
                nom:
                  result.categorieClient == 'PRFS' &&
                  (result.nom = result.raisonSociale),
              } as any
              this.tableChild.tableData[index] = {
                ...result,
              }
              this.tableChild.tableData = [...this.tableChild.tableData]

              this.tableChild.tableData.sort((a, b) =>
                a.reference < b.reference ? 1 : -1,
              )

              this.client = new ClientDto({ ...result })
              this.emitNotificationSelectedDevisChanged({
                ...this.client,
              })

              this.messageService.add({
                key: 'default',
                severity: 'success',
                summary: 'Opération réussie !',
                detail:
                  'Le client ' + referenceClient + ' est modifié avec succès.',
              })
            } else {
              this.messageService.add({
                key: 'default',
                severity: 'error',
                summary: 'Opération échouée !',
                detail:
                  'Une erreur serveur est parvenue ! Veuillez reessayer plutard.',
              })
            }
          })
      }
    }
  }

  supprimerClient(): void {
    // this.messageService.add({ key: 'default', severity: 'success', summary: 'Opération réussie !', detail: 'Le client ' + referenceClient + ' a été supprimé avec succès.' });

    this._confirmDialogService.deleteConfirm({
      acceptCallback: () => {
        this._clientServiceProxy.deleteClient(this.client.id).subscribe(() => {
          var referenceClient = this.getReferenceFromReferenceNumber(
            this.client.reference,
          )
          this.tableChild.tableData = this.tableChild.tableData.filter(
            (item) => !item || item.id != this.client.id,
          )
          // this.montantTotalAllDevis -= this.selectedDevisItem.montantTtc
          this.emitRowDeletedEvent(this.tableChild.tableData[0])
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
    this._router.navigate(['/app/Devis'], {
      state: { clientId: this.client.id },
    })
  }

  newFacture() {
    this._router.navigate(['/app/Factures'], {
      state: { clientId: this.client.id },
    })
  }

  navigateTo(url: string){
    this._router.navigate([url])
  }
}
