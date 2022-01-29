import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { RegisterStepsComponent } from './register-steps/register-steps.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ValidateMailComponent } from './validate-mail/validate-mail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AccountComponent,
                children: [
                    { path: 'home', component: LoginComponent},
                    { path: 'home/:resetPassword', component: LoginComponent},
                    { path: 'register', component: RegisterStepsComponent},
                    { path: 'redirect', component: RedirectComponent},
                    { path: 'validateMail/:userId', component: ValidateMailComponent, data: { preload: false },}
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule { }
