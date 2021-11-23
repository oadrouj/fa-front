import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html'
})
export class RedirectComponent implements OnInit {


  constructor(
    private _router: Router) { 
  }

  ngOnInit(): void { 
    if(window.history.state.route === '/account/reister'){
      if (window.history.state.step === '2') {
        this._router.navigate(['/account/register'], { state: { step: '2' } });
      }
      else if (window.history.state.step === '3') {
        this._router.navigate(['/account/register'], { state: { step: '3', userId: window.history.state.userId } });
      }
      else if (window.history.state.step === '4') {
        this._router.navigate(['/account/register'], { state: { step: '4', userId: window.history.state.userId, status: window.history.state.status } });
      }
      else if (window.history.state.step === '5') {
        this._router.navigate(['/account/register'], { state: { step: '5', userId: window.history.state.userId } });
      }
      else if (window.history.state.step === '6') {
        this._router.navigate(['/account/register'], { state: { step: '6', userId: window.history.state.userId } });
      }
      else {
        this._router.navigate(['/account/register'], { state: { step: '1' } });
      }
    }
  }
}
