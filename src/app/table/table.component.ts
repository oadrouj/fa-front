import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterMatchMode, FilterService, LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subscription, Observable } from 'rxjs';

let test = 'purple';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`:host ::ng-deep #devisList .p-datatable .p-datatable-tbody>tr.p-highlight{ background: var(--highlight-color);}`],
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

 static highlightColor: string = "";
  @Input() highlightColorInput : string;
  @Input() cols: any
  @Input() tableData: any
  @Input() currency!: string
  @Input() styleClass!: string
  @Input() styleId!: string
  @Input() loadLazy!: (event: any) => void
  @Input() globalFilterFields!: string[]
  @Output() selectionChange = new EventEmitter<any>()
  @Input() rowDeletedEvent!: Observable<any>;
  @Input() filterEvent!: Observable<any>;
  @ViewChild('tbl') table: Table

  private eventsSubscription!: Subscription;
  selectedItem!: any
  defaultRowToBeSelected : any
  
  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--highlight-color: ${this.highlightColorInput};`
    );
  }
  constructor(
    private sanitizer: DomSanitizer
  ) {
   

   }

  ngOnInit(): void {
    
    this.defaultRowToBeSelected = {...this.tableData[0], rowId: 0}
  
    this.eventsSubscription = this.rowDeletedEvent.subscribe((res: any) =>  {
      if(res && res.id) {
        let index = this.tableData.findIndex((item: any) => item.id == res.id )
        this.defaultRowToBeSelected = {...this.tableData[index], rowId: 0};
        this.selectionChange.emit(res);
      
      }
    })

    this.eventsSubscription = this.filterEvent.subscribe((res: any) => {
      if(res.type == 'filterByInput') {
        if(this.isValidDate(res.value))
          this.table.filterGlobal(new Date(res.value), 'equals');
        else
          this.table.filterGlobal(res.value, 'contains');
      }
      else {
        for(let item in res.value ) {
          // if(res.value[item]) {
            if(res.value[item] instanceof Date){
              this.table.filter(res.value[item], item, 'equals');
              console.log(res.value[item], item)
            }
            else
              this.table.filter(res.value[item], item, 'contains');

            console.log(item, res.value[item])
          // }
        }
      }
    })
  }

  colMethod( rowData, field){
    if(field.includes('.'))
    {
      let array = field.split('.')
      return rowData[array[0]][array[1]]
    }
    else {
      return rowData[field]
    }
   
  }

  isValidDate(dateString: string){
    return (new Date(dateString) as any) != 'Invalid Date'
  }

  onRowSelect(event: any) {
    this.selectionChange.emit(event.data)
   
  }

  loadTableLazy(event: LazyLoadEvent) {
    
      console.log(event);
      this.tableData = [...this.tableData];
      
    }
}
