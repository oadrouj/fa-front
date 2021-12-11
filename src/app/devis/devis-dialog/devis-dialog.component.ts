import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms'
import { DialogStatus } from '@shared/enums/DialogState.enum'
import { DevisContentItem } from '@shared/models/DevisContentItem'
import { DevisItem } from '@shared/models/DevisItem'
import { FormatService } from '@shared/services/format.service'
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api'
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs'
import { ToastService } from '@shared/services/toast.service'
import {
  ClientForAutoCompleteDto,
  ClientForAutoCompleteDtoListResultDto,
  ClientServiceProxy,
  CreateDevisInput,
  DevisDto,
  DevisItemDto,
  DevisServiceProxy,
  UpdateDevisInput,
  DevisStatutEnum,
  CatalogueServiceProxy,
  CatalogueForAutoCompleteDto,
  ClientDefaultsDto,
  ClientDto,
  CountryServiceAppServiceProxy,
  CountryDto,
} from '@shared/service-proxies/service-proxies'
import * as moment from 'moment'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import { DateHelper } from '@shared/helpers/DateHelper'
import {
  GlobalEventsService,
  ModificationStatusEnum,
} from '@shared/globalEventsService'
import { map } from 'rxjs/operators'
import { ValidationHelper } from '@shared/helpers/ValidationHelper'
import { CalculationsService } from '@shared/services/calculations.service'
import { Router } from '@angular/router'
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { ConfirmDialog } from 'primeng/confirmdialog'
@Component({
  selector: 'app-devis-dialog',
  templateUrl: './devis-dialog.component.html',
  styleUrls: ['./devis-dialog.component.css'],
  providers: [ToastService],
})
export class DevisDialogComponent implements OnInit {
  tvaIsDesactivated: any
  manuelReference: boolean
  remiseAmount: number
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
  devisIsSaved: boolean
  saveBrouillonHide: boolean
  //#endregion

  constructor(
    private formBuilder: FormBuilder,
    private _formatService: FormatService,
    private _toastService: ToastService,
    private _devisServiceProxy: DevisServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    public globalEventsService: GlobalEventsService,
    private _catalogueServiceProxy: CatalogueServiceProxy,
    private _calculationsService: CalculationsService,
    private _router: Router,
    private _countryService: CountryServiceAppServiceProxy,
    private _confirmDialogService: ConfirmDialogService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    
    this.initiateFormGroup()
    this.devisOptionsFormGroup = this.initiateDevisOptionsGroup()

    //ClientDialog: 
    this.initialiseClientForm()
    //

    this.eventsSubscription = this.SelectDevisItemEvent.subscribe(
      (devisItem: DevisItem) => {
        this.selectedDevisItem = devisItem
      },
    )

    this.dialogStatusEvent.subscribe(({ statut, dialogComponent }) => {
      document.body.style.overflow = 'hidden'
      this.manuelReference = false
      if (dialogComponent == 'devis') {
        this.initiateSummaryValues()
        this.visible && (document.body.style.overflow = 'hidden')

        switch (statut) {
          case DialogStatus.New:
            this.devisIsSaved = false
            this.getNewReference()
            this.initiateFormGroupForNewDevis()
            this.dialogTitle = 'Nouveau'
            this.calculateSummaryTotalHTAndTTC()
            this.selectedClientId &&
              this._clientServiceProxy
                .getByIdClient(this.selectedClientId)
                .subscribe((res) => {
                  let nom = res.nom || res.raisonSociale
                  this.formGroup.get('client').setValue({ ...res, nom })
                })
            this.devisItem = null
            break

          case DialogStatus.Edit:
            this.initiateFormGroupWithTableControls()
            this.dialogTitle = 'Modifier'
            this.devisItem = this.selectedDevisItem
            
            this.saveBrouillonHide =  false
            this.devisItem.statut == DevisStatutEnum.Valide && (this.saveBrouillonHide =  true)
           
            this.reference = this.devisItem.reference
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

            let tvaIsDesactivated = this.selectedDevisItem.devisItems.every(
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

            tvaIsDesactivated = this.selectedDevisItem.devisItems.every(
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
    })

  }

  //#region properties
  validateDevisSubject = new BehaviorSubject<ModificationStatusEnum>(
    ModificationStatusEnum.No_Modification,
  )
  title = 'Devis'
  primaryColor = 'green'
  secondaryColor = 'orange'
  @Input() visible = false
  @Input() SelectDevisItemEvent = new Observable<DevisItem>()
  @Input() dialogStatusEvent!: Observable<{
    statut: DialogStatus
    dialogComponent
  }>
  @Input() devisFormatReferenceNumber: (number) => string
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
  summaryTotalTTC: number
  summaryTVA = 0
  devisOptions = {
    remise: { checked: false },
    tva: { checked: true },
    devise: { list: ['MAD', 'USD', 'EURO'] },
  }
  cols = [
    {
      header: 'DESIGNATION',
      field: 'designation',
      type: 'autocomplete',
      colspan: 2,
    },
    { header: 'DATE', field: 'date', type: 'calendar', colspan: 2 },
    {
      header: 'QTÉ',
      field: 'quantity',
      type: 'inputNumber',
      inputEvent: (rowIndex) => this.calculateRowTotalHTAndTTC(rowIndex),
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
      // suffix: ' ' + this.Currency
    },
    { header: '', field: 'delete', type: 'button', label: '', icon: 'trash' },
  ]
  
  defaultIssueDate = new Date('10-10-2021')

  get getFromArrayControl() {
    const control = this.formGroup.get('devisItems') as FormArray
    return control
  }

  get getDevisContentItems() {
    return this.getFromArrayControl.value as DevisContentItem[]
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
      devisItems: this.formBuilder.array([]),
    })
  }

  initiateFormGroupWithTableControls() {
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      dateEmission: [new Date(), Validators.required],
      echeancePaiement: ['30', Validators.required],
      messageIntroduction: [''],
      piedDePage: [''],
      devisItems: this.formBuilder.array([]),
    })
  }

