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
} from '@shared/service-proxies/service-proxies'
import * as moment from 'moment'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import { DateHelper } from '@shared/helpers/DateHelper'
import {
  GlobalEventsService,
  ModificationStatusEnum,
} from '@shared/globalEventsService'
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-devis-dialog',
  templateUrl: './devis-dialog.component.html',
  styleUrls: ['./devis-dialog.component.css'],
  providers: [ToastService],
})
export class DevisDialogComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private _referenceService: ReferenceService,
    private toastService: ToastService,
    private _devisServiceProxy: DevisServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    public globalEventsService: GlobalEventsService,
  ) {}

  ngOnInit(): void {
    this.initiateFormGroup()
    this.devisOptionsFormGroup = this.initiateDevisOptionsGroup()

    this.eventsSubscription = this.SelectDevisItemEvent.subscribe(
      (devisItem: DevisItem) => {
        this.selectedDevisItem = devisItem
      },
    )

    this.dialogStatusEvent.subscribe(({ statut, dialogComponent }) => {
      if (dialogComponent == 'devis') {
        this.initiateSummaryValues()
        this.visible && (document.body.style.overflow = 'hidden')

        switch (statut) {
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
            this.referenceCount = this.selectedDevisItem.reference
            this.reference = this._referenceService.formatReferenceNumber(
              this.selectedDevisItem.reference,
              ReferencePrefix.Devis,
            )
            this.setFormGroup()
            this.devisOptionsFormGroup
              .get('remise')
              .setValue(this.devisItem.remise)

            if (this.devisItem.remise)
              this.devisOptionsFormGroup
                .get('remiseBtnIsChecked')
                .setValue(true)
                
            this.calculateSummaryTotalHTAndTTC()
            this.formGroup.get('client').setValue(this.devisItem.client)
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

            if (this.devisItem.remise)
              this.devisOptionsFormGroup
                .get('remiseBtnIsChecked')
                .setValue(true)
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
      field: 'quantity',
      type: 'inputNumber',
      inputEvent: (rowIndex) => this.calculateRowTotalHTAndTTC(rowIndex),
    },
    {
      header: 'UNITE',
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
      changeEvent: (rowIndex) => this.calculateRowTotalHTAndTTC(rowIndex),
    },
    {
      header: 'TOTAL TTC',
      field: 'totalTtc',
      type: 'inputNumber',
      colspan: 2,
      disabled: true,
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
      messageIntroduction: ['', Validators.required],
      piedDePage: ['', Validators.required],
      devisItems: this.formBuilder.array([]),
    })
  }

  initiateFormGroupWithTableControls() {
  
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      dateEmission: [new Date(), Validators.required],
      echeancePaiement: ['30', Validators.required],
      messageIntroduction: ['', Validators.required],
      piedDePage: ['', Validators.required],
      devisItems: this.formBuilder.array([]),
    })
  }

  initiateFormGroupForNewDevis() {
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      dateEmission: [new Date(), Validators.required],
      echeancePaiement: ['30', Validators.required],
      messageIntroduction: ['', Validators.required],
      piedDePage: ['', Validators.required],
      devisItems: this.formBuilder.array([this.initiateTableForm()]),
    })
  }

  setFormGroup() {
    let devisItems = this.devisItem.devisItems.map((item: any) => {
      this.getFromArrayControl.push(this.initiateTableForm())
      return {
        ...item,
        date: item.date.toDate(),
      }
    })
    console.log(  this.getFromArrayControl.controls.length)
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
      description: ['', Validators.required],
      date: [new Date(), Validators.required],
      quantity: [1, Validators.required],
      unit: ['Heures', Validators.required],
      unitPriceHT: [0, Validators.required],
      tva: [20, Validators.required],
      totalTtc: [0],
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

  closeDialog() {
    this.closeDialogEvent.emit()
    this.clearTableControl()
    this.frm.nativeElement.classList.remove('submitted')
    document.body.style.overflow = 'auto'
    this.devisOptionsFormGroup.get('remiseBtnIsChecked').setValue(false)
  }

  getNewReference() {
    this._devisServiceProxy.getLastReference().subscribe((res: number) => {
      this.referenceCount = res + 1
      this.reference = this.devisFormatReferenceNumber(this.referenceCount)
    })
  }

  changeReference() {
    this.referenceCount++
    this.reference = this.devisFormatReferenceNumber(this.referenceCount)
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

  RecalculateRows() {
    this.getDevisContentItems.forEach((_, index) => {
      this.calculateRowTotalHTAndTTC(index)
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
    this.devisOptions.remise.checked =
      event.checked ?? this.devisItem.remise > 0
    if (!this.devisOptions.remise.checked)
      this.devisOptionsFormGroup.get('remise').setValue(0)

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
        DateHelper.initiateTimeFromDate(formValue.dateEmission).getTime() ==
        DateHelper.initiateTimeFromDate(moment()).getTime()
          ? moment()
          : moment(formValue.dateEmission).add(1, 'days'),
      echeancePaiement: formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value,
      statut: devisStatus,
      devisItems: formValue.devisItems.map((devisItem: DevisContentItem) => {
        return new DevisItemDto({
          description: devisItem.description,
          date:
            DateHelper.initiateTimeFromDate(devisItem.date).getTime() ==
            DateHelper.initiateTimeFromDate(moment()).getTime()
              ? moment()
              : moment(devisItem.date).add(1, 'days'),
          quantity: devisItem.quantity ?? 0,
          unit: devisItem.unit,
          unitPriceHT: devisItem.unitPriceHT ?? 0,
          tva: devisItem.tva,
          totalTtc: devisItem.totalTtc,
        })
      }),
      clientId: formValue.client.id,
    })

    this._devisServiceProxy.createDevis(createDevisInput).subscribe((id) => {
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
              },
            })
          })
        this.closeDialogEvent.emit()
      }
    })
    this.toastService.info({
      summary: 'Confirmed',
      detail: 'Vous avez ajouter ce devis en brouillon',
    })
  }

  updateApiCall(devisStatus: DevisStatutEnum) {
    let formValue = this.formGroup.value
    let updateDevisInput = new UpdateDevisInput({
      id: this.devisItem.id,
      reference: this.referenceCount,
      dateEmission:
        this.selectedDevisItem.dateEmission != formValue.dateEmission
          ? moment(formValue.dateEmission).add(1, 'days')
          : moment(formValue.dateEmission),
      echeancePaiement: +formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value,
      statut: devisStatus,
      devisItems: formValue.devisItems.map((devisItem: DevisContentItem) => {
        return new DevisItemDto({
          description: devisItem.description,
          date:
            DateHelper.initiateTimeFromDate(devisItem.date).getTime() ==
            DateHelper.initiateTimeFromDate(moment()).getTime()
              ? moment()
              : moment(devisItem.date).add(1, 'days'),
          quantity: devisItem.quantity ?? 0,
          unit: devisItem.unit,
          unitPriceHT: devisItem.unitPriceHT ?? 0,
          tva: devisItem.tva,
          totalTtc: devisItem.totalTtc,
        })
      }),
      clientId: formValue.client.id,
    })
    this._devisServiceProxy.updateDevis(updateDevisInput).subscribe((res) => {
      if (res) {
        if (this.selectedDevisItem.client.id != formValue.client.id) {
          this._clientServiceProxy
            .getByIdClient(formValue.client.id)
            .subscribe((res) => {
              this.crudOperationEvent.emit({
                crudOperation: 'update',
                result: {
                  ...this.selectedDevisItem,
                  ...updateDevisInput,
                  reference: updateDevisInput.reference,
                  client: res,
                },
              })
            })
        } else {
          this.crudOperationEvent.emit({
            crudOperation: 'update',
            result: {
              ...this.selectedDevisItem,
              ...updateDevisInput,
              reference: updateDevisInput.reference,
              client: this.selectedDevisItem.client,
            },
          })
        }
        this.closeDialogEvent.emit()
      }
    })
    this.toastService.info({
      summary: 'Confirmed',
      detail: 'Vous avez modifier ce devis en brouillon',
    })
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

  onSelectClientAutoComplete() {
    this.selectedClientId = this.formGroup.get('client').value['id']
  }

  saveBrouillon() {
    if (this.devisItem == null) {
      this.createApiCall(DevisStatutEnum.Cree)
    } else {
      this.updateApiCall(DevisStatutEnum.Cree)
    }
  }

  validateDevis(isDevisStatusUpdate = false) {
    let returnValue = of({ success: false, result: null })
    this.frm.nativeElement.classList.add('submitted')
    let controlsNames = []
    const conrtolsObj = {
      client: 'Client',
      messageIntroduction: "Message d'introduction",
      piedDePage: 'Pied de page',
      devisItems: 'Description',
    }

    for (let control in this.formGroup.controls) {
      if (!this.formGroup.controls[control].valid)
        controlsNames = controlsNames.concat(conrtolsObj[control])
    }

    if (this.formGroup.valid) {
      if (isDevisStatusUpdate) {
        returnValue = this.validateStatusApi()

      } else {
        if (this.devisItem == null) {
          this.createApiCall(DevisStatutEnum.Valide)
        } else {
          this.updateApiCall(DevisStatutEnum.Valide)
        }
      }
    } else {
      !this.visible && this.openDialogEvent.emit()
      this.toastService.error({
        detail:
          'Veuillez remplir les chemps obligatoires: ' +
          controlsNames.join(', '),
      })
    }

    return returnValue
  }

  //#endregion

  preview() {
    let formValue = this.formGroup.value;
    console.log(formValue)
    let devisItems = formValue.devisItems.map(
      (devisItem: DevisContentItem) => {
        return new DevisItemDto({
          description: devisItem.description,
          date:
            DateHelper.initiateTimeFromDate(devisItem.date).getTime() ==
            DateHelper.initiateTimeFromDate(moment()).getTime()
              ? moment()
              : moment(devisItem.date).add(1, 'days'),
          quantity: devisItem.quantity ?? 0,
          unit: devisItem.unit,
          unitPriceHT: devisItem.unitPriceHT ?? 0,
          tva: devisItem.tva,
          totalTtc: devisItem.totalTtc,
        })
      },
    )
    let dateEmission =  DateHelper.initiateTimeFromDate(formValue.dateEmission).getTime() ==
    DateHelper.initiateTimeFromDate(moment()).getTime()
      ? moment()
      : moment(formValue.dateEmission).add(1, 'days')
    
    
    this._devisServiceProxy.getByteDataDevisReport(
      this.referenceCount,
      dateEmission,
      formValue.echeancePaiement,
      formValue.messageIntroduction,
      formValue.piedDePage,
      this.devisOptionsFormGroup.get('remise').value,
      this.selectedDevisItem.statut,
      devisItems,
      formValue.client.id,
    ).subscribe(res => {
      var win = window.open();
      win.document.write('<iframe src="data:application/pdf;base64,' + res + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  
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
}
