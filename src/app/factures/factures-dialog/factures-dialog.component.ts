import {
  AfterViewInit,
  ChangeDetectorRef,
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
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs'
import { takeUntil, finalize, first } from 'rxjs/operators'
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
  FileApiServiceProxy,
  TvaCurrencyDto,
  GeneralInfosDto,
  InfosEntrepriseServiceProxy,
} from '@shared/service-proxies/service-proxies'
import * as moment from 'moment'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import { DateHelper } from '@shared/helpers/DateHelper'
import { GlobalEventsService } from '@shared/globalEventsService'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { ValidationHelper } from '@shared/helpers/ValidationHelper'
import { CalculationsService } from '@shared/services/calculations.service'
import { ConfirmDialog } from 'primeng/confirmdialog'
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { PreviewService } from '@shared/services/preview.service'
import { DomSanitizer } from '@angular/platform-browser'
import { ConvertCurrencyService } from '@shared/services/convert-currency.service'
import { Table } from 'primeng/table'
import { EstimateInvoiceStatusStateService } from '@shared/services/estimate-invoice-status-state.service'
@Component({
  selector: 'app-factures-dialog',
  templateUrl: './factures-dialog.component.html',
  styleUrls: ['./factures-dialog.component.css'],
  providers: [ToastService],
})
export class FacturesDialogComponent implements OnInit, AfterViewInit {
  remiseValue: number
  filteredCatalogues: CatalogueForAutoCompleteDto[]

  devisIsSaved: any
  saveBrouillonHide = false
  devisItemRowIndex: number

  tvaCurrencyDto: TvaCurrencyDto;
  generalInfosDto: GeneralInfosDto;
  selectedTva :string = "20%";
  selectedDevise :string = "MAD";
  iconClasses ="";

  public $destroyed = new Subject<any>();
  private _dataItem
  clientDialogIsVisible: boolean
  clientDialogStatus: DialogStatus
  currencies: string[] = ['MAD', 'USD', 'EUR']
  logoSrc: string
  @Input() set dataItem(value) {
    this._dataItem = value
    this.selectedDevisItem = value
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


  maxIntroLength = 140;
  maxFooterLength = 140;

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
    private _previewService: PreviewService,
    private _fileApiServiceProxy: FileApiServiceProxy,
    private  _sanitizer: DomSanitizer,
    private _currencyConverterService: ConvertCurrencyService,
    private _infosEntrepriseService: InfosEntrepriseServiceProxy,
    private cdr: ChangeDetectorRef,
    private _estimateInvoiceStatusStateService: EstimateInvoiceStatusStateService
  ) {
    let observer = {
      next: result=> {
        if (result){
      
          if(this._dialogStatus == DialogStatus.New) {
            if(result.tva != null) this.selectedTva =  result.tva; 
          
            if(this.selectedTva){
              if(parseInt(this.selectedTva.slice(0,-1)) == 0) {
                this.devisOptionsFormGroup.get('tva').setValue(false)
              }else{
                this.devisOptionsFormGroup.get('tva').setValue(true)
              }
            }
          }
          if(this._dialogStatus != DialogStatus.Convert) {
            if(result.currency != null) this.Currency = result.currency; 
          }
          
        }else{
        }
      },
      error: error =>{
        console.log(error)
      }
    }

    this._infosEntrepriseService
    .getGeneralInfos()
    .pipe(
      takeUntil(this.$destroyed)
    )
    .subscribe(observer)

  }

