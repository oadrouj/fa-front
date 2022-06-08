(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/A9x":
/*!************************************************************!*\
  !*** ./src/shared/directives/equal-validator.directive.ts ***!
  \************************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    EqualValidator.prototype.validate = function (control) {
        // self value
        var value = control.value;
        // second control
        var control2 = control.root.get(this.validateEqual);
        // value not equal
        if (control2 && value !== control2.value && !this.isReverse) {
            return {
                validateEqual: true
            };
        }
        // value equal and reverse
        if (control2 && value === control2.value && this.isReverse) {
            delete control2.errors['validateEqual'];
            if (!Object.keys(control2.errors).length) {
                control2.setErrors(null);
            }
        }
        // value not equal and reverse
        if (control2 && value !== control2.value && this.isReverse) {
            control2.setErrors({ validateEqual: true });
        }
        return null;
    };
    EqualValidator.ɵfac = function EqualValidator_Factory(t) { return new (t || EqualValidator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('validateEqual'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('reverse')); };
    EqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EqualValidator, selectors: [["", "validateEqual", "", "formControlName", ""], ["", "validateEqual", "", "formControl", ""], ["", "validateEqual", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator; }),
                    multi: true
                }
            ])] });
    return EqualValidator;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 
                // tslint:disable-next-line:directive-selector
                '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator; }),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['validateEqual']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['reverse']
            }] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Documents\Workstation\Facturi-Front\src\main.ts */"zUnb");


/***/ }),

/***/ "0EPa":
/*!*******************************************************************!*\
  !*** ./src/shared/components/modal/abp-modal-footer.component.ts ***!
  \*******************************************************************/
/*! exports provided: AbpModalFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbpModalFooterComponent", function() { return AbpModalFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "wzdi");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var AbpModalFooterComponent = /** @class */ (function (_super) {
    __extends(AbpModalFooterComponent, _super);
    function AbpModalFooterComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.cancelLabel = _this.l('Cancel');
        _this.saveLabel = _this.l('Save');
        _this.onCancelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    AbpModalFooterComponent.ɵfac = function AbpModalFooterComponent_Factory(t) { return new (t || AbpModalFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
    AbpModalFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbpModalFooterComponent, selectors: [["abp-modal-footer"]], inputs: { cancelLabel: "cancelLabel", cancelDisabled: "cancelDisabled", saveLabel: "saveLabel", saveDisabled: "saveDisabled" }, outputs: { onCancelClick: "onCancelClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 4, consts: [[1, "modal-footer", "justify-content-between"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function AbpModalFooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpModalFooterComponent_Template_button_click_1_listener() { return ctx.onCancelClick.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cancelDisabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cancelLabel, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.saveDisabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.saveLabel, " ");
        } }, encapsulation: 2, changeDetection: 0 });
    return AbpModalFooterComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbpModalFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'abp-modal-footer',
                templateUrl: './abp-modal-footer.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { cancelLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cancelDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], saveLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], saveDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onCancelClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "0QMH":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "rB/T");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "5IEl":
/*!*********************************************!*\
  !*** ./src/shared/auth/app-auth.service.ts ***!
  \*********************************************/
/*! exports provided: AppAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAuthService", function() { return AppAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! abp-ng2-module */ "4Fy5");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/AppConsts */ "nS6G");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "KALY");










var AppAuthService = /** @class */ (function () {
    function AppAuthService(_tokenAuthService, _router, _utilsService, _tokenService, _logService) {
        this._tokenAuthService = _tokenAuthService;
        this._router = _router;
        this._utilsService = _utilsService;
        this._tokenService = _tokenService;
        this._logService = _logService;
        this.clear();
    }
    AppAuthService.prototype.logout = function (reload) {
        abp.auth.clearToken();
        abp.utils.setCookieValue(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].authorization.encryptedAuthTokenName, undefined, undefined, abp.appPath);
        if (reload !== false) {
            location.href = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].appBaseUrl;
        }
    };
    AppAuthService.prototype.authenticate = function (finallyCallback, noRedirectToApp) {
        var _this = this;
        if (noRedirectToApp === void 0) { noRedirectToApp = false; }
        finallyCallback = finallyCallback || (function () { });
        this._tokenAuthService
            .authenticate(this.authenticateModel)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            finallyCallback();
        }))
            .subscribe(function (result) {
            _this.processAuthenticateResult(result, noRedirectToApp);
        });
    };
    AppAuthService.prototype.saveAccessTokenAfterSignup = function (authenticateModel) {
        var _this = this;
        this._tokenAuthService.getAccessToken(authenticateModel).subscribe(function (res) {
            console.log(res);
            _this._tokenService.setToken(res.accessToken, new Date(new Date().getTime() + 1000 * res.expireInSeconds));
        });
    };
    AppAuthService.prototype.activateAccount = function (userId, finallyCallback) {
        var _this = this;
        finallyCallback = finallyCallback || (function () { });
        this.rememberMe = true;
        this._tokenAuthService.activateAccount(userId, this._tokenService.getToken())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            finallyCallback();
        }))
            .subscribe(function (result) {
            _this.processAuthenticateResult(result, false, true);
        });
    };
    AppAuthService.prototype.processAuthenticateResult = function (authenticateResult, noRedirectToApp, isFirstConnection) {
        if (noRedirectToApp === void 0) { noRedirectToApp = false; }
        if (isFirstConnection === void 0) { isFirstConnection = false; }
        this.authenticateResult = authenticateResult;
        if (authenticateResult.accessToken) {
            this.login(authenticateResult.accessToken, authenticateResult.encryptedAccessToken, authenticateResult.expireInSeconds, this.rememberMe, noRedirectToApp, isFirstConnection);
        }
        else {
            this._logService.warn('Unexpected authenticateResult!');
            this._router.navigate(['account/home']);
        }
    };
    AppAuthService.prototype.login = function (accessToken, encryptedAccessToken, expireInSeconds, rememberMe, noRedirectToApp, isFirstConnection) {
        if (noRedirectToApp === void 0) { noRedirectToApp = false; }
        if (isFirstConnection === void 0) { isFirstConnection = false; }
        var tokenExpireDate = rememberMe
            ? new Date(new Date().getTime() + 1000 * expireInSeconds)
            : undefined;
        this._tokenService.setToken(accessToken, tokenExpireDate);
        this._utilsService.setCookieValue(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].authorization.encryptedAuthTokenName, encryptedAccessToken, tokenExpireDate, abp.appPath);
        if (!noRedirectToApp) {
            if (isFirstConnection)
                location.href = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].appBaseUrl + '/app/Profil';
            else
                location.href = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].appBaseUrl + '/app/Dashboard';
        }
    };
    AppAuthService.prototype.clear = function () {
        this.authenticateModel = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["AuthenticateModel"]();
        this.authenticateModel.rememberClient = false;
        this.authenticateResult = null;
        this.rememberMe = false;
    };
    AppAuthService.ɵfac = function AppAuthService_Factory(t) { return new (t || AppAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["TokenAuthServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["LogService"])); };
    AppAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppAuthService, factory: AppAuthService.ɵfac });
    return AppAuthService;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["TokenAuthServiceProxy"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] }, { type: abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }, { type: abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["LogService"] }]; }, null); })();


/***/ }),

/***/ "9eJT":
/*!***************************************************!*\
  !*** ./src/shared/layout/layout-store.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutStoreService", function() { return LayoutStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




var LayoutStoreService = /** @class */ (function () {
    function LayoutStoreService() {
        this.initialLayoutConfig = {
            sidebarExpanded: false
        };
        this.configSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initialLayoutConfig);
        this.config$ = this.configSource.asObservable();
    }
    Object.defineProperty(LayoutStoreService.prototype, "sidebarExpanded", {
        get: function () {
            return this.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('sidebarExpanded'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        },
        enumerable: false,
        configurable: true
    });
    LayoutStoreService.prototype.setSidebarExpanded = function (value) {
        this.configSource.next(Object.assign(this.configSource.value, { sidebarExpanded: value }));
    };
    LayoutStoreService.ɵfac = function LayoutStoreService_Factory(t) { return new (t || LayoutStoreService)(); };
    LayoutStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutStoreService, factory: LayoutStoreService.ɵfac });
    return LayoutStoreService;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    hmr: false,
    appConfig: 'appconfig.json'
};


/***/ }),

/***/ "CR43":
/*!*******************************************************************!*\
  !*** ./src/shared/components/modal/abp-modal-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: AbpModalHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbpModalHeaderComponent", function() { return AbpModalHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "wzdi");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var AbpModalHeaderComponent = /** @class */ (function (_super) {
    __extends(AbpModalHeaderComponent, _super);
    function AbpModalHeaderComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.onCloseClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    AbpModalHeaderComponent.ɵfac = function AbpModalHeaderComponent_Factory(t) { return new (t || AbpModalHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
    AbpModalHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbpModalHeaderComponent, selectors: [["abp-modal-header"]], inputs: { title: "title" }, outputs: { onCloseClick: "onCloseClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function AbpModalHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpModalHeaderComponent_Template_button_click_3_listener() { return ctx.onCloseClick.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        } }, encapsulation: 2, changeDetection: 0 });
    return AbpModalHeaderComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbpModalHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'abp-modal-header',
                templateUrl: './abp-modal-header.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onCloseClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Di4U":
/*!*********************************************!*\
  !*** ./src/shared/auth/auth-route-guard.ts ***!
  \*********************************************/
/*! exports provided: AppRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouteGuard", function() { return AppRouteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! abp-ng2-module */ "4Fy5");
/* harmony import */ var _session_app_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session/app-session.service */ "tvsI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");








var AppRouteGuard = /** @class */ (function () {
    function AppRouteGuard(_permissionChecker, _router, _sessionService) {
        this._permissionChecker = _permissionChecker;
        this._router = _router;
        this._sessionService = _sessionService;
    }
    AppRouteGuard.prototype.canActivate = function (route, state) {
        if (!this._sessionService.user) {
            this._router.navigate(['/account/home']);
            return false;
        }
        if (!route.data || !route.data['permission']) {
            return true;
        }
        if (this._permissionChecker.isGranted(route.data['permission'])) {
            return true;
        }
        this._router.navigate([this.selectBestRoute()]);
        return false;
    };
    AppRouteGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AppRouteGuard.prototype.selectBestRoute = function () {
        if (!this._sessionService.user) {
            return '/account/home';
        }
        if (this._permissionChecker.isGranted('Pages.Users')) {
            return '/app/admin/users';
        }
        return '/app/home';
    };
    AppRouteGuard.ɵfac = function AppRouteGuard_Factory(t) { return new (t || AppRouteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_1__["PermissionCheckerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"])); };
    AppRouteGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppRouteGuard, factory: AppRouteGuard.ɵfac });
    return AppRouteGuard;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRouteGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: abp_ng2_module__WEBPACK_IMPORTED_MODULE_1__["PermissionCheckerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"] }]; }, null); })();


/***/ }),

/***/ "I+mh":
/*!*******************************!*\
  !*** ./src/root.component.ts ***!
  \*******************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.ɵfac = function RootComponent_Factory(t) { return new (t || RootComponent)(); };
    RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return RootComponent;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: "<router-outlet></router-outlet>"
            }]
    }], null, null); })();


/***/ }),

/***/ "IL3Y":
/*!*********************************************************************************!*\
  !*** ./node_modules/@angular/common/locales lazy ^\.\/.*\.js$ namespace object ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af-NA.js": [
		"ANTw",
		0
	],
	"./af.js": [
		"U9Af",
		1
	],
	"./agq.js": [
		"j7c2",
		2
	],
	"./ak.js": [
		"INzq",
		3
	],
	"./am.js": [
		"MI3y",
		4
	],
	"./ar-AE.js": [
		"8ND1",
		5
	],
	"./ar-BH.js": [
		"Z73V",
		6
	],
	"./ar-DJ.js": [
		"0H2T",
		7
	],
	"./ar-DZ.js": [
		"KtWx",
		8
	],
	"./ar-EG.js": [
		"D9uc",
		9
	],
	"./ar-EH.js": [
		"p4EN",
		10
	],
	"./ar-ER.js": [
		"22Ge",
		11
	],
	"./ar-IL.js": [
		"AxMa",
		12
	],
	"./ar-IQ.js": [
		"gXQV",
		13
	],
	"./ar-JO.js": [
		"DGn6",
		14
	],
	"./ar-KM.js": [
		"ma2l",
		15
	],
	"./ar-KW.js": [
		"D+gz",
		16
	],
	"./ar-LB.js": [
		"1vcR",
		17
	],
	"./ar-LY.js": [
		"LuJ2",
		18
	],
	"./ar-MA.js": [
		"I+ep",
		19
	],
	"./ar-MR.js": [
		"nNrS",
		20
	],
	"./ar-OM.js": [
		"po6X",
		21
	],
	"./ar-PS.js": [
		"Z1dJ",
		22
	],
	"./ar-QA.js": [
		"Fk+W",
		23
	],
	"./ar-SA.js": [
		"YyKh",
		24
	],
	"./ar-SD.js": [
		"6TJB",
		25
	],
	"./ar-SO.js": [
		"X+hI",
		26
	],
	"./ar-SS.js": [
		"rnX4",
		27
	],
	"./ar-SY.js": [
		"2oMl",
		28
	],
	"./ar-TD.js": [
		"eSPh",
		29
	],
	"./ar-TN.js": [
		"fDqj",
		30
	],
	"./ar-YE.js": [
		"JCle",
		31
	],
	"./ar.js": [
		"Brhu",
		32
	],
	"./as.js": [
		"ieMn",
		33
	],
	"./asa.js": [
		"6zsH",
		34
	],
	"./ast.js": [
		"ewFS",
		35
	],
	"./az-Cyrl.js": [
		"8XyJ",
		36
	],
	"./az-Latn.js": [
		"eYjR",
		37
	],
	"./az.js": [
		"2SR5",
		38
	],
	"./bas.js": [
		"hVrb",
		39
	],
	"./be.js": [
		"hqfL",
		40
	],
	"./bem.js": [
		"mdZl",
		41
	],
	"./bez.js": [
		"fe0N",
		42
	],
	"./bg.js": [
		"lvR3",
		43
	],
	"./bm.js": [
		"9ozZ",
		44
	],
	"./bn-IN.js": [
		"W3AY",
		45
	],
	"./bn.js": [
		"Ro9Y",
		46
	],
	"./bo-IN.js": [
		"G1ga",
		47
	],
	"./bo.js": [
		"4bol",
		48
	],
	"./br.js": [
		"FP0w",
		49
	],
	"./brx.js": [
		"4QE9",
		50
	],
	"./bs-Cyrl.js": [
		"QtgZ",
		51
	],
	"./bs-Latn.js": [
		"M17V",
		52
	],
	"./bs.js": [
		"B6Dc",
		53
	],
	"./ca-AD.js": [
		"447/",
		54
	],
	"./ca-ES-VALENCIA.js": [
		"PWPG",
		55
	],
	"./ca-FR.js": [
		"YI5u",
		56
	],
	"./ca-IT.js": [
		"pwaI",
		57
	],
	"./ca.js": [
		"hDpI",
		58
	],
	"./ccp-IN.js": [
		"A8V9",
		59
	],
	"./ccp.js": [
		"7lrK",
		60
	],
	"./ce.js": [
		"3v/F",
		61
	],
	"./ceb.js": [
		"xNSX",
		62
	],
	"./cgg.js": [
		"kRXz",
		63
	],
	"./chr.js": [
		"BE/P",
		64
	],
	"./ckb-IR.js": [
		"AE/8",
		65
	],
	"./ckb.js": [
		"XjVw",
		66
	],
	"./cs.js": [
		"4mcN",
		67
	],
	"./cu.js": [
		"Iid4",
		68
	],
	"./cy.js": [
		"HHfJ",
		69
	],
	"./da-GL.js": [
		"pHBe",
		70
	],
	"./da.js": [
		"uc9y",
		71
	],
	"./dav.js": [
		"CUCX",
		72
	],
	"./de-AT.js": [
		"mEhA",
		73
	],
	"./de-BE.js": [
		"i1+3",
		74
	],
	"./de-CH.js": [
		"o6ZO",
		75
	],
	"./de-IT.js": [
		"cpPF",
		76
	],
	"./de-LI.js": [
		"Sh8U",
		77
	],
	"./de-LU.js": [
		"7unq",
		78
	],
	"./de.js": [
		"VLs4",
		79
	],
	"./dje.js": [
		"hPCe",
		80
	],
	"./dsb.js": [
		"FPgU",
		81
	],
	"./dua.js": [
		"cHDj",
		82
	],
	"./dyo.js": [
		"5Y4/",
		83
	],
	"./dz.js": [
		"B6rC",
		84
	],
	"./ebu.js": [
		"Xxe4",
		85
	],
	"./ee-TG.js": [
		"JDY9",
		86
	],
	"./ee.js": [
		"Gdd3",
		87
	],
	"./el-CY.js": [
		"/OaS",
		88
	],
	"./el.js": [
		"yh7E",
		89
	],
	"./en-001.js": [
		"/8Q3",
		90
	],
	"./en-150.js": [
		"X5LJ",
		91
	],
	"./en-AE.js": [
		"GA/S",
		92
	],
	"./en-AG.js": [
		"bbko",
		93
	],
	"./en-AI.js": [
		"Rpk2",
		94
	],
	"./en-AS.js": [
		"FppM",
		95
	],
	"./en-AT.js": [
		"eLpQ",
		96
	],
	"./en-AU.js": [
		"5BLQ",
		97
	],
	"./en-BB.js": [
		"gNs1",
		98
	],
	"./en-BE.js": [
		"rEWA",
		99
	],
	"./en-BI.js": [
		"aVgI",
		100
	],
	"./en-BM.js": [
		"EOKf",
		101
	],
	"./en-BS.js": [
		"fgph",
		102
	],
	"./en-BW.js": [
		"//4R",
		103
	],
	"./en-BZ.js": [
		"YNjN",
		104
	],
	"./en-CA.js": [
		"YMoM",
		105
	],
	"./en-CC.js": [
		"FZAi",
		106
	],
	"./en-CH.js": [
		"7KsO",
		107
	],
	"./en-CK.js": [
		"Immv",
		108
	],
	"./en-CM.js": [
		"5CPU",
		109
	],
	"./en-CX.js": [
		"Xi2f",
		110
	],
	"./en-CY.js": [
		"wRt/",
		111
	],
	"./en-DE.js": [
		"KgxT",
		112
	],
	"./en-DG.js": [
		"U739",
		113
	],
	"./en-DK.js": [
		"pmHu",
		114
	],
	"./en-DM.js": [
		"7Ppr",
		115
	],
	"./en-ER.js": [
		"7cWR",
		116
	],
	"./en-FI.js": [
		"ZccL",
		117
	],
	"./en-FJ.js": [
		"hLDE",
		118
	],
	"./en-FK.js": [
		"G98O",
		119
	],
	"./en-FM.js": [
		"O9iM",
		120
	],
	"./en-GB.js": [
		"URqu",
		121
	],
	"./en-GD.js": [
		"3Ier",
		122
	],
	"./en-GG.js": [
		"C8u6",
		123
	],
	"./en-GH.js": [
		"mKNl",
		124
	],
	"./en-GI.js": [
		"rmao",
		125
	],
	"./en-GM.js": [
		"30Y/",
		126
	],
	"./en-GU.js": [
		"WmqI",
		127
	],
	"./en-GY.js": [
		"B+xC",
		128
	],
	"./en-HK.js": [
		"al3P",
		129
	],
	"./en-IE.js": [
		"M6z8",
		130
	],
	"./en-IL.js": [
		"A1m/",
		131
	],
	"./en-IM.js": [
		"aJqY",
		132
	],
	"./en-IN.js": [
		"zCzG",
		133
	],
	"./en-IO.js": [
		"lebT",
		134
	],
	"./en-JE.js": [
		"YebY",
		135
	],
	"./en-JM.js": [
		"IFTf",
		136
	],
	"./en-KE.js": [
		"uEQU",
		137
	],
	"./en-KI.js": [
		"toeh",
		138
	],
	"./en-KN.js": [
		"ls1H",
		139
	],
	"./en-KY.js": [
		"0PSp",
		140
	],
	"./en-LC.js": [
		"3UYl",
		141
	],
	"./en-LR.js": [
		"sxHb",
		142
	],
	"./en-LS.js": [
		"rUse",
		143
	],
	"./en-MG.js": [
		"TJBA",
		144
	],
	"./en-MH.js": [
		"F4pp",
		145
	],
	"./en-MO.js": [
		"wYUg",
		146
	],
	"./en-MP.js": [
		"1yuz",
		147
	],
	"./en-MS.js": [
		"2p29",
		148
	],
	"./en-MT.js": [
		"t4C3",
		149
	],
	"./en-MU.js": [
		"2K2R",
		150
	],
	"./en-MW.js": [
		"Oz4A",
		151
	],
	"./en-MY.js": [
		"/OWm",
		152
	],
	"./en-NA.js": [
		"fo91",
		153
	],
	"./en-NF.js": [
		"jV2U",
		154
	],
	"./en-NG.js": [
		"dszn",
		155
	],
	"./en-NL.js": [
		"yVAP",
		156
	],
	"./en-NR.js": [
		"5moO",
		157
	],
	"./en-NU.js": [
		"9l9G",
		158
	],
	"./en-NZ.js": [
		"GA+V",
		159
	],
	"./en-PG.js": [
		"iP1P",
		160
	],
	"./en-PH.js": [
		"u6od",
		161
	],
	"./en-PK.js": [
		"yOH2",
		162
	],
	"./en-PN.js": [
		"3oIj",
		163
	],
	"./en-PR.js": [
		"ggzk",
		164
	],
	"./en-PW.js": [
		"eR0z",
		165
	],
	"./en-RW.js": [
		"z/3j",
		166
	],
	"./en-SB.js": [
		"06BO",
		167
	],
	"./en-SC.js": [
		"moWg",
		168
	],
	"./en-SD.js": [
		"PY63",
		169
	],
	"./en-SE.js": [
		"+vvk",
		170
	],
	"./en-SG.js": [
		"Tdd6",
		171
	],
	"./en-SH.js": [
		"6hJO",
		172
	],
	"./en-SI.js": [
		"Ezpc",
		173
	],
	"./en-SL.js": [
		"IFwp",
		174
	],
	"./en-SS.js": [
		"3/qH",
		175
	],
	"./en-SX.js": [
		"RyKu",
		176
	],
	"./en-SZ.js": [
		"YbTt",
		177
	],
	"./en-TC.js": [
		"sAmz",
		178
	],
	"./en-TK.js": [
		"u/eU",
		179
	],
	"./en-TO.js": [
		"Xczp",
		180
	],
	"./en-TT.js": [
		"nbfB",
		181
	],
	"./en-TV.js": [
		"qr4R",
		182
	],
	"./en-TZ.js": [
		"daTd",
		183
	],
	"./en-UG.js": [
		"fC03",
		184
	],
	"./en-UM.js": [
		"vpJs",
		185
	],
	"./en-US-POSIX.js": [
		"vYhH",
		186
	],
	"./en-VC.js": [
		"PBt8",
		187
	],
	"./en-VG.js": [
		"kfOa",
		188
	],
	"./en-VI.js": [
		"DjJL",
		189
	],
	"./en-VU.js": [
		"g+34",
		190
	],
	"./en-WS.js": [
		"Hh1x",
		191
	],
	"./en-ZA.js": [
		"jMh0",
		192
	],
	"./en-ZM.js": [
		"SGiD",
		193
	],
	"./en-ZW.js": [
		"yoLf",
		194
	],
	"./en.js": [
		"tAZD",
		195
	],
	"./eo.js": [
		"djfw",
		196
	],
	"./es-419.js": [
		"UPrT",
		197
	],
	"./es-AR.js": [
		"ATIY",
		198
	],
	"./es-BO.js": [
		"YozJ",
		199
	],
	"./es-BR.js": [
		"VOmr",
		200
	],
	"./es-BZ.js": [
		"CjHq",
		201
	],
	"./es-CL.js": [
		"OhWr",
		202
	],
	"./es-CO.js": [
		"AQDP",
		203
	],
	"./es-CR.js": [
		"Mnev",
		204
	],
	"./es-CU.js": [
		"hC3d",
		205
	],
	"./es-DO.js": [
		"xEG8",
		206
	],
	"./es-EA.js": [
		"0z92",
		207
	],
	"./es-EC.js": [
		"vkF9",
		208
	],
	"./es-GQ.js": [
		"5tZv",
		209
	],
	"./es-GT.js": [
		"mkcm",
		210
	],
	"./es-HN.js": [
		"y/n1",
		211
	],
	"./es-IC.js": [
		"EInp",
		212
	],
	"./es-MX.js": [
		"LMmM",
		213
	],
	"./es-NI.js": [
		"lZ35",
		214
	],
	"./es-PA.js": [
		"xdwn",
		215
	],
	"./es-PE.js": [
		"gnpi",
		216
	],
	"./es-PH.js": [
		"RhlC",
		217
	],
	"./es-PR.js": [
		"YoQy",
		218
	],
	"./es-PY.js": [
		"yMB1",
		219
	],
	"./es-SV.js": [
		"ruNf",
		220
	],
	"./es-US.js": [
		"7Jl0",
		221
	],
	"./es-UY.js": [
		"0i5Y",
		222
	],
	"./es-VE.js": [
		"qRsU",
		223
	],
	"./es.js": [
		"2Yyj",
		224
	],
	"./et.js": [
		"7q9D",
		225
	],
	"./eu.js": [
		"6wxi",
		226
	],
	"./ewo.js": [
		"OtvY",
		227
	],
	"./extra/af-NA.js": [
		"hYtU",
		228
	],
	"./extra/af.js": [
		"IIcj",
		229
	],
	"./extra/agq.js": [
		"S9wO",
		230
	],
	"./extra/ak.js": [
		"vEww",
		231
	],
	"./extra/am.js": [
		"Ddvw",
		232
	],
	"./extra/ar-AE.js": [
		"mCLh",
		233
	],
	"./extra/ar-BH.js": [
		"HawE",
		234
	],
	"./extra/ar-DJ.js": [
		"U9cH",
		235
	],
	"./extra/ar-DZ.js": [
		"owxE",
		236
	],
	"./extra/ar-EG.js": [
		"+DXe",
		237
	],
	"./extra/ar-EH.js": [
		"UTt0",
		238
	],
	"./extra/ar-ER.js": [
		"yn2m",
		239
	],
	"./extra/ar-IL.js": [
		"4u6J",
		240
	],
	"./extra/ar-IQ.js": [
		"xAkz",
		241
	],
	"./extra/ar-JO.js": [
		"+UNp",
		242
	],
	"./extra/ar-KM.js": [
		"2M3o",
		243
	],
	"./extra/ar-KW.js": [
		"/0pG",
		244
	],
	"./extra/ar-LB.js": [
		"yH6b",
		245
	],
	"./extra/ar-LY.js": [
		"VXLv",
		246
	],
	"./extra/ar-MA.js": [
		"qtdm",
		247
	],
	"./extra/ar-MR.js": [
		"Ig6o",
		248
	],
	"./extra/ar-OM.js": [
		"TGIQ",
		249
	],
	"./extra/ar-PS.js": [
		"rMm/",
		250
	],
	"./extra/ar-QA.js": [
		"GLqq",
		251
	],
	"./extra/ar-SA.js": [
		"YWRM",
		252
	],
	"./extra/ar-SD.js": [
		"PqF0",
		253
	],
	"./extra/ar-SO.js": [
		"EeBV",
		254
	],
	"./extra/ar-SS.js": [
		"IO2u",
		255
	],
	"./extra/ar-SY.js": [
		"glVw",
		256
	],
	"./extra/ar-TD.js": [
		"zSZU",
		257
	],
	"./extra/ar-TN.js": [
		"pSnO",
		258
	],
	"./extra/ar-YE.js": [
		"sDWR",
		259
	],
	"./extra/ar.js": [
		"o6XD",
		260
	],
	"./extra/as.js": [
		"U1gK",
		261
	],
	"./extra/asa.js": [
		"cmBC",
		262
	],
	"./extra/ast.js": [
		"1Twk",
		263
	],
	"./extra/az-Cyrl.js": [
		"sh+p",
		264
	],
	"./extra/az-Latn.js": [
		"xwx9",
		265
	],
	"./extra/az.js": [
		"hhSf",
		266
	],
	"./extra/bas.js": [
		"ojm1",
		267
	],
	"./extra/be.js": [
		"VZTr",
		268
	],
	"./extra/bem.js": [
		"wANz",
		269
	],
	"./extra/bez.js": [
		"AP+c",
		270
	],
	"./extra/bg.js": [
		"vAAp",
		271
	],
	"./extra/bm.js": [
		"9cZ8",
		272
	],
	"./extra/bn-IN.js": [
		"2fVB",
		273
	],
	"./extra/bn.js": [
		"R1fJ",
		274
	],
	"./extra/bo-IN.js": [
		"YLLI",
		275
	],
	"./extra/bo.js": [
		"RKAX",
		276
	],
	"./extra/br.js": [
		"MymG",
		277
	],
	"./extra/brx.js": [
		"xQw0",
		278
	],
	"./extra/bs-Cyrl.js": [
		"vOzY",
		279
	],
	"./extra/bs-Latn.js": [
		"niei",
		280
	],
	"./extra/bs.js": [
		"1j/U",
		281
	],
	"./extra/ca-AD.js": [
		"UVx0",
		282
	],
	"./extra/ca-ES-VALENCIA.js": [
		"rj4V",
		283
	],
	"./extra/ca-FR.js": [
		"R07c",
		284
	],
	"./extra/ca-IT.js": [
		"usZi",
		285
	],
	"./extra/ca.js": [
		"1yAI",
		286
	],
	"./extra/ccp-IN.js": [
		"P2Sn",
		287
	],
	"./extra/ccp.js": [
		"YyqB",
		288
	],
	"./extra/ce.js": [
		"jsvH",
		289
	],
	"./extra/ceb.js": [
		"NRWv",
		290
	],
	"./extra/cgg.js": [
		"DOIv",
		291
	],
	"./extra/chr.js": [
		"4rh3",
		292
	],
	"./extra/ckb-IR.js": [
		"thdz",
		293
	],
	"./extra/ckb.js": [
		"w+P4",
		294
	],
	"./extra/cs.js": [
		"lStF",
		295
	],
	"./extra/cu.js": [
		"VB4F",
		296
	],
	"./extra/cy.js": [
		"F/ia",
		297
	],
	"./extra/da-GL.js": [
		"4bXR",
		298
	],
	"./extra/da.js": [
		"0zBH",
		299
	],
	"./extra/dav.js": [
		"SA5X",
		300
	],
	"./extra/de-AT.js": [
		"Mwfd",
		301
	],
	"./extra/de-BE.js": [
		"DCFZ",
		302
	],
	"./extra/de-CH.js": [
		"Ugms",
		303
	],
	"./extra/de-IT.js": [
		"4ktE",
		304
	],
	"./extra/de-LI.js": [
		"MNly",
		305
	],
	"./extra/de-LU.js": [
		"IlhB",
		306
	],
	"./extra/de.js": [
		"qnrZ",
		307
	],
	"./extra/dje.js": [
		"1rb0",
		308
	],
	"./extra/dsb.js": [
		"zHKi",
		309
	],
	"./extra/dua.js": [
		"vb8/",
		310
	],
	"./extra/dyo.js": [
		"Dt3x",
		311
	],
	"./extra/dz.js": [
		"qIJK",
		312
	],
	"./extra/ebu.js": [
		"ezyr",
		313
	],
	"./extra/ee-TG.js": [
		"VVk/",
		314
	],
	"./extra/ee.js": [
		"ireO",
		315
	],
	"./extra/el-CY.js": [
		"Nulp",
		316
	],
	"./extra/el.js": [
		"HNmh",
		317
	],
	"./extra/en-001.js": [
		"wIXQ",
		318
	],
	"./extra/en-150.js": [
		"Of90",
		319
	],
	"./extra/en-AE.js": [
		"xgeQ",
		320
	],
	"./extra/en-AG.js": [
		"dgAm",
		321
	],
	"./extra/en-AI.js": [
		"sMby",
		322
	],
	"./extra/en-AS.js": [
		"KnIw",
		323
	],
	"./extra/en-AT.js": [
		"ETbZ",
		324
	],
	"./extra/en-AU.js": [
		"iqwj",
		325
	],
	"./extra/en-BB.js": [
		"c+Il",
		326
	],
	"./extra/en-BE.js": [
		"zLau",
		327
	],
	"./extra/en-BI.js": [
		"88Bo",
		328
	],
	"./extra/en-BM.js": [
		"dL4k",
		329
	],
	"./extra/en-BS.js": [
		"32cH",
		330
	],
	"./extra/en-BW.js": [
		"h1cP",
		331
	],
	"./extra/en-BZ.js": [
		"VP/b",
		332
	],
	"./extra/en-CA.js": [
		"SFAi",
		333
	],
	"./extra/en-CC.js": [
		"l9h+",
		334
	],
	"./extra/en-CH.js": [
		"Mf+0",
		335
	],
	"./extra/en-CK.js": [
		"T5lX",
		336
	],
	"./extra/en-CM.js": [
		"2OPG",
		337
	],
	"./extra/en-CX.js": [
		"2AVP",
		338
	],
	"./extra/en-CY.js": [
		"4xD0",
		339
	],
	"./extra/en-DE.js": [
		"9MHh",
		340
	],
	"./extra/en-DG.js": [
		"jJ+Z",
		341
	],
	"./extra/en-DK.js": [
		"8WO7",
		342
	],
	"./extra/en-DM.js": [
		"1hlC",
		343
	],
	"./extra/en-ER.js": [
		"dDt7",
		344
	],
	"./extra/en-FI.js": [
		"2gsv",
		345
	],
	"./extra/en-FJ.js": [
		"1dKF",
		346
	],
	"./extra/en-FK.js": [
		"2GSJ",
		347
	],
	"./extra/en-FM.js": [
		"DmUV",
		348
	],
	"./extra/en-GB.js": [
		"FMBS",
		349
	],
	"./extra/en-GD.js": [
		"ZdpP",
		350
	],
	"./extra/en-GG.js": [
		"oVa3",
		351
	],
	"./extra/en-GH.js": [
		"gK3R",
		352
	],
	"./extra/en-GI.js": [
		"8kgx",
		353
	],
	"./extra/en-GM.js": [
		"P9WP",
		354
	],
	"./extra/en-GU.js": [
		"4/5u",
		355
	],
	"./extra/en-GY.js": [
		"3pA1",
		356
	],
	"./extra/en-HK.js": [
		"2JdK",
		357
	],
	"./extra/en-IE.js": [
		"MU3D",
		358
	],
	"./extra/en-IL.js": [
		"zG7N",
		359
	],
	"./extra/en-IM.js": [
		"Xk7U",
		360
	],
	"./extra/en-IN.js": [
		"x5gr",
		361
	],
	"./extra/en-IO.js": [
		"eVjI",
		362
	],
	"./extra/en-JE.js": [
		"jnwx",
		363
	],
	"./extra/en-JM.js": [
		"OCDJ",
		364
	],
	"./extra/en-KE.js": [
		"ZSln",
		365
	],
	"./extra/en-KI.js": [
		"9cTs",
		366
	],
	"./extra/en-KN.js": [
		"agad",
		367
	],
	"./extra/en-KY.js": [
		"9k0i",
		368
	],
	"./extra/en-LC.js": [
		"E4Jm",
		369
	],
	"./extra/en-LR.js": [
		"5x7+",
		370
	],
	"./extra/en-LS.js": [
		"t+OO",
		371
	],
	"./extra/en-MG.js": [
		"yw19",
		372
	],
	"./extra/en-MH.js": [
		"qXCK",
		373
	],
	"./extra/en-MO.js": [
		"VwVg",
		374
	],
	"./extra/en-MP.js": [
		"qBey",
		375
	],
	"./extra/en-MS.js": [
		"Kkz/",
		376
	],
	"./extra/en-MT.js": [
		"fQjt",
		377
	],
	"./extra/en-MU.js": [
		"FupT",
		378
	],
	"./extra/en-MW.js": [
		"DDie",
		379
	],
	"./extra/en-MY.js": [
		"6dVC",
		380
	],
	"./extra/en-NA.js": [
		"XHaK",
		381
	],
	"./extra/en-NF.js": [
		"RORK",
		382
	],
	"./extra/en-NG.js": [
		"vWkz",
		383
	],
	"./extra/en-NL.js": [
		"etRH",
		384
	],
	"./extra/en-NR.js": [
		"NeS8",
		385
	],
	"./extra/en-NU.js": [
		"CGdj",
		386
	],
	"./extra/en-NZ.js": [
		"N9kZ",
		387
	],
	"./extra/en-PG.js": [
		"ZCl9",
		388
	],
	"./extra/en-PH.js": [
		"oK2x",
		389
	],
	"./extra/en-PK.js": [
		"FBHa",
		390
	],
	"./extra/en-PN.js": [
		"2WFo",
		391
	],
	"./extra/en-PR.js": [
		"PQPR",
		392
	],
	"./extra/en-PW.js": [
		"BTr7",
		393
	],
	"./extra/en-RW.js": [
		"G6D6",
		394
	],
	"./extra/en-SB.js": [
		"PSOk",
		395
	],
	"./extra/en-SC.js": [
		"0DKR",
		396
	],
	"./extra/en-SD.js": [
		"IRuU",
		397
	],
	"./extra/en-SE.js": [
		"kf6i",
		398
	],
	"./extra/en-SG.js": [
		"NIIX",
		399
	],
	"./extra/en-SH.js": [
		"psnK",
		400
	],
	"./extra/en-SI.js": [
		"91t2",
		401
	],
	"./extra/en-SL.js": [
		"uvvr",
		402
	],
	"./extra/en-SS.js": [
		"zl7M",
		403
	],
	"./extra/en-SX.js": [
		"5k0W",
		404
	],
	"./extra/en-SZ.js": [
		"TNil",
		405
	],
	"./extra/en-TC.js": [
		"o/+n",
		406
	],
	"./extra/en-TK.js": [
		"aRPj",
		407
	],
	"./extra/en-TO.js": [
		"fhqM",
		408
	],
	"./extra/en-TT.js": [
		"Lq4a",
		409
	],
	"./extra/en-TV.js": [
		"w+JF",
		410
	],
	"./extra/en-TZ.js": [
		"3aC6",
		411
	],
	"./extra/en-UG.js": [
		"8Fhi",
		412
	],
	"./extra/en-UM.js": [
		"X9e+",
		413
	],
	"./extra/en-US-POSIX.js": [
		"J9BQ",
		414
	],
	"./extra/en-VC.js": [
		"0z4Y",
		415
	],
	"./extra/en-VG.js": [
		"xgl3",
		416
	],
	"./extra/en-VI.js": [
		"8uVk",
		417
	],
	"./extra/en-VU.js": [
		"1C0I",
		418
	],
	"./extra/en-WS.js": [
		"si8p",
		419
	],
	"./extra/en-ZA.js": [
		"MKWU",
		420
	],
	"./extra/en-ZM.js": [
		"zagS",
		421
	],
	"./extra/en-ZW.js": [
		"2Qm+",
		422
	],
	"./extra/en.js": [
		"uiD2",
		423
	],
	"./extra/eo.js": [
		"dNpU",
		424
	],
	"./extra/es-419.js": [
		"lAyh",
		425
	],
	"./extra/es-AR.js": [
		"vo+5",
		426
	],
	"./extra/es-BO.js": [
		"Gous",
		427
	],
	"./extra/es-BR.js": [
		"1gFY",
		428
	],
	"./extra/es-BZ.js": [
		"wiMa",
		429
	],
	"./extra/es-CL.js": [
		"QgUb",
		430
	],
	"./extra/es-CO.js": [
		"RIwl",
		431
	],
	"./extra/es-CR.js": [
		"nV4Q",
		432
	],
	"./extra/es-CU.js": [
		"wl0F",
		433
	],
	"./extra/es-DO.js": [
		"pwsj",
		434
	],
	"./extra/es-EA.js": [
		"os6F",
		435
	],
	"./extra/es-EC.js": [
		"fLtj",
		436
	],
	"./extra/es-GQ.js": [
		"jWna",
		437
	],
	"./extra/es-GT.js": [
		"cn/z",
		438
	],
	"./extra/es-HN.js": [
		"iiXj",
		439
	],
	"./extra/es-IC.js": [
		"93H5",
		440
	],
	"./extra/es-MX.js": [
		"GYp4",
		441
	],
	"./extra/es-NI.js": [
		"pOKq",
		442
	],
	"./extra/es-PA.js": [
		"lYum",
		443
	],
	"./extra/es-PE.js": [
		"4r9z",
		444
	],
	"./extra/es-PH.js": [
		"Vd9x",
		445
	],
	"./extra/es-PR.js": [
		"xG03",
		446
	],
	"./extra/es-PY.js": [
		"sTdP",
		447
	],
	"./extra/es-SV.js": [
		"HK6M",
		448
	],
	"./extra/es-US.js": [
		"OXn/",
		449
	],
	"./extra/es-UY.js": [
		"Dc0P",
		450
	],
	"./extra/es-VE.js": [
		"2hkO",
		451
	],
	"./extra/es.js": [
		"PgMp",
		452
	],
	"./extra/et.js": [
		"AKOi",
		453
	],
	"./extra/eu.js": [
		"hMRz",
		454
	],
	"./extra/ewo.js": [
		"/HvP",
		455
	],
	"./extra/fa-AF.js": [
		"pQ/w",
		456
	],
	"./extra/fa.js": [
		"sd+T",
		457
	],
	"./extra/ff-CM.js": [
		"ZGDJ",
		458
	],
	"./extra/ff-GN.js": [
		"teT2",
		459
	],
	"./extra/ff-Latn-BF.js": [
		"UYhH",
		460
	],
	"./extra/ff-Latn-CM.js": [
		"Osjl",
		461
	],
	"./extra/ff-Latn-GH.js": [
		"/9NJ",
		462
	],
	"./extra/ff-Latn-GM.js": [
		"3pNq",
		463
	],
	"./extra/ff-Latn-GN.js": [
		"tayG",
		464
	],
	"./extra/ff-Latn-GW.js": [
		"q8S6",
		465
	],
	"./extra/ff-Latn-LR.js": [
		"6yOo",
		466
	],
	"./extra/ff-Latn-MR.js": [
		"j64R",
		467
	],
	"./extra/ff-Latn-NE.js": [
		"vjZv",
		468
	],
	"./extra/ff-Latn-NG.js": [
		"AJBN",
		469
	],
	"./extra/ff-Latn-SL.js": [
		"NRX9",
		470
	],
	"./extra/ff-Latn.js": [
		"3Mge",
		471
	],
	"./extra/ff-MR.js": [
		"eiE+",
		472
	],
	"./extra/ff.js": [
		"aJ5A",
		473
	],
	"./extra/fi.js": [
		"PfGA",
		474
	],
	"./extra/fil.js": [
		"EIv8",
		475
	],
	"./extra/fo-DK.js": [
		"HTo0",
		476
	],
	"./extra/fo.js": [
		"J/4B",
		477
	],
	"./extra/fr-BE.js": [
		"s1Z2",
		478
	],
	"./extra/fr-BF.js": [
		"S8C3",
		479
	],
	"./extra/fr-BI.js": [
		"m7RG",
		480
	],
	"./extra/fr-BJ.js": [
		"V6yX",
		481
	],
	"./extra/fr-BL.js": [
		"7T9H",
		482
	],
	"./extra/fr-CA.js": [
		"9Olu",
		483
	],
	"./extra/fr-CD.js": [
		"FD1d",
		484
	],
	"./extra/fr-CF.js": [
		"8AUX",
		485
	],
	"./extra/fr-CG.js": [
		"FHhZ",
		486
	],
	"./extra/fr-CH.js": [
		"h1ks",
		487
	],
	"./extra/fr-CI.js": [
		"uVGg",
		488
	],
	"./extra/fr-CM.js": [
		"ztB2",
		489
	],
	"./extra/fr-DJ.js": [
		"F3RG",
		490
	],
	"./extra/fr-DZ.js": [
		"Fk+3",
		491
	],
	"./extra/fr-GA.js": [
		"veov",
		492
	],
	"./extra/fr-GF.js": [
		"NJfy",
		493
	],
	"./extra/fr-GN.js": [
		"H6ho",
		494
	],
	"./extra/fr-GP.js": [
		"iwO4",
		495
	],
	"./extra/fr-GQ.js": [
		"ITXp",
		496
	],
	"./extra/fr-HT.js": [
		"uxCV",
		497
	],
	"./extra/fr-KM.js": [
		"nLv/",
		498
	],
	"./extra/fr-LU.js": [
		"uUUA",
		499
	],
	"./extra/fr-MA.js": [
		"u6Q+",
		500
	],
	"./extra/fr-MC.js": [
		"hkCd",
		501
	],
	"./extra/fr-MF.js": [
		"pvzn",
		502
	],
	"./extra/fr-MG.js": [
		"xwlP",
		503
	],
	"./extra/fr-ML.js": [
		"Ozqd",
		504
	],
	"./extra/fr-MQ.js": [
		"2L1k",
		505
	],
	"./extra/fr-MR.js": [
		"x0p4",
		506
	],
	"./extra/fr-MU.js": [
		"ng5d",
		507
	],
	"./extra/fr-NC.js": [
		"eSaf",
		508
	],
	"./extra/fr-NE.js": [
		"f55c",
		509
	],
	"./extra/fr-PF.js": [
		"Za8o",
		510
	],
	"./extra/fr-PM.js": [
		"udBM",
		511
	],
	"./extra/fr-RE.js": [
		"ajcY",
		512
	],
	"./extra/fr-RW.js": [
		"Vmbd",
		513
	],
	"./extra/fr-SC.js": [
		"R8HP",
		514
	],
	"./extra/fr-SN.js": [
		"HORV",
		515
	],
	"./extra/fr-SY.js": [
		"cXJe",
		516
	],
	"./extra/fr-TD.js": [
		"yQfR",
		517
	],
	"./extra/fr-TG.js": [
		"EDoc",
		518
	],
	"./extra/fr-TN.js": [
		"oAV8",
		519
	],
	"./extra/fr-VU.js": [
		"uopA",
		520
	],
	"./extra/fr-WF.js": [
		"7dx+",
		521
	],
	"./extra/fr-YT.js": [
		"DuaQ",
		522
	],
	"./extra/fr.js": [
		"On8d",
		523
	],
	"./extra/fur.js": [
		"6SdT",
		524
	],
	"./extra/fy.js": [
		"Korv",
		525
	],
	"./extra/ga-GB.js": [
		"MYRo",
		526
	],
	"./extra/ga.js": [
		"8/4H",
		527
	],
	"./extra/gd.js": [
		"MG1f",
		528
	],
	"./extra/gl.js": [
		"J0Yo",
		529
	],
	"./extra/gsw-FR.js": [
		"9zEi",
		530
	],
	"./extra/gsw-LI.js": [
		"W+1R",
		531
	],
	"./extra/gsw.js": [
		"/e7E",
		532
	],
	"./extra/gu.js": [
		"E3Dv",
		533
	],
	"./extra/guz.js": [
		"/Mpy",
		534
	],
	"./extra/gv.js": [
		"2dgn",
		535
	],
	"./extra/ha-GH.js": [
		"UecE",
		536
	],
	"./extra/ha-NE.js": [
		"Batj",
		537
	],
	"./extra/ha.js": [
		"OGFs",
		538
	],
	"./extra/haw.js": [
		"isSs",
		539
	],
	"./extra/he.js": [
		"y0QQ",
		540
	],
	"./extra/hi.js": [
		"Ysyp",
		541
	],
	"./extra/hr-BA.js": [
		"0bOf",
		542
	],
	"./extra/hr.js": [
		"av0a",
		543
	],
	"./extra/hsb.js": [
		"ScDv",
		544
	],
	"./extra/hu.js": [
		"/umd",
		545
	],
	"./extra/hy.js": [
		"EvMn",
		546
	],
	"./extra/ia.js": [
		"2UHc",
		547
	],
	"./extra/id.js": [
		"zoxX",
		548
	],
	"./extra/ig.js": [
		"LRnX",
		549
	],
	"./extra/ii.js": [
		"kEx6",
		550
	],
	"./extra/is.js": [
		"9o2p",
		551
	],
	"./extra/it-CH.js": [
		"+c1K",
		552
	],
	"./extra/it-SM.js": [
		"EuS/",
		553
	],
	"./extra/it-VA.js": [
		"l1Q4",
		554
	],
	"./extra/it.js": [
		"F5kq",
		555
	],
	"./extra/ja.js": [
		"WDG2",
		556
	],
	"./extra/jgo.js": [
		"uXHl",
		557
	],
	"./extra/jmc.js": [
		"CS6A",
		558
	],
	"./extra/jv.js": [
		"0qAF",
		559
	],
	"./extra/ka.js": [
		"ry5H",
		560
	],
	"./extra/kab.js": [
		"hcM1",
		561
	],
	"./extra/kam.js": [
		"fnLT",
		562
	],
	"./extra/kde.js": [
		"2FiE",
		563
	],
	"./extra/kea.js": [
		"CuuS",
		564
	],
	"./extra/khq.js": [
		"niuD",
		565
	],
	"./extra/ki.js": [
		"EIgv",
		566
	],
	"./extra/kk.js": [
		"73m9",
		567
	],
	"./extra/kkj.js": [
		"5p3T",
		568
	],
	"./extra/kl.js": [
		"O2FO",
		569
	],
	"./extra/kln.js": [
		"7YUV",
		570
	],
	"./extra/km.js": [
		"nySY",
		571
	],
	"./extra/kn.js": [
		"dQXu",
		572
	],
	"./extra/ko-KP.js": [
		"P1K2",
		573
	],
	"./extra/ko.js": [
		"G5dk",
		574
	],
	"./extra/kok.js": [
		"fhyQ",
		575
	],
	"./extra/ks.js": [
		"1h2t",
		576
	],
	"./extra/ksb.js": [
		"b58B",
		577
	],
	"./extra/ksf.js": [
		"Qnuz",
		578
	],
	"./extra/ksh.js": [
		"zw33",
		579
	],
	"./extra/ku.js": [
		"Yg2f",
		580
	],
	"./extra/kw.js": [
		"v0Ge",
		581
	],
	"./extra/ky.js": [
		"t2kw",
		582
	],
	"./extra/lag.js": [
		"xzVU",
		583
	],
	"./extra/lb.js": [
		"CXZq",
		584
	],
	"./extra/lg.js": [
		"bRtk",
		585
	],
	"./extra/lkt.js": [
		"llmu",
		586
	],
	"./extra/ln-AO.js": [
		"Ko11",
		587
	],
	"./extra/ln-CF.js": [
		"lX9k",
		588
	],
	"./extra/ln-CG.js": [
		"awLZ",
		589
	],
	"./extra/ln.js": [
		"YLOg",
		590
	],
	"./extra/lo.js": [
		"JccL",
		591
	],
	"./extra/lrc-IQ.js": [
		"+Jpc",
		592
	],
	"./extra/lrc.js": [
		"vGrB",
		593
	],
	"./extra/lt.js": [
		"baMU",
		594
	],
	"./extra/lu.js": [
		"0/1i",
		595
	],
	"./extra/luo.js": [
		"koTP",
		596
	],
	"./extra/luy.js": [
		"rbyl",
		597
	],
	"./extra/lv.js": [
		"SKGy",
		598
	],
	"./extra/mas-TZ.js": [
		"x5ce",
		599
	],
	"./extra/mas.js": [
		"yYcN",
		600
	],
	"./extra/mer.js": [
		"QvYF",
		601
	],
	"./extra/mfe.js": [
		"nAxK",
		602
	],
	"./extra/mg.js": [
		"UcOF",
		603
	],
	"./extra/mgh.js": [
		"IiZ8",
		604
	],
	"./extra/mgo.js": [
		"c72Q",
		605
	],
	"./extra/mi.js": [
		"hPVH",
		606
	],
	"./extra/mk.js": [
		"s4Ep",
		607
	],
	"./extra/ml.js": [
		"15oy",
		608
	],
	"./extra/mn.js": [
		"aTnr",
		609
	],
	"./extra/mr.js": [
		"A2iF",
		610
	],
	"./extra/ms-BN.js": [
		"kBZl",
		611
	],
	"./extra/ms-SG.js": [
		"Q088",
		612
	],
	"./extra/ms.js": [
		"LVwY",
		613
	],
	"./extra/mt.js": [
		"pplT",
		614
	],
	"./extra/mua.js": [
		"73cb",
		615
	],
	"./extra/my.js": [
		"HbEo",
		616
	],
	"./extra/mzn.js": [
		"Svmh",
		617
	],
	"./extra/naq.js": [
		"gl/3",
		618
	],
	"./extra/nb-SJ.js": [
		"YdMD",
		619
	],
	"./extra/nb.js": [
		"tf4B",
		620
	],
	"./extra/nd.js": [
		"66ua",
		621
	],
	"./extra/nds-NL.js": [
		"Ia3z",
		622
	],
	"./extra/nds.js": [
		"W9/3",
		623
	],
	"./extra/ne-IN.js": [
		"miTR",
		624
	],
	"./extra/ne.js": [
		"lr2z",
		625
	],
	"./extra/nl-AW.js": [
		"Wmy2",
		626
	],
	"./extra/nl-BE.js": [
		"ey7p",
		627
	],
	"./extra/nl-BQ.js": [
		"Z146",
		628
	],
	"./extra/nl-CW.js": [
		"nkT8",
		629
	],
	"./extra/nl-SR.js": [
		"xLHm",
		630
	],
	"./extra/nl-SX.js": [
		"G7ts",
		631
	],
	"./extra/nl.js": [
		"dBbh",
		632
	],
	"./extra/nmg.js": [
		"m0ss",
		633
	],
	"./extra/nn.js": [
		"ljA2",
		634
	],
	"./extra/nnh.js": [
		"+3qX",
		635
	],
	"./extra/nus.js": [
		"LtQJ",
		636
	],
	"./extra/nyn.js": [
		"zI7Z",
		637
	],
	"./extra/om-KE.js": [
		"BRaJ",
		638
	],
	"./extra/om.js": [
		"q8+m",
		639
	],
	"./extra/or.js": [
		"l5HY",
		640
	],
	"./extra/os-RU.js": [
		"NlP/",
		641
	],
	"./extra/os.js": [
		"IVSQ",
		642
	],
	"./extra/pa-Arab.js": [
		"kMhP",
		643
	],
	"./extra/pa-Guru.js": [
		"ubft",
		644
	],
	"./extra/pa.js": [
		"tCMH",
		645
	],
	"./extra/pl.js": [
		"Qa7h",
		646
	],
	"./extra/prg.js": [
		"Rnyv",
		647
	],
	"./extra/ps-PK.js": [
		"vtnV",
		648
	],
	"./extra/ps.js": [
		"6IHV",
		649
	],
	"./extra/pt-AO.js": [
		"x+Z4",
		650
	],
	"./extra/pt-CH.js": [
		"D0Vs",
		651
	],
	"./extra/pt-CV.js": [
		"aUTq",
		652
	],
	"./extra/pt-GQ.js": [
		"8itg",
		653
	],
	"./extra/pt-GW.js": [
		"KfSy",
		654
	],
	"./extra/pt-LU.js": [
		"P5FD",
		655
	],
	"./extra/pt-MO.js": [
		"0+3E",
		656
	],
	"./extra/pt-MZ.js": [
		"NW8F",
		657
	],
	"./extra/pt-PT.js": [
		"IKcV",
		658
	],
	"./extra/pt-ST.js": [
		"W6sk",
		659
	],
	"./extra/pt-TL.js": [
		"1SyY",
		660
	],
	"./extra/pt.js": [
		"M9hh",
		661
	],
	"./extra/qu-BO.js": [
		"Pb6U",
		662
	],
	"./extra/qu-EC.js": [
		"nCfn",
		663
	],
	"./extra/qu.js": [
		"XdpL",
		664
	],
	"./extra/rm.js": [
		"bzLC",
		665
	],
	"./extra/rn.js": [
		"M7nf",
		666
	],
	"./extra/ro-MD.js": [
		"zG6n",
		667
	],
	"./extra/ro.js": [
		"uuqu",
		668
	],
	"./extra/rof.js": [
		"0KiO",
		669
	],
	"./extra/root.js": [
		"XFwA",
		670
	],
	"./extra/ru-BY.js": [
		"LLiU",
		671
	],
	"./extra/ru-KG.js": [
		"4V30",
		672
	],
	"./extra/ru-KZ.js": [
		"0e4k",
		673
	],
	"./extra/ru-MD.js": [
		"Lcjd",
		674
	],
	"./extra/ru-UA.js": [
		"D+FL",
		675
	],
	"./extra/ru.js": [
		"BWy3",
		676
	],
	"./extra/rw.js": [
		"vnGC",
		677
	],
	"./extra/rwk.js": [
		"+lSk",
		678
	],
	"./extra/sah.js": [
		"Hxx7",
		679
	],
	"./extra/saq.js": [
		"Supg",
		680
	],
	"./extra/sbp.js": [
		"p7jE",
		681
	],
	"./extra/sd.js": [
		"RbN0",
		682
	],
	"./extra/se-FI.js": [
		"d6iD",
		683
	],
	"./extra/se-SE.js": [
		"7OoD",
		684
	],
	"./extra/se.js": [
		"U13u",
		685
	],
	"./extra/seh.js": [
		"Oq8u",
		686
	],
	"./extra/ses.js": [
		"Lw7t",
		687
	],
	"./extra/sg.js": [
		"oehv",
		688
	],
	"./extra/shi-Latn.js": [
		"6pg7",
		689
	],
	"./extra/shi-Tfng.js": [
		"yBte",
		690
	],
	"./extra/shi.js": [
		"KRxu",
		691
	],
	"./extra/si.js": [
		"9Zl3",
		692
	],
	"./extra/sk.js": [
		"xHfm",
		693
	],
	"./extra/sl.js": [
		"RSHF",
		694
	],
	"./extra/smn.js": [
		"5+yP",
		695
	],
	"./extra/sn.js": [
		"2kDZ",
		696
	],
	"./extra/so-DJ.js": [
		"JfwJ",
		697
	],
	"./extra/so-ET.js": [
		"Ky6L",
		698
	],
	"./extra/so-KE.js": [
		"7wk0",
		699
	],
	"./extra/so.js": [
		"pTx2",
		700
	],
	"./extra/sq-MK.js": [
		"yJj3",
		701
	],
	"./extra/sq-XK.js": [
		"PUYv",
		702
	],
	"./extra/sq.js": [
		"hYm4",
		703
	],
	"./extra/sr-Cyrl-BA.js": [
		"JGzz",
		704
	],
	"./extra/sr-Cyrl-ME.js": [
		"lpNv",
		705
	],
	"./extra/sr-Cyrl-XK.js": [
		"XM8u",
		706
	],
	"./extra/sr-Cyrl.js": [
		"JZM9",
		707
	],
	"./extra/sr-Latn-BA.js": [
		"Z+J6",
		708
	],
	"./extra/sr-Latn-ME.js": [
		"IneA",
		709
	],
	"./extra/sr-Latn-XK.js": [
		"lRbV",
		710
	],
	"./extra/sr-Latn.js": [
		"cFdp",
		711
	],
	"./extra/sr.js": [
		"AOnX",
		712
	],
	"./extra/sv-AX.js": [
		"Ps56",
		713
	],
	"./extra/sv-FI.js": [
		"wilo",
		714
	],
	"./extra/sv.js": [
		"NiZq",
		715
	],
	"./extra/sw-CD.js": [
		"pvR3",
		716
	],
	"./extra/sw-KE.js": [
		"e9i0",
		717
	],
	"./extra/sw-UG.js": [
		"vAj6",
		718
	],
	"./extra/sw.js": [
		"gnoA",
		719
	],
	"./extra/ta-LK.js": [
		"5aVA",
		720
	],
	"./extra/ta-MY.js": [
		"tUN7",
		721
	],
	"./extra/ta-SG.js": [
		"Om7V",
		722
	],
	"./extra/ta.js": [
		"ra/2",
		723
	],
	"./extra/te.js": [
		"1yNr",
		724
	],
	"./extra/teo-KE.js": [
		"rc7E",
		725
	],
	"./extra/teo.js": [
		"jUpb",
		726
	],
	"./extra/tg.js": [
		"WgJr",
		727
	],
	"./extra/th.js": [
		"QREW",
		728
	],
	"./extra/ti-ER.js": [
		"dPQL",
		729
	],
	"./extra/ti.js": [
		"BI3h",
		730
	],
	"./extra/tk.js": [
		"DMys",
		731
	],
	"./extra/to.js": [
		"IJjJ",
		732
	],
	"./extra/tr-CY.js": [
		"9cbM",
		733
	],
	"./extra/tr.js": [
		"8s+z",
		734
	],
	"./extra/tt.js": [
		"MQ8W",
		735
	],
	"./extra/twq.js": [
		"f5++",
		736
	],
	"./extra/tzm.js": [
		"L1Tf",
		737
	],
	"./extra/ug.js": [
		"sc9R",
		738
	],
	"./extra/uk.js": [
		"9Afg",
		739
	],
	"./extra/ur-IN.js": [
		"gZzc",
		740
	],
	"./extra/ur.js": [
		"Cmhw",
		741
	],
	"./extra/uz-Arab.js": [
		"Ejr0",
		742
	],
	"./extra/uz-Cyrl.js": [
		"hTZV",
		743
	],
	"./extra/uz-Latn.js": [
		"yrDl",
		744
	],
	"./extra/uz.js": [
		"8VFr",
		745
	],
	"./extra/vai-Latn.js": [
		"ojyH",
		746
	],
	"./extra/vai-Vaii.js": [
		"AQIO",
		747
	],
	"./extra/vai.js": [
		"pGUi",
		748
	],
	"./extra/vi.js": [
		"sae6",
		749
	],
	"./extra/vo.js": [
		"GytO",
		750
	],
	"./extra/vun.js": [
		"n5Fj",
		751
	],
	"./extra/wae.js": [
		"P8BJ",
		752
	],
	"./extra/wo.js": [
		"i/5I",
		753
	],
	"./extra/xh.js": [
		"+BD7",
		754
	],
	"./extra/xog.js": [
		"HiO9",
		755
	],
	"./extra/yav.js": [
		"3bzo",
		756
	],
	"./extra/yi.js": [
		"oOQt",
		757
	],
	"./extra/yo-BJ.js": [
		"z4SF",
		758
	],
	"./extra/yo.js": [
		"Esgj",
		759
	],
	"./extra/yue-Hans.js": [
		"pdYv",
		760
	],
	"./extra/yue-Hant.js": [
		"AWH9",
		761
	],
	"./extra/yue.js": [
		"GNOA",
		762
	],
	"./extra/zgh.js": [
		"pt07",
		763
	],
	"./extra/zh-Hans-HK.js": [
		"Qq/E",
		764
	],
	"./extra/zh-Hans-MO.js": [
		"M716",
		765
	],
	"./extra/zh-Hans-SG.js": [
		"6u2f",
		766
	],
	"./extra/zh-Hans.js": [
		"nxQz",
		767
	],
	"./extra/zh-Hant-HK.js": [
		"vKOy",
		768
	],
	"./extra/zh-Hant-MO.js": [
		"W/gi",
		769
	],
	"./extra/zh-Hant.js": [
		"XixS",
		770
	],
	"./extra/zh.js": [
		"b15P",
		771
	],
	"./extra/zu.js": [
		"38ZA",
		772
	],
	"./fa-AF.js": [
		"cfxb",
		773
	],
	"./fa.js": [
		"BHO9",
		774
	],
	"./ff-CM.js": [
		"Dwki",
		775
	],
	"./ff-GN.js": [
		"5Muw",
		776
	],
	"./ff-Latn-BF.js": [
		"cKuV",
		777
	],
	"./ff-Latn-CM.js": [
		"BXtb",
		778
	],
	"./ff-Latn-GH.js": [
		"lhWt",
		779
	],
	"./ff-Latn-GM.js": [
		"S33+",
		780
	],
	"./ff-Latn-GN.js": [
		"OjOg",
		781
	],
	"./ff-Latn-GW.js": [
		"kvoa",
		782
	],
	"./ff-Latn-LR.js": [
		"a4Cn",
		783
	],
	"./ff-Latn-MR.js": [
		"Yxti",
		784
	],
	"./ff-Latn-NE.js": [
		"n0Xg",
		785
	],
	"./ff-Latn-NG.js": [
		"drX/",
		786
	],
	"./ff-Latn-SL.js": [
		"itt+",
		787
	],
	"./ff-Latn.js": [
		"guLg",
		788
	],
	"./ff-MR.js": [
		"OuWs",
		789
	],
	"./ff.js": [
		"AO1o",
		790
	],
	"./fi.js": [
		"ejKr",
		791
	],
	"./fil.js": [
		"Rm5L",
		792
	],
	"./fo-DK.js": [
		"KlT6",
		793
	],
	"./fo.js": [
		"TqPR",
		794
	],
	"./fr-BE.js": [
		"aud0",
		795
	],
	"./fr-BF.js": [
		"uXRG",
		796
	],
	"./fr-BI.js": [
		"LJhX",
		797
	],
	"./fr-BJ.js": [
		"r2lz",
		798
	],
	"./fr-BL.js": [
		"rOMi",
		799
	],
	"./fr-CA.js": [
		"NauR",
		800
	],
	"./fr-CD.js": [
		"/mTU",
		801
	],
	"./fr-CF.js": [
		"QcQn",
		802
	],
	"./fr-CG.js": [
		"f8qO",
		803
	],
	"./fr-CH.js": [
		"LfMc",
		804
	],
	"./fr-CI.js": [
		"l6bY",
		805
	],
	"./fr-CM.js": [
		"VX5t",
		806
	],
	"./fr-DJ.js": [
		"3r05",
		807
	],
	"./fr-DZ.js": [
		"0Fdw",
		808
	],
	"./fr-GA.js": [
		"zfKf",
		809
	],
	"./fr-GF.js": [
		"dVTb",
		810
	],
	"./fr-GN.js": [
		"IdO6",
		811
	],
	"./fr-GP.js": [
		"IjgR",
		812
	],
	"./fr-GQ.js": [
		"AhAc",
		813
	],
	"./fr-HT.js": [
		"s0Mg",
		814
	],
	"./fr-KM.js": [
		"crJ7",
		815
	],
	"./fr-LU.js": [
		"V/cc",
		816
	],
	"./fr-MA.js": [
		"/NBB",
		817
	],
	"./fr-MC.js": [
		"jogA",
		818
	],
	"./fr-MF.js": [
		"9qCT",
		819
	],
	"./fr-MG.js": [
		"VpXS",
		820
	],
	"./fr-ML.js": [
		"k6MH",
		821
	],
	"./fr-MQ.js": [
		"x6E+",
		822
	],
	"./fr-MR.js": [
		"9nLt",
		823
	],
	"./fr-MU.js": [
		"CKBJ",
		824
	],
	"./fr-NC.js": [
		"D3Ie",
		825
	],
	"./fr-NE.js": [
		"LIly",
		826
	],
	"./fr-PF.js": [
		"O5ap",
		827
	],
	"./fr-PM.js": [
		"JRJ/",
		828
	],
	"./fr-RE.js": [
		"DX17",
		829
	],
	"./fr-RW.js": [
		"nkNb",
		830
	],
	"./fr-SC.js": [
		"WWHn",
		831
	],
	"./fr-SN.js": [
		"xBsm",
		832
	],
	"./fr-SY.js": [
		"eWba",
		833
	],
	"./fr-TD.js": [
		"B42C",
		834
	],
	"./fr-TG.js": [
		"mV9w",
		835
	],
	"./fr-TN.js": [
		"oR9y",
		836
	],
	"./fr-VU.js": [
		"MARJ",
		837
	],
	"./fr-WF.js": [
		"nHPG",
		838
	],
	"./fr-YT.js": [
		"HVTL",
		839
	],
	"./fr.js": [
		"Hfs6"
	],
	"./fur.js": [
		"Zbmb",
		840
	],
	"./fy.js": [
		"kSr3",
		841
	],
	"./ga-GB.js": [
		"tWsb",
		842
	],
	"./ga.js": [
		"se25",
		843
	],
	"./gd.js": [
		"4B/Y",
		844
	],
	"./gl.js": [
		"rRZ9",
		845
	],
	"./global/af-NA.js": [
		"tY3A",
		846
	],
	"./global/af.js": [
		"CTel",
		847
	],
	"./global/agq.js": [
		"wfNU",
		848
	],
	"./global/ak.js": [
		"xsfv",
		849
	],
	"./global/am.js": [
		"mZwt",
		850
	],
	"./global/ar-AE.js": [
		"y6rq",
		851
	],
	"./global/ar-BH.js": [
		"NLbe",
		852
	],
	"./global/ar-DJ.js": [
		"z1UJ",
		853
	],
	"./global/ar-DZ.js": [
		"eGKE",
		854
	],
	"./global/ar-EG.js": [
		"miIx",
		855
	],
	"./global/ar-EH.js": [
		"1AKX",
		856
	],
	"./global/ar-ER.js": [
		"kBdV",
		857
	],
	"./global/ar-IL.js": [
		"cnuU",
		858
	],
	"./global/ar-IQ.js": [
		"Tncq",
		859
	],
	"./global/ar-JO.js": [
		"LxUa",
		860
	],
	"./global/ar-KM.js": [
		"4MmM",
		861
	],
	"./global/ar-KW.js": [
		"znnS",
		862
	],
	"./global/ar-LB.js": [
		"iIEQ",
		863
	],
	"./global/ar-LY.js": [
		"bH/r",
		864
	],
	"./global/ar-MA.js": [
		"OdMN",
		865
	],
	"./global/ar-MR.js": [
		"eWPf",
		866
	],
	"./global/ar-OM.js": [
		"YaEM",
		867
	],
	"./global/ar-PS.js": [
		"DlzN",
		868
	],
	"./global/ar-QA.js": [
		"lF8K",
		869
	],
	"./global/ar-SA.js": [
		"oagl",
		870
	],
	"./global/ar-SD.js": [
		"wANS",
		871
	],
	"./global/ar-SO.js": [
		"DPcH",
		872
	],
	"./global/ar-SS.js": [
		"wOI/",
		873
	],
	"./global/ar-SY.js": [
		"N2Qm",
		874
	],
	"./global/ar-TD.js": [
		"eDcC",
		875
	],
	"./global/ar-TN.js": [
		"TLrA",
		876
	],
	"./global/ar-YE.js": [
		"nfbG",
		877
	],
	"./global/ar.js": [
		"QYDD",
		878
	],
	"./global/as.js": [
		"orbx",
		879
	],
	"./global/asa.js": [
		"jvVE",
		880
	],
	"./global/ast.js": [
		"Yzwh",
		881
	],
	"./global/az-Cyrl.js": [
		"WB4y",
		882
	],
	"./global/az-Latn.js": [
		"twnW",
		883
	],
	"./global/az.js": [
		"sFJl",
		884
	],
	"./global/bas.js": [
		"CCIN",
		885
	],
	"./global/be.js": [
		"LmZ2",
		886
	],
	"./global/bem.js": [
		"XKUB",
		887
	],
	"./global/bez.js": [
		"vqLs",
		888
	],
	"./global/bg.js": [
		"ephH",
		889
	],
	"./global/bm.js": [
		"Sccz",
		890
	],
	"./global/bn-IN.js": [
		"gdzS",
		891
	],
	"./global/bn.js": [
		"SmM0",
		892
	],
	"./global/bo-IN.js": [
		"QGGu",
		893
	],
	"./global/bo.js": [
		"+t3o",
		894
	],
	"./global/br.js": [
		"e9mm",
		895
	],
	"./global/brx.js": [
		"4fIL",
		896
	],
	"./global/bs-Cyrl.js": [
		"yZMd",
		897
	],
	"./global/bs-Latn.js": [
		"hAR8",
		898
	],
	"./global/bs.js": [
		"yNYf",
		899
	],
	"./global/ca-AD.js": [
		"S+z7",
		900
	],
	"./global/ca-ES-VALENCIA.js": [
		"6NOM",
		901
	],
	"./global/ca-FR.js": [
		"j0xv",
		902
	],
	"./global/ca-IT.js": [
		"5Z7i",
		903
	],
	"./global/ca.js": [
		"JN0Z",
		904
	],
	"./global/ccp-IN.js": [
		"bCa3",
		905
	],
	"./global/ccp.js": [
		"q5Qn",
		906
	],
	"./global/ce.js": [
		"GSS3",
		907
	],
	"./global/ceb.js": [
		"7KJs",
		908
	],
	"./global/cgg.js": [
		"C5h/",
		909
	],
	"./global/chr.js": [
		"da8S",
		910
	],
	"./global/ckb-IR.js": [
		"KkOR",
		911
	],
	"./global/ckb.js": [
		"X+W4",
		912
	],
	"./global/cs.js": [
		"Hgmd",
		913
	],
	"./global/cu.js": [
		"9UP4",
		914
	],
	"./global/cy.js": [
		"05ll",
		915
	],
	"./global/da-GL.js": [
		"ZsVP",
		916
	],
	"./global/da.js": [
		"c9Wf",
		917
	],
	"./global/dav.js": [
		"UDlZ",
		918
	],
	"./global/de-AT.js": [
		"sN9N",
		919
	],
	"./global/de-BE.js": [
		"pRDg",
		920
	],
	"./global/de-CH.js": [
		"v36K",
		921
	],
	"./global/de-IT.js": [
		"F2Hp",
		922
	],
	"./global/de-LI.js": [
		"lu35",
		923
	],
	"./global/de-LU.js": [
		"6BpW",
		924
	],
	"./global/de.js": [
		"Ams3",
		925
	],
	"./global/dje.js": [
		"KP7W",
		926
	],
	"./global/dsb.js": [
		"poxb",
		927
	],
	"./global/dua.js": [
		"jsOG",
		928
	],
	"./global/dyo.js": [
		"7pVF",
		929
	],
	"./global/dz.js": [
		"3wSr",
		930
	],
	"./global/ebu.js": [
		"MF+o",
		931
	],
	"./global/ee-TG.js": [
		"92B9",
		932
	],
	"./global/ee.js": [
		"FEC4",
		933
	],
	"./global/el-CY.js": [
		"knDV",
		934
	],
	"./global/el.js": [
		"h7It",
		935
	],
	"./global/en-001.js": [
		"p+6d",
		936
	],
	"./global/en-150.js": [
		"tnp9",
		937
	],
	"./global/en-AE.js": [
		"SIod",
		938
	],
	"./global/en-AG.js": [
		"e+vU",
		939
	],
	"./global/en-AI.js": [
		"5D6y",
		940
	],
	"./global/en-AS.js": [
		"Tbov",
		941
	],
	"./global/en-AT.js": [
		"OiyI",
		942
	],
	"./global/en-AU.js": [
		"RKG3",
		943
	],
	"./global/en-BB.js": [
		"34ov",
		944
	],
	"./global/en-BE.js": [
		"2/qh",
		945
	],
	"./global/en-BI.js": [
		"gHDo",
		946
	],
	"./global/en-BM.js": [
		"LY0D",
		947
	],
	"./global/en-BS.js": [
		"xBTh",
		948
	],
	"./global/en-BW.js": [
		"LjuY",
		949
	],
	"./global/en-BZ.js": [
		"UgZk",
		950
	],
	"./global/en-CA.js": [
		"X/Y3",
		951
	],
	"./global/en-CC.js": [
		"b50j",
		952
	],
	"./global/en-CH.js": [
		"FSba",
		953
	],
	"./global/en-CK.js": [
		"b7Xi",
		954
	],
	"./global/en-CM.js": [
		"zySK",
		955
	],
	"./global/en-CX.js": [
		"fTvy",
		956
	],
	"./global/en-CY.js": [
		"K/BR",
		957
	],
	"./global/en-DE.js": [
		"gXBG",
		958
	],
	"./global/en-DG.js": [
		"+pKU",
		959
	],
	"./global/en-DK.js": [
		"1MbT",
		960
	],
	"./global/en-DM.js": [
		"uztE",
		961
	],
	"./global/en-ER.js": [
		"GVUM",
		962
	],
	"./global/en-FI.js": [
		"liMA",
		963
	],
	"./global/en-FJ.js": [
		"QyO5",
		964
	],
	"./global/en-FK.js": [
		"dSwM",
		965
	],
	"./global/en-FM.js": [
		"HGav",
		966
	],
	"./global/en-GB.js": [
		"C0qs",
		967
	],
	"./global/en-GD.js": [
		"rGFS",
		968
	],
	"./global/en-GG.js": [
		"ZeWA",
		969
	],
	"./global/en-GH.js": [
		"Ee1W",
		970
	],
	"./global/en-GI.js": [
		"319r",
		971
	],
	"./global/en-GM.js": [
		"cNNs",
		972
	],
	"./global/en-GU.js": [
		"PAnU",
		973
	],
	"./global/en-GY.js": [
		"HF9f",
		974
	],
	"./global/en-HK.js": [
		"w/VL",
		975
	],
	"./global/en-IE.js": [
		"rImT",
		976
	],
	"./global/en-IL.js": [
		"kMwE",
		977
	],
	"./global/en-IM.js": [
		"t44u",
		978
	],
	"./global/en-IN.js": [
		"1aJL",
		979
	],
	"./global/en-IO.js": [
		"9aD6",
		980
	],
	"./global/en-JE.js": [
		"94W0",
		981
	],
	"./global/en-JM.js": [
		"lv9Q",
		982
	],
	"./global/en-KE.js": [
		"Kqjy",
		983
	],
	"./global/en-KI.js": [
		"BBRw",
		984
	],
	"./global/en-KN.js": [
		"+SBt",
		985
	],
	"./global/en-KY.js": [
		"Rg1x",
		986
	],
	"./global/en-LC.js": [
		"YXIB",
		987
	],
	"./global/en-LR.js": [
		"gOP3",
		988
	],
	"./global/en-LS.js": [
		"X9nK",
		989
	],
	"./global/en-MG.js": [
		"ECiY",
		990
	],
	"./global/en-MH.js": [
		"MSU5",
		991
	],
	"./global/en-MO.js": [
		"KeAw",
		992
	],
	"./global/en-MP.js": [
		"xs65",
		993
	],
	"./global/en-MS.js": [
		"0Qg5",
		994
	],
	"./global/en-MT.js": [
		"8iho",
		995
	],
	"./global/en-MU.js": [
		"E0Dp",
		996
	],
	"./global/en-MW.js": [
		"9/B1",
		997
	],
	"./global/en-MY.js": [
		"pUkE",
		998
	],
	"./global/en-NA.js": [
		"bYpF",
		999
	],
	"./global/en-NF.js": [
		"ktEd",
		1000
	],
	"./global/en-NG.js": [
		"w0fT",
		1001
	],
	"./global/en-NL.js": [
		"u0ae",
		1002
	],
	"./global/en-NR.js": [
		"kXpT",
		1003
	],
	"./global/en-NU.js": [
		"3vCh",
		1004
	],
	"./global/en-NZ.js": [
		"kvuH",
		1005
	],
	"./global/en-PG.js": [
		"girH",
		1006
	],
	"./global/en-PH.js": [
		"cpp4",
		1007
	],
	"./global/en-PK.js": [
		"PTp1",
		1008
	],
	"./global/en-PN.js": [
		"5Bav",
		1009
	],
	"./global/en-PR.js": [
		"i37d",
		1010
	],
	"./global/en-PW.js": [
		"kggk",
		1011
	],
	"./global/en-RW.js": [
		"GnFK",
		1012
	],
	"./global/en-SB.js": [
		"E0Vm",
		1013
	],
	"./global/en-SC.js": [
		"8yEF",
		1014
	],
	"./global/en-SD.js": [
		"tjrO",
		1015
	],
	"./global/en-SE.js": [
		"9MTo",
		1016
	],
	"./global/en-SG.js": [
		"hItV",
		1017
	],
	"./global/en-SH.js": [
		"UXxF",
		1018
	],
	"./global/en-SI.js": [
		"Lscu",
		1019
	],
	"./global/en-SL.js": [
		"2aFo",
		1020
	],
	"./global/en-SS.js": [
		"VSSG",
		1021
	],
	"./global/en-SX.js": [
		"a0Uf",
		1022
	],
	"./global/en-SZ.js": [
		"Puio",
		1023
	],
	"./global/en-TC.js": [
		"d9aV",
		1024
	],
	"./global/en-TK.js": [
		"+0Vq",
		1025
	],
	"./global/en-TO.js": [
		"RpTt",
		1026
	],
	"./global/en-TT.js": [
		"gbzC",
		1027
	],
	"./global/en-TV.js": [
		"Inx5",
		1028
	],
	"./global/en-TZ.js": [
		"no3c",
		1029
	],
	"./global/en-UG.js": [
		"hBvq",
		1030
	],
	"./global/en-UM.js": [
		"EBW1",
		1031
	],
	"./global/en-US-POSIX.js": [
		"qKkV",
		1032
	],
	"./global/en-VC.js": [
		"2Gef",
		1033
	],
	"./global/en-VG.js": [
		"ycbW",
		1034
	],
	"./global/en-VI.js": [
		"dC7z",
		1035
	],
	"./global/en-VU.js": [
		"omMM",
		1036
	],
	"./global/en-WS.js": [
		"p9vt",
		1037
	],
	"./global/en-ZA.js": [
		"krKt",
		1038
	],
	"./global/en-ZM.js": [
		"Fpq5",
		1039
	],
	"./global/en-ZW.js": [
		"/9Xk",
		1040
	],
	"./global/en.js": [
		"2TOE",
		1041
	],
	"./global/eo.js": [
		"jKTQ",
		1042
	],
	"./global/es-419.js": [
		"NdPN",
		1043
	],
	"./global/es-AR.js": [
		"EZx0",
		1044
	],
	"./global/es-BO.js": [
		"5AeV",
		1045
	],
	"./global/es-BR.js": [
		"Jn8i",
		1046
	],
	"./global/es-BZ.js": [
		"8qZ+",
		1047
	],
	"./global/es-CL.js": [
		"QCjX",
		1048
	],
	"./global/es-CO.js": [
		"5c6p",
		1049
	],
	"./global/es-CR.js": [
		"dgwm",
		1050
	],
	"./global/es-CU.js": [
		"Fp84",
		1051
	],
	"./global/es-DO.js": [
		"l8ZI",
		1052
	],
	"./global/es-EA.js": [
		"7b2Z",
		1053
	],
	"./global/es-EC.js": [
		"WARY",
		1054
	],
	"./global/es-GQ.js": [
		"vGsV",
		1055
	],
	"./global/es-GT.js": [
		"Jj/Y",
		1056
	],
	"./global/es-HN.js": [
		"FuKL",
		1057
	],
	"./global/es-IC.js": [
		"gXr7",
		1058
	],
	"./global/es-MX.js": [
		"jcRy",
		1059
	],
	"./global/es-NI.js": [
		"E4JD",
		1060
	],
	"./global/es-PA.js": [
		"rewa",
		1061
	],
	"./global/es-PE.js": [
		"HpBq",
		1062
	],
	"./global/es-PH.js": [
		"DS4E",
		1063
	],
	"./global/es-PR.js": [
		"5+rS",
		1064
	],
	"./global/es-PY.js": [
		"RYN5",
		1065
	],
	"./global/es-SV.js": [
		"u65f",
		1066
	],
	"./global/es-US.js": [
		"9BLH",
		1067
	],
	"./global/es-UY.js": [
		"RqzE",
		1068
	],
	"./global/es-VE.js": [
		"ByDA",
		1069
	],
	"./global/es.js": [
		"eTLP",
		1070
	],
	"./global/et.js": [
		"aBI1",
		1071
	],
	"./global/eu.js": [
		"HCgz",
		1072
	],
	"./global/ewo.js": [
		"nSps",
		1073
	],
	"./global/fa-AF.js": [
		"K5mL",
		1074
	],
	"./global/fa.js": [
		"uY5Y",
		1075
	],
	"./global/ff-CM.js": [
		"iAsk",
		1076
	],
	"./global/ff-GN.js": [
		"upY6",
		1077
	],
	"./global/ff-Latn-BF.js": [
		"Lqko",
		1078
	],
	"./global/ff-Latn-CM.js": [
		"5YMy",
		1079
	],
	"./global/ff-Latn-GH.js": [
		"lZRw",
		1080
	],
	"./global/ff-Latn-GM.js": [
		"6CVl",
		1081
	],
	"./global/ff-Latn-GN.js": [
		"W49v",
		1082
	],
	"./global/ff-Latn-GW.js": [
		"BkV+",
		1083
	],
	"./global/ff-Latn-LR.js": [
		"DAGI",
		1084
	],
	"./global/ff-Latn-MR.js": [
		"hTKJ",
		1085
	],
	"./global/ff-Latn-NE.js": [
		"nU+O",
		1086
	],
	"./global/ff-Latn-NG.js": [
		"YqAx",
		1087
	],
	"./global/ff-Latn-SL.js": [
		"Ivbm",
		1088
	],
	"./global/ff-Latn.js": [
		"X8AN",
		1089
	],
	"./global/ff-MR.js": [
		"2SHP",
		1090
	],
	"./global/ff.js": [
		"1otw",
		1091
	],
	"./global/fi.js": [
		"eYIr",
		1092
	],
	"./global/fil.js": [
		"xJ/k",
		1093
	],
	"./global/fo-DK.js": [
		"TChw",
		1094
	],
	"./global/fo.js": [
		"+m4j",
		1095
	],
	"./global/fr-BE.js": [
		"VFCJ",
		1096
	],
	"./global/fr-BF.js": [
		"XEB3",
		1097
	],
	"./global/fr-BI.js": [
		"KoZY",
		1098
	],
	"./global/fr-BJ.js": [
		"q1qL",
		1099
	],
	"./global/fr-BL.js": [
		"FFA4",
		1100
	],
	"./global/fr-CA.js": [
		"Ip7O",
		1101
	],
	"./global/fr-CD.js": [
		"GV3E",
		1102
	],
	"./global/fr-CF.js": [
		"IFcQ",
		1103
	],
	"./global/fr-CG.js": [
		"hfHg",
		1104
	],
	"./global/fr-CH.js": [
		"Di2b",
		1105
	],
	"./global/fr-CI.js": [
		"1N0b",
		1106
	],
	"./global/fr-CM.js": [
		"3RzV",
		1107
	],
	"./global/fr-DJ.js": [
		"2ht6",
		1108
	],
	"./global/fr-DZ.js": [
		"BLjk",
		1109
	],
	"./global/fr-GA.js": [
		"NuoZ",
		1110
	],
	"./global/fr-GF.js": [
		"9JZH",
		1111
	],
	"./global/fr-GN.js": [
		"sE3j",
		1112
	],
	"./global/fr-GP.js": [
		"FqHS",
		1113
	],
	"./global/fr-GQ.js": [
		"jv/4",
		1114
	],
	"./global/fr-HT.js": [
		"xx/P",
		1115
	],
	"./global/fr-KM.js": [
		"4GCD",
		1116
	],
	"./global/fr-LU.js": [
		"a+Gz",
		1117
	],
	"./global/fr-MA.js": [
		"oVvV",
		1118
	],
	"./global/fr-MC.js": [
		"o60m",
		1119
	],
	"./global/fr-MF.js": [
		"agK9",
		1120
	],
	"./global/fr-MG.js": [
		"SHW5",
		1121
	],
	"./global/fr-ML.js": [
		"ITOB",
		1122
	],
	"./global/fr-MQ.js": [
		"EN54",
		1123
	],
	"./global/fr-MR.js": [
		"ScUo",
		1124
	],
	"./global/fr-MU.js": [
		"3G5C",
		1125
	],
	"./global/fr-NC.js": [
		"03cV",
		1126
	],
	"./global/fr-NE.js": [
		"RsUb",
		1127
	],
	"./global/fr-PF.js": [
		"Eifu",
		1128
	],
	"./global/fr-PM.js": [
		"eZKm",
		1129
	],
	"./global/fr-RE.js": [
		"1B7P",
		1130
	],
	"./global/fr-RW.js": [
		"geK3",
		1131
	],
	"./global/fr-SC.js": [
		"rWtH",
		1132
	],
	"./global/fr-SN.js": [
		"PXJE",
		1133
	],
	"./global/fr-SY.js": [
		"sGuX",
		1134
	],
	"./global/fr-TD.js": [
		"vS49",
		1135
	],
	"./global/fr-TG.js": [
		"1Lu7",
		1136
	],
	"./global/fr-TN.js": [
		"8jsd",
		1137
	],
	"./global/fr-VU.js": [
		"behT",
		1138
	],
	"./global/fr-WF.js": [
		"nvx9",
		1139
	],
	"./global/fr-YT.js": [
		"AfDB",
		1140
	],
	"./global/fr.js": [
		"JWQq",
		1141
	],
	"./global/fur.js": [
		"4xQ0",
		1142
	],
	"./global/fy.js": [
		"gY16",
		1143
	],
	"./global/ga-GB.js": [
		"JLyK",
		1144
	],
	"./global/ga.js": [
		"3BVU",
		1145
	],
	"./global/gd.js": [
		"Ro8L",
		1146
	],
	"./global/gl.js": [
		"2/zw",
		1147
	],
	"./global/gsw-FR.js": [
		"Us/S",
		1148
	],
	"./global/gsw-LI.js": [
		"5J+5",
		1149
	],
	"./global/gsw.js": [
		"U+p0",
		1150
	],
	"./global/gu.js": [
		"HGlb",
		1151
	],
	"./global/guz.js": [
		"3y8U",
		1152
	],
	"./global/gv.js": [
		"jRM/",
		1153
	],
	"./global/ha-GH.js": [
		"d/a6",
		1154
	],
	"./global/ha-NE.js": [
		"cKCl",
		1155
	],
	"./global/ha.js": [
		"ANvL",
		1156
	],
	"./global/haw.js": [
		"eOYR",
		1157
	],
	"./global/he.js": [
		"BicD",
		1158
	],
	"./global/hi.js": [
		"g9dh",
		1159
	],
	"./global/hr-BA.js": [
		"Ad0p",
		1160
	],
	"./global/hr.js": [
		"/LDb",
		1161
	],
	"./global/hsb.js": [
		"TCA3",
		1162
	],
	"./global/hu.js": [
		"Nvgl",
		1163
	],
	"./global/hy.js": [
		"G+kj",
		1164
	],
	"./global/ia.js": [
		"i/4T",
		1165
	],
	"./global/id.js": [
		"0DAu",
		1166
	],
	"./global/ig.js": [
		"JYas",
		1167
	],
	"./global/ii.js": [
		"X62m",
		1168
	],
	"./global/is.js": [
		"lMX6",
		1169
	],
	"./global/it-CH.js": [
		"SUvb",
		1170
	],
	"./global/it-SM.js": [
		"N70a",
		1171
	],
	"./global/it-VA.js": [
		"/tpz",
		1172
	],
	"./global/it.js": [
		"6NJf",
		1173
	],
	"./global/ja.js": [
		"brgD",
		1174
	],
	"./global/jgo.js": [
		"Fzk6",
		1175
	],
	"./global/jmc.js": [
		"sDIZ",
		1176
	],
	"./global/jv.js": [
		"wXaM",
		1177
	],
	"./global/ka.js": [
		"hdJO",
		1178
	],
	"./global/kab.js": [
		"IlN/",
		1179
	],
	"./global/kam.js": [
		"tD/L",
		1180
	],
	"./global/kde.js": [
		"R7Dh",
		1181
	],
	"./global/kea.js": [
		"Bz+O",
		1182
	],
	"./global/khq.js": [
		"UlQL",
		1183
	],
	"./global/ki.js": [
		"e3z6",
		1184
	],
	"./global/kk.js": [
		"xR/b",
		1185
	],
	"./global/kkj.js": [
		"uRZ6",
		1186
	],
	"./global/kl.js": [
		"s542",
		1187
	],
	"./global/kln.js": [
		"Z9Mz",
		1188
	],
	"./global/km.js": [
		"zWAO",
		1189
	],
	"./global/kn.js": [
		"/iWg",
		1190
	],
	"./global/ko-KP.js": [
		"Nd9F",
		1191
	],
	"./global/ko.js": [
		"kn8y",
		1192
	],
	"./global/kok.js": [
		"Xo70",
		1193
	],
	"./global/ks.js": [
		"Xy8e",
		1194
	],
	"./global/ksb.js": [
		"WQDK",
		1195
	],
	"./global/ksf.js": [
		"qGNq",
		1196
	],
	"./global/ksh.js": [
		"oM9f",
		1197
	],
	"./global/ku.js": [
		"uifJ",
		1198
	],
	"./global/kw.js": [
		"63e/",
		1199
	],
	"./global/ky.js": [
		"pVyj",
		1200
	],
	"./global/lag.js": [
		"kBWN",
		1201
	],
	"./global/lb.js": [
		"jLLW",
		1202
	],
	"./global/lg.js": [
		"IK1i",
		1203
	],
	"./global/lkt.js": [
		"lSM0",
		1204
	],
	"./global/ln-AO.js": [
		"D3Iy",
		1205
	],
	"./global/ln-CF.js": [
		"1Hso",
		1206
	],
	"./global/ln-CG.js": [
		"wxaT",
		1207
	],
	"./global/ln.js": [
		"B9Wc",
		1208
	],
	"./global/lo.js": [
		"rIi6",
		1209
	],
	"./global/lrc-IQ.js": [
		"S8pT",
		1210
	],
	"./global/lrc.js": [
		"MD60",
		1211
	],
	"./global/lt.js": [
		"6XXL",
		1212
	],
	"./global/lu.js": [
		"YSfx",
		1213
	],
	"./global/luo.js": [
		"ZhC1",
		1214
	],
	"./global/luy.js": [
		"pUiq",
		1215
	],
	"./global/lv.js": [
		"EW3S",
		1216
	],
	"./global/mas-TZ.js": [
		"HJ4T",
		1217
	],
	"./global/mas.js": [
		"C/1c",
		1218
	],
	"./global/mer.js": [
		"4twd",
		1219
	],
	"./global/mfe.js": [
		"5y5C",
		1220
	],
	"./global/mg.js": [
		"3XbC",
		1221
	],
	"./global/mgh.js": [
		"VEyA",
		1222
	],
	"./global/mgo.js": [
		"K9sg",
		1223
	],
	"./global/mi.js": [
		"yeHK",
		1224
	],
	"./global/mk.js": [
		"vGjl",
		1225
	],
	"./global/ml.js": [
		"5SnA",
		1226
	],
	"./global/mn.js": [
		"TbEy",
		1227
	],
	"./global/mr.js": [
		"THxm",
		1228
	],
	"./global/ms-BN.js": [
		"5J/E",
		1229
	],
	"./global/ms-SG.js": [
		"d+rN",
		1230
	],
	"./global/ms.js": [
		"KLXl",
		1231
	],
	"./global/mt.js": [
		"mOBt",
		1232
	],
	"./global/mua.js": [
		"NIY+",
		1233
	],
	"./global/my.js": [
		"5mgk",
		1234
	],
	"./global/mzn.js": [
		"rwPT",
		1235
	],
	"./global/naq.js": [
		"322z",
		1236
	],
	"./global/nb-SJ.js": [
		"Lz/h",
		1237
	],
	"./global/nb.js": [
		"2h4e",
		1238
	],
	"./global/nd.js": [
		"O6Rh",
		1239
	],
	"./global/nds-NL.js": [
		"TYP8",
		1240
	],
	"./global/nds.js": [
		"H5JG",
		1241
	],
	"./global/ne-IN.js": [
		"34n2",
		1242
	],
	"./global/ne.js": [
		"Mt92",
		1243
	],
	"./global/nl-AW.js": [
		"ZLkc",
		1244
	],
	"./global/nl-BE.js": [
		"OQCA",
		1245
	],
	"./global/nl-BQ.js": [
		"BO0W",
		1246
	],
	"./global/nl-CW.js": [
		"0A3/",
		1247
	],
	"./global/nl-SR.js": [
		"AOMP",
		1248
	],
	"./global/nl-SX.js": [
		"CW6B",
		1249
	],
	"./global/nl.js": [
		"t33j",
		1250
	],
	"./global/nmg.js": [
		"stKk",
		1251
	],
	"./global/nn.js": [
		"CzvF",
		1252
	],
	"./global/nnh.js": [
		"Fjyw",
		1253
	],
	"./global/nus.js": [
		"3sWP",
		1254
	],
	"./global/nyn.js": [
		"gD7u",
		1255
	],
	"./global/om-KE.js": [
		"kOjP",
		1256
	],
	"./global/om.js": [
		"YWs7",
		1257
	],
	"./global/or.js": [
		"5LnB",
		1258
	],
	"./global/os-RU.js": [
		"9CGl",
		1259
	],
	"./global/os.js": [
		"n5Tk",
		1260
	],
	"./global/pa-Arab.js": [
		"7Tin",
		1261
	],
	"./global/pa-Guru.js": [
		"xrtU",
		1262
	],
	"./global/pa.js": [
		"gGlC",
		1263
	],
	"./global/pl.js": [
		"wuDY",
		1264
	],
	"./global/prg.js": [
		"LSYP",
		1265
	],
	"./global/ps-PK.js": [
		"Wl4R",
		1266
	],
	"./global/ps.js": [
		"9Gs+",
		1267
	],
	"./global/pt-AO.js": [
		"gen8",
		1268
	],
	"./global/pt-CH.js": [
		"4OzP",
		1269
	],
	"./global/pt-CV.js": [
		"/+iE",
		1270
	],
	"./global/pt-GQ.js": [
		"3gy1",
		1271
	],
	"./global/pt-GW.js": [
		"MsLL",
		1272
	],
	"./global/pt-LU.js": [
		"eMs7",
		1273
	],
	"./global/pt-MO.js": [
		"u5bd",
		1274
	],
	"./global/pt-MZ.js": [
		"9wcp",
		1275
	],
	"./global/pt-PT.js": [
		"Vpv8",
		1276
	],
	"./global/pt-ST.js": [
		"1Yws",
		1277
	],
	"./global/pt-TL.js": [
		"Fuuj",
		1278
	],
	"./global/pt.js": [
		"QY8e",
		1279
	],
	"./global/qu-BO.js": [
		"+ixS",
		1280
	],
	"./global/qu-EC.js": [
		"6WlF",
		1281
	],
	"./global/qu.js": [
		"HYIr",
		1282
	],
	"./global/rm.js": [
		"2QGo",
		1283
	],
	"./global/rn.js": [
		"nbXc",
		1284
	],
	"./global/ro-MD.js": [
		"4+zn",
		1285
	],
	"./global/ro.js": [
		"ekok",
		1286
	],
	"./global/rof.js": [
		"BpZd",
		1287
	],
	"./global/root.js": [
		"Umyz",
		1288
	],
	"./global/ru-BY.js": [
		"H+G5",
		1289
	],
	"./global/ru-KG.js": [
		"z/5i",
		1290
	],
	"./global/ru-KZ.js": [
		"kxHu",
		1291
	],
	"./global/ru-MD.js": [
		"vzoN",
		1292
	],
	"./global/ru-UA.js": [
		"9CCi",
		1293
	],
	"./global/ru.js": [
		"Lrdh",
		1294
	],
	"./global/rw.js": [
		"/1tE",
		1295
	],
	"./global/rwk.js": [
		"s91i",
		1296
	],
	"./global/sah.js": [
		"PJnk",
		1297
	],
	"./global/saq.js": [
		"mj1l",
		1298
	],
	"./global/sbp.js": [
		"jDd0",
		1299
	],
	"./global/sd.js": [
		"LwJf",
		1300
	],
	"./global/se-FI.js": [
		"UgE8",
		1301
	],
	"./global/se-SE.js": [
		"p3Dz",
		1302
	],
	"./global/se.js": [
		"SEUv",
		1303
	],
	"./global/seh.js": [
		"p3AF",
		1304
	],
	"./global/ses.js": [
		"AmQW",
		1305
	],
	"./global/sg.js": [
		"x+nO",
		1306
	],
	"./global/shi-Latn.js": [
		"BCFw",
		1307
	],
	"./global/shi-Tfng.js": [
		"bo+L",
		1308
	],
	"./global/shi.js": [
		"djIs",
		1309
	],
	"./global/si.js": [
		"zY44",
		1310
	],
	"./global/sk.js": [
		"BzqX",
		1311
	],
	"./global/sl.js": [
		"NhD+",
		1312
	],
	"./global/smn.js": [
		"pPrg",
		1313
	],
	"./global/sn.js": [
		"WktG",
		1314
	],
	"./global/so-DJ.js": [
		"CP1+",
		1315
	],
	"./global/so-ET.js": [
		"9FQl",
		1316
	],
	"./global/so-KE.js": [
		"5ySy",
		1317
	],
	"./global/so.js": [
		"Gq40",
		1318
	],
	"./global/sq-MK.js": [
		"PjYl",
		1319
	],
	"./global/sq-XK.js": [
		"FSjw",
		1320
	],
	"./global/sq.js": [
		"nRwn",
		1321
	],
	"./global/sr-Cyrl-BA.js": [
		"OBos",
		1322
	],
	"./global/sr-Cyrl-ME.js": [
		"LR9G",
		1323
	],
	"./global/sr-Cyrl-XK.js": [
		"Lq9Z",
		1324
	],
	"./global/sr-Cyrl.js": [
		"uE4j",
		1325
	],
	"./global/sr-Latn-BA.js": [
		"J0WM",
		1326
	],
	"./global/sr-Latn-ME.js": [
		"fOT4",
		1327
	],
	"./global/sr-Latn-XK.js": [
		"zkT5",
		1328
	],
	"./global/sr-Latn.js": [
		"2fIg",
		1329
	],
	"./global/sr.js": [
		"qX33",
		1330
	],
	"./global/sv-AX.js": [
		"wLuv",
		1331
	],
	"./global/sv-FI.js": [
		"FZ1A",
		1332
	],
	"./global/sv.js": [
		"QHYL",
		1333
	],
	"./global/sw-CD.js": [
		"LXgY",
		1334
	],
	"./global/sw-KE.js": [
		"NT40",
		1335
	],
	"./global/sw-UG.js": [
		"R09c",
		1336
	],
	"./global/sw.js": [
		"pQVP",
		1337
	],
	"./global/ta-LK.js": [
		"BEOQ",
		1338
	],
	"./global/ta-MY.js": [
		"zhWa",
		1339
	],
	"./global/ta-SG.js": [
		"63u5",
		1340
	],
	"./global/ta.js": [
		"PKA+",
		1341
	],
	"./global/te.js": [
		"qOa2",
		1342
	],
	"./global/teo-KE.js": [
		"SZC0",
		1343
	],
	"./global/teo.js": [
		"XjuX",
		1344
	],
	"./global/tg.js": [
		"SW98",
		1345
	],
	"./global/th.js": [
		"MjQI",
		1346
	],
	"./global/ti-ER.js": [
		"mCD4",
		1347
	],
	"./global/ti.js": [
		"kbxA",
		1348
	],
	"./global/tk.js": [
		"96mR",
		1349
	],
	"./global/to.js": [
		"v0R1",
		1350
	],
	"./global/tr-CY.js": [
		"9tHx",
		1351
	],
	"./global/tr.js": [
		"S7SD",
		1352
	],
	"./global/tt.js": [
		"08Hx",
		1353
	],
	"./global/twq.js": [
		"i7cj",
		1354
	],
	"./global/tzm.js": [
		"lWJn",
		1355
	],
	"./global/ug.js": [
		"JxCA",
		1356
	],
	"./global/uk.js": [
		"XuSJ",
		1357
	],
	"./global/ur-IN.js": [
		"D0SX",
		1358
	],
	"./global/ur.js": [
		"7ykT",
		1359
	],
	"./global/uz-Arab.js": [
		"YVyq",
		1360
	],
	"./global/uz-Cyrl.js": [
		"Ktkg",
		1361
	],
	"./global/uz-Latn.js": [
		"KUNv",
		1362
	],
	"./global/uz.js": [
		"jkbn",
		1363
	],
	"./global/vai-Latn.js": [
		"R2Bm",
		1364
	],
	"./global/vai-Vaii.js": [
		"KTfr",
		1365
	],
	"./global/vai.js": [
		"JN+8",
		1366
	],
	"./global/vi.js": [
		"ihcd",
		1367
	],
	"./global/vo.js": [
		"OrQ9",
		1368
	],
	"./global/vun.js": [
		"5QiO",
		1369
	],
	"./global/wae.js": [
		"MC4U",
		1370
	],
	"./global/wo.js": [
		"UxFz",
		1371
	],
	"./global/xh.js": [
		"xIC+",
		1372
	],
	"./global/xog.js": [
		"Z37J",
		1373
	],
	"./global/yav.js": [
		"B4Br",
		1374
	],
	"./global/yi.js": [
		"dYgu",
		1375
	],
	"./global/yo-BJ.js": [
		"lD8X",
		1376
	],
	"./global/yo.js": [
		"QVTF",
		1377
	],
	"./global/yue-Hans.js": [
		"7sDw",
		1378
	],
	"./global/yue-Hant.js": [
		"2VTr",
		1379
	],
	"./global/yue.js": [
		"a83H",
		1380
	],
	"./global/zgh.js": [
		"j51k",
		1381
	],
	"./global/zh-Hans-HK.js": [
		"Jo8E",
		1382
	],
	"./global/zh-Hans-MO.js": [
		"q4qy",
		1383
	],
	"./global/zh-Hans-SG.js": [
		"5GY+",
		1384
	],
	"./global/zh-Hans.js": [
		"QdLs",
		1385
	],
	"./global/zh-Hant-HK.js": [
		"laXD",
		1386
	],
	"./global/zh-Hant-MO.js": [
		"pQPn",
		1387
	],
	"./global/zh-Hant.js": [
		"DpLa",
		1388
	],
	"./global/zh.js": [
		"OoiL",
		1389
	],
	"./global/zu.js": [
		"j7Pz",
		1390
	],
	"./gsw-FR.js": [
		"VTLS",
		1391
	],
	"./gsw-LI.js": [
		"5+f4",
		1392
	],
	"./gsw.js": [
		"6TjD",
		1393
	],
	"./gu.js": [
		"X7h+",
		1394
	],
	"./guz.js": [
		"q8Fh",
		1395
	],
	"./gv.js": [
		"euEG",
		1396
	],
	"./ha-GH.js": [
		"y7sr",
		1397
	],
	"./ha-NE.js": [
		"B4yb",
		1398
	],
	"./ha.js": [
		"NRDx",
		1399
	],
	"./haw.js": [
		"GUa2",
		1400
	],
	"./he.js": [
		"Ftqt",
		1401
	],
	"./hi.js": [
		"KS1m",
		1402
	],
	"./hr-BA.js": [
		"iOka",
		1403
	],
	"./hr.js": [
		"Tt1O",
		1404
	],
	"./hsb.js": [
		"xHNg",
		1405
	],
	"./hu.js": [
		"CCy4",
		1406
	],
	"./hy.js": [
		"ZL3B",
		1407
	],
	"./ia.js": [
		"0oPf",
		1408
	],
	"./id.js": [
		"tdLY",
		1409
	],
	"./ig.js": [
		"e1CG",
		1410
	],
	"./ii.js": [
		"cVDa",
		1411
	],
	"./is.js": [
		"rU41",
		1412
	],
	"./it-CH.js": [
		"Sv09",
		1413
	],
	"./it-SM.js": [
		"6wMj",
		1414
	],
	"./it-VA.js": [
		"eHux",
		1415
	],
	"./it.js": [
		"1IWC",
		1416
	],
	"./ja.js": [
		"Paii",
		1417
	],
	"./jgo.js": [
		"9syN",
		1418
	],
	"./jmc.js": [
		"NtR0",
		1419
	],
	"./jv.js": [
		"QRER",
		1420
	],
	"./ka.js": [
		"9rRF",
		1421
	],
	"./kab.js": [
		"7kK5",
		1422
	],
	"./kam.js": [
		"DoWY",
		1423
	],
	"./kde.js": [
		"DS4G",
		1424
	],
	"./kea.js": [
		"3IT3",
		1425
	],
	"./khq.js": [
		"SADW",
		1426
	],
	"./ki.js": [
		"3NYi",
		1427
	],
	"./kk.js": [
		"bnxK",
		1428
	],
	"./kkj.js": [
		"LJ7w",
		1429
	],
	"./kl.js": [
		"5g07",
		1430
	],
	"./kln.js": [
		"uJh+",
		1431
	],
	"./km.js": [
		"FD65",
		1432
	],
	"./kn.js": [
		"KnJk",
		1433
	],
	"./ko-KP.js": [
		"AjBY",
		1434
	],
	"./ko.js": [
		"jQh8",
		1435
	],
	"./kok.js": [
		"0gXN",
		1436
	],
	"./ks.js": [
		"P/m9",
		1437
	],
	"./ksb.js": [
		"O/dN",
		1438
	],
	"./ksf.js": [
		"UWn0",
		1439
	],
	"./ksh.js": [
		"m+SZ",
		1440
	],
	"./ku.js": [
		"DhI1",
		1441
	],
	"./kw.js": [
		"HNgj",
		1442
	],
	"./ky.js": [
		"Il4k",
		1443
	],
	"./lag.js": [
		"94Ex",
		1444
	],
	"./lb.js": [
		"qNmG",
		1445
	],
	"./lg.js": [
		"DDal",
		1446
	],
	"./lkt.js": [
		"LC7E",
		1447
	],
	"./ln-AO.js": [
		"L9d7",
		1448
	],
	"./ln-CF.js": [
		"DJEo",
		1449
	],
	"./ln-CG.js": [
		"i9Fp",
		1450
	],
	"./ln.js": [
		"IAt0",
		1451
	],
	"./lo.js": [
		"GZEr",
		1452
	],
	"./lrc-IQ.js": [
		"B1xy",
		1453
	],
	"./lrc.js": [
		"3+eZ",
		1454
	],
	"./lt.js": [
		"l1Ov",
		1455
	],
	"./lu.js": [
		"40mX",
		1456
	],
	"./luo.js": [
		"UtCP",
		1457
	],
	"./luy.js": [
		"B8/Y",
		1458
	],
	"./lv.js": [
		"UaqG",
		1459
	],
	"./mas-TZ.js": [
		"HzRA",
		1460
	],
	"./mas.js": [
		"JKmK",
		1461
	],
	"./mer.js": [
		"rwfy",
		1462
	],
	"./mfe.js": [
		"8elG",
		1463
	],
	"./mg.js": [
		"lDIb",
		1464
	],
	"./mgh.js": [
		"CRFi",
		1465
	],
	"./mgo.js": [
		"1AUd",
		1466
	],
	"./mi.js": [
		"407Y",
		1467
	],
	"./mk.js": [
		"U39Y",
		1468
	],
	"./ml.js": [
		"JnwK",
		1469
	],
	"./mn.js": [
		"Nnag",
		1470
	],
	"./mr.js": [
		"LAV/",
		1471
	],
	"./ms-BN.js": [
		"clWE",
		1472
	],
	"./ms-SG.js": [
		"/Ibr",
		1473
	],
	"./ms.js": [
		"QHHn",
		1474
	],
	"./mt.js": [
		"xrJx",
		1475
	],
	"./mua.js": [
		"g1p2",
		1476
	],
	"./my.js": [
		"Bhdm",
		1477
	],
	"./mzn.js": [
		"R3jS",
		1478
	],
	"./naq.js": [
		"04N/",
		1479
	],
	"./nb-SJ.js": [
		"UbrA",
		1480
	],
	"./nb.js": [
		"d7wB",
		1481
	],
	"./nd.js": [
		"M0OK",
		1482
	],
	"./nds-NL.js": [
		"TK9w",
		1483
	],
	"./nds.js": [
		"WZMF",
		1484
	],
	"./ne-IN.js": [
		"hDF6",
		1485
	],
	"./ne.js": [
		"TPCh",
		1486
	],
	"./nl-AW.js": [
		"NESa",
		1487
	],
	"./nl-BE.js": [
		"F/YG",
		1488
	],
	"./nl-BQ.js": [
		"JxMd",
		1489
	],
	"./nl-CW.js": [
		"ZXoI",
		1490
	],
	"./nl-SR.js": [
		"nMpY",
		1491
	],
	"./nl-SX.js": [
		"88g0",
		1492
	],
	"./nl.js": [
		"b6vB",
		1493
	],
	"./nmg.js": [
		"gVI5",
		1494
	],
	"./nn.js": [
		"1l1J",
		1495
	],
	"./nnh.js": [
		"PhL3",
		1496
	],
	"./nus.js": [
		"JsaI",
		1497
	],
	"./nyn.js": [
		"sLYM",
		1498
	],
	"./om-KE.js": [
		"Ju2N",
		1499
	],
	"./om.js": [
		"yTYn",
		1500
	],
	"./or.js": [
		"oExE",
		1501
	],
	"./os-RU.js": [
		"EW9x",
		1502
	],
	"./os.js": [
		"gkJO",
		1503
	],
	"./pa-Arab.js": [
		"zNeo",
		1504
	],
	"./pa-Guru.js": [
		"2Gw3",
		1505
	],
	"./pa.js": [
		"UNh/",
		1506
	],
	"./pl.js": [
		"BAOO",
		1507
	],
	"./prg.js": [
		"M8eI",
		1508
	],
	"./ps-PK.js": [
		"ioPX",
		1509
	],
	"./ps.js": [
		"5bSI",
		1510
	],
	"./pt-AO.js": [
		"w8Ei",
		1511
	],
	"./pt-CH.js": [
		"OwtD",
		1512
	],
	"./pt-CV.js": [
		"5Lyh",
		1513
	],
	"./pt-GQ.js": [
		"Kodx",
		1514
	],
	"./pt-GW.js": [
		"fxGE",
		1515
	],
	"./pt-LU.js": [
		"97sE",
		1516
	],
	"./pt-MO.js": [
		"jg4K",
		1517
	],
	"./pt-MZ.js": [
		"VGMg",
		1518
	],
	"./pt-PT.js": [
		"vQ2j",
		1519
	],
	"./pt-ST.js": [
		"4d1s",
		1520
	],
	"./pt-TL.js": [
		"pW66",
		1521
	],
	"./pt.js": [
		"vT00",
		1522
	],
	"./qu-BO.js": [
		"UJ7Q",
		1523
	],
	"./qu-EC.js": [
		"blkb",
		1524
	],
	"./qu.js": [
		"QvQc",
		1525
	],
	"./rm.js": [
		"GY6H",
		1526
	],
	"./rn.js": [
		"wkEu",
		1527
	],
	"./ro-MD.js": [
		"R/ZC",
		1528
	],
	"./ro.js": [
		"cGRD",
		1529
	],
	"./rof.js": [
		"6QTR",
		1530
	],
	"./root.js": [
		"1uCl",
		1531
	],
	"./ru-BY.js": [
		"CoLG",
		1532
	],
	"./ru-KG.js": [
		"8cfi",
		1533
	],
	"./ru-KZ.js": [
		"R2mC",
		1534
	],
	"./ru-MD.js": [
		"vrcw",
		1535
	],
	"./ru-UA.js": [
		"XCgr",
		1536
	],
	"./ru.js": [
		"wq8c",
		1537
	],
	"./rw.js": [
		"2so0",
		1538
	],
	"./rwk.js": [
		"cBDl",
		1539
	],
	"./sah.js": [
		"CtCh",
		1540
	],
	"./saq.js": [
		"jQ1A",
		1541
	],
	"./sbp.js": [
		"GbiG",
		1542
	],
	"./sd.js": [
		"4HUc",
		1543
	],
	"./se-FI.js": [
		"Q4RV",
		1544
	],
	"./se-SE.js": [
		"fp3B",
		1545
	],
	"./se.js": [
		"wOOj",
		1546
	],
	"./seh.js": [
		"Si3Z",
		1547
	],
	"./ses.js": [
		"Zj9p",
		1548
	],
	"./sg.js": [
		"dvYk",
		1549
	],
	"./shi-Latn.js": [
		"e2Oo",
		1550
	],
	"./shi-Tfng.js": [
		"sW2q",
		1551
	],
	"./shi.js": [
		"Q6mn",
		1552
	],
	"./si.js": [
		"/w+s",
		1553
	],
	"./sk.js": [
		"h6u5",
		1554
	],
	"./sl.js": [
		"YLnv",
		1555
	],
	"./smn.js": [
		"2Msd",
		1556
	],
	"./sn.js": [
		"nc7I",
		1557
	],
	"./so-DJ.js": [
		"+794",
		1558
	],
	"./so-ET.js": [
		"dkVW",
		1559
	],
	"./so-KE.js": [
		"XO5R",
		1560
	],
	"./so.js": [
		"N/+M",
		1561
	],
	"./sq-MK.js": [
		"PFZJ",
		1562
	],
	"./sq-XK.js": [
		"IQ3m",
		1563
	],
	"./sq.js": [
		"Sjou",
		1564
	],
	"./sr-Cyrl-BA.js": [
		"jFVn",
		1565
	],
	"./sr-Cyrl-ME.js": [
		"pREm",
		1566
	],
	"./sr-Cyrl-XK.js": [
		"6IrO",
		1567
	],
	"./sr-Cyrl.js": [
		"fNiM",
		1568
	],
	"./sr-Latn-BA.js": [
		"yawR",
		1569
	],
	"./sr-Latn-ME.js": [
		"sGb/",
		1570
	],
	"./sr-Latn-XK.js": [
		"Hx+g",
		1571
	],
	"./sr-Latn.js": [
		"CViI",
		1572
	],
	"./sr.js": [
		"meAG",
		1573
	],
	"./sv-AX.js": [
		"Zhri",
		1574
	],
	"./sv-FI.js": [
		"9f7j",
		1575
	],
	"./sv.js": [
		"RpMq",
		1576
	],
	"./sw-CD.js": [
		"4oL+",
		1577
	],
	"./sw-KE.js": [
		"QOaT",
		1578
	],
	"./sw-UG.js": [
		"El0v",
		1579
	],
	"./sw.js": [
		"+ZYF",
		1580
	],
	"./ta-LK.js": [
		"AAz+",
		1581
	],
	"./ta-MY.js": [
		"df+Y",
		1582
	],
	"./ta-SG.js": [
		"uT9L",
		1583
	],
	"./ta.js": [
		"ezBE",
		1584
	],
	"./te.js": [
		"jUYn",
		1585
	],
	"./teo-KE.js": [
		"JWU5",
		1586
	],
	"./teo.js": [
		"WbOd",
		1587
	],
	"./tg.js": [
		"bgq7",
		1588
	],
	"./th.js": [
		"if5C",
		1589
	],
	"./ti-ER.js": [
		"csfL",
		1590
	],
	"./ti.js": [
		"jsom",
		1591
	],
	"./tk.js": [
		"SDaK",
		1592
	],
	"./to.js": [
		"uvSy",
		1593
	],
	"./tr-CY.js": [
		"Ouu6",
		1594
	],
	"./tr.js": [
		"6/97",
		1595
	],
	"./tt.js": [
		"K8tk",
		1596
	],
	"./twq.js": [
		"rKhh",
		1597
	],
	"./tzm.js": [
		"XR6v",
		1598
	],
	"./ug.js": [
		"ao31",
		1599
	],
	"./uk.js": [
		"dp1V",
		1600
	],
	"./ur-IN.js": [
		"Z9Vd",
		1601
	],
	"./ur.js": [
		"Tmiw",
		1602
	],
	"./uz-Arab.js": [
		"zc2/",
		1603
	],
	"./uz-Cyrl.js": [
		"gYpG",
		1604
	],
	"./uz-Latn.js": [
		"3W62",
		1605
	],
	"./uz.js": [
		"P1Ch",
		1606
	],
	"./vai-Latn.js": [
		"7+u1",
		1607
	],
	"./vai-Vaii.js": [
		"ts6e",
		1608
	],
	"./vai.js": [
		"Mq0A",
		1609
	],
	"./vi.js": [
		"jwGQ",
		1610
	],
	"./vo.js": [
		"S6hl",
		1611
	],
	"./vun.js": [
		"mqe2",
		1612
	],
	"./wae.js": [
		"lyfV",
		1613
	],
	"./wo.js": [
		"uHZA",
		1614
	],
	"./xh.js": [
		"/A9n",
		1615
	],
	"./xog.js": [
		"9WIW",
		1616
	],
	"./yav.js": [
		"pRAY",
		1617
	],
	"./yi.js": [
		"FHqA",
		1618
	],
	"./yo-BJ.js": [
		"nN24",
		1619
	],
	"./yo.js": [
		"dtbJ",
		1620
	],
	"./yue-Hans.js": [
		"wEhZ",
		1621
	],
	"./yue-Hant.js": [
		"xzIz",
		1622
	],
	"./yue.js": [
		"ezNb",
		1623
	],
	"./zgh.js": [
		"a98M",
		1624
	],
	"./zh-Hans-HK.js": [
		"TJGd",
		1625
	],
	"./zh-Hans-MO.js": [
		"pPus",
		1626
	],
	"./zh-Hans-SG.js": [
		"bQQA",
		1627
	],
	"./zh-Hans.js": [
		"5D2u",
		1628
	],
	"./zh-Hant-HK.js": [
		"tH50",
		1629
	],
	"./zh-Hant-MO.js": [
		"DO/N",
		1630
	],
	"./zh-Hant.js": [
		"u6yn",
		1631
	],
	"./zh.js": [
		"Kd/A",
		1632
	],
	"./zu.js": [
		"Ge5/",
		1633
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "IL3Y";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "IeAS":
/*!*******************************************!*\
  !*** ./src/shared/nav/app-url.service.ts ***!
  \*******************************************/
/*! exports provided: AppUrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUrlService", function() { return AppUrlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppConsts */ "nS6G");
/* harmony import */ var _session_app_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session/app-session.service */ "tvsI");





var AppUrlService = /** @class */ (function () {
    function AppUrlService(_appSessionService) {
        this._appSessionService = _appSessionService;
    }
    Object.defineProperty(AppUrlService.prototype, "appRootUrl", {
        get: function () {
            if (this._appSessionService.tenant) {
                return this.getAppRootUrlOfTenant(this._appSessionService.tenant.tenancyName);
            }
            else {
                return this.getAppRootUrlOfTenant(null);
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returning url ends with '/'.
     */
    AppUrlService.prototype.getAppRootUrlOfTenant = function (tenancyName) {
        var baseUrl = this.ensureEndsWith(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__["AppConsts"].appBaseUrl, '/');
        if (baseUrl.indexOf(AppUrlService.tenancyNamePlaceHolder) < 0) {
            return baseUrl;
        }
        if (baseUrl.indexOf(AppUrlService.tenancyNamePlaceHolder + '.') >= 0) {
            baseUrl = baseUrl.replace(AppUrlService.tenancyNamePlaceHolder + '.', AppUrlService.tenancyNamePlaceHolder);
            if (tenancyName) {
                tenancyName = tenancyName + '.';
            }
        }
        if (!tenancyName) {
            return baseUrl.replace(AppUrlService.tenancyNamePlaceHolder, '');
        }
        return baseUrl.replace(AppUrlService.tenancyNamePlaceHolder, tenancyName);
    };
    AppUrlService.prototype.ensureEndsWith = function (str, c) {
        if (str.charAt(str.length - 1) !== c) {
            str = str + c;
        }
        return str;
    };
    AppUrlService.prototype.removeFromEnd = function (str, c) {
        if (str.charAt(str.length - 1) === c) {
            str = str.substr(0, str.length - 1);
        }
        return str;
    };
    AppUrlService.tenancyNamePlaceHolder = '{TENANCY_NAME}';
    AppUrlService.ɵfac = function AppUrlService_Factory(t) { return new (t || AppUrlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"])); };
    AppUrlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppUrlService, factory: AppUrlService.ɵfac });
    return AppUrlService;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppUrlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"] }]; }, null); })();


/***/ }),

/***/ "KALY":
/*!*******************************************************!*\
  !*** ./src/shared/service-proxies/service-proxies.ts ***!
  \*******************************************************/
/*! exports provided: API_BASE_URL, AccountServiceProxy, CatalogueServiceProxy, ClientServiceProxy, ConfigurationServiceProxy, CountryServiceAppServiceProxy, CustomAccountServiceProxy, DevisServiceProxy, FactureServiceProxy, FileApiServiceProxy, InfosEntrepriseServiceProxy, ReportGeneratorServiceProxy, RoleServiceProxy, SessionServiceProxy, StatisticsServiceProxy, SubscriptionsManagementServiceProxy, TenantServiceProxy, TokenAuthServiceProxy, UserServiceProxy, IsTenantAvailableInput, TenantAvailabilityState, IsTenantAvailableOutput, RegisterInput, RegisterOutput, CreateCatalogueInput, CatalogueDto, UpdateCatalogueInput, CatalogueForAutoCompleteDto, CatalogueForAutoCompleteDtoListResultDto, CatalogueDtoListResultWithTotalEntityItemsDto, ClientDto, ClientDtoListResultDto, ClientDtoListResultWithTotalEntityItemsDto, ClientForAutoCompleteDto, ClientForAutoCompleteDtoListResultDto, ClientDefaultsDto, ChangeUiThemeInput, CountryDto, CountryDtoListResultDto, Country, UserDto, DevisStatutEnum, FactureStatutEnum, ModePaiementEnum, DevisItemDto, CreateDevisInput, UpdateDevisInput, DevisDto, EstimationInitiationDto, DevisDtoListResultDto, FactureItemDto, CreateFactureInput, UpdateFactureInput, FactureDto, InvoiceInitiationDto, FactureDtoListResultDto, FactureInfosPaiementDto, FactureInfosPaiementDtoListResultWithTotalEntityItemsDto, CreateInfosEntrepriseInput, InfosEntrepriseDto, GeneralInfosDto, InfosEntrepriseDtoListResultDto, ContactInfosDto, DefaultAnnotationsDto, CreateRoleDto, RoleDto, RoleListDto, RoleListDtoListResultDto, PermissionDto, PermissionDtoListResultDto, RoleEditDto, FlatPermissionDto, GetRoleForEditOutput, RoleDtoPagedResultDto, ApplicationInfoDto, UserLoginInfoDto, TenantLoginInfoDto, GetCurrentLoginInformationsOutput, ActivityLogDto, ActivityLogDtoListResultDto, AnnualEstimatesTrackingDto, AnnualInvoicesTrackingDto, MonthTargetInfosDto, InvoicePeriodicTrackingDto, EstimatePeriodicTrackingDto, BestsellerPeriodicTrackingDto, TopClientsPeriodicTrackingDto, PeriodicTrackingDto, TotalStatisticsDto, MonthEvolutionDto, CreateTenantDto, TenantDto, TenantDtoPagedResultDto, AuthenticateModel, AuthenticateResultModel, GetAccessTokenModel, ExternalLoginProviderInfoModel, ExternalAuthenticateModel, ExternalAuthenticateResultModel, CreateUserDto, Int64EntityDto, RoleDtoListResultDto, ChangeUserLanguageDto, ChangePasswordDto, ResetPasswordDto, UserDtoPagedResultDto, ApiException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountServiceProxy", function() { return AccountServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueServiceProxy", function() { return CatalogueServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientServiceProxy", function() { return ClientServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationServiceProxy", function() { return ConfigurationServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryServiceAppServiceProxy", function() { return CountryServiceAppServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAccountServiceProxy", function() { return CustomAccountServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevisServiceProxy", function() { return DevisServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactureServiceProxy", function() { return FactureServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileApiServiceProxy", function() { return FileApiServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosEntrepriseServiceProxy", function() { return InfosEntrepriseServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGeneratorServiceProxy", function() { return ReportGeneratorServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleServiceProxy", function() { return RoleServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionServiceProxy", function() { return SessionServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsServiceProxy", function() { return StatisticsServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsManagementServiceProxy", function() { return SubscriptionsManagementServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantServiceProxy", function() { return TenantServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenAuthServiceProxy", function() { return TokenAuthServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceProxy", function() { return UserServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTenantAvailableInput", function() { return IsTenantAvailableInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantAvailabilityState", function() { return TenantAvailabilityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTenantAvailableOutput", function() { return IsTenantAvailableOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterInput", function() { return RegisterInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterOutput", function() { return RegisterOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCatalogueInput", function() { return CreateCatalogueInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueDto", function() { return CatalogueDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCatalogueInput", function() { return UpdateCatalogueInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueForAutoCompleteDto", function() { return CatalogueForAutoCompleteDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueForAutoCompleteDtoListResultDto", function() { return CatalogueForAutoCompleteDtoListResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueDtoListResultWithTotalEntityItemsDto", function() { return CatalogueDtoListResultWithTotalEntityItemsDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDto", function() { return ClientDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDtoListResultDto", function() { return ClientDtoListResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDtoListResultWithTotalEntityItemsDto", function() { return ClientDtoListResultWithTotalEntityItemsDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientForAutoCompleteDto", function() { return ClientForAutoCompleteDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientForAutoCompleteDtoListResultDto", function() { return ClientForAutoCompleteDtoListResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDefaultsDto", function() { return ClientDefaultsDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUiThemeInput", function() { return ChangeUiThemeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDto", function() { return CountryDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDtoListResultDto", function() { return CountryDtoListResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDto", function() { return UserDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevisStatutEnum", function() { return DevisStatutEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactureStatutEnum", function() { return FactureStatutEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModePaiementEnum", function() { return ModePaiementEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevisItemDto", function() { return DevisItemDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDevisInput", function() { return CreateDevisInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDevisInput", function() { return UpdateDevisInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevisDto", function() { return DevisDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimationInitiationDto", function() { return EstimationInitiationDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevisDtoListResultDto", function() { return DevisDtoListResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactureItemDto", function() { return FactureItemDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFactureInput", function() { return CreateFactureInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFactureInput", function() { return UpdateFactureInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactureDto", function() { return FactureDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceInitiationDto", function() { return InvoiceInitiationDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactureDtoListResultDto", function() { return FactureDtoListResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactureInfosPaiementDto", function() { return FactureInfosPaiementDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactureInfosPaiementDtoListResultWithTotalEntityItemsDto", function() { return FactureInfosPaiementDtoListResultWithTotalEntityItemsDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInfosEntrepriseInput", function() { return CreateInfosEntrepriseInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosEntrepriseDto", function() { return InfosEntrepriseDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfosDto", function() { return GeneralInfosDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosEntrepriseDtoListResultDto", function() { return InfosEntrepriseDtoListResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfosDto", function() { return ContactInfosDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultAnnotationsDto", function() { return DefaultAnnotationsDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoleDto", function() { return CreateRoleDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDto", function() { return RoleDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListDto", function() { return RoleListDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListDtoListResultDto", function() { return RoleListDtoListResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDto", function() { return PermissionDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDtoListResultDto", function() { return PermissionDtoListResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleEditDto", function() { return RoleEditDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatPermissionDto", function() { return FlatPermissionDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRoleForEditOutput", function() { return GetRoleForEditOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDtoPagedResultDto", function() { return RoleDtoPagedResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationInfoDto", function() { return ApplicationInfoDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginInfoDto", function() { return UserLoginInfoDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantLoginInfoDto", function() { return TenantLoginInfoDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentLoginInformationsOutput", function() { return GetCurrentLoginInformationsOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogDto", function() { return ActivityLogDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogDtoListResultDto", function() { return ActivityLogDtoListResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnualEstimatesTrackingDto", function() { return AnnualEstimatesTrackingDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnualInvoicesTrackingDto", function() { return AnnualInvoicesTrackingDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthTargetInfosDto", function() { return MonthTargetInfosDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePeriodicTrackingDto", function() { return InvoicePeriodicTrackingDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatePeriodicTrackingDto", function() { return EstimatePeriodicTrackingDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestsellerPeriodicTrackingDto", function() { return BestsellerPeriodicTrackingDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopClientsPeriodicTrackingDto", function() { return TopClientsPeriodicTrackingDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodicTrackingDto", function() { return PeriodicTrackingDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalStatisticsDto", function() { return TotalStatisticsDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthEvolutionDto", function() { return MonthEvolutionDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTenantDto", function() { return CreateTenantDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantDto", function() { return TenantDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantDtoPagedResultDto", function() { return TenantDtoPagedResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function() { return AuthenticateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateResultModel", function() { return AuthenticateResultModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAccessTokenModel", function() { return GetAccessTokenModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLoginProviderInfoModel", function() { return ExternalLoginProviderInfoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalAuthenticateModel", function() { return ExternalAuthenticateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalAuthenticateResultModel", function() { return ExternalAuthenticateResultModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserDto", function() { return CreateUserDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int64EntityDto", function() { return Int64EntityDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDtoListResultDto", function() { return RoleDtoListResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUserLanguageDto", function() { return ChangeUserLanguageDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordDto", function() { return ChangePasswordDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordDto", function() { return ResetPasswordDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDtoPagedResultDto", function() { return UserDtoPagedResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiException", function() { return ApiException; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.11.1.0 (NJsonSchema v10.4.3.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming







var API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('API_BASE_URL');
var AccountServiceProxy = /** @class */ (function () {
    function AccountServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    AccountServiceProxy.prototype.isTenantAvailable = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Account/IsTenantAvailable";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processIsTenantAvailable(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processIsTenantAvailable(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    AccountServiceProxy.prototype.processIsTenantAvailable = function (response) {
        var e_1, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = IsTenantAvailableOutput.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    AccountServiceProxy.prototype.register = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Account/Register";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processRegister(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processRegister(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    AccountServiceProxy.prototype.processRegister = function (response) {
        var e_2, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = RegisterOutput.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    AccountServiceProxy.ɵfac = function AccountServiceProxy_Factory(t) { return new (t || AccountServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    AccountServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AccountServiceProxy, factory: AccountServiceProxy.ɵfac });
    return AccountServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AccountServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var CatalogueServiceProxy = /** @class */ (function () {
    function CatalogueServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    CatalogueServiceProxy.prototype.createCatalogue = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Catalogue/CreateCatalogue";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreateCatalogue(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreateCatalogue(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CatalogueServiceProxy.prototype.processCreateCatalogue = function (response) {
        var e_3, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = CatalogueDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    CatalogueServiceProxy.prototype.updateCatalogue = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Catalogue/UpdateCatalogue";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processUpdateCatalogue(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processUpdateCatalogue(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CatalogueServiceProxy.prototype.processUpdateCatalogue = function (response) {
        var e_4, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param catalogueId (optional)
     * @return Success
     */
    CatalogueServiceProxy.prototype.deleteCatalogue = function (catalogueId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Catalogue/DeleteCatalogue?";
        if (catalogueId === null)
            throw new Error("The parameter 'catalogueId' cannot be null.");
        else if (catalogueId !== undefined)
            url_ += "catalogueId=" + encodeURIComponent("" + catalogueId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processDeleteCatalogue(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processDeleteCatalogue(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CatalogueServiceProxy.prototype.processDeleteCatalogue = function (response) {
        var e_5, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    CatalogueServiceProxy.prototype.getByIdCatalogue = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Catalogue/GetByIdCatalogue?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByIdCatalogue(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByIdCatalogue(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CatalogueServiceProxy.prototype.processGetByIdCatalogue = function (response) {
        var e_6, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = CatalogueDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param keyword (optional)
     * @return Success
     */
    CatalogueServiceProxy.prototype.getCatalogueForAutoComplete = function (keyword) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Catalogue/GetCatalogueForAutoComplete?";
        if (keyword !== undefined && keyword !== null)
            url_ += "keyword=" + encodeURIComponent("" + keyword) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetCatalogueForAutoComplete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetCatalogueForAutoComplete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CatalogueServiceProxy.prototype.processGetCatalogueForAutoComplete = function (response) {
        var e_7, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_7) throw e_7.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = CatalogueForAutoCompleteDtoListResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param first (optional)
     * @param rows (optional)
     * @param globalFilter (optional)
     * @param sortField (optional)
     * @param sortOrder (optional)
     * @param filtres_CatalogueType (optional)
     * @return Success
     */
    CatalogueServiceProxy.prototype.getAllCatalogues = function (first, rows, globalFilter, sortField, sortOrder, filtres_CatalogueType) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Catalogue/GetAllCatalogues?";
        if (first === null)
            throw new Error("The parameter 'first' cannot be null.");
        else if (first !== undefined)
            url_ += "First=" + encodeURIComponent("" + first) + "&";
        if (rows === null)
            throw new Error("The parameter 'rows' cannot be null.");
        else if (rows !== undefined)
            url_ += "Rows=" + encodeURIComponent("" + rows) + "&";
        if (globalFilter !== undefined && globalFilter !== null)
            url_ += "GlobalFilter=" + encodeURIComponent("" + globalFilter) + "&";
        if (sortField !== undefined && sortField !== null)
            url_ += "SortField=" + encodeURIComponent("" + sortField) + "&";
        if (sortOrder !== undefined && sortOrder !== null)
            url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (filtres_CatalogueType !== undefined && filtres_CatalogueType !== null)
            url_ += "Filtres.CatalogueType=" + encodeURIComponent("" + filtres_CatalogueType) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllCatalogues(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllCatalogues(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CatalogueServiceProxy.prototype.processGetAllCatalogues = function (response) {
        var e_8, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = CatalogueDtoListResultWithTotalEntityItemsDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    CatalogueServiceProxy.ɵfac = function CatalogueServiceProxy_Factory(t) { return new (t || CatalogueServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    CatalogueServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CatalogueServiceProxy, factory: CatalogueServiceProxy.ɵfac });
    return CatalogueServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CatalogueServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var ClientServiceProxy = /** @class */ (function () {
    function ClientServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    ClientServiceProxy.prototype.createClient = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Client/CreateClient";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreateClient(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreateClient(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    ClientServiceProxy.prototype.processCreateClient = function (response) {
        var e_9, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = ClientDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    ClientServiceProxy.prototype.updateClient = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Client/UpdateClient";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processUpdateClient(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processUpdateClient(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    ClientServiceProxy.prototype.processUpdateClient = function (response) {
        var e_10, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_10) throw e_10.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = ClientDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    ClientServiceProxy.prototype.getByIdClient = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Client/GetByIdClient?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByIdClient(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByIdClient(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    ClientServiceProxy.prototype.processGetByIdClient = function (response) {
        var e_11, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_11) throw e_11.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = ClientDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param categ (optional)
     * @return Success
     */
    ClientServiceProxy.prototype.getByCategClient = function (categ) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Client/GetByCategClient?";
        if (categ !== undefined && categ !== null)
            url_ += "categ=" + encodeURIComponent("" + categ) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByCategClient(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByCategClient(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    ClientServiceProxy.prototype.processGetByCategClient = function (response) {
        var e_12, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_12_1) { e_12 = { error: e_12_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_12) throw e_12.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = ClientDtoListResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param first (optional)
     * @param rows (optional)
     * @param globalFilter (optional)
     * @param sortField (optional)
     * @param sortOrder (optional)
     * @param clientFilter_Category (optional)
     * @param clientFilter_Type (optional)
     * @return Success
     */
    ClientServiceProxy.prototype.getAllClients = function (first, rows, globalFilter, sortField, sortOrder, clientFilter_Category, clientFilter_Type) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Client/GetAllClients?";
        if (first === null)
            throw new Error("The parameter 'first' cannot be null.");
        else if (first !== undefined)
            url_ += "First=" + encodeURIComponent("" + first) + "&";
        if (rows === null)
            throw new Error("The parameter 'rows' cannot be null.");
        else if (rows !== undefined)
            url_ += "Rows=" + encodeURIComponent("" + rows) + "&";
        if (globalFilter !== undefined && globalFilter !== null)
            url_ += "GlobalFilter=" + encodeURIComponent("" + globalFilter) + "&";
        if (sortField !== undefined && sortField !== null)
            url_ += "SortField=" + encodeURIComponent("" + sortField) + "&";
        if (sortOrder !== undefined && sortOrder !== null)
            url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (clientFilter_Category !== undefined && clientFilter_Category !== null)
            url_ += "ClientFilter.Category=" + encodeURIComponent("" + clientFilter_Category) + "&";
        if (clientFilter_Type !== undefined && clientFilter_Type !== null)
            url_ += "ClientFilter.Type=" + encodeURIComponent("" + clientFilter_Type) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllClients(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllClients(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    ClientServiceProxy.prototype.processGetAllClients = function (response) {
        var e_13, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_13_1) { e_13 = { error: e_13_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_13) throw e_13.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = ClientDtoListResultWithTotalEntityItemsDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param clientId (optional)
     * @return Success
     */
    ClientServiceProxy.prototype.deleteClient = function (clientId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Client/DeleteClient?";
        if (clientId === null)
            throw new Error("The parameter 'clientId' cannot be null.");
        else if (clientId !== undefined)
            url_ += "clientId=" + encodeURIComponent("" + clientId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processDeleteClient(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processDeleteClient(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    ClientServiceProxy.prototype.processDeleteClient = function (response) {
        var e_14, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_14_1) { e_14 = { error: e_14_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_14) throw e_14.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param motCle (optional)
     * @return Success
     */
    ClientServiceProxy.prototype.getClientForAutoComplete = function (motCle) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Client/GetClientForAutoComplete?";
        if (motCle !== undefined && motCle !== null)
            url_ += "motCle=" + encodeURIComponent("" + motCle) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetClientForAutoComplete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetClientForAutoComplete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    ClientServiceProxy.prototype.processGetClientForAutoComplete = function (response) {
        var e_15, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_15_1) { e_15 = { error: e_15_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_15) throw e_15.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = ClientForAutoCompleteDtoListResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param clientId (optional)
     * @return Success
     */
    ClientServiceProxy.prototype.getClientDefaults = function (clientId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Client/GetClientDefaults?";
        if (clientId === null)
            throw new Error("The parameter 'clientId' cannot be null.");
        else if (clientId !== undefined)
            url_ += "ClientId=" + encodeURIComponent("" + clientId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetClientDefaults(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetClientDefaults(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    ClientServiceProxy.prototype.processGetClientDefaults = function (response) {
        var e_16, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_16_1) { e_16 = { error: e_16_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_16) throw e_16.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = ClientDefaultsDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    ClientServiceProxy.ɵfac = function ClientServiceProxy_Factory(t) { return new (t || ClientServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    ClientServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ClientServiceProxy, factory: ClientServiceProxy.ɵfac });
    return ClientServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClientServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var ConfigurationServiceProxy = /** @class */ (function () {
    function ConfigurationServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    ConfigurationServiceProxy.prototype.changeUiTheme = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Configuration/ChangeUiTheme";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processChangeUiTheme(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processChangeUiTheme(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    ConfigurationServiceProxy.prototype.processChangeUiTheme = function (response) {
        var e_17, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_17_1) { e_17 = { error: e_17_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_17) throw e_17.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    ConfigurationServiceProxy.ɵfac = function ConfigurationServiceProxy_Factory(t) { return new (t || ConfigurationServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    ConfigurationServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfigurationServiceProxy, factory: ConfigurationServiceProxy.ɵfac });
    return ConfigurationServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ConfigurationServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var CountryServiceAppServiceProxy = /** @class */ (function () {
    function CountryServiceAppServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @return Success
     */
    CountryServiceAppServiceProxy.prototype.getAllCountries = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/CountryServiceApp/GetAllCountries";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllCountries(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllCountries(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CountryServiceAppServiceProxy.prototype.processGetAllCountries = function (response) {
        var e_18, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_18_1) { e_18 = { error: e_18_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_18) throw e_18.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = CountryDtoListResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    CountryServiceAppServiceProxy.prototype.getAllDBCountries = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/CountryServiceApp/GetAllDBCountries";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllDBCountries(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllDBCountries(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CountryServiceAppServiceProxy.prototype.processGetAllDBCountries = function (response) {
        var e_19, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_19_1) { e_19 = { error: e_19_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_19) throw e_19.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var e_20, _a;
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    try {
                        for (var resultData200_1 = __values(resultData200), resultData200_1_1 = resultData200_1.next(); !resultData200_1_1.done; resultData200_1_1 = resultData200_1.next()) {
                            var item = resultData200_1_1.value;
                            result200.push(Country.fromJS(item));
                        }
                    }
                    catch (e_20_1) { e_20 = { error: e_20_1 }; }
                    finally {
                        try {
                            if (resultData200_1_1 && !resultData200_1_1.done && (_a = resultData200_1.return)) _a.call(resultData200_1);
                        }
                        finally { if (e_20) throw e_20.error; }
                    }
                }
                else {
                    result200 = null;
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    CountryServiceAppServiceProxy.prototype.insertManyCountries = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/CountryServiceApp/InsertManyCountries";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processInsertManyCountries(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processInsertManyCountries(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CountryServiceAppServiceProxy.prototype.processInsertManyCountries = function (response) {
        var e_21, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_21_1) { e_21 = { error: e_21_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_21) throw e_21.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    CountryServiceAppServiceProxy.ɵfac = function CountryServiceAppServiceProxy_Factory(t) { return new (t || CountryServiceAppServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    CountryServiceAppServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CountryServiceAppServiceProxy, factory: CountryServiceAppServiceProxy.ɵfac });
    return CountryServiceAppServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CountryServiceAppServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var CustomAccountServiceProxy = /** @class */ (function () {
    function CustomAccountServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param emailAddres (optional)
     * @return Success
     */
    CustomAccountServiceProxy.prototype.isEmailAddresUnique = function (emailAddres) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/CustomAccount/IsEmailAddresUnique?";
        if (emailAddres !== undefined && emailAddres !== null)
            url_ += "emailAddres=" + encodeURIComponent("" + emailAddres) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processIsEmailAddresUnique(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processIsEmailAddresUnique(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CustomAccountServiceProxy.prototype.processIsEmailAddresUnique = function (response) {
        var e_22, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_22_1) { e_22 = { error: e_22_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_22) throw e_22.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param emailAddress (optional)
     * @param prenom (optional)
     * @param userId (optional)
     * @return Success
     */
    CustomAccountServiceProxy.prototype.sendConfirmationEmail = function (emailAddress, prenom, userId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/CustomAccount/SendConfirmationEmail?";
        if (emailAddress !== undefined && emailAddress !== null)
            url_ += "emailAddress=" + encodeURIComponent("" + emailAddress) + "&";
        if (prenom !== undefined && prenom !== null)
            url_ += "prenom=" + encodeURIComponent("" + prenom) + "&";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processSendConfirmationEmail(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processSendConfirmationEmail(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CustomAccountServiceProxy.prototype.processSendConfirmationEmail = function (response) {
        var e_23, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_23_1) { e_23 = { error: e_23_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_23) throw e_23.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param userId (optional)
     * @return Success
     */
    CustomAccountServiceProxy.prototype.checkOrUpdateConfirmationEmailIsSent = function (userId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/CustomAccount/checkOrUpdateConfirmationEmailIsSent?";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCheckOrUpdateConfirmationEmailIsSent(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCheckOrUpdateConfirmationEmailIsSent(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CustomAccountServiceProxy.prototype.processCheckOrUpdateConfirmationEmailIsSent = function (response) {
        var e_24, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_24_1) { e_24 = { error: e_24_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_24) throw e_24.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param userId (optional)
     * @param password (optional)
     * @return Success
     */
    CustomAccountServiceProxy.prototype.resetPassword = function (userId, password) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/CustomAccount/ResetPassword?";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&";
        if (password !== undefined && password !== null)
            url_ += "password=" + encodeURIComponent("" + password) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processResetPassword(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processResetPassword(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CustomAccountServiceProxy.prototype.processResetPassword = function (response) {
        var e_25, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_25_1) { e_25 = { error: e_25_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_25) throw e_25.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param emailAddress (optional)
     * @return Success
     */
    CustomAccountServiceProxy.prototype.sendResetPasswordMail = function (emailAddress) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/CustomAccount/SendResetPasswordMail?";
        if (emailAddress !== undefined && emailAddress !== null)
            url_ += "emailAddress=" + encodeURIComponent("" + emailAddress) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processSendResetPasswordMail(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processSendResetPasswordMail(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CustomAccountServiceProxy.prototype.processSendResetPasswordMail = function (response) {
        var e_26, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_26_1) { e_26 = { error: e_26_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_26) throw e_26.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param emailAddress (optional)
     * @return Success
     */
    CustomAccountServiceProxy.prototype.getUserByEmailAddress = function (emailAddress) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/CustomAccount/GetUserByEmailAddress?";
        if (emailAddress !== undefined && emailAddress !== null)
            url_ += "emailAddress=" + encodeURIComponent("" + emailAddress) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetUserByEmailAddress(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetUserByEmailAddress(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    CustomAccountServiceProxy.prototype.processGetUserByEmailAddress = function (response) {
        var e_27, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_27_1) { e_27 = { error: e_27_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_27) throw e_27.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = UserDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    CustomAccountServiceProxy.ɵfac = function CustomAccountServiceProxy_Factory(t) { return new (t || CustomAccountServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    CustomAccountServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomAccountServiceProxy, factory: CustomAccountServiceProxy.ɵfac });
    return CustomAccountServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CustomAccountServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var DevisServiceProxy = /** @class */ (function () {
    function DevisServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    DevisServiceProxy.prototype.createDevis = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/CreateDevis";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreateDevis(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreateDevis(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processCreateDevis = function (response) {
        var e_28, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_28_1) { e_28 = { error: e_28_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_28) throw e_28.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    DevisServiceProxy.prototype.updateDevis = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/UpdateDevis";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processUpdateDevis(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processUpdateDevis(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processUpdateDevis = function (response) {
        var e_29, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_29_1) { e_29 = { error: e_29_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_29) throw e_29.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    DevisServiceProxy.prototype.getByIdDevis = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/GetByIdDevis?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByIdDevis(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByIdDevis(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processGetByIdDevis = function (response) {
        var e_30, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_30_1) { e_30 = { error: e_30_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_30) throw e_30.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = DevisDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param devisId (optional)
     * @return Success
     */
    DevisServiceProxy.prototype.deleteDevis = function (devisId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/DeleteDevis?";
        if (devisId === null)
            throw new Error("The parameter 'devisId' cannot be null.");
        else if (devisId !== undefined)
            url_ += "DevisId=" + encodeURIComponent("" + devisId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processDeleteDevis(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processDeleteDevis(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processDeleteDevis = function (response) {
        var e_31, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_31_1) { e_31 = { error: e_31_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_31) throw e_31.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    DevisServiceProxy.prototype.getLastReference = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/GetLastReference";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetLastReference(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetLastReference(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processGetLastReference = function (response) {
        var e_32, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_32_1) { e_32 = { error: e_32_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_32) throw e_32.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    DevisServiceProxy.prototype.getLastReferenceWithIntroMessageAndFooter = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/GetLastReferenceWithIntroMessageAndFooter";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetLastReferenceWithIntroMessageAndFooter(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetLastReferenceWithIntroMessageAndFooter(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processGetLastReferenceWithIntroMessageAndFooter = function (response) {
        var e_33, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_33_1) { e_33 = { error: e_33_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_33) throw e_33.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = EstimationInitiationDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param devisId (optional)
     * @param body (optional)
     * @return Success
     */
    DevisServiceProxy.prototype.changeDevisStatut = function (devisId, body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/ChangeDevisStatut?";
        if (devisId === null)
            throw new Error("The parameter 'devisId' cannot be null.");
        else if (devisId !== undefined)
            url_ += "DevisId=" + encodeURIComponent("" + devisId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processChangeDevisStatut(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processChangeDevisStatut(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processChangeDevisStatut = function (response) {
        var e_34, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_34_1) { e_34 = { error: e_34_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_34) throw e_34.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param first (optional)
     * @param rows (optional)
     * @param globalFilter (optional)
     * @param sortField (optional)
     * @param sortOrder (optional)
     * @param filtres_Client (optional)
     * @param filtres_DateEmission (optional)
     * @param filtres_EcheancePaiement (optional)
     * @param filtres_MontantTtc (optional)
     * @param filtres_Statut (optional)
     * @return Success
     */
    DevisServiceProxy.prototype.getAllDevis = function (first, rows, globalFilter, sortField, sortOrder, filtres_Client, filtres_DateEmission, filtres_EcheancePaiement, filtres_MontantTtc, filtres_Statut) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/GetAllDevis?";
        if (first === null)
            throw new Error("The parameter 'first' cannot be null.");
        else if (first !== undefined)
            url_ += "First=" + encodeURIComponent("" + first) + "&";
        if (rows === null)
            throw new Error("The parameter 'rows' cannot be null.");
        else if (rows !== undefined)
            url_ += "Rows=" + encodeURIComponent("" + rows) + "&";
        if (globalFilter !== undefined && globalFilter !== null)
            url_ += "GlobalFilter=" + encodeURIComponent("" + globalFilter) + "&";
        if (sortField !== undefined && sortField !== null)
            url_ += "SortField=" + encodeURIComponent("" + sortField) + "&";
        if (sortOrder !== undefined && sortOrder !== null)
            url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (filtres_Client === null)
            throw new Error("The parameter 'filtres_Client' cannot be null.");
        else if (filtres_Client !== undefined)
            url_ += "Filtres.Client=" + encodeURIComponent("" + filtres_Client) + "&";
        if (filtres_DateEmission !== undefined && filtres_DateEmission !== null)
            filtres_DateEmission && filtres_DateEmission.forEach(function (item_) { url_ += "Filtres.DateEmission=" + encodeURIComponent(item_ ? "" + item_.toJSON() : "null") + "&"; });
        if (filtres_EcheancePaiement === null)
            throw new Error("The parameter 'filtres_EcheancePaiement' cannot be null.");
        else if (filtres_EcheancePaiement !== undefined)
            url_ += "Filtres.EcheancePaiement=" + encodeURIComponent("" + filtres_EcheancePaiement) + "&";
        if (filtres_MontantTtc === null)
            throw new Error("The parameter 'filtres_MontantTtc' cannot be null.");
        else if (filtres_MontantTtc !== undefined)
            url_ += "Filtres.MontantTtc=" + encodeURIComponent("" + filtres_MontantTtc) + "&";
        if (filtres_Statut === null)
            throw new Error("The parameter 'filtres_Statut' cannot be null.");
        else if (filtres_Statut !== undefined)
            url_ += "Filtres.Statut=" + encodeURIComponent("" + filtres_Statut) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllDevis(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllDevis(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processGetAllDevis = function (response) {
        var e_35, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_35_1) { e_35 = { error: e_35_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_35) throw e_35.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = DevisDtoListResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param first (optional)
     * @param rows (optional)
     * @param globalFilter (optional)
     * @param sortField (optional)
     * @param sortOrder (optional)
     * @param filtres_Client (optional)
     * @param filtres_DateEmission (optional)
     * @param filtres_EcheancePaiement (optional)
     * @param filtres_MontantTtc (optional)
     * @param filtres_Statut (optional)
     * @return Success
     */
    DevisServiceProxy.prototype.getAllDevisTotalRecords = function (first, rows, globalFilter, sortField, sortOrder, filtres_Client, filtres_DateEmission, filtres_EcheancePaiement, filtres_MontantTtc, filtres_Statut) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/GetAllDevisTotalRecords?";
        if (first === null)
            throw new Error("The parameter 'first' cannot be null.");
        else if (first !== undefined)
            url_ += "First=" + encodeURIComponent("" + first) + "&";
        if (rows === null)
            throw new Error("The parameter 'rows' cannot be null.");
        else if (rows !== undefined)
            url_ += "Rows=" + encodeURIComponent("" + rows) + "&";
        if (globalFilter !== undefined && globalFilter !== null)
            url_ += "GlobalFilter=" + encodeURIComponent("" + globalFilter) + "&";
        if (sortField !== undefined && sortField !== null)
            url_ += "SortField=" + encodeURIComponent("" + sortField) + "&";
        if (sortOrder !== undefined && sortOrder !== null)
            url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (filtres_Client === null)
            throw new Error("The parameter 'filtres_Client' cannot be null.");
        else if (filtres_Client !== undefined)
            url_ += "Filtres.Client=" + encodeURIComponent("" + filtres_Client) + "&";
        if (filtres_DateEmission !== undefined && filtres_DateEmission !== null)
            filtres_DateEmission && filtres_DateEmission.forEach(function (item_) { url_ += "Filtres.DateEmission=" + encodeURIComponent(item_ ? "" + item_.toJSON() : "null") + "&"; });
        if (filtres_EcheancePaiement === null)
            throw new Error("The parameter 'filtres_EcheancePaiement' cannot be null.");
        else if (filtres_EcheancePaiement !== undefined)
            url_ += "Filtres.EcheancePaiement=" + encodeURIComponent("" + filtres_EcheancePaiement) + "&";
        if (filtres_MontantTtc === null)
            throw new Error("The parameter 'filtres_MontantTtc' cannot be null.");
        else if (filtres_MontantTtc !== undefined)
            url_ += "Filtres.MontantTtc=" + encodeURIComponent("" + filtres_MontantTtc) + "&";
        if (filtres_Statut === null)
            throw new Error("The parameter 'filtres_Statut' cannot be null.");
        else if (filtres_Statut !== undefined)
            url_ += "Filtres.Statut=" + encodeURIComponent("" + filtres_Statut) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllDevisTotalRecords(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllDevisTotalRecords(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processGetAllDevisTotalRecords = function (response) {
        var e_36, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_36_1) { e_36 = { error: e_36_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_36) throw e_36.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param first (optional)
     * @param rows (optional)
     * @param globalFilter (optional)
     * @param sortField (optional)
     * @param sortOrder (optional)
     * @param filtres_Client (optional)
     * @param filtres_DateEmission (optional)
     * @param filtres_EcheancePaiement (optional)
     * @param filtres_MontantTtc (optional)
     * @param filtres_Statut (optional)
     * @return Success
     */
    DevisServiceProxy.prototype.getAllDevisMontantTotal = function (first, rows, globalFilter, sortField, sortOrder, filtres_Client, filtres_DateEmission, filtres_EcheancePaiement, filtres_MontantTtc, filtres_Statut) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/GetAllDevisMontantTotal?";
        if (first === null)
            throw new Error("The parameter 'first' cannot be null.");
        else if (first !== undefined)
            url_ += "First=" + encodeURIComponent("" + first) + "&";
        if (rows === null)
            throw new Error("The parameter 'rows' cannot be null.");
        else if (rows !== undefined)
            url_ += "Rows=" + encodeURIComponent("" + rows) + "&";
        if (globalFilter !== undefined && globalFilter !== null)
            url_ += "GlobalFilter=" + encodeURIComponent("" + globalFilter) + "&";
        if (sortField !== undefined && sortField !== null)
            url_ += "SortField=" + encodeURIComponent("" + sortField) + "&";
        if (sortOrder !== undefined && sortOrder !== null)
            url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (filtres_Client === null)
            throw new Error("The parameter 'filtres_Client' cannot be null.");
        else if (filtres_Client !== undefined)
            url_ += "Filtres.Client=" + encodeURIComponent("" + filtres_Client) + "&";
        if (filtres_DateEmission !== undefined && filtres_DateEmission !== null)
            filtres_DateEmission && filtres_DateEmission.forEach(function (item_) { url_ += "Filtres.DateEmission=" + encodeURIComponent(item_ ? "" + item_.toJSON() : "null") + "&"; });
        if (filtres_EcheancePaiement === null)
            throw new Error("The parameter 'filtres_EcheancePaiement' cannot be null.");
        else if (filtres_EcheancePaiement !== undefined)
            url_ += "Filtres.EcheancePaiement=" + encodeURIComponent("" + filtres_EcheancePaiement) + "&";
        if (filtres_MontantTtc === null)
            throw new Error("The parameter 'filtres_MontantTtc' cannot be null.");
        else if (filtres_MontantTtc !== undefined)
            url_ += "Filtres.MontantTtc=" + encodeURIComponent("" + filtres_MontantTtc) + "&";
        if (filtres_Statut === null)
            throw new Error("The parameter 'filtres_Statut' cannot be null.");
        else if (filtres_Statut !== undefined)
            url_ += "Filtres.Statut=" + encodeURIComponent("" + filtres_Statut) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllDevisMontantTotal(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllDevisMontantTotal(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processGetAllDevisMontantTotal = function (response) {
        var e_37, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_37_1) { e_37 = { error: e_37_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_37) throw e_37.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    DevisServiceProxy.prototype.getByIdDevisReport = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/GetByIdDevisReport?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByIdDevisReport(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByIdDevisReport(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processGetByIdDevisReport = function (response) {
        var e_38, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_38_1) { e_38 = { error: e_38_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_38) throw e_38.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param reference (optional)
     * @param dateEmission (optional)
     * @param echeancePaiement (optional)
     * @param messageIntroduction (optional)
     * @param piedDePage (optional)
     * @param remise (optional)
     * @param currency (optional)
     * @param statut (optional)
     * @param devisItems (optional)
     * @param clientId (optional)
     * @param montantTtc (optional)
     * @return Success
     */
    DevisServiceProxy.prototype.getByteDataDevisReport = function (reference, dateEmission, echeancePaiement, messageIntroduction, piedDePage, remise, currency, statut, devisItems, clientId, montantTtc) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/GetByteDataDevisReport?";
        if (reference !== undefined && reference !== null)
            url_ += "Reference=" + encodeURIComponent("" + reference) + "&";
        if (dateEmission === null)
            throw new Error("The parameter 'dateEmission' cannot be null.");
        else if (dateEmission !== undefined)
            url_ += "DateEmission=" + encodeURIComponent(dateEmission ? "" + dateEmission.toJSON() : "") + "&";
        if (echeancePaiement === null)
            throw new Error("The parameter 'echeancePaiement' cannot be null.");
        else if (echeancePaiement !== undefined)
            url_ += "EcheancePaiement=" + encodeURIComponent("" + echeancePaiement) + "&";
        if (messageIntroduction !== undefined && messageIntroduction !== null)
            url_ += "MessageIntroduction=" + encodeURIComponent("" + messageIntroduction) + "&";
        if (piedDePage !== undefined && piedDePage !== null)
            url_ += "PiedDePage=" + encodeURIComponent("" + piedDePage) + "&";
        if (remise === null)
            throw new Error("The parameter 'remise' cannot be null.");
        else if (remise !== undefined)
            url_ += "Remise=" + encodeURIComponent("" + remise) + "&";
        if (currency !== undefined && currency !== null)
            url_ += "Currency=" + encodeURIComponent("" + currency) + "&";
        if (statut === null)
            throw new Error("The parameter 'statut' cannot be null.");
        else if (statut !== undefined)
            url_ += "Statut=" + encodeURIComponent("" + statut) + "&";
        if (devisItems !== undefined && devisItems !== null)
            devisItems && devisItems.forEach(function (item, index) {
                for (var attr in item)
                    if (item.hasOwnProperty(attr)) {
                        url_ += "DevisItems[" + index + "]." + attr + "=" + encodeURIComponent("" + item[attr]) + "&";
                    }
            });
        if (clientId === null)
            throw new Error("The parameter 'clientId' cannot be null.");
        else if (clientId !== undefined)
            url_ += "ClientId=" + encodeURIComponent("" + clientId) + "&";
        if (montantTtc === null)
            throw new Error("The parameter 'montantTtc' cannot be null.");
        else if (montantTtc !== undefined)
            url_ += "MontantTtc=" + encodeURIComponent("" + montantTtc) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByteDataDevisReport(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByteDataDevisReport(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processGetByteDataDevisReport = function (response) {
        var e_39, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_39_1) { e_39 = { error: e_39_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_39) throw e_39.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param reference (optional)
     * @return Success
     */
    DevisServiceProxy.prototype.checkIfReferenceIsExist = function (reference) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Devis/CheckIfReferenceIsExist?";
        if (reference !== undefined && reference !== null)
            url_ += "reference=" + encodeURIComponent("" + reference) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCheckIfReferenceIsExist(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCheckIfReferenceIsExist(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    DevisServiceProxy.prototype.processCheckIfReferenceIsExist = function (response) {
        var e_40, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_40_1) { e_40 = { error: e_40_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_40) throw e_40.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    DevisServiceProxy.ɵfac = function DevisServiceProxy_Factory(t) { return new (t || DevisServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    DevisServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DevisServiceProxy, factory: DevisServiceProxy.ɵfac });
    return DevisServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DevisServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var FactureServiceProxy = /** @class */ (function () {
    function FactureServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.createFacture = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/CreateFacture";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreateFacture(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreateFacture(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processCreateFacture = function (response) {
        var e_41, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_41_1) { e_41 = { error: e_41_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_41) throw e_41.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.updateFacture = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/UpdateFacture";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processUpdateFacture(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processUpdateFacture(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processUpdateFacture = function (response) {
        var e_42, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_42_1) { e_42 = { error: e_42_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_42) throw e_42.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.getByIdFacture = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/GetByIdFacture?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByIdFacture(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByIdFacture(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processGetByIdFacture = function (response) {
        var e_43, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_43_1) { e_43 = { error: e_43_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_43) throw e_43.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = FactureDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param factureId (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.deleteFacture = function (factureId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/DeleteFacture?";
        if (factureId === null)
            throw new Error("The parameter 'factureId' cannot be null.");
        else if (factureId !== undefined)
            url_ += "FactureId=" + encodeURIComponent("" + factureId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processDeleteFacture(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processDeleteFacture(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processDeleteFacture = function (response) {
        var e_44, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_44_1) { e_44 = { error: e_44_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_44) throw e_44.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    FactureServiceProxy.prototype.getLastReference = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/GetLastReference";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetLastReference(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetLastReference(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processGetLastReference = function (response) {
        var e_45, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_45_1) { e_45 = { error: e_45_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_45) throw e_45.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    FactureServiceProxy.prototype.getLastReferenceWithIntroMessageAndFooter = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/GetLastReferenceWithIntroMessageAndFooter";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetLastReferenceWithIntroMessageAndFooter(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetLastReferenceWithIntroMessageAndFooter(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processGetLastReferenceWithIntroMessageAndFooter = function (response) {
        var e_46, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_46_1) { e_46 = { error: e_46_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_46) throw e_46.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = InvoiceInitiationDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param factureId (optional)
     * @param body (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.changeFactureStatut = function (factureId, body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/ChangeFactureStatut?";
        if (factureId === null)
            throw new Error("The parameter 'factureId' cannot be null.");
        else if (factureId !== undefined)
            url_ += "FactureId=" + encodeURIComponent("" + factureId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processChangeFactureStatut(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processChangeFactureStatut(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processChangeFactureStatut = function (response) {
        var e_47, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_47_1) { e_47 = { error: e_47_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_47) throw e_47.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param first (optional)
     * @param rows (optional)
     * @param globalFilter (optional)
     * @param sortField (optional)
     * @param sortOrder (optional)
     * @param filtres_Client (optional)
     * @param filtres_DateEmission (optional)
     * @param filtres_EcheancePaiement (optional)
     * @param filtres_MontantTtc (optional)
     * @param filtres_Statut (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.getAllFacture = function (first, rows, globalFilter, sortField, sortOrder, filtres_Client, filtres_DateEmission, filtres_EcheancePaiement, filtres_MontantTtc, filtres_Statut) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/GetAllFacture?";
        if (first === null)
            throw new Error("The parameter 'first' cannot be null.");
        else if (first !== undefined)
            url_ += "First=" + encodeURIComponent("" + first) + "&";
        if (rows === null)
            throw new Error("The parameter 'rows' cannot be null.");
        else if (rows !== undefined)
            url_ += "Rows=" + encodeURIComponent("" + rows) + "&";
        if (globalFilter !== undefined && globalFilter !== null)
            url_ += "GlobalFilter=" + encodeURIComponent("" + globalFilter) + "&";
        if (sortField !== undefined && sortField !== null)
            url_ += "SortField=" + encodeURIComponent("" + sortField) + "&";
        if (sortOrder !== undefined && sortOrder !== null)
            url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (filtres_Client === null)
            throw new Error("The parameter 'filtres_Client' cannot be null.");
        else if (filtres_Client !== undefined)
            url_ += "Filtres.Client=" + encodeURIComponent("" + filtres_Client) + "&";
        if (filtres_DateEmission !== undefined && filtres_DateEmission !== null)
            filtres_DateEmission && filtres_DateEmission.forEach(function (item_) { url_ += "Filtres.DateEmission=" + encodeURIComponent(item_ ? "" + item_.toJSON() : "null") + "&"; });
        if (filtres_EcheancePaiement === null)
            throw new Error("The parameter 'filtres_EcheancePaiement' cannot be null.");
        else if (filtres_EcheancePaiement !== undefined)
            url_ += "Filtres.EcheancePaiement=" + encodeURIComponent("" + filtres_EcheancePaiement) + "&";
        if (filtres_MontantTtc === null)
            throw new Error("The parameter 'filtres_MontantTtc' cannot be null.");
        else if (filtres_MontantTtc !== undefined)
            url_ += "Filtres.MontantTtc=" + encodeURIComponent("" + filtres_MontantTtc) + "&";
        if (filtres_Statut === null)
            throw new Error("The parameter 'filtres_Statut' cannot be null.");
        else if (filtres_Statut !== undefined)
            url_ += "Filtres.Statut=" + encodeURIComponent("" + filtres_Statut) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllFacture(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllFacture(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processGetAllFacture = function (response) {
        var e_48, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_48_1) { e_48 = { error: e_48_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_48) throw e_48.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = FactureDtoListResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param first (optional)
     * @param rows (optional)
     * @param globalFilter (optional)
     * @param sortField (optional)
     * @param sortOrder (optional)
     * @param filtres_Client (optional)
     * @param filtres_DateEmission (optional)
     * @param filtres_EcheancePaiement (optional)
     * @param filtres_MontantTtc (optional)
     * @param filtres_Statut (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.getAllFactureTotalRecords = function (first, rows, globalFilter, sortField, sortOrder, filtres_Client, filtres_DateEmission, filtres_EcheancePaiement, filtres_MontantTtc, filtres_Statut) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/GetAllFactureTotalRecords?";
        if (first === null)
            throw new Error("The parameter 'first' cannot be null.");
        else if (first !== undefined)
            url_ += "First=" + encodeURIComponent("" + first) + "&";
        if (rows === null)
            throw new Error("The parameter 'rows' cannot be null.");
        else if (rows !== undefined)
            url_ += "Rows=" + encodeURIComponent("" + rows) + "&";
        if (globalFilter !== undefined && globalFilter !== null)
            url_ += "GlobalFilter=" + encodeURIComponent("" + globalFilter) + "&";
        if (sortField !== undefined && sortField !== null)
            url_ += "SortField=" + encodeURIComponent("" + sortField) + "&";
        if (sortOrder !== undefined && sortOrder !== null)
            url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (filtres_Client === null)
            throw new Error("The parameter 'filtres_Client' cannot be null.");
        else if (filtres_Client !== undefined)
            url_ += "Filtres.Client=" + encodeURIComponent("" + filtres_Client) + "&";
        if (filtres_DateEmission !== undefined && filtres_DateEmission !== null)
            filtres_DateEmission && filtres_DateEmission.forEach(function (item_) { url_ += "Filtres.DateEmission=" + encodeURIComponent(item_ ? "" + item_.toJSON() : "null") + "&"; });
        if (filtres_EcheancePaiement === null)
            throw new Error("The parameter 'filtres_EcheancePaiement' cannot be null.");
        else if (filtres_EcheancePaiement !== undefined)
            url_ += "Filtres.EcheancePaiement=" + encodeURIComponent("" + filtres_EcheancePaiement) + "&";
        if (filtres_MontantTtc === null)
            throw new Error("The parameter 'filtres_MontantTtc' cannot be null.");
        else if (filtres_MontantTtc !== undefined)
            url_ += "Filtres.MontantTtc=" + encodeURIComponent("" + filtres_MontantTtc) + "&";
        if (filtres_Statut === null)
            throw new Error("The parameter 'filtres_Statut' cannot be null.");
        else if (filtres_Statut !== undefined)
            url_ += "Filtres.Statut=" + encodeURIComponent("" + filtres_Statut) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllFactureTotalRecords(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllFactureTotalRecords(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processGetAllFactureTotalRecords = function (response) {
        var e_49, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_49_1) { e_49 = { error: e_49_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_49) throw e_49.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param first (optional)
     * @param rows (optional)
     * @param globalFilter (optional)
     * @param sortField (optional)
     * @param sortOrder (optional)
     * @param filtres_Client (optional)
     * @param filtres_DateEmission (optional)
     * @param filtres_EcheancePaiement (optional)
     * @param filtres_MontantTtc (optional)
     * @param filtres_Statut (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.getAllFactureMontantTotal = function (first, rows, globalFilter, sortField, sortOrder, filtres_Client, filtres_DateEmission, filtres_EcheancePaiement, filtres_MontantTtc, filtres_Statut) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/GetAllFactureMontantTotal?";
        if (first === null)
            throw new Error("The parameter 'first' cannot be null.");
        else if (first !== undefined)
            url_ += "First=" + encodeURIComponent("" + first) + "&";
        if (rows === null)
            throw new Error("The parameter 'rows' cannot be null.");
        else if (rows !== undefined)
            url_ += "Rows=" + encodeURIComponent("" + rows) + "&";
        if (globalFilter !== undefined && globalFilter !== null)
            url_ += "GlobalFilter=" + encodeURIComponent("" + globalFilter) + "&";
        if (sortField !== undefined && sortField !== null)
            url_ += "SortField=" + encodeURIComponent("" + sortField) + "&";
        if (sortOrder !== undefined && sortOrder !== null)
            url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (filtres_Client === null)
            throw new Error("The parameter 'filtres_Client' cannot be null.");
        else if (filtres_Client !== undefined)
            url_ += "Filtres.Client=" + encodeURIComponent("" + filtres_Client) + "&";
        if (filtres_DateEmission !== undefined && filtres_DateEmission !== null)
            filtres_DateEmission && filtres_DateEmission.forEach(function (item_) { url_ += "Filtres.DateEmission=" + encodeURIComponent(item_ ? "" + item_.toJSON() : "null") + "&"; });
        if (filtres_EcheancePaiement === null)
            throw new Error("The parameter 'filtres_EcheancePaiement' cannot be null.");
        else if (filtres_EcheancePaiement !== undefined)
            url_ += "Filtres.EcheancePaiement=" + encodeURIComponent("" + filtres_EcheancePaiement) + "&";
        if (filtres_MontantTtc === null)
            throw new Error("The parameter 'filtres_MontantTtc' cannot be null.");
        else if (filtres_MontantTtc !== undefined)
            url_ += "Filtres.MontantTtc=" + encodeURIComponent("" + filtres_MontantTtc) + "&";
        if (filtres_Statut === null)
            throw new Error("The parameter 'filtres_Statut' cannot be null.");
        else if (filtres_Statut !== undefined)
            url_ += "Filtres.Statut=" + encodeURIComponent("" + filtres_Statut) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllFactureMontantTotal(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllFactureMontantTotal(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processGetAllFactureMontantTotal = function (response) {
        var e_50, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_50_1) { e_50 = { error: e_50_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_50) throw e_50.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.getByIdFactureReport = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/GetByIdFactureReport?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByIdFactureReport(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByIdFactureReport(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processGetByIdFactureReport = function (response) {
        var e_51, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_51_1) { e_51 = { error: e_51_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_51) throw e_51.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param reference (optional)
     * @param dateEmission (optional)
     * @param echeancePaiement (optional)
     * @param messageIntroduction (optional)
     * @param piedDePage (optional)
     * @param remise (optional)
     * @param currency (optional)
     * @param statut (optional)
     * @param factureItems (optional)
     * @param clientId (optional)
     * @param montantTtc (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.getByteDataFactureReport = function (reference, dateEmission, echeancePaiement, messageIntroduction, piedDePage, remise, currency, statut, factureItems, clientId, montantTtc) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/GetByteDataFactureReport?";
        if (reference !== undefined && reference !== null)
            url_ += "Reference=" + encodeURIComponent("" + reference) + "&";
        if (dateEmission === null)
            throw new Error("The parameter 'dateEmission' cannot be null.");
        else if (dateEmission !== undefined)
            url_ += "DateEmission=" + encodeURIComponent(dateEmission ? "" + dateEmission.toJSON() : "") + "&";
        if (echeancePaiement === null)
            throw new Error("The parameter 'echeancePaiement' cannot be null.");
        else if (echeancePaiement !== undefined)
            url_ += "EcheancePaiement=" + encodeURIComponent("" + echeancePaiement) + "&";
        if (messageIntroduction !== undefined && messageIntroduction !== null)
            url_ += "MessageIntroduction=" + encodeURIComponent("" + messageIntroduction) + "&";
        if (piedDePage !== undefined && piedDePage !== null)
            url_ += "PiedDePage=" + encodeURIComponent("" + piedDePage) + "&";
        if (remise === null)
            throw new Error("The parameter 'remise' cannot be null.");
        else if (remise !== undefined)
            url_ += "Remise=" + encodeURIComponent("" + remise) + "&";
        if (currency !== undefined && currency !== null)
            url_ += "Currency=" + encodeURIComponent("" + currency) + "&";
        if (statut === null)
            throw new Error("The parameter 'statut' cannot be null.");
        else if (statut !== undefined)
            url_ += "Statut=" + encodeURIComponent("" + statut) + "&";
        if (factureItems !== undefined && factureItems !== null)
            factureItems && factureItems.forEach(function (item, index) {
                for (var attr in item)
                    if (item.hasOwnProperty(attr)) {
                        url_ += "FactureItems[" + index + "]." + attr + "=" + encodeURIComponent("" + item[attr]) + "&";
                    }
            });
        if (clientId === null)
            throw new Error("The parameter 'clientId' cannot be null.");
        else if (clientId !== undefined)
            url_ += "ClientId=" + encodeURIComponent("" + clientId) + "&";
        if (montantTtc === null)
            throw new Error("The parameter 'montantTtc' cannot be null.");
        else if (montantTtc !== undefined)
            url_ += "MontantTtc=" + encodeURIComponent("" + montantTtc) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByteDataFactureReport(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByteDataFactureReport(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processGetByteDataFactureReport = function (response) {
        var e_52, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_52_1) { e_52 = { error: e_52_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_52) throw e_52.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.createOrUpdateFactureInfosPaiement = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/CreateOrUpdateFactureInfosPaiement";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreateOrUpdateFactureInfosPaiement(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreateOrUpdateFactureInfosPaiement(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processCreateOrUpdateFactureInfosPaiement = function (response) {
        var e_53, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_53_1) { e_53 = { error: e_53_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_53) throw e_53.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param factureId (optional)
     * @param first (optional)
     * @param rows (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.getByFactureIdFactureInfosPaiement = function (factureId, first, rows) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/GetByFactureIdFactureInfosPaiement?";
        if (factureId === null)
            throw new Error("The parameter 'factureId' cannot be null.");
        else if (factureId !== undefined)
            url_ += "FactureId=" + encodeURIComponent("" + factureId) + "&";
        if (first === null)
            throw new Error("The parameter 'first' cannot be null.");
        else if (first !== undefined)
            url_ += "First=" + encodeURIComponent("" + first) + "&";
        if (rows === null)
            throw new Error("The parameter 'rows' cannot be null.");
        else if (rows !== undefined)
            url_ += "Rows=" + encodeURIComponent("" + rows) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByFactureIdFactureInfosPaiement(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByFactureIdFactureInfosPaiement(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processGetByFactureIdFactureInfosPaiement = function (response) {
        var e_54, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_54_1) { e_54 = { error: e_54_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_54) throw e_54.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = FactureInfosPaiementDtoListResultWithTotalEntityItemsDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param factureId (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.getRestOfAmount = function (factureId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/GetRestOfAmount?";
        if (factureId === null)
            throw new Error("The parameter 'factureId' cannot be null.");
        else if (factureId !== undefined)
            url_ += "factureId=" + encodeURIComponent("" + factureId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetRestOfAmount(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetRestOfAmount(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processGetRestOfAmount = function (response) {
        var e_55, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_55_1) { e_55 = { error: e_55_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_55) throw e_55.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param factureId (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.deleteByFactureIdFactureInfosPaiement = function (factureId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/deleteByFactureIdFactureInfosPaiement?";
        if (factureId === null)
            throw new Error("The parameter 'factureId' cannot be null.");
        else if (factureId !== undefined)
            url_ += "factureId=" + encodeURIComponent("" + factureId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processDeleteByFactureIdFactureInfosPaiement(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processDeleteByFactureIdFactureInfosPaiement(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processDeleteByFactureIdFactureInfosPaiement = function (response) {
        var e_56, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_56_1) { e_56 = { error: e_56_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_56) throw e_56.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param reference (optional)
     * @return Success
     */
    FactureServiceProxy.prototype.checkIfReferenceIsExist = function (reference) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Facture/CheckIfReferenceIsExist?";
        if (reference !== undefined && reference !== null)
            url_ += "reference=" + encodeURIComponent("" + reference) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCheckIfReferenceIsExist(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCheckIfReferenceIsExist(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FactureServiceProxy.prototype.processCheckIfReferenceIsExist = function (response) {
        var e_57, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_57_1) { e_57 = { error: e_57_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_57) throw e_57.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    FactureServiceProxy.ɵfac = function FactureServiceProxy_Factory(t) { return new (t || FactureServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    FactureServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FactureServiceProxy, factory: FactureServiceProxy.ɵfac });
    return FactureServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FactureServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var FileApiServiceProxy = /** @class */ (function () {
    function FileApiServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param file (optional)
     * @return Success
     */
    FileApiServiceProxy.prototype.upload = function (file) {
        var _this = this;
        var url_ = this.baseUrl + "/file-api/upload";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = new FormData();
        if (file !== null && file !== undefined)
            content_.append("file", file.data, file.fileName ? file.fileName : "file");
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processUpload(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processUpload(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FileApiServiceProxy.prototype.processUpload = function (response) {
        var e_58, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_58_1) { e_58 = { error: e_58_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_58) throw e_58.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    FileApiServiceProxy.prototype.download = function () {
        var _this = this;
        var url_ = this.baseUrl + "/file-api/download";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processDownload(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processDownload(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FileApiServiceProxy.prototype.processDownload = function (response) {
        var e_59, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_59_1) { e_59 = { error: e_59_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_59) throw e_59.error; }
            }
        }
        if (status === 200 || status === 206) {
            var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            var fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    FileApiServiceProxy.prototype.delete = function () {
        var _this = this;
        var url_ = this.baseUrl + "/file-api/delete";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    FileApiServiceProxy.prototype.processDelete = function (response) {
        var e_60, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_60_1) { e_60 = { error: e_60_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_60) throw e_60.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    FileApiServiceProxy.ɵfac = function FileApiServiceProxy_Factory(t) { return new (t || FileApiServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    FileApiServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FileApiServiceProxy, factory: FileApiServiceProxy.ɵfac });
    return FileApiServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FileApiServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var InfosEntrepriseServiceProxy = /** @class */ (function () {
    function InfosEntrepriseServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    InfosEntrepriseServiceProxy.prototype.createInfosEntreprise = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/InfosEntreprise/CreateInfosEntreprise";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreateInfosEntreprise(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreateInfosEntreprise(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    InfosEntrepriseServiceProxy.prototype.processCreateInfosEntreprise = function (response) {
        var e_61, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_61_1) { e_61 = { error: e_61_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_61) throw e_61.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    InfosEntrepriseServiceProxy.prototype.getByIdInfosEntreprise = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/InfosEntreprise/GetByIdInfosEntreprise?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByIdInfosEntreprise(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByIdInfosEntreprise(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    InfosEntrepriseServiceProxy.prototype.processGetByIdInfosEntreprise = function (response) {
        var e_62, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_62_1) { e_62 = { error: e_62_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_62) throw e_62.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = InfosEntrepriseDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    InfosEntrepriseServiceProxy.prototype.getGeneralInfos = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/InfosEntreprise/GetGeneralInfos";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetGeneralInfos(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetGeneralInfos(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    InfosEntrepriseServiceProxy.prototype.processGetGeneralInfos = function (response) {
        var e_63, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_63_1) { e_63 = { error: e_63_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_63) throw e_63.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = GeneralInfosDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    InfosEntrepriseServiceProxy.prototype.getAllInfosEntreprise = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/InfosEntreprise/GetAllInfosEntreprise";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllInfosEntreprise(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllInfosEntreprise(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    InfosEntrepriseServiceProxy.prototype.processGetAllInfosEntreprise = function (response) {
        var e_64, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_64_1) { e_64 = { error: e_64_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_64) throw e_64.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = InfosEntrepriseDtoListResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    InfosEntrepriseServiceProxy.prototype.updateGeneralInfos = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/InfosEntreprise/UpdateGeneralInfos";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processUpdateGeneralInfos(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processUpdateGeneralInfos(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    InfosEntrepriseServiceProxy.prototype.processUpdateGeneralInfos = function (response) {
        var e_65, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_65_1) { e_65 = { error: e_65_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_65) throw e_65.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    InfosEntrepriseServiceProxy.prototype.getContactInfos = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/InfosEntreprise/GetContactInfos";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetContactInfos(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetContactInfos(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    InfosEntrepriseServiceProxy.prototype.processGetContactInfos = function (response) {
        var e_66, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_66_1) { e_66 = { error: e_66_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_66) throw e_66.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = ContactInfosDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    InfosEntrepriseServiceProxy.prototype.updateContactInfos = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/InfosEntreprise/UpdateContactInfos";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processUpdateContactInfos(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processUpdateContactInfos(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    InfosEntrepriseServiceProxy.prototype.processUpdateContactInfos = function (response) {
        var e_67, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_67_1) { e_67 = { error: e_67_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_67) throw e_67.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    InfosEntrepriseServiceProxy.prototype.getDefaultAnnotations = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/InfosEntreprise/GetDefaultAnnotations";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetDefaultAnnotations(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetDefaultAnnotations(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    InfosEntrepriseServiceProxy.prototype.processGetDefaultAnnotations = function (response) {
        var e_68, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_68_1) { e_68 = { error: e_68_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_68) throw e_68.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = DefaultAnnotationsDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    InfosEntrepriseServiceProxy.prototype.updateDefaultAnnotations = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/InfosEntreprise/UpdateDefaultAnnotations";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processUpdateDefaultAnnotations(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processUpdateDefaultAnnotations(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    InfosEntrepriseServiceProxy.prototype.processUpdateDefaultAnnotations = function (response) {
        var e_69, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_69_1) { e_69 = { error: e_69_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_69) throw e_69.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    InfosEntrepriseServiceProxy.ɵfac = function InfosEntrepriseServiceProxy_Factory(t) { return new (t || InfosEntrepriseServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    InfosEntrepriseServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: InfosEntrepriseServiceProxy, factory: InfosEntrepriseServiceProxy.ɵfac });
    return InfosEntrepriseServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InfosEntrepriseServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var ReportGeneratorServiceProxy = /** @class */ (function () {
    function ReportGeneratorServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param reference (optional)
     * @param dateEmission (optional)
     * @param echeancePaiement (optional)
     * @param messageIntroduction (optional)
     * @param piedDePage (optional)
     * @param remise (optional)
     * @param statut (optional)
     * @param factureItems (optional)
     * @param clientId (optional)
     * @param client_Reference (optional)
     * @param client_CategorieClient (optional)
     * @param client_Nom (optional)
     * @param client_DisplayName (optional)
     * @param client_SecteurActivite (optional)
     * @param client_ICE (optional)
     * @param client_RaisonSociale (optional)
     * @param client_Adresse (optional)
     * @param client_Ville (optional)
     * @param client_Pays (optional)
     * @param client_CodePostal (optional)
     * @param client_Email (optional)
     * @param client_TelFix (optional)
     * @param client_TelPortable (optional)
     * @param client_SiteWeb (optional)
     * @param client_DeviseFacturation (optional)
     * @param client_RemisePermanente (optional)
     * @param client_DelaiPaiement (optional)
     * @param client_PendingInvoicesAmount (optional)
     * @param client_OverdueInvoicesAmount (optional)
     * @param client_ClientType (optional)
     * @param client_LastModificationTime (optional)
     * @param client_LastModifierUserId (optional)
     * @param client_CreationTime (optional)
     * @param client_CreatorUserId (optional)
     * @param client_Id (optional)
     * @param currency (optional)
     * @param montantTtc (optional)
     * @param lastModificationTime (optional)
     * @param lastModifierUserId (optional)
     * @param creationTime (optional)
     * @param creatorUserId (optional)
     * @param id (optional)
     * @return Success
     */
    ReportGeneratorServiceProxy.prototype.getByteDataFacture = function (reference, dateEmission, echeancePaiement, messageIntroduction, piedDePage, remise, statut, factureItems, clientId, client_Reference, client_CategorieClient, client_Nom, client_DisplayName, client_SecteurActivite, client_ICE, client_RaisonSociale, client_Adresse, client_Ville, client_Pays, client_CodePostal, client_Email, client_TelFix, client_TelPortable, client_SiteWeb, client_DeviseFacturation, client_RemisePermanente, client_DelaiPaiement, client_PendingInvoicesAmount, client_OverdueInvoicesAmount, client_ClientType, client_LastModificationTime, client_LastModifierUserId, client_CreationTime, client_CreatorUserId, client_Id, currency, montantTtc, lastModificationTime, lastModifierUserId, creationTime, creatorUserId, id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ReportGenerator/GetByteDataFacture?";
        if (reference !== undefined && reference !== null)
            url_ += "Reference=" + encodeURIComponent("" + reference) + "&";
        if (dateEmission === null)
            throw new Error("The parameter 'dateEmission' cannot be null.");
        else if (dateEmission !== undefined)
            url_ += "DateEmission=" + encodeURIComponent(dateEmission ? "" + dateEmission.toJSON() : "") + "&";
        if (echeancePaiement === null)
            throw new Error("The parameter 'echeancePaiement' cannot be null.");
        else if (echeancePaiement !== undefined)
            url_ += "EcheancePaiement=" + encodeURIComponent("" + echeancePaiement) + "&";
        if (messageIntroduction !== undefined && messageIntroduction !== null)
            url_ += "MessageIntroduction=" + encodeURIComponent("" + messageIntroduction) + "&";
        if (piedDePage !== undefined && piedDePage !== null)
            url_ += "PiedDePage=" + encodeURIComponent("" + piedDePage) + "&";
        if (remise === null)
            throw new Error("The parameter 'remise' cannot be null.");
        else if (remise !== undefined)
            url_ += "Remise=" + encodeURIComponent("" + remise) + "&";
        if (statut === null)
            throw new Error("The parameter 'statut' cannot be null.");
        else if (statut !== undefined)
            url_ += "Statut=" + encodeURIComponent("" + statut) + "&";
        if (factureItems !== undefined && factureItems !== null)
            factureItems && factureItems.forEach(function (item, index) {
                for (var attr in item)
                    if (item.hasOwnProperty(attr)) {
                        url_ += "FactureItems[" + index + "]." + attr + "=" + encodeURIComponent("" + item[attr]) + "&";
                    }
            });
        if (clientId === null)
            throw new Error("The parameter 'clientId' cannot be null.");
        else if (clientId !== undefined)
            url_ += "ClientId=" + encodeURIComponent("" + clientId) + "&";
        if (client_Reference === null)
            throw new Error("The parameter 'client_Reference' cannot be null.");
        else if (client_Reference !== undefined)
            url_ += "Client.Reference=" + encodeURIComponent("" + client_Reference) + "&";
        if (client_CategorieClient !== undefined && client_CategorieClient !== null)
            url_ += "Client.CategorieClient=" + encodeURIComponent("" + client_CategorieClient) + "&";
        if (client_Nom !== undefined && client_Nom !== null)
            url_ += "Client.Nom=" + encodeURIComponent("" + client_Nom) + "&";
        if (client_DisplayName !== undefined && client_DisplayName !== null)
            url_ += "Client.DisplayName=" + encodeURIComponent("" + client_DisplayName) + "&";
        if (client_SecteurActivite !== undefined && client_SecteurActivite !== null)
            url_ += "Client.SecteurActivite=" + encodeURIComponent("" + client_SecteurActivite) + "&";
        if (client_ICE !== undefined && client_ICE !== null)
            url_ += "Client.ICE=" + encodeURIComponent("" + client_ICE) + "&";
        if (client_RaisonSociale !== undefined && client_RaisonSociale !== null)
            url_ += "Client.RaisonSociale=" + encodeURIComponent("" + client_RaisonSociale) + "&";
        if (client_Adresse !== undefined && client_Adresse !== null)
            url_ += "Client.Adresse=" + encodeURIComponent("" + client_Adresse) + "&";
        if (client_Ville !== undefined && client_Ville !== null)
            url_ += "Client.Ville=" + encodeURIComponent("" + client_Ville) + "&";
        if (client_Pays !== undefined && client_Pays !== null)
            url_ += "Client.Pays=" + encodeURIComponent("" + client_Pays) + "&";
        if (client_CodePostal !== undefined && client_CodePostal !== null)
            url_ += "Client.CodePostal=" + encodeURIComponent("" + client_CodePostal) + "&";
        if (client_Email !== undefined && client_Email !== null)
            url_ += "Client.Email=" + encodeURIComponent("" + client_Email) + "&";
        if (client_TelFix !== undefined && client_TelFix !== null)
            url_ += "Client.TelFix=" + encodeURIComponent("" + client_TelFix) + "&";
        if (client_TelPortable !== undefined && client_TelPortable !== null)
            url_ += "Client.TelPortable=" + encodeURIComponent("" + client_TelPortable) + "&";
        if (client_SiteWeb !== undefined && client_SiteWeb !== null)
            url_ += "Client.SiteWeb=" + encodeURIComponent("" + client_SiteWeb) + "&";
        if (client_DeviseFacturation !== undefined && client_DeviseFacturation !== null)
            url_ += "Client.DeviseFacturation=" + encodeURIComponent("" + client_DeviseFacturation) + "&";
        if (client_RemisePermanente === null)
            throw new Error("The parameter 'client_RemisePermanente' cannot be null.");
        else if (client_RemisePermanente !== undefined)
            url_ += "Client.RemisePermanente=" + encodeURIComponent("" + client_RemisePermanente) + "&";
        if (client_DelaiPaiement === null)
            throw new Error("The parameter 'client_DelaiPaiement' cannot be null.");
        else if (client_DelaiPaiement !== undefined)
            url_ += "Client.DelaiPaiement=" + encodeURIComponent("" + client_DelaiPaiement) + "&";
        if (client_PendingInvoicesAmount === null)
            throw new Error("The parameter 'client_PendingInvoicesAmount' cannot be null.");
        else if (client_PendingInvoicesAmount !== undefined)
            url_ += "Client.PendingInvoicesAmount=" + encodeURIComponent("" + client_PendingInvoicesAmount) + "&";
        if (client_OverdueInvoicesAmount === null)
            throw new Error("The parameter 'client_OverdueInvoicesAmount' cannot be null.");
        else if (client_OverdueInvoicesAmount !== undefined)
            url_ += "Client.OverdueInvoicesAmount=" + encodeURIComponent("" + client_OverdueInvoicesAmount) + "&";
        if (client_ClientType !== undefined && client_ClientType !== null)
            url_ += "Client.ClientType=" + encodeURIComponent("" + client_ClientType) + "&";
        if (client_LastModificationTime !== undefined && client_LastModificationTime !== null)
            url_ += "Client.LastModificationTime=" + encodeURIComponent(client_LastModificationTime ? "" + client_LastModificationTime.toJSON() : "") + "&";
        if (client_LastModifierUserId !== undefined && client_LastModifierUserId !== null)
            url_ += "Client.LastModifierUserId=" + encodeURIComponent("" + client_LastModifierUserId) + "&";
        if (client_CreationTime === null)
            throw new Error("The parameter 'client_CreationTime' cannot be null.");
        else if (client_CreationTime !== undefined)
            url_ += "Client.CreationTime=" + encodeURIComponent(client_CreationTime ? "" + client_CreationTime.toJSON() : "") + "&";
        if (client_CreatorUserId !== undefined && client_CreatorUserId !== null)
            url_ += "Client.CreatorUserId=" + encodeURIComponent("" + client_CreatorUserId) + "&";
        if (client_Id === null)
            throw new Error("The parameter 'client_Id' cannot be null.");
        else if (client_Id !== undefined)
            url_ += "Client.Id=" + encodeURIComponent("" + client_Id) + "&";
        if (currency !== undefined && currency !== null)
            url_ += "Currency=" + encodeURIComponent("" + currency) + "&";
        if (montantTtc === null)
            throw new Error("The parameter 'montantTtc' cannot be null.");
        else if (montantTtc !== undefined)
            url_ += "MontantTtc=" + encodeURIComponent("" + montantTtc) + "&";
        if (lastModificationTime !== undefined && lastModificationTime !== null)
            url_ += "LastModificationTime=" + encodeURIComponent(lastModificationTime ? "" + lastModificationTime.toJSON() : "") + "&";
        if (lastModifierUserId !== undefined && lastModifierUserId !== null)
            url_ += "LastModifierUserId=" + encodeURIComponent("" + lastModifierUserId) + "&";
        if (creationTime === null)
            throw new Error("The parameter 'creationTime' cannot be null.");
        else if (creationTime !== undefined)
            url_ += "CreationTime=" + encodeURIComponent(creationTime ? "" + creationTime.toJSON() : "") + "&";
        if (creatorUserId !== undefined && creatorUserId !== null)
            url_ += "CreatorUserId=" + encodeURIComponent("" + creatorUserId) + "&";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByteDataFacture(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByteDataFacture(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    ReportGeneratorServiceProxy.prototype.processGetByteDataFacture = function (response) {
        var e_70, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_70_1) { e_70 = { error: e_70_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_70) throw e_70.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param reference (optional)
     * @param dateEmission (optional)
     * @param echeancePaiement (optional)
     * @param messageIntroduction (optional)
     * @param piedDePage (optional)
     * @param remise (optional)
     * @param statut (optional)
     * @param devisItems (optional)
     * @param clientId (optional)
     * @param client_Reference (optional)
     * @param client_CategorieClient (optional)
     * @param client_Nom (optional)
     * @param client_DisplayName (optional)
     * @param client_SecteurActivite (optional)
     * @param client_ICE (optional)
     * @param client_RaisonSociale (optional)
     * @param client_Adresse (optional)
     * @param client_Ville (optional)
     * @param client_Pays (optional)
     * @param client_CodePostal (optional)
     * @param client_Email (optional)
     * @param client_TelFix (optional)
     * @param client_TelPortable (optional)
     * @param client_SiteWeb (optional)
     * @param client_DeviseFacturation (optional)
     * @param client_RemisePermanente (optional)
     * @param client_DelaiPaiement (optional)
     * @param client_PendingInvoicesAmount (optional)
     * @param client_OverdueInvoicesAmount (optional)
     * @param client_ClientType (optional)
     * @param client_LastModificationTime (optional)
     * @param client_LastModifierUserId (optional)
     * @param client_CreationTime (optional)
     * @param client_CreatorUserId (optional)
     * @param client_Id (optional)
     * @param currency (optional)
     * @param montantTtc (optional)
     * @param lastModificationTime (optional)
     * @param lastModifierUserId (optional)
     * @param creationTime (optional)
     * @param creatorUserId (optional)
     * @param id (optional)
     * @return Success
     */
    ReportGeneratorServiceProxy.prototype.getByteDataDevis = function (reference, dateEmission, echeancePaiement, messageIntroduction, piedDePage, remise, statut, devisItems, clientId, client_Reference, client_CategorieClient, client_Nom, client_DisplayName, client_SecteurActivite, client_ICE, client_RaisonSociale, client_Adresse, client_Ville, client_Pays, client_CodePostal, client_Email, client_TelFix, client_TelPortable, client_SiteWeb, client_DeviseFacturation, client_RemisePermanente, client_DelaiPaiement, client_PendingInvoicesAmount, client_OverdueInvoicesAmount, client_ClientType, client_LastModificationTime, client_LastModifierUserId, client_CreationTime, client_CreatorUserId, client_Id, currency, montantTtc, lastModificationTime, lastModifierUserId, creationTime, creatorUserId, id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ReportGenerator/GetByteDataDevis?";
        if (reference !== undefined && reference !== null)
            url_ += "Reference=" + encodeURIComponent("" + reference) + "&";
        if (dateEmission === null)
            throw new Error("The parameter 'dateEmission' cannot be null.");
        else if (dateEmission !== undefined)
            url_ += "DateEmission=" + encodeURIComponent(dateEmission ? "" + dateEmission.toJSON() : "") + "&";
        if (echeancePaiement === null)
            throw new Error("The parameter 'echeancePaiement' cannot be null.");
        else if (echeancePaiement !== undefined)
            url_ += "EcheancePaiement=" + encodeURIComponent("" + echeancePaiement) + "&";
        if (messageIntroduction !== undefined && messageIntroduction !== null)
            url_ += "MessageIntroduction=" + encodeURIComponent("" + messageIntroduction) + "&";
        if (piedDePage !== undefined && piedDePage !== null)
            url_ += "PiedDePage=" + encodeURIComponent("" + piedDePage) + "&";
        if (remise === null)
            throw new Error("The parameter 'remise' cannot be null.");
        else if (remise !== undefined)
            url_ += "Remise=" + encodeURIComponent("" + remise) + "&";
        if (statut === null)
            throw new Error("The parameter 'statut' cannot be null.");
        else if (statut !== undefined)
            url_ += "Statut=" + encodeURIComponent("" + statut) + "&";
        if (devisItems !== undefined && devisItems !== null)
            devisItems && devisItems.forEach(function (item, index) {
                for (var attr in item)
                    if (item.hasOwnProperty(attr)) {
                        url_ += "DevisItems[" + index + "]." + attr + "=" + encodeURIComponent("" + item[attr]) + "&";
                    }
            });
        if (clientId === null)
            throw new Error("The parameter 'clientId' cannot be null.");
        else if (clientId !== undefined)
            url_ += "ClientId=" + encodeURIComponent("" + clientId) + "&";
        if (client_Reference === null)
            throw new Error("The parameter 'client_Reference' cannot be null.");
        else if (client_Reference !== undefined)
            url_ += "Client.Reference=" + encodeURIComponent("" + client_Reference) + "&";
        if (client_CategorieClient !== undefined && client_CategorieClient !== null)
            url_ += "Client.CategorieClient=" + encodeURIComponent("" + client_CategorieClient) + "&";
        if (client_Nom !== undefined && client_Nom !== null)
            url_ += "Client.Nom=" + encodeURIComponent("" + client_Nom) + "&";
        if (client_DisplayName !== undefined && client_DisplayName !== null)
            url_ += "Client.DisplayName=" + encodeURIComponent("" + client_DisplayName) + "&";
        if (client_SecteurActivite !== undefined && client_SecteurActivite !== null)
            url_ += "Client.SecteurActivite=" + encodeURIComponent("" + client_SecteurActivite) + "&";
        if (client_ICE !== undefined && client_ICE !== null)
            url_ += "Client.ICE=" + encodeURIComponent("" + client_ICE) + "&";
        if (client_RaisonSociale !== undefined && client_RaisonSociale !== null)
            url_ += "Client.RaisonSociale=" + encodeURIComponent("" + client_RaisonSociale) + "&";
        if (client_Adresse !== undefined && client_Adresse !== null)
            url_ += "Client.Adresse=" + encodeURIComponent("" + client_Adresse) + "&";
        if (client_Ville !== undefined && client_Ville !== null)
            url_ += "Client.Ville=" + encodeURIComponent("" + client_Ville) + "&";
        if (client_Pays !== undefined && client_Pays !== null)
            url_ += "Client.Pays=" + encodeURIComponent("" + client_Pays) + "&";
        if (client_CodePostal !== undefined && client_CodePostal !== null)
            url_ += "Client.CodePostal=" + encodeURIComponent("" + client_CodePostal) + "&";
        if (client_Email !== undefined && client_Email !== null)
            url_ += "Client.Email=" + encodeURIComponent("" + client_Email) + "&";
        if (client_TelFix !== undefined && client_TelFix !== null)
            url_ += "Client.TelFix=" + encodeURIComponent("" + client_TelFix) + "&";
        if (client_TelPortable !== undefined && client_TelPortable !== null)
            url_ += "Client.TelPortable=" + encodeURIComponent("" + client_TelPortable) + "&";
        if (client_SiteWeb !== undefined && client_SiteWeb !== null)
            url_ += "Client.SiteWeb=" + encodeURIComponent("" + client_SiteWeb) + "&";
        if (client_DeviseFacturation !== undefined && client_DeviseFacturation !== null)
            url_ += "Client.DeviseFacturation=" + encodeURIComponent("" + client_DeviseFacturation) + "&";
        if (client_RemisePermanente === null)
            throw new Error("The parameter 'client_RemisePermanente' cannot be null.");
        else if (client_RemisePermanente !== undefined)
            url_ += "Client.RemisePermanente=" + encodeURIComponent("" + client_RemisePermanente) + "&";
        if (client_DelaiPaiement === null)
            throw new Error("The parameter 'client_DelaiPaiement' cannot be null.");
        else if (client_DelaiPaiement !== undefined)
            url_ += "Client.DelaiPaiement=" + encodeURIComponent("" + client_DelaiPaiement) + "&";
        if (client_PendingInvoicesAmount === null)
            throw new Error("The parameter 'client_PendingInvoicesAmount' cannot be null.");
        else if (client_PendingInvoicesAmount !== undefined)
            url_ += "Client.PendingInvoicesAmount=" + encodeURIComponent("" + client_PendingInvoicesAmount) + "&";
        if (client_OverdueInvoicesAmount === null)
            throw new Error("The parameter 'client_OverdueInvoicesAmount' cannot be null.");
        else if (client_OverdueInvoicesAmount !== undefined)
            url_ += "Client.OverdueInvoicesAmount=" + encodeURIComponent("" + client_OverdueInvoicesAmount) + "&";
        if (client_ClientType !== undefined && client_ClientType !== null)
            url_ += "Client.ClientType=" + encodeURIComponent("" + client_ClientType) + "&";
        if (client_LastModificationTime !== undefined && client_LastModificationTime !== null)
            url_ += "Client.LastModificationTime=" + encodeURIComponent(client_LastModificationTime ? "" + client_LastModificationTime.toJSON() : "") + "&";
        if (client_LastModifierUserId !== undefined && client_LastModifierUserId !== null)
            url_ += "Client.LastModifierUserId=" + encodeURIComponent("" + client_LastModifierUserId) + "&";
        if (client_CreationTime === null)
            throw new Error("The parameter 'client_CreationTime' cannot be null.");
        else if (client_CreationTime !== undefined)
            url_ += "Client.CreationTime=" + encodeURIComponent(client_CreationTime ? "" + client_CreationTime.toJSON() : "") + "&";
        if (client_CreatorUserId !== undefined && client_CreatorUserId !== null)
            url_ += "Client.CreatorUserId=" + encodeURIComponent("" + client_CreatorUserId) + "&";
        if (client_Id === null)
            throw new Error("The parameter 'client_Id' cannot be null.");
        else if (client_Id !== undefined)
            url_ += "Client.Id=" + encodeURIComponent("" + client_Id) + "&";
        if (currency !== undefined && currency !== null)
            url_ += "Currency=" + encodeURIComponent("" + currency) + "&";
        if (montantTtc === null)
            throw new Error("The parameter 'montantTtc' cannot be null.");
        else if (montantTtc !== undefined)
            url_ += "MontantTtc=" + encodeURIComponent("" + montantTtc) + "&";
        if (lastModificationTime !== undefined && lastModificationTime !== null)
            url_ += "LastModificationTime=" + encodeURIComponent(lastModificationTime ? "" + lastModificationTime.toJSON() : "") + "&";
        if (lastModifierUserId !== undefined && lastModifierUserId !== null)
            url_ += "LastModifierUserId=" + encodeURIComponent("" + lastModifierUserId) + "&";
        if (creationTime === null)
            throw new Error("The parameter 'creationTime' cannot be null.");
        else if (creationTime !== undefined)
            url_ += "CreationTime=" + encodeURIComponent(creationTime ? "" + creationTime.toJSON() : "") + "&";
        if (creatorUserId !== undefined && creatorUserId !== null)
            url_ += "CreatorUserId=" + encodeURIComponent("" + creatorUserId) + "&";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetByteDataDevis(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetByteDataDevis(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    ReportGeneratorServiceProxy.prototype.processGetByteDataDevis = function (response) {
        var e_71, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_71_1) { e_71 = { error: e_71_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_71) throw e_71.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    ReportGeneratorServiceProxy.ɵfac = function ReportGeneratorServiceProxy_Factory(t) { return new (t || ReportGeneratorServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    ReportGeneratorServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ReportGeneratorServiceProxy, factory: ReportGeneratorServiceProxy.ɵfac });
    return ReportGeneratorServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ReportGeneratorServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var RoleServiceProxy = /** @class */ (function () {
    function RoleServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.create = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processCreate = function (response) {
        var e_72, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_72_1) { e_72 = { error: e_72_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_72) throw e_72.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = RoleDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param permission (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.getRoles = function (permission) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/GetRoles?";
        if (permission !== undefined && permission !== null)
            url_ += "Permission=" + encodeURIComponent("" + permission) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetRoles(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetRoles(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processGetRoles = function (response) {
        var e_73, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_73_1) { e_73 = { error: e_73_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_73) throw e_73.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = RoleListDtoListResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.update = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processUpdate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processUpdate = function (response) {
        var e_74, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_74_1) { e_74 = { error: e_74_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_74) throw e_74.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = RoleDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Delete?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processDelete = function (response) {
        var e_75, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_75_1) { e_75 = { error: e_75_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_75) throw e_75.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    RoleServiceProxy.prototype.getAllPermissions = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/GetAllPermissions";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAllPermissions(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllPermissions(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processGetAllPermissions = function (response) {
        var e_76, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_76_1) { e_76 = { error: e_76_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_76) throw e_76.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = PermissionDtoListResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.getRoleForEdit = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/GetRoleForEdit?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetRoleForEdit(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetRoleForEdit(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processGetRoleForEdit = function (response) {
        var e_77, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_77_1) { e_77 = { error: e_77_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_77) throw e_77.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = GetRoleForEditOutput.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Get?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGet(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processGet = function (response) {
        var e_78, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_78_1) { e_78 = { error: e_78_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_78) throw e_78.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = RoleDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param keyword (optional)
     * @param skipCount (optional)
     * @param maxResultCount (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.getAll = function (keyword, skipCount, maxResultCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/GetAll?";
        if (keyword !== undefined && keyword !== null)
            url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
        if (skipCount === null)
            throw new Error("The parameter 'skipCount' cannot be null.");
        else if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' cannot be null.");
        else if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processGetAll = function (response) {
        var e_79, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_79_1) { e_79 = { error: e_79_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_79) throw e_79.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = RoleDtoPagedResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    RoleServiceProxy.ɵfac = function RoleServiceProxy_Factory(t) { return new (t || RoleServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    RoleServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RoleServiceProxy, factory: RoleServiceProxy.ɵfac });
    return RoleServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RoleServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var SessionServiceProxy = /** @class */ (function () {
    function SessionServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @return Success
     */
    SessionServiceProxy.prototype.getCurrentLoginInformations = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Session/GetCurrentLoginInformations";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetCurrentLoginInformations(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetCurrentLoginInformations(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    SessionServiceProxy.prototype.processGetCurrentLoginInformations = function (response) {
        var e_80, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_80_1) { e_80 = { error: e_80_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_80) throw e_80.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = GetCurrentLoginInformationsOutput.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    SessionServiceProxy.ɵfac = function SessionServiceProxy_Factory(t) { return new (t || SessionServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    SessionServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SessionServiceProxy, factory: SessionServiceProxy.ɵfac });
    return SessionServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SessionServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var StatisticsServiceProxy = /** @class */ (function () {
    function StatisticsServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param amount (optional)
     * @return Success
     */
    StatisticsServiceProxy.prototype.createOrUpdateMonthTargetAmount = function (amount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Statistics/CreateOrUpdateMonthTargetAmount?";
        if (amount === null)
            throw new Error("The parameter 'amount' cannot be null.");
        else if (amount !== undefined)
            url_ += "amount=" + encodeURIComponent("" + amount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreateOrUpdateMonthTargetAmount(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreateOrUpdateMonthTargetAmount(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    StatisticsServiceProxy.prototype.processCreateOrUpdateMonthTargetAmount = function (response) {
        var e_81, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_81_1) { e_81 = { error: e_81_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_81) throw e_81.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    StatisticsServiceProxy.prototype.getActivityLog = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Statistics/GetActivityLog";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetActivityLog(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetActivityLog(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    StatisticsServiceProxy.prototype.processGetActivityLog = function (response) {
        var e_82, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_82_1) { e_82 = { error: e_82_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_82) throw e_82.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = ActivityLogDtoListResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param year (optional)
     * @return Success
     */
    StatisticsServiceProxy.prototype.getAnnualEstimatesTracking = function (year) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Statistics/GetAnnualEstimatesTracking?";
        if (year === null)
            throw new Error("The parameter 'year' cannot be null.");
        else if (year !== undefined)
            url_ += "Year=" + encodeURIComponent("" + year) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAnnualEstimatesTracking(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAnnualEstimatesTracking(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    StatisticsServiceProxy.prototype.processGetAnnualEstimatesTracking = function (response) {
        var e_83, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_83_1) { e_83 = { error: e_83_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_83) throw e_83.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = AnnualEstimatesTrackingDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param year (optional)
     * @return Success
     */
    StatisticsServiceProxy.prototype.getAnnualInvoicesTracking = function (year) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Statistics/GetAnnualInvoicesTracking?";
        if (year === null)
            throw new Error("The parameter 'year' cannot be null.");
        else if (year !== undefined)
            url_ += "Year=" + encodeURIComponent("" + year) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAnnualInvoicesTracking(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAnnualInvoicesTracking(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    StatisticsServiceProxy.prototype.processGetAnnualInvoicesTracking = function (response) {
        var e_84, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_84_1) { e_84 = { error: e_84_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_84) throw e_84.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = AnnualInvoicesTrackingDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    StatisticsServiceProxy.prototype.getMonthTargetInfos = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Statistics/GetMonthTargetInfos";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetMonthTargetInfos(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetMonthTargetInfos(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    StatisticsServiceProxy.prototype.processGetMonthTargetInfos = function (response) {
        var e_85, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_85_1) { e_85 = { error: e_85_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_85) throw e_85.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = MonthTargetInfosDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param dateStart (optional)
     * @param dateEnd (optional)
     * @return Success
     */
    StatisticsServiceProxy.prototype.getPeriodicTrackingInfos = function (dateStart, dateEnd) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Statistics/GetPeriodicTrackingInfos?";
        if (dateStart !== undefined && dateStart !== null)
            url_ += "DateStart=" + encodeURIComponent(dateStart ? "" + dateStart.toJSON() : "") + "&";
        if (dateEnd !== undefined && dateEnd !== null)
            url_ += "DateEnd=" + encodeURIComponent(dateEnd ? "" + dateEnd.toJSON() : "") + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetPeriodicTrackingInfos(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetPeriodicTrackingInfos(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    StatisticsServiceProxy.prototype.processGetPeriodicTrackingInfos = function (response) {
        var e_86, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_86_1) { e_86 = { error: e_86_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_86) throw e_86.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = PeriodicTrackingDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    StatisticsServiceProxy.prototype.getTotalStatistics = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Statistics/GetTotalStatistics";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetTotalStatistics(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetTotalStatistics(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    StatisticsServiceProxy.prototype.processGetTotalStatistics = function (response) {
        var e_87, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_87_1) { e_87 = { error: e_87_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_87) throw e_87.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = TotalStatisticsDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    StatisticsServiceProxy.prototype.getMonthEvolution = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Statistics/GetMonthEvolution";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetMonthEvolution(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetMonthEvolution(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    StatisticsServiceProxy.prototype.processGetMonthEvolution = function (response) {
        var e_88, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_88_1) { e_88 = { error: e_88_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_88) throw e_88.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = MonthEvolutionDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    StatisticsServiceProxy.ɵfac = function StatisticsServiceProxy_Factory(t) { return new (t || StatisticsServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    StatisticsServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StatisticsServiceProxy, factory: StatisticsServiceProxy.ɵfac });
    return StatisticsServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](StatisticsServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var SubscriptionsManagementServiceProxy = /** @class */ (function () {
    function SubscriptionsManagementServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param userId (optional)
     * @return Success
     */
    SubscriptionsManagementServiceProxy.prototype.createFreeSubscription = function (userId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/SubscriptionsManagement/createFreeSubscription?";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreateFreeSubscription(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreateFreeSubscription(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    SubscriptionsManagementServiceProxy.prototype.processCreateFreeSubscription = function (response) {
        var e_89, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_89_1) { e_89 = { error: e_89_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_89) throw e_89.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    SubscriptionsManagementServiceProxy.ɵfac = function SubscriptionsManagementServiceProxy_Factory(t) { return new (t || SubscriptionsManagementServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    SubscriptionsManagementServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SubscriptionsManagementServiceProxy, factory: SubscriptionsManagementServiceProxy.ɵfac });
    return SubscriptionsManagementServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SubscriptionsManagementServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var TenantServiceProxy = /** @class */ (function () {
    function TenantServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    TenantServiceProxy.prototype.create = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    TenantServiceProxy.prototype.processCreate = function (response) {
        var e_90, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_90_1) { e_90 = { error: e_90_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_90) throw e_90.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = TenantDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    TenantServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Delete?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    TenantServiceProxy.prototype.processDelete = function (response) {
        var e_91, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_91_1) { e_91 = { error: e_91_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_91) throw e_91.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    TenantServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Get?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGet(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    TenantServiceProxy.prototype.processGet = function (response) {
        var e_92, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_92_1) { e_92 = { error: e_92_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_92) throw e_92.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = TenantDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param keyword (optional)
     * @param isActive (optional)
     * @param skipCount (optional)
     * @param maxResultCount (optional)
     * @return Success
     */
    TenantServiceProxy.prototype.getAll = function (keyword, isActive, skipCount, maxResultCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/GetAll?";
        if (keyword !== undefined && keyword !== null)
            url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
        if (isActive !== undefined && isActive !== null)
            url_ += "IsActive=" + encodeURIComponent("" + isActive) + "&";
        if (skipCount === null)
            throw new Error("The parameter 'skipCount' cannot be null.");
        else if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' cannot be null.");
        else if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    TenantServiceProxy.prototype.processGetAll = function (response) {
        var e_93, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_93_1) { e_93 = { error: e_93_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_93) throw e_93.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = TenantDtoPagedResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    TenantServiceProxy.prototype.update = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processUpdate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    TenantServiceProxy.prototype.processUpdate = function (response) {
        var e_94, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_94_1) { e_94 = { error: e_94_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_94) throw e_94.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = TenantDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    TenantServiceProxy.ɵfac = function TenantServiceProxy_Factory(t) { return new (t || TenantServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    TenantServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TenantServiceProxy, factory: TenantServiceProxy.ɵfac });
    return TenantServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TenantServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var TokenAuthServiceProxy = /** @class */ (function () {
    function TokenAuthServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    TokenAuthServiceProxy.prototype.authenticate = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/Authenticate";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processAuthenticate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processAuthenticate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    TokenAuthServiceProxy.prototype.processAuthenticate = function (response) {
        var e_95, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_95_1) { e_95 = { error: e_95_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_95) throw e_95.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = AuthenticateResultModel.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    TokenAuthServiceProxy.prototype.getAccessToken = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/getAccessToken";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAccessToken(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAccessToken(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    TokenAuthServiceProxy.prototype.processGetAccessToken = function (response) {
        var e_96, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_96_1) { e_96 = { error: e_96_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_96) throw e_96.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = GetAccessTokenModel.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param userId (optional)
     * @param token (optional)
     * @return Success
     */
    TokenAuthServiceProxy.prototype.activateAccount = function (userId, token) {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/activateAccount?";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (token !== undefined && token !== null)
            url_ += "Token=" + encodeURIComponent("" + token) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processActivateAccount(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processActivateAccount(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    TokenAuthServiceProxy.prototype.processActivateAccount = function (response) {
        var e_97, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_97_1) { e_97 = { error: e_97_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_97) throw e_97.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = AuthenticateResultModel.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    TokenAuthServiceProxy.prototype.getExternalAuthenticationProviders = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/GetExternalAuthenticationProviders";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetExternalAuthenticationProviders(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetExternalAuthenticationProviders(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    TokenAuthServiceProxy.prototype.processGetExternalAuthenticationProviders = function (response) {
        var e_98, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_98_1) { e_98 = { error: e_98_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_98) throw e_98.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var e_99, _a;
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    try {
                        for (var resultData200_2 = __values(resultData200), resultData200_2_1 = resultData200_2.next(); !resultData200_2_1.done; resultData200_2_1 = resultData200_2.next()) {
                            var item = resultData200_2_1.value;
                            result200.push(ExternalLoginProviderInfoModel.fromJS(item));
                        }
                    }
                    catch (e_99_1) { e_99 = { error: e_99_1 }; }
                    finally {
                        try {
                            if (resultData200_2_1 && !resultData200_2_1.done && (_a = resultData200_2.return)) _a.call(resultData200_2);
                        }
                        finally { if (e_99) throw e_99.error; }
                    }
                }
                else {
                    result200 = null;
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    TokenAuthServiceProxy.prototype.externalAuthenticate = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/ExternalAuthenticate";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processExternalAuthenticate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processExternalAuthenticate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    TokenAuthServiceProxy.prototype.processExternalAuthenticate = function (response) {
        var e_100, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_100_1) { e_100 = { error: e_100_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_100) throw e_100.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = ExternalAuthenticateResultModel.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    TokenAuthServiceProxy.ɵfac = function TokenAuthServiceProxy_Factory(t) { return new (t || TokenAuthServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    TokenAuthServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TokenAuthServiceProxy, factory: TokenAuthServiceProxy.ɵfac });
    return TokenAuthServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TokenAuthServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var UserServiceProxy = /** @class */ (function () {
    function UserServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    UserServiceProxy.prototype.create = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processCreate = function (response) {
        var e_101, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_101_1) { e_101 = { error: e_101_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_101) throw e_101.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = UserDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    UserServiceProxy.prototype.update = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processUpdate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processUpdate = function (response) {
        var e_102, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_102_1) { e_102 = { error: e_102_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_102) throw e_102.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = UserDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    UserServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Delete?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processDelete = function (response) {
        var e_103, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_103_1) { e_103 = { error: e_103_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_103) throw e_103.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    UserServiceProxy.prototype.activate = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Activate";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processActivate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processActivate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processActivate = function (response) {
        var e_104, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_104_1) { e_104 = { error: e_104_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_104) throw e_104.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    UserServiceProxy.prototype.deActivate = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/DeActivate";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processDeActivate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processDeActivate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processDeActivate = function (response) {
        var e_105, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_105_1) { e_105 = { error: e_105_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_105) throw e_105.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @return Success
     */
    UserServiceProxy.prototype.getRoles = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/GetRoles";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetRoles(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetRoles(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processGetRoles = function (response) {
        var e_106, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_106_1) { e_106 = { error: e_106_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_106) throw e_106.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = RoleDtoListResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    UserServiceProxy.prototype.changeLanguage = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/ChangeLanguage";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processChangeLanguage(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processChangeLanguage(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processChangeLanguage = function (response) {
        var e_107, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_107_1) { e_107 = { error: e_107_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_107) throw e_107.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    UserServiceProxy.prototype.changePassword = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/ChangePassword";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processChangePassword(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processChangePassword(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processChangePassword = function (response) {
        var e_108, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_108_1) { e_108 = { error: e_108_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_108) throw e_108.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    UserServiceProxy.prototype.resetPassword = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/ResetPassword";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processResetPassword(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processResetPassword(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processResetPassword = function (response) {
        var e_109, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_109_1) { e_109 = { error: e_109_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_109) throw e_109.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    UserServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Get?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGet(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processGet = function (response) {
        var e_110, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_110_1) { e_110 = { error: e_110_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_110) throw e_110.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = UserDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @param keyword (optional)
     * @param isActive (optional)
     * @param skipCount (optional)
     * @param maxResultCount (optional)
     * @return Success
     */
    UserServiceProxy.prototype.getAll = function (keyword, isActive, skipCount, maxResultCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/GetAll?";
        if (keyword !== undefined && keyword !== null)
            url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
        if (isActive !== undefined && isActive !== null)
            url_ += "IsActive=" + encodeURIComponent("" + isActive) + "&";
        if (skipCount === null)
            throw new Error("The parameter 'skipCount' cannot be null.");
        else if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' cannot be null.");
        else if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "text/plain"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processGetAll = function (response) {
        var e_111, _a;
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = __values(response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_111_1) { e_111 = { error: e_111_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_111) throw e_111.error; }
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = UserDtoPagedResultDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    UserServiceProxy.ɵfac = function UserServiceProxy_Factory(t) { return new (t || UserServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
    UserServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserServiceProxy, factory: UserServiceProxy.ɵfac });
    return UserServiceProxy;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
var IsTenantAvailableInput = /** @class */ (function () {
    function IsTenantAvailableInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    IsTenantAvailableInput.prototype.init = function (_data) {
        if (_data) {
            this.tenancyName = _data["tenancyName"];
        }
    };
    IsTenantAvailableInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new IsTenantAvailableInput();
        result.init(data);
        return result;
    };
    IsTenantAvailableInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        return data;
    };
    IsTenantAvailableInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new IsTenantAvailableInput();
        result.init(json);
        return result;
    };
    return IsTenantAvailableInput;
}());

var TenantAvailabilityState;
(function (TenantAvailabilityState) {
    TenantAvailabilityState[TenantAvailabilityState["_1"] = 1] = "_1";
    TenantAvailabilityState[TenantAvailabilityState["_2"] = 2] = "_2";
    TenantAvailabilityState[TenantAvailabilityState["_3"] = 3] = "_3";
})(TenantAvailabilityState || (TenantAvailabilityState = {}));
var IsTenantAvailableOutput = /** @class */ (function () {
    function IsTenantAvailableOutput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    IsTenantAvailableOutput.prototype.init = function (_data) {
        if (_data) {
            this.state = _data["state"];
            this.tenantId = _data["tenantId"];
        }
    };
    IsTenantAvailableOutput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new IsTenantAvailableOutput();
        result.init(data);
        return result;
    };
    IsTenantAvailableOutput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["state"] = this.state;
        data["tenantId"] = this.tenantId;
        return data;
    };
    IsTenantAvailableOutput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new IsTenantAvailableOutput();
        result.init(json);
        return result;
    };
    return IsTenantAvailableOutput;
}());

var RegisterInput = /** @class */ (function () {
    function RegisterInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RegisterInput.prototype.init = function (_data) {
        if (_data) {
            this.name = _data["name"];
            this.surname = _data["surname"];
            this.userName = _data["userName"];
            this.emailAddress = _data["emailAddress"];
            this.password = _data["password"];
            this.captchaResponse = _data["captchaResponse"];
        }
    };
    RegisterInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RegisterInput();
        result.init(data);
        return result;
    };
    RegisterInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["password"] = this.password;
        data["captchaResponse"] = this.captchaResponse;
        return data;
    };
    RegisterInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RegisterInput();
        result.init(json);
        return result;
    };
    return RegisterInput;
}());

var RegisterOutput = /** @class */ (function () {
    function RegisterOutput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RegisterOutput.prototype.init = function (_data) {
        if (_data) {
            this.canLogin = _data["canLogin"];
            this.userId = _data["userId"];
        }
    };
    RegisterOutput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RegisterOutput();
        result.init(data);
        return result;
    };
    RegisterOutput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["canLogin"] = this.canLogin;
        data["userId"] = this.userId;
        return data;
    };
    RegisterOutput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RegisterOutput();
        result.init(json);
        return result;
    };
    return RegisterOutput;
}());

var CreateCatalogueInput = /** @class */ (function () {
    function CreateCatalogueInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateCatalogueInput.prototype.init = function (_data) {
        if (_data) {
            this.catalogueType = _data["catalogueType"];
            this.designation = _data["designation"];
            this.description = _data["description"];
            this.htPrice = _data["htPrice"];
            this.unity = _data["unity"];
            this.tva = _data["tva"];
            this.minimalQuantity = _data["minimalQuantity"];
        }
    };
    CreateCatalogueInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateCatalogueInput();
        result.init(data);
        return result;
    };
    CreateCatalogueInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["catalogueType"] = this.catalogueType;
        data["designation"] = this.designation;
        data["description"] = this.description;
        data["htPrice"] = this.htPrice;
        data["unity"] = this.unity;
        data["tva"] = this.tva;
        data["minimalQuantity"] = this.minimalQuantity;
        return data;
    };
    CreateCatalogueInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateCatalogueInput();
        result.init(json);
        return result;
    };
    return CreateCatalogueInput;
}());

var CatalogueDto = /** @class */ (function () {
    function CatalogueDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CatalogueDto.prototype.init = function (_data) {
        if (_data) {
            this.reference = _data["reference"];
            this.catalogueType = _data["catalogueType"];
            this.addedDate = _data["addedDate"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["addedDate"].toString()) : undefined;
            this.designation = _data["designation"];
            this.description = _data["description"];
            this.htPrice = _data["htPrice"];
            this.unity = _data["unity"];
            this.tva = _data["tva"];
            this.minimalQuantity = _data["minimalQuantity"];
            this.ttcPrice = _data["ttcPrice"];
            this.totalSalesTTC = _data["totalSalesTTC"];
            this.totalUnitsSold = _data["totalUnitsSold"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["lastModificationTime"].toString()) : undefined;
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["creationTime"].toString()) : undefined;
            this.creatorUserId = _data["creatorUserId"];
            this.id = _data["id"];
        }
    };
    CatalogueDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CatalogueDto();
        result.init(data);
        return result;
    };
    CatalogueDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["reference"] = this.reference;
        data["catalogueType"] = this.catalogueType;
        data["addedDate"] = this.addedDate ? this.addedDate.toISOString() : undefined;
        data["designation"] = this.designation;
        data["description"] = this.description;
        data["htPrice"] = this.htPrice;
        data["unity"] = this.unity;
        data["tva"] = this.tva;
        data["minimalQuantity"] = this.minimalQuantity;
        data["ttcPrice"] = this.ttcPrice;
        data["totalSalesTTC"] = this.totalSalesTTC;
        data["totalUnitsSold"] = this.totalUnitsSold;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : undefined;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        data["creatorUserId"] = this.creatorUserId;
        data["id"] = this.id;
        return data;
    };
    CatalogueDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CatalogueDto();
        result.init(json);
        return result;
    };
    return CatalogueDto;
}());

var UpdateCatalogueInput = /** @class */ (function () {
    function UpdateCatalogueInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UpdateCatalogueInput.prototype.init = function (_data) {
        if (_data) {
            this.catalogueType = _data["catalogueType"];
            this.designation = _data["designation"];
            this.description = _data["description"];
            this.htPrice = _data["htPrice"];
            this.unity = _data["unity"];
            this.tva = _data["tva"];
            this.minimalQuantity = _data["minimalQuantity"];
            this.id = _data["id"];
        }
    };
    UpdateCatalogueInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UpdateCatalogueInput();
        result.init(data);
        return result;
    };
    UpdateCatalogueInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["catalogueType"] = this.catalogueType;
        data["designation"] = this.designation;
        data["description"] = this.description;
        data["htPrice"] = this.htPrice;
        data["unity"] = this.unity;
        data["tva"] = this.tva;
        data["minimalQuantity"] = this.minimalQuantity;
        data["id"] = this.id;
        return data;
    };
    UpdateCatalogueInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UpdateCatalogueInput();
        result.init(json);
        return result;
    };
    return UpdateCatalogueInput;
}());

var CatalogueForAutoCompleteDto = /** @class */ (function () {
    function CatalogueForAutoCompleteDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CatalogueForAutoCompleteDto.prototype.init = function (_data) {
        if (_data) {
            this.designation = _data["designation"];
            this.addedDate = _data["addedDate"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["addedDate"].toString()) : undefined;
            this.htPrice = _data["htPrice"];
            this.unity = _data["unity"];
            this.tva = _data["tva"];
            this.minimalQuantity = _data["minimalQuantity"];
            this.id = _data["id"];
        }
    };
    CatalogueForAutoCompleteDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CatalogueForAutoCompleteDto();
        result.init(data);
        return result;
    };
    CatalogueForAutoCompleteDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["designation"] = this.designation;
        data["addedDate"] = this.addedDate ? this.addedDate.toISOString() : undefined;
        data["htPrice"] = this.htPrice;
        data["unity"] = this.unity;
        data["tva"] = this.tva;
        data["minimalQuantity"] = this.minimalQuantity;
        data["id"] = this.id;
        return data;
    };
    CatalogueForAutoCompleteDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CatalogueForAutoCompleteDto();
        result.init(json);
        return result;
    };
    return CatalogueForAutoCompleteDto;
}());

var CatalogueForAutoCompleteDtoListResultDto = /** @class */ (function () {
    function CatalogueForAutoCompleteDtoListResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CatalogueForAutoCompleteDtoListResultDto.prototype.init = function (_data) {
        var e_112, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(CatalogueForAutoCompleteDto.fromJS(item));
                    }
                }
                catch (e_112_1) { e_112 = { error: e_112_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_112) throw e_112.error; }
                }
            }
        }
    };
    CatalogueForAutoCompleteDtoListResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CatalogueForAutoCompleteDtoListResultDto();
        result.init(data);
        return result;
    };
    CatalogueForAutoCompleteDtoListResultDto.prototype.toJSON = function (data) {
        var e_113, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_113_1) { e_113 = { error: e_113_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_113) throw e_113.error; }
            }
        }
        return data;
    };
    CatalogueForAutoCompleteDtoListResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CatalogueForAutoCompleteDtoListResultDto();
        result.init(json);
        return result;
    };
    return CatalogueForAutoCompleteDtoListResultDto;
}());

var CatalogueDtoListResultWithTotalEntityItemsDto = /** @class */ (function () {
    function CatalogueDtoListResultWithTotalEntityItemsDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CatalogueDtoListResultWithTotalEntityItemsDto.prototype.init = function (_data) {
        var e_114, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(CatalogueDto.fromJS(item));
                    }
                }
                catch (e_114_1) { e_114 = { error: e_114_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_114) throw e_114.error; }
                }
            }
            this.totalEntityItems = _data["totalEntityItems"];
        }
    };
    CatalogueDtoListResultWithTotalEntityItemsDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CatalogueDtoListResultWithTotalEntityItemsDto();
        result.init(data);
        return result;
    };
    CatalogueDtoListResultWithTotalEntityItemsDto.prototype.toJSON = function (data) {
        var e_115, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_115_1) { e_115 = { error: e_115_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_115) throw e_115.error; }
            }
        }
        data["totalEntityItems"] = this.totalEntityItems;
        return data;
    };
    CatalogueDtoListResultWithTotalEntityItemsDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CatalogueDtoListResultWithTotalEntityItemsDto();
        result.init(json);
        return result;
    };
    return CatalogueDtoListResultWithTotalEntityItemsDto;
}());

var ClientDto = /** @class */ (function () {
    function ClientDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ClientDto.prototype.init = function (_data) {
        if (_data) {
            this.reference = _data["reference"];
            this.categorieClient = _data["categorieClient"];
            this.nom = _data["nom"];
            this.displayName = _data["displayName"];
            this.secteurActivite = _data["secteurActivite"];
            this.ice = _data["ice"];
            this.raisonSociale = _data["raisonSociale"];
            this.adresse = _data["adresse"];
            this.ville = _data["ville"];
            this.pays = _data["pays"];
            this.codePostal = _data["codePostal"];
            this.email = _data["email"];
            this.telFix = _data["telFix"];
            this.telPortable = _data["telPortable"];
            this.siteWeb = _data["siteWeb"];
            this.deviseFacturation = _data["deviseFacturation"];
            this.remisePermanente = _data["remisePermanente"];
            this.delaiPaiement = _data["delaiPaiement"];
            this.pendingInvoicesAmount = _data["pendingInvoicesAmount"];
            this.overdueInvoicesAmount = _data["overdueInvoicesAmount"];
            this.clientType = _data["clientType"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["lastModificationTime"].toString()) : undefined;
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["creationTime"].toString()) : undefined;
            this.creatorUserId = _data["creatorUserId"];
            this.id = _data["id"];
        }
    };
    ClientDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ClientDto();
        result.init(data);
        return result;
    };
    ClientDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["reference"] = this.reference;
        data["categorieClient"] = this.categorieClient;
        data["nom"] = this.nom;
        data["displayName"] = this.displayName;
        data["secteurActivite"] = this.secteurActivite;
        data["ice"] = this.ice;
        data["raisonSociale"] = this.raisonSociale;
        data["adresse"] = this.adresse;
        data["ville"] = this.ville;
        data["pays"] = this.pays;
        data["codePostal"] = this.codePostal;
        data["email"] = this.email;
        data["telFix"] = this.telFix;
        data["telPortable"] = this.telPortable;
        data["siteWeb"] = this.siteWeb;
        data["deviseFacturation"] = this.deviseFacturation;
        data["remisePermanente"] = this.remisePermanente;
        data["delaiPaiement"] = this.delaiPaiement;
        data["pendingInvoicesAmount"] = this.pendingInvoicesAmount;
        data["overdueInvoicesAmount"] = this.overdueInvoicesAmount;
        data["clientType"] = this.clientType;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : undefined;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        data["creatorUserId"] = this.creatorUserId;
        data["id"] = this.id;
        return data;
    };
    ClientDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ClientDto();
        result.init(json);
        return result;
    };
    return ClientDto;
}());

var ClientDtoListResultDto = /** @class */ (function () {
    function ClientDtoListResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ClientDtoListResultDto.prototype.init = function (_data) {
        var e_116, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(ClientDto.fromJS(item));
                    }
                }
                catch (e_116_1) { e_116 = { error: e_116_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_116) throw e_116.error; }
                }
            }
        }
    };
    ClientDtoListResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ClientDtoListResultDto();
        result.init(data);
        return result;
    };
    ClientDtoListResultDto.prototype.toJSON = function (data) {
        var e_117, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_117_1) { e_117 = { error: e_117_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_117) throw e_117.error; }
            }
        }
        return data;
    };
    ClientDtoListResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ClientDtoListResultDto();
        result.init(json);
        return result;
    };
    return ClientDtoListResultDto;
}());

var ClientDtoListResultWithTotalEntityItemsDto = /** @class */ (function () {
    function ClientDtoListResultWithTotalEntityItemsDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ClientDtoListResultWithTotalEntityItemsDto.prototype.init = function (_data) {
        var e_118, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(ClientDto.fromJS(item));
                    }
                }
                catch (e_118_1) { e_118 = { error: e_118_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_118) throw e_118.error; }
                }
            }
            this.totalEntityItems = _data["totalEntityItems"];
        }
    };
    ClientDtoListResultWithTotalEntityItemsDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ClientDtoListResultWithTotalEntityItemsDto();
        result.init(data);
        return result;
    };
    ClientDtoListResultWithTotalEntityItemsDto.prototype.toJSON = function (data) {
        var e_119, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_119_1) { e_119 = { error: e_119_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_119) throw e_119.error; }
            }
        }
        data["totalEntityItems"] = this.totalEntityItems;
        return data;
    };
    ClientDtoListResultWithTotalEntityItemsDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ClientDtoListResultWithTotalEntityItemsDto();
        result.init(json);
        return result;
    };
    return ClientDtoListResultWithTotalEntityItemsDto;
}());

var ClientForAutoCompleteDto = /** @class */ (function () {
    function ClientForAutoCompleteDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ClientForAutoCompleteDto.prototype.init = function (_data) {
        if (_data) {
            this.displayName = _data["displayName"];
            this.id = _data["id"];
        }
    };
    ClientForAutoCompleteDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ClientForAutoCompleteDto();
        result.init(data);
        return result;
    };
    ClientForAutoCompleteDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["displayName"] = this.displayName;
        data["id"] = this.id;
        return data;
    };
    ClientForAutoCompleteDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ClientForAutoCompleteDto();
        result.init(json);
        return result;
    };
    return ClientForAutoCompleteDto;
}());

var ClientForAutoCompleteDtoListResultDto = /** @class */ (function () {
    function ClientForAutoCompleteDtoListResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ClientForAutoCompleteDtoListResultDto.prototype.init = function (_data) {
        var e_120, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(ClientForAutoCompleteDto.fromJS(item));
                    }
                }
                catch (e_120_1) { e_120 = { error: e_120_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_120) throw e_120.error; }
                }
            }
        }
    };
    ClientForAutoCompleteDtoListResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ClientForAutoCompleteDtoListResultDto();
        result.init(data);
        return result;
    };
    ClientForAutoCompleteDtoListResultDto.prototype.toJSON = function (data) {
        var e_121, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_121_1) { e_121 = { error: e_121_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_121) throw e_121.error; }
            }
        }
        return data;
    };
    ClientForAutoCompleteDtoListResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ClientForAutoCompleteDtoListResultDto();
        result.init(json);
        return result;
    };
    return ClientForAutoCompleteDtoListResultDto;
}());

var ClientDefaultsDto = /** @class */ (function () {
    function ClientDefaultsDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ClientDefaultsDto.prototype.init = function (_data) {
        if (_data) {
            this.currency = _data["currency"];
            this.paymentPeriod = _data["paymentPeriod"];
            this.permanentDiscount = _data["permanentDiscount"];
        }
    };
    ClientDefaultsDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ClientDefaultsDto();
        result.init(data);
        return result;
    };
    ClientDefaultsDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["currency"] = this.currency;
        data["paymentPeriod"] = this.paymentPeriod;
        data["permanentDiscount"] = this.permanentDiscount;
        return data;
    };
    ClientDefaultsDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ClientDefaultsDto();
        result.init(json);
        return result;
    };
    return ClientDefaultsDto;
}());

var ChangeUiThemeInput = /** @class */ (function () {
    function ChangeUiThemeInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ChangeUiThemeInput.prototype.init = function (_data) {
        if (_data) {
            this.theme = _data["theme"];
        }
    };
    ChangeUiThemeInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ChangeUiThemeInput();
        result.init(data);
        return result;
    };
    ChangeUiThemeInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["theme"] = this.theme;
        return data;
    };
    ChangeUiThemeInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ChangeUiThemeInput();
        result.init(json);
        return result;
    };
    return ChangeUiThemeInput;
}());

var CountryDto = /** @class */ (function () {
    function CountryDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CountryDto.prototype.init = function (_data) {
        if (_data) {
            this.paysName = _data["paysName"];
            this.id = _data["id"];
        }
    };
    CountryDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CountryDto();
        result.init(data);
        return result;
    };
    CountryDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["paysName"] = this.paysName;
        data["id"] = this.id;
        return data;
    };
    CountryDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CountryDto();
        result.init(json);
        return result;
    };
    return CountryDto;
}());

var CountryDtoListResultDto = /** @class */ (function () {
    function CountryDtoListResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CountryDtoListResultDto.prototype.init = function (_data) {
        var e_122, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(CountryDto.fromJS(item));
                    }
                }
                catch (e_122_1) { e_122 = { error: e_122_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_122) throw e_122.error; }
                }
            }
        }
    };
    CountryDtoListResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CountryDtoListResultDto();
        result.init(data);
        return result;
    };
    CountryDtoListResultDto.prototype.toJSON = function (data) {
        var e_123, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_123_1) { e_123 = { error: e_123_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_123) throw e_123.error; }
            }
        }
        return data;
    };
    CountryDtoListResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CountryDtoListResultDto();
        result.init(json);
        return result;
    };
    return CountryDtoListResultDto;
}());

var Country = /** @class */ (function () {
    function Country(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Country.prototype.init = function (_data) {
        if (_data) {
            this.paysName = _data["paysName"];
            this.paysCode = _data["paysCode"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["lastModificationTime"].toString()) : undefined;
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["creationTime"].toString()) : undefined;
            this.creatorUserId = _data["creatorUserId"];
            this.id = _data["id"];
        }
    };
    Country.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Country();
        result.init(data);
        return result;
    };
    Country.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["paysName"] = this.paysName;
        data["paysCode"] = this.paysCode;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : undefined;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        data["creatorUserId"] = this.creatorUserId;
        data["id"] = this.id;
        return data;
    };
    Country.prototype.clone = function () {
        var json = this.toJSON();
        var result = new Country();
        result.init(json);
        return result;
    };
    return Country;
}());

var UserDto = /** @class */ (function () {
    function UserDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UserDto.prototype.init = function (_data) {
        var e_124, _a;
        if (_data) {
            this.userName = _data["userName"];
            this.name = _data["name"];
            this.surname = _data["surname"];
            this.emailAddress = _data["emailAddress"];
            this.isActive = _data["isActive"];
            this.fullName = _data["fullName"];
            this.lastLoginTime = _data["lastLoginTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["lastLoginTime"].toString()) : undefined;
            this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["creationTime"].toString()) : undefined;
            if (Array.isArray(_data["roleNames"])) {
                this.roleNames = [];
                try {
                    for (var _b = __values(_data["roleNames"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.roleNames.push(item);
                    }
                }
                catch (e_124_1) { e_124 = { error: e_124_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_124) throw e_124.error; }
                }
            }
            this.id = _data["id"];
        }
    };
    UserDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UserDto();
        result.init(data);
        return result;
    };
    UserDto.prototype.toJSON = function (data) {
        var e_125, _a;
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["emailAddress"] = this.emailAddress;
        data["isActive"] = this.isActive;
        data["fullName"] = this.fullName;
        data["lastLoginTime"] = this.lastLoginTime ? this.lastLoginTime.toISOString() : undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        if (Array.isArray(this.roleNames)) {
            data["roleNames"] = [];
            try {
                for (var _b = __values(this.roleNames), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["roleNames"].push(item);
                }
            }
            catch (e_125_1) { e_125 = { error: e_125_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_125) throw e_125.error; }
            }
        }
        data["id"] = this.id;
        return data;
    };
    UserDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UserDto();
        result.init(json);
        return result;
    };
    return UserDto;
}());

var DevisStatutEnum;
(function (DevisStatutEnum) {
    DevisStatutEnum[DevisStatutEnum["Cree"] = 0] = "Cree";
    DevisStatutEnum[DevisStatutEnum["Valide"] = 1] = "Valide";
    DevisStatutEnum[DevisStatutEnum["Converti"] = 2] = "Converti";
    DevisStatutEnum[DevisStatutEnum["Rejete"] = 3] = "Rejete";
    DevisStatutEnum[DevisStatutEnum["Expire"] = 4] = "Expire";
    DevisStatutEnum[DevisStatutEnum["Undefined"] = -1] = "Undefined";
})(DevisStatutEnum || (DevisStatutEnum = {}));
var FactureStatutEnum;
(function (FactureStatutEnum) {
    FactureStatutEnum[FactureStatutEnum["Cree"] = 0] = "Cree";
    FactureStatutEnum[FactureStatutEnum["Valide"] = 1] = "Valide";
    FactureStatutEnum[FactureStatutEnum["ReglePartiellemt"] = 2] = "ReglePartiellemt";
    FactureStatutEnum[FactureStatutEnum["Regle"] = 3] = "Regle";
    FactureStatutEnum[FactureStatutEnum["PaiementAttente"] = 4] = "PaiementAttente";
    FactureStatutEnum[FactureStatutEnum["PaiementRetard"] = 5] = "PaiementRetard";
    FactureStatutEnum[FactureStatutEnum["Undefined"] = -1] = "Undefined";
})(FactureStatutEnum || (FactureStatutEnum = {}));
var ModePaiementEnum;
(function (ModePaiementEnum) {
    ModePaiementEnum[ModePaiementEnum["Cheque"] = 0] = "Cheque";
    ModePaiementEnum[ModePaiementEnum["Virement"] = 1] = "Virement";
    ModePaiementEnum[ModePaiementEnum["Liquide"] = 2] = "Liquide";
    ModePaiementEnum[ModePaiementEnum["Effet"] = 3] = "Effet";
})(ModePaiementEnum || (ModePaiementEnum = {}));
var DevisItemDto = /** @class */ (function () {
    function DevisItemDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    DevisItemDto.prototype.init = function (_data) {
        if (_data) {
            this.designation = _data["designation"];
            this.date = _data["date"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["date"].toString()) : undefined;
            this.quantity = _data["quantity"];
            this.unit = _data["unit"];
            this.unitPriceHT = _data["unitPriceHT"];
            this.tva = _data["tva"];
            this.totalTtc = _data["totalTtc"];
            this.catalogueId = _data["catalogueId"];
        }
    };
    DevisItemDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new DevisItemDto();
        result.init(data);
        return result;
    };
    DevisItemDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["designation"] = this.designation;
        data["date"] = this.date ? this.date.toISOString() : undefined;
        data["quantity"] = this.quantity;
        data["unit"] = this.unit;
        data["unitPriceHT"] = this.unitPriceHT;
        data["tva"] = this.tva;
        data["totalTtc"] = this.totalTtc;
        data["catalogueId"] = this.catalogueId;
        return data;
    };
    DevisItemDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new DevisItemDto();
        result.init(json);
        return result;
    };
    return DevisItemDto;
}());

var CreateDevisInput = /** @class */ (function () {
    function CreateDevisInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateDevisInput.prototype.init = function (_data) {
        var e_126, _a;
        if (_data) {
            this.reference = _data["reference"];
            this.dateEmission = _data["dateEmission"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["dateEmission"].toString()) : undefined;
            this.echeancePaiement = _data["echeancePaiement"];
            this.messageIntroduction = _data["messageIntroduction"];
            this.piedDePage = _data["piedDePage"];
            this.remise = _data["remise"];
            this.currency = _data["currency"];
            this.statut = _data["statut"];
            if (Array.isArray(_data["devisItems"])) {
                this.devisItems = [];
                try {
                    for (var _b = __values(_data["devisItems"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.devisItems.push(DevisItemDto.fromJS(item));
                    }
                }
                catch (e_126_1) { e_126 = { error: e_126_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_126) throw e_126.error; }
                }
            }
            this.clientId = _data["clientId"];
            this.montantTtc = _data["montantTtc"];
        }
    };
    CreateDevisInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateDevisInput();
        result.init(data);
        return result;
    };
    CreateDevisInput.prototype.toJSON = function (data) {
        var e_127, _a;
        data = typeof data === 'object' ? data : {};
        data["reference"] = this.reference;
        data["dateEmission"] = this.dateEmission ? this.dateEmission.toISOString() : undefined;
        data["echeancePaiement"] = this.echeancePaiement;
        data["messageIntroduction"] = this.messageIntroduction;
        data["piedDePage"] = this.piedDePage;
        data["remise"] = this.remise;
        data["currency"] = this.currency;
        data["statut"] = this.statut;
        if (Array.isArray(this.devisItems)) {
            data["devisItems"] = [];
            try {
                for (var _b = __values(this.devisItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["devisItems"].push(item.toJSON());
                }
            }
            catch (e_127_1) { e_127 = { error: e_127_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_127) throw e_127.error; }
            }
        }
        data["clientId"] = this.clientId;
        data["montantTtc"] = this.montantTtc;
        return data;
    };
    CreateDevisInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateDevisInput();
        result.init(json);
        return result;
    };
    return CreateDevisInput;
}());

var UpdateDevisInput = /** @class */ (function () {
    function UpdateDevisInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UpdateDevisInput.prototype.init = function (_data) {
        var e_128, _a;
        if (_data) {
            this.reference = _data["reference"];
            this.dateEmission = _data["dateEmission"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["dateEmission"].toString()) : undefined;
            this.echeancePaiement = _data["echeancePaiement"];
            this.messageIntroduction = _data["messageIntroduction"];
            this.piedDePage = _data["piedDePage"];
            this.remise = _data["remise"];
            this.currency = _data["currency"];
            this.statut = _data["statut"];
            if (Array.isArray(_data["devisItems"])) {
                this.devisItems = [];
                try {
                    for (var _b = __values(_data["devisItems"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.devisItems.push(DevisItemDto.fromJS(item));
                    }
                }
                catch (e_128_1) { e_128 = { error: e_128_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_128) throw e_128.error; }
                }
            }
            this.clientId = _data["clientId"];
            this.montantTtc = _data["montantTtc"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["lastModificationTime"].toString()) : undefined;
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["creationTime"].toString()) : undefined;
            this.creatorUserId = _data["creatorUserId"];
            this.id = _data["id"];
        }
    };
    UpdateDevisInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UpdateDevisInput();
        result.init(data);
        return result;
    };
    UpdateDevisInput.prototype.toJSON = function (data) {
        var e_129, _a;
        data = typeof data === 'object' ? data : {};
        data["reference"] = this.reference;
        data["dateEmission"] = this.dateEmission ? this.dateEmission.toISOString() : undefined;
        data["echeancePaiement"] = this.echeancePaiement;
        data["messageIntroduction"] = this.messageIntroduction;
        data["piedDePage"] = this.piedDePage;
        data["remise"] = this.remise;
        data["currency"] = this.currency;
        data["statut"] = this.statut;
        if (Array.isArray(this.devisItems)) {
            data["devisItems"] = [];
            try {
                for (var _b = __values(this.devisItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["devisItems"].push(item.toJSON());
                }
            }
            catch (e_129_1) { e_129 = { error: e_129_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_129) throw e_129.error; }
            }
        }
        data["clientId"] = this.clientId;
        data["montantTtc"] = this.montantTtc;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : undefined;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        data["creatorUserId"] = this.creatorUserId;
        data["id"] = this.id;
        return data;
    };
    UpdateDevisInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UpdateDevisInput();
        result.init(json);
        return result;
    };
    return UpdateDevisInput;
}());

var DevisDto = /** @class */ (function () {
    function DevisDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    DevisDto.prototype.init = function (_data) {
        var e_130, _a;
        if (_data) {
            this.reference = _data["reference"];
            this.dateEmission = _data["dateEmission"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["dateEmission"].toString()) : undefined;
            this.echeancePaiement = _data["echeancePaiement"];
            this.messageIntroduction = _data["messageIntroduction"];
            this.piedDePage = _data["piedDePage"];
            this.remise = _data["remise"];
            this.statut = _data["statut"];
            if (Array.isArray(_data["devisItems"])) {
                this.devisItems = [];
                try {
                    for (var _b = __values(_data["devisItems"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.devisItems.push(DevisItemDto.fromJS(item));
                    }
                }
                catch (e_130_1) { e_130 = { error: e_130_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_130) throw e_130.error; }
                }
            }
            this.clientId = _data["clientId"];
            this.client = _data["client"] ? ClientDto.fromJS(_data["client"]) : undefined;
            this.currency = _data["currency"];
            this.montantTtc = _data["montantTtc"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["lastModificationTime"].toString()) : undefined;
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["creationTime"].toString()) : undefined;
            this.creatorUserId = _data["creatorUserId"];
            this.id = _data["id"];
        }
    };
    DevisDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new DevisDto();
        result.init(data);
        return result;
    };
    DevisDto.prototype.toJSON = function (data) {
        var e_131, _a;
        data = typeof data === 'object' ? data : {};
        data["reference"] = this.reference;
        data["dateEmission"] = this.dateEmission ? this.dateEmission.toISOString() : undefined;
        data["echeancePaiement"] = this.echeancePaiement;
        data["messageIntroduction"] = this.messageIntroduction;
        data["piedDePage"] = this.piedDePage;
        data["remise"] = this.remise;
        data["statut"] = this.statut;
        if (Array.isArray(this.devisItems)) {
            data["devisItems"] = [];
            try {
                for (var _b = __values(this.devisItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["devisItems"].push(item.toJSON());
                }
            }
            catch (e_131_1) { e_131 = { error: e_131_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_131) throw e_131.error; }
            }
        }
        data["clientId"] = this.clientId;
        data["client"] = this.client ? this.client.toJSON() : undefined;
        data["currency"] = this.currency;
        data["montantTtc"] = this.montantTtc;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : undefined;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        data["creatorUserId"] = this.creatorUserId;
        data["id"] = this.id;
        return data;
    };
    DevisDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new DevisDto();
        result.init(json);
        return result;
    };
    return DevisDto;
}());

var EstimationInitiationDto = /** @class */ (function () {
    function EstimationInitiationDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    EstimationInitiationDto.prototype.init = function (_data) {
        if (_data) {
            this.lastReference = _data["lastReference"];
            this.estimateIntroMessage = _data["estimateIntroMessage"];
            this.estimateFooter = _data["estimateFooter"];
        }
    };
    EstimationInitiationDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new EstimationInitiationDto();
        result.init(data);
        return result;
    };
    EstimationInitiationDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["lastReference"] = this.lastReference;
        data["estimateIntroMessage"] = this.estimateIntroMessage;
        data["estimateFooter"] = this.estimateFooter;
        return data;
    };
    EstimationInitiationDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new EstimationInitiationDto();
        result.init(json);
        return result;
    };
    return EstimationInitiationDto;
}());

var DevisDtoListResultDto = /** @class */ (function () {
    function DevisDtoListResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    DevisDtoListResultDto.prototype.init = function (_data) {
        var e_132, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(DevisDto.fromJS(item));
                    }
                }
                catch (e_132_1) { e_132 = { error: e_132_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_132) throw e_132.error; }
                }
            }
        }
    };
    DevisDtoListResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new DevisDtoListResultDto();
        result.init(data);
        return result;
    };
    DevisDtoListResultDto.prototype.toJSON = function (data) {
        var e_133, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_133_1) { e_133 = { error: e_133_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_133) throw e_133.error; }
            }
        }
        return data;
    };
    DevisDtoListResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new DevisDtoListResultDto();
        result.init(json);
        return result;
    };
    return DevisDtoListResultDto;
}());

var FactureItemDto = /** @class */ (function () {
    function FactureItemDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    FactureItemDto.prototype.init = function (_data) {
        if (_data) {
            this.designation = _data["designation"];
            this.date = _data["date"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["date"].toString()) : undefined;
            this.quantity = _data["quantity"];
            this.unit = _data["unit"];
            this.unitPriceHT = _data["unitPriceHT"];
            this.tva = _data["tva"];
            this.totalTtc = _data["totalTtc"];
            this.catalogueId = _data["catalogueId"];
        }
    };
    FactureItemDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new FactureItemDto();
        result.init(data);
        return result;
    };
    FactureItemDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["designation"] = this.designation;
        data["date"] = this.date ? this.date.toISOString() : undefined;
        data["quantity"] = this.quantity;
        data["unit"] = this.unit;
        data["unitPriceHT"] = this.unitPriceHT;
        data["tva"] = this.tva;
        data["totalTtc"] = this.totalTtc;
        data["catalogueId"] = this.catalogueId;
        return data;
    };
    FactureItemDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new FactureItemDto();
        result.init(json);
        return result;
    };
    return FactureItemDto;
}());

var CreateFactureInput = /** @class */ (function () {
    function CreateFactureInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateFactureInput.prototype.init = function (_data) {
        var e_134, _a;
        if (_data) {
            this.reference = _data["reference"];
            this.dateEmission = _data["dateEmission"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["dateEmission"].toString()) : undefined;
            this.echeancePaiement = _data["echeancePaiement"];
            this.messageIntroduction = _data["messageIntroduction"];
            this.piedDePage = _data["piedDePage"];
            this.remise = _data["remise"];
            this.currency = _data["currency"];
            this.statut = _data["statut"];
            if (Array.isArray(_data["factureItems"])) {
                this.factureItems = [];
                try {
                    for (var _b = __values(_data["factureItems"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.factureItems.push(FactureItemDto.fromJS(item));
                    }
                }
                catch (e_134_1) { e_134 = { error: e_134_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_134) throw e_134.error; }
                }
            }
            this.clientId = _data["clientId"];
            this.montantTtc = _data["montantTtc"];
        }
    };
    CreateFactureInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateFactureInput();
        result.init(data);
        return result;
    };
    CreateFactureInput.prototype.toJSON = function (data) {
        var e_135, _a;
        data = typeof data === 'object' ? data : {};
        data["reference"] = this.reference;
        data["dateEmission"] = this.dateEmission ? this.dateEmission.toISOString() : undefined;
        data["echeancePaiement"] = this.echeancePaiement;
        data["messageIntroduction"] = this.messageIntroduction;
        data["piedDePage"] = this.piedDePage;
        data["remise"] = this.remise;
        data["currency"] = this.currency;
        data["statut"] = this.statut;
        if (Array.isArray(this.factureItems)) {
            data["factureItems"] = [];
            try {
                for (var _b = __values(this.factureItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["factureItems"].push(item.toJSON());
                }
            }
            catch (e_135_1) { e_135 = { error: e_135_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_135) throw e_135.error; }
            }
        }
        data["clientId"] = this.clientId;
        data["montantTtc"] = this.montantTtc;
        return data;
    };
    CreateFactureInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateFactureInput();
        result.init(json);
        return result;
    };
    return CreateFactureInput;
}());

var UpdateFactureInput = /** @class */ (function () {
    function UpdateFactureInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UpdateFactureInput.prototype.init = function (_data) {
        var e_136, _a;
        if (_data) {
            this.reference = _data["reference"];
            this.dateEmission = _data["dateEmission"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["dateEmission"].toString()) : undefined;
            this.echeancePaiement = _data["echeancePaiement"];
            this.messageIntroduction = _data["messageIntroduction"];
            this.piedDePage = _data["piedDePage"];
            this.remise = _data["remise"];
            this.currency = _data["currency"];
            this.statut = _data["statut"];
            if (Array.isArray(_data["factureItems"])) {
                this.factureItems = [];
                try {
                    for (var _b = __values(_data["factureItems"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.factureItems.push(FactureItemDto.fromJS(item));
                    }
                }
                catch (e_136_1) { e_136 = { error: e_136_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_136) throw e_136.error; }
                }
            }
            this.clientId = _data["clientId"];
            this.montantTtc = _data["montantTtc"];
            this.id = _data["id"];
        }
    };
    UpdateFactureInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UpdateFactureInput();
        result.init(data);
        return result;
    };
    UpdateFactureInput.prototype.toJSON = function (data) {
        var e_137, _a;
        data = typeof data === 'object' ? data : {};
        data["reference"] = this.reference;
        data["dateEmission"] = this.dateEmission ? this.dateEmission.toISOString() : undefined;
        data["echeancePaiement"] = this.echeancePaiement;
        data["messageIntroduction"] = this.messageIntroduction;
        data["piedDePage"] = this.piedDePage;
        data["remise"] = this.remise;
        data["currency"] = this.currency;
        data["statut"] = this.statut;
        if (Array.isArray(this.factureItems)) {
            data["factureItems"] = [];
            try {
                for (var _b = __values(this.factureItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["factureItems"].push(item.toJSON());
                }
            }
            catch (e_137_1) { e_137 = { error: e_137_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_137) throw e_137.error; }
            }
        }
        data["clientId"] = this.clientId;
        data["montantTtc"] = this.montantTtc;
        data["id"] = this.id;
        return data;
    };
    UpdateFactureInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UpdateFactureInput();
        result.init(json);
        return result;
    };
    return UpdateFactureInput;
}());

var FactureDto = /** @class */ (function () {
    function FactureDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    FactureDto.prototype.init = function (_data) {
        var e_138, _a;
        if (_data) {
            this.reference = _data["reference"];
            this.dateEmission = _data["dateEmission"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["dateEmission"].toString()) : undefined;
            this.echeancePaiement = _data["echeancePaiement"];
            this.messageIntroduction = _data["messageIntroduction"];
            this.piedDePage = _data["piedDePage"];
            this.remise = _data["remise"];
            this.statut = _data["statut"];
            if (Array.isArray(_data["factureItems"])) {
                this.factureItems = [];
                try {
                    for (var _b = __values(_data["factureItems"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.factureItems.push(FactureItemDto.fromJS(item));
                    }
                }
                catch (e_138_1) { e_138 = { error: e_138_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_138) throw e_138.error; }
                }
            }
            this.clientId = _data["clientId"];
            this.client = _data["client"] ? ClientDto.fromJS(_data["client"]) : undefined;
            this.currency = _data["currency"];
            this.montantTtc = _data["montantTtc"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["lastModificationTime"].toString()) : undefined;
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["creationTime"].toString()) : undefined;
            this.creatorUserId = _data["creatorUserId"];
            this.id = _data["id"];
        }
    };
    FactureDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new FactureDto();
        result.init(data);
        return result;
    };
    FactureDto.prototype.toJSON = function (data) {
        var e_139, _a;
        data = typeof data === 'object' ? data : {};
        data["reference"] = this.reference;
        data["dateEmission"] = this.dateEmission ? this.dateEmission.toISOString() : undefined;
        data["echeancePaiement"] = this.echeancePaiement;
        data["messageIntroduction"] = this.messageIntroduction;
        data["piedDePage"] = this.piedDePage;
        data["remise"] = this.remise;
        data["statut"] = this.statut;
        if (Array.isArray(this.factureItems)) {
            data["factureItems"] = [];
            try {
                for (var _b = __values(this.factureItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["factureItems"].push(item.toJSON());
                }
            }
            catch (e_139_1) { e_139 = { error: e_139_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_139) throw e_139.error; }
            }
        }
        data["clientId"] = this.clientId;
        data["client"] = this.client ? this.client.toJSON() : undefined;
        data["currency"] = this.currency;
        data["montantTtc"] = this.montantTtc;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : undefined;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        data["creatorUserId"] = this.creatorUserId;
        data["id"] = this.id;
        return data;
    };
    FactureDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new FactureDto();
        result.init(json);
        return result;
    };
    return FactureDto;
}());

var InvoiceInitiationDto = /** @class */ (function () {
    function InvoiceInitiationDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    InvoiceInitiationDto.prototype.init = function (_data) {
        if (_data) {
            this.lastReference = _data["lastReference"];
            this.invoiceIntroMessage = _data["invoiceIntroMessage"];
            this.invoiceFooter = _data["invoiceFooter"];
        }
    };
    InvoiceInitiationDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new InvoiceInitiationDto();
        result.init(data);
        return result;
    };
    InvoiceInitiationDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["lastReference"] = this.lastReference;
        data["invoiceIntroMessage"] = this.invoiceIntroMessage;
        data["invoiceFooter"] = this.invoiceFooter;
        return data;
    };
    InvoiceInitiationDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new InvoiceInitiationDto();
        result.init(json);
        return result;
    };
    return InvoiceInitiationDto;
}());

var FactureDtoListResultDto = /** @class */ (function () {
    function FactureDtoListResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    FactureDtoListResultDto.prototype.init = function (_data) {
        var e_140, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(FactureDto.fromJS(item));
                    }
                }
                catch (e_140_1) { e_140 = { error: e_140_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_140) throw e_140.error; }
                }
            }
        }
    };
    FactureDtoListResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new FactureDtoListResultDto();
        result.init(data);
        return result;
    };
    FactureDtoListResultDto.prototype.toJSON = function (data) {
        var e_141, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_141_1) { e_141 = { error: e_141_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_141) throw e_141.error; }
            }
        }
        return data;
    };
    FactureDtoListResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new FactureDtoListResultDto();
        result.init(json);
        return result;
    };
    return FactureDtoListResultDto;
}());

var FactureInfosPaiementDto = /** @class */ (function () {
    function FactureInfosPaiementDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    FactureInfosPaiementDto.prototype.init = function (_data) {
        if (_data) {
            this.datePaiement = _data["datePaiement"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["datePaiement"].toString()) : undefined;
            this.montantPaye = _data["montantPaye"];
            this.modePaiement = _data["modePaiement"];
            this.factureId = _data["factureId"];
            this.id = _data["id"];
        }
    };
    FactureInfosPaiementDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new FactureInfosPaiementDto();
        result.init(data);
        return result;
    };
    FactureInfosPaiementDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["datePaiement"] = this.datePaiement ? this.datePaiement.toISOString() : undefined;
        data["montantPaye"] = this.montantPaye;
        data["modePaiement"] = this.modePaiement;
        data["factureId"] = this.factureId;
        data["id"] = this.id;
        return data;
    };
    FactureInfosPaiementDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new FactureInfosPaiementDto();
        result.init(json);
        return result;
    };
    return FactureInfosPaiementDto;
}());

var FactureInfosPaiementDtoListResultWithTotalEntityItemsDto = /** @class */ (function () {
    function FactureInfosPaiementDtoListResultWithTotalEntityItemsDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    FactureInfosPaiementDtoListResultWithTotalEntityItemsDto.prototype.init = function (_data) {
        var e_142, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(FactureInfosPaiementDto.fromJS(item));
                    }
                }
                catch (e_142_1) { e_142 = { error: e_142_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_142) throw e_142.error; }
                }
            }
            this.totalEntityItems = _data["totalEntityItems"];
        }
    };
    FactureInfosPaiementDtoListResultWithTotalEntityItemsDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new FactureInfosPaiementDtoListResultWithTotalEntityItemsDto();
        result.init(data);
        return result;
    };
    FactureInfosPaiementDtoListResultWithTotalEntityItemsDto.prototype.toJSON = function (data) {
        var e_143, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_143_1) { e_143 = { error: e_143_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_143) throw e_143.error; }
            }
        }
        data["totalEntityItems"] = this.totalEntityItems;
        return data;
    };
    FactureInfosPaiementDtoListResultWithTotalEntityItemsDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new FactureInfosPaiementDtoListResultWithTotalEntityItemsDto();
        result.init(json);
        return result;
    };
    return FactureInfosPaiementDtoListResultWithTotalEntityItemsDto;
}());

var CreateInfosEntrepriseInput = /** @class */ (function () {
    function CreateInfosEntrepriseInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateInfosEntrepriseInput.prototype.init = function (_data) {
        if (_data) {
            this.raisonSociale = _data["raisonSociale"];
            this.secteurActivite = _data["secteurActivite"];
        }
    };
    CreateInfosEntrepriseInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateInfosEntrepriseInput();
        result.init(data);
        return result;
    };
    CreateInfosEntrepriseInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["raisonSociale"] = this.raisonSociale;
        data["secteurActivite"] = this.secteurActivite;
        return data;
    };
    CreateInfosEntrepriseInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateInfosEntrepriseInput();
        result.init(json);
        return result;
    };
    return CreateInfosEntrepriseInput;
}());

var InfosEntrepriseDto = /** @class */ (function () {
    function InfosEntrepriseDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    InfosEntrepriseDto.prototype.init = function (_data) {
        if (_data) {
            this.raisonSociale = _data["raisonSociale"];
            this.secteurActivite = _data["secteurActivite"];
            this.adresse = _data["adresse"];
            this.codePostal = _data["codePostal"];
            this.ville = _data["ville"];
            this.pays = _data["pays"];
            this.telephone = _data["telephone"];
            this.adresseMail = _data["adresseMail"];
            this.userId = _data["userId"];
            this.user = _data["user"] ? UserDto.fromJS(_data["user"]) : undefined;
            this.lastModificationTime = _data["lastModificationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["lastModificationTime"].toString()) : undefined;
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["creationTime"].toString()) : undefined;
            this.creatorUserId = _data["creatorUserId"];
            this.id = _data["id"];
        }
    };
    InfosEntrepriseDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new InfosEntrepriseDto();
        result.init(data);
        return result;
    };
    InfosEntrepriseDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["raisonSociale"] = this.raisonSociale;
        data["secteurActivite"] = this.secteurActivite;
        data["adresse"] = this.adresse;
        data["codePostal"] = this.codePostal;
        data["ville"] = this.ville;
        data["pays"] = this.pays;
        data["telephone"] = this.telephone;
        data["adresseMail"] = this.adresseMail;
        data["userId"] = this.userId;
        data["user"] = this.user ? this.user.toJSON() : undefined;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : undefined;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        data["creatorUserId"] = this.creatorUserId;
        data["id"] = this.id;
        return data;
    };
    InfosEntrepriseDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new InfosEntrepriseDto();
        result.init(json);
        return result;
    };
    return InfosEntrepriseDto;
}());

var GeneralInfosDto = /** @class */ (function () {
    function GeneralInfosDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    GeneralInfosDto.prototype.init = function (_data) {
        if (_data) {
            this.raisonSociale = _data["raisonSociale"];
            this.secteurActivite = _data["secteurActivite"];
            this.hasLogo = _data["hasLogo"];
            this.id = _data["id"];
        }
    };
    GeneralInfosDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new GeneralInfosDto();
        result.init(data);
        return result;
    };
    GeneralInfosDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["raisonSociale"] = this.raisonSociale;
        data["secteurActivite"] = this.secteurActivite;
        data["hasLogo"] = this.hasLogo;
        data["id"] = this.id;
        return data;
    };
    GeneralInfosDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new GeneralInfosDto();
        result.init(json);
        return result;
    };
    return GeneralInfosDto;
}());

var InfosEntrepriseDtoListResultDto = /** @class */ (function () {
    function InfosEntrepriseDtoListResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    InfosEntrepriseDtoListResultDto.prototype.init = function (_data) {
        var e_144, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(InfosEntrepriseDto.fromJS(item));
                    }
                }
                catch (e_144_1) { e_144 = { error: e_144_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_144) throw e_144.error; }
                }
            }
        }
    };
    InfosEntrepriseDtoListResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new InfosEntrepriseDtoListResultDto();
        result.init(data);
        return result;
    };
    InfosEntrepriseDtoListResultDto.prototype.toJSON = function (data) {
        var e_145, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_145_1) { e_145 = { error: e_145_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_145) throw e_145.error; }
            }
        }
        return data;
    };
    InfosEntrepriseDtoListResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new InfosEntrepriseDtoListResultDto();
        result.init(json);
        return result;
    };
    return InfosEntrepriseDtoListResultDto;
}());

var ContactInfosDto = /** @class */ (function () {
    function ContactInfosDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ContactInfosDto.prototype.init = function (_data) {
        if (_data) {
            this.adresse = _data["adresse"];
            this.pays = _data["pays"];
            this.ville = _data["ville"];
            this.codePostal = _data["codePostal"];
            this.telephone = _data["telephone"];
            this.adresseMail = _data["adresseMail"];
            this.id = _data["id"];
        }
    };
    ContactInfosDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ContactInfosDto();
        result.init(data);
        return result;
    };
    ContactInfosDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["adresse"] = this.adresse;
        data["pays"] = this.pays;
        data["ville"] = this.ville;
        data["codePostal"] = this.codePostal;
        data["telephone"] = this.telephone;
        data["adresseMail"] = this.adresseMail;
        data["id"] = this.id;
        return data;
    };
    ContactInfosDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ContactInfosDto();
        result.init(json);
        return result;
    };
    return ContactInfosDto;
}());

var DefaultAnnotationsDto = /** @class */ (function () {
    function DefaultAnnotationsDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    DefaultAnnotationsDto.prototype.init = function (_data) {
        if (_data) {
            this.estimateIntroMessage = _data["estimateIntroMessage"];
            this.estimateFooter = _data["estimateFooter"];
            this.invoiceIntroMessage = _data["invoiceIntroMessage"];
            this.invoiceFooter = _data["invoiceFooter"];
            this.id = _data["id"];
        }
    };
    DefaultAnnotationsDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new DefaultAnnotationsDto();
        result.init(data);
        return result;
    };
    DefaultAnnotationsDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["estimateIntroMessage"] = this.estimateIntroMessage;
        data["estimateFooter"] = this.estimateFooter;
        data["invoiceIntroMessage"] = this.invoiceIntroMessage;
        data["invoiceFooter"] = this.invoiceFooter;
        data["id"] = this.id;
        return data;
    };
    DefaultAnnotationsDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new DefaultAnnotationsDto();
        result.init(json);
        return result;
    };
    return DefaultAnnotationsDto;
}());

var CreateRoleDto = /** @class */ (function () {
    function CreateRoleDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateRoleDto.prototype.init = function (_data) {
        var e_146, _a;
        if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.normalizedName = _data["normalizedName"];
            this.description = _data["description"];
            if (Array.isArray(_data["grantedPermissions"])) {
                this.grantedPermissions = [];
                try {
                    for (var _b = __values(_data["grantedPermissions"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.grantedPermissions.push(item);
                    }
                }
                catch (e_146_1) { e_146 = { error: e_146_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_146) throw e_146.error; }
                }
            }
        }
    };
    CreateRoleDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateRoleDto();
        result.init(data);
        return result;
    };
    CreateRoleDto.prototype.toJSON = function (data) {
        var e_147, _a;
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["normalizedName"] = this.normalizedName;
        data["description"] = this.description;
        if (Array.isArray(this.grantedPermissions)) {
            data["grantedPermissions"] = [];
            try {
                for (var _b = __values(this.grantedPermissions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["grantedPermissions"].push(item);
                }
            }
            catch (e_147_1) { e_147 = { error: e_147_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_147) throw e_147.error; }
            }
        }
        return data;
    };
    CreateRoleDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateRoleDto();
        result.init(json);
        return result;
    };
    return CreateRoleDto;
}());

var RoleDto = /** @class */ (function () {
    function RoleDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RoleDto.prototype.init = function (_data) {
        var e_148, _a;
        if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.normalizedName = _data["normalizedName"];
            this.description = _data["description"];
            if (Array.isArray(_data["grantedPermissions"])) {
                this.grantedPermissions = [];
                try {
                    for (var _b = __values(_data["grantedPermissions"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.grantedPermissions.push(item);
                    }
                }
                catch (e_148_1) { e_148 = { error: e_148_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_148) throw e_148.error; }
                }
            }
            this.id = _data["id"];
        }
    };
    RoleDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RoleDto();
        result.init(data);
        return result;
    };
    RoleDto.prototype.toJSON = function (data) {
        var e_149, _a;
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["normalizedName"] = this.normalizedName;
        data["description"] = this.description;
        if (Array.isArray(this.grantedPermissions)) {
            data["grantedPermissions"] = [];
            try {
                for (var _b = __values(this.grantedPermissions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["grantedPermissions"].push(item);
                }
            }
            catch (e_149_1) { e_149 = { error: e_149_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_149) throw e_149.error; }
            }
        }
        data["id"] = this.id;
        return data;
    };
    RoleDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RoleDto();
        result.init(json);
        return result;
    };
    return RoleDto;
}());

var RoleListDto = /** @class */ (function () {
    function RoleListDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RoleListDto.prototype.init = function (_data) {
        if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.isStatic = _data["isStatic"];
            this.isDefault = _data["isDefault"];
            this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["creationTime"].toString()) : undefined;
            this.id = _data["id"];
        }
    };
    RoleListDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RoleListDto();
        result.init(data);
        return result;
    };
    RoleListDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["isStatic"] = this.isStatic;
        data["isDefault"] = this.isDefault;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        data["id"] = this.id;
        return data;
    };
    RoleListDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RoleListDto();
        result.init(json);
        return result;
    };
    return RoleListDto;
}());

var RoleListDtoListResultDto = /** @class */ (function () {
    function RoleListDtoListResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RoleListDtoListResultDto.prototype.init = function (_data) {
        var e_150, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(RoleListDto.fromJS(item));
                    }
                }
                catch (e_150_1) { e_150 = { error: e_150_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_150) throw e_150.error; }
                }
            }
        }
    };
    RoleListDtoListResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RoleListDtoListResultDto();
        result.init(data);
        return result;
    };
    RoleListDtoListResultDto.prototype.toJSON = function (data) {
        var e_151, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_151_1) { e_151 = { error: e_151_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_151) throw e_151.error; }
            }
        }
        return data;
    };
    RoleListDtoListResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RoleListDtoListResultDto();
        result.init(json);
        return result;
    };
    return RoleListDtoListResultDto;
}());

var PermissionDto = /** @class */ (function () {
    function PermissionDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PermissionDto.prototype.init = function (_data) {
        if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.description = _data["description"];
            this.id = _data["id"];
        }
    };
    PermissionDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PermissionDto();
        result.init(data);
        return result;
    };
    PermissionDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["description"] = this.description;
        data["id"] = this.id;
        return data;
    };
    PermissionDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PermissionDto();
        result.init(json);
        return result;
    };
    return PermissionDto;
}());

var PermissionDtoListResultDto = /** @class */ (function () {
    function PermissionDtoListResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PermissionDtoListResultDto.prototype.init = function (_data) {
        var e_152, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(PermissionDto.fromJS(item));
                    }
                }
                catch (e_152_1) { e_152 = { error: e_152_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_152) throw e_152.error; }
                }
            }
        }
    };
    PermissionDtoListResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PermissionDtoListResultDto();
        result.init(data);
        return result;
    };
    PermissionDtoListResultDto.prototype.toJSON = function (data) {
        var e_153, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_153_1) { e_153 = { error: e_153_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_153) throw e_153.error; }
            }
        }
        return data;
    };
    PermissionDtoListResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PermissionDtoListResultDto();
        result.init(json);
        return result;
    };
    return PermissionDtoListResultDto;
}());

var RoleEditDto = /** @class */ (function () {
    function RoleEditDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RoleEditDto.prototype.init = function (_data) {
        if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.description = _data["description"];
            this.isStatic = _data["isStatic"];
            this.id = _data["id"];
        }
    };
    RoleEditDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RoleEditDto();
        result.init(data);
        return result;
    };
    RoleEditDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["description"] = this.description;
        data["isStatic"] = this.isStatic;
        data["id"] = this.id;
        return data;
    };
    RoleEditDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RoleEditDto();
        result.init(json);
        return result;
    };
    return RoleEditDto;
}());

var FlatPermissionDto = /** @class */ (function () {
    function FlatPermissionDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    FlatPermissionDto.prototype.init = function (_data) {
        if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.description = _data["description"];
        }
    };
    FlatPermissionDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new FlatPermissionDto();
        result.init(data);
        return result;
    };
    FlatPermissionDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["description"] = this.description;
        return data;
    };
    FlatPermissionDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new FlatPermissionDto();
        result.init(json);
        return result;
    };
    return FlatPermissionDto;
}());

var GetRoleForEditOutput = /** @class */ (function () {
    function GetRoleForEditOutput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    GetRoleForEditOutput.prototype.init = function (_data) {
        var e_154, _a, e_155, _b;
        if (_data) {
            this.role = _data["role"] ? RoleEditDto.fromJS(_data["role"]) : undefined;
            if (Array.isArray(_data["permissions"])) {
                this.permissions = [];
                try {
                    for (var _c = __values(_data["permissions"]), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var item = _d.value;
                        this.permissions.push(FlatPermissionDto.fromJS(item));
                    }
                }
                catch (e_154_1) { e_154 = { error: e_154_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_154) throw e_154.error; }
                }
            }
            if (Array.isArray(_data["grantedPermissionNames"])) {
                this.grantedPermissionNames = [];
                try {
                    for (var _e = __values(_data["grantedPermissionNames"]), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var item = _f.value;
                        this.grantedPermissionNames.push(item);
                    }
                }
                catch (e_155_1) { e_155 = { error: e_155_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_155) throw e_155.error; }
                }
            }
        }
    };
    GetRoleForEditOutput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new GetRoleForEditOutput();
        result.init(data);
        return result;
    };
    GetRoleForEditOutput.prototype.toJSON = function (data) {
        var e_156, _a, e_157, _b;
        data = typeof data === 'object' ? data : {};
        data["role"] = this.role ? this.role.toJSON() : undefined;
        if (Array.isArray(this.permissions)) {
            data["permissions"] = [];
            try {
                for (var _c = __values(this.permissions), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var item = _d.value;
                    data["permissions"].push(item.toJSON());
                }
            }
            catch (e_156_1) { e_156 = { error: e_156_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_156) throw e_156.error; }
            }
        }
        if (Array.isArray(this.grantedPermissionNames)) {
            data["grantedPermissionNames"] = [];
            try {
                for (var _e = __values(this.grantedPermissionNames), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var item = _f.value;
                    data["grantedPermissionNames"].push(item);
                }
            }
            catch (e_157_1) { e_157 = { error: e_157_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_157) throw e_157.error; }
            }
        }
        return data;
    };
    GetRoleForEditOutput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new GetRoleForEditOutput();
        result.init(json);
        return result;
    };
    return GetRoleForEditOutput;
}());

var RoleDtoPagedResultDto = /** @class */ (function () {
    function RoleDtoPagedResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RoleDtoPagedResultDto.prototype.init = function (_data) {
        var e_158, _a;
        if (_data) {
            this.totalCount = _data["totalCount"];
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(RoleDto.fromJS(item));
                    }
                }
                catch (e_158_1) { e_158 = { error: e_158_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_158) throw e_158.error; }
                }
            }
        }
    };
    RoleDtoPagedResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RoleDtoPagedResultDto();
        result.init(data);
        return result;
    };
    RoleDtoPagedResultDto.prototype.toJSON = function (data) {
        var e_159, _a;
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_159_1) { e_159 = { error: e_159_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_159) throw e_159.error; }
            }
        }
        return data;
    };
    RoleDtoPagedResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RoleDtoPagedResultDto();
        result.init(json);
        return result;
    };
    return RoleDtoPagedResultDto;
}());

var ApplicationInfoDto = /** @class */ (function () {
    function ApplicationInfoDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ApplicationInfoDto.prototype.init = function (_data) {
        if (_data) {
            this.version = _data["version"];
            this.releaseDate = _data["releaseDate"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["releaseDate"].toString()) : undefined;
            if (_data["features"]) {
                this.features = {};
                for (var key in _data["features"]) {
                    if (_data["features"].hasOwnProperty(key))
                        this.features[key] = _data["features"][key];
                }
            }
        }
    };
    ApplicationInfoDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ApplicationInfoDto();
        result.init(data);
        return result;
    };
    ApplicationInfoDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["version"] = this.version;
        data["releaseDate"] = this.releaseDate ? this.releaseDate.toISOString() : undefined;
        if (this.features) {
            data["features"] = {};
            for (var key in this.features) {
                if (this.features.hasOwnProperty(key))
                    data["features"][key] = this.features[key];
            }
        }
        return data;
    };
    ApplicationInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ApplicationInfoDto();
        result.init(json);
        return result;
    };
    return ApplicationInfoDto;
}());

var UserLoginInfoDto = /** @class */ (function () {
    function UserLoginInfoDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UserLoginInfoDto.prototype.init = function (_data) {
        if (_data) {
            this.name = _data["name"];
            this.surname = _data["surname"];
            this.userName = _data["userName"];
            this.emailAddress = _data["emailAddress"];
            this.id = _data["id"];
        }
    };
    UserLoginInfoDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UserLoginInfoDto();
        result.init(data);
        return result;
    };
    UserLoginInfoDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["id"] = this.id;
        return data;
    };
    UserLoginInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UserLoginInfoDto();
        result.init(json);
        return result;
    };
    return UserLoginInfoDto;
}());

var TenantLoginInfoDto = /** @class */ (function () {
    function TenantLoginInfoDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TenantLoginInfoDto.prototype.init = function (_data) {
        if (_data) {
            this.tenancyName = _data["tenancyName"];
            this.name = _data["name"];
            this.id = _data["id"];
        }
    };
    TenantLoginInfoDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TenantLoginInfoDto();
        result.init(data);
        return result;
    };
    TenantLoginInfoDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["id"] = this.id;
        return data;
    };
    TenantLoginInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new TenantLoginInfoDto();
        result.init(json);
        return result;
    };
    return TenantLoginInfoDto;
}());

var GetCurrentLoginInformationsOutput = /** @class */ (function () {
    function GetCurrentLoginInformationsOutput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    GetCurrentLoginInformationsOutput.prototype.init = function (_data) {
        if (_data) {
            this.application = _data["application"] ? ApplicationInfoDto.fromJS(_data["application"]) : undefined;
            this.user = _data["user"] ? UserLoginInfoDto.fromJS(_data["user"]) : undefined;
            this.tenant = _data["tenant"] ? TenantLoginInfoDto.fromJS(_data["tenant"]) : undefined;
            this.entrepriseName = _data["entrepriseName"];
        }
    };
    GetCurrentLoginInformationsOutput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new GetCurrentLoginInformationsOutput();
        result.init(data);
        return result;
    };
    GetCurrentLoginInformationsOutput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["application"] = this.application ? this.application.toJSON() : undefined;
        data["user"] = this.user ? this.user.toJSON() : undefined;
        data["tenant"] = this.tenant ? this.tenant.toJSON() : undefined;
        data["entrepriseName"] = this.entrepriseName;
        return data;
    };
    GetCurrentLoginInformationsOutput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new GetCurrentLoginInformationsOutput();
        result.init(json);
        return result;
    };
    return GetCurrentLoginInformationsOutput;
}());

var ActivityLogDto = /** @class */ (function () {
    function ActivityLogDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ActivityLogDto.prototype.init = function (_data) {
        if (_data) {
            this.logType = _data["logType"];
            this.reference = _data["reference"];
            this.clientName = _data["clientName"];
            this.date = _data["date"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["date"].toString()) : undefined;
            this.amount = _data["amount"];
            this.currency = _data["currency"];
        }
    };
    ActivityLogDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ActivityLogDto();
        result.init(data);
        return result;
    };
    ActivityLogDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["logType"] = this.logType;
        data["reference"] = this.reference;
        data["clientName"] = this.clientName;
        data["date"] = this.date ? this.date.toISOString() : undefined;
        data["amount"] = this.amount;
        data["currency"] = this.currency;
        return data;
    };
    ActivityLogDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ActivityLogDto();
        result.init(json);
        return result;
    };
    return ActivityLogDto;
}());

var ActivityLogDtoListResultDto = /** @class */ (function () {
    function ActivityLogDtoListResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ActivityLogDtoListResultDto.prototype.init = function (_data) {
        var e_160, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(ActivityLogDto.fromJS(item));
                    }
                }
                catch (e_160_1) { e_160 = { error: e_160_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_160) throw e_160.error; }
                }
            }
        }
    };
    ActivityLogDtoListResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ActivityLogDtoListResultDto();
        result.init(data);
        return result;
    };
    ActivityLogDtoListResultDto.prototype.toJSON = function (data) {
        var e_161, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_161_1) { e_161 = { error: e_161_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_161) throw e_161.error; }
            }
        }
        return data;
    };
    ActivityLogDtoListResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ActivityLogDtoListResultDto();
        result.init(json);
        return result;
    };
    return ActivityLogDtoListResultDto;
}());

var AnnualEstimatesTrackingDto = /** @class */ (function () {
    function AnnualEstimatesTrackingDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AnnualEstimatesTrackingDto.prototype.init = function (_data) {
        var e_162, _a, e_163, _b;
        if (_data) {
            if (Array.isArray(_data["validatedEstimatesSerie"])) {
                this.validatedEstimatesSerie = [];
                try {
                    for (var _c = __values(_data["validatedEstimatesSerie"]), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var item = _d.value;
                        this.validatedEstimatesSerie.push(item);
                    }
                }
                catch (e_162_1) { e_162 = { error: e_162_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_162) throw e_162.error; }
                }
            }
            if (Array.isArray(_data["transformedEstimatesSerie"])) {
                this.transformedEstimatesSerie = [];
                try {
                    for (var _e = __values(_data["transformedEstimatesSerie"]), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var item = _f.value;
                        this.transformedEstimatesSerie.push(item);
                    }
                }
                catch (e_163_1) { e_163 = { error: e_163_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_163) throw e_163.error; }
                }
            }
        }
    };
    AnnualEstimatesTrackingDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new AnnualEstimatesTrackingDto();
        result.init(data);
        return result;
    };
    AnnualEstimatesTrackingDto.prototype.toJSON = function (data) {
        var e_164, _a, e_165, _b;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.validatedEstimatesSerie)) {
            data["validatedEstimatesSerie"] = [];
            try {
                for (var _c = __values(this.validatedEstimatesSerie), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var item = _d.value;
                    data["validatedEstimatesSerie"].push(item);
                }
            }
            catch (e_164_1) { e_164 = { error: e_164_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_164) throw e_164.error; }
            }
        }
        if (Array.isArray(this.transformedEstimatesSerie)) {
            data["transformedEstimatesSerie"] = [];
            try {
                for (var _e = __values(this.transformedEstimatesSerie), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var item = _f.value;
                    data["transformedEstimatesSerie"].push(item);
                }
            }
            catch (e_165_1) { e_165 = { error: e_165_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_165) throw e_165.error; }
            }
        }
        return data;
    };
    AnnualEstimatesTrackingDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AnnualEstimatesTrackingDto();
        result.init(json);
        return result;
    };
    return AnnualEstimatesTrackingDto;
}());

var AnnualInvoicesTrackingDto = /** @class */ (function () {
    function AnnualInvoicesTrackingDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AnnualInvoicesTrackingDto.prototype.init = function (_data) {
        var e_166, _a, e_167, _b, e_168, _c;
        if (_data) {
            if (Array.isArray(_data["cashedInvoicesSerie"])) {
                this.cashedInvoicesSerie = [];
                try {
                    for (var _d = __values(_data["cashedInvoicesSerie"]), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var item = _e.value;
                        this.cashedInvoicesSerie.push(item);
                    }
                }
                catch (e_166_1) { e_166 = { error: e_166_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                    }
                    finally { if (e_166) throw e_166.error; }
                }
            }
            if (Array.isArray(_data["lateInvoicesSerie"])) {
                this.lateInvoicesSerie = [];
                try {
                    for (var _f = __values(_data["lateInvoicesSerie"]), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var item = _g.value;
                        this.lateInvoicesSerie.push(item);
                    }
                }
                catch (e_167_1) { e_167 = { error: e_167_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_167) throw e_167.error; }
                }
            }
            if (Array.isArray(_data["waitingInvoicesSerie"])) {
                this.waitingInvoicesSerie = [];
                try {
                    for (var _h = __values(_data["waitingInvoicesSerie"]), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var item = _j.value;
                        this.waitingInvoicesSerie.push(item);
                    }
                }
                catch (e_168_1) { e_168 = { error: e_168_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                    }
                    finally { if (e_168) throw e_168.error; }
                }
            }
        }
    };
    AnnualInvoicesTrackingDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new AnnualInvoicesTrackingDto();
        result.init(data);
        return result;
    };
    AnnualInvoicesTrackingDto.prototype.toJSON = function (data) {
        var e_169, _a, e_170, _b, e_171, _c;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.cashedInvoicesSerie)) {
            data["cashedInvoicesSerie"] = [];
            try {
                for (var _d = __values(this.cashedInvoicesSerie), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var item = _e.value;
                    data["cashedInvoicesSerie"].push(item);
                }
            }
            catch (e_169_1) { e_169 = { error: e_169_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_169) throw e_169.error; }
            }
        }
        if (Array.isArray(this.lateInvoicesSerie)) {
            data["lateInvoicesSerie"] = [];
            try {
                for (var _f = __values(this.lateInvoicesSerie), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var item = _g.value;
                    data["lateInvoicesSerie"].push(item);
                }
            }
            catch (e_170_1) { e_170 = { error: e_170_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_170) throw e_170.error; }
            }
        }
        if (Array.isArray(this.waitingInvoicesSerie)) {
            data["waitingInvoicesSerie"] = [];
            try {
                for (var _h = __values(this.waitingInvoicesSerie), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var item = _j.value;
                    data["waitingInvoicesSerie"].push(item);
                }
            }
            catch (e_171_1) { e_171 = { error: e_171_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_171) throw e_171.error; }
            }
        }
        return data;
    };
    AnnualInvoicesTrackingDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AnnualInvoicesTrackingDto();
        result.init(json);
        return result;
    };
    return AnnualInvoicesTrackingDto;
}());

var MonthTargetInfosDto = /** @class */ (function () {
    function MonthTargetInfosDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    MonthTargetInfosDto.prototype.init = function (_data) {
        if (_data) {
            this.monthTargetAmount = _data["monthTargetAmount"];
            this.accomplishedAmount = _data["accomplishedAmount"];
        }
    };
    MonthTargetInfosDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new MonthTargetInfosDto();
        result.init(data);
        return result;
    };
    MonthTargetInfosDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["monthTargetAmount"] = this.monthTargetAmount;
        data["accomplishedAmount"] = this.accomplishedAmount;
        return data;
    };
    MonthTargetInfosDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new MonthTargetInfosDto();
        result.init(json);
        return result;
    };
    return MonthTargetInfosDto;
}());

var InvoicePeriodicTrackingDto = /** @class */ (function () {
    function InvoicePeriodicTrackingDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    InvoicePeriodicTrackingDto.prototype.init = function (_data) {
        if (_data) {
            this.totalInvoicesAmount = _data["totalInvoicesAmount"];
            this.cashedInvoicesAmount = _data["cashedInvoicesAmount"];
            this.pendingInvoicesAmount = _data["pendingInvoicesAmount"];
            this.lateInvoicesAmount = _data["lateInvoicesAmount"];
        }
    };
    InvoicePeriodicTrackingDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new InvoicePeriodicTrackingDto();
        result.init(data);
        return result;
    };
    InvoicePeriodicTrackingDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalInvoicesAmount"] = this.totalInvoicesAmount;
        data["cashedInvoicesAmount"] = this.cashedInvoicesAmount;
        data["pendingInvoicesAmount"] = this.pendingInvoicesAmount;
        data["lateInvoicesAmount"] = this.lateInvoicesAmount;
        return data;
    };
    InvoicePeriodicTrackingDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new InvoicePeriodicTrackingDto();
        result.init(json);
        return result;
    };
    return InvoicePeriodicTrackingDto;
}());

var EstimatePeriodicTrackingDto = /** @class */ (function () {
    function EstimatePeriodicTrackingDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    EstimatePeriodicTrackingDto.prototype.init = function (_data) {
        if (_data) {
            this.totalEstimatesAmount = _data["totalEstimatesAmount"];
            this.transformedInvoicesAmount = _data["transformedInvoicesAmount"];
        }
    };
    EstimatePeriodicTrackingDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new EstimatePeriodicTrackingDto();
        result.init(data);
        return result;
    };
    EstimatePeriodicTrackingDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalEstimatesAmount"] = this.totalEstimatesAmount;
        data["transformedInvoicesAmount"] = this.transformedInvoicesAmount;
        return data;
    };
    EstimatePeriodicTrackingDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new EstimatePeriodicTrackingDto();
        result.init(json);
        return result;
    };
    return EstimatePeriodicTrackingDto;
}());

var BestsellerPeriodicTrackingDto = /** @class */ (function () {
    function BestsellerPeriodicTrackingDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    BestsellerPeriodicTrackingDto.prototype.init = function (_data) {
        if (_data) {
            this.catalogName = _data["catalogName"];
            this.amount = _data["amount"];
        }
    };
    BestsellerPeriodicTrackingDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new BestsellerPeriodicTrackingDto();
        result.init(data);
        return result;
    };
    BestsellerPeriodicTrackingDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["catalogName"] = this.catalogName;
        data["amount"] = this.amount;
        return data;
    };
    BestsellerPeriodicTrackingDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new BestsellerPeriodicTrackingDto();
        result.init(json);
        return result;
    };
    return BestsellerPeriodicTrackingDto;
}());

var TopClientsPeriodicTrackingDto = /** @class */ (function () {
    function TopClientsPeriodicTrackingDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TopClientsPeriodicTrackingDto.prototype.init = function (_data) {
        if (_data) {
            this.clientName = _data["clientName"];
            this.amount = _data["amount"];
        }
    };
    TopClientsPeriodicTrackingDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TopClientsPeriodicTrackingDto();
        result.init(data);
        return result;
    };
    TopClientsPeriodicTrackingDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["clientName"] = this.clientName;
        data["amount"] = this.amount;
        return data;
    };
    TopClientsPeriodicTrackingDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new TopClientsPeriodicTrackingDto();
        result.init(json);
        return result;
    };
    return TopClientsPeriodicTrackingDto;
}());

var PeriodicTrackingDto = /** @class */ (function () {
    function PeriodicTrackingDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PeriodicTrackingDto.prototype.init = function (_data) {
        var e_172, _a, e_173, _b;
        if (_data) {
            this.invoicePeriodicTrackingDto = _data["invoicePeriodicTrackingDto"] ? InvoicePeriodicTrackingDto.fromJS(_data["invoicePeriodicTrackingDto"]) : undefined;
            this.estimatePeriodicTrackingDto = _data["estimatePeriodicTrackingDto"] ? EstimatePeriodicTrackingDto.fromJS(_data["estimatePeriodicTrackingDto"]) : undefined;
            if (Array.isArray(_data["bestsellerPeriodicTrackingDto"])) {
                this.bestsellerPeriodicTrackingDto = [];
                try {
                    for (var _c = __values(_data["bestsellerPeriodicTrackingDto"]), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var item = _d.value;
                        this.bestsellerPeriodicTrackingDto.push(BestsellerPeriodicTrackingDto.fromJS(item));
                    }
                }
                catch (e_172_1) { e_172 = { error: e_172_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_172) throw e_172.error; }
                }
            }
            if (Array.isArray(_data["topClientsPeriodicTrackingDto"])) {
                this.topClientsPeriodicTrackingDto = [];
                try {
                    for (var _e = __values(_data["topClientsPeriodicTrackingDto"]), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var item = _f.value;
                        this.topClientsPeriodicTrackingDto.push(TopClientsPeriodicTrackingDto.fromJS(item));
                    }
                }
                catch (e_173_1) { e_173 = { error: e_173_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_173) throw e_173.error; }
                }
            }
        }
    };
    PeriodicTrackingDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PeriodicTrackingDto();
        result.init(data);
        return result;
    };
    PeriodicTrackingDto.prototype.toJSON = function (data) {
        var e_174, _a, e_175, _b;
        data = typeof data === 'object' ? data : {};
        data["invoicePeriodicTrackingDto"] = this.invoicePeriodicTrackingDto ? this.invoicePeriodicTrackingDto.toJSON() : undefined;
        data["estimatePeriodicTrackingDto"] = this.estimatePeriodicTrackingDto ? this.estimatePeriodicTrackingDto.toJSON() : undefined;
        if (Array.isArray(this.bestsellerPeriodicTrackingDto)) {
            data["bestsellerPeriodicTrackingDto"] = [];
            try {
                for (var _c = __values(this.bestsellerPeriodicTrackingDto), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var item = _d.value;
                    data["bestsellerPeriodicTrackingDto"].push(item.toJSON());
                }
            }
            catch (e_174_1) { e_174 = { error: e_174_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_174) throw e_174.error; }
            }
        }
        if (Array.isArray(this.topClientsPeriodicTrackingDto)) {
            data["topClientsPeriodicTrackingDto"] = [];
            try {
                for (var _e = __values(this.topClientsPeriodicTrackingDto), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var item = _f.value;
                    data["topClientsPeriodicTrackingDto"].push(item.toJSON());
                }
            }
            catch (e_175_1) { e_175 = { error: e_175_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_175) throw e_175.error; }
            }
        }
        return data;
    };
    PeriodicTrackingDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PeriodicTrackingDto();
        result.init(json);
        return result;
    };
    return PeriodicTrackingDto;
}());

var TotalStatisticsDto = /** @class */ (function () {
    function TotalStatisticsDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TotalStatisticsDto.prototype.init = function (_data) {
        if (_data) {
            this.issuedInvoices = _data["issuedInvoices"];
            this.issuedEstimates = _data["issuedEstimates"];
            this.clients = _data["clients"];
            this.products = _data["products"];
        }
    };
    TotalStatisticsDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TotalStatisticsDto();
        result.init(data);
        return result;
    };
    TotalStatisticsDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["issuedInvoices"] = this.issuedInvoices;
        data["issuedEstimates"] = this.issuedEstimates;
        data["clients"] = this.clients;
        data["products"] = this.products;
        return data;
    };
    TotalStatisticsDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new TotalStatisticsDto();
        result.init(json);
        return result;
    };
    return TotalStatisticsDto;
}());

var MonthEvolutionDto = /** @class */ (function () {
    function MonthEvolutionDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    MonthEvolutionDto.prototype.init = function (_data) {
        if (_data) {
            this.totalInvoicedAmountEvolved = _data["totalInvoicedAmountEvolved"];
            this.totaEstimatedAmountEvolved = _data["totaEstimatedAmountEvolved"];
            this.totalClientsEvolved = _data["totalClientsEvolved"];
            this.totalCatalogsEvolved = _data["totalCatalogsEvolved"];
        }
    };
    MonthEvolutionDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new MonthEvolutionDto();
        result.init(data);
        return result;
    };
    MonthEvolutionDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalInvoicedAmountEvolved"] = this.totalInvoicedAmountEvolved;
        data["totaEstimatedAmountEvolved"] = this.totaEstimatedAmountEvolved;
        data["totalClientsEvolved"] = this.totalClientsEvolved;
        data["totalCatalogsEvolved"] = this.totalCatalogsEvolved;
        return data;
    };
    MonthEvolutionDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new MonthEvolutionDto();
        result.init(json);
        return result;
    };
    return MonthEvolutionDto;
}());

var CreateTenantDto = /** @class */ (function () {
    function CreateTenantDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateTenantDto.prototype.init = function (_data) {
        if (_data) {
            this.tenancyName = _data["tenancyName"];
            this.name = _data["name"];
            this.adminEmailAddress = _data["adminEmailAddress"];
            this.connectionString = _data["connectionString"];
            this.isActive = _data["isActive"];
        }
    };
    CreateTenantDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateTenantDto();
        result.init(data);
        return result;
    };
    CreateTenantDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["adminEmailAddress"] = this.adminEmailAddress;
        data["connectionString"] = this.connectionString;
        data["isActive"] = this.isActive;
        return data;
    };
    CreateTenantDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateTenantDto();
        result.init(json);
        return result;
    };
    return CreateTenantDto;
}());

var TenantDto = /** @class */ (function () {
    function TenantDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TenantDto.prototype.init = function (_data) {
        if (_data) {
            this.tenancyName = _data["tenancyName"];
            this.name = _data["name"];
            this.isActive = _data["isActive"];
            this.id = _data["id"];
        }
    };
    TenantDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TenantDto();
        result.init(data);
        return result;
    };
    TenantDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["isActive"] = this.isActive;
        data["id"] = this.id;
        return data;
    };
    TenantDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new TenantDto();
        result.init(json);
        return result;
    };
    return TenantDto;
}());

var TenantDtoPagedResultDto = /** @class */ (function () {
    function TenantDtoPagedResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TenantDtoPagedResultDto.prototype.init = function (_data) {
        var e_176, _a;
        if (_data) {
            this.totalCount = _data["totalCount"];
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(TenantDto.fromJS(item));
                    }
                }
                catch (e_176_1) { e_176 = { error: e_176_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_176) throw e_176.error; }
                }
            }
        }
    };
    TenantDtoPagedResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TenantDtoPagedResultDto();
        result.init(data);
        return result;
    };
    TenantDtoPagedResultDto.prototype.toJSON = function (data) {
        var e_177, _a;
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_177_1) { e_177 = { error: e_177_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_177) throw e_177.error; }
            }
        }
        return data;
    };
    TenantDtoPagedResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new TenantDtoPagedResultDto();
        result.init(json);
        return result;
    };
    return TenantDtoPagedResultDto;
}());

var AuthenticateModel = /** @class */ (function () {
    function AuthenticateModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AuthenticateModel.prototype.init = function (_data) {
        if (_data) {
            this.userNameOrEmailAddress = _data["userNameOrEmailAddress"];
            this.password = _data["password"];
            this.rememberClient = _data["rememberClient"];
        }
    };
    AuthenticateModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new AuthenticateModel();
        result.init(data);
        return result;
    };
    AuthenticateModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userNameOrEmailAddress"] = this.userNameOrEmailAddress;
        data["password"] = this.password;
        data["rememberClient"] = this.rememberClient;
        return data;
    };
    AuthenticateModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AuthenticateModel();
        result.init(json);
        return result;
    };
    return AuthenticateModel;
}());

var AuthenticateResultModel = /** @class */ (function () {
    function AuthenticateResultModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AuthenticateResultModel.prototype.init = function (_data) {
        if (_data) {
            this.accessToken = _data["accessToken"];
            this.encryptedAccessToken = _data["encryptedAccessToken"];
            this.expireInSeconds = _data["expireInSeconds"];
            this.userId = _data["userId"];
        }
    };
    AuthenticateResultModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new AuthenticateResultModel();
        result.init(data);
        return result;
    };
    AuthenticateResultModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["encryptedAccessToken"] = this.encryptedAccessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        data["userId"] = this.userId;
        return data;
    };
    AuthenticateResultModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AuthenticateResultModel();
        result.init(json);
        return result;
    };
    return AuthenticateResultModel;
}());

var GetAccessTokenModel = /** @class */ (function () {
    function GetAccessTokenModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    GetAccessTokenModel.prototype.init = function (_data) {
        if (_data) {
            this.accessToken = _data["accessToken"];
            this.expireInSeconds = _data["expireInSeconds"];
        }
    };
    GetAccessTokenModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new GetAccessTokenModel();
        result.init(data);
        return result;
    };
    GetAccessTokenModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        return data;
    };
    GetAccessTokenModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new GetAccessTokenModel();
        result.init(json);
        return result;
    };
    return GetAccessTokenModel;
}());

var ExternalLoginProviderInfoModel = /** @class */ (function () {
    function ExternalLoginProviderInfoModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ExternalLoginProviderInfoModel.prototype.init = function (_data) {
        if (_data) {
            this.name = _data["name"];
            this.clientId = _data["clientId"];
        }
    };
    ExternalLoginProviderInfoModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ExternalLoginProviderInfoModel();
        result.init(data);
        return result;
    };
    ExternalLoginProviderInfoModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["clientId"] = this.clientId;
        return data;
    };
    ExternalLoginProviderInfoModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ExternalLoginProviderInfoModel();
        result.init(json);
        return result;
    };
    return ExternalLoginProviderInfoModel;
}());

var ExternalAuthenticateModel = /** @class */ (function () {
    function ExternalAuthenticateModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ExternalAuthenticateModel.prototype.init = function (_data) {
        if (_data) {
            this.authProvider = _data["authProvider"];
            this.providerKey = _data["providerKey"];
            this.providerAccessCode = _data["providerAccessCode"];
        }
    };
    ExternalAuthenticateModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ExternalAuthenticateModel();
        result.init(data);
        return result;
    };
    ExternalAuthenticateModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["authProvider"] = this.authProvider;
        data["providerKey"] = this.providerKey;
        data["providerAccessCode"] = this.providerAccessCode;
        return data;
    };
    ExternalAuthenticateModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ExternalAuthenticateModel();
        result.init(json);
        return result;
    };
    return ExternalAuthenticateModel;
}());

var ExternalAuthenticateResultModel = /** @class */ (function () {
    function ExternalAuthenticateResultModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ExternalAuthenticateResultModel.prototype.init = function (_data) {
        if (_data) {
            this.accessToken = _data["accessToken"];
            this.encryptedAccessToken = _data["encryptedAccessToken"];
            this.expireInSeconds = _data["expireInSeconds"];
            this.waitingForActivation = _data["waitingForActivation"];
        }
    };
    ExternalAuthenticateResultModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ExternalAuthenticateResultModel();
        result.init(data);
        return result;
    };
    ExternalAuthenticateResultModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["encryptedAccessToken"] = this.encryptedAccessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        data["waitingForActivation"] = this.waitingForActivation;
        return data;
    };
    ExternalAuthenticateResultModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ExternalAuthenticateResultModel();
        result.init(json);
        return result;
    };
    return ExternalAuthenticateResultModel;
}());

var CreateUserDto = /** @class */ (function () {
    function CreateUserDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateUserDto.prototype.init = function (_data) {
        var e_178, _a;
        if (_data) {
            this.userName = _data["userName"];
            this.name = _data["name"];
            this.surname = _data["surname"];
            this.emailAddress = _data["emailAddress"];
            this.isActive = _data["isActive"];
            if (Array.isArray(_data["roleNames"])) {
                this.roleNames = [];
                try {
                    for (var _b = __values(_data["roleNames"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.roleNames.push(item);
                    }
                }
                catch (e_178_1) { e_178 = { error: e_178_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_178) throw e_178.error; }
                }
            }
            this.password = _data["password"];
        }
    };
    CreateUserDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateUserDto();
        result.init(data);
        return result;
    };
    CreateUserDto.prototype.toJSON = function (data) {
        var e_179, _a;
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["emailAddress"] = this.emailAddress;
        data["isActive"] = this.isActive;
        if (Array.isArray(this.roleNames)) {
            data["roleNames"] = [];
            try {
                for (var _b = __values(this.roleNames), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["roleNames"].push(item);
                }
            }
            catch (e_179_1) { e_179 = { error: e_179_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_179) throw e_179.error; }
            }
        }
        data["password"] = this.password;
        return data;
    };
    CreateUserDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateUserDto();
        result.init(json);
        return result;
    };
    return CreateUserDto;
}());

var Int64EntityDto = /** @class */ (function () {
    function Int64EntityDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Int64EntityDto.prototype.init = function (_data) {
        if (_data) {
            this.id = _data["id"];
        }
    };
    Int64EntityDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Int64EntityDto();
        result.init(data);
        return result;
    };
    Int64EntityDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        return data;
    };
    Int64EntityDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new Int64EntityDto();
        result.init(json);
        return result;
    };
    return Int64EntityDto;
}());

var RoleDtoListResultDto = /** @class */ (function () {
    function RoleDtoListResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RoleDtoListResultDto.prototype.init = function (_data) {
        var e_180, _a;
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(RoleDto.fromJS(item));
                    }
                }
                catch (e_180_1) { e_180 = { error: e_180_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_180) throw e_180.error; }
                }
            }
        }
    };
    RoleDtoListResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RoleDtoListResultDto();
        result.init(data);
        return result;
    };
    RoleDtoListResultDto.prototype.toJSON = function (data) {
        var e_181, _a;
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_181_1) { e_181 = { error: e_181_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_181) throw e_181.error; }
            }
        }
        return data;
    };
    RoleDtoListResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RoleDtoListResultDto();
        result.init(json);
        return result;
    };
    return RoleDtoListResultDto;
}());

var ChangeUserLanguageDto = /** @class */ (function () {
    function ChangeUserLanguageDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ChangeUserLanguageDto.prototype.init = function (_data) {
        if (_data) {
            this.languageName = _data["languageName"];
        }
    };
    ChangeUserLanguageDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ChangeUserLanguageDto();
        result.init(data);
        return result;
    };
    ChangeUserLanguageDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["languageName"] = this.languageName;
        return data;
    };
    ChangeUserLanguageDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ChangeUserLanguageDto();
        result.init(json);
        return result;
    };
    return ChangeUserLanguageDto;
}());

var ChangePasswordDto = /** @class */ (function () {
    function ChangePasswordDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ChangePasswordDto.prototype.init = function (_data) {
        if (_data) {
            this.currentPassword = _data["currentPassword"];
            this.newPassword = _data["newPassword"];
        }
    };
    ChangePasswordDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ChangePasswordDto();
        result.init(data);
        return result;
    };
    ChangePasswordDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["currentPassword"] = this.currentPassword;
        data["newPassword"] = this.newPassword;
        return data;
    };
    ChangePasswordDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ChangePasswordDto();
        result.init(json);
        return result;
    };
    return ChangePasswordDto;
}());

var ResetPasswordDto = /** @class */ (function () {
    function ResetPasswordDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ResetPasswordDto.prototype.init = function (_data) {
        if (_data) {
            this.adminPassword = _data["adminPassword"];
            this.userId = _data["userId"];
            this.newPassword = _data["newPassword"];
        }
    };
    ResetPasswordDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ResetPasswordDto();
        result.init(data);
        return result;
    };
    ResetPasswordDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["adminPassword"] = this.adminPassword;
        data["userId"] = this.userId;
        data["newPassword"] = this.newPassword;
        return data;
    };
    ResetPasswordDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ResetPasswordDto();
        result.init(json);
        return result;
    };
    return ResetPasswordDto;
}());

var UserDtoPagedResultDto = /** @class */ (function () {
    function UserDtoPagedResultDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UserDtoPagedResultDto.prototype.init = function (_data) {
        var e_182, _a;
        if (_data) {
            this.totalCount = _data["totalCount"];
            if (Array.isArray(_data["items"])) {
                this.items = [];
                try {
                    for (var _b = __values(_data["items"]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        this.items.push(UserDto.fromJS(item));
                    }
                }
                catch (e_182_1) { e_182 = { error: e_182_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_182) throw e_182.error; }
                }
            }
        }
    };
    UserDtoPagedResultDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UserDtoPagedResultDto();
        result.init(data);
        return result;
    };
    UserDtoPagedResultDto.prototype.toJSON = function (data) {
        var e_183, _a;
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    data["items"].push(item.toJSON());
                }
            }
            catch (e_183_1) { e_183 = { error: e_183_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_183) throw e_183.error; }
            }
        }
        return data;
    };
    UserDtoPagedResultDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UserDtoPagedResultDto();
        result.init(json);
        return result;
    };
    return UserDtoPagedResultDto;
}());

var ApiException = /** @class */ (function (_super) {
    __extends(ApiException, _super);
    function ApiException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isApiException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    ApiException.isApiException = function (obj) {
        return obj.isApiException === true;
    };
    return ApiException;
}(Error));

function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(result);
    else
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new ApiException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            var reader = new FileReader();
            reader.onload = function (event) {
                observer.next(event.target.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}


/***/ }),

/***/ "KZX/":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _session_app_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session/app-session.service */ "tvsI");
/* harmony import */ var _nav_app_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/app-url.service */ "IeAS");
/* harmony import */ var _auth_app_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/app-auth.service */ "5IEl");
/* harmony import */ var _auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth-route-guard */ "Di4U");
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ "tYQx");
/* harmony import */ var _components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pagination/abp-pagination-controls.component */ "S0nX");
/* harmony import */ var _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/validation/abp-validation.summary.component */ "yPwq");
/* harmony import */ var _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modal/abp-modal-header.component */ "CR43");
/* harmony import */ var _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modal/abp-modal-footer.component */ "0EPa");
/* harmony import */ var _layout_layout_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/layout-store.service */ "9eJT");
/* harmony import */ var _directives_busy_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/busy.directive */ "rlFc");
/* harmony import */ var _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/equal-validator.directive */ "/A9x");

















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [
                _session_app_session_service__WEBPACK_IMPORTED_MODULE_4__["AppSessionService"],
                _nav_app_url_service__WEBPACK_IMPORTED_MODULE_5__["AppUrlService"],
                _auth_app_auth_service__WEBPACK_IMPORTED_MODULE_6__["AppAuthService"],
                _auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_7__["AppRouteGuard"],
                _layout_layout_store_service__WEBPACK_IMPORTED_MODULE_13__["LayoutStoreService"]
            ]
        };
    };
    SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]
            ]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_9__["AbpPaginationControlsComponent"],
        _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_10__["AbpValidationSummaryComponent"],
        _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalHeaderComponent"],
        _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__["AbpModalFooterComponent"],
        _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__["LocalizePipe"],
        _directives_busy_directive__WEBPACK_IMPORTED_MODULE_14__["BusyDirective"],
        _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__["EqualValidator"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]], exports: [_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_9__["AbpPaginationControlsComponent"],
        _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_10__["AbpValidationSummaryComponent"],
        _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalHeaderComponent"],
        _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__["AbpModalFooterComponent"],
        _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__["LocalizePipe"],
        _directives_busy_directive__WEBPACK_IMPORTED_MODULE_14__["BusyDirective"],
        _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__["EqualValidator"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]
                ],
                declarations: [
                    _components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_9__["AbpPaginationControlsComponent"],
                    _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_10__["AbpValidationSummaryComponent"],
                    _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalHeaderComponent"],
                    _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__["AbpModalFooterComponent"],
                    _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__["LocalizePipe"],
                    _directives_busy_directive__WEBPACK_IMPORTED_MODULE_14__["BusyDirective"],
                    _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__["EqualValidator"],
                ],
                exports: [
                    _components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_9__["AbpPaginationControlsComponent"],
                    _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_10__["AbpValidationSummaryComponent"],
                    _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalHeaderComponent"],
                    _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__["AbpModalFooterComponent"],
                    _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__["LocalizePipe"],
                    _directives_busy_directive__WEBPACK_IMPORTED_MODULE_14__["BusyDirective"],
                    _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__["EqualValidator"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "MDaT":
/*!************************************!*\
  !*** ./src/root-routing.module.ts ***!
  \************************************/
/*! exports provided: RootRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootRoutingModule", function() { return RootRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




var routes = [
    { path: '', redirectTo: '/app/Clients', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: function () { return Promise.all(/*! import() | account-account-module */[__webpack_require__.e("default~account-account-module~app-app-module"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null, /*! account/account.module */ "sXTw")).then(function (m) { return m.AccountModule; }); },
        data: { preload: true }
    },
    {
        path: 'app',
        loadChildren: function () { return Promise.all(/*! import() | app-app-module */[__webpack_require__.e("default~account-account-module~app-app-module"), __webpack_require__.e("app-app-module")]).then(__webpack_require__.bind(null, /*! app/app.module */ "ZAI4")).then(function (m) { return m.AppModule; }); },
        data: { preload: true }
    }
];
var RootRoutingModule = /** @class */ (function () {
    function RootRoutingModule() {
    }
    RootRoutingModule.ɵfac = function RootRoutingModule_Factory(t) { return new (t || RootRoutingModule)(); };
    RootRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RootRoutingModule });
    RootRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return RootRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RootRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "PYeD":
/*!*******************************************!*\
  !*** ./src/shared/globalEventsService.ts ***!
  \*******************************************/
/*! exports provided: GlobalEventsService, ModificationStatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalEventsService", function() { return GlobalEventsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationStatusEnum", function() { return ModificationStatusEnum; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var GlobalEventsService = /** @class */ (function () {
    function GlobalEventsService() {
        // Change the header color dynamically
        this.pageChangedColorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("#2A95D1");
        this.pageChangedColorSubjectObservable = this.pageChangedColorSubject.asObservable();
        // Emit validate devis update to devis-dialog component
        this.validateDevisSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](ModificationStatusEnum.No_Modification);
        this.validateDevis$ = this.validateDevisSubject.asObservable();
    }
    GlobalEventsService.prototype.announcedThePageChangedColorSubject = function (color) {
        this.pageChangedColorSubject.next(color);
    };
    GlobalEventsService.prototype.emitValidateDevisEvent = function (value) {
        this.validateDevisSubject.next(value);
    };
    GlobalEventsService.ɵfac = function GlobalEventsService_Factory(t) { return new (t || GlobalEventsService)(); };
    GlobalEventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalEventsService, factory: GlobalEventsService.ɵfac });
    return GlobalEventsService;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalEventsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
var ModificationStatusEnum;
(function (ModificationStatusEnum) {
    ModificationStatusEnum[ModificationStatusEnum["No_Modification"] = 0] = "No_Modification";
    ModificationStatusEnum[ModificationStatusEnum["Begin_Modification"] = 1] = "Begin_Modification";
    ModificationStatusEnum[ModificationStatusEnum["Done_Modification"] = 2] = "Done_Modification";
})(ModificationStatusEnum || (ModificationStatusEnum = {}));


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-SG": "zavE",
	"./en-SG.js": "zavE",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S0nX":
/*!*******************************************************************************!*\
  !*** ./src/shared/components/pagination/abp-pagination-controls.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AbpPaginationControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbpPaginationControlsComponent", function() { return AbpPaginationControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AbpPaginationControlsComponent_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpPaginationControlsComponent_ul_3_li_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AbpPaginationControlsComponent_ul_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AbpPaginationControlsComponent_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpPaginationControlsComponent_ul_3_li_1_a_1_Template, 2, 0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AbpPaginationControlsComponent_ul_3_li_1_a_2_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isFirstPage());
} }
function AbpPaginationControlsComponent_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpPaginationControlsComponent_ul_3_li_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var page_r9 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.setCurrent(page_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var page_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", _r0.getCurrent() === page_r9.value ? "0" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _r0.getCurrent() === page_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r9.label, " ");
} }
function AbpPaginationControlsComponent_ul_3_li_3_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpPaginationControlsComponent_ul_3_li_3_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AbpPaginationControlsComponent_ul_3_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AbpPaginationControlsComponent_ul_3_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpPaginationControlsComponent_ul_3_li_3_a_1_Template, 2, 0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AbpPaginationControlsComponent_ul_3_li_3_a_2_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isLastPage());
} }
function AbpPaginationControlsComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpPaginationControlsComponent_ul_3_li_1_Template, 3, 4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AbpPaginationControlsComponent_ul_3_li_2_Template, 3, 5, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AbpPaginationControlsComponent_ul_3_li_3_Template, 3, 4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
} }
var AbpPaginationControlsComponent = /** @class */ (function () {
    function AbpPaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(AbpPaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbpPaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: false,
        configurable: true
    });
    AbpPaginationControlsComponent.ɵfac = function AbpPaginationControlsComponent_Factory(t) { return new (t || AbpPaginationControlsComponent)(); };
    AbpPaginationControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbpPaginationControlsComponent, selectors: [["abp-pagination-controls"]], inputs: { id: "id", maxSize: "maxSize", previousLabel: "previousLabel", nextLabel: "nextLabel", screenReaderPaginationLabel: "screenReaderPaginationLabel", screenReaderPageLabel: "screenReaderPageLabel", screenReaderCurrentLabel: "screenReaderCurrentLabel", directionLinks: "directionLinks", autoHide: "autoHide" }, outputs: { pageChange: "pageChange" }, decls: 4, vars: 3, consts: [[3, "id", "maxSize", "pageChange"], ["p", "paginationApi"], ["class", "pagination m-0", 4, "ngIf"], [1, "pagination", "m-0"], ["class", "page-item", 3, "disabled", 4, "ngIf"], ["class", "page-item", 3, "active", "z-index", 4, "ngFor", "ngForOf"], [1, "page-item"], ["class", "page-link", "href", "javascript:;", 3, "click", 4, "ngIf"], ["class", "page-link", "href", "javascript:;", 4, "ngIf"], ["href", "javascript:;", 1, "page-link", 3, "click"], [1, "fas", "fa-chevron-left"], ["href", "javascript:;", 1, "page-link"], [1, "fas", "fa-chevron-right"]], template: function AbpPaginationControlsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AbpPaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) { return ctx.pageChange.emit($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AbpPaginationControlsComponent_ul_3_Template, 4, 3, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
        } }, directives: [ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationControlsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
    return AbpPaginationControlsComponent;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbpPaginationControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'abp-pagination-controls',
                templateUrl: './abp-pagination-controls.component.html'
            }]
    }], null, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderPaginationLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderPageLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderCurrentLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YirH":
/*!************************************************************!*\
  !*** ./src/shared/service-proxies/service-proxy.module.ts ***!
  \************************************************************/
/*! exports provided: ServiceProxyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProxyModule", function() { return ServiceProxyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! abp-ng2-module */ "4Fy5");
/* harmony import */ var _service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-proxies */ "KALY");





var ServiceProxyModule = /** @class */ (function () {
    function ServiceProxyModule() {
    }
    ServiceProxyModule.ɵfac = function ServiceProxyModule_Factory(t) { return new (t || ServiceProxyModule)(); };
    ServiceProxyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceProxyModule });
    ServiceProxyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["RoleServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["SessionServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["TenantServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["UserServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["TokenAuthServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["AccountServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["ConfigurationServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["CustomAccountServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["InfosEntrepriseServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["ClientServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["DevisServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["FactureServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["CatalogueServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["CountryServiceAppServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["FileApiServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["StatisticsServiceProxy"],
            _service_proxies__WEBPACK_IMPORTED_MODULE_3__["SubscriptionsManagementServiceProxy"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["AbpHttpInterceptor"], multi: true }
        ] });
    return ServiceProxyModule;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceProxyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["RoleServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["SessionServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["TenantServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["UserServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["TokenAuthServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["AccountServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["ConfigurationServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["CustomAccountServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["InfosEntrepriseServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["ClientServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["DevisServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["FactureServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["CatalogueServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["CountryServiceAppServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["FileApiServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["StatisticsServiceProxy"],
                    _service_proxies__WEBPACK_IMPORTED_MODULE_3__["SubscriptionsManagementServiceProxy"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["AbpHttpInterceptor"], multi: true }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "eXag":
/*!****************************!*\
  !*** ./src/root.module.ts ***!
  \****************************/
/*! exports provided: getCurrentLanguage, RootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLanguage", function() { return getCurrentLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootModule", function() { return RootModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! abp-ng2-module */ "4Fy5");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/shared.module */ "KZX/");
/* harmony import */ var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service-proxies/service-proxy.module */ "YirH");
/* harmony import */ var _root_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./root-routing.module */ "MDaT");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/AppConsts */ "nS6G");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "KALY");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./root.component */ "I+mh");
/* harmony import */ var _app_initializer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-initializer */ "fxHI");
/* harmony import */ var _shared_globalEventsService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/globalEventsService */ "PYeD");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/locales/fr */ "Hfs6");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");

























function getCurrentLanguage() {
    if (abp.localization.currentLanguage.name) {
        return abp.localization.currentLanguage.name;
    }
    // todo: Waiting for https://github.com/angular/angular/issues/31465 to be fixed.
    return 'en';
}
Object(_angular_common__WEBPACK_IMPORTED_MODULE_18__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_17___default.a);
var RootModule = /** @class */ (function () {
    function RootModule() {
    }
    RootModule.ɵfac = function RootModule_Factory(t) { return new (t || RootModule)(); };
    RootModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RootModule, bootstrap: [_root_component__WEBPACK_IMPORTED_MODULE_14__["RootComponent"]] });
    RootModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: abp_ng2_module__WEBPACK_IMPORTED_MODULE_8__["AbpHttpInterceptor"], multi: true },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                useFactory: function (appInitializer) { return appInitializer.init(); },
                deps: [_app_initializer__WEBPACK_IMPORTED_MODULE_15__["AppInitializer"]],
                multi: true,
            },
            { provide: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_13__["API_BASE_URL"], useFactory: function () { return _shared_AppConsts__WEBPACK_IMPORTED_MODULE_12__["AppConsts"].remoteServiceBaseUrl; } },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
                useValue: "fr",
            },
            _shared_globalEventsService__WEBPACK_IMPORTED_MODULE_16__["GlobalEventsService"]
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
                _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_10__["ServiceProxyModule"],
                _root_routing_module__WEBPACK_IMPORTED_MODULE_11__["RootRoutingModule"],
            ]] });
    return RootModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RootModule, { declarations: [_root_component__WEBPACK_IMPORTED_MODULE_14__["RootComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"], _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_10__["ServiceProxyModule"],
        _root_routing_module__WEBPACK_IMPORTED_MODULE_11__["RootRoutingModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"].forRoot(),
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
                    _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_10__["ServiceProxyModule"],
                    _root_routing_module__WEBPACK_IMPORTED_MODULE_11__["RootRoutingModule"],
                ],
                declarations: [_root_component__WEBPACK_IMPORTED_MODULE_14__["RootComponent"]],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: abp_ng2_module__WEBPACK_IMPORTED_MODULE_8__["AbpHttpInterceptor"], multi: true },
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                        useFactory: function (appInitializer) { return appInitializer.init(); },
                        deps: [_app_initializer__WEBPACK_IMPORTED_MODULE_15__["AppInitializer"]],
                        multi: true,
                    },
                    { provide: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_13__["API_BASE_URL"], useFactory: function () { return _shared_AppConsts__WEBPACK_IMPORTED_MODULE_12__["AppConsts"].remoteServiceBaseUrl; } },
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
                        useValue: "fr",
                    },
                    _shared_globalEventsService__WEBPACK_IMPORTED_MODULE_16__["GlobalEventsService"]
                ],
                bootstrap: [_root_component__WEBPACK_IMPORTED_MODULE_14__["RootComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "fxHI":
/*!********************************!*\
  !*** ./src/app-initializer.ts ***!
  \********************************/
/*! exports provided: AppInitializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitializer", function() { return AppInitializer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/AppConsts */ "nS6G");
/* harmony import */ var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/session/app-session.service */ "tvsI");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./environments/environment */ "AytR");











var AppInitializer = /** @class */ (function () {
    function AppInitializer(_injector, _platformLocation, _httpClient) {
        this._injector = _injector;
        this._platformLocation = _platformLocation;
        this._httpClient = _httpClient;
    }
    AppInitializer.prototype.init = function () {
        var _this = this;
        return function () {
            abp.ui.setBusy();
            return new Promise(function (resolve, reject) {
                _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].appBaseHref = _this.getBaseHref();
                var appBaseUrl = _this.getDocumentOrigin() + _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].appBaseHref;
                _this.getApplicationConfig(appBaseUrl, function () {
                    _this.getUserConfiguration(function () {
                        abp.event.trigger('abp.dynamicScriptsInitialized');
                        // do not use constructor injection for AppSessionService
                        var appSessionService = _this._injector.get(_shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_6__["AppSessionService"]);
                        appSessionService.init().then(function (result) {
                            abp.ui.clearBusy();
                            if (_this.shouldLoadLocale()) {
                                var angularLocale = _this.convertAbpLocaleToAngularLocale(abp.localization.currentLanguage.name);
                                /* webpackInclude: /(fr-MA)\.js$/ */
                                __webpack_require__("IL3Y")("./" + angularLocale + ".js").then(function (module) {
                                    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(module.default);
                                    resolve(result);
                                }, reject);
                            }
                            else {
                                resolve(result);
                            }
                        }, function (err) {
                            abp.ui.clearBusy();
                            reject(err);
                        });
                    });
                });
            });
        };
    };
    AppInitializer.prototype.getBaseHref = function () {
        var baseUrl = this._platformLocation.getBaseHrefFromDOM();
        if (baseUrl) {
            return baseUrl;
        }
        return '/';
    };
    AppInitializer.prototype.getDocumentOrigin = function () {
        if (!document.location.origin) {
            var port = document.location.port ? ':' + document.location.port : '';
            return (document.location.protocol + '//' + document.location.hostname + port);
        }
        return document.location.origin;
    };
    AppInitializer.prototype.shouldLoadLocale = function () {
        return (abp.localization.currentLanguage.name &&
            abp.localization.currentLanguage.name !== 'en-US');
    };
    AppInitializer.prototype.convertAbpLocaleToAngularLocale = function (locale) {
        if (!_shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].localeMappings) {
            return locale;
        }
        var localeMapings = Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["filter"])(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].localeMappings, { from: locale });
        if (localeMapings && localeMapings.length) {
            return localeMapings[0]['to'];
        }
        return locale;
    };
    AppInitializer.prototype.getCurrentClockProvider = function (currentProviderName) {
        if (currentProviderName === 'unspecifiedClockProvider') {
            return abp.timing.unspecifiedClockProvider;
        }
        if (currentProviderName === 'utcClockProvider') {
            return abp.timing.utcClockProvider;
        }
        return abp.timing.localClockProvider;
    };
    AppInitializer.prototype.getUserConfiguration = function (callback) {
        var _this = this;
        var cookieLangValue = abp.utils.getCookieValue('Abp.Localization.CultureName');
        var token = abp.auth.getToken();
        var requestHeaders = {
            'Abp.TenantId': "" + abp.multiTenancy.getTenantIdCookie(),
            '.AspNetCore.Culture': "c=" + cookieLangValue + "|uic=" + cookieLangValue,
        };
        if (token) {
            requestHeaders['Authorization'] = "Bearer " + token;
        }
        this._httpClient
            .get(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].remoteServiceBaseUrl + "/AbpUserConfiguration/GetAll", {
            headers: requestHeaders,
        })
            .subscribe(function (response) {
            var result = response.result;
            Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["merge"])(abp, result);
            abp.clock.provider = _this.getCurrentClockProvider(result.clock.provider);
            moment__WEBPACK_IMPORTED_MODULE_3__["locale"](abp.localization.currentLanguage.name);
            if (abp.clock.provider.supportsMultipleTimezone) {
                moment__WEBPACK_IMPORTED_MODULE_3__["tz"].setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
            }
            callback();
        });
    };
    AppInitializer.prototype.getApplicationConfig = function (appRootUrl, callback) {
        this._httpClient
            .get(appRootUrl + "assets/" + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appConfig, {
            headers: {
                'Abp.TenantId': "" + abp.multiTenancy.getTenantIdCookie(),
            },
        })
            .subscribe(function (response) {
            _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].appBaseUrl = response.appBaseUrl;
            _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].remoteServiceBaseUrl = response.remoteServiceBaseUrl;
            _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].localeMappings = response.localeMappings;
            callback();
        });
    };
    AppInitializer.ɵfac = function AppInitializer_Factory(t) { return new (t || AppInitializer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    AppInitializer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInitializer, factory: AppInitializer.ɵfac, providedIn: 'root' });
    return AppInitializer;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInitializer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nS6G":
/*!*********************************!*\
  !*** ./src/shared/AppConsts.ts ***!
  \*********************************/
/*! exports provided: AppConsts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConsts", function() { return AppConsts; });
var AppConsts = /** @class */ (function () {
    function AppConsts() {
    }
    AppConsts.localeMappings = [];
    AppConsts.userManagement = {
        defaultAdminUserName: 'admin'
    };
    AppConsts.localization = {
        defaultLocalizationSourceName: 'Facturi'
    };
    AppConsts.authorization = {
        encryptedAuthTokenName: 'enc_auth_token'
    };
    return AppConsts;
}());



/***/ }),

/***/ "rlFc":
/*!*************************************************!*\
  !*** ./src/shared/directives/busy.directive.ts ***!
  \*************************************************/
/*! exports provided: BusyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyDirective", function() { return BusyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var BusyDirective = /** @class */ (function () {
    function BusyDirective(_element) {
        this._element = _element;
    }
    Object.defineProperty(BusyDirective.prototype, "busy", {
        set: function (isBusy) {
            this.refreshState(isBusy);
        },
        enumerable: false,
        configurable: true
    });
    BusyDirective.prototype.refreshState = function (isBusy) {
        if (isBusy === undefined) {
            return;
        }
        if (isBusy) {
            abp.ui.setBusy(this._element.nativeElement);
        }
        else {
            abp.ui.clearBusy(this._element.nativeElement);
        }
    };
    BusyDirective.ɵfac = function BusyDirective_Factory(t) { return new (t || BusyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    BusyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BusyDirective, selectors: [["", "busy", ""]], inputs: { busy: "busy" } });
    return BusyDirective;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[busy]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { busy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "tYQx":
/*!*******************************************!*\
  !*** ./src/shared/pipes/localize.pipe.ts ***!
  \*******************************************/
/*! exports provided: LocalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizePipe", function() { return LocalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "wzdi");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};



var LocalizePipe = /** @class */ (function (_super) {
    __extends(LocalizePipe, _super);
    function LocalizePipe(injector) {
        return _super.call(this, injector) || this;
    }
    LocalizePipe.prototype.transform = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.l.apply(this, __spread([key], args));
    };
    LocalizePipe.ɵfac = function LocalizePipe_Factory(t) { return new (t || LocalizePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
    LocalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "localize", type: LocalizePipe, pure: true });
    return LocalizePipe;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'localize'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "tvsI":
/*!***************************************************!*\
  !*** ./src/shared/session/app-session.service.ts ***!
  \***************************************************/
/*! exports provided: AppSessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSessionService", function() { return AppSessionService; });
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! abp-ng2-module */ "4Fy5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "KALY");






var AppSessionService = /** @class */ (function () {
    function AppSessionService(_sessionService, _abpMultiTenancyService) {
        this._sessionService = _sessionService;
        this._abpMultiTenancyService = _abpMultiTenancyService;
    }
    Object.defineProperty(AppSessionService.prototype, "application", {
        get: function () {
            return this._application;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "userId", {
        get: function () {
            return this.user ? this.user.id : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "tenant", {
        get: function () {
            return this._tenant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "tenantId", {
        get: function () {
            return this.tenant ? this.tenant.id : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "entrepriseName", {
        get: function () {
            return this._entrepriseName;
        },
        set: function (value) {
            this._entrepriseName = value;
        },
        enumerable: false,
        configurable: true
    });
    AppSessionService.prototype.getShownLoginName = function () {
        var userName = this._user.userName;
        if (!this._abpMultiTenancyService.isEnabled) {
            return userName;
        }
        return (this._tenant ? this._tenant.tenancyName : '.') + '\\' + userName;
    };
    AppSessionService.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._sessionService.getCurrentLoginInformations().toPromise().then(function (result) {
                _this._application = result.application;
                _this._user = result.user;
                _this._tenant = result.tenant;
                _this._entrepriseName = result.entrepriseName;
                resolve(true);
            }, function (err) {
                reject(err);
            });
        });
    };
    AppSessionService.prototype.changeTenantIfNeeded = function (tenantId) {
        if (this.isCurrentTenant(tenantId)) {
            return false;
        }
        abp.multiTenancy.setTenantIdCookie(tenantId);
        location.reload();
        return true;
    };
    AppSessionService.prototype.isCurrentTenant = function (tenantId) {
        if (!tenantId && this.tenant) {
            return false;
        }
        else if (tenantId && (!this.tenant || this.tenant.id !== tenantId)) {
            return false;
        }
        return true;
    };
    AppSessionService.ɵfac = function AppSessionService_Factory(t) { return new (t || AppSessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["SessionServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_0__["AbpMultiTenancyService"])); };
    AppSessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppSessionService, factory: AppSessionService.ɵfac });
    return AppSessionService;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppSessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["SessionServiceProxy"] }, { type: abp_ng2_module__WEBPACK_IMPORTED_MODULE_0__["AbpMultiTenancyService"] }]; }, null); })();


/***/ }),

/***/ "wzdi":
/*!******************************************!*\
  !*** ./src/shared/app-component-base.ts ***!
  \******************************************/
/*! exports provided: AppComponentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentBase", function() { return AppComponentBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppConsts */ "nS6G");
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! abp-ng2-module */ "4Fy5");
/* harmony import */ var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/session/app-session.service */ "tvsI");




var AppComponentBase = /** @class */ (function () {
    function AppComponentBase(injector) {
        this.localizationSourceName = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__["AppConsts"].localization.defaultLocalizationSourceName;
        this.localization = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"]);
        this.permission = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["PermissionCheckerService"]);
        this.feature = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["FeatureCheckerService"]);
        this.notify = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["NotifyService"]);
        this.setting = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["SettingService"]);
        this.message = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["MessageService"]);
        this.multiTenancy = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["AbpMultiTenancyService"]);
        this.appSession = injector.get(_shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_3__["AppSessionService"]);
        this.elementRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    }
    AppComponentBase.prototype.l = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var localizedText = this.localization.localize(key, this.localizationSourceName);
        if (!localizedText) {
            localizedText = key;
        }
        if (!args || !args.length) {
            return localizedText;
        }
        args.unshift(localizedText);
        return abp.utils.formatString.apply(this, args);
    };
    AppComponentBase.prototype.isGranted = function (permissionName) {
        return this.permission.isGranted(permissionName);
    };
    return AppComponentBase;
}());



/***/ }),

/***/ "yPwq":
/*!******************************************************************************!*\
  !*** ./src/shared/components/validation/abp-validation.summary.component.ts ***!
  \******************************************************************************/
/*! exports provided: AbpValidationSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbpValidationSummaryComponent", function() { return AbpValidationSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "wzdi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};





function AbpValidationSummaryComponent_ng_container_0_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var validationError_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-block", !!ctx_r3.control.errors[validationError_r2.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getValidationErrorMessage(validationError_r2), " ");
} }
function AbpValidationSummaryComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpValidationSummaryComponent_ng_container_0_ng_container_1_span_1_Template, 2, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var validationError_r2 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r1.control.errors[validationError_r2.name]);
} }
function AbpValidationSummaryComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpValidationSummaryComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
} }
var AbpValidationSummaryComponent = /** @class */ (function (_super) {
    __extends(AbpValidationSummaryComponent, _super);
    function AbpValidationSummaryComponent(injector, _renderer) {
        var _this = _super.call(this, injector) || this;
        _this._renderer = _renderer;
        _this.defaultValidationErrors = [
            { name: 'required', localizationKey: 'ThisFieldIsRequired' },
            {
                name: 'minlength',
                localizationKey: 'PleaseEnterAtLeastNCharacter',
                propertyKey: 'requiredLength',
            },
            {
                name: 'maxlength',
                localizationKey: 'PleaseEnterNoMoreThanNCharacter',
                propertyKey: 'requiredLength',
            },
            {
                name: 'email',
                localizationKey: 'InvalidEmailAddress',
            },
            {
                name: 'pattern',
                localizationKey: 'InvalidPattern',
                propertyKey: 'requiredPattern',
            },
            {
                name: 'validateEqual',
                localizationKey: 'PairsDoNotMatch',
            },
        ];
        _this.validationErrors = _this.defaultValidationErrors;
        return _this;
    }
    Object.defineProperty(AbpValidationSummaryComponent.prototype, "customValidationErrors", {
        set: function (val) {
            if (val && val.length > 0) {
                var defaults = this.defaultValidationErrors.filter(function (defaultValidationError) {
                    return !val.find(function (customValidationError) {
                        return customValidationError.name === defaultValidationError.name;
                    });
                });
                this.validationErrors = __spread(defaults, val);
            }
        },
        enumerable: false,
        configurable: true
    });
    AbpValidationSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.controlEl) {
            this.control.valueChanges.subscribe(function () {
                if (_this.control.valid &&
                    (_this.control.dirty || _this.control.touched)) {
                    _this._renderer.removeClass(_this.controlEl, 'is-invalid');
                }
            });
        }
    };
    AbpValidationSummaryComponent.prototype.getValidationErrorMessage = function (error) {
        if (this.controlEl) {
            this._renderer.addClass(this.controlEl, 'is-invalid');
        }
        var propertyValue = this.control.errors[error.name][error.propertyKey];
        return !!propertyValue
            ? this.l(error.localizationKey, propertyValue)
            : this.l(error.localizationKey);
    };
    AbpValidationSummaryComponent.ɵfac = function AbpValidationSummaryComponent_Factory(t) { return new (t || AbpValidationSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    AbpValidationSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbpValidationSummaryComponent, selectors: [["abp-validation-summary"]], inputs: { control: "control", controlEl: "controlEl", customValidationErrors: "customValidationErrors" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "error invalid-feedback", 3, "d-block", 4, "ngIf"], [1, "error", "invalid-feedback"]], template: function AbpValidationSummaryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AbpValidationSummaryComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.invalid && (ctx.control.dirty || ctx.control.touched));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], encapsulation: 2 });
    return AbpValidationSummaryComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbpValidationSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'abp-validation-summary',
                templateUrl: './abp-validation.summary.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], controlEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customValidationErrors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hmr */ "0QMH");
/* harmony import */ var moment_min_locales_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/min/locales.min */ "xXuG");
/* harmony import */ var moment_min_locales_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_min_locales_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-timezone */ "f0Wu");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _root_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root.module */ "eXag");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");







if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var bootstrap = function () {
    return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["platformBrowser"]().bootstrapModule(_root_module__WEBPACK_IMPORTED_MODULE_5__["RootModule"]);
};
/* "Hot Module Replacement" is enabled as described on
 * https://medium.com/@beeman/tutorial-enable-hrm-in-angular-cli-apps-1b0d13b80130#.sa87zkloh
 */
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap(); // Regular bootstrap
}


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map