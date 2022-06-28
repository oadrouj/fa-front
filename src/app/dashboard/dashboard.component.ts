import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalEventsService } from '@shared/globalEventsService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('col1') col1 : ElementRef
  @ViewChild('col2') col2 : ElementRef

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

  ngAfterViewInit(){
    console.log(this.col1.nativeElement.offsetHeight);
    console.log(this.col2.nativeElement.offsetHeight);

  }


}
