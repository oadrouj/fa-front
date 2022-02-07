import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import {
  CatalogueServiceProxy,
  ClientServiceProxy,
  DevisServiceProxy,
  FactureServiceProxy,
} from '@shared/service-proxies/service-proxies'
import { FormatService } from '@shared/services/format.service'
import { FilterMatchMode, FilterService, LazyLoadEvent } from 'primeng/api'
import { Table } from 'primeng/table'
import { Observable } from 'rxjs'
import { LazyTableService } from '@shared/services/lazy-table.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
    `
      :host
        ::ng-deep
        #devisList
        .p-datatable
        .p-datatable-tbody
        > tr.p-highlight {
        background: var(--highlight-color);
      }
    `,
  ],
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  static highlightColor: string = ''
  @Input() highlightColorInput: string
  @Input() cols: any
  @Input() currency!: string
  @Input() styleClass!: string
  @Input() styleId!: string
  @Input() loadLazy!: (event: any) => void
  @Input() globalFilterFields!: string[]
  @Input() rowDeletedEvent!: Observable<any>
  @Input() filterEvent!: Observable<any>
  @Input() getListApi$: (event) => Observable<any>
  @Input() statusItems = []
  @ViewChild('tbl') table: Table

  tableData = []
  defaultRowToBeSelected: any
  montantTotal = 0
  totalRecords: any
  rows = 7
  first = 0

  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--highlight-color: ${this.highlightColorInput};`,
    )
  }

  constructor(
    private sanitizer: DomSanitizer,
    public _formatService: FormatService,
    private _devisServiceProxy: DevisServiceProxy,
    private _factureServiceProxy: FactureServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    private _catalogueServiceProxy: CatalogueServiceProxy,
    private _lazyTableService: LazyTableService,
  ) {}

  ngOnInit(): void {

    this._lazyTableService.dataOperation$.subscribe(res => {
      switch (res.action) {
        case 'add':
          this.addItem(res.payload)
          break;
      
        case 'update':
          this.updateItem(res.payload)
        break;

        case 'remove':
          this.removeItem(res.payload)
        break;
      }
    })

    this.filterEvent.subscribe((res: any) => {
      if (res.type == 'filterByInput') {
        this.table.filterGlobal(res.value, 'contains')
      } else {
        for (let item in res.value) {
          this.table.filter(res.value[item], item, 'contains')
        }
      }
    })
  }

  isValidDate(dateString: string) {
    return (new Date(dateString) as any) != 'Invalid Date'
  }

  colMethod(rowData, field) {
    if (field.includes('.')) {
      let array = field.split('.')
      return rowData[array[0]][array[1]]
    } else {
      return rowData[field]
    }
  }

  onRowSelect(event: any) {
    this._lazyTableService.emitRowSelected = event.data
  }

  onRowUnselect() {
    this._lazyTableService.emitRowSelected = null
  }

  loadTableLazy(event?: LazyLoadEvent) {
    this.getListApi$(event).subscribe((res) => {
      // this.tableData = Array.from({length: res.length})
      // this.tableData.splice(event.first, event.rows, ...res.items);
      // if(res.items.length){
        this.tableData = [...res.items]
        this.totalRecords = res.length
        this.montantTotal= res.montantTotalAllDevis
        this.setSelectedRow(res.items[0].id)
      // }
   
    })
  }

  trackByFunction = (index, item) => {
    return item.id
  }

  getStatusItems(status){
    return this.statusItems.filter(item => item.actualStatus == status)
  }

  addItem(item: any){
    this.loadTableLazy({
      first: this.first,
      rows: this.rows,
      sortField: '',
      sortOrder: 1,
    })
  }

  updateItem(item){
    let index = this.tableData.findIndex((element) => element.id == item.id)
    this.tableData[index] = item
    this.tableData = [...this.tableData]
    this.setSelectedRow(item.id)

  }

  removeItem(id: number){
    let firstAftetDelete = (this.tableData.length == 1 && this.first - this.rows >= 0) ? this.first - this.rows : this.first
    this.loadTableLazy({
      first: firstAftetDelete,
      rows: this.rows,
      sortField: '',
      sortOrder: 1,
    })
  }

  setSelectedRow(id: number){
    if(id){
      let item = this.tableData.find(i => i.id == id)
      this.defaultRowToBeSelected = { ...item, rowId: 0 }
      this._lazyTableService.emitRowSelected = item
    }
    else
      this._lazyTableService.emitRowSelected = null

  }

  getSumOfField(field){
    return this.tableData.map(item => item[field]).reduce((accum, current) => accum + current)
  }
}
