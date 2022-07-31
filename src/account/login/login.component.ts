import { Component, Injector, Input, OnInit } from '@angular/core';
import { AbpSessionService } from 'abp-ng2-module';
import { AppComponentBase } from '@shared/app-component-base';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { CustomAccountServiceProxy } from '@shared/service-proxies/service-proxies';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastService } from '@shared/services/toast.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ToastService],
  animations: [accountModuleAnimation()],
 
})
export class LoginComponent extends AppComponentBase implements OnInit {

  submitting = false;
  hidePass = true;

  seConnecterAreaShown: boolean = true;
  sendMailAreaShown: boolean = false;
  mailSentAreaShown: boolean = false;
  resetPassAreaShown: boolean = false;

  emailAdress: string;
  password: string;
  passwordConfirm: string;

  iconClasses= "";
  iconClassesMail= "";
  iconClassesReset= "";


  passwordRequired: boolean = false
  passwordDontMatch: boolean = false
  passwordDidntRepectRegex: boolean = false
  
  constructor(
    injector: Injector,
    public authService: AppAuthService,
    private _sessionService: AbpSessionService,
    private _customAccountService: CustomAccountServiceProxy,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _toastService: ToastService
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
    this.iconClasses="pi pi-spin pi-spinner";

    this.authService.authenticate(() => {
      this.iconClasses="";

    });
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
    this.iconClassesMail="pi pi-spin pi-spinner";


    this._customAccountService.sendResetPasswordMail(this.emailAdress)
    .pipe(finalize(() => {this.iconClassesMail=""; }))
    .subscribe({
      next: () => {
      this.iconClassesMail="";
      this.sendMailAreaShown = false;
      this.mailSentAreaShown = true;
    },
    error: err => {
      this.iconClassesMail="";
    }
    });
  }

  reinitialiser(): void {
    this.iconClassesReset="pi pi-spin pi-spinner";

    var userId = Number(this._activatedRoute.snapshot.paramMap.get('resetPassword'));
      this._customAccountService.resetPassword(userId, this.password)
      .pipe(finalize(()=>{this.iconClassesReset="";}))
      .subscribe({
        next: () => {
          this.iconClassesReset="";

          this._toastService.info({
            summary: 'Opértion réussie',
            detail: 'Mot de passe réinitialisé avec succés',
          })

        this.returnToLogin();
      }, error: err =>{
        this.iconClassesReset="";
      }
    });
  }

  register(): void {
    this._router.navigate(['/account/redirect'], { state: { route: '/account/reister'} });
  }

  validatePassword(): boolean {
    const regularExpressionEmail = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    this.passwordDidntRepectRegex = !regularExpressionEmail.test(
      String(this.password),
    )
    
    if (this.passwordDidntRepectRegex) return false
    return true
  }

  validatePasswordConfirm(): boolean {
    this.passwordDontMatch = !(this.password == this.passwordConfirm)
    if ( this.passwordDontMatch ) return false
    return true
  }
}
