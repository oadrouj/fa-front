import { DevisComponent } from './devis.component';
import { NgModule } from '@angular/core';
import { DevisDialogComponent } from './devis-dialog/devis-dialog.component';
import { RouterModule } from '@angular/router';
import { PrimengSharedModule } from '@shared/primeng-shared.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service';
import { ToastService } from '@shared/services/toast.service';
import { ConfirmationService } from 'primeng/api';
import { FacturesDialogComponent } from '@app/factures/factures-dialog/factures-dialog.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DevisComponent}
  ]),
  PrimengSharedModule,

  ],
  declarations: [DevisComponent, DevisDialogComponent]
})
export class DevisModule { }
