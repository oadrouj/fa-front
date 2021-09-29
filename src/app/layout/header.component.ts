import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { GlobalEventsService } from '@shared/globalEventsService';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  codeCouleurHeader: string;
  eventSubscribtion: Subscription;
  constructor(
    private _authService: AppAuthService,
    private _globalEventsService: GlobalEventsService
  ) {}

  ngOnInit(){
    this.eventSubscribtion = this._globalEventsService.pageChangedColorSubjectObservable.subscribe((color) => {
      this.codeCouleurHeader = color;
    });
  }

  logout(): void {
    this._authService.logout();
  }
}
