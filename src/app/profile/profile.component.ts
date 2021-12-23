import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalEventsService } from '@shared/globalEventsService';
import { ChangeProfileContainerTitleService } from '@shared/services/change-profile-container-title.service';
import { DefaultAnnotationsComponent } from './components/default-annotations/default-annotations.component';
import { ProfileContainerComponent } from './components/profile-container/profile-container.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dynamicTitle = 'Devis';

  constructor(
    private _globalEventsService: GlobalEventsService,
    private _changeProfileContainerTitleService: ChangeProfileContainerTitleService,
  ) { }

  favIcon: HTMLLinkElement = document.querySelector('#favIcon')
  @ViewChild('defaultAnnotations') defaultAnnotations: DefaultAnnotationsComponent
  ngOnInit() { 
    
    this._globalEventsService.announcedThePageChangedColorSubject(
      `var(--dark-orange-color`,
    )

    this._changeProfileContainerTitleService.changeTitle$.subscribe(res => {
      this.dynamicTitle = res
    })

    this.favIcon.href = 'assets/img/DevisLogo.png'
  }
  
}
