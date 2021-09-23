import { Component, OnInit } from '@angular/core';
import { DevisContentItem } from '@shared/models/DevisContentItem';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {

  searchText = ''
  clientOptions = [
    {name: 'Ali'},
    {name: 'Ziko'},
    {name: 'Dekkers'},
  ]
  selectedClient = ''

  cols =  [
    {header: 'REFERENCE', field: 'reference',}, 
    {header:'CLIENT', field: 'client',}, 
    {header:'DATE D’EMISSION', field: 'date_emission',}, 
    {header:'ECHEANCE', field: 'echeance',},
    {header:'MONTANT TTC', field: 'montant_ttc',},
    {header:'STATUT', field: 'statut',}
  
  ]

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

  DevisContentItemsCols = [
    {header: 'DESCRIPTION', field: 'description', type: 'inputText', colspan: 2}, 
    {header:'DATE', field: 'date', type: 'calendar', colspan: 0}, 
    {header:'QUANTITE', field: 'quantite', type: 'inputNumber'}, 
    {header:'UNITE', field: 'unite', type: 'dropdown'},
    {header:'PU HT', field: 'pu', type: 'inputNumber'},
    {header:'TOTAL HT', field: 'total_ht', type: 'inputNumber'},
    {header:'TVA', field: 'tva', type: 'dropdown'},
    {header:'TOTAL TTC', field: 'total_ttc', type: 'inputNumber', colspan: 0, suffix: ' MAD'},
  ]

  devisList = [
      {
        reference: 'D00001',
        client: 'Omar Attioui',
        date_emission: '01/01/2021',
        echeance: '15 jours',
        montant_ttc: '720,00 MAD',
        statut: 'Brouillon'
      },
      {
        reference: 'D00001',
        client: 'Omar Attioui',
        date_emission: '01/01/2021',
        echeance: '15 jours',
        montant_ttc: '720,00 MAD',
        statut: 'Brouillon'
      },
      {
        reference: 'D00001',
        client: 'Omar Attioui',
        date_emission: '01/01/2021',
        echeance: '15 jours',
        montant_ttc: '720,00 MAD',
        statut: 'Brouillon'
      },
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

  statusItems = []

  displayDialog = true;

  autoCompleteText = ''
  suggestions = []

  dateEmission = new Date()
  echeancePayementOptions = [30, 60, 90]
  echeancePayementSelected = this.echeancePayementOptions[0] || ''

  
  constructor() { }

  ngOnInit() {
  }

  loadLazy(event: any) {

  }

  autoCompleteSearch(event: any) {

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

  
}

