import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServiceProxyModule } from './service-proxies/service-proxy.module';
import { SharedModule } from './shared.module';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import {SelectButtonModule} from 'primeng/selectbutton';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputNumberModule} from 'primeng/inputnumber';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {AccordionModule} from 'primeng/accordion';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {SkeletonModule} from 'primeng/skeleton';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { TableComponent } from '../app/table/table.component';
import { ToastService } from './services/toast.service';
import { ConfirmDialogService } from './services/confirm-dialog.service';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { DevisDialogComponent } from '../app/devis/devis-dialog/devis-dialog.component';
import { FacturePayementComponent } from '../app/factures/facture-payement/facture-payement.component';
import { FacturesDialogComponent } from '../app/factures/factures-dialog/factures-dialog.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ItemPreviewComponent} from './components/item-preview/item-preview.component'
import {FileUploadModule} from 'primeng/fileupload';
import { NgxdModule } from '@ngxd/core';
import { DocumentStatusComponent } from './components/document-status/document-status.component'
import { EstimateInvoiceStatusStateService } from './services/estimate-invoice-status-state.service'
import { DataViewModule } from 'primeng/dataview';
import {InplaceModule} from 'primeng/inplace';
import {ListboxModule} from 'primeng/listbox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forChild(),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    TabViewModule,
    DialogModule,
    SelectButtonModule,
    KeyFilterModule,
    InputNumberModule,
    ToastModule,
    ConfirmDialogModule,
    CalendarModule,
    SplitButtonModule,
    AutoCompleteModule,
    AccordionModule,
    ToggleButtonModule,
    SkeletonModule,
    DynamicDialogModule,
    FileUploadModule,
    NgxdModule,
    VirtualScrollerModule,
    DataViewModule,
    InplaceModule,
    ListboxModule
  ],

  declarations: [
    TableComponent,  
    FacturesDialogComponent,
    ItemPreviewComponent,
    DocumentStatusComponent,
  ],
  providers: [MessageService, ConfirmationService, ToastService, ConfirmDialogService],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule,
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    TabViewModule,
    DialogModule,
    SelectButtonModule,
    KeyFilterModule,
    InputNumberModule,
    ToastModule,
    ConfirmDialogModule,
    CalendarModule,
    SplitButtonModule,
    AutoCompleteModule,
    AccordionModule,
    ToggleButtonModule,
    SkeletonModule,
    DynamicDialogModule,
    TableComponent,  
    FacturesDialogComponent,
    ItemPreviewComponent,
    DocumentStatusComponent,
    FileUploadModule,
    NgxdModule,
    VirtualScrollerModule,
    DataViewModule,
    InplaceModule, 
    ListboxModule
  ],
})
export class PrimengSharedModule { }
