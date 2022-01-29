import { Component, OnInit } from '@angular/core';
import { ActivityLogDto, StatisticsServiceProxy } from '@shared/service-proxies/service-proxies';
import * as moment from 'moment';

class ActivityLog {
  constructor(logType){
    this.logType = logType
  }
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
  lodingIsComplete: any;

  constructor(
    private _statisticsServiceProxy: StatisticsServiceProxy
  ) { }

  activityLogItems = new Array<ActivityLog>(5)
  activityLogArray = Array.from({length: 5})
  activityLogTitles = ['estimate', 'invoice', 'payment', 'client', 'catalog']

  ngOnInit() {
    Array.from({length: 5}).forEach((item, index) => {
      this.activityLogItems[index] = new ActivityLog(this.activityLogTitles[index])
    })

    this._statisticsServiceProxy.getActivityLog().subscribe(res => {
      // this.activityLogItems = res.items as any
      this.lodingIsComplete = true;
     this.activityLogItems = this.activityLogItems.map(item => {
        let index = (res.items as any).findIndex(i => i.logType == item.logType)
        if(index != -1)
          item = (res.items as any)[index]

        if(item.logType == 'client'){
          this.activityLogItems[index].amount = undefined;
          this.activityLogItems[index].clientName = undefined;
        }
         
        if(item.logType == 'catalog')
         this.activityLogItems[index].amount = undefined;

        return item
      
    })
  })
  }

  mapImageSrc(logType){
    switch (logType) {
      case 'estimate':
        return 'assets/img/activity-log-estimate.png'

      case 'invoice':
        return'assets/img/activity-log-invoice.png'

      case 'payment':
        return 'assets/img/payment-method.png'

      case 'client':
        return 'assets/img/activity-log-client.png'
       
      case 'catalog':
        return 'assets/img/activity-log-catalog.png'
        
    }
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

  getLogItem(index){
    return this.activityLogItems && this.activityLogItems.findIndex(index);
  }

}