  updateState(status) {
    this.manuelReference = false
    this.saveBrouillonHide = false
    this.initiateSummaryValues()
    this.visible && (document.body.style.overflow = 'hidden')

    switch (status) {
      case DialogStatus.New:
        this.devisIsSaved = false
        this.initiateFormGroupForNewDevis()
        this.getNewReferenceWithIntroMessageAndFooter()

        this.dialogTitle = 'Nouvelle'
        this.summaryTVA = 0
        this.remiseValue = 0
        this.calculateSummaryTotalHTAndTTC()

       /*  this.selectedDevisItem && this.formGroup.get('client').setValue(this.selectedDevisItem.client) */
        this.devisOptionsFormGroup.get('devise').setValue(this.Currency) 
        
        this.devisItem = null

        break

      case DialogStatus.Edit:
        this.initiateFormGroupWithTableControls()
        this.dialogTitle = 'Modifier'
        this.devisItem = this.selectedDevisItem
        this.reference = this.devisItem.reference

        ;(this.devisItem.statut == FactureStatutEnum.PaiementAttente ||
          this.devisItem.statut == FactureStatutEnum.PaiementRetard) &&
          (this.saveBrouillonHide = true)

        this.setFormGroup()
        this.formGroup.get('client').setValue(this.devisItem.client)

        this.devisOptionsFormGroup.get('remise').setValue(this.devisItem.remise)

        this.remiseValue = this.devisItem.remise

        if (this.devisItem.remise)
          this.devisOptionsFormGroup.get('remiseBtnIsChecked').setValue(true)

        let tvaIsDesactivated = this.selectedDevisItem.factureItems.every(
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

        tvaIsDesactivated = this.selectedDevisItem.factureItems.every(
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

      case DialogStatus.Convert:
        this.getNewReferenceWithIntroMessageAndFooter()
        this.initiateFormGroupWithTableControls()
        this.dialogTitle = 'Nouvelle'
        this.devisItem = this.selectedDevisItem

        this.devisItem.dateEmission = new Date()

     
        this.setFormGroup()
        this.devisOptionsFormGroup.get('remise').setValue(this.devisItem.remise)
        this.remiseValue = this.devisItem.remise

        tvaIsDesactivated = this.devisItem.factureItems.every(
          (item) => item.tva == 0,
        )
        this.devisOptionsFormGroup.get('tva').setValue(!tvaIsDesactivated)
        tvaIsDesactivated && this.toggleTVAOption(false)

        this.devisOptionsFormGroup
        .get('devise')
        .setValue(this.devisItem.currency)
        
        this.Currency = this.devisItem.currency
        this.calculateSummaryTotalHTAndTTC()
        this.formGroup.get('client').setValue(this.devisItem.client)
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
      }
  }

  ngOnInit() {
    this.devisIsSaved = false
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

  ngAfterViewInit() {}

  //#region properties
  title = 'Facture'
  primaryColor = 'orange'
  secondaryColor = 'secondary-green'
  @Input() visible = false
  @Output() openDialogEvent = new EventEmitter()
  @Output() closeDialogEvent = new EventEmitter()
  @Output() crudOperationEvent = new EventEmitter()
  formGroup!: FormGroup
  tableControl!: FormArray
  devisOptionsFormGroup!: FormGroup
  @ViewChild('frm') frm!: HTMLFormElement
  @ViewChild('myTable') myTable :Table

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
    devise: { list: this.currencies},
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
      header: 'QT??',
      field: 'quantity',
      type: 'inputNumber',
      inputEvent: (rowIndex, value) => this.calculateRowTotalHTAndTTC(rowIndex, value),
    },
    {
      header: 'UNIT??',
      field: 'unit',
      type: 'inputText',
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
      options: [ 
        { label: "0%", value: 0 },
        { label: "7%", value: 7 },
        { label: '10%', value: 10 },
        { label: "14%", value: 14 },
        { label: "20%", value: 20 }
      ],
      changeEvent: (rowIndex) => this.changeTVA(rowIndex),
    },
    {
      header: 'TOTAL TTC',
      field: 'totalTtc',
      type: 'inputNumber',
      colspan: 2,
      disabled: true,
      class: 'lastElement',
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
        catalogue: { designation: item.designation },
        date: item.date.toDate(),
        quantity: item.quantity,
        unit: item.unit,
        unitPriceHT: item.unitPriceHT,
        tva: !item.tva ? parseInt(this.selectedTva.slice(0,-1)) : item.tva,
        totalTtc: item.totalTtc,
        catalogueId: item.catalogueId,
      }
    })

