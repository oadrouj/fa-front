import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { TableComponent } from '@app/table/table.component'
import {
  ClientDto,
  ClientServiceProxy,
  CountryDto,
  CountryServiceAppServiceProxy,
} from '@shared/service-proxies/service-proxies'
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { FormatService } from '@shared/services/format.service'
import { ToastService } from '@shared/services/toast.service'
import { ConfirmationService, MessageService } from 'primeng/api'
import { DialogStatus } from '@shared/enums/DialogState.enum'
import { LazyTableService } from '@shared/services/lazy-table.service'

@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.scss'],
})
export class ClientDialogComponent implements OnInit {

  @Input() display: boolean

  private _dataItem
  @Input() set dataItem(value) {
    this._dataItem = value
    this.formClient = value

  }

  private _dialogStatus: DialogStatus
  @Input() set dialogStatus(value) {
    this._dialogStatus = value
    this.handleDialogState(value)
  }
  get dialogStatus() {
    return this._dialogStatus
  }

  @Output() emitHideDialogEvent = new EventEmitter()
  titreFormulaire: string
  categories: { name: string; code: string }[]
  categories2: { name: string; code: string }[]
  formClient = new ClientDto()
  types: { name: string; code: string }[]
  countries: CountryDto[]
  devises: string[]
  isFormValid: boolean
  isFormProfetionnel: any
  rSClass: string
  nomClass: string
  client: ClientDto
  delaiPaiementOptions = [30, 60, 90]

  constructor(
    private messageService: MessageService,
    private _clientServiceProxy: ClientServiceProxy,
    private _toastService: ToastService,
    private _confirmDialogService: ConfirmDialogService,
    private _formatService: FormatService,
    private _countryService: CountryServiceAppServiceProxy,
    private _lazyTableService: LazyTableService,

  ) {}

  ngOnInit() {
    this.initialiseForm()

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

    this.getAllCountries()

    this.getAllCurrencies()

  }

  handleDialogState(status: DialogStatus) {
    switch (status) {
      case DialogStatus.New:
        this.titreFormulaire = 'NOUVEAU CLIENT'
        this.initialiseForm()
        break

      case DialogStatus.Edit:
        this.titreFormulaire = 'MODIFIER CLIENT'  
        this.onFormCategorySelected()
        break

      default:
        break
    }
  }

  getAllCountries() {
    this._countryService.getAllCountries().subscribe((res) => {
      this.countries = res.items
    })
  }

  getAllCurrencies() {
    fetch('/assets/json/currencies.json')
      .then((res) => res.json())
      .then((res) => (this.devises = Object.keys(res)))
  }

  initialiseForm() {
    this.formClient = new ClientDto()
    this.formClient.pays = 'Maroc'
    this.formClient.deviseFacturation = 'MAD'
    this.formClient.categorieClient = 'PRFS'
    this.formClient.delaiPaiement = 30
    this.onFormCategorySelected()
  }

  onFormCategorySelected(): void {
    this.isFormProfetionnel = this.formClient.categorieClient == 'PRFS'
  }

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
        life: 1600,
      })
    } else if (!isNomValide) {
      this.messageService.add({
        key: 'default',
        severity: 'error',
        summary: 'Champs requis !',
        detail: 'Veuillez remplir le champs : Nom',
        life: 1600,
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

  getReferenceFromReferenceNumber = (referenceNumber: number) => this._formatService.formatReferenceNumber(referenceNumber)

  isNullOrEmpty(str: string): boolean {
    return str == undefined || str.toString().trim() == ''
  }

  getCreationDateFromClient(client: ClientDto): string {
    return client.creationTime.toDate().toLocaleDateString()
  }

  valider() {
    this.validateForm()
    if (this.isFormValid) {
      this.formClient.remisePermanente = this.formClient.remisePermanente ? this.formClient.remisePermanente : 0
      if (this.dialogStatus == DialogStatus.New) {
        this._clientServiceProxy
          .createClient(this.formClient)
          .subscribe((result) => {
            if (result != undefined) {
              var referenceClient = this.getReferenceFromReferenceNumber(
                result.reference,
              )
              this.messageService.add({
                key: 'default',
                severity: 'success',
                summary: 'Opération réussie !',
                detail:
                  'Le client est ajouté avec la référence : ' + referenceClient,
                life: 1600,
              })

              this.emitHideDialogEvent.emit(result)
              this._lazyTableService.emitDataOperation = {action: 'add', payload: result}

            } else {
              this.messageService.add({
                key: 'default',
                severity: 'error',
                summary: 'Opération échouée !',
                detail:
                  'Une erreur serveur est parvenue ! Veuillez reessayer plutard.',
                life: 1600,
              })
            }
          })
      } 
      else if(this.dialogStatus == DialogStatus.Edit) {
        this._clientServiceProxy
          .updateClient(this.formClient)
          .subscribe((result) => {
            if (result != undefined) {
              this.display = false
              var referenceClient = this.getReferenceFromReferenceNumber(
                result.reference,
              )

              this._lazyTableService.emitDataOperation = {action: 'update', payload: result}

              this.client = new ClientDto({ ...result })

              this.messageService.add({
                key: 'default',
                severity: 'success',
                summary: 'Opération réussie !',
                detail:
                  'Le client ' + referenceClient + ' est modifié avec succès.',
                life: 1600,
              })
            } else {
              this.messageService.add({
                key: 'default',
                severity: 'error',
                summary: 'Opération échouée !',
                detail:
                  'Une erreur serveur est parvenue ! Veuillez reessayer plutard.',
                life: 1600,
              })
            }
          })
      }
    }
  }
}
