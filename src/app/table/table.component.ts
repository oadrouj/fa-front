import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum';
import { DevisItem } from '@shared/models/DevisItem';
import { DevisServiceProxy } from '@shared/service-proxies/service-proxies';
import { ReferenceService } from '@shared/services/reference.service';
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
  @Input() SelectDevisItemEvent !: Observable<DevisItem>
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
    private sanitizer: DomSanitizer,
    private _referenceService: ReferenceService,
    private _devisServiceProxy: DevisServiceProxy,
  ) {}

  ngOnInit(): void {
    
    
    // this._devisServiceProxy
    // .getAllDevis(0, 100, '', '', '', null)
    // .subscribe((res) => {
    //   this.tableData = [...res.items]
    //   this.tableData.forEach((devis: any) => {
    //     devis.devisItems = devis.devisItems.map((item: any) => {
    //       let total_ht = item.unitPriceHT * item.quantity
    //       return {
    //         ...item,
    //         totalTtc: total_ht + (item.tva * total_ht) / 100,
    //       }
    //     })
    //     devis.montantTtc = devis.devisItems.map((item) => item.totalTtc)
    //         .reduce((accum, current) => accum + current) - devis.remise
        
    //     // this.montantTTCAllDevis += devis.montantTtc
    //   })
      
    //   this.tableData = this.tableData.map((item) => ({
    //     ...item,
    //     reference: this._referenceService.formatReferenceNumber(ReferencePrefix.Devis, item.reference),
    //   }))

    //   // this.calculateSummaryTotalHTAndTVA()
    //   // this.emitNotificationSelectedDevisChanged({
    //   //   ...this.devisList[0],
    //   //   reference: this.devisList[0].reference
    //   // })
    // })
    this.tableData = Array.from({length: 1000})

    this.eventsSubscription = this.SelectDevisItemEvent.subscribe(
      (devisItem: any) => {
        this.defaultRowToBeSelected = {
          ...devisItem,
          reference: this._referenceService.formatReferenceNumber(ReferencePrefix.Devis, devisItem.reference),
          rowId: 0
        }
        console.log('selected: ',  this.defaultRowToBeSelected)
      }
    ) 

    this.eventsSubscription = this.rowDeletedEvent.subscribe((res: any) =>  {
      if(res && res.id) {
        let index = this.tableData.findIndex((item: any) => item.id == res.id )
        this.defaultRowToBeSelected = {...this.tableData[index], rowId: 0};
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
    this.selectionChange.emit({type: 'selectionChanged', result: event.data.id})
   
  }

  loadTableLazy(event: LazyLoadEvent) {
      console.log(event);
      // this.tableData && (this.tableData = [...this.tableData]);

      this._devisServiceProxy
      .getAllDevis(event.first, event.rows, '', '', '', null)
      .subscribe((res) => {
        Array.prototype.splice(this.tableData,event.first, event.rows, ...res.items);
        this.tableData = [...res.items]
        this.tableData = [...this.tableData]
        this.tableData.forEach((devis: any) => {
          devis.devisItems = devis.devisItems.map((item: any) => {
            let total_ht = item.unitPriceHT * item.quantity
            return {
              ...item,
              totalTtc: total_ht + (item.tva * total_ht) / 100,
            }
          })
          devis.montantTtc = devis.devisItems.map((item) => item.totalTtc)
              .reduce((accum, current) => accum + current) - devis.remise
          
          // this.montantTTCAllDevis += devis.montantTtc
        })
        
        this.tableData = this.tableData.map((item) => ({
          ...item,
          reference: this._referenceService.formatReferenceNumber(ReferencePrefix.Devis, item.reference),
        }))

        // this.calculateSummaryTotalHTAndTVA()
        // this.emitNotificationSelectedDevisChanged({
        //   ...this.devisList[0],
        //   reference: this.devisList[0].reference
        // })
      })
      
    }
}
