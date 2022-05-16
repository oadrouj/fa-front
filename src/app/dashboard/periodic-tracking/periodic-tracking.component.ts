import { Component, OnInit } from '@angular/core'
import { StatisticsServiceProxy } from '@shared/service-proxies/service-proxies'
import * as moment from 'moment'

@Component({
  selector: 'app-periodic-tracking',
  templateUrl: './periodic-tracking.component.html',
  styleUrls: ['./periodic-tracking.component.css'],
})
export class PeriodicTrackingComponent implements OnInit {
  totalInvoicesAmount = 0
  pendingInvoicesAmount = 0
  cashedInvoicesAmount = 0
  lateInvoicesAmount = 0
  totalEstimatesAmount = 0
  transformedInvoicesAmount = 0
  cashedInvoicesAmountPercentage = 0
  pendingInvoicesAmountPercentage = 0
  lateInvoicesAmountPercentage = 0
  gapsLength = 0
  totalLength = 0
  transformationPercentage = 0
  bestsellerTotalAmounts = 0

  constructor(private _statisticsServiceProxy: StatisticsServiceProxy) {}

  startDate = undefined
  endDate = undefined
  startDateInline = false
  endDateInline = false
  bestsellerList: any
  topClientsList

  topClientFontSizesList = ['3xl', '2xl', 'xl', 'lg', 'base']

  ngOnInit() {
    this.totalLength = (document.querySelector(
      '#path',
    ) as SVGPathElement).getTotalLength()
    this.gapsLength = this.totalLength * 0.36

    this.consumeApi(undefined, undefined)
  }

  async consumeApi(startDate, endDate){
    this._statisticsServiceProxy
    .getPeriodicTrackingInfos(startDate, endDate)
    .subscribe((res) => {
      this.totalInvoicesAmount = res.invoicePeriodicTrackingDto.totalInvoicesAmount
      this.cashedInvoicesAmount = res.invoicePeriodicTrackingDto.cashedInvoicesAmount
      this.pendingInvoicesAmount = res.invoicePeriodicTrackingDto.pendingInvoicesAmount
      this.lateInvoicesAmount = res.invoicePeriodicTrackingDto.lateInvoicesAmount
      this.totalEstimatesAmount = res.estimatePeriodicTrackingDto.totalEstimatesAmount
      this.transformedInvoicesAmount = res.estimatePeriodicTrackingDto.transformedInvoicesAmount

      this.cashedInvoicesAmountPercentage = ((this.cashedInvoicesAmount / this.totalInvoicesAmount) * this.totalLength ) || 0
      this.pendingInvoicesAmountPercentage = ((this.pendingInvoicesAmount / this.totalInvoicesAmount) * this.totalLength ) || 0
      this.lateInvoicesAmountPercentage = ((this.lateInvoicesAmount / this.totalInvoicesAmount) * this.totalLength) || 0
      this.transformationPercentage = ((this.transformedInvoicesAmount * 100) / this.totalEstimatesAmount ) || 0

      this.bestsellerList = res.bestsellerPeriodicTrackingDto
      console.log('res: '+JSON.stringify(res));
      
      this.bestsellerTotalAmounts = this.bestsellerList.length && (res.bestsellerPeriodicTrackingDto
        .map((item) => item.amount)
        .reduce((accum, current) => accum + current))

      this.topClientsList = res.topClientsPeriodicTrackingDto

      console.log("this.bestsellerList: "+ JSON.stringify(this.bestsellerList));
      
    })
  }

  getBestsellerPercentage(amount) {
    console.log("getBestsellerPercentage: "+(amount * 100) / this.bestsellerTotalAmounts);
    return (amount * 100) / this.bestsellerTotalAmounts
  }

  selectStartDate(){
    this.consumeApi(this.startDate, this.endDate)
    this.startDateInline = false
  }

  selectEndDate(){
    this.consumeApi(this.startDate, this.endDate)
    this.endDateInline = false
  }
  
  parseDate(){
    let string = (this.startDate || this.endDate) ?
       ((this.startDate ? this.startDate.toLocaleDateString('fr-FR') : new Date().toLocaleDateString('fr-FR')) + 
      ' - ' + (this.endDate ? this.endDate.toLocaleDateString('fr-FR') : new Date().toLocaleDateString('fr-FR'))) : ' mois courant par défaut'

      return string
  }
}
