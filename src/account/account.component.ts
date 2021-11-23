import {
  Component,
  OnInit,
  ViewEncapsulation,
  Injector,
  Renderer2
} from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppConsts } from '@shared/AppConsts';
import { AppSessionService } from '@shared/session/app-session.service';

@Component({
  templateUrl: './account.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./account.component.css']
})
export class AccountComponent extends AppComponentBase implements OnInit {
  constructor(injector: Injector, 
    private _sessionService: AppSessionService) {
    super(injector);
  }

  showTenantChange(): boolean {
    return abp.multiTenancy.isEnabled;
  }

  ngOnInit(): void {
    if (this._sessionService.user) {
        location.href = AppConsts.appBaseUrl;
    }
  }
}
