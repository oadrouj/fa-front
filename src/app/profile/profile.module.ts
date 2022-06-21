import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PrimengSharedModule } from '@shared/primeng-shared.module';
import { RouterModule } from '@angular/router';
import { DropdownGroupComponent } from './components/dropdown-group/dropdown-group.component';
import { TextareaGroupComponent } from './components/textarea-group/textarea-group.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { ProfileContainerComponent } from './components/profile-container/profile-container.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { ContactInfosComponent } from './components/contact-infos/contact-infos.component';
import { DefaultAnnotationsComponent } from './components/default-annotations/default-annotations.component';
import { ChangeProfileContainerTitleService } from '@shared/services/change-profile-container-title.service';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ProfileComponent}
  ]),
    PrimengSharedModule,
    ImageCropperModule
  ],
  providers: [ChangeProfileContainerTitleService],
  declarations: [
    ProfileComponent,
    DropdownGroupComponent,
    InputGroupComponent,
    ProfileContainerComponent,
    TextareaGroupComponent,
    GeneralInfoComponent,
    ContactInfosComponent,
    DefaultAnnotationsComponent,
  ]
})
export class ProfileModule { }
