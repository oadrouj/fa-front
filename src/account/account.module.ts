import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccountRoutingModule } from './account-routing.module';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { AccountComponent } from './account.component';
import { RegisterComponent } from './register/register.component';
import { AccountLanguagesComponent } from './layout/account-languages.component';
import { AccountFooterComponent } from './layout/account-footer.component';

// tenants
import { TenantChangeComponent } from './tenant/tenant-change.component';
import { TenantChangeDialogComponent } from './tenant/tenant-change-dialog.component';

//PrimeNg
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {TimelineModule} from 'primeng/timeline';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {RippleModule} from 'primeng/ripple';
import {SliderModule} from 'primeng/slider';

import { AccountHeaderMinComponent } from './layout/account-header-min/account-header-min.component';
import { RegisterStepsComponent } from './register-steps/register-steps.component';
import { RegisterStepOneComponent } from './register-steps/register-step-one/register-step-one.component';
import { RegisterStepTwoComponent } from './register-steps/register-step-two/register-step-two.component';
import { RegisterStepThreeComponent } from './register-steps/register-step-three/register-step-three.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ValidateMailComponent } from './validate-mail/validate-mail.component';
import { IsUniqueEmailAddressDirective } from './directives/is-unique-email-address.directive';

import {LoginComponent} from './login/login.component';
import { RegisterTimelineComponent } from './register-steps/register-timeline/register-timeline.component'
import { SubscriptionCardComponent } from './register-steps/register-step-three/subscription-card/subscription-card.component'
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule, 
        HttpClientJsonpModule,
        SharedModule,
        ServiceProxyModule,
        AccountRoutingModule,
        ModalModule.forChild(),
        //PrimeNg
        InputTextModule,
        PasswordModule,
        ButtonModule,
        TimelineModule,
        DropdownModule,
        CardModule,
        RippleModule,
        SliderModule
    ],
    declarations: [
        AccountComponent,
        RegisterComponent,
        AccountLanguagesComponent,
        AccountFooterComponent,
        // tenant
        TenantChangeComponent,
        TenantChangeDialogComponent,
        AccountHeaderMinComponent,
        RegisterStepsComponent,
        RegisterStepOneComponent,
        RegisterStepTwoComponent,
        RegisterStepThreeComponent,
        IsUniqueEmailAddressDirective,
        RedirectComponent,
        ValidateMailComponent,
        LoginComponent, 
        RegisterTimelineComponent,
        SubscriptionCardComponent,
        
    ],
    entryComponents: [
        // tenant
        TenantChangeDialogComponent
    ]
})
export class AccountModule {

}
