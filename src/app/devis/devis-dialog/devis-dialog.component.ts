import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { DevisContentItem } from '@shared/models/DevisContentItem';
import { DevisItem } from '@shared/models/DevisItem';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-devis-dialog',
  templateUrl: './devis-dialog.component.html',
  providers: [MessageService],
  styleUrls: ['./devis-dialog.component.css']
})

export class DevisDialogComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    
    this.formGroup = this.formBuilder.group({
      client: ['', Validators.required],
      date_emission: ['', Validators.required],
      echeance: ['30', Validators.required],
      introduction: ['', Validators.required],
      pied_page: ['', Validators.required],
      tableControl: this.formBuilder.array([this.initiateTableForm()]),
    })
    this.addRow();
    this.eventsSubscription = this.SelectDevisItemEvent.subscribe((devisItem: DevisItem) => {
      console.log('ggggg', devisItem)
      this.formGroup.setValue({
        client: devisItem.client,
        date_emission: devisItem.date_emission,
        echeance: devisItem.echeance,
        introduction: devisItem.introduction,
        pied_page: devisItem.pied_page,
        tableControl: devisItem.contentItems,
     })
    } )

    // if(this.devisItem != null) {
    //     this.formGroup.setValue({
    //       client: this.devisItem.client,
    //       date_emission: this.devisItem.date_emission,
    //       echeance: this.devisItem.echeance,
    //       introduction: this.devisItem.introduction,
    //       pied_page: this.devisItem.pied_page,
    //       tableControl: this.devisItem.contentItems,
    //    })
    //       console.log(this.formGroup.value)
    // }
    // else {
    //   console.log('Devis item is null')
    // }
  }

  @Input() visible = false
  @Input() devisItem!: DevisItem
  @Input() SelectDevisItemEvent = new Observable<DevisItem>()
  @Output() closeDialog = new EventEmitter()

  formGroup!: FormGroup
  tableControl!: FormArray
  private eventsSubscription!: Subscription;

  cols = [
    {
      header: 'DESCRIPTION',
      field: 'description',
      type: 'inputText',
      colspan: 3,
    },
    { header: 'DATE', field: 'date', type: 'calendar', colspan: 2 },
    { header: 'Qté', field: 'quantite', type: 'inputNumber' },
    {
      header: 'UNITE',
      field: 'unite',
      type: 'dropdown',
      options: ['Heures', 'Jours'],
    },
    { header: 'PU HT', field: 'pu', type: 'inputNumber' },
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

  loadLazy(event: LazyLoadEvent) {}

  newDevisContentItem: DevisContentItem = {
    description: 'aaa',
    date: new Date(),
    quantite: 1,
    unite: 'Heures',
    pu: 0,
    tva: 20,
    total_ttc: 0,
  }

  isFirstLigneToAdd = true

  initiateTableForm() {
    return this.formBuilder.group({
      description: ['', Validators.required],
      date: [new Date(), Validators.required],
      quantite: ['', Validators.required],
      unite: ['Heures', Validators.required],
      pu: ['', Validators.required],
      tva: ['20', Validators.required],
      total_ht: [''],
      total_ttc: ['']
    })
  }

  get getFormControls() {
    const control = this.formGroup.get('tableControl') as FormArray
    return control
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

  validateDevis(){
    if(this.formGroup.valid) {
      console.log(this.formGroup.value)
    }

    else { 
      this.errorService("Veillez remplir les chemps obligatoires")
    }
  }
}

