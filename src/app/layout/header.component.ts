import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConsts } from '@shared/AppConsts';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit{
  codeCouleur : string;
  // appConsts = AppConsts.codeCouleurHeader;
  constructor(
    private _authService: AppAuthService
  ) {}

  ngOnInit(){
    
  }

  logout(): void {
    this._authService.logout();
  }
}
