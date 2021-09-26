import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { BehaviorSubject, Subject } from 'rxjs';
import {DevisItem} from '../../shared/models/DevisItem'
import {DialogStatus} from '../../shared/enums/DialogState.enum'
import { DialogModule } from 'primeng/dialog';

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
    this.emitNotificationSelectedDevisChanged(this.selectedDevisItem)

    this.devisList.forEach(
      (devis: DevisItem) =>{
        devis.contentItems = devis.contentItems.map(
          (item: any) => {
            let total_ht = item.pu * item.quantite;
            return {
               ...item, 
               total_ttc: total_ht+ (item.tva * total_ht/100),
               total_ht, 
            }
          },
        )

        devis.montant_ttc = devis.contentItems
          .map((item) => item.total_ttc)
          .reduce((accum, current) => accum + current)
        }
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
      date_emission: new Date('10/09/2021'),
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
          total_ht: 0,
          total_ttc: 0,
        },
        {
          description: 'Consultation2',
          date: new Date('01/01/2021'),
          quantite: 8,
          unite: 'Heures',
          pu: 100.0,
          tva: 20,
          total_ht: 0,
          total_ttc: 0,
        },
      ],
    },

    {
      reference: 'D00002',
      client: 'Karim',
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
          total_ht: 0,
          total_ttc: 0,
        },
      ],
    },

    {
      reference: 'D00003',
      client: 'Chorouk',
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
          total_ht: 0,
          total_ttc: 0,
        },
      ],
    },

    {
      reference: 'D00005',
      client: 'Ilyass',
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
          total_ht: 0,
          total_ttc: 0,
        },
        
      ],
    },
  ]

  statusItems = []

  displayDialog = false
  dialogState !:  DialogStatus

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

  dialogStatusEvent = new Subject<DialogStatus>()
  emitDialogStatus(dialogStatus: DialogStatus) {
    this.dialogStatusEvent.next(dialogStatus)
  }

  newDevis() {
    this.displayDialog = true
    this.emitDialogStatus(DialogStatus.New)
  }
  editDevis() {
    this.displayDialog = true
    this.dialogState = DialogStatus.Edit
    this.emitDialogStatus(DialogStatus.Edit)
  }

  duplicateDevis() {
    this.selectedDevisItem.reference = 'D00002'
    this.displayDialog = true
    this.emitDialogStatus(DialogStatus.Duplicate)
  }

  eventsSubject = new Subject<DevisItem>()

  emitEventToChild(deviItem: DevisItem) {
    this.eventsSubject.next(deviItem)
  }

  notifySelectedDevisChanged = new BehaviorSubject<DevisItem>(null)
  emitNotificationSelectedDevisChanged(deviItem: DevisItem) {
    this.notifySelectedDevisChanged.next(deviItem)
  }

  deleteDevis() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
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
    this.selectedDevisItem = devisItem
    this.emitNotificationSelectedDevisChanged(devisItem);
  }

  get getDateEcheance() {
    return new Date()
  }

 
}
