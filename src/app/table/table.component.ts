import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DevisItem } from '@shared/models/DevisItem';
import { FilterMatchMode, FilterService } from 'primeng/api';
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

    this.defaultRowToBeSelected = {...this.tableData[0], rowId: 0}
    this.eventsSubscription = this.events.subscribe((res: any) =>  {
      let index = this.tableData.findIndex((item: DevisItem) => item.reference == res.reference )
      this.defaultRowToBeSelected = {...this.tableData[index], rowId: 0};
      this.selectionChange.emit(res)
     
    })

    this.eventsSubscription = this.filterEvent.subscribe((res: any) => {

      if(res.type == 'filterByInput') {
        console.log(new Date(res.value) )
        if(new Date(res.value) instanceof Date)
          this.table.filterGlobal(res.value, 'contains');
        else
        this.table.filterGlobal(res.value, 'equals');
        
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

  onRowSelect(event: any) {
    this.selectionChange.emit(event.data)
  }


}
