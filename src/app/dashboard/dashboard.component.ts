import { Component, OnInit } from '@angular/core';
import { GlobalEventsService } from '@shared/globalEventsService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private globalEventsService: GlobalEventsService,
  ) { }


  favIcon: HTMLLinkElement = document.querySelector('#favIcon')
  primaryColor = "dashboard"
  ngOnInit() {
    this.globalEventsService.announcedThePageChangedColorSubject(
      `#5CBCA6`,
    )
  }


}
