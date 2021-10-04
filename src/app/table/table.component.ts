import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DevisItem } from '@shared/models/DevisItem';
import { FilterMatchMode, FilterService, LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() cols: any
  @Input() tableData: any
  @Input() currency!: string
  @Input() styleClass!: string
  @Input() styleId!: string
  @Input() loadLazy!: (event: any) => void
  @Input() actionsButtons! : [{label?: string, icon: string}]
  @Input() globalFilterFields!: string[]
  @Output() selectionChange = new EventEmitter<any>()
  @Input() events!: Observable<DevisItem>;
  @Input() filterEvent!: Observable<any>;
  @ViewChild('tbl') table: Table

  private eventsSubscription!: Subscription;
  selectedItem!: DevisItem
  defaultRowToBeSelected : any
  constructor(
  ) { }

  ngOnInit(): void {
  
    this.tableData = Array.from({length: 1000}).map(() => this.tableData[0])
    this.tableData.push(
      {
        reference: 'D00002',
        client: 'Karim',
        date_emission: new Date('01/10/1993'),
        echeance: 15,
        statut: 'Brouillon',
        introduction: 'introduction here',
        pied_page: 'pied page here',
        remise: 0,
        montant_ttc: 0,
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
    )
    this.defaultRowToBeSelected = {...this.tableData[0], rowId: 0}
    this.eventsSubscription = this.events.subscribe((res: any) =>  {
      let index = this.tableData.findIndex((item: DevisItem) => item.reference == res.reference )
      this.defaultRowToBeSelected = {...this.tableData[index], rowId: 0};
      this.selectionChange.emit(res)
     
    })

    this.eventsSubscription = this.filterEvent.subscribe((res: any) => {
      console.log('hello')
      if(res.type == 'filterByInput') {
        
        if(this.isValidDate(res.value))
          this.table.filterGlobal(new Date(res.value), 'equals');

        else
          this.table.filterGlobal(res.value, 'contains');
        
      }
      else {
        for(let item in res.value ) {
          if(res.value[item] != '') {
            if(res.value[item] instanceof Date){
              this.table.filter(res.value[item], item, 'equals');
              console.log(res.value[item], item)
            }
            else
              this.table.filter(res.value[item], item, 'contains');

            console.log(item, res.value[item])
          }
        }
      }
    })
  }

  isValidDate(dateString: string){
    return (new Date(dateString) as any) != 'Invalid Date'
  }
  onRowSelect(event: any) {
    this.selectionChange.emit(event.data)
  }

  loadTableLazy(event: LazyLoadEvent) {
    
    setTimeout(() => {
      console.log(event);
      
      //load data of required page
      let loadedData = this.tableData.slice(event.first, (event.first! + event.rows!));
      //populate page of virtual cars
      // Array.prototype.splice.apply(this.virtualCars, [event.first!, event.rows!, ...loadedCars]);
     
      this.tableData.splice(event.first!, event.rows!, ...loadedData)
      
      //trigger change detection
      this.tableData = [...this.tableData];
  }, Math.random() * 1000 + 250);
  }


}
