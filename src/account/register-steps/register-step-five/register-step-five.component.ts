import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-step-five',
  templateUrl: './register-step-five.component.html',
  styleUrls: ['./register-step-five.component.css']
})
export class RegisterStepFiveComponent implements OnInit {

  @Input()
  code: number;
  
  timelineValues: any[];

  constructor(private _router: Router) { 
    this.timelineValues = [
        "1 Mois", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
    ];
  }

  ngOnInit(): void { 
  }

  redirect() {
    this._router.navigate(['/account/redirect'], { state: { route: '/account/reister', step: '6', userId: this.code } });
  }
}
