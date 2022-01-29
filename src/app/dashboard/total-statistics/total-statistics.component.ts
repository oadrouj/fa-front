import { Component, OnInit } from '@angular/core';
import { StatisticsServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-total-statistics',
  templateUrl: './total-statistics.component.html',
  styleUrls: ['./total-statistics.component.scss']
})
export class TotalStatisticsComponent implements OnInit {
  issuedEstimates: number;
  products: number;
  clients: number;
  issuedInvoices: number;

  constructor(
    private _statisticsServiceProxy: StatisticsServiceProxy
  ) { }

  ngOnInit() {
    this._statisticsServiceProxy.getTotalStatistics().subscribe((res => {
      this.issuedEstimates = res.issuedEstimates
      this.issuedInvoices = res.issuedInvoices
      this.clients = res.clients
      this.products = res.products
    }))
  }

}