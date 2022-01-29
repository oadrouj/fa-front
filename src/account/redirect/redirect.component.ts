import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomAccountServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html'
})
export class RedirectComponent implements OnInit {


  constructor(
    private _router: Router,
    private _customAccountService: CustomAccountServiceProxy,
    ) { 
  }

  ngOnInit(): void { 
    if(window.history.state.route === '/account/reister'){
      // let registerOutput;
      if (window.history.state.step === '2') {
        // registerOutput = window.history.state.registerOutput
        this._router.navigate(['/account/register'], { state: { step: '2',  } });
      }
      else if (window.history.state.step === '3') {
        
        this._customAccountService.checkOrUpdateConfirmationEmailIsSent(window.history.state.userId).subscribe(res => {
          if(!res){
            this._router.navigate(['/account/home'], { state: { step: '3', userId: window.history.state.userId} });
          }
          else {
           this._router.navigate(['/account/register'], { state: { step: '3', userId: window.history.state.userId } });

          }
        })
      }
      // else if (window.history.state.step === '4') {
      //   this._router.navigate(['/account/register'], { state: { step: '4', userId: window.history.state.userId, status: window.history.state.status } });
      // }
      // else if (window.history.state.step === '5') {
      //   this._router.navigate(['/account/register'], { state: { step: '5', userId: window.history.state.userId } });
      // }
      // else if (window.history.state.step === '6') {
      //   this._router.navigate(['/account/register'], { state: { step: '6', userId: window.history.state.userId } });
      // }
      else {
        this._router.navigate(['/account/register'], { state: { step: '1' } });
      }
    }
  }
}