    this.formGroup.setValue({
      client: this.devisItem.client,
      dateEmission: typeof (this.devisItem.dateEmission) == 'string' ? this.devisItem.dateEmission.toDate() : this.devisItem.dateEmission,
      echeancePaiement: this.devisItem.echeancePaiement,
      messageIntroduction: this.devisItem.messageIntroduction,
      piedDePage: this.devisItem.piedDePage,
      factureItems: factureItems,
    })
  }

  initiateTableForm() {
    let fb =  this.formBuilder.group({
      catalogueId: [null],
      catalogue: [{ designation: '', id: 0 }, Validators.required],
      date: [this.formGroup.get('dateEmission').value, Validators.required],
      quantity: [1, Validators.required],
      unit: ['', ],
      unitPriceHT: [0, Validators.required],
      tva: [
        {value: parseInt(this.selectedTva.slice(0,-1)), disabled: !this.devisOptionsFormGroup.get('tva').value}
        ,
        Validators.required,
      ],
      totalTtc: [0],
    })

    fb.get('tva').setValue(parseInt(this.selectedTva.slice(0,-1)));

    return fb
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
      devise: [this.Currency],
      tva: [parseInt(this.selectedTva.slice(0,-1)) == 0 ? false : true],
    })
  }

  getAllCurrencies() {
    fetch('/assets/json/currencies.json')
      .then((res) => res.json())
      .then((res) => (this.currencies = Object.keys(res)))
  }
  
  private clearTableControl() {
    ;(this.formGroup.get('factureItems') as FormArray).controls = []
  }

  //#endregion

  closeDialog() {
    if (
      (this.dialogTitle == 'Nouvelle' || this.dialogTitle == 'Dupliquer') &&
      !this.devisIsSaved
    ) {
      this._confirmDialogService.confirm({
        message:
          'Etes-vous s??r de vouloir quitter ? Toutes les donn??es saisies seront perdues',
        acceptCallback: () => {
          this.closeDialogEvent.emit()
          this.clearTableControl()
          this.disableValidationClass()
          this.devisOptionsFormGroup.get('remiseBtnIsChecked').setValue(false)
          this.cdr.detectChanges()
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
      this.cdr.detectChanges()

    }
  }

  factureFormatReferenceNumber(referenceNumber) {
    return this._formatService.formatReferenceNumber(
      referenceNumber,
      ReferencePrefix.Facture,
    )
  }

  getNewReference() {
    this._factureServiceProxy.getLastReference().subscribe((res: number) => {
      this.referenceCount = res + 1
      this.reference = this.factureFormatReferenceNumber(this.referenceCount)
    })
  }

  getNewReferenceWithIntroMessageAndFooter() {
    this._factureServiceProxy
      .getLastReferenceWithIntroMessageAndFooter()
      .subscribe((res) => {
        this.referenceCount = res.lastReference + 1
        this.reference = this.factureFormatReferenceNumber(this.referenceCount)
  

        this.formGroup
          .get('messageIntroduction')
          .setValue(res.invoiceIntroMessage)
        this.formGroup.get('piedDePage').setValue(res.invoiceFooter)
      })
  }

  changeReference() {
    this.manuelReference = true
    this.formGroup.addControl(
      'reference',
      new FormControl(this.reference, [
        Validators.required,
        // Validators.pattern('[a-zA-Z][0-9]{5}'),
      ]),
    )
  }

  addRow(table: Table) {
    this.getFromArrayControl.push(this.initiateTableForm())
    this.myTable.scrollTo({bottom: 0, behavior:'smooth'});
    setTimeout(() => {
      let body = table.containerViewChild.nativeElement.getElementsByClassName("p-datatable-scrollable-body")[0];
      body.scrollTop = body.scrollHeight;
      console.info(body.scrollHeight)
      console.info(body.scrollTop) 
    }, 0) 
  }

  deleteRow(index: number) {
    const control = this.formGroup.get('factureItems') as FormArray
    control.removeAt(index)
    this.calculateSummaryTotalHTAndTTC()
  }

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

    this.remiseAmount = this.calculateRemise(
      this.remiseValue,
      this.summaryTotalHT,
    )

if (this.devisOptionsFormGroup.get('tva').value){
  if (this.remiseValue == 0){
 
    this.summaryTVA = this.getFactureContentItems
    .map((item) => (item.unitPriceHT * item.quantity * item.tva) / 100)
    .reduce((accum, current) => accum + current)
  }else{
  

    this.summaryTVA = this.getFactureContentItems
    .map((item) => ((item.unitPriceHT - item.unitPriceHT * this.remiseValue / 100 ) * item.quantity * item.tva) / 100)
    .reduce((accum, current) => accum + current)
    
    this.getFactureContentItems.forEach(v =>{

    })
  }

}else{
  this.summaryTVA = 0
} 

  this.summaryTotalTTC = this.summaryTotalHT + this.summaryTVA - (this.remiseAmount || 0)

   /*  this.summaryTotalHT = this.getFactureContentItems
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
      this.summaryTotalHT + this.summaryTVA - (this.remiseAmount || 0) */
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
  async getNewItemValue() {
    let formValue = this.formGroup.value
    let result = await this._clientServiceProxy
      .getByIdClient(formValue.client.id)
      .toPromise()

    return new FactureDto({
      reference: this.manuelReference
        ? this.formGroup.get('reference').value
        : this.factureFormatReferenceNumber(this.referenceCount),

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
      id: null,
    })
  }

  //#region Crud operations
  createApiCall(devisStatus: FactureStatutEnum) {
    let formValue = this.formGroup.value

    let createDevisInput = new CreateFactureInput({
      reference: this.manuelReference
        ? this.formGroup.get('reference').value
        : this.factureFormatReferenceNumber(this.referenceCount),

      dateEmission: this.getExactDate(formValue.dateEmission, new Date()),
      echeancePaiement: formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value ?? 0,
      statut: devisStatus,
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
      currency: this.Currency,
      montantTtc: this.summaryTotalTTC,
    })
    this.iconClasses="pi pi-spin pi-spinner";

    this._factureServiceProxy
      .createFacture(createDevisInput)
      .pipe(finalize(() => {this.iconClasses=""; }))
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
                  currency: this.Currency,
                },
              })
            })
          this.closeDialog()
        }
      })
    this._toastService.info({
      summary: 'Op??rtion r??ussie',
      detail: 'Vous avez ajout?? cette facture avec succ??s',
    })
  }

  getUpdatedValue(formValue, factureStatus?: FactureStatutEnum) {
    return new UpdateFactureInput({
      ...this.devisItem,
      id: this.devisItem.id,
      reference: this.manuelReference
        ? this.formGroup.get('reference').value
        : this.selectedDevisItem.reference,

      dateEmission: moment(formValue.dateEmission),
      echeancePaiement: +formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value,
      statut: factureStatus,
      factureItems: formValue.factureItems.map((devisItem) => {
        return new FactureItemDto({
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

  updateApiCall(factureStatus: FactureStatutEnum) {
    let formValue = this.formGroup.value
    let updateInvoiceInput = this.getUpdatedValue(formValue, factureStatus)
    updateInvoiceInput.dateEmission = updateInvoiceInput.dateEmission.add(1, 'days')
    updateInvoiceInput.factureItems = updateInvoiceInput.factureItems.map(i =>  { i.date.add(1, 'days'); return i })

    this._factureServiceProxy
      .updateFacture(updateInvoiceInput)
      .subscribe((res) => {
        if (res) {
          this._clientServiceProxy
            .getByIdClient(formValue.client.id)
            .subscribe((res) => {
              if (this.selectedDevisItem.client.id != formValue.client.id) {
                this.crudOperationEvent.emit({
                  crudOperation: 'update',
                  result: {
                    ...this.getUpdatedValue(formValue, factureStatus),
                    client: res,
                  },
                })

              } else {
                this.crudOperationEvent.emit({
                  crudOperation: 'update',
                  result: {
                    ...this.getUpdatedValue(formValue, factureStatus),
                  },
                })
              }
              this.closeDialog()
            })
        }
      })

    this._toastService.info({
      summary: 'Op??rtion r??ussie',
      detail: 'Vous avez modifi?? cette facture avec succ??s',
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
    let factureItems = this.formGroup.get('factureItems') as FormArray
    factureItems.at(index).patchValue({
      catalogueId: 0,
    })
  }

  saveBrouillon() {
    // this.frm.nativeElement.classList.add('submitted')
    if (this.formGroup.valid) {
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
          if (
            (!res && !this.selectedDevisItem) ||
            !res ||
            (this.dialogTitle == 'Modifier' &&
              reference == this.selectedDevisItem.reference)
          ) {
            if (this.devisItem && this.dialogStatus == DialogStatus.Convert) {
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
              detail: 'Cette r??f??rence existe d??j??',
            })
          }
        })
    } else {
      this.displayFormValidationErrors()
    }
  }

  
  displayFormValidationErrors(){
    let controlsNames = []
    const conrtolsObj = {
      client: 'Client',
      devisItems: 'D??signation'
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
    let returnValue = of({ success: false, result: null })
    this.enableValidationClass()
    let controlsNames = []
    const conrtolsObj = {
      client: 'Client',
      factureItems: 'D??signation',
    }

    for (let control in this.formGroup.controls) {
      if (!this.formGroup.controls[control].valid)
        controlsNames = controlsNames.concat(conrtolsObj[control])
    }

    if (this.formGroup.valid) {
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
            if (
              !res ||
              (this.dialogTitle == 'Modifier' &&
                reference == this.selectedDevisItem.reference)
            ) {
              if (this.devisItem && this.dialogStatus == DialogStatus.Convert) {
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
                detail: 'Cette r??f??rence existe d??j??',
              })
            }
          })
      
    } else {
      this.displayFormValidationErrors()
    }
    /* type StatusAction = 'Convert' | 'Reject' | 'Validate' | 'Settle' | 'PartiallySettle' | 'Historic'
    type TargetComponent = 'Estimate' | 'Invoice' */

    this._estimateInvoiceStatusStateService.statusModifier = {statusAction: this.selectedDevisItem.status, target: 'Invoice'}
    
    return returnValue
  }
  //#endregion

  
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
    let res
    if (this.dialogTitle == 'Nouvelle' || this.dialogTitle == 'Dupliquer')
      res = await this.getNewItemValue()
    else {
      res = this.getUpdatedValue(this.formGroup.value)

      if (this.selectedClientId == this.devisItem.clientId)
        res.client = this.devisItem.client
      else {
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
      title: 'Facture',
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

  catalogueDialogDisplay = false
  catalogueOptions = ['produit', 'prestation']
  catalogueFormGroup: FormGroup
  tvaOptions = [0, 7, 10, 14, 20]

  unityOptions = ['Heures', 'Kg']

  initiateCatalogueFormGroup() {
    this.catalogueFormGroup = this.formBuilder.group({
      designation: ['', Validators.required],
      description: [''],
      unity: [''],
      htPrice: [0],
      tva: [parseInt(this.selectedTva.slice(0,-1))],
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
              summary: 'Op??rtion r??ussie',
              detail: 'Vous avez ajout?? un nouvel item',
            })

            this.closeCatalogueDialog()
          } else {
            this._toastService.internalError()
          }
        })
    } else {
      this._toastService.error({
        summary: 'Erreur',
        detail: 'Veuillez remplir le chemps D??signation',
      })
    }
  }

  showClientDialog(){
    this.clientDialogIsVisible = true
    this.clientDialogStatus = DialogStatus.New
  }

  closeClientDialog(data){
    this.clientDialogIsVisible = false
    this.clientDialogStatus = undefined

    if(data){
      let clientForAutoCompleteDto = new ClientForAutoCompleteDto({
        id: data.id,
        displayName: data.displayName
      })
      this.clientSuggestions = [
        ...this.clientSuggestions,
        clientForAutoCompleteDto,
      ]
      this.formGroup.get('client').setValue(clientForAutoCompleteDto)
    } 
  }

  currencyChangeConvertAmounts(event){

    this.Currency = event.value

  }

  getCurrentTvaAndCurrency(){
    let observer = {
      next: result=> {
        if (result){
          this.generalInfosDto = result;
          this.tvaCurrencyDto = new TvaCurrencyDto({
            "id": this.generalInfosDto.id,  
            "tva": this.generalInfosDto.tva,
            "currency": this.generalInfosDto.currency
            })
          if(this._dialogStatus == DialogStatus.New) if(result.tva != null) this.selectedTva = result.tva; 
          if(result.currency != null) this.Currency = result.currency; 
          this.setValueForm();
        }else{
        }
      },
      error: error =>{
        console.log(error)
      }
    }

    this._infosEntrepriseService
    .getGeneralInfos()
    .pipe(first())
    .subscribe(observer)
  }
  


  setValueForm(){
    this.devisOptionsFormGroup.controls.devise.setValue(this.Currency);
    this.devisOptionsFormGroup.controls.tva.setValue(this.selectedTva);
  }

  updateTva(row){

  }
}
