import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.css']
})
export class RegisterStepTwoComponent implements OnInit {
  
  @Input()
  prenom: string;

  @Input()
  code: number;

  constructor(private _router: Router) { }

  ngOnInit(): void { 
  }

  redirect() {
    this._router.navigate(['/account/redirect'], { state: { route: '/account/reister', step: '4', prenom: this.prenom, userId: this.code } });
  }
}
