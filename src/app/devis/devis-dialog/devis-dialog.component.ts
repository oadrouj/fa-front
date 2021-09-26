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

  initialiseFormGroup() {
    const length = this.selectedDevisItem
      ? this.selectedDevisItem.contentItems.length
      : 1
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      date_emission: ['', Validators.required],
      echeance: ['30', Validators.required],
      introduction: ['', Validators.required],
      pied_page: ['', Validators.required],
      tableControl: this.formBuilder.array(
        Array.from({ length }).fill(this.initiateTableForm()),
      ),
    })
  }
  ngOnInit(): void {
    this.initialiseFormGroup()
    this.devisOptionsFormGroup = this.initiateDevisOptionsGroup()
    this.eventsSubscription = this.SelectDevisItemEvent.subscribe(
      (devisItem: DevisItem) => {
        this.clearTableControl()
        this.selectedDevisItem = devisItem
      },
    )

    this.eventsSubscription = this.dialogStatusEvent.subscribe(
      (dialogStatus: DialogStatus) => {
        this.clearTableControl()
        this.formGroup.reset()
        switch (dialogStatus) {
          case DialogStatus.New:
            this.dialogTitle = 'Nouveau'
            this.devisItem = new DevisItem()
            this.reference = this.getNewReference()
            this.isFirstLigneToAdd = true
            this.addRow()
            break

          case DialogStatus.Edit:
            this.dialogTitle = 'Modifier'
            this.initialiseFormGroup()
            this.devisItem = this.selectedDevisItem
            this.reference = this.selectedDevisItem.reference
            this.setFormGroup()
            break

          case DialogStatus.Duplicate:
            this.dialogTitle = 'Dupliquer'
            this.initialiseFormGroup()
            this.devisItem = this.selectedDevisItem
            this.reference = this.getNewReference()
            this.setFormGroup()
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
  summaryTotalHT!: number
  summaryTotalTTC!: number
  summaryRemise!: number
  summaryTVA!: number

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
      inputEvent: (rowIndex) => this.calculateTotalHTAndTTC(rowIndex),
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
      inputEvent: (rowIndex) => this.calculateTotalHTAndTTC(rowIndex),
    },
    { header: 'TOTAL HT', field: 'total_ht', type: 'inputNumber' },
    {
      header: 'TVA',
      field: 'tva',
      type: 'dropdown',
      options: [10, 20, 30, 40],
    },
    {
      header: 'TOTAL TTC',
      field: 'total_ttc',
      type: 'inputNumber',
      colspan: 2,
      suffix: ' MAD',
    },
    { header: '', field: 'delete', type: 'button', label: '', icon: 'trash' },
  ]

  suggestions = []
  autoCompleteText = ''
  dateEmission!: Date
  echeancePayementOptions = [30, 60, 90]
  echeancePayementSelected = this.echeancePayementOptions[0] || ''
  isFirstLigneToAdd = true
  devisOptions = {
    remise: { checked: false },
    tva: { checked: true },
    devise: { list: ['MAD', 'USD', 'EURO'] },
  }

  private clearTableControl() {
    ;(this.formGroup.get('tableControl') as FormArray).controls = []
  }

  loadLazy(event: LazyLoadEvent) {}

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
    return this.formBuilder.group({
      remise: [0],
      devise: [this.devisOptions.devise.list[0]]
    })
  }

  get getFormControls() {
    const control = this.formGroup.get('tableControl') as FormArray
    return control
  }

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
  }

  autoCompleteSearch(event: any) {}

  calculateTotalHTAndTTC(rowIndex: number) {
    const tableArray = this.getFormControls.value as DevisContentItem[]
    const row = tableArray[rowIndex]
    const total_ht = row.pu * row.quantite
    const total_ttc = total_ht + (total_ht * row.tva) / 100
    this.getFormControls.controls[rowIndex].patchValue({
      total_ht,
      total_ttc,
    })

    this.summaryTotalHT = (this.getFormControls.value as DevisContentItem[])
      .map((item) => item.total_ht)
      .reduce((accum, current) => accum + current)
  }

  toggleTVAOption(isChecked: boolean) {
    const controls = this.getFormControls.controls
    if (isChecked) {
      controls.forEach((control) => {
        control.get('tva').disable()
      })
    } else {
      controls.forEach((control) => {
        control.get('tva').enable()
      })
    }
  }

  toggleRemiseOption(event: any) {
      this.devisOptions.remise.checked = event.checked
      
  }

  changeRemiseValue(event) {
    console.log(event)
    // this.devisOptions.remise.value = event.value
  }

  alert(){
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
