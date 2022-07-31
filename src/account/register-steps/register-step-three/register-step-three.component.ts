import { AfterViewInit, Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AppAuthService } from '@shared/auth/app-auth.service'
import {
  CreateInfosEntrepriseInput,
  SubscriptionsManagementServiceProxy,
  TokenAuthServiceProxy,
} from '@shared/service-proxies/service-proxies'
import { PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'app-register-step-three',
  templateUrl: './register-step-three.component.html',
  styleUrls: ['./register-step-three.component.css'],
})
export class RegisterStepThreeComponent implements OnInit {
  @Input()
  code: number
  selectedMonth = 1
  handlePosition = '0%'
  height: string

  constructor(
    private _authService: AppAuthService,
    private _subscriptionsManagementServiceProxy: SubscriptionsManagementServiceProxy,
  ) {}

  ngOnInit(): void {

  }

  submit() {
    this._authService.activateAccount(this.code, () => {
      //Create a subscription
       this._subscriptionsManagementServiceProxy.createFreeSubscription(this.code).subscribe(res => {
       })
    })
  }

  changeSlider(event) {
    this.handlePosition = (document.querySelector(
      '.p-slider-handle',
    ) as HTMLElement).style.bottom

    this.height = parseInt(this.handlePosition) * 33.5 / 100 + 'rem'
  
  

  }
}
