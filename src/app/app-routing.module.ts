import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    {   
                        path: 'Clients',
                        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule), // Lazy load account module
                        data: { preload: true },
                        canActivate: [AppRouteGuard] 

                    },
                    {   
                        path: 'Devis',
                        loadChildren: () => import('./devis/devis.module').then(m => m.DevisModule), // Lazy load account module
                        data: { preload: true, currentComponent: 'Estimate' },
                        canActivate: [AppRouteGuard] 

                    },
                    {   
                        path: 'Factures',
                        loadChildren: () => import('./factures/factures.module').then(m => m.FacturesModule), // Lazy load account module
                        data: { preload: true, currentComponent: 'Invoice'},
                        canActivate: [AppRouteGuard] 

                    },
                    {   
                        path: 'Catalogue',
                        loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule), // Lazy load account module
                        data: { preload: true },
                        canActivate: [AppRouteGuard] 

                    },
                    {
                        path: 'Profil',
                        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
                        data: { preload: true},
                        canActivate: [AppRouteGuard]
                    }
                    
                    // { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    // { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    // { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    // { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    // { path: 'about', component: AboutComponent, canActivate: [AppRouteGuard] },
                    // { path: 'update-password', component: ChangePasswordComponent, canActivate: [AppRouteGuard] }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
