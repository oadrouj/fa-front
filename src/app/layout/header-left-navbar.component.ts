import { Component, ChangeDetectionStrategy, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { LayoutStoreService } from '@shared/layout/layout-store.service';
import { AppSessionService } from '@shared/session/app-session.service';

@Component({
  selector: 'header-left-navbar',
  templateUrl: './header-left-navbar.component.html',
  styleUrls: ['./header-left-navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderLeftNavbarComponent extends AppComponentBase implements OnInit {
  sidebarExpanded: boolean;

  constructor(private _layoutStore: LayoutStoreService,
    injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
    this._layoutStore.sidebarExpanded.subscribe((value) => {
      this.sidebarExpanded = value;
    });
  }

  toggleSidebar(): void {
    this._layoutStore.setSidebarExpanded(!this.sidebarExpanded);
  }
}
