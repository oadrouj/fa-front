import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms'
import { DialogStatus } from '@shared/enums/DialogState.enum'
import { DevisContentItem } from '@shared/models/DevisContentItem'
import { DevisItem } from '@shared/models/DevisItem'
import { ReferenceService } from '@shared/services/reference.service'
import { LazyLoadEvent, MessageService } from 'primeng/api'
import { Observable, Subscription } from 'rxjs'
import { ToastService } from '@shared/services/toast.service'
import {
  ClientForAutoCompleteDto,
  ClientForAutoCompleteDtoListResultDto,
  ClientServiceProxy,
  CreateDevisInput,
  DevisItemDto,
  DevisServiceProxy,
  DevisStatutEnum,
  UpdateDevisInput,
} from '@shared/service-proxies/service-proxies'
import * as moment from 'moment'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import { DateHelper } from '@shared/helpers/DateHelper'
@Component({
  selector: 'app-factures-dialog',
  templateUrl: './factures-dialog.component.html',
  styleUrls: ['./factures-dialog.component.css'],
  providers: [ToastService],
})
export class FacturesDialogComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private _referenceService: ReferenceService,
    private toastService: ToastService,
    private _devisServiceProxy: DevisServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
  ) {}

  ngOnInit(): void {
    
    this.initiateFormGroup()
    this.devisOptionsFormGroup = this.initiateDevisOptionsGroup()
    this.eventsSubscription = this.SelectDevisItemEvent.subscribe(
      (devisItem: DevisItem) => {
        this.selectedDevisItem = devisItem
      },
    )

    this.eventsSubscription = this.dialogStatusEvent.subscribe(
      (dialogStatus: DialogStatus) => {
        this.initiateSummaryValues()
        document.body.style.overflow = 'hidden'

        switch (dialogStatus) {
          case DialogStatus.New:
            this.getNewReference()
            this.initiateFormGroupForNewDevis()
            this.dialogTitle = 'Nouveau'
            this.devisItem = null
            break

          case DialogStatus.Edit:
            this.initiateFormGroupWithTableControls()
            this.dialogTitle = 'Modifier'
            this.devisItem = this.selectedDevisItem
            this.reference = this.selectedDevisItem.reference
            this.setFormGroup()
            this.devisOptionsFormGroup
              .get('remise')
              .setValue(this.devisItem.remise)
            this.formGroup.get('client').setValue(this.devisItem.client)
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
            this.calculateSummaryTotalHTAndTTC()
            break
          default:
            break
        }
      },
    )
  }

  //#region properties
  title = 'Factures';
  primaryColor = 'orange';
  secondaryColor = 'secondary-green';
  @Input() visible = false;
  @Input() SelectDevisItemEvent = new Observable<DevisItem>();
  @Input() dialogStatusEvent!: Observable<DialogStatus>
  @Input() devisFormatReferenceNumber: (number) => string
  @Output() closeDialogEvent = new EventEmitter()
  formGroup!: FormGroup
  tableControl!: FormArray
  devisOptionsFormGroup!: FormGroup
  eventsSubscription!: Subscription
  @ViewChild('frm') frm!: HTMLFormElement
  selectedDevisItem!: DevisItem
  selectedClientId: number
  devisItem: DevisItem = new DevisItem()
  reference!: string
  referenceCount!: number
  dialogTitle!: string
  Currency: string = 'MAD'
  clientSuggestions!: ClientForAutoCompleteDto[]
  echeancePayementOptions = [30, 60, 90]
  echeancePayementSelected = this.echeancePayementOptions[0] || ''
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

  get getFromArrayControl() {
    const control = this.formGroup.get('tableControl') as FormArray
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

  initiateFormGroupForNewDevis() {
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
      quantite: [1, Validators.required],
      unite: ['Heures', Validators.required],
      pu: [0, Validators.required],
      tva: [20, Validators.required],
      total_ht: [0],
      total_ttc: [0],
    })
  }

  initiateDevisOptionsGroup() {
    const remise = this.selectedDevisItem ? this.selectedDevisItem.remise : 0
    return this.formBuilder.group({
      remise: [remise],
      // remiseState: [false],
      devise: [this.devisOptions.devise.list[0]],
      tva: [true],
    })
  }

  private clearTableControl() {
    (this.formGroup.get('tableControl') as FormArray).controls = []
  }

  //#endregion

  closeDialog() {
    this.closeDialogEvent.emit()
    this.clearTableControl()
    this.frm.nativeElement.classList.remove('submitted')
    document.body.style.overflow = 'auto'
  }

  getNewReference() {
    this._devisServiceProxy.getLastReference().subscribe((res: number) => {
      this.referenceCount = res + 1; 
      this.reference =  this.devisFormatReferenceNumber(this.referenceCount)
    })
  }

  changeReference(){
    this.referenceCount++;
    this.reference =  this.devisFormatReferenceNumber(this.referenceCount)

  }

  addRow() {
    this.getFromArrayControl.push(this.initiateTableForm())
  }

  deleteRow(index: number) {
    const control = this.formGroup.get('tableControl') as FormArray
    control.removeAt(index)
    this.RecalculateRows()
  }

  autoCompleteSearch(event: any) {}

  //#region Calculations

  calculateRowTotalHTAndTTC(rowIndex: number) {
    const row = this.getDevisContentItems[rowIndex]
    const total_ht = row.pu * row.quantite
    let total_ttc = total_ht

    if (this.devisOptionsFormGroup.get('tva').value) {
      total_ttc = total_ht + (total_ht * row.tva) / 100
    }

    this.getFromArrayControl.controls[rowIndex].patchValue({
      total_ht,
      total_ttc,
    })
    this.calculateSummaryTotalHTAndTTC()
  }

  RecalculateRows() {
    this.getDevisContentItems.forEach((_, index) => {
      this.calculateRowTotalHTAndTTC(index)
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
    this.devisOptions.remise.checked = event.checked
    if (!event.checked) this.devisOptionsFormGroup.get('remise').setValue(0)

    this.calculateSummaryTotalHTAndTTC()
  }

  remiseValueChanged(event) {
    this.calculateSummaryTotalHTAndTTC()
    // this.devisOptions.remise.value = event.value
  }

  //#endregion

  //#region Crud operations
  createApiCall(devisStatus: DevisStatutEnum) {
    let formValue = this.formGroup.value

      let createDevisInput = new CreateDevisInput({
        reference: this.referenceCount,
        dateEmission:
          DateHelper.initiateTimeFromDate(formValue.date_emission).getTime() ==
          DateHelper.initiateTimeFromDate(moment()).getTime()
            ? moment()
            : moment(formValue.date_emission).add(1, 'days'),
        echeancePaiement: formValue.echeance,
        messageIntroduction: formValue.introduction,
        piedDePage: formValue.pied_page,
        remise: formValue.remise,
        statut: devisStatus,
        devisItems: formValue.tableControl.map(
          (devisItem: DevisContentItem) => {
            return new DevisItemDto({
              description: devisItem.description,
              date: moment(devisItem.date).add(1, 'days'),
              quantity: devisItem.quantite,
              unit: devisItem.unite,
              unitPriceHT: devisItem.pu,
              tva: devisItem.tva,
              totalTtc: devisItem.total_ttc,
            })
          },
        ),
        clientId: this.selectedClientId,
      })

      console.log(createDevisInput)
      this._devisServiceProxy
        .createDevis(createDevisInput)
        .subscribe((res) => console.log(res))
      this.toastService.info({
        summary: 'Confirmed',
        detail: 'Vous avez ajouter ce devis en brouillon',
      })
  
}

  updateApiCall(devisStatus: DevisStatutEnum) {
    let formValue = this.formGroup.value
    let updateDevisInput = new UpdateDevisInput({
      id: 3,
      reference: this.referenceCount,
      dateEmission:
        DateHelper.initiateTimeFromDate(formValue.date_emission).getTime() ==
        DateHelper.initiateTimeFromDate(moment()).getTime()
          ? moment()
          : moment(formValue.date_emission).add(1, 'days'),
      echeancePaiement: formValue.echeance,
      messageIntroduction: formValue.introduction,
      piedDePage: formValue.pied_page,
      remise: formValue.remise,
      statut: devisStatus,
      devisItems: formValue.tableControl.map(
        (devisItem: DevisContentItem) => {
          return new DevisItemDto({
            description: devisItem.description,
            date: moment(devisItem.date).add(1, 'days'),
            quantity: devisItem.quantite,
            unit: devisItem.unite,
            unitPriceHT: devisItem.pu,
            tva: devisItem.tva,
            totalTtc: devisItem.total_ttc,
          })
        },
      ),
      clientId: this.selectedClientId,
    })

    this._devisServiceProxy
      .updateDevis(updateDevisInput)
      .subscribe((res) => console.log(res))
    this.toastService.info({
      summary: 'Confirmed',
      detail: 'Vous avez modifier ce devis en brouillon',
    })
  }

  clientAutoCompleteSearch(event: any) {
    setTimeout(() => {
      this._clientServiceProxy.getClientForAutoComplete(event.query)
      .subscribe((res: ClientForAutoCompleteDtoListResultDto) => {
        this.clientSuggestions = res.items
    })
    }, 500)
}

  onSelectClientAutoComplete(){
    this.selectedClientId = this.formGroup.get('client').value['id']
    console.log(this.selectedClientId)
  }

  saveBrouillon() {
    if (this.devisItem == null) {
      this.createApiCall(DevisStatutEnum.Cree);
    } else {
      this.updateApiCall(DevisStatutEnum.Cree);
    }
  }

  validateDevis() {
    this.frm.nativeElement.classList.add('submitted')
    let controlsNames = []
    const conrtolsObj = {
      client: 'Client',
      introduction: "Message d'introduction",
      pied_page: 'Pied de page',
      tableControl: 'Description',
    }

    for (let control in this.formGroup.controls) {
      if (!this.formGroup.controls[control].valid)
        controlsNames = controlsNames.concat(conrtolsObj[control])
    }

    if (this.formGroup.valid) {
     
      if (this.devisItem == null) {
        this.createApiCall(DevisStatutEnum.Valide);
      } else {
        this.updateApiCall(DevisStatutEnum.Valide);
      }

    } else {
      this.toastService.error({
        detail:
          'Veuillez remplir les chemps obligatoires: ' +
          controlsNames.join(', '),
      })
    }
  }

  //#endregion
 
  previewDevis() {}
  
  
}
