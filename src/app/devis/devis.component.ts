import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import {DevisItem} from '../../shared/models/DevisItem'

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  providers: [ConfirmationService, MessageService],
  styleUrls: ['./devis.component.css']
})

export class DevisComponent implements OnInit {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.selectedDevisItem = this.devisList[0]

    this.selectedDevisItem.contentItems = this.selectedDevisItem.contentItems.map(
      (item: any) => ({ ...item, total_ht: item.pu * item.quantite }),
    )

    this.devisList.forEach(
      (devis: DevisItem) =>
        (devis.montant_ttc = devis.contentItems
          .map((item) => item.total_ttc)
          .reduce((accum, current) => accum + current)),
    )
  }

  searchText = ''
  clientOptions = [{ name: 'Ali' }, { name: 'Ziko' }, { name: 'Dekkers' }]
  clientSuggestions: any
  selectedClient = ''

  cols = [
    {
      header: 'REFERENCE',
      field: 'reference',
      type: 'text',
    },
    {
      header: 'CLIENT',
      field: 'client',
      type: 'text',
    },
    {
      header: 'DATE D’EMISSION',
      field: 'date_emission',
      type: 'date',
    },
    {
      header: 'ECHEANCE',
      field: 'echeance',
      type: 'text',
      suffix: 'jours',
    },
    {
      header: 'MONTANT TTC',
      field: 'montant_ttc',
      type: 'currency',
    },
    {
      header: 'STATUT',
      field: 'statut',
      type: 'text',
    },
  ]

  Currency = 'MAD'

  DevisContentItemsCols = [
    { header: 'DESCRIPTION', field: 'description', type: 'text', colspan: 0 },
    { header: 'DATE', field: 'date', type: 'date', colspan: 0 },
    { header: 'QUANTITE', field: 'quantite', type: 'text' },
    { header: 'UNITE', field: 'unite', type: 'text' },
    { header: 'PU HT', field: 'pu', type: 'currency' },
    { header: 'TOTAL HT', field: 'total_ht', type: 'currency' },
    { header: 'TVA', field: 'tva', type: 'pourcentage' },
    { header: 'TOTAL TTC', field: 'total_ttc', type: 'currency', colspan: 0 },
  ]

  devisList = [
    {
      reference: 'D00004',
      client: 'Omar Attioui',
      date_emission: new Date('01/01/2021'),
      echeance: 15,
      statut: 'Brouillon',
      introduction: 'introduction here',
      pied_page: 'pied page here',
      contentItems: [
        {
          description: 'Consultation1',
          date: new Date('01/01/2021'),
          quantite: 8,
          unite: 'Heures',
          pu: 100.0,
          tva: 20,
          total_ttc: 1000.0,
        },
        {
          description: 'Consultation2',
          date: new Date('01/01/2021'),
          quantite: 8,
          unite: 'Heures',
          pu: 100.0,
          tva: 20,
          total_ttc: 960.0,
        },
      ],
    },

    {
      reference: 'D00002',
      client: 'Omar Attioui',
      date_emission: new Date('01/01/2021'),
      echeance: 15,
      statut: 'Brouillon',
      introduction: 'introduction here',
      pied_page: 'pied page here',
      contentItems: [
        {
          description: 'Consultation 2',
          date: new Date('01/01/2021'),
          quantite: 8,
          unite: 'Heures',
          pu: 100.0,
          tva: 20,
          total_ttc: 560.0,
        },
      ],
    },

    {
      reference: 'D00003',
      client: 'Omar tttt',
      date_emission: new Date('01/01/2021'),
      echeance: 15,
      statut: 'Brouillon',
      introduction: 'introduction here',
      pied_page: 'pied page here',
      contentItems: [
        {
          description: 'Consultation 2',
          date: new Date('01/01/2021'),
          quantite: 8,
          unite: 'Heures',
          pu: 100.0,
          tva: 20,
          total_ttc: 560.0,
        },
      ],
    },

    {
      reference: 'D00005',
      client: 'Omar tttt',
      date_emission: new Date('01/01/2021'),
      echeance: 15,
      statut: 'Brouillon',
      introduction: 'introduction here',
      pied_page: 'pied page here',
      contentItems: [
        {
          description: 'Consultation 2',
          date: new Date('01/01/2021'),
          quantite: 8,
          unite: 'Heures',
          pu: 100.0,
          tva: 20,
          total_ttc: 560.0,
        },
      ],
    },
  ]

  statusItems = []

  displayDialog = false

  autoCompleteText = ''
  suggestions = []

  dateEmission = new Date()
  echeancePayementOptions = [30, 60, 90]
  echeancePayementSelected = this.echeancePayementOptions[0] || ''

  selectedDevisItem!: DevisItem

  loadLazy(event: any) {}

  autoCompleteSearch(event: any) {}

  clientAutoCompleteSearch(event: any) {
    
  }

  editDevis() {
    this.displayDialog = true
  }

  duplicateDevis() {
    this.selectedDevisItem.reference = 'D00002'
    this.displayDialog = true
  }

  eventsSubject = new Subject<DevisItem>()

  emitEventToChild(deviItem: DevisItem) {
    this.eventsSubject.next(deviItem)
  }

  notifySelectedDevisChanged = new Subject<DevisItem>()
  emitNotificationSelectedDevisChanged(deviItem: DevisItem) {
    this.notifySelectedDevisChanged.next(deviItem)
  }

  deleteDevis() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log(this.selectedDevisItem)
        this.devisList = this.devisList.filter((devis) => {
          return devis.reference != this.selectedDevisItem.reference
        })
        this.emitEventToChild(this.devisList[0])

        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        })
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            })
            break
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            })
            break
        }
      },
    })
  }

  selectionChange(devisItem: DevisItem) {
    console.log('selection change work')
    this.selectedDevisItem = devisItem
    this.emitNotificationSelectedDevisChanged(devisItem);
  }
}
