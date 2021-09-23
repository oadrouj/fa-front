import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DevisItem } from '@shared/models/DevisItem';
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
  @Output() selectionChange = new EventEmitter<any>()

  private eventsSubscription!: Subscription;
  @Input() events!: Observable<DevisItem>;

  selectedItem!: DevisItem
  defaultRowToBeSelected : any
  constructor() { }

  ngOnInit(): void {
    this.defaultRowToBeSelected = {...this.tableData[0], rowId: 0}
    this.eventsSubscription = this.events.subscribe((res: any) =>  {
      let index = this.tableData.findIndex((item: DevisItem) => item.reference == res.reference )
      this.defaultRowToBeSelected = {...this.tableData[index], rowId: 0};
      this.selectionChange.emit(res)
     
    })

  }

  onRowSelect(event: any) {
    this.selectionChange.emit(event.data)
  }

  

}
