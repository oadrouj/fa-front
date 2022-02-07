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
  CreateCatalogueInput,
  FileApiServiceProxy,
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
import { PreviewService } from '@shared/services/preview.service'
import { DomSanitizer } from '@angular/platform-browser'

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
  devisIsSaved: boolean
  saveBrouillonHide: boolean

  private _dataItem
  currencies: string[]
  logoSrc: string
  @Input() set dataItem(value) {
    this._dataItem = value
   this.selectedDevisItem = value
    console.log(value)
  }

  private _dialogStatus
  @Input() set dialogStatus(value) {
    this._dialogStatus = value
    this.updateState(value)
  }
  get dialogStatus() {
    return this._dialogStatus
  }

  @Output() emitCheckFormIsValidEvent = new EventEmitter()
  clientDialogStatus: DialogStatus
  clientDialogIsVisible: boolean

  constructor(
    private formBuilder: FormBuilder,
    private _formatService: FormatService,
    private _toastService: ToastService,
    private _devisServiceProxy: DevisServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    public globalEventsService: GlobalEventsService,
    private _catalogueServiceProxy: CatalogueServiceProxy,
    private _calculationsService: CalculationsService,
    private _confirmDialogService: ConfirmDialogService,
    private confirmationService: ConfirmationService,
    private _previewService: PreviewService,
    private _fileApiServiceProxy: FileApiServiceProxy,
    private  _sanitizer: DomSanitizer,
  ) {}

  updateState(status) {
    this.manuelReference = false
    this.saveBrouillonHide = false
    console.log('statut changed', status);

    this.initiateSummaryValues()
    this.visible && (document.body.style.overflow = 'hidden')
    switch (status) {
      case DialogStatus.New:
        this.devisIsSaved = false
        this.getNewReferenceWithIntroMessageAndFooter()
        this.initiateFormGroupForNewDevis()
        this.dialogTitle = 'Nouveau'
        this.calculateSummaryTotalHTAndTTC()
        this.selectedDevisItem &&
          this.formGroup.get('client').setValue(this.selectedDevisItem.client)
        this.devisItem = null
        break

      case DialogStatus.Edit:
        this.initiateFormGroupWithTableControls()
        this.dialogTitle = 'Modifier'
        this.devisItem = this.selectedDevisItem
        this.devisItem.statut == DevisStatutEnum.Valide &&
          (this.saveBrouillonHide = true)

        this.reference = this.devisItem.reference
        this.setFormGroup()
        this.formGroup.get('client').setValue(this.devisItem.client)

        this.devisOptionsFormGroup.get('remise').setValue(this.devisItem.remise)

        this.remiseValue = this.devisItem.remise
        if (this.devisItem.remise)
          this.devisOptionsFormGroup.get('remiseBtnIsChecked').setValue(true)

        let tvaIsDesactivated = this.selectedDevisItem.devisItems.every(
          (item) => item.tva == 0,
        )
        this.devisOptionsFormGroup.get('tva').setValue(!tvaIsDesactivated)
        tvaIsDesactivated && this.toggleTVAOption(false)

        this.devisOptionsFormGroup
          .get('devise')
          .setValue(this.devisItem.currency)
        this.Currency = this.devisItem.currency

        this.calculateSummaryTotalHTAndTTC()

        break

      case DialogStatus.Duplicate:
        this.getNewReference()
        this.initiateFormGroupWithTableControls()
        this.dialogTitle = 'Dupliquer'
        this.devisItem = this.selectedDevisItem
        this.setFormGroup()
        this.devisOptionsFormGroup.get('remise').setValue(this.devisItem.remise)

        this.remiseValue = this.devisItem.remise
        this.remiseValue = this.selectedDevisItem.remise
        if (this.devisItem.remise)
          this.devisOptionsFormGroup.get('remiseBtnIsChecked').setValue(true)

        tvaIsDesactivated = this.selectedDevisItem.devisItems.every(
          (item) => item.tva == 0,
        )
        this.devisOptionsFormGroup.get('tva').setValue(!tvaIsDesactivated)
        tvaIsDesactivated && this.toggleTVAOption(false)

        this.devisOptionsFormGroup
          .get('devise')
          .setValue(this.devisItem.currency)
        this.Currency = this.devisItem.currency
        this.calculateSummaryTotalHTAndTTC()
        break

      case DialogStatus.CheckFormValidity:
        this.initiateFormGroupWithTableControls()
        this.devisItem = this.selectedDevisItem
        this.setFormGroup()
        this.emitCheckFormIsValidEvent.emit(this.formGroup.valid)
        
        if (!this.formGroup.valid) {
          this.openDialogEvent.emit()
          this.displayFormValidationErrors()
        }

        break;

      default:
        break
    }
  }

  ngOnInit(): void {
    this.initiateFormGroup()
    this.devisOptionsFormGroup = this.initiateDevisOptionsGroup()
    this.initiateCatalogueFormGroup()
    this.getAllCurrencies()
    this._fileApiServiceProxy.download().subscribe((res) => {
      let objectURL = this._sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(res.data),
      )
      this.logoSrc = objectURL as string
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
      field: 'catalogue',
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
      class: 'lastElement',
      // suffix: ' ' + this.Currency
    },
    { header: '', field: 'delete', type: 'button', label: '', icon: 'trash' },
  ]

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
        catalogue: { designation: item.designation },
        date: item.date.toDate(),
        quantity: item.quantity,
        unit: item.unit,
        unitPriceHT: item.unitPriceHT,
        tva: !item.tva ? 20 : item.tva,
        totalTtc: item.totalTtc,
        catalogueId: item.catalogueId,
      }
    })

    this.formGroup.setValue({
      client: this.devisItem.client,
      dateEmission: this.devisItem.dateEmission.toDate(),
      echeancePaiement: this.devisItem.echeancePaiement,
      messageIntroduction: this.devisItem.messageIntroduction,
      piedDePage: this.devisItem.piedDePage,
      devisItems: devisItems,
    })
  }

  initiateTableForm() {
    return this.formBuilder.group({
      catalogueId: [null],
      catalogue: [{ designation: '', id: 0 }, Validators.required],
      date: [this.formGroup.get('dateEmission').value, Validators.required],
      quantity: [1, Validators.required],
      unit: ['Heures', Validators.required],
      unitPriceHT: [0, Validators.required],
      tva: [
        { value: 20, disabled: !this.devisOptionsFormGroup.get('tva').value },
        Validators.required,
      ],
      totalTtc: [0],
    })
  }

  onSelectIssueDateCalendar() {
    this.getFromArrayControl.controls.forEach((x) => {
      x.patchValue({ date: this.formGroup.get('dateEmission').value })
    })
  }

  initiateDevisOptionsGroup() {
    const remise = this.selectedDevisItem ? this.selectedDevisItem.remise : 0
    return this.formBuilder.group({
      remise: [remise],
      remiseBtnIsChecked: [false],
      devise: ['MAD'],
      tva: [true],
    })
  }

  getAllCurrencies() {
    fetch('/assets/json/currencies.json')
      .then((res) => res.json())
      .then((res) => (this.currencies = Object.keys(res)))
  }

  private clearTableControl() {
    ;(this.formGroup.get('devisItems') as FormArray).controls = []
  }

  //#endregion

  closeDialog() {
    if (
      (this.dialogTitle == 'Nouveau' || this.dialogTitle == 'Dupliquer') &&
      !this.devisIsSaved
    ) {
      this._confirmDialogService.confirm({
        message:
          'Etes-vous sûr de vouloir quitter ? Toutes les données saisies seront perdues',
        acceptCallback: () => {
          this.closeDialogEvent.emit()
          this.clearTableControl()
          this.disableValidationClass()
          document.body.style.overflow = 'auto'
          this.devisOptionsFormGroup.get('remiseBtnIsChecked').setValue(false)
        },
        rejectCallback: () => {
        },
      })
    } else {
      this.closeDialogEvent.emit()
      this.clearTableControl()
      this.disableValidationClass()
      document.body.style.overflow = 'auto'
      this.devisOptionsFormGroup.get('remiseBtnIsChecked').setValue(false)
    }
  }

  devisFormatReferenceNumber(referenceNumber) {
    return this._formatService.formatReferenceNumber(
      referenceNumber,
      ReferencePrefix.Devis,
    )
  }

  getNewReference() {
    this._devisServiceProxy.getLastReference().subscribe((res: number) => {
      this.referenceCount = res + 1
      this.reference = this.devisFormatReferenceNumber(this.referenceCount)
    })
  }

  getNewReferenceWithIntroMessageAndFooter() {
    this._devisServiceProxy
      .getLastReferenceWithIntroMessageAndFooter()
      .subscribe((res) => {
        this.referenceCount = res.lastReference + 1
        this.reference = this.devisFormatReferenceNumber(this.referenceCount)

        this.formGroup
          .get('messageIntroduction')
          .setValue(res.estimateIntroMessage)
        this.formGroup.get('piedDePage').setValue(res.estimateFooter)
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
  }

  addRow() {
    this.getFromArrayControl.push(this.initiateTableForm())
  }

  deleteRow(index: number) {
    const control = this.formGroup.get('devisItems') as FormArray
    control.removeAt(index)
    this.calculateSummaryTotalHTAndTTC()
  }

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

    this.summaryTotalTTC = this.summaryTotalHT + this.summaryTVA - (this.remiseAmount || 0)
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
  async getNewItemValue() {
    let formValue = this.formGroup.value
    let result = await this._clientServiceProxy
      .getByIdClient(formValue.client.id)
      .toPromise()

    return new DevisDto({
      reference: this.manuelReference
        ? this.formGroup.get('reference').value
        : this.devisFormatReferenceNumber(this.referenceCount),

      dateEmission: this.getExactDate(formValue.dateEmission, new Date()),
      echeancePaiement: formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction || '',
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value ?? 0,
      statut: DevisStatutEnum.Undefined,
      devisItems: formValue.devisItems.map((devisItem) => {
        return new DevisItemDto({
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
      id: null,
    })
  }

  createApiCall(devisStatus: DevisStatutEnum) {
    let formValue = this.formGroup.value

    let createDevisInput = new CreateDevisInput({
      reference: this.manuelReference
        ? this.formGroup.get('reference').value
        : this.devisFormatReferenceNumber(this.referenceCount),

      dateEmission: this.getExactDate(formValue.dateEmission, new Date()),
      echeancePaiement: formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value ?? 0,
      statut: devisStatus,
      devisItems: formValue.devisItems.map((devisItem) => {
        return new DevisItemDto({
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
      currency: this.Currency,
      montantTtc: this.summaryTotalTTC,
    })

    this._devisServiceProxy.createDevis(createDevisInput).subscribe((id) => {
      if (id) {
        this._clientServiceProxy
          .getByIdClient(formValue.client.id)
          .subscribe((res) => {
            this.devisIsSaved = true
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
                currency: this.Currency,
              },
            })
            this.closeDialog()
          })
      }
    })
    this._toastService.info({
      summary: 'Opértion réussie',
      detail: 'Vous avez ajouté ce devis avec succés',
    })
  }

  getUpdatedValue(formValue, devisStatus?: DevisStatutEnum) {
    return new UpdateDevisInput({
      ...this.devisItem,
      id: this.devisItem.id,
      reference: this.manuelReference
        ? this.formGroup.get('reference').value
        : this.selectedDevisItem.reference,
      dateEmission: moment(formValue.dateEmission),
      echeancePaiement: +formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction || '',
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value,
      statut: devisStatus,
      devisItems: formValue.devisItems.map((devisItem) => {
        return new DevisItemDto({
          catalogueId: devisItem.catalogueId,
          designation: devisItem.catalogue.designation,
          date: moment(devisItem.date),
          quantity: devisItem.quantity ?? 0,
          unit: devisItem.unit,
          unitPriceHT: devisItem.unitPriceHT ?? 0,
          tva: devisItem.tva || 0,
          totalTtc: devisItem.totalTtc,
        })
      }),
      clientId: formValue.client.id,
      currency: this.Currency,
      montantTtc: this.summaryTotalTTC,
    })
  }

  updateApiCall(devisStatus: DevisStatutEnum) {
    let formValue = this.formGroup.value
    let updateDevisInput = this.getUpdatedValue(formValue, devisStatus)
    updateDevisInput.dateEmission = updateDevisInput.dateEmission.add(1, 'days')
    updateDevisInput.devisItems = updateDevisInput.devisItems.map(i =>  { i.date.add(1, 'days'); return i })
    this._devisServiceProxy.updateDevis(updateDevisInput).subscribe((res) => {
      if (res) {
            if (this.selectedDevisItem.client.id != formValue.client.id) {
              this._clientServiceProxy
              .getByIdClient(formValue.client.id)
              .subscribe((res) => {
                this.crudOperationEvent.emit({
                  crudOperation: 'update',
                  result: {
                    ...this.getUpdatedValue(formValue, devisStatus),
                    client: res,
                  },
                })
               })
            
            } else {
              this.crudOperationEvent.emit({
                crudOperation: 'update',
                result: {
                  ...this.getUpdatedValue(formValue, devisStatus),
                },
              })
            }
            this.closeDialog()
      }
    })

    this._toastService.info({
      summary: 'Opértion réussie',
      detail: 'Vous avez modifié ce devis avec succés',
    })
  }

  clientAutoCompleteSearch(event: any) {
    setTimeout(() => {
      this._clientServiceProxy
        .getClientForAutoComplete(event.query)
        .subscribe((res: ClientForAutoCompleteDtoListResultDto) => {
          if (res.items.length) this.clientSuggestions = res.items
          else {
            this.clientSuggestions = [
              new ClientForAutoCompleteDto({
                id: 0,
                displayName: 'Ajouter un nouveau client ?',
              }),
            ]
          }
        })
    }, 500)
  }

  onSelectClientAutoComplete() {
    this.selectedClientId = this.formGroup.get('client').value['id']
  }

  onSelectClient(event) {
    if (this.clientSuggestions[0].id == 0) {
      this.formGroup.get('client').setValue(null)
      this.showClientDialog()
      return
    }

    this._clientServiceProxy.getClientDefaults(event.id).subscribe((res) => {
      this.setClientDefaults(res)
    })
  }

  setClientDefaults(clientDefaultsDto: ClientDefaultsDto) {
    this.formGroup.patchValue({
      echeancePaiement: clientDefaultsDto.paymentPeriod,
    })

    this.devisOptionsFormGroup.patchValue({
      devise: clientDefaultsDto.currency,
      remiseBtnIsChecked: !!clientDefaultsDto.permanentDiscount,
      remise: clientDefaultsDto.permanentDiscount,
    })

    this.remiseAmountChanged(clientDefaultsDto.permanentDiscount)
    this.Currency = clientDefaultsDto.currency
  }

  filterCatalogues(event) {
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

  devisItemRowIndex: number
  onSelectCatalogAutoComplete(event: CatalogueForAutoCompleteDto, index) {
    let devisItems = this.formGroup.get('devisItems') as FormArray
    if (this.filteredCatalogues[0].id == 0) {
      this.devisItemRowIndex = index
      devisItems.at(index).get('catalogue').setValue({ designation: null })
      this.catalogueDialogDisplay = true
      return
    }

    devisItems.at(index).setValue({
      catalogueId: event.id,
      catalogue: { designation: event.designation },
      date: this.formGroup.get('dateEmission').value,
      quantity: event.minimalQuantity,
      unit: event.unity || 'Heures',
      unitPriceHT: event.htPrice,
      tva: event.tva || 20,
      totalTtc: this._calculationsService.calculateTTCWithQuantity(
        event.htPrice,
        event.tva,
        event.minimalQuantity,
      ),
    })

    this.calculateSummaryTotalHTAndTTC()
    this.RecalculateRows()
  }

  onClearCatalogAutoComplete(index) {
    let factureItems = this.formGroup.get('devisItems') as FormArray
    factureItems.at(index).patchValue({
      catalogueId: 0,
    })
  }

  saveBrouillon() {
    if (this.formGroup.valid) {
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
              !res ||
              (this.dialogTitle == 'Modifier' &&
                reference == this.selectedDevisItem.reference)
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

      this.displayFormValidationErrors()
    }
  }

  displayFormValidationErrors(){
    let controlsNames = []
    const conrtolsObj = {
      client: 'Client',
      devisItems: 'Désignation'
    }

    for (let control in this.formGroup.controls) {
      if (!this.formGroup.controls[control].valid)
        controlsNames = controlsNames.concat(conrtolsObj[control])
    }

    this._toastService.error({
      detail:
        'Veuillez remplir les chemps obligatoires: ' +
        controlsNames.join(', '),
    })
  }

  validateDevis() {
    console.log(this.formGroup.value, this.formGroup.valid);
    let returnValue = of({ success: false, result: null })
    this.enableValidationClass()
  
    if (this.formGroup.valid) {
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
              !res ||
              (this.dialogTitle == 'Modifier' &&
                reference == this.selectedDevisItem.reference)
            ) {
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
    else {
      // this.displayFormValidationErrors()
     this.displayFormValidationErrors()
    }

    return returnValue
  }
  
  //#endregion

  async preview() {
    let res
    if (this.dialogTitle == 'Nouveau' || this.dialogTitle == 'Dupliquer') {
      res = await this.getNewItemValue()
    } else {
      res = this.getUpdatedValue(this.formGroup.value)
      if (this.selectedClientId == this.devisItem.clientId) {
        res.client = this.devisItem.client
      } else {
        res.client = await this._clientServiceProxy
          .getByIdClient(this.formGroup.value.client.id)
          .toPromise()
      }
    }

    this._previewService.previewItem({
      item: res,
      remiseAmount: this.remiseAmount,
      summaryTVA: this.summaryTVA,
      summaryTotalHT: this.summaryTotalHT,
      title: 'Devis',
      logoSrc: this.logoSrc
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

  //#endregion

  //Catalogue dialog
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
            let factureItems = this.formGroup.get('devisItems') as FormArray
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

  showClientDialog() {
    this.clientDialogIsVisible = true
    this.clientDialogStatus = DialogStatus.New
  }

  closeClientDialog(data) {
    this.clientDialogIsVisible = false
    this.clientDialogStatus = undefined

    if (data) {
      let clientForAutoCompleteDto = new ClientForAutoCompleteDto({
        id: data.id,
        displayName: data.displayName,
      })
      this.clientSuggestions = [
        ...this.clientSuggestions,
        clientForAutoCompleteDto,
      ]
      this.formGroup.get('client').setValue(clientForAutoCompleteDto)
    }
  }
}
