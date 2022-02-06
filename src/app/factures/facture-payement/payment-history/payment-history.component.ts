import { Component, Input, OnInit } from '@angular/core';
import { FactureServiceProxy } from '@shared/service-proxies/service-proxies';
import { FormatService } from '@shared/services/format.service';
import * as moment from 'moment';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {
  
  constructor(
    private _factureServiceProxy: FactureServiceProxy,
    private _formatService: FormatService,
  ) { }


  @Input() currency = 'MAD'
  @Input() factureId: number;
  paymentHistoryItems: any
  totalRecords

  ngOnInit() { 

  }

  loadPaymentHistoryItemsLazy(event){
    !event.first && (event.fisrt = 0)
    !event.rows && (event.rows = 4)
    this._factureServiceProxy.getByFactureIdFactureInfosPaiement(this.factureId, event.first, event.rows).subscribe(res => {
      this.paymentHistoryItems = [...res.items]
      this.totalRecords = res.totalEntityItems

    })
  }

  formatPaymentMethod(paymentMethod){
    return this._formatService.formatPaymentMethod(paymentMethod)
  }
 
}
