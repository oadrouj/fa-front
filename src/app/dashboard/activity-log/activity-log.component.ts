import { Component, Input, OnInit } from '@angular/core';
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
  displayModal: boolean = false;
  lodingIsComplete: any;
  @Input() currency : string;

  constructor(
    private _statisticsServiceProxy: StatisticsServiceProxy
  ) { }

  activityLogItems = new Array<ActivityLog>(3)
  activityLogAllItems= new Array<ActivityLog>()
  activityLogArray = Array.from({length: 5})
  activityLogTitles = ['estimate', 'invoice', 'payment', 'client', 'catalog']

  ngOnInit() {
    Array.from({length: 5}).forEach((item, index) => {
      this.activityLogItems[index] = new ActivityLog(this.activityLogTitles[index])
    })

    this._statisticsServiceProxy.getActivityLog().subscribe(res => {
     this.lodingIsComplete = true;
     this.activityLogItems = (res.items.map(item => {
        if(item.logType == 'client'){
          item.amount = undefined;
          item.clientName = undefined;
        }
         
        if(item.logType == 'catalog')
         item.amount = undefined;

        return item
      
    }) as any)
    this.activityLogItems=this.activityLogItems.slice(0,5)
  
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

  showActivityLogDialog() {
    this.displayModal = true;

    this._statisticsServiceProxy.getActivityLog().subscribe(res => {
      this.lodingIsComplete = true;
      this.activityLogAllItems = (res.items.map(item => {
         if(item.logType == 'client'){
           item.amount = undefined;
           item.clientName = undefined;
         }
          
         if(item.logType == 'catalog')
          item.amount = undefined;
 
         return item
       
     }) as any)
 
})
}
}
