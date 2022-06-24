import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { PrimengSharedModule } from '../../shared/primeng-shared.module';
import { SettingsRoutingModule } from './settings-routing.module';


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    PrimengSharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
