import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, map } from 'rxjs/operators';
import { TokenService, LogService, UtilsService } from 'abp-ng2-module';
import { AppConsts } from '@shared/AppConsts';
import { UrlHelper } from '@shared/helpers/UrlHelper';
import {
    AuthenticateModel,
    AuthenticateResultModel,
    TokenAuthServiceProxy,
} from '@shared/service-proxies/service-proxies';

@Injectable()
export class AppAuthService {
    authenticateModel: AuthenticateModel;
    authenticateResult: AuthenticateResultModel;
    rememberMe: boolean;

    constructor(
        private _tokenAuthService: TokenAuthServiceProxy,
        private _router: Router,
        private _utilsService: UtilsService,
        private _tokenService: TokenService,
        private _logService: LogService
    ) {
        this.clear();
    }

    public logout(reload?: boolean): void {
        abp.auth.clearToken();
        abp.utils.setCookieValue(
            AppConsts.authorization.encryptedAuthTokenName,
            undefined,
            undefined,
            abp.appPath
        );
        if (reload !== false) {
            location.href = AppConsts.appBaseUrl; 
        }
    }

    public authenticate(finallyCallback?: () => void, noRedirectToApp = false): void {
        finallyCallback = finallyCallback || (() => { });
        this._tokenAuthService
            .authenticate(this.authenticateModel)
            .pipe(
                finalize(() => {
                    finallyCallback();
                })
            )
            .subscribe({
                next : (result: AuthenticateResultModel) => {
              
                this.processAuthenticateResult(result, noRedirectToApp);
                }, error:error => {
                 console.log(error); 
                }
        });
    }

    public saveAccessTokenAfterSignup(authenticateModel: AuthenticateModel){
        this._tokenAuthService.getAccessToken(authenticateModel).subscribe(res => {
            console.log(res);
            this._tokenService.setToken(res.accessToken, new Date(new Date().getTime() + 1000 * res.expireInSeconds))
        })
    }

    public activateAccount(userId: number, finallyCallback?: () => void){
        finallyCallback = finallyCallback || (() => { });
        this.rememberMe = true;
        this._tokenAuthService.activateAccount(userId, this._tokenService.getToken())
        .pipe(
            finalize(() => {
                finallyCallback();
            })
        )
        .subscribe((result: AuthenticateResultModel) => {
            this.processAuthenticateResult(result, false, true);
        });
    }

    private processAuthenticateResult(
        authenticateResult: AuthenticateResultModel,
        noRedirectToApp = false,
        isFirstConnection = false
    ) {
        this.authenticateResult = authenticateResult;
        if (authenticateResult.accessToken) {
            this.login(
                authenticateResult.accessToken,
                authenticateResult.encryptedAccessToken,
                authenticateResult.expireInSeconds,
                this.rememberMe,
                noRedirectToApp,
                isFirstConnection
            );
        } else {

            this._logService.warn('Unexpected authenticateResult!');
            this._router.navigate(['account/home']);
        }
    }

    private login(
        accessToken: string,
        encryptedAccessToken: string,
        expireInSeconds: number,
        rememberMe?: boolean,
        noRedirectToApp = false,
        isFirstConnection = false
    ): void {
        const tokenExpireDate = rememberMe
            ? new Date(new Date().getTime() + 1000 * expireInSeconds)
            : undefined;

        this._tokenService.setToken(accessToken, tokenExpireDate);
        
        this._utilsService.setCookieValue(
            AppConsts.authorization.encryptedAuthTokenName,
            encryptedAccessToken,
            tokenExpireDate,
            abp.appPath
        );

        if(!noRedirectToApp){
            if(isFirstConnection)
                location.href = AppConsts.appBaseUrl + '/app/Profil';
            else 
                location.href = AppConsts.appBaseUrl + '/app/Dashboard';

        }
      
    }

    private clear(): void {
        this.authenticateModel = new AuthenticateModel();
        this.authenticateModel.rememberClient = false;
        this.authenticateResult = null;
        this.rememberMe = false;
    }
}
