import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateInfosEntrepriseInput, InfosEntrepriseServiceProxy } from '@shared/service-proxies/service-proxies';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-register-step-three',
  templateUrl: './register-step-three.component.html',
  styleUrls: ['./register-step-three.component.css']
})
export class RegisterStepThreeComponent implements OnInit {

  @Input()
  code: number;

  ppSelected: boolean = true;
  aeSelected: boolean = false;
  sarlSelected: boolean = false;
  saSelected: boolean = false;

  status: string = "pp";

  model: CreateInfosEntrepriseInput = new CreateInfosEntrepriseInput();

  raisonSocialeRequired: boolean = false;

  constructor(private _router: Router,
    private primengConfig: PrimeNGConfig) { }
 
  ngOnInit(): void { 
    this.model.userId = this.code;
    this.primengConfig.ripple = true;
  }
  
  select(selected): void {
    this.status = selected;
    this.ppSelected = selected == 'pp';
    this.aeSelected = selected == 'ae';
    this.sarlSelected = selected == 'sarl';
    this.saSelected = selected == 'sa';
  }

  save() {
        this._router.navigate(['/account/redirect'], { state: { route: '/account/reister', step: '4', status: this.status, userId: this.code} });
  }
}
