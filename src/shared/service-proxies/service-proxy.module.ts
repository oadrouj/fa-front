import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AbpHttpInterceptor } from 'abp-ng2-module';

import * as ApiServiceProxies from './service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.RoleServiceProxy,
        ApiServiceProxies.SessionServiceProxy,
        ApiServiceProxies.TenantServiceProxy,
        ApiServiceProxies.UserServiceProxy,
        ApiServiceProxies.TokenAuthServiceProxy,
        ApiServiceProxies.AccountServiceProxy,
        ApiServiceProxies.ConfigurationServiceProxy,
        ApiServiceProxies.CustomAccountServiceProxy,
        ApiServiceProxies.InfosEntrepriseServiceProxy,
        ApiServiceProxies.ClientServiceProxy,
        ApiServiceProxies.DevisServiceProxy,
        ApiServiceProxies.FactureServiceProxy,
        ApiServiceProxies.CatalogueServiceProxy,
        ApiServiceProxies.CountryServiceAppServiceProxy,
        ApiServiceProxies.FileApiServiceProxy,
        ApiServiceProxies.StatisticsServiceProxy,
        ApiServiceProxies.SubscriptionsManagementServiceProxy,
        { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
    ]
})
export class ServiceProxyModule { }
