import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl,
  FormControl,
  Validators,
} from '@angular/forms'
import { DialogStatus } from '@shared/enums/DialogState.enum'
import { DevisContentItem } from '@shared/models/DevisContentItem'
import { DevisItem } from '@shared/models/DevisItem'
import { FactureContentItem } from '@shared/models/FactureContentItem'
import { FormatService } from '@shared/services/format.service'
import { LazyLoadEvent, MessageService } from 'primeng/api'
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs'
import { ToastService } from '@shared/services/toast.service'
import {
  ClientForAutoCompleteDto,
  ClientForAutoCompleteDtoListResultDto,
  ClientServiceProxy,
  CreateFactureInput,
  DevisServiceProxy,
  UpdateFactureInput,
  FactureServiceProxy,
  FactureItemDto,
  DevisStatutEnum,
  CatalogueServiceProxy,
  CatalogueForAutoCompleteDto,
  CatalogueForAutoCompleteDtoListResultDto,
  ClientDefaultsDto,
  CountryDto,
  CountryServiceAppServiceProxy,
  ClientDto,
  FactureDto,
  FactureStatutEnum,
  CreateCatalogueInput,
} from '@shared/service-proxies/service-proxies'
import * as moment from 'moment'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import { DateHelper } from '@shared/helpers/DateHelper'
import {
  GlobalEventsService,
  ModificationStatusEnum,
} from '@shared/globalEventsService'
import { map } from 'rxjs/operators'
import { ConvertDevisToFactureService } from '@shared/services/ConvertDevisToFacture.service'
import { Router } from '@angular/router'
import { ValidationHelper } from '@shared/helpers/ValidationHelper'
import { CalculationsService } from '@shared/services/calculations.service'
import { ConfirmDialog } from 'primeng/confirmdialog'
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
@Component({
  selector: 'app-factures-dialog',
  templateUrl: './factures-dialog.component.html',
  styleUrls: ['./factures-dialog.component.css'],
  providers: [ToastService],
})
export class FacturesDialogComponent
  implements OnInit, AfterViewInit {
    
  remiseValue: number
  filteredCatalogues: CatalogueForAutoCompleteDto[]

  //#region ClientDialog
  formClient: any
  clientDialogDisplay: boolean
  isFormProfetionnel: boolean

  rSClass: string
  nomClass: string
  categories2 = [
    { name: 'PROFESSIONNEL', code: 'PRFS' },
    { name: 'PARTICULIER', code: 'PRTC' },
  ]
  devises: string[]
  countries: CountryDto[]
  devisIsSaved: any
  saveBrouillonHide = false
  previousPreviewState: { item: any; title: any; summaryTotalHT: any; summaryTVA: any; remiseAmount: any; contentItemsCols: any }
  devisItemRowIndex: number
  //#endregion

  constructor(
    private formBuilder: FormBuilder,
    private _formatService: FormatService,
    private _toastService: ToastService,
    private _factureServiceProxy: FactureServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    private _catalogueServiceProxy: CatalogueServiceProxy,
    public globalEventsService: GlobalEventsService,
    private _router: Router,
    private _devisServiceProxy: DevisServiceProxy,
    private _calculationsService: CalculationsService,
    private _countryService: CountryServiceAppServiceProxy,
    private _confirmDialogService: ConfirmDialogService,
  ) {}
  ngOnInit() {
    this.devisIsSaved = false;
    this.initiateFormGroup()
    this.devisOptionsFormGroup = this.initiateDevisOptionsGroup()
    
    //ClientDialog: 
    this.initialiseClientForm()
    //
    this.initiateCatalogueFormGroup()

    this.eventsSubscription = this.SelectDevisItemEvent.subscribe(
      (devisItem: any) => {
        this.selectedDevisItem = {
          ...devisItem,
          client: devisItem.client,
        }
        // dateEmission: this.selectedDevisItem.dateEmission.toDate()}
      },
    )

    this.dialogStatusEvent.subscribe(
      ({ statut, dialogComponent, isConvertedDevis }) => {
        document.body.style.overflow = 'hidden'
        this.manuelReference = false
        this.saveBrouillonHide =  false

        if (dialogComponent == 'facture') {
          this.initiateSummaryValues()
          this.visible && (document.body.style.overflow = 'hidden')
          switch (statut) {
            case DialogStatus.New:
            this.devisIsSaved = false
              if (isConvertedDevis) {
                this.getNewReferenceWithIntroMessageAndFooter()
                this.initiateFormGroupWithTableControls()
                this.dialogTitle = 'Nouvelle'
                this.selectedDevisItem = {
                  ...this.selectedDevisItem,
                  factureItems: this.selectedDevisItem.devisItems,
                  isConverted: true,
                }
                this.devisItem = this.selectedDevisItem

                this.setFormGroup()
                this.devisOptionsFormGroup
                  .get('remise')
                  .setValue(this.devisItem.remise)
                this.remiseValue = this.devisItem.remise

                let tvaIsDesactivated = this.devisItem.factureItems.every(
                  (item) => item.tva == 0,
                )
                this.devisOptionsFormGroup
                  .get('tva')
                  .setValue(!tvaIsDesactivated)
                tvaIsDesactivated && this.toggleTVAOption(false)

                this.calculateSummaryTotalHTAndTTC()
                this.formGroup.get('client').setValue(this.devisItem.client)
              }
               else {
                this.initiateFormGroupForNewDevis()
                this.getNewReferenceWithIntroMessageAndFooter()  

                this.dialogTitle = 'Nouvelle'
                this.selectedClientId &&
                  this._clientServiceProxy
                    .getByIdClient(this.selectedClientId)
                    .subscribe((res) => {
                      let nom = res.nom || res.raisonSociale
                      this.formGroup.get('client').setValue({ ...res, nom })
                    })
                this.devisItem = null
              }
              break

            case DialogStatus.Edit:
              this.initiateFormGroupWithTableControls()
              this.dialogTitle = 'Modifier'
              this.devisItem = this.selectedDevisItem
              this.reference = this.devisItem.reference;

              (this.devisItem.statut == FactureStatutEnum.PaiementAttente || this.devisItem.statut == FactureStatutEnum.PaiementRetard) 
                && (this.saveBrouillonHide =  true)
              
              this.setFormGroup()
              this.formGroup.get('client').setValue(this.devisItem.client)

              this.devisOptionsFormGroup
                .get('remise')
                .setValue(this.devisItem.remise)

              this.remiseValue = this.devisItem.remise

              if (this.devisItem.remise)
                this.devisOptionsFormGroup
                  .get('remiseBtnIsChecked')
                  .setValue(true)

              let tvaIsDesactivated = this.selectedDevisItem.factureItems.every(
                (item) => item.tva == 0,
              )
              this.devisOptionsFormGroup.get('tva').setValue(!tvaIsDesactivated)
              tvaIsDesactivated && this.toggleTVAOption(false)

              this.devisOptionsFormGroup.get('devise').setValue(this.devisItem.currency)
              this.Currency = this.devisItem.currency
              this.calculateSummaryTotalHTAndTTC()
              break

            case DialogStatus.Duplicate:
              this.getNewReference()
              this.initiateFormGroupWithTableControls()
              this.dialogTitle = 'Dupliquer'
              this.devisItem = this.selectedDevisItem
              this.setFormGroup()
              this.devisOptionsFormGroup
                .get('remise')
                .setValue(this.devisItem.remise)

              this.remiseValue = this.devisItem.remise
              this.remiseValue = this.selectedDevisItem.remise

              if (this.devisItem.remise)
                this.devisOptionsFormGroup
                  .get('remiseBtnIsChecked')
                  .setValue(true)

              tvaIsDesactivated = this.selectedDevisItem.factureItems.every(
                (item) => item.tva == 0,
              )
              this.devisOptionsFormGroup.get('tva').setValue(!tvaIsDesactivated)
              tvaIsDesactivated && this.toggleTVAOption(false)

              this.devisOptionsFormGroup.get('devise').setValue(this.devisItem.currency)
              this.Currency = this.devisItem.currency
              this.calculateSummaryTotalHTAndTTC()
              break

            default:
              break
          }
        }
      },
    )
  }

  ngAfterViewInit() {
    
  }
 
  //#region properties

  title = 'Facture'
  primaryColor = 'orange'
  secondaryColor = 'secondary-green'
  @Input() visible = false
  visibleSelf
  @Input() SelectDevisItemEvent = new Observable<any>()
  @Input() dialogStatusEvent!: Observable<{
    statut: DialogStatus
    dialogComponent
    isConvertedDevis
  }>
  @Input() factureFormatReferenceNumber: (number) => string
  @Input() template: any
  @Output() openDialogEvent = new EventEmitter()
  @Output() closeDialogEvent = new EventEmitter()
  @Output() crudOperationEvent = new EventEmitter()
  formGroup!: FormGroup
  tableControl!: FormArray
  devisOptionsFormGroup!: FormGroup
  eventsSubscription!: Subscription
  @ViewChild('frm') frm!: HTMLFormElement
  selectedDevisItem!: any
  selectedClientId: number
  devisItem: any
  reference!: string
  referenceCount: number = 0
  dialogTitle!: string
  Currency: string = 'MAD'
  clientSuggestions!: ClientForAutoCompleteDto[]
  echeancePayementOptions = [30, 60, 90]
  echeancePayementSelected = this.echeancePayementOptions[0] || ''
  summaryTotalHT = 0
  summaryTotalTTC = 0
  summaryTVA = 0
  tvaIsDesactivated: any
  manuelReference: boolean
  remiseAmount: number
  devisOptions = {
    remise: { checked: false },
    tva: { checked: true },
    devise: { list: ['MAD', 'USD', 'EURO'] },
  }
  cols = [
    {
      header: 'DESIGNATION',
      field: 'catalogue',
      type: 'autocomplete',
      colspan: 2,
    },
    { header: 'DATE', field: 'date', type: 'calendar', colspan: 2 },
    {
      header: 'QTÉ',
      field: 'quantity',
      type: 'inputNumber',
      // inputEvent: (rowIndex, value) => this.calculateRowTotalHTAndTTC(rowIndex, value),
    },
    {
      header: 'UNITÉ',
      field: 'unit',
      type: 'dropdown',
      options: ['Heures', 'Jours'],
    },
    {
      header: 'PU HT',
      field: 'unitPriceHT',
      type: 'inputNumber',
      inputEvent: (rowIndex) => this.calculateRowTotalHTAndTTC(rowIndex),
    },
    {
      header: 'TVA',
      field: 'tva',
      type: 'dropdown',
      options: [10, 20, 30, 40],
      changeEvent: (rowIndex) => this.changeTVA(rowIndex),
    },
    {
      header: 'TOTAL TTC',
      field: 'totalTtc',
      type: 'inputNumber',
      colspan: 2,
      disabled: true,
      class: 'lastElement'
    },
    { header: '', field: 'delete', type: 'button', label: '', icon: 'trash' },
  ]

  get getFromArrayControl() {
    const control = this.formGroup.get('factureItems') as FormArray
    return control
  }

  get getFactureContentItems() {
    return this.getFromArrayControl.value as FactureContentItem[]
  }

  //#endregion

  //#region FormGroups
  initiateFormGroup() {
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      dateEmission: [new Date(), Validators.required],
      echeancePaiement: ['30', Validators.required],
      messageIntroduction: [''],
      piedDePage: [''],
      factureItems: this.formBuilder.array([]),
    })
  }

  initiateFormGroupWithTableControls() {
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      dateEmission: [new Date(), Validators.required],
      echeancePaiement: ['30', Validators.required],
       messageIntroduction: [''],
      piedDePage: [''],
      factureItems: this.formBuilder.array([]),
    })
  }

  initiateFormGroupForNewDevis() {
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      dateEmission: [new Date(), Validators.required],
      echeancePaiement: ['30', Validators.required],
       messageIntroduction: [''],
      piedDePage: [''],
      factureItems: this.formBuilder.array([this.initiateTableForm()]),
    })
  }

  setFormGroup() {
    let factureItems = this.selectedDevisItem.factureItems.map((item: any) => {
      this.getFromArrayControl.push(this.initiateTableForm())

      return {
        catalogue: {designation: item.designation},
        date: item.date.toDate(),
        quantity: item.quantity,
        unit: item.unit,
        unitPriceHT: item.unitPriceHT,
        tva: !item.tva ? 20 : item.tva,
        totalTtc: item.totalTtc,
        catalogueId: item.catalogueId
      }
    })

    this.formGroup.setValue({
      client: this.devisItem.client,
      dateEmission: this.devisItem.dateEmission,
      echeancePaiement: this.devisItem.echeancePaiement,
      messageIntroduction: this.devisItem.messageIntroduction,
      piedDePage: this.devisItem.piedDePage,
      factureItems: factureItems,
    })
  }

  initiateTableForm() {
    return this.formBuilder.group({
      catalogueId: [null],
      catalogue: [{designation: '', id: 0}, Validators.required],
      date: [this.formGroup.get('dateEmission').value, Validators.required],
      quantity: [1, Validators.required],
      unit: ['Heures', Validators.required],
      unitPriceHT: [0, Validators.required],
      tva: [{ value: 20, disabled: !this.devisOptionsFormGroup.get('tva').value }, Validators.required],
      totalTtc: [0],
    })
  }

  onSelectIssueDateCalendar(){
    this.getFromArrayControl.controls.forEach(x => {
      x.patchValue({date : this.formGroup.get('dateEmission').value})
    })
  }

  initiateDevisOptionsGroup() {
    const remise = this.selectedDevisItem ? this.selectedDevisItem.remise : 0
    return this.formBuilder.group({
      remise: [remise],
      remiseBtnIsChecked: [false],
      devise: [this.devisOptions.devise.list[0]],
      tva: [true],
    })
  }

  private clearTableControl() {
    ;(this.formGroup.get('factureItems') as FormArray).controls = []
  }

  //#endregion

    @ViewChild("cd") closeDevisConfirmDialog: ConfirmDialog
    closeDialog() {
      if(this.previousPreviewState)  {
        this.template.item = this.previousPreviewState.item
        this.template.title = this.previousPreviewState.title
        this.template.summaryTotalHT = this.previousPreviewState.summaryTotalHT
        this.template.summaryTVA - this.previousPreviewState.summaryTVA
        this.template.remiseAmount = this.previousPreviewState.remiseAmount
        this.template.contentItemsCols = this.previousPreviewState.contentItemsCols
      }
      if((this.dialogTitle == 'Nouvelle' || this.dialogTitle == 'Dupliquer') && !this.devisIsSaved){
        this._confirmDialogService.confirm({
          message: 'Etes-vous sûr de vouloir quitter ? Toutes les données saisies seront perdues',
          acceptCallback: () => {
            this.closeDialogEvent.emit()
            this.clearTableControl()
            this.disableValidationClass()
            document.body.style.overflow = 'auto'
            this.devisOptionsFormGroup.get('remiseBtnIsChecked').setValue(false)  
            this.closeDevisConfirmDialog.close(event)
          },
          rejectCallback:() => { this.closeDevisConfirmDialog.close(event)}
        })
        let element = document.body.querySelector('.cd') as HTMLElement
        element.style.display = 'none'
      }
      
      else {
        this.closeDialogEvent.emit()
        this.clearTableControl()
        this.disableValidationClass()
        document.body.style.overflow = 'auto'
        this.devisOptionsFormGroup.get('remiseBtnIsChecked').setValue(false)  
        this.closeDevisConfirmDialog.close(event)
      }
      

    }
   

  getNewReference() {
    this._factureServiceProxy.getLastReference().subscribe((res: number) => {
      this.referenceCount = res + 1
      this.reference = this.factureFormatReferenceNumber(this.referenceCount)
    })
  }

  getNewReferenceWithIntroMessageAndFooter() {
    this._factureServiceProxy.getLastReferenceWithIntroMessageAndFooter().subscribe((res) => {
      this.referenceCount = res.lastReference + 1
      this.reference = this.factureFormatReferenceNumber(this.referenceCount)

      this.formGroup.get('messageIntroduction').setValue(res.invoiceIntroMessage)
      this.formGroup.get('piedDePage').setValue(res.invoiceFooter)
    })
  }
  changeReference() {
    this.manuelReference = true
    this.formGroup.addControl(
      'reference',
      new FormControl('', [
        Validators.required,
        // Validators.pattern('[a-zA-Z][0-9]{5}'),
      ]),
    )

  }

  addRow() {
    this.getFromArrayControl.push(this.initiateTableForm())
  }

  deleteRow(index: number) {
    const control = this.formGroup.get('factureItems') as FormArray
    control.removeAt(index)
    this.calculateSummaryTotalHTAndTTC()
  }

  autoCompleteSearch(event: any) {}

  //#region Calculations

  calculateRowTotalHTAndTTC(rowIndex: number, value?, field?) {
    this.getFromArrayControl.controls[rowIndex].patchValue({
      [field]: value.value,
    })

    const row = this.getFactureContentItems[rowIndex]
    const total_ht = row.unitPriceHT * row.quantity
    let total_ttc = total_ht

    if (this.devisOptionsFormGroup.get('tva').value) {
      total_ttc = total_ht + (total_ht * row.tva) / 100
    }

    this.getFromArrayControl.controls[rowIndex].patchValue({
      totalTtc: total_ttc,
    })

    this.calculateSummaryTotalHTAndTTC()
  }

  changeTVA(rowIndex: number) {
    const row = this.getFactureContentItems[rowIndex]
    const totalHT = row.unitPriceHT * row.quantity
    let totalTTC = this.devisOptionsFormGroup.get('tva').value
      ? totalHT + (totalHT * row.tva) / 100
      : totalHT

    this.getFromArrayControl.controls[rowIndex].patchValue({
      totalTtc: totalTTC,
    })

    this.calculateSummaryTotalHTAndTTC()
  }

  RecalculateRows() {
    this.getFactureContentItems.forEach((_, index) => {
      this.changeTVA(index)
    })
  }

  calculateSummaryTotalHTAndTTC() {
    this.summaryTotalHT = this.getFactureContentItems
      .map((item) => item.unitPriceHT * item.quantity)
      .reduce((accum, current) => accum + current)
    if (this.devisOptionsFormGroup.get('tva').value)
      this.summaryTVA = this.getFactureContentItems
        .map((item) => (item.unitPriceHT * item.quantity * item.tva) / 100)
        .reduce((accum, current) => accum + current)
    else this.summaryTVA = 0
    this.remiseAmount = this.calculateRemise(
      this.remiseValue,
      this.summaryTotalHT,
    )
    this.summaryTotalTTC =
      this.summaryTotalHT + this.summaryTVA - (this.remiseAmount || 0)
  }

  remiseAmountChanged(value: number) {
    this.remiseValue = value
    this.remiseAmount = this.calculateRemise(value, this.summaryTotalHT)
    this.calculateSummaryTotalHTAndTTC()
  }

  calculateRemise(remise, totalHT) {
    return (totalHT * remise) / 100
  }

  //#endregion

  //#region Options
  initiateSummaryValues() {
    this.summaryTVA = 0
    this.summaryTotalHT = 0
    this.summaryTotalTTC = 0
  }

  toggleTVAOption(isChecked: boolean) {
    const controls = this.getFromArrayControl.controls
    if (!isChecked) {
      controls.forEach((control) => {
        control.get('tva').disable()
      })
    } else {
      controls.forEach((control) => {
        control.get('tva').enable()
      })
    }

    this.calculateSummaryTotalHTAndTTC()
    this.RecalculateRows()
  }

  toggleRemiseOption(event?: any) {
    this.devisOptions.remise.checked =
      event.checked ?? this.devisItem.remise > 0
    if (!this.devisOptions.remise.checked) {
      this.devisOptionsFormGroup.get('remise').setValue(0)
      this.remiseValue = 0
    }
    this.calculateSummaryTotalHTAndTTC()
  }

  //#endregion
  async getNewItemValue(){
    let formValue = this.formGroup.value
    let result = await this._clientServiceProxy.getByIdClient(formValue.client.id).toPromise()

     return this.template.item = new FactureDto({
      reference: this.manuelReference
        ? this.formGroup.get('reference').value
        : this.factureFormatReferenceNumber( this.referenceCount),
     
      dateEmission: this.getExactDate(formValue.dateEmission, new Date()),
      echeancePaiement: formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value ?? 0,
      statut: FactureStatutEnum.Undefined,
      factureItems: formValue.factureItems.map((devisItem) => {
        return new FactureItemDto({
          catalogueId: devisItem.catalogueId,
          designation: devisItem.catalogue.designation,
          date: this.getExactDate(devisItem.date, new Date()),
          quantity: devisItem.quantity ?? 0,
          unit: devisItem.unit,
          unitPriceHT: devisItem.unitPriceHT ?? 0,
          tva: devisItem.tva || 0,
          totalTtc: devisItem.totalTtc,
        })
      }),
      clientId: formValue.client.id,
      client: result,
      currency: this.Currency,
      montantTtc: this.summaryTotalTTC,
      lastModificationTime: null,
      lastModifierUserId: null,
      creationTime: null, 
      creatorUserId: null, 
      id: null
     })
    
}

  //#region Crud operations
  createApiCall(devisStatus: FactureStatutEnum) {
    let formValue = this.formGroup.value

    let createDevisInput = new CreateFactureInput({
      reference: this.manuelReference
      ? this.formGroup.get('reference').value
      : this.factureFormatReferenceNumber( this.referenceCount),
     
      dateEmission: this.getExactDate(formValue.dateEmission, new Date()),
      echeancePaiement: formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value ?? 0,
      statut: devisStatus,
      factureItems: formValue.factureItems.map(
        (devisItem) => {
          return new FactureItemDto({
            catalogueId: devisItem.catalogueId,
            designation: devisItem.catalogue.designation,
            date: this.getExactDate(devisItem.date, new Date()),
            quantity: devisItem.quantity ?? 0,
            unit: devisItem.unit,
            unitPriceHT: devisItem.unitPriceHT ?? 0,
            tva: devisItem.tva || 0,
            totalTtc: devisItem.totalTtc,
          })
        },
      ),
      clientId: formValue.client.id,
      currency: this.Currency
    })

    this._factureServiceProxy
      .createFacture(createDevisInput)
      .subscribe((id) => {
        if (id) {
          this._clientServiceProxy
            .getByIdClient(formValue.client.id)
            .subscribe((res) => {
              this.crudOperationEvent.emit({
                crudOperation: 'create',
                result: {
                  ...createDevisInput,
                  id,
                  client: res,
                  dateEmission: this.getExactDate(
                    createDevisInput.dateEmission,
                    this.selectedDevisItem &&
                      this.selectedDevisItem.dateEmission,
                    'subtract',
                  ),
                  factureItems: createDevisInput.factureItems.map((item) => ({
                    ...item,
                    date: this.getExactDate(item.date, new Date(), 'subtract'),
                  })),
                  currency: this.Currency
                },
              })
            })
          this.closeDialog()
        }
      })
    this._toastService.info({
      summary: 'Opértion réussie',
      detail: 'Vous avez ajouté cette facture en brouillon',
    })
  }
  
  getUpdatedValue(formValue, factureStatus?: FactureStatutEnum){
    return new UpdateFactureInput({
      id: this.devisItem.id,
      reference: this.manuelReference
        ? this.formGroup.get('reference').value
        : this.selectedDevisItem.reference,
     
      dateEmission: formValue.dateEmission,
      echeancePaiement: +formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value,
      statut: factureStatus,
      factureItems: formValue.factureItems.map(
        (devisItem) => {
          return new FactureItemDto({
            catalogueId: devisItem.catalogueId,
            designation: devisItem.catalogue.designation,
            date: devisItem.date,
            quantity: devisItem.quantity ?? 0,
            unit: devisItem.unit,
            unitPriceHT: devisItem.unitPriceHT ?? 0,
            tva: devisItem.tva || 0,
            totalTtc: devisItem.totalTtc,
          })
        },
      ),
      clientId: formValue.client.id,
      currency: this.Currency,
      montantTtc: this.summaryTotalTTC
    })
  }

  updateApiCall(factureStatus: FactureStatutEnum) {
    
    let formValue = this.formGroup.value
    let updateDevisInput = this.getUpdatedValue(formValue, factureStatus)
    
    this._factureServiceProxy
      .updateFacture(updateDevisInput)
      .subscribe((res) => {
        if (res) {
         
          this._clientServiceProxy
            .getByIdClient(formValue.client.id)
            .subscribe((res) => {
              if (this.selectedDevisItem.client.id != formValue.client.id) {
                this.crudOperationEvent.emit({
                  crudOperation: 'update',
                  result: {
                    ...this.selectedDevisItem,
                    ...updateDevisInput,
                    client: res,
                    dateEmission: this.getExactDate(
                      updateDevisInput.dateEmission,
                      this.selectedDevisItem.dateEmission,
                      'subtract',
                    ),
                    factureItems: updateDevisInput.factureItems.map((item) => ({
                      ...item,
                      date: this.getExactDate(
                        item.date,
                        new Date(),
                        'subtract',
                      ),
                    })),
                    currency: this.Currency
                  },
                })
              } else {
                this.crudOperationEvent.emit({
                  crudOperation: 'update',
                  result: {
                    ...this.selectedDevisItem,
                    ...updateDevisInput,
                    reference: updateDevisInput.reference,
                    client: res,
                    dateEmission: this.getExactDate(
                      updateDevisInput.dateEmission,
                      this.selectedDevisItem.dateEmission,
                      'subtract',
                    ),
                    factureItems: updateDevisInput.factureItems.map((item) => ({
                      ...item,
                      date: this.getExactDate(
                        item.date,
                        new Date(),
                        'subtract',
                      ),
                    })),
                  },
                })
              }
              this.closeDialog()
              
            })
        }
      })

    this._toastService.info({
      summary: 'Opértion réussie',
      detail: 'Vous avez modifié cette facture en brouillon',
    })
  }

  clientAutoCompleteSearch(event: any) {
    setTimeout(() => {
      this._clientServiceProxy
        .getClientForAutoComplete(event.query)
        .subscribe((res: ClientForAutoCompleteDtoListResultDto) => {
          if(res.items.length)
          this.clientSuggestions = res.items
          else {
            this.clientSuggestions = [new ClientForAutoCompleteDto({id: 0, nom: 'Ajouter un nouveau client ?'})]

          }
        })
    }, 500)
  }

  filterCatalogues(event){
    setTimeout(() => {
      this._catalogueServiceProxy
        .getCatalogueForAutoComplete(event.query)
        .subscribe((res) => {
          if (res.items.length) {
            this.filteredCatalogues = res.items
          } else {
            this.filteredCatalogues = [
              new CatalogueForAutoCompleteDto({
                designation: 'Ajouter un nouvel item',
                addedDate: moment(this.formGroup.get('dateEmission').value),
                htPrice: 0,
                unity: undefined,
                tva: undefined,
                minimalQuantity: 1,
                id: 0,
              }),
            ]
          }
        })
    }, 500)
  }

  onSelectClientAutoComplete() {
    this.selectedClientId = this.formGroup.get('client').value['id']
  }

  onSelectClient(event){
    if(this.clientSuggestions[0].id == 0){
      this.formGroup.get('client').setValue(null)
      this.showDialogNouveau();
      return;
    }
    this._clientServiceProxy.getClientDefaults(event.id).subscribe(res => {
      this.setClientDefaults(res);
    })
  }


  setClientDefaults(clientDefaultsDto: ClientDefaultsDto){
      this.formGroup.patchValue({
        echeancePaiement: clientDefaultsDto.paymentPeriod,
      })

      this.devisOptionsFormGroup.patchValue({
        devise: clientDefaultsDto.currency,
        remiseBtnIsChecked: !!clientDefaultsDto.permanentDiscount,
        remise: clientDefaultsDto.permanentDiscount
      })

      this.remiseAmountChanged(clientDefaultsDto.permanentDiscount)
      this.Currency = clientDefaultsDto.currency;
  }
  
  onSelectCatalogAutoComplete(event: CatalogueForAutoCompleteDto, index) {
    let factureItems = this.formGroup.get('factureItems') as FormArray
    if (this.filteredCatalogues[0].id == 0) {
      this.devisItemRowIndex = index
      factureItems.at(index).get('catalogue').setValue({ designation: null })
      this.catalogueDialogDisplay = true
      return
    }
    factureItems.at(index).setValue({
      catalogueId: event.id,
      catalogue: {designation: event.designation},
      date: this.formGroup.get('dateEmission').value,
      quantity: event.minimalQuantity,
      unit: event.unity || 'Heures',
      unitPriceHT: event.htPrice,
      tva: event.tva || 20,
      totalTtc: this._calculationsService
        .calculateTTCWithQuantity(event.htPrice, event.tva, event.minimalQuantity),
    })

    this.calculateSummaryTotalHTAndTTC()
    this.RecalculateRows()
  }

  onClearCatalogAutoComplete(index){
    let factureItems = this.formGroup.get('factureItems') as FormArray
    factureItems.at(index).patchValue({
      catalogueId: 0,
    })
    console.log(factureItems.at(index).value);
  }

  saveBrouillon() {
    // this.frm.nativeElement.classList.add('submitted')

    if (this.formGroup.get('client').valid) {
      let reference
      if (this.dialogTitle == 'Nouvelle' || this.dialogTitle == 'Dupliquer') {
        reference = this.manuelReference
          ? this.formGroup.get('reference').value
          : this.factureFormatReferenceNumber(this.referenceCount)
      } else {
        reference = this.manuelReference
          ? this.formGroup.get('reference').value
          : this.selectedDevisItem.reference
      }

      this._factureServiceProxy
        .checkIfReferenceIsExist(reference)
        .subscribe((res) => {
          if ((!res && !this.selectedDevisItem) ||
            !res || this.dialogTitle == 'Modifier' &&
          (reference == this.selectedDevisItem.reference)
          ) {
            if (this.devisItem && this.devisItem.isConverted) {
              this.createApiCall(FactureStatutEnum.Cree)
              this.devisIsSaved = true
              this._router.navigate(['/app/Factures'])
              this.updateConvertedDevisStatus()
              document.body.style.overflow = 'auto'
              return
            }

            if (
              this.dialogTitle == 'Nouvelle' ||
              this.dialogTitle == 'Dupliquer'
            ) {
              this.createApiCall(FactureStatutEnum.Cree)
              this.devisIsSaved = true
              return
            }

            if (this.dialogTitle == 'Modifier') {
              this.updateApiCall(FactureStatutEnum.Cree)
            }
          } else {
            this._toastService.error({
              detail: 'Cette référence est déjà existe',
            })
          }
        })
    } else {
      this._toastService.error({
        detail: 'Veuillez remplir le chemps client: ',
      })
    }
    
    
  }

  validateDevis(isDevisStatusUpdate = false) {
    let returnValue = of({ success: false, result: null })
    this.enableValidationClass()
    let controlsNames = []
    const conrtolsObj = {
      client: 'Client',
      factureItems: 'Désignation', 
    }

    for (let control in this.formGroup.controls) {
      if (!this.formGroup.controls[control].valid)
        controlsNames = controlsNames.concat(conrtolsObj[control])
    }

    if(this.formGroup.valid) {

      if (isDevisStatusUpdate) {
        returnValue = this.validateStatusApi()
       
      } else {

      let reference
      if (this.dialogTitle == 'Nouvelle' || this.dialogTitle == 'Dupliquer') {
        reference = this.manuelReference
          ? this.formGroup.get('reference').value
          : this.factureFormatReferenceNumber(this.referenceCount)
      
      } else {
        reference = this.manuelReference
          ? this.formGroup.get('reference').value
          : this.selectedDevisItem.reference
       
      }
      
      this._factureServiceProxy
        .checkIfReferenceIsExist(reference)
        .subscribe((res) => {
          if (!res || this.dialogTitle == 'Modifier' &&
            (reference == this.selectedDevisItem.reference)
        ) {
              
                if (this.devisItem && this.devisItem.isConverted) {
                  this.createApiCall(FactureStatutEnum.Valide)
                  this.devisIsSaved = true
                  this._router.navigate(['/app/Factures'])
                  this.updateConvertedDevisStatus()
                  document.body.style.overflow = 'auto'
                  return
                }
  
                if (
                  this.dialogTitle == 'Nouvelle' ||
                  this.dialogTitle == 'Dupliquer'
                ) {
                  this.createApiCall(FactureStatutEnum.Valide)
                  this.devisIsSaved = true
                  return
                }
  
                if (this.dialogTitle == 'Modifier') {
                  this.updateApiCall(FactureStatutEnum.Valide)
                }
            
          } else {
            this._toastService.error({
              detail: 'Cette référence est déjà existe',
            })
          }
        })
    }
  }
    else {
      !this.visible && this.openDialogEvent.emit()
      this._toastService.error({
        detail:
          'Veuillez remplir les chemps obligatoires: ' +
          controlsNames.join(', '),
      })
    }

    return returnValue
  }

  //#endregion

  validateStatusApi(): Observable<any> {
    return this.updateByStatusApi(
      this.devisItem.id,
      FactureStatutEnum.Valide,
      'La facture est validé',
    ).pipe(
      map((success) => ({
        success,
        result: { ...this.selectedDevisItem, statut: FactureStatutEnum.Valide },
      })),
    )
  }

  updateByStatusApi(
    devisId: number,
    devisStatut: FactureStatutEnum,
    detail,
    callback?,
  ) {
    return this._factureServiceProxy.changeFactureStatut(devisId, devisStatut)
  }

  updateConvertedDevisStatus() {
    this._devisServiceProxy
      .changeDevisStatut(this.selectedDevisItem.id, DevisStatutEnum.Converti)
      .subscribe((res) => {
        if (res) {
          this.selectedDevisItem = {
            ...this.selectedDevisItem,
            statut: DevisStatutEnum.Converti,
          }
        }
      })
  }

  async preview() {
    this.previousPreviewState = {
      item: {...this.template.item},
      title: this.template.title,
      summaryTotalHT: this.template.summaryTotalHT,
      summaryTVA: this.template.summaryTVA,
      remiseAmount: this.template.remiseAmount,
      contentItemsCols: this.template.contentItemsCols
    }
    let res;
    if(this.dialogTitle == 'Nouvelle' || this.dialogTitle == 'Dupliquer') {
      res = await this.getNewItemValue()
    }
    
    else {
      res = this.getUpdatedValue(this.formGroup.value)
      if(this.selectedClientId == this.devisItem.clientId){
        res.client = this.devisItem.client
      }
      else{
        res.client = await this._clientServiceProxy
          .getByIdClient(this.formGroup.value.client.id).toPromise()
      }

    }
    
    this.template.previewAsPDF({
      item : res,
      remiseAmount: this.remiseAmount,
      summaryTVA: this.summaryTVA,
      summaryTotalHT: this.summaryTotalHT,
      })

  }
  getExactDate(date1, date2, offset = 'add') {
    return date2
      ? DateHelper.initiateTimeFromDate(date1).getTime() ==
        DateHelper.initiateTimeFromDate(moment(date2)).getTime()
        ? moment(date2)
        : offset == 'add'
        ? moment(date1).add(1, 'days')
        : moment(date1).subtract(1, 'days')
      : DateHelper.initiateTimeFromDate(date1).getTime() ==
        DateHelper.initiateTimeFromDate(moment()).getTime()
      ? moment()
      : offset == 'add'
      ? moment(date1).add(1, 'days')
      : moment(date1).subtract(1, 'days')
  }

  enableValidationClass = () =>
    ValidationHelper.enableCssValidationClass(this.frm)
  disableValidationClass = () =>
    ValidationHelper.disableCssValidationClass(this.frm)

