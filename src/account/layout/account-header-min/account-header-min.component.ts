import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { AbpSessionService } from 'abp-ng2-module';

@Component({
  selector: 'app-account-header-min',
  templateUrl: './account-header-min.component.html',
  styleUrls: ['./account-header-min.component.css']
})
export class AccountHeaderMinComponent  extends AppComponentBase {
  submitting = false;

  constructor(
    injector: Injector,
    public authService: AppAuthService,
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
}
 