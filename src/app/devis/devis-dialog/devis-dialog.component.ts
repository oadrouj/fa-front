import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  FormControl,
} from '@angular/forms'
import { DialogStatus } from '@shared/enums/DialogState.enum'
import { DevisContentItem } from '@shared/models/DevisContentItem'
import { DevisItem } from '@shared/models/DevisItem'
import { LazyLoadEvent, MessageService } from 'primeng/api'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-devis-dialog',
  templateUrl: './devis-dialog.component.html',
  providers: [MessageService],
  styleUrls: ['./devis-dialog.component.css'],
})

export class DevisDialogComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
  ) {}


  ngOnInit(): void {
    this.initiateFormGroup()
    
    this.devisOptionsFormGroup = this.initiateDevisOptionsGroup()
    this.eventsSubscription = this.SelectDevisItemEvent.subscribe(
      (devisItem: DevisItem) => {
        this.clearTableControl()
        this.selectedDevisItem = devisItem
      },
    )

    this.eventsSubscription = this.dialogStatusEvent.subscribe(
      (dialogStatus: DialogStatus) => {
       
        this.initiateSummaryValues()
        switch (dialogStatus) {
          case DialogStatus.New:
            this.initiateFormGroupForNewDevis();
            this.dialogTitle = 'Nouveau'
            this.devisItem = new DevisItem()
            this.reference = this.getNewReference()
            this.isFirstLigneToAdd = true
            break

          case DialogStatus.Edit:
            this.initiateFormGroupWithTableControls()
            this.dialogTitle = 'Modifier'
            this.devisItem = this.selectedDevisItem
            this.reference = this.selectedDevisItem.reference
            this.setFormGroup()
            this.devisOptionsFormGroup.get('remise').setValue(this.devisItem.remise)
            this.calculateSummaryTotalHTAndTTC();
            break

          case DialogStatus.Duplicate:
            this.initiateFormGroupWithTableControls()
            this.dialogTitle = 'Dupliquer'
            this.devisItem = this.selectedDevisItem
            this.reference = this.getNewReference()
            this.setFormGroup()
            this.devisOptionsFormGroup.get('remise').setValue(this.devisItem.remise)
            this.calculateSummaryTotalHTAndTTC();
            break
          default:
            break
        }
      },
    )
  }

  @Input() visible = false
  @Input() SelectDevisItemEvent = new Observable<DevisItem>()
  @Input() dialogStatusEvent!: Observable<DialogStatus>
  @Input() clientAutoCompleteSearch: (_) => void
  @Output() closeDialog = new EventEmitter()

  formGroup!: FormGroup
  tableControl!: FormArray
  devisOptionsFormGroup!: FormGroup
  eventsSubscription!: Subscription
  selectedDevisItem!: DevisItem
  devisItem: DevisItem = new DevisItem()
  reference!: string
  dialogTitle!: string
  Currency: string = 'MAD'
  clientSuggestions !: string[]
  autoCompleteText = ''
  dateEmission!: Date
  echeancePayementOptions = [30, 60, 90]
  echeancePayementSelected = this.echeancePayementOptions[0] || ''
  isFirstLigneToAdd = true
  summaryTotalHT = 0
  summaryTotalTTC = 0
  summaryTVA = 0
  devisOptions = {
    remise: { checked: false },
    tva: { checked: true },
    devise: { list: ['MAD', 'USD', 'EURO'] },
  }
  cols = [
    {
      header: 'DESCRIPTION',
      field: 'description',
      type: 'inputText',
      colspan: 3,
    },
    { header: 'DATE', field: 'date', type: 'calendar', colspan: 2 },
    {
      header: 'Qté',
      field: 'quantite',
      type: 'inputNumber',
      inputEvent: (rowIndex) => this.calculateRowTotalHTAndTTC(rowIndex),
    },
    {
      header: 'UNITE',
      field: 'unite',
      type: 'dropdown',
      options: ['Heures', 'Jours'],
    },
    {
      header: 'PU HT',
      field: 'pu',
      type: 'inputNumber',
      inputEvent: (rowIndex) => this.calculateRowTotalHTAndTTC(rowIndex),
    },
    { header: 'TOTAL HT', field: 'total_ht', type: 'inputNumber' },
    {
      header: 'TVA',
      field: 'tva',
      type: 'dropdown',
      options: [10, 20, 30, 40],
      changeEvent: (rowIndex) => this.calculateRowTotalHTAndTTC(rowIndex),
    },
    {
      header: 'TOTAL TTC',
      field: 'total_ttc',
      type: 'inputNumber',
      colspan: 2,
    },
    { header: '', field: 'delete', type: 'button', label: '', icon: 'trash' },
  ]

  get getFormControls() {
    const control = this.formGroup.get('tableControl') as FormArray
    return control
  }

  get getDevisContentItems() {
    return this.getFormControls.value as DevisContentItem[]
  }

  initiateFormGroup(){
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      date_emission: [new Date(), Validators.required],
      echeance: ['30', Validators.required],
      introduction: ['', Validators.required],
      pied_page: ['', Validators.required],
      tableControl: this.formBuilder.array([]),
    })
  }

  initiateFormGroupWithTableControls() {
    const length = this.selectedDevisItem
      ? this.selectedDevisItem.contentItems.length
      : 1
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      date_emission: [new Date(), Validators.required],
      echeance: ['30', Validators.required],
      introduction: ['', Validators.required],
      pied_page: ['', Validators.required],
      tableControl: this.formBuilder.array(
        Array.from({ length }).fill(this.initiateTableForm()),
      ),
    })
  }

  initiateFormGroupForNewDevis(){
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      date_emission: [new Date(), Validators.required],
      echeance: ['30', Validators.required],
      introduction: ['', Validators.required],
      pied_page: ['', Validators.required],
      tableControl: this.formBuilder.array([this.initiateTableForm()]),
    })
  }

  setFormGroup() {
    this.formGroup.setValue({
      client: this.devisItem.client,
      date_emission: this.devisItem.date_emission,
      echeance: this.devisItem.echeance,
      introduction: this.devisItem.introduction,
      pied_page: this.devisItem.pied_page,
      tableControl: this.devisItem.contentItems,
    })
  }

  initiateTableForm() {
    return this.formBuilder.group({
      description: ['', Validators.required],
      date: [new Date(), Validators.required],
      quantite: ['', Validators.required],
      unite: ['Heures', Validators.required],
      pu: ['', Validators.required],
      tva: ['20', Validators.required],
      total_ht: [''],
      total_ttc: [''],
    })
  }

  initiateDevisOptionsGroup() {
    const remise = this.selectedDevisItem ? this.selectedDevisItem.remise : 0
    return this.formBuilder.group({
      remise: [remise],
      devise: [this.devisOptions.devise.list[0]],
      tva: [true],
    })
  }

  private clearTableControl() {
    (this.formGroup.get('tableControl') as FormArray).controls = []
  }

  loadLazy(event: LazyLoadEvent) {}

  getNewReference() {
    return 'N00001'
  }

  addRow() {
    const control = this.formGroup.get('tableControl') as FormArray
    const arrayCount = this.getFormControls.controls.length - 1
    if (
      this.isFirstLigneToAdd ||
      (this.getFormControls.controls[arrayCount].value.description != '' &&
        this.getFormControls.controls[arrayCount].value.pu != 0)
    ) {
      control.push(this.initiateTableForm())
      this.isFirstLigneToAdd = false
    } else
      this.warnService(
        "Avant d'ajouter une autre ligne remplir la dernière ligne",
      )
  }

  deleteRow(index: number) {
    const control = this.formGroup.get('tableControl') as FormArray
    control.removeAt(index)
    this.RecalculateRows();
  }

  autoCompleteSearch(event: any) {}

  calculateRowTotalHTAndTTC(rowIndex: number) {
    const row = this.getDevisContentItems[rowIndex]
    const total_ht = row.pu * row.quantite
    let total_ttc = total_ht;
    
    if(this.devisOptionsFormGroup.get('tva').value) {
      total_ttc = total_ht + (total_ht * row.tva) / 100
    }

    this.getFormControls.controls[rowIndex].patchValue({
      total_ht,
      total_ttc,
    })
    this.calculateSummaryTotalHTAndTTC()
  }

  RecalculateRows(){
    this.getDevisContentItems.forEach((_, index) => {
      this.calculateRowTotalHTAndTTC(index);
    })
  }

  calculateSummaryTotalHTAndTTC() {
    this.summaryTotalHT = this.getDevisContentItems
      .map((item) => item.total_ht)
      .reduce((accum, current) => accum + current)

    if (this.devisOptionsFormGroup.get('tva').value)
      this.summaryTVA = this.getDevisContentItems
        .map((item) => (item.total_ht * item.tva) / 100)
        .reduce((accum, current) => accum + current)
    else this.summaryTVA = 0

    this.summaryTotalTTC =
      this.summaryTotalHT +
      this.summaryTVA -
      this.devisOptionsFormGroup.get('remise').value
  }

  initiateSummaryValues(){
    this.summaryTVA = 0;
    this.summaryTotalHT = 0;
    this.summaryTotalTTC = 0;
  }

  toggleTVAOption(isChecked: boolean) {
    const controls = this.getFormControls.controls
    if (!isChecked) {
      controls.forEach((control) => {
        control.get('tva').disable()
      })
    } else {
      controls.forEach((control) => {
        control.get('tva').enable()
      })
    }

    this.calculateSummaryTotalHTAndTTC();
    this.RecalculateRows();
  }

  toggleRemiseOption(event: any) {
    this.devisOptions.remise.checked = event.checked
    if (event.checked) this.devisOptionsFormGroup.get('remise').setValue(0)

    this.calculateSummaryTotalHTAndTTC()
  }

  remiseValueChanged(event) {
    this.calculateSummaryTotalHTAndTTC()
    // this.devisOptions.remise.value = event.value
  }

  alert() {
    alert('test')
  }
  warnService(detail: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Attention',
      detail,
    })
  }

  errorService(detail: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Erreur',
      detail,
    })
  }

  validateDevis() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value)
    } else {
      this.errorService('Veillez remplir les chemps obligatoires')
    }
  }
}
