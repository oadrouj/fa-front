import { Component, Input, OnInit } from '@angular/core';
import { StatisticsServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-monthly-evolution',
  templateUrl: './monthly-evolution.component.html',
  styleUrls: ['./monthly-evolution.component.css']
})
export class MonthlyEvolutionComponent implements OnInit {
  totalInvoicedAmountEvolved = 0;
  totaEstimatedAmountEvolved = 0;
  totalClientsEvolved = 0;
  totalCatalogsEvolved = 0;
  @Input() currency : string;

  constructor(private _statisticsServiceProxy: StatisticsServiceProxy) { }

  ngOnInit() {
    this._statisticsServiceProxy.getMonthEvolution().subscribe(res => {
      this.totalInvoicedAmountEvolved = res.totalInvoicedAmountEvolved
      this.totaEstimatedAmountEvolved = res.totaEstimatedAmountEvolved
      this.totalClientsEvolved = res.totalClientsEvolved
      this.totalCatalogsEvolved = res.totalCatalogsEvolved

    })
  }

  parseNumber(number: number){
    let sign = ' '
    if(number > 0)
      sign = '+ '
    else if(number < 0)
      sign = '- '

    return  sign + (Number.isInteger(number) ? Math.abs(number) : Math.abs(number).toFixed(2))
  }

}
