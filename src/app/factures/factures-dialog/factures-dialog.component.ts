import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DevisContentItem } from '@shared/models/DevisContentItem';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-factures-dialog',
  templateUrl: './factures-dialog.component.html',
  styleUrls: ['./factures-dialog.component.css']
})
export class FacturesDialogComponent implements OnInit {

  @Input() visible = false;
  @Output() closeDialog = new EventEmitter();
  
  newDevisContentItemsCols = [
    {header: 'DESCRIPTION', field: 'description', type: 'inputText', colspan: 3}, 
    {header:'DATE', field: 'date', type: 'calendar', colspan: 2}, 
    {header:'QUANTITE', field: 'quantite', type: 'inputNumber'}, 
    {header:'UNITE', field: 'unite', type: 'dropdown'},
    {header:'PU HT', field: 'pu', type: 'inputNumber'},
    {header:'TOTAL HT', field: 'total_ht', type: 'inputNumber'},
    {header:'TVA', field: 'tva', type: 'dropdown'},
    {header:'TOTAL TTC', field: 'total_ttc', type: 'inputNumber', colspan: 2, suffix: ' MAD'},
    {header:'', field: 'delete', type: 'button', label: '', icon: 'minus'}

  ]

  DevisContentItemsList: DevisContentItem[] = [
    {
      description: 'Consultation',
      date: new Date('01/01/2021'),
      quantite: 8,
      unite: 'Heures',
      pu: 100.00,
      tva: 20,
      total_ttc: 967680.00
    },
 
    {
      description: 'Consultation',
      date: new Date('01/01/2021'),
      quantite: 8,
      unite: 'Heures',
      pu: 100.00,
      tva: 20,
      total_ttc: 960.00
    },
 
    {
      description: 'Consultation',
      date: new Date('01/01/2021'),
      quantite: 8,
      unite: 'Heures',
      pu: 100.00,
      tva: 20,
      total_ttc: 960.00
    },
 
  ]

  suggestions = []

  autoCompleteText = ''

  dateEmission = new Date()
  echeancePayementOptions = [30, 60, 90]
  echeancePayementSelected = this.echeancePayementOptions[0] || ''

  constructor() { }

  
  ngOnInit(): void {
  }

  loadLazy(event: LazyLoadEvent) {

  }


  addLigneToNewDevisTable() {
    let newDevisContentItem: DevisContentItem = {
        description: '',
        date: new Date(),
        quantite: 0,
        unite: 'Heures',
        pu: 0,
        tva: 20,
        total_ttc: 0
    };
    this.DevisContentItemsList = [...this.DevisContentItemsList, newDevisContentItem]
    console.log(this.DevisContentItemsList);
  }

  autoCompleteSearch(event: any) {

  }


}
