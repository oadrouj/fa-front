import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum';
import { DevisItem } from '@shared/models/DevisItem';
import { DevisServiceProxy } from '@shared/service-proxies/service-proxies';
import { ReferenceService } from '@shared/services/reference.service';
import { FilterMatchMode, FilterService, LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subscription, Observable, zip, of } from 'rxjs';

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
  @Input() currency!: string
  @Input() styleClass!: string
  @Input() styleId!: string
  @Input() loadLazy!: (event: any) => void
  @Input() globalFilterFields!: string[]
  @Output() selectionChange = new EventEmitter<any>()
  @Input() rowDeletedEvent!: Observable<any>;
  @Input() filterEvent!: Observable<any>;
  @Input() SelectDevisItemEvent !: Observable<DevisItem>
  @Input() getListDevisApi$: (event, data) => Observable<any>
  @ViewChild('tbl') table: Table

  tableData: any
  eventsSubscription!: Subscription;
  selectedItem!: any
  defaultRowToBeSelected : any
  selectedDevis: any;
  montantTotalAllDevis = 0;
  
  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--highlight-color: ${this.highlightColorInput};`
    );
  }

  constructor(
    private sanitizer: DomSanitizer,
    public _referenceService: ReferenceService,
    private _devisServiceProxy: DevisServiceProxy
  ) {}

  ngOnInit(): void {
    

    this.eventsSubscription = this.SelectDevisItemEvent.subscribe(
      (devisItem: any) => {
        this.defaultRowToBeSelected = {
          ...devisItem,
          rowId: 0,
          
        }
      }
    ) 

    this.eventsSubscription = this.rowDeletedEvent.subscribe((res: any) =>  {
      console.log(res)
      if(res && res.id) {
        this.selectionChange.emit({type: 'delete', result: res});
      
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
            if(res.value[item] instanceof Date){
              this.table.filter(res.value[item], item, 'equals');
              console.log(res.value[item], item)
            }
            else
              this.table.filter(res.value[item], item, 'contains');
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
    console.log(event.data)
    this.selectionChange.emit({type: 'selectionChanged', result: event.data})
  }
  
  loadTableLazy(event: LazyLoadEvent) {
      console.log(event);
      this.getListDevisApi$(event, this.tableData)
        .subscribe((res) => {
        this.tableData = Array.from({length: res.length})
        this.tableData.splice(event.first, event.rows, ...res.items);
        this.tableData = [...this.tableData]
        this.selectedDevis = this.tableData[0]
        this.montantTotalAllDevis = res.montantTotalAllDevis
        console.log(res.montantTotalAllDevis)
        this.selectionChange.emit({type: 'selectionChanged', result: res.items[0]})
      }) 
     
    }
    
}
 