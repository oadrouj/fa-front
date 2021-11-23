import { Component, ChangeDetectionStrategy, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { AbpSessionService } from 'abp-ng2-module';

@Component({
  selector: 'account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountHomeComponent  extends AppComponentBase {
  submitting = false;

  constructor(
    injector: Injector,
    public authService: AppAuthService,
    private _router: Router,
    private _sessionService: AbpSessionService
  ) {
    super(injector);
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
    this.authService.rememberMe = true;
    this.authService.authenticate(() => (this.submitting = false));
  }

  souscrire(): void {
    this._router.navigate(['/account/register']);
  }

  essaiGratuit(): void {
    this._router.navigate(['/account/register']);
  }
}