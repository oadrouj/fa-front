import { DevisComponent } from './devis.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengSharedModule } from '@shared/primeng-shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DevisComponent}
  ]),
  PrimengSharedModule,

  ],
  declarations: [DevisComponent]
})
export class DevisModule { }
