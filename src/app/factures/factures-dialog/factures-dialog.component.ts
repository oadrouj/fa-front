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
import { ReferenceService } from '@shared/services/reference.service'
import { LazyLoadEvent, MessageService } from 'primeng/api'
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs'
import { ToastService } from '@shared/services/toast.service'
import {
  ClientForAutoCompleteDto,
  ClientForAutoCompleteDtoListResultDto,
  ClientServiceProxy,
  CreateFactureInput,
  DevisDto,
  DevisItemDto,
  DevisServiceProxy,
  UpdateFactureInput,
  FactureStatutEnum,
  FactureServiceProxy,
  FactureItemDto,
  DevisStatutEnum,
  ReportGeneratorServiceProxy,
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
@Component({
  selector: 'app-factures-dialog',
  templateUrl: './factures-dialog.component.html',
  styleUrls: ['./factures-dialog.component.css'],
  providers: [ToastService],
})
export class FacturesDialogComponent
  implements OnInit, AfterViewInit, OnDestroy {
  remiseValue: number
  constructor(
    private formBuilder: FormBuilder,
    private _referenceService: ReferenceService,
    private toastService: ToastService,
    private _factureServiceProxy: FactureServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    public globalEventsService: GlobalEventsService,
    private _router: Router,
    private _devisServiceProxy: DevisServiceProxy,
  ) {}
  test = false
  ngOnInit() {
    this.initiateFormGroup()
    this.devisOptionsFormGroup = this.initiateDevisOptionsGroup()

    this.eventsSubscription = this.SelectDevisItemEvent.subscribe(
      (devisItem: any) => {
        this.selectedDevisItem = {
          ...devisItem,
          client: devisItem.client,
        }
        this.clearTableControl()
        // dateEmission: this.selectedDevisItem.dateEmission.toDate()}
      },
    )

    this.dialogStatusEvent.subscribe(
      ({ statut, dialogComponent, isConvertedDevis }) => {
        document.body.style.overflow = 'hidden'
        this.manuelReference = false
        if (dialogComponent == 'facture') {
          this.initiateSummaryValues()
          this.visible && (document.body.style.overflow = 'hidden')
          switch (statut) {
            case DialogStatus.New:
              if (isConvertedDevis) {
                this.getNewReference()
                this.initiateFormGroupWithTableControls()
                this.dialogTitle = 'Nouveau'
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
              } else {
                this.getNewReference()
                this.initiateFormGroupForNewDevis()
                this.dialogTitle = 'Nouveau'
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
              // this.referenceCount = this.selectedDevisItem.reference

              this.reference = this._referenceService.formatReferenceNumber(
                this.selectedDevisItem.reference,
                this.selectedDevisItem.referencePrefix
                  ? this.selectedDevisItem.referencePrefix
                  : ReferencePrefix.Facture,
              )
              this.setFormGroup()
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

              this.calculateSummaryTotalHTAndTTC()
              break

            default:
              break
          }
        }
      },
    )
  }

  ngAfterViewInit() {}
  ngOnDestroy(): void {}
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
      // inputEvent: (rowIndex, value) => this.calculateRowTotalHTAndTTC(rowIndex, value),
    },
    {
      header: 'UNITE',
      field: 'unit',
      type: 'dropdown',
      options: ['h', 'j'],
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
      messageIntroduction: ['', Validators.required],
      piedDePage: ['', Validators.required],
      factureItems: this.formBuilder.array([]),
    })
  }

  initiateFormGroupWithTableControls() {
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      dateEmission: [new Date(), Validators.required],
      echeancePaiement: ['30', Validators.required],
      messageIntroduction: ['', Validators.required],
      piedDePage: ['', Validators.required],
      factureItems: this.formBuilder.array([]),
    })
  }

  initiateFormGroupForNewDevis() {
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      dateEmission: [new Date(), Validators.required],
      echeancePaiement: ['30', Validators.required],
      messageIntroduction: ['', Validators.required],
      piedDePage: ['', Validators.required],
      factureItems: this.formBuilder.array([this.initiateTableForm()]),
    })
  }

  setFormGroup() {
    let factureItems = this.selectedDevisItem.factureItems.map((item: any) => {
      this.getFromArrayControl.push(this.initiateTableForm())
      return {
        ...item,
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
      factureItems: factureItems,
    })
  }

  initiateTableForm() {
    return this.formBuilder.group({
      description: ['', Validators.required],
      date: [new Date(), Validators.required],
      quantity: [1, Validators.required],
      unit: ['h', Validators.required],
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
    ;(this.formGroup.get('factureItems') as FormArray).controls = []
  }

  //#endregion

  closeDialog() {
    this.closeDialogEvent.emit()
    this.clearTableControl()
    this.disableValidationClass()
    document.body.style.overflow = 'auto'
    this.devisOptionsFormGroup.get('remiseBtnIsChecked').setValue(false)
  }

  getNewReference() {
    this._factureServiceProxy.getLastReference().subscribe((res: number) => {
      this.referenceCount = res + 1
      this.reference = this.factureFormatReferenceNumber(this.referenceCount)
    })
  }

  changeReference() {
    this.manuelReference = true
    this.formGroup.addControl(
      'reference',
      new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][0-9]{5}'),
      ]),
    )

    // if (this.dialogTitle == 'Modifier' && !this.referenceCount) {
    //   this.getNewReference()
    // }
    // this.referenceCount++
    // this.reference = this.factureFormatReferenceNumber(this.referenceCount)
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

  //#region Crud operations
  createApiCall(devisStatus: FactureStatutEnum) {
    let formValue = this.formGroup.value

    let createDevisInput = new CreateFactureInput({
      reference: this.manuelReference
        ? +this.formGroup.get('reference').value.substring(1)
        : this.referenceCount,
      referencePrefix: this.manuelReference
        ? this.formGroup.get('reference').value[0]
        : 'F',
      dateEmission: this.getExactDate(formValue.dateEmission, new Date()),
      echeancePaiement: formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value ?? 0,
      statut: devisStatus,
      factureItems: formValue.factureItems.map(
        (devisItem: FactureContentItem) => {
          return new FactureItemDto({
            description: devisItem.description,
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
                },
              })
            })
          this.closeDialogEvent.emit()
          this.disableValidationClass()
        }
      })
    this.toastService.info({
      summary: 'Opértion réussie',
      detail: 'Vous avez ajouter cette facture en brouillon',
    })
  }

  updateApiCall(devisStatus: FactureStatutEnum) {
    let formValue = this.formGroup.value
    let updateDevisInput = new UpdateFactureInput({
      id: this.devisItem.id,
      reference: this.manuelReference
        ? +this.formGroup.get('reference').value.substring(1)
        : this.selectedDevisItem.reference,
      referencePrefix: this.manuelReference
        ? this.formGroup.get('reference').value[0]
        : this.selectedDevisItem.referencePrefix,
      dateEmission:
        this.selectedDevisItem.dateEmission != formValue.dateEmission
          ? moment(formValue.dateEmission).add(1, 'days')
          : moment(formValue.dateEmission),

      echeancePaiement: +formValue.echeancePaiement,
      messageIntroduction: formValue.messageIntroduction,
      piedDePage: formValue.piedDePage,
      remise: this.devisOptionsFormGroup.get('remise').value,
      statut: devisStatus,
      factureItems: formValue.factureItems.map(
        (devisItem: FactureContentItem) => {
          return new FactureItemDto({
            description: devisItem.description,
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
    })
    this._factureServiceProxy
      .updateFacture(updateDevisInput)
      .subscribe((res) => {
        if (res) {
          console.log(
            'test',
            this.selectedDevisItem.client.id,
            formValue.client.id,
          )
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
              this.closeDialogEvent.emit()
              this.disableValidationClass()
            })
        }
      })

    this.toastService.info({
      summary: 'Opértion réussie',
      detail: 'Vous avez modifier cette facture en brouillon',
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
    // this.formGroup.setValidators(() => { return this.formGroup.get('client') :  Validators.required})
    // this.formGroup.clearValidators()
    // this.formGroup.updateValueAndValidity();
    // this.formGroup.get('client').validator = Validators.required
    // this.frm.nativeElement.classList.add('submitted')

    if (this.formGroup.get('client').valid) {
      let reference, referencePrefix
      if (this.dialogTitle == 'Nouveau' || this.dialogTitle == 'Dupliquer') {
        reference = this.manuelReference
          ? +this.formGroup.get('reference').value.substring(1)
          : this.referenceCount
        referencePrefix = this.manuelReference
          ? this.formGroup.get('reference').value[0]
          : 'F'
      } else {
        reference = this.manuelReference
          ? +this.formGroup.get('reference').value.substring(1)
          : this.selectedDevisItem.reference
        referencePrefix = this.manuelReference
          ? this.formGroup.get('reference').value[0]
          : this.selectedDevisItem.referencePrefix
      }

      this._factureServiceProxy
        .checkIfReferenceIsExist(referencePrefix, reference)
        .subscribe((res) => {
          if (!res || this.dialogTitle == 'Modifier' &&
          (reference == this.selectedDevisItem.reference &&
          referencePrefix == this.selectedDevisItem.referencePrefix)
          ) {
            if (this.devisItem && this.devisItem.isConverted) {
              this.createApiCall(FactureStatutEnum.Cree)
              this._router.navigate(['/app/Factures'])
              this.updateConvertedDevisStatus()
              document.body.style.overflow = 'auto'
              return
            }

            if (
              this.dialogTitle == 'Nouveau' ||
              this.dialogTitle == 'Dupliquer'
            ) {
              this.createApiCall(FactureStatutEnum.Cree)
              return
            }

            if (this.dialogTitle == 'Modifier') {
              this.updateApiCall(FactureStatutEnum.Cree)
            }
          } else {
            this.toastService.error({
              detail: 'Cette référence est déjà existe',
            })
          }
        })
    } else {
      this.toastService.error({
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
      messageIntroduction: "Message d'introduction",
      piedDePage: 'Pied de page',
      factureItems: 'Description',
    }

    for (let control in this.formGroup.controls) {
      if (!this.formGroup.controls[control].valid)
        controlsNames = controlsNames.concat(conrtolsObj[control])
    }

    if(this.formGroup.valid) {
      let reference, referencePrefix
      if (this.dialogTitle == 'Nouveau' || this.dialogTitle == 'Dupliquer') {
        reference = this.manuelReference
          ? +this.formGroup.get('reference').value.substring(1)
          : this.referenceCount
        referencePrefix = this.manuelReference
          ? this.formGroup.get('reference').value[0]
          : 'F'
      } else {
        reference = this.manuelReference
          ? +this.formGroup.get('reference').value.substring(1)
          : this.selectedDevisItem.reference
        referencePrefix = this.manuelReference
          ? this.formGroup.get('reference').value[0]
          : this.selectedDevisItem.referencePrefix
      }
  
      this._factureServiceProxy
        .checkIfReferenceIsExist(referencePrefix, reference)
        .subscribe((res) => {
          if (!res || this.dialogTitle == 'Modifier' &&
            (reference == this.selectedDevisItem.reference &&
            referencePrefix == this.selectedDevisItem.referencePrefix)
        ) {
              if (isDevisStatusUpdate) {
                returnValue = this.validateStatusApi()
              } else {
                if (this.devisItem && this.devisItem.isConverted) {
                  this.createApiCall(FactureStatutEnum.Valide)
                  this._router.navigate(['/app/Factures'])
                  this.updateConvertedDevisStatus()
                  document.body.style.overflow = 'auto'
                  return
                }
  
                if (
                  this.dialogTitle == 'Nouveau' ||
                  this.dialogTitle == 'Dupliquer'
                ) {
                  this.createApiCall(FactureStatutEnum.Valide)
                  return
                }
  
                if (this.dialogTitle == 'Modifier') {
                  this.updateApiCall(FactureStatutEnum.Valide)
                }
            } 
          } else {
            this.toastService.error({
              detail: 'Cette référence est déjà existe',
            })
          }
        })
    }
    else {
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

  preview() {
    let formValue = this.formGroup.value
    let factureItems = formValue.factureItems.map(
      (devisItem: FactureContentItem) => {
        return new FactureItemDto({
          description: devisItem.description,
          date: this.getExactDate(devisItem.date, new Date()),
          quantity: devisItem.quantity ?? 0,
          unit: devisItem.unit,
          unitPriceHT: devisItem.unitPriceHT ?? 0,
          tva: devisItem.tva,
          totalTtc: devisItem.totalTtc,
        })
      },
    )
    let dateEmission = this.getExactDate(formValue.dateEmission, new Date())

    this._factureServiceProxy
      .getByteDataFactureReport(
        this.referenceCount,
        dateEmission,
        formValue.echeancePaiement,
        formValue.messageIntroduction,
        formValue.piedDePage,
        this.devisOptionsFormGroup.get('remise').value,
        this.selectedDevisItem.statut,
        factureItems,
        formValue.client.id,
      )
      .subscribe((res) => {
        // window.open("data:application/pdf;base64," + res);
        var win = window.open()
        win.document.write(
          '<iframe src="data:application/pdf;base64,' +
            res +
            '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>',
        )
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
}