//#region Client dialog

initialiseClientForm(): void {
  this.formClient = new ClientDto()
  this.formClient.pays = 'MAROC'
  this.formClient.deviseFacturation = 'MAD'
  this.formClient.categorieClient = 'PRFS'
  this.formClient.delaiPaiement = 30
  this.onFormCategorySelected()
}

showDialogNouveau() {
  this.initialiseClientForm()
  this.getAllCountries()
  this.getAllCurrencies()
  this.clientDialogDisplay = true
}
getAllCurrencies(){
  fetch('/assets/json/currencies.json').then(res => res.json())
    .then(res => this.devises = Object.keys(res))
}

getAllCountries(){
  this._countryService.getAllCountries().subscribe(res => {
    this.countries = res.items;
  })
}

closeClientDialog(){
  this.clientDialogDisplay = false
}

onFormCategorySelected(): void {
  this.isFormProfetionnel = this.formClient.categorieClient == 'PRFS'
}

isNullOrEmpty(str: string): boolean {
  return str == undefined || str.toString().trim() == ''
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
    this._toastService.error({
      summary: 'Champs requis !',
      detail: 'Veuillez remplir le champs : Raison sociale',
    })
  } else if (!isNomValide) {
    this._toastService.error({
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

valider() {
  this.validateForm()
  if (this.isFormValid) {
      this._clientServiceProxy
        .createClient(this.formClient)
        .subscribe((result) => {
          if (result != undefined) {
            let clientForAutoCompleteDto = new ClientForAutoCompleteDto({id: result.id, nom: result.nom || result.raisonSociale})
            this.clientSuggestions = [...this.clientSuggestions, clientForAutoCompleteDto]
            this.formGroup.get('client').setValue(clientForAutoCompleteDto)
            this.closeClientDialog()
            var referenceClient = this._formatService.formatReferenceNumber(
              result.reference,
              ReferencePrefix.Client
            )

            this._toastService.success({
              summary: 'Opération réussie !',
              detail:
                'Le client est ajouté avec la référence : ' + referenceClient
            })
           
          } else {
            this._toastService.error({
              summary: 'Opération échouée !',
              detail:
                'Une erreur serveur est parvenue ! Veuillez reessayer plutard.'
            })
          }
        })
  }
}

//#endregion
catalogueDialogDisplay = false
catalogueOptions = ['produit', 'prestation']
catalogueFormGroup: FormGroup
tvaOptions = [10, 15, 20]
unityOptions = ['Heures', 'Kg']

initiateCatalogueFormGroup() {
  this.catalogueFormGroup = this.formBuilder.group({
    designation: ['', Validators.required],
    description: [''],
    unity: ['Heures'],
    htPrice: [0],
    tva: [0],
    minimalQuantity: [1],
    dialogSelectedType: ['produit'],
  })
}

closeCatalogueDialog() {
  this.catalogueDialogDisplay = false
  this.catalogueFormGroup.reset()
}

submitCatalogue() {
  if (this.catalogueFormGroup.valid) {
    let createCatalogInput = new CreateCatalogueInput({
      designation: this.catalogueFormGroup.value.designation,
      description: this.catalogueFormGroup.value.description,
      catalogueType: this.catalogueFormGroup.value.dialogSelectedType,
      unity: this.catalogueFormGroup.value.unity,
      htPrice: this.catalogueFormGroup.value.htPrice || 0,
      tva: this.catalogueFormGroup.value.tva || 0,
      minimalQuantity: this.catalogueFormGroup.value.minimalQuantity || 1,
    })
    this._catalogueServiceProxy
      .createCatalogue(createCatalogInput)
      .subscribe((res) => {
        if (res) {
          let factureItems = this.formGroup.get('factureItems') as FormArray
          factureItems.at(this.devisItemRowIndex).setValue({
            catalogueId: res.id,
            catalogue: { designation: res.designation },
            date: this.formGroup.get('dateEmission').value,
            quantity: res.minimalQuantity,
            unit: res.unity || 'Heures',
            unitPriceHT: res.htPrice,
            tva: res.tva || 20,
            totalTtc: this._calculationsService.calculateTTCWithQuantity(
              res.htPrice,
              res.tva,
              res.minimalQuantity,
            ),
          })
         
          this._toastService.success({
            summary: 'Opértion réussie',
            detail: 'Vous avez ajouté un nouvel item',
          })

          this.closeCatalogueDialog()
        } else {
          this._toastService.internalError()
        }
      })
  } else {
    this._toastService.error({
      summary: 'Erreur',
      detail: 'Veuillez remplir le chemps Désignation',
    })
  }
}
 
}

