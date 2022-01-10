import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengSharedModule } from '../../shared/primeng-shared.module';
import {EstimateInvoiceDialogComponent} from './estimate-invoice-dialog/estimate-invoice-dialog.component'

@NgModule({
  imports: [
    CommonModule, 
    PrimengSharedModule,
  ],
  declarations: [EstimateInvoiceDialogComponent]
})
export class EstimateInvoiceModule { 
  
}
