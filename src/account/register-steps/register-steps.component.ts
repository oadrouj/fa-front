import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-steps',
  templateUrl: './register-steps.component.html',
  styleUrls: ['./register-steps.component.css']
})
export class RegisterStepsComponent implements OnInit {

  isStepOne: boolean = false;
  isStepTwo: boolean = false;
  isStepThree: boolean = false;
  isStepFour: boolean = false;
  isStepFive: boolean = false;
  isStepEnd: boolean = false;

  prenom: string;
  code: number;
  status: string;

  constructor() { }

  ngOnInit(): void {
    if (window.history.state.step === '2') {
      this.isStepTwo = true;
      this.prenom = window.history.state.prenom;
      this.code = window.history.state.userId;
    }
    else if (window.history.state.step === '3') {
      this.isStepThree = true;
      this.code = window.history.state.userId;
    }
    else if (window.history.state.step === '4') {
      this.isStepFour = true;
      this.code = window.history.state.userId;
      this.status = window.history.state.status
    }
    else if (window.history.state.step === '5') {
      this.isStepFive = true;
      this.prenom = window.history.state.prenom;
    }
    else if (window.history.state.step === '6') {
      this.isStepEnd = true;
      this.prenom = window.history.state.prenom;
    }
    else {
      this.isStepOne = true;
    }
  }

}
 