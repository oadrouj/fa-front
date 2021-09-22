import { Component, Injector, Input, OnInit } from '@angular/core';
import { AbpSessionService } from 'abp-ng2-module';
import { AppComponentBase } from '@shared/app-component-base';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { CustomAccountServiceProxy } from '@shared/service-proxies/service-proxies';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [accountModuleAnimation()]
})
export class LoginComponent extends AppComponentBase implements OnInit {

  submitting = false;

  seConnecterAreaShown: boolean = true;
  sendMailAreaShown: boolean = false;
  mailSentAreaShown: boolean = false;
  resetPassAreaShown: boolean = false;

  emailAdress: string;
  password: string;

  constructor(
    injector: Injector,
    public authService: AppAuthService,
    private _sessionService: AbpSessionService,
    private _customAccountService: CustomAccountServiceProxy,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    ) {
    super(injector);
  }
  ngOnInit(): void {
    if(this._activatedRoute.snapshot.paramMap.has('resetPassword')) {
      this.seConnecterAreaShown = false;
      this.sendMailAreaShown = false;
      this.mailSentAreaShown = false;
      this.resetPassAreaShown = true;
    }
  }

  get multiTenancySideIsTeanant(): boolean {
    return this._sessionService.tenantId > 0;
  }

  get isSelfRegistrationAllowed(): boolean {
    if (!this._sessionService.tenantId) {
      return false;
    }

    return true;
  }

  login(): void {
    this.submitting = true;
    this.authService.authenticate(() => (this.submitting = false));
  }

  ShowForgotPass(): void {
    this.seConnecterAreaShown = false;
    this.sendMailAreaShown = true;
  }

  returnToLogin(): void {
    this.resetPassAreaShown = false;
    this.sendMailAreaShown = false;
    this.mailSentAreaShown = false;
    this.seConnecterAreaShown = true;
  }

  envoyerMail(): void {
    this._customAccountService.sendResetPasswordMail(this.emailAdress).subscribe(() => {
      this.sendMailAreaShown = false;
      this.mailSentAreaShown = true;
    });
  }

  reinitialiser(): void {
    var userId = Number(this._activatedRoute.snapshot.paramMap.get('resetPassword'));
      this._customAccountService.resetPassword(userId, this.password).subscribe(() => {
        this.returnToLogin();
      });
  }

  register(): void {
    this._router.navigate(['/account/redirect'], { state: { route: '/account/reister'} });
  }
}