  initiateFormGroupForNewDevis() {
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      dateEmission: [new Date(), Validators.required],
      echeancePaiement: ['30', Validators.required],
      messageIntroduction: [''],
      piedDePage: [''],
      devisItems: this.formBuilder.array([this.initiateTableForm()]),
    })
  }

  setFormGroup() {
    let devisItems = this.devisItem.devisItems.map((item: any) => {
      this.getFromArrayControl.push(this.initiateTableForm())
      return {
        ...item,
        designation: {designation: item.designation},
        date: item.date.toDate(),
        tva: !item.tva ? 20 : item.tva,
      }
    })

    this.formGroup.setValue({
      client: this.devisItem.client,
      dateEmission: this.devisItem.dateEmission,
      echeancePaiement: this.devisItem.echeancePaiement,
      messageIntroduction: this.devisItem.messageIntroduction,
      piedDePage: this.devisItem.piedDePage,
      devisItems: devisItems,
    })
  }

  initiateTableForm() {
    return this.formBuilder.group({
      catalogueId: [null],
      designation: ['', Validators.required],
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
    ;(this.formGroup.get('devisItems') as FormArray).controls = []
  }

  //#endregion

  @ViewChild("cd") closeDevisConfirmDialog: ConfirmDialog
  closeDialog() {
    if((this.dialogTitle == 'Nouveau' || this.dialogTitle == 'Dupliquer') && !this.devisIsSaved){
      this._confirmDialogService.confirm({
        message: 'Etes-vous sûr de vouloir quitter ? Toutes les données saisies seront perdues',
        acceptCallback: () => {
          this.closeDialogEvent.emit()
          this.clearTableControl()
          this.disableValidationClass()
          document.body.style.overflow = 'auto'
          this.devisOptionsFormGroup.get('remiseBtnIsChecked').setValue(false)  
          console.log(this.closeDevisConfirmDialog)
          this.closeDevisConfirmDialog.close(event)
        },
        rejectCallback:() => { 
          this.closeDevisConfirmDialog.close(event)
        }
      })
      let element = document.body.querySelector('#cd') as HTMLElement
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
    this._devisServiceProxy.getLastReference().subscribe((res: number) => {
      this.referenceCount = res + 1
      this.reference = this.devisFormatReferenceNumber(this.referenceCount)
    })
  }

  changeReference() {
    this.manuelReference = true
    this.formGroup.addControl(
      'reference',
      new FormControl('', [
        Validators.required,
        // Validators.pattern('[\]+|[\d]'),
      ]),
    )

    // if (this.dialogTitle == 'Modifier' && !this.referenceCount) {
    //   this.getNewReference()
    // }
    // this.referenceCount++
    // this.reference = this.devisFormatReferenceNumber(this.referenceCount)
  }

  addRow() {
    this.getFromArrayControl.push(this.initiateTableForm())
  }

  deleteRow(index: number) {
    const control = this.formGroup.get('devisItems') as FormArray
    control.removeAt(index)
    this.calculateSummaryTotalHTAndTTC()
  }

  autoCompleteSearch(event: any) {}

  //#region Calculations

  calculateRowTotalHTAndTTC(rowIndex: number, value?, field?) {
    this.getFromArrayControl.controls[rowIndex].patchValue({
      [field]: value.value,
    })

    const row = this.getDevisContentItems[rowIndex]
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
    const row = this.getDevisContentItems[rowIndex]
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
    this.getDevisContentItems.forEach((_, index) => {
      this.changeTVA(index)
    })
  }

  calculateSummaryTotalHTAndTTC() {
    this.summaryTotalHT = this.getDevisContentItems
      .map((item) => item.unitPriceHT * item.quantity)
      .reduce((accum, current) => accum + current)
    if (this.devisOptionsFormGroup.get('tva').value)
      this.summaryTVA = this.getDevisContentItems
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

  toggleRemiseOption(event: any) {
    this.devisOptions.remise.checked =
      event.checked ?? this.devisItem.remise > 0
    if (!this.devisOptions.remise.checked) {
      this.devisOptionsFormGroup.get('remise').setValue(0)
      this.remiseValue = 0
    }

    this.calculateSummaryTotalHTAndTTC()
  }

  //#endregion

  //#region Crud operations
  createApiCall(devisStatus: DevisStatutEnum) {
    let formValue = this.formGroup.value

    let createDevisInput = new CreateDevisInput({
      reference: this.manuelReference
        ? this.formGroup.get('reference').value
        : this.devisFormatReferenceNumber( this.referenceCount),
     
      dateEmission: this.getExactDate(formValue.dateEmission, new Date()),
      echeancePaiement: formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value ?? 0,
      statut: devisStatus,
      devisItems: formValue.devisItems.map((devisItem) => {
        return new DevisItemDto({
          catalogueId: devisItem.catalogueId,
          designation: devisItem.designation.designation  || devisItem.designation,
          date: this.getExactDate(devisItem.date, new Date()),
          quantity: devisItem.quantity ?? 0,
          unit: devisItem.unit,
          unitPriceHT: devisItem.unitPriceHT ?? 0,
          tva: devisItem.tva || 0,
          totalTtc: devisItem.totalTtc,
        })
      }),
      clientId: formValue.client.id,
      currency: this.Currency
    })

    this._devisServiceProxy.createDevis(createDevisInput).subscribe((id) => {
      if (id) {
        this._clientServiceProxy
          .getByIdClient(formValue.client.id)
          .subscribe((res) => {
            this.devisIsSaved = true;
            this.crudOperationEvent.emit({
              crudOperation: 'create',
              result: {
                ...createDevisInput,
                id,
                client: res,
                dateEmission: this.getExactDate(
                  createDevisInput.dateEmission,
                  this.selectedDevisItem && this.selectedDevisItem.dateEmission,
                  'subtract',
                ),
                devisItems: createDevisInput.devisItems.map((item) => ({
                  ...item,
                  date: this.getExactDate(item.date, new Date(), 'subtract'),
                })),
                currency: this.Currency
              },
            })
            this.closeDialog()
          })
        
      }
    })
    this._toastService.info({
      summary: 'Opértion réussie',
      detail: 'Vous avez ajouté ce devis en brouillon',
    })
  }

  updateApiCall(devisStatus: DevisStatutEnum) {
    console.log(this.devisItem)
    
    let formValue = this.formGroup.value
    let updateDevisInput = new UpdateDevisInput({
      ...this.devisItem,
      id: this.devisItem.id,
      reference: this.manuelReference
        ? this.formGroup.get('reference').value
        : this.selectedDevisItem.reference,
      dateEmission:
        this.selectedDevisItem.dateEmission != formValue.dateEmission
          ? moment(formValue.dateEmission).add(1, 'days')
          : moment(formValue.dateEmission),
      echeancePaiement: +formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value,
      statut: devisStatus,
      devisItems: formValue.devisItems.map((devisItem) => {
        return new DevisItemDto({
          catalogueId: devisItem.catalogueId,
          designation: devisItem.designation.designation || devisItem.designation,
          date: this.getExactDate(devisItem.date, new Date()),
          quantity: devisItem.quantity ?? 0,
          unit: devisItem.unit,
          unitPriceHT: devisItem.unitPriceHT ?? 0,
          tva: devisItem.tva || 0,
          totalTtc: devisItem.totalTtc,
        })
      }),
      clientId: formValue.client.id,
      currency: this.Currency
    })
    this._devisServiceProxy.updateDevis(updateDevisInput).subscribe((res) => {
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
                  reference: updateDevisInput.reference,
                  client: res,
                  dateEmission: this.getExactDate(
                    updateDevisInput.dateEmission,
                    this.selectedDevisItem.dateEmission,
                    'subtract',
                  ),
                  devisItems: updateDevisInput.devisItems.map((item) => ({
                    ...item,
                    date: this.getExactDate(item.date, new Date(), 'subtract'),
                  })),
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
                  devisItems: updateDevisInput.devisItems.map((item) => ({
                    ...item,
                    date: this.getExactDate(item.date, new Date(), 'subtract'),
                  })),
                  currency: this.Currency
                },
              })
            }
            this.closeDialog();
          })
      }
    })

    this._toastService.info({
      summary: 'Opértion réussie',
      detail: 'Vous avez modifié ce devis en brouillon',
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

  filterCatalogues(event){
    setTimeout(() => {
      this._catalogueServiceProxy
        .getCatalogueForAutoComplete(event.query)
        .subscribe((res) => {
          this.filteredCatalogues = res.items
        })
    }, 500)
  }

  onSelectCatalogAutoComplete(event: CatalogueForAutoCompleteDto, index) {
    let factureItems = this.formGroup.get('devisItems') as FormArray
    factureItems.at(index).setValue({
      catalogueId: event.id,
      designation: {designation: event.designation},
      date: event.addedDate.toDate(),
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
    let factureItems = this.formGroup.get('devisItems') as FormArray
    factureItems.at(index).patchValue({
      catalogueId: 0,
    })
    console.log(factureItems.at(index).value);
  }

  saveBrouillon() {
    if (this.formGroup.get('client').valid) {
      if (this.manuelReference) {
        let reference
        if (this.dialogTitle == 'Nouveau' || this.dialogTitle == 'Dupliquer') {
          reference = this.manuelReference
            ? this.formGroup.get('reference').value
            : this.devisFormatReferenceNumber(this.referenceCount)
          
        } else {
          reference = this.manuelReference
            ? this.formGroup.get('reference').value
            : this.selectedDevisItem.reference
        }

        this._devisServiceProxy
          .checkIfReferenceIsExist(reference)
          .subscribe((res) => {
            if (
              (!res && !this.selectedDevisItem) ||
              !res || this.dialogTitle == 'Modifier' && 
                (
                  reference == this.selectedDevisItem.reference 
                )
            ) {
                if (
                  this.dialogTitle == 'Nouveau' ||
                  this.dialogTitle == 'Dupliquer'
                ) {
                  this.createApiCall(DevisStatutEnum.Cree)
                } else {
                  this.updateApiCall(DevisStatutEnum.Cree)
                }
            } else {
              this._toastService.error({
                detail: 'Cette référence est déjà existe',
              })
            }
          })
      } else {
        if (this.dialogTitle == 'Nouveau' || this.dialogTitle == 'Dupliquer') {
          this.createApiCall(DevisStatutEnum.Cree)
        } else {
          this.updateApiCall(DevisStatutEnum.Cree)
        }
      }
    } else {
      this._toastService.error({
        detail: 'Cette référence est déjà existe',
      })
    }
  }

  validateDevis(isDevisStatusUpdate = false) {
    let returnValue = of({ success: false, result: null })
    this.enableValidationClass()
    let controlsNames = []
    const conrtolsObj = {
      client: 'Client',
      devisItems: 'Désignation',
    }

    for (let control in this.formGroup.controls) {
      if (!this.formGroup.controls[control].valid)
        controlsNames = controlsNames.concat(conrtolsObj[control])
    }

    if(this.formGroup.valid) {
      let reference
      if (this.dialogTitle == 'Nouveau' || this.dialogTitle == 'Dupliquer') {
        reference = this.manuelReference
          ? this.formGroup.get('reference').value
          : this.devisFormatReferenceNumber(this.referenceCount)
      
      } else {
        reference = this.manuelReference
        ? this.formGroup.get('reference').value
        : this.selectedDevisItem.reference
      }

      if (isDevisStatusUpdate) {
        returnValue = this.validateStatusApi()
      } else {
        this._devisServiceProxy
        .checkIfReferenceIsExist(reference)
        .subscribe((res) => {
          if (!res || this.dialogTitle == 'Modifier' && (reference == this.selectedDevisItem.reference)) {   
                if (
                  this.dialogTitle == 'Nouveau' ||
                  this.dialogTitle == 'Dupliquer'
                ) {
                  this.createApiCall(DevisStatutEnum.Valide)

                } else {
                  this.updateApiCall(DevisStatutEnum.Valide)
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

  preview() {
    let formValue = this.formGroup.value
    let devisItems = formValue.devisItems.map((devisItem) => {
      return new DevisItemDto({
        catalogueId: devisItem.catalogueId,
        designation: devisItem.designation.designation || devisItem.designation,
        date: this.getExactDate(devisItem.date, new Date()),
        quantity: devisItem.quantity ?? 0,
        unit: devisItem.unit,
        unitPriceHT: devisItem.unitPriceHT ?? 0,
        tva: devisItem.tva,
        totalTtc: devisItem.totalTtc,
      })
    })
    let dateEmission = this.getExactDate(formValue.dateEmission, new Date())

    let reference
    if (this.dialogTitle == 'Nouveau' || this.dialogTitle == 'Dupliquer') {
      reference = this.manuelReference
        ? this.formGroup.get('reference').value
        : this.devisFormatReferenceNumber(this.referenceCount)
     
    } else {
      reference = this.manuelReference
        ? this.formGroup.get('reference').value
        : this.selectedDevisItem.reference
    }
    this._devisServiceProxy
      .getByteDataDevisReport(
        reference,
        dateEmission,
        formValue.echeancePaiement,
        formValue.messageIntroduction,
        formValue.piedDePage,
        this.devisOptionsFormGroup.get('remise').value,
        this.Currency,
        this.selectedDevisItem ? this.selectedDevisItem.statut : undefined,
        devisItems,
        formValue.client.id,
      )
      .subscribe((res) => {
        var win = window.open()
        win.document.write(
          '<iframe src="data:application/pdf;base64,' +
            res +
            '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>',
        )
      })
  }

  validateStatusApi(): Observable<any> {
    return this.updateByStatusApi(
      this.devisItem.id,
      DevisStatutEnum.Valide,
      'Le devis est validé',
    ).pipe(
      map((success) => ({
        success,
        result: { ...this.selectedDevisItem, statut: DevisStatutEnum.Valide },
      })),
    )
  }

  updateByStatusApi(
    devisId: number,
    devisStatut: DevisStatutEnum,
    detail,
    callback?,
  ) {
    return this._devisServiceProxy.changeDevisStatut(devisId, devisStatut)
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
}


