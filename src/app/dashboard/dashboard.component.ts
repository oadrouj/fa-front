import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalEventsService } from '@shared/globalEventsService';
import { InfosEntrepriseServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('col1') col1 : ElementRef
  @ViewChild('col2') col2 : ElementRef

  Currency = 'MAD';
  
  constructor(
    private globalEventsService: GlobalEventsService,
    private _infosEntrepriseService : InfosEntrepriseServiceProxy
  ) {

    let observer = {
      next: result=> {
        if (result){
          
          if(result.currency != null) this.Currency = result.currency; 
          
        }else{
          console.log("No infos found");
        }
      },
      error: error =>{
        console.log(error)
      }
    }

    this._infosEntrepriseService
    .getGeneralInfos()
    .pipe(
    )
    .subscribe(observer)

   }


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
