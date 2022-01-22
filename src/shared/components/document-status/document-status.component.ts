import { Component, Input, OnInit } from '@angular/core';
import { EstimateInvoiceStatusStateService } from '@shared/services/estimate-invoice-status-state.service';
import { FormatService } from '@shared/services/format.service';

@Component({
  selector: 'app-document-status',
  templateUrl: './document-status.component.html',
  styleUrls: ['./document-status.component.css']
})
export class DocumentStatusComponent implements OnInit {

  constructor(
    private _estimateInvoiceStatusStateService: EstimateInvoiceStatusStateService,
  ) { }

  @Input() items: Array<any>
  @Input() label: string
  ngOnInit() {
  }

  
}

