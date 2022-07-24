import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EstimateInvoiceStatusStateService } from '@shared/services/estimate-invoice-status-state.service';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-document-action',
  templateUrl: './document-action.component.html',
  styleUrls: ['./document-action.component.css']
})
export class DocumentActionComponent implements OnInit {
  constructor(
    private _estimateInvoiceStatusStateService: EstimateInvoiceStatusStateService,
  ) { }

  @Input() items: Array<any>
  @Input() label: string
  @Input() disabled: boolean
  @Input() rowId: number
  @Output() clickedEvent = new EventEmitter()
  @ViewChild('menu') menu: Menu
  itemsAdapter: MenuItem[]=[];

  ngOnInit() {
   this.items.forEach(value => {
    this.itemsAdapter.push({
      'label': value.label,
      'icon':value.icon,
      'command': value.command
    })
   })
   console.log(this.itemsAdapter) 
  }

  toggleMenu(event){
    this.menu.toggle(event)
    this.clickedEvent.emit(true)
  }

}
