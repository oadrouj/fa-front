import { Component, OnInit } from '@angular/core';
import { ActivityLogDto, StatisticsServiceProxy } from '@shared/service-proxies/service-proxies';
import * as moment from 'moment';

interface ActivityLog {
  logType: string | undefined;
  reference: string | undefined;
  clientName: string | undefined;
  date: moment.Moment;
  amount: number;
  currency: string | undefined
  logoSrc: string
  
}

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {

  constructor(
    private _statisticsServiceProxy: StatisticsServiceProxy
  ) { }

  activityLogItems : ActivityLog[]
  // [
  //   {
  //     logType: 'estimate',
  //     logoSrc: 'assets/img/DevisLogo.png',
  //     reference: 'D00001',
  //     clientName: 'Client1',
  //     date: moment(),
  //     amount: 1200.50,
  //     currency: 'MAD'
  //   }
  // ]

  ngOnInit() {
    this._statisticsServiceProxy.getActivityLog().subscribe(res => {
      this.activityLogItems = res.items as any
      this.activityLogItems.forEach(item => {

      switch (item.logType) {
        case 'estimate':
          item.logoSrc = 'assets/img/activity-log-estimate.png'
          break;
  
        case 'invoice':
          item.logoSrc = 'assets/img/activity-log-invoice.png'
          break;

        case 'payment':
          item.logoSrc = 'assets/img/payment-method.png'
          break;
        case 'client':
          item.logoSrc = 'assets/img/activity-log-client.png'
          item.amount = undefined;
          item.clientName = undefined;
          break;
        case 'catalog':
          item.logoSrc = 'assets/img/activity-log-catalog.png'
          item.amount = undefined;
          break;
      }
    })
  })
  }

  parseTitle(logType){
    switch (logType) {
      case 'estimate':
        return 'Nouveau devis'

      case 'invoice':
        return 'Nouvelle facture'

      case 'payment':
        return 'Nouveau paiement'
      
      case 'client':
        return 'Ajout d’un client'
      
      case 'catalog':
        return 'Ajout d’un produit'
      
    }
  }



}
