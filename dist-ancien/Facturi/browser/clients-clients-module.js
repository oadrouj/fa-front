(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "9iw0":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.module.ts ***!
  \*******************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients.component */ "aCJP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/primeng-shared.module */ "BhnP");







var ClientsModule = /** @class */ (function () {
    function ClientsModule() {
    }
    ClientsModule.ɵfac = function ClientsModule_Factory(t) { return new (t || ClientsModule)(); };
    ClientsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClientsModule });
    ClientsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _clients_component__WEBPACK_IMPORTED_MODULE_0__["ClientsComponent"] }
                ]),
                _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_4__["PrimengSharedModule"]
            ]] });
    return ClientsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientsModule, { declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_0__["ClientsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_4__["PrimengSharedModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClientsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        { path: '', component: _clients_component__WEBPACK_IMPORTED_MODULE_0__["ClientsComponent"] }
                    ]),
                    _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_4__["PrimengSharedModule"]
                ],
                declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_0__["ClientsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aCJP":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_table_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/table/table.component */ "9Rdk");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "wzdi");
/* harmony import */ var _shared_enums_DialogState_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/enums/DialogState.enum */ "35Vz");
/* harmony import */ var _shared_enums_reference_prefix_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/enums/reference-prefix.enum */ "x+Hk");
/* harmony import */ var _shared_globalEventsService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/globalEventsService */ "PYeD");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "KALY");
/* harmony import */ var _shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/confirm-dialog.service */ "Lxc4");
/* harmony import */ var _shared_services_format_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/format.service */ "1R+M");
/* harmony import */ var _shared_services_lazy_table_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/services/lazy-table.service */ "1XFo");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/services/toast.service */ "hlTd");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var _client_dialog_client_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./client-dialog/client-dialog.component */ "1d1w");
/* harmony import */ var _devis_devis_dialog_devis_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../devis/devis-dialog/devis-dialog.component */ "F8Wo");
/* harmony import */ var _factures_factures_dialog_factures_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../factures/factures-dialog/factures-dialog.component */ "irdR");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/skeleton */ "jeV5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ "tyNb");
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






































function ClientsComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Raison sociale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.replaceIfIsNullOrEmpty(ctx_r1.client.raisonSociale));
} }
function ClientsComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.replaceIfIsNullOrEmpty(ctx_r2.client.ice));
} }
function ClientsComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.replaceIfIsNullOrEmpty(ctx_r3.client.nom));
} }
function ClientsComponent_tr_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Secteur d\u2019activit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.replaceIfIsNullOrEmpty(ctx_r4.client.secteurActivite));
} }
function ClientsComponent_ng_template_116_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r16.header, " ");
} }
function ClientsComponent_ng_template_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientsComponent_ng_template_116_th_1_Template, 2, 1, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var columns_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r14);
} }
function ClientsComponent_ng_template_117_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aucune facture pour ce client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ClientsComponent_ng_template_117_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var colVar_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", colVar_r23.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, colVar_r23.format(rowData_r17[colVar_r23.field]), "shortDate"), " ");
} }
function ClientsComponent_ng_template_117_ng_template_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var colVar_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", colVar_r23.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, rowData_r17[colVar_r23.field] || 0, "1.2-2"), " ", " " + ctx_r25.Currency, " ");
} }
function ClientsComponent_ng_template_117_ng_template_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var colVar_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", colVar_r23.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r17[colVar_r23.field] + "%", " ");
} }
function ClientsComponent_ng_template_117_ng_template_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var colVar_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", colVar_r23.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", colVar_r23.format ? colVar_r23.format(rowData_r17[colVar_r23.field], rowData_r17.referencePrefix) : rowData_r17[colVar_r23.field], " ", colVar_r23.suffix && " " + colVar_r23.suffix, " ");
} }
function ClientsComponent_ng_template_117_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClientsComponent_ng_template_117_ng_template_1_ng_container_1_ng_container_2_Template, 4, 5, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClientsComponent_ng_template_117_ng_template_1_ng_container_1_ng_container_3_Template, 4, 6, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClientsComponent_ng_template_117_ng_template_1_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientsComponent_ng_template_117_ng_template_1_ng_container_1_ng_container_5_Template, 3, 3, "ng-container", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var colVar_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", colVar_r23.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "pourcentage");
} }
function ClientsComponent_ng_template_117_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientsComponent_ng_template_117_ng_template_1_ng_container_1_Template, 6, 4, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var rowData_r17 = ctx_r36.$implicit;
    var columns_r18 = ctx_r36.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r18);
} }
function ClientsComponent_ng_template_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ClientsComponent_ng_template_117_ng_container_0_Template, 7, 0, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientsComponent_ng_template_117_ng_template_1_Template, 2, 2, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hasFactures)("ngIfElse", _r20);
} }
var _c0 = function () { return { "width": "100%" }; };
function ClientsComponent_ng_template_118_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-skeleton", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function ClientsComponent_ng_template_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientsComponent_ng_template_118_td_1_Template, 2, 2, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var columns_r37 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r37);
} }
var _c1 = function () { return ["/app/Factures"]; };
function ClientsComponent_ng_template_119_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Voir tous les factures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function ClientsComponent_ng_template_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ClientsComponent_ng_template_119_button_0_Template, 2, 2, "button", 68);
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.hasFactures);
} }
function ClientsComponent_ng_template_122_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r45.header, " ");
} }
function ClientsComponent_ng_template_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientsComponent_ng_template_122_th_1_Template, 2, 1, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var columns_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r43);
} }
function ClientsComponent_ng_template_123_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aucun devis pour ce client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ClientsComponent_ng_template_123_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var colVar_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", colVar_r52.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, colVar_r52.format(rowData_r46[colVar_r52.field]), "shortDate"), " ");
} }
function ClientsComponent_ng_template_123_ng_template_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var colVar_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", colVar_r52.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, rowData_r46[colVar_r52.field] || 0, "1.2-2"), " ", " " + ctx_r54.Currency, " ");
} }
function ClientsComponent_ng_template_123_ng_template_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var colVar_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", colVar_r52.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r46[colVar_r52.field] + "%", " ");
} }
function ClientsComponent_ng_template_123_ng_template_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var colVar_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", colVar_r52.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", colVar_r52.format ? colVar_r52.format(rowData_r46[colVar_r52.field], rowData_r46.referencePrefix) : rowData_r46[colVar_r52.field], " ", colVar_r52.suffix && " " + colVar_r52.suffix, " ");
} }
function ClientsComponent_ng_template_123_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClientsComponent_ng_template_123_ng_template_1_ng_container_1_ng_container_2_Template, 4, 5, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClientsComponent_ng_template_123_ng_template_1_ng_container_1_ng_container_3_Template, 4, 6, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClientsComponent_ng_template_123_ng_template_1_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientsComponent_ng_template_123_ng_template_1_ng_container_1_ng_container_5_Template, 3, 3, "ng-container", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var colVar_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", colVar_r52.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "pourcentage");
} }
function ClientsComponent_ng_template_123_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientsComponent_ng_template_123_ng_template_1_ng_container_1_Template, 6, 4, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var rowData_r46 = ctx_r65.$implicit;
    var columns_r47 = ctx_r65.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r47);
} }
function ClientsComponent_ng_template_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ClientsComponent_ng_template_123_ng_container_0_Template, 7, 0, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientsComponent_ng_template_123_ng_template_1_Template, 2, 2, "ng-template", null, 70, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.hasDevis)("ngIfElse", _r49);
} }
var _c2 = function () { return ["/app/Devis"]; };
function ClientsComponent_ng_template_124_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Voir tous les devis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function ClientsComponent_ng_template_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ClientsComponent_ng_template_124_button_0_Template, 2, 2, "button", 72);
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.hasDevis);
} }
var _c3 = function () { return ["categorie", "type"]; };
var ClientsComponent = /** @class */ (function (_super) {
    __extends(ClientsComponent, _super);
    function ClientsComponent(injector, confirmationService, _clientServiceProxy, _globalEventsService, _formatService, _factureServiceProxy, _devisServiceProxy, _toastService, _confirmDialogService, _lazyTableService) {
        var _this = _super.call(this, injector) || this;
        _this.confirmationService = confirmationService;
        _this._clientServiceProxy = _clientServiceProxy;
        _this._globalEventsService = _globalEventsService;
        _this._formatService = _formatService;
        _this._factureServiceProxy = _factureServiceProxy;
        _this._devisServiceProxy = _devisServiceProxy;
        _this._toastService = _toastService;
        _this._confirmDialogService = _confirmDialogService;
        _this._lazyTableService = _lazyTableService;
        //#region properties
        _this.tableSelectionColor = 'var(--light-green-color)';
        _this.primaryColor = 'blue';
        _this.champsRecherche = '';
        _this.client = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["ClientDto"]();
        _this.cols = [
            {
                header: 'REFERENCE',
                field: 'reference',
                type: 'text',
                format: function (number) {
                    return _this._formatService.formatReferenceNumber(number, _shared_enums_reference_prefix_enum__WEBPACK_IMPORTED_MODULE_4__["ReferencePrefix"].Client);
                },
            },
            {
                header: "DATE D'AJOUT",
                field: 'creationTime',
                type: 'date',
                format: function (date) { return (date._i ? new Date(date._i) : new Date(date._d)); },
            },
            {
                header: 'CLIENT',
                field: 'displayName',
                type: 'text',
            },
            {
                header: 'FACTURES EN ATTENTE',
                field: 'pendingInvoicesAmount',
                type: 'currency',
            },
            {
                header: 'FACTURES EN RETARD',
                field: 'overdueInvoicesAmount',
                type: 'currency',
            },
        ];
        _this.selectedCategory = '';
        _this.selectedType = '';
        _this.Currency = 'MAD';
        _this.totalAmountPendingFactures = 0;
        _this.totalAmountOverdueFactures = 0;
        _this.scrollHeight = '0px';
        _this.favIcon = document.querySelector('#favIcon');
        _this.selectedTabName = '';
        _this.devisCols = [
            {
                header: 'REFERENCE',
                field: 'reference',
                type: 'text',
                format: function (number, customPrefix) {
                    return _this._formatService.formatReferenceNumber(number, customPrefix ? customPrefix : _shared_enums_reference_prefix_enum__WEBPACK_IMPORTED_MODULE_4__["ReferencePrefix"].Devis);
                },
            },
            {
                header: 'DATE D’EMISSION',
                field: 'dateEmission',
                type: 'date',
                format: function (date) {
                    return date && (date._i ? new Date(date._i) : new Date(date._d));
                },
            },
            {
                header: 'ECHEANCE',
                field: 'echeancePaiement',
                type: 'text',
                suffix: 'jours',
            },
            {
                header: 'TOTAL HT',
                field: 'montantHt',
                type: 'currency',
            },
            {
                header: 'TOTAL TTC',
                field: 'montantTtc',
                type: 'currency',
            },
            {
                header: 'STATUT',
                field: 'statut',
                type: 'text',
                format: _this._formatService.formatDevisStatut,
            },
        ];
        _this.factureCols = [
            {
                header: 'REFERENCE',
                field: 'reference',
                type: 'text',
                format: function (number, customPrefix) {
                    return _this._formatService.formatReferenceNumber(number, customPrefix ? customPrefix : _shared_enums_reference_prefix_enum__WEBPACK_IMPORTED_MODULE_4__["ReferencePrefix"].Facture);
                },
            },
            {
                header: 'DATE D’EMISSION',
                field: 'dateEmission',
                type: 'date',
                format: function (date) {
                    return date && (date._i ? new Date(date._i) : new Date(date._d));
                },
            },
            {
                header: 'ECHEANCE',
                field: 'echeancePaiement',
                type: 'text',
                suffix: 'jours',
            },
            {
                header: 'TOTAL HT',
                field: 'montantHt',
                type: 'currency',
            },
            {
                header: 'TOTAL TTC',
                field: 'montantTtc',
                type: 'currency',
            },
            {
                header: 'STATUT',
                field: 'statut',
                type: 'text',
                format: _this._formatService.formatFactureStatut,
            },
        ];
        _this.filterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        _this.getReferenceFromReferenceNumber = function (referenceNumber) {
            return _this._formatService.formatReferenceNumber(referenceNumber, _shared_enums_reference_prefix_enum__WEBPACK_IMPORTED_MODULE_4__["ReferencePrefix"].Client);
        };
        _this.resetDocumentDialogStatus = function () { return _this.documentDialogStatus = undefined; };
        return _this;
    }
    //#endregion
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._globalEventsService.announcedThePageChangedColorSubject('#2A95D1');
        if (window.history.state.clientCreationFromDevis) {
            this.showDialogNouveau();
        }
        this.favIcon.href = '../../assets/img/ClientsTitreIcon.png';
        this.factureList = [new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["FactureDto"]()];
        this.devisList = [new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["DevisDto"]()];
        var height = Math.max(document.body.offsetHeight, 770);
        this.scrollHeight = (height - 356).toString() + 'px';
        this._lazyTableService.rowSelected$.subscribe(function (res) {
            _this.totalAmountPendingFactures = 0;
            _this.totalAmountOverdueFactures = 0;
            _this.tableChild.tableData.forEach(function (item) {
                _this.totalAmountPendingFactures += item.pendingInvoicesAmount;
                _this.totalAmountOverdueFactures += item.overdueInvoicesAmount;
            });
            _this.client = res;
            _this.client && _this.getFiveLastFacturesOrDevisElements(_this.selectedTabName);
            if (_this.client == null)
                _this.client = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["ClientDto"]();
            _this.isClientProfetionnel = _this.client.categorieClient == 'PRFS';
        });
        this.categories = [
            { name: 'Particulier', code: 'PRTC' },
            { name: 'Professionnel', code: 'PRFS' },
        ];
        this.types = [
            { name: 'Client', code: 'client' },
            { name: 'Prospect', code: 'prospect' },
        ];
    };
    ClientsComponent.prototype.emitFilterEvent = function (filterType, value) {
        var _this = this;
        if (filterType == 'filterByInput') {
            setTimeout(function () {
                _this.filterSubject.next({
                    type: 'filterByInput',
                    value: value,
                });
            }, 500);
        }
        else if (filterType == 'filterByButton') {
            console.log(this.selectedCategory);
            this.filterSubject.next({
                type: 'filterByButton',
                value: {
                    category: this.selectedCategory,
                    type: this.selectedType,
                },
            });
        }
    };
    ClientsComponent.prototype.resetFilterFields = function () {
        this.selectedCategory = '';
        this.selectedType = '';
        this.emitFilterEvent('filterByButton', null);
    };
    ClientsComponent.prototype.chargerListeClients = function (event) {
        var categorieFilter = event.filters && event.filters.category && event.filters.category.value;
        var typeFilter = event.filters && event.filters.type && event.filters.type.value;
        return this._clientServiceProxy
            .getAllClients(event.first, event.rows, event.globalFilter, event.sortField, event.sortOrder, categorieFilter, typeFilter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (data) {
            return {
                items: data.items,
                length: data.totalEntityItems,
                montantTotalAllDevis: 0,
            };
        }));
    };
    ClientsComponent.prototype.getFiveLastFacturesOrDevisElements = function (element) {
        var _this = this;
        this.hasFactures = false;
        this.hasDevis = false;
        if (element == 'factures') {
            this._factureServiceProxy
                .getAllFacture(0, 5, '', '', '', this.client.id, undefined, undefined, undefined, undefined)
                .subscribe(function (res) {
                if (res.items.length > 0) {
                    _this.hasFactures = true;
                    res.items.forEach(function (devis) {
                        devis.statut =
                            devis.statut == _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["FactureStatutEnum"].Valide
                                ? moment__WEBPACK_IMPORTED_MODULE_11__().isAfter(moment__WEBPACK_IMPORTED_MODULE_11__(devis.dateEmission).add(devis.echeancePaiement, 'days'))
                                    ? _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["FactureStatutEnum"].PaiementRetard
                                    : _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["FactureStatutEnum"].PaiementAttente
                                : devis.statut;
                        var montantTtc = devis.factureItems
                            .map(function (item) { return item.totalTtc; })
                            .reduce(function (accum, current) { return accum + current; });
                        devis.montantHt = devis.factureItems
                            .map(function (item) { return item.unitPriceHT * item.quantity; })
                            .reduce(function (accum, current) { return accum + current; });
                        devis.montantTtc =
                            montantTtc - (devis.montantHt * devis.remise) / 100;
                    });
                    _this.factureList = res.items;
                }
            });
        }
        else {
            this._devisServiceProxy
                .getAllDevis(0, 5, '', '', '', this.client.id, undefined, undefined, undefined, undefined)
                .subscribe(function (res) {
                if (res.items.length > 0) {
                    _this.hasDevis = true;
                    res.items.forEach(function (devis) {
                        devis.statut = moment__WEBPACK_IMPORTED_MODULE_11__().isAfter(moment__WEBPACK_IMPORTED_MODULE_11__(devis.dateEmission).add(devis.echeancePaiement, 'days'))
                            ? _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["DevisStatutEnum"].Expire
                            : devis.statut;
                        var montantTtc = devis.devisItems
                            .map(function (item) { return item.totalTtc; })
                            .reduce(function (accum, current) { return accum + current; });
                        devis.montantHt = devis.devisItems
                            .map(function (item) { return item.unitPriceHT * item.quantity; })
                            .reduce(function (accum, current) { return accum + current; });
                        devis.montantTtc =
                            montantTtc - (devis.montantHt * devis.remise) / 100;
                    });
                    _this.devisList = res.items;
                }
            });
        }
    };
    ClientsComponent.prototype.handleTabChange = function (event) {
        if (event.index == 1) {
            this.getFiveLastFacturesOrDevisElements('factures');
            this.selectedTabName = 'factures';
        }
        else if (event.index == 2) {
            this.getFiveLastFacturesOrDevisElements('devis');
            this.selectedTabName = 'devis';
        }
    };
    ClientsComponent.prototype.showDialogNouveau = function () {
        this.clientDialogIsVisible = true;
        this.clientDialogStatus = _shared_enums_DialogState_enum__WEBPACK_IMPORTED_MODULE_3__["DialogStatus"].New;
    };
    ClientsComponent.prototype.showDialogModifier = function () {
        this.clientDialogIsVisible = true;
        this.clientDialogStatus = _shared_enums_DialogState_enum__WEBPACK_IMPORTED_MODULE_3__["DialogStatus"].Edit;
    };
    ClientsComponent.prototype.closeClientDialog = function () {
        this.clientDialogIsVisible = false;
        this.clientDialogStatus = undefined;
    };
    ClientsComponent.prototype.isNullOrEmpty = function (str) {
        return str == undefined || str.toString().trim() == '';
    };
    ClientsComponent.prototype.replaceIfIsNullOrEmpty = function (str) {
        if (!str || this.isNullOrEmpty(str)) {
            return '...';
        }
        else {
            return str;
        }
    };
    ClientsComponent.prototype.supprimerClient = function () {
        var _this = this;
        this._confirmDialogService.deleteConfirm({
            acceptCallback: function () {
                _this._clientServiceProxy.deleteClient(_this.client.id).subscribe(function () {
                    var referenceClient = _this.getReferenceFromReferenceNumber(_this.client.reference);
                    _this._lazyTableService.emitDataOperation = {
                        action: 'remove',
                        payload: _this.client.id,
                    };
                    _this.totalAmountPendingFactures = 0;
                    _this.totalAmountOverdueFactures = 0;
                    _this._toastService.success({
                        summary: 'Opération réussie',
                        detail: 'Le client ' + referenceClient + ' est supprimé avec succès.',
                    });
                });
            },
            rejectCallback: function (type) {
                switch (type) {
                    case primeng_api__WEBPACK_IMPORTED_MODULE_12__["ConfirmEventType"].REJECT:
                        _this._toastService.error({
                            summary: 'Erreur',
                            detail: "une erreur s'est produite lors de la suppression",
                        });
                        break;
                    case primeng_api__WEBPACK_IMPORTED_MODULE_12__["ConfirmEventType"].CANCEL:
                        break;
                }
            },
        });
    };
    ClientsComponent.prototype.newDevis = function () {
        this.estimateDialogIsVisible = true;
        this.documentDialogStatus = _shared_enums_DialogState_enum__WEBPACK_IMPORTED_MODULE_3__["DialogStatus"].New;
        this.documentDataItem = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["DevisDto"]();
        this.documentDataItem.client = this.client;
    };
    ClientsComponent.prototype.newFacture = function () {
        this.invoiceDialogIsVisible = true;
        this.documentDialogStatus = _shared_enums_DialogState_enum__WEBPACK_IMPORTED_MODULE_3__["DialogStatus"].New;
        this.documentDataItem = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["FactureDto"]();
        this.documentDataItem.client = this.client;
    };
    ClientsComponent.prototype.onEstimateDialogClose = function () {
        this.resetDocumentDialogStatus();
        this.estimateDialogIsVisible = false;
    };
    ClientsComponent.prototype.onInvoiceDialogClose = function () {
        this.resetDocumentDialogStatus();
        this.invoiceDialogIsVisible = false;
    };
    ClientsComponent.ɵfac = function ClientsComponent_Factory(t) { return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["ClientServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_globalEventsService__WEBPACK_IMPORTED_MODULE_5__["GlobalEventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_format_service__WEBPACK_IMPORTED_MODULE_8__["FormatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["FactureServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["DevisServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_lazy_table_service__WEBPACK_IMPORTED_MODULE_9__["LazyTableService"])); };
    ClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsComponent, selectors: [["app-clients"]], viewQuery: function ClientsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_app_table_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableChild = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 132, vars: 58, consts: [[1, "grid", "grid-nogutter"], ["id", "blockLeft", 1, "pt-5"], [1, "pl-2"], [1, "grid", "p-2"], ["id", "titreBlock", 1, "col-8"], ["id", "logoTitre", "src", "../../assets/img/ClientsTitreIcon.png", 1, "vertical-baseline"], ["id", "titre", 1, "ml-2"], ["id", "sousTitre", 1, "mt-2"], ["id", "nouveauClientBlock", 1, "col-4"], ["id", "nouveauClient", "label", "Nouveau client", 3, "click"], ["id", "filtreLeftBlock", 1, "col-5"], [1, "p-input-icon-left", "shadow-1"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Recherchez ici", 3, "ngModel", "ngModelChange", "input"], ["id", "filtreRightBlock", 1, "col-7"], [1, "ml-auto", "w-max"], ["placeholder", "Type", "optionLabel", "name", "optionValue", "code", 1, "", 3, "options", "ngModel", "ngModelChange", "onChange"], ["placeholder", "Cat\u00E9gorie", "optionLabel", "name", "optionValue", "code", 1, "", 3, "options", "ngModel", "ngModelChange", "onChange"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa fa-undo", 3, "ngClass", "click"], [3, "cols", "currency", "styleClass", "styleId", "highlightColorInput", "filterEvent", "getListApi$", "globalFilterFields"], ["dt1", ""], ["id", "footerTable", 1, "grid", "mx-2"], ["id", "totalTTC"], ["id", "totalEnAttente"], ["id", "totalPayees"], ["id", "blockApercu", 1, "pt-5", "pr-3", "pb-3"], ["id", "apercu", 1, "shadow-4"], ["id", "headerApercu"], ["label", "Nouvelle Facture", "styleClass", "p-button-link", 3, "click"], ["label", "Nouveau Devis", "styleClass", "p-button-link", 3, "click"], ["label", "Modifier", "styleClass", "p-button-link", 3, "click"], ["label", "Supprimer", "styleClass", "p-button-link", 3, "click"], ["id", "rappelClient"], [1, "pl-4"], ["id", "nomClientApercu"], ["id", "referenceClientApercu"], ["id", "categorieClientApercu"], ["id", "ongletsClient"], [3, "onChange"], ["id", "clientInfos", "header", "Infos"], [4, "ngIf"], ["header", "Factures"], ["dataKey", "reference", 3, "columns", "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "loadingbody"], ["pTemplate", "summary"], ["header", "Devis"], [3, "dialogStatus", "dataItem", "display", "emitHideDialogEvent"], [3, "visible", "dataItem", "dialogStatus", "closeDialogEvent"], ["devisDialog", ""], ["factureDialog", ""], ["key", "default", "position", "top-right"], ["icon", "pi pi-exclamation-triangle", 3, "baseZIndex"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["hasRecordsFactures", ""], ["id", "noRecordsFactures", 1, "absolute", "w-100"], [1, "mx-auto"], ["src", "../../assets/img/NoRecordsFactureIcon.png"], [2, "height", "40px", 3, "pSelectableRow"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "colSpan"], ["mode", "decimal", 3, "colSpan"], [2, "height", "34px"], [3, "ngStyle"], ["pButton", "", "type", "button", "class", "p-button-raised border-none bg-orange", 3, "routerLink", 4, "ngIf"], ["pButton", "", "type", "button", 1, "p-button-raised", "border-none", "bg-orange", 3, "routerLink"], ["hasRecordsDevis", ""], ["src", "../../assets/img/NoRecordsDevisIcon.png"], ["pButton", "", "type", "button", "class", "p-button-raised bg-green border-none", 3, "routerLink", 4, "ngIf"], ["pButton", "", "type", "button", 1, "p-button-raised", "bg-green", "border-none", 3, "routerLink"]], template: function ClientsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clients");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tous vos clients en un seul endroit !");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_Template_p_button_click_11_listener() { return ctx.showDialogNouveau(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientsComponent_Template_input_ngModelChange_16_listener($event) { return ctx.champsRecherche = $event; })("input", function ClientsComponent_Template_input_input_16_listener($event) { return ctx.emitFilterEvent("filterByInput", $event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p-dropdown", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientsComponent_Template_p_dropdown_ngModelChange_19_listener($event) { return ctx.selectedType = $event; })("onChange", function ClientsComponent_Template_p_dropdown_onChange_19_listener() { return ctx.emitFilterEvent("filterByButton", null); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p-dropdown", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientsComponent_Template_p_dropdown_ngModelChange_20_listener($event) { return ctx.selectedCategory = $event; })("onChange", function ClientsComponent_Template_p_dropdown_onChange_20_listener() { return ctx.emitFilterEvent("filterByButton", null); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_Template_button_click_21_listener() { return ctx.resetFilterFields(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-table", 19, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total TTC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p-button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_Template_p_button_click_37_listener() { return ctx.newFacture(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p-button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_Template_p_button_click_38_listener() { return ctx.newDevis(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p-button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_Template_p_button_click_39_listener() { return ctx.showDialogModifier(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p-button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_Template_p_button_click_40_listener() { return ctx.supprimerClient(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p-tabView", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function ClientsComponent_Template_p_tabView_onChange_52_listener($event) { return ctx.handleTabChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p-tabPanel", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ClientsComponent_tr_55_Template, 5, 1, "tr", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ClientsComponent_tr_56_Template, 5, 1, "tr", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ClientsComponent_tr_57_Template, 5, 1, "tr", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ClientsComponent_tr_58_Template, 5, 1, "tr", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "T\u00E9l\u00E9phone fixe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "T\u00E9l\u00E9phone portable");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "E-mail");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Site Web");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Adresse");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Ville");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Pays");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Code postal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Devise de facturation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Remise");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "D\u00E9lai de paiement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p-tabPanel", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p-table", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, ClientsComponent_ng_template_116_Template, 2, 1, "ng-template", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, ClientsComponent_ng_template_117_Template, 3, 2, "ng-template", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, ClientsComponent_ng_template_118_Template, 2, 1, "ng-template", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, ClientsComponent_ng_template_119_Template, 1, 1, "ng-template", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p-tabPanel", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p-table", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, ClientsComponent_ng_template_122_Template, 2, 1, "ng-template", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, ClientsComponent_ng_template_123_Template, 3, 2, "ng-template", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, ClientsComponent_ng_template_124_Template, 1, 1, "ng-template", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "app-client-dialog", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitHideDialogEvent", function ClientsComponent_Template_app_client_dialog_emitHideDialogEvent_125_listener() { return ctx.closeClientDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "app-devis-dialog", 49, 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeDialogEvent", function ClientsComponent_Template_app_devis_dialog_closeDialogEvent_126_listener() { return ctx.onEstimateDialogClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "app-factures-dialog", 49, 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeDialogEvent", function ClientsComponent_Template_app_factures_dialog_closeDialogEvent_128_listener() { return ctx.onInvoiceDialogClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "p-toast", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "p-confirmDialog", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.champsRecherche);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.types)("ngModel", ctx.selectedType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.categories)("ngModel", ctx.selectedCategory);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-button-rounded ml-2 bg-" + ctx.primaryColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols)("currency", ctx.Currency)("styleClass", "table")("styleId", "tableClients")("highlightColorInput", ctx.tableSelectionColor)("filterEvent", ctx.filterSubject.asObservable())("getListApi$", ctx.chargerListeClients)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 51, ctx.totalAmountPendingFactures, "1.2-2"), " ", " " + ctx.Currency, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 54, ctx.totalAmountOverdueFactures, "1.2-2"), " ", " " + ctx.Currency, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.replaceIfIsNullOrEmpty(ctx.isClientProfetionnel ? ctx.client.raisonSociale : ctx.client.nom), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getReferenceFromReferenceNumber(ctx.client.reference), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.replaceIfIsNullOrEmpty(ctx.client.clientType), " - ", ctx.replaceIfIsNullOrEmpty(ctx.isClientProfetionnel ? "Professionnel" : "Particulier"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClientProfetionnel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClientProfetionnel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isClientProfetionnel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClientProfetionnel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.replaceIfIsNullOrEmpty(ctx.client.telFix));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.replaceIfIsNullOrEmpty(ctx.client.telPortable));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.replaceIfIsNullOrEmpty(ctx.client.email));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.replaceIfIsNullOrEmpty(ctx.client.siteWeb));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.replaceIfIsNullOrEmpty(ctx.client.adresse));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.replaceIfIsNullOrEmpty(ctx.client.ville));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.replaceIfIsNullOrEmpty(ctx.client.pays));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.replaceIfIsNullOrEmpty(ctx.client.codePostal));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.replaceIfIsNullOrEmpty(ctx.client.deviseFacturation));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.client.remisePermanente, " %");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.client.delaiPaiement, " Jours");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.factureCols)("value", ctx.factureList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.devisCols)("value", ctx.devisList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogStatus", ctx.clientDialogStatus)("dataItem", ctx.client)("display", ctx.clientDialogIsVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.estimateDialogIsVisible)("dataItem", ctx.documentDataItem)("dialogStatus", ctx.documentDialogStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.invoiceDialogIsVisible)("dataItem", ctx.documentDataItem)("dialogStatus", ctx.documentDialogStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseZIndex", 10000);
        } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_15__["Button"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__["Dropdown"], primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _app_table_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"], primeng_tabview__WEBPACK_IMPORTED_MODULE_20__["TabView"], primeng_tabview__WEBPACK_IMPORTED_MODULE_20__["TabPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_21__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_12__["PrimeTemplate"], _client_dialog_client_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ClientDialogComponent"], _devis_devis_dialog_devis_dialog_component__WEBPACK_IMPORTED_MODULE_23__["DevisDialogComponent"], _factures_factures_dialog_factures_dialog_component__WEBPACK_IMPORTED_MODULE_24__["FacturesDialogComponent"], primeng_toast__WEBPACK_IMPORTED_MODULE_25__["Toast"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__["ConfirmDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_21__["SelectableRow"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchDefault"], primeng_skeleton__WEBPACK_IMPORTED_MODULE_27__["Skeleton"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]], styles: ["#nouveauClientBlock[_ngcontent-%COMP%]   #nouveauClient[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n[_nghost-%COMP%] #nouveauClientBlock #nouveauClient .p-button {\r\n    width: 164px;\r\n    height: 48px;\r\n    background-color: #2A95D1;\r\n}\r\n\r\n#titreBlock[_ngcontent-%COMP%] {\r\n    padding: 0 0.5rem;\r\n}\r\n\r\n#logoTitre[_ngcontent-%COMP%] {\r\n    width: 41px;\r\n}\r\n\r\n#titre[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: #2A95D1;\r\n}\r\n\r\n#sousTitre[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #898E99;\r\n}\r\n\r\n#filtreLeftBlock[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n#filtreRightBlock[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n[_nghost-%COMP%] #filtreRightBlock .p-button {\r\n    max-height: 35px;\r\n    max-width: 110px;\r\n    background-color: #2A95D1;\r\n    color: white;\r\n    border-radius: 20px;\r\n}\r\n\r\n[_nghost-%COMP%] #filtreRightBlock .p-dropdown, [_nghost-%COMP%] #filtreRightBlock .p-autocomplete .p-autocomplete-input, [_nghost-%COMP%] #filtreRightBlock .p-calendar .p-inputtext, [_nghost-%COMP%] #filtreRightBlock .p-inputnumber-input {\r\n    border: none;\r\n    margin-right: 6px;\r\n    width: 82px;\r\n}\r\n\r\n[_nghost-%COMP%] #filtreRightBlock .p-inputtext, [_nghost-%COMP%] #filtreRightBlock .p-dropdown .p-cal, [_nghost-%COMP%] #filtreRightBlock .p-autocomplete .p-autocomplete-input, [_nghost-%COMP%] #filtreRightBlock .p-inputnumber-input {\r\n    padding: 6px 0px 6px 6px;\r\n    color: #7d86a9;\r\n    font-size: 0.8rem;\r\n    font-weight: 500;\r\n}\r\n\r\n[_nghost-%COMP%] #filtreLeftBlock .p-input-icon-left {\r\n    max-width: 323px;\r\n    max-height: 35px;\r\n    width: 100%;\r\n    background-color: #F1EDED;\r\n    border-radius: 24px;\r\n}\r\n\r\n[_nghost-%COMP%] #filtreLeftBlock .p-input-icon-left>.p-inputtext {\r\n    max-width: 323px;\r\n    max-height: 35px;\r\n    width: 100%;\r\n    background-color: #F1EDED;\r\n    border: none;\r\n    border-radius: 24px;\r\n}\r\n\r\n[_nghost-%COMP%] #filtreRightBlock .p-dropdown .p-dropdown-trigger {\r\n    width: 1.1rem;\r\n    padding-right: 5px;\r\n}\r\n\r\n[_nghost-%COMP%] #filtreRightBlock .p-dropdown .p-dropdown-label {\r\n    padding-top: 4px;\r\n}\r\n\r\n\r\n\r\n[_nghost-%COMP%] #tableClients .p-datatable .p-datatable-thead>tr>th {\r\n    font-size: 0.85rem;\r\n    color: #2A95D1;\r\n    padding-right: 0px;\r\n    padding-left: 2px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    background-color: transparent;\r\n}\r\n\r\n[_nghost-%COMP%] #tableClients .p-datatable .p-datatable-scrollable-header {\r\n    background: transparent;\r\n}\r\n\r\n[_nghost-%COMP%] #tableClients .p-datatable .p-datatable-tbody>tr {\r\n    background: transparent;\r\n    color: #898E99;\r\n    height: 54px;\r\n}\r\n\r\n[_nghost-%COMP%] #tableClients .p-component {\r\n    font-size: 14px;\r\n}\r\n\r\n[_nghost-%COMP%] #tableClients .p-datatable .p-datatable-tbody>tr>td {\r\n    padding: 1rem 0rem;\r\n    text-align: center;\r\n}\r\n\r\n[_nghost-%COMP%] #tableClients .p-datatable .p-datatable-tbody>tr {\r\n    background-color: transparent;\r\n}\r\n\r\n[_nghost-%COMP%] #tableClients .p-datatable .p-datatable-tbody>tr.p-highlight {\r\n    background-color: #D1EAF8 !important;\r\n}\r\n\r\n[_nghost-%COMP%] #tableClients .p-datatable-virtual-scrollable-body {\r\n    height: calc(max(100vh, 770px) - 356px);\r\n}\r\n\r\n#blockApercu[_ngcontent-%COMP%] {\r\n    min-height: max(calc(100vh - 60px), 710px);\r\n}\r\n\r\n[_nghost-%COMP%] #apercu {\r\n    width: 100%;\r\n    min-height: 100%;\r\n    background-color: white;\r\n    border-radius: 12px;\r\n    z-index: 2000;\r\n}\r\n\r\n#headerApercu[_ngcontent-%COMP%] {\r\n    \r\n    border-bottom: 1px solid #d8d8d8;\r\n    position: relative;\r\n    padding: 20px;\r\n}\r\n\r\n#headerApercu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    text-align: end;\r\n}\r\n\r\n[_nghost-%COMP%] #headerApercu .p-button {\r\n    color: #2A95D1;\r\n    font-size: 0.9rem;\r\n    padding: .4rem;\r\n}\r\n\r\n#rappelClient[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    font-weight: lighter;\r\n}\r\n\r\n#rappelClient[_ngcontent-%COMP%]   span#nomClientApercu[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    color: #676767;\r\n}\r\n\r\n#rappelClient[_ngcontent-%COMP%]   span#referenceClientApercu[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    color: #5D3D7D;\r\n}\r\n\r\n#rappelClient[_ngcontent-%COMP%]   span#categorieClientApercu[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    color: #5D3D7D;\r\n}\r\n\r\n#ongletsClient[_ngcontent-%COMP%]   p-tabView[_ngcontent-%COMP%] {\r\n    margin-top: -20px;\r\n}\r\n\r\n[_nghost-%COMP%] #ongletsClient .p-tabview {\r\n    padding-left: 24px;\r\n    padding-right: 24px;\r\n    padding-top: 10px;\r\n}\r\n\r\n[_nghost-%COMP%] .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {\r\n    font-size: 15px;\r\n    color: #676767 !important;\r\n}\r\n\r\n[_nghost-%COMP%] .p-tabview .p-highlight {\r\n    font-size: 15px;\r\n    color: #2593D0 !important;\r\n}\r\n\r\n[_nghost-%COMP%] .p-tabview .p-tabview-nav li .p-tabview-nav-link {\r\n    padding: 0.5rem 1rem;\r\n    font-weight: 400;\r\n}\r\n\r\n#ongletsClient[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n#ongletsClient[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n#ongletsClient[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:first-child {\r\n    color: #898E99;\r\n    font-size: 18px;\r\n    width: 40%;\r\n}\r\n\r\n#ongletsClient[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:last-child {\r\n    padding-left: 30px;\r\n    color: #000000;\r\n    font-size: 19px;\r\n    width: 60%;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-dialog {\r\n    border-radius: 20px;\r\n    width: 550px;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-dialog-header {\r\n    border-top-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    background-color: #2A95D1;\r\n    color: white;\r\n    padding: 0.5rem 1.5rem;\r\n    text-align: center;\r\n    -ms-flex-pack: normal;\r\n        justify-content: normal;\r\n    position: relative;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-dropdown-panel {\r\n    z-index: 15000 !important;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-dialog-footer {\r\n    border-bottom-left-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-dialog-footer span {\r\n    -ms-flex-item-align: center;\r\n        align-self: center;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-dialog .p-dialog-header .p-dialog-header-icon {\r\n    color: white;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-dialog .p-dialog-header-icons {\r\n    position: absolute;\r\n    right: 0px;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-dialog .p-dialog-header .p-dialog-title {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-buttonset .p-button {\r\n    width: 50%;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-dialog .p-dialog-content {\r\n    padding: 1.5rem 1.5rem 2rem 1.5rem;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-selectbutton .p-button {\r\n    background-color: #E4EDF2;\r\n    font-size: 14px;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogClient .p-selectbutton .p-button.p-highlight {\r\n    background-color: #2A95D1;\r\n}\r\n\r\n[_nghost-%COMP%] #buttonValider .p-button {\r\n    width: 122px;\r\n    height: 48px;\r\n    background-color: #2A95D1;\r\n}\r\n\r\n.blockForm[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    color: #676767;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.blockForm[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%] {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: left;\r\n        justify-content: left;\r\n    -ms-flex-align: end;\r\n        align-items: flex-end;\r\n}\r\n\r\n.blockForm[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #9A9FA8;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.blockForm[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 32px;\r\n    border-radius: 4px;\r\n}\r\n\r\n[_nghost-%COMP%] .blockForm .p-inputnumber {\r\n    width: 100%;\r\n    height: 32px;\r\n    border-radius: 4px;\r\n}\r\n\r\n[_nghost-%COMP%] .blockForm .p-dropdown {\r\n    width: 100%;\r\n    height: 34px;\r\n    border-radius: 4px;\r\n}\r\n\r\n[_nghost-%COMP%] .blockForm .p-dropdown .p-dropdown-label {\r\n    padding-top: 4px;\r\n}\r\n\r\n#blockLeft[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n#footerTable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    border-top: 1px solid #DDDDDD;\r\n    margin-left: 0px !important;\r\n    padding-left: 8px;\r\n    background: #f4f6f9;\r\n}\r\n\r\n#totalTTC[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    float: left;\r\n    font-size: 27px;\r\n    color: #898E99;\r\n}\r\n\r\n#totalEnAttente[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    font-size: 18px;\r\n    color: #898E99;\r\n}\r\n\r\n#totalPayees[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    font-size: 18px;\r\n    color: #898E99;\r\n}\r\n\r\n[_nghost-%COMP%] .p-tabview-panels {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n[_nghost-%COMP%] #ongletsClient #clientInfos .p-tabview-panels {\r\n    padding-top: 40px;\r\n}\r\n\r\n[_nghost-%COMP%] #ongletsClient .p-datatable .p-datatable-thead>tr>th {\r\n    \r\n    color: #2A95D1;\r\n    background-color: transparent;\r\n}\r\n\r\n[_nghost-%COMP%] #ongletsClient .p-datatable tr>th, [_nghost-%COMP%] #ongletsClient .p-datatable tr>td {\r\n    font-size: 0.75rem;\r\n    padding: 1rem .25rem;\r\n    text-align: center;\r\n}\r\n\r\n[_nghost-%COMP%] #ongletsClient .p-datatable .p-datatable-footer {\r\n    background-color: transparent;\r\n    text-align: end;\r\n    border: none;\r\n}\r\n\r\n[_nghost-%COMP%] .rSClass.p-inputtext {\r\n    border-color: red;\r\n}\r\n\r\n[_nghost-%COMP%] .nomClass.p-inputtext {\r\n    border-color: red;\r\n}\r\n\r\n[_nghost-%COMP%] .p-toast {\r\n    z-index: 11001 !important;\r\n}\r\n\r\n#noRecordsFactures[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n#noRecordsFactures[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    margin-top: 25%;\r\n    width: 70%;\r\n    position: relative;\r\n}\r\n\r\n#noRecordsFactures[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin: 15px;\r\n    color: #5D3D7D;\r\n}\r\n\r\n#noRecordsFactures[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 5px;\r\n    position: absolute;\r\n    left: 50%;\r\n    -ms-transform: translateX(-50%);\r\n        transform: translateX(-50%);\r\n}\r\n\r\n#blockLeft[_ngcontent-%COMP%] {\r\n    width: 56%;\r\n    padding-right: .8rem;\r\n}\r\n\r\n#blockApercu[_ngcontent-%COMP%] {\r\n    width: 44%;\r\n    padding-left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7OztJQUlJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBOzs7O0lBSUksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFHQSw0REFBNEQ7O0FBRTVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO3lCQUNxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUF1QjtRQUF2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxvQkFBYTtJQUFiLGFBQWE7SUFDYixzQkFBOEI7UUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMkJBQWtCO1FBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLG1CQUFxQjtRQUFyQixxQkFBcUI7SUFDckIsbUJBQXFCO1FBQXJCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJOztzQkFFa0I7SUFDbEIsY0FBYztJQUNkLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsK0JBQTJCO1FBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQiIsImZpbGUiOiJjbGllbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbm91dmVhdUNsaWVudEJsb2NrICNub3V2ZWF1Q2xpZW50IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuOmhvc3Q+Pj4jbm91dmVhdUNsaWVudEJsb2NrICNub3V2ZWF1Q2xpZW50IC5wLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTY0cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkE5NUQxO1xyXG59XHJcblxyXG4jdGl0cmVCbG9jayB7XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxufVxyXG5cclxuI2xvZ29UaXRyZSB7XHJcbiAgICB3aWR0aDogNDFweDtcclxufVxyXG5cclxuI3RpdHJlIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjMkE5NUQxO1xyXG59XHJcblxyXG4jc291c1RpdHJlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjODk4RTk5O1xyXG59XHJcblxyXG4jZmlsdHJlTGVmdEJsb2NrIC5jb250ZW50IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jZmlsdHJlUmlnaHRCbG9jayAuY29udGVudCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2ZpbHRyZVJpZ2h0QmxvY2sgLnAtYnV0dG9uIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDExMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJBOTVEMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2ZpbHRyZVJpZ2h0QmxvY2sgLnAtZHJvcGRvd24sXHJcbjpob3N0Pj4+I2ZpbHRyZVJpZ2h0QmxvY2sgLnAtYXV0b2NvbXBsZXRlIC5wLWF1dG9jb21wbGV0ZS1pbnB1dCxcclxuOmhvc3Q+Pj4jZmlsdHJlUmlnaHRCbG9jayAucC1jYWxlbmRhciAucC1pbnB1dHRleHQsXHJcbjpob3N0Pj4+I2ZpbHRyZVJpZ2h0QmxvY2sgLnAtaW5wdXRudW1iZXItaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICB3aWR0aDogODJweDtcclxufVxyXG5cclxuOmhvc3Q+Pj4jZmlsdHJlUmlnaHRCbG9jayAucC1pbnB1dHRleHQsXHJcbjpob3N0Pj4+I2ZpbHRyZVJpZ2h0QmxvY2sgLnAtZHJvcGRvd24gLnAtY2FsLFxyXG46aG9zdD4+PiNmaWx0cmVSaWdodEJsb2NrIC5wLWF1dG9jb21wbGV0ZSAucC1hdXRvY29tcGxldGUtaW5wdXQsXHJcbjpob3N0Pj4+I2ZpbHRyZVJpZ2h0QmxvY2sgLnAtaW5wdXRudW1iZXItaW5wdXQge1xyXG4gICAgcGFkZGluZzogNnB4IDBweCA2cHggNnB4O1xyXG4gICAgY29sb3I6ICM3ZDg2YTk7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2ZpbHRyZUxlZnRCbG9jayAucC1pbnB1dC1pY29uLWxlZnQge1xyXG4gICAgbWF4LXdpZHRoOiAzMjNweDtcclxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUVERUQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG59XHJcblxyXG46aG9zdD4+PiNmaWx0cmVMZWZ0QmxvY2sgLnAtaW5wdXQtaWNvbi1sZWZ0Pi5wLWlucHV0dGV4dCB7XHJcbiAgICBtYXgtd2lkdGg6IDMyM3B4O1xyXG4gICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRURFRDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2ZpbHRyZVJpZ2h0QmxvY2sgLnAtZHJvcGRvd24gLnAtZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICB3aWR0aDogMS4xcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG46aG9zdD4+PiNmaWx0cmVSaWdodEJsb2NrIC5wLWRyb3Bkb3duIC5wLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcblxyXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXHJcblxyXG46aG9zdD4+PiN0YWJsZUNsaWVudHMgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS10aGVhZD50cj50aCB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBjb2xvcjogIzJBOTVEMTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46aG9zdD4+PiN0YWJsZUNsaWVudHMgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOmhvc3Q+Pj4jdGFibGVDbGllbnRzIC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtdGJvZHk+dHIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzg5OEU5OTtcclxuICAgIGhlaWdodDogNTRweDtcclxufVxyXG5cclxuOmhvc3Q+Pj4jdGFibGVDbGllbnRzIC5wLWNvbXBvbmVudCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+I3RhYmxlQ2xpZW50cyAucC1kYXRhdGFibGUgLnAtZGF0YXRhYmxlLXRib2R5PnRyPnRkIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3Q+Pj4jdGFibGVDbGllbnRzIC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtdGJvZHk+dHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjpob3N0Pj4+I3RhYmxlQ2xpZW50cyAucC1kYXRhdGFibGUgLnAtZGF0YXRhYmxlLXRib2R5PnRyLnAtaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMUVBRjggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3Q+Pj4jdGFibGVDbGllbnRzIC5wLWRhdGF0YWJsZS12aXJ0dWFsLXNjcm9sbGFibGUtYm9keSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMobWF4KDEwMHZoLCA3NzBweCkgLSAzNTZweCk7XHJcbn1cclxuXHJcbiNibG9ja0FwZXJjdSB7XHJcbiAgICBtaW4taGVpZ2h0OiBtYXgoY2FsYygxMDB2aCAtIDYwcHgpLCA3MTBweCk7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2FwZXJjdSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB6LWluZGV4OiAyMDAwO1xyXG59XHJcblxyXG4jaGVhZGVyQXBlcmN1IHtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDE3LjV2aDtcclxuICAgIG1heC1oZWlnaHQ6IDE3LjV2aDsgKi9cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI2hlYWRlckFwZXJjdSBkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG46aG9zdD4+PiNoZWFkZXJBcGVyY3UgLnAtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjMkE5NUQxO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBwYWRkaW5nOiAuNHJlbTtcclxufVxyXG5cclxuI3JhcHBlbENsaWVudCBzcGFuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG4jcmFwcGVsQ2xpZW50IHNwYW4jbm9tQ2xpZW50QXBlcmN1IHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjNjc2NzY3O1xyXG59XHJcblxyXG4jcmFwcGVsQ2xpZW50IHNwYW4jcmVmZXJlbmNlQ2xpZW50QXBlcmN1IHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjNUQzRDdEO1xyXG59XHJcblxyXG4jcmFwcGVsQ2xpZW50IHNwYW4jY2F0ZWdvcmllQ2xpZW50QXBlcmN1IHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjNUQzRDdEO1xyXG59XHJcblxyXG4jb25nbGV0c0NsaWVudCBwLXRhYlZpZXcge1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+I29uZ2xldHNDbGllbnQgLnAtdGFidmlldyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+LnAtdGFidmlldyAucC10YWJ2aWV3LW5hdiBsaTpub3QoLnAtaGlnaGxpZ2h0KTpub3QoLnAtZGlzYWJsZWQpOmhvdmVyIC5wLXRhYnZpZXctbmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM2NzY3NjcgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3Q+Pj4ucC10YWJ2aWV3IC5wLWhpZ2hsaWdodCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzI1OTNEMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdD4+Pi5wLXRhYnZpZXcgLnAtdGFidmlldy1uYXYgbGkgLnAtdGFidmlldy1uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiNvbmdsZXRzQ2xpZW50IHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jb25nbGV0c0NsaWVudCB0YWJsZSB0ciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI29uZ2xldHNDbGllbnQgdGFibGUgdHI+dGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgY29sb3I6ICM4OThFOTk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4jb25nbGV0c0NsaWVudCB0YWJsZSB0cj50ZDpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuOmhvc3Q+Pj4jZGlhbG9nQ2xpZW50IC5wLWRpYWxvZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG59XHJcblxyXG46aG9zdD4+PiNkaWFsb2dDbGllbnQgLnAtZGlhbG9nLWhlYWRlciB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkE5NUQxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG46aG9zdD4+PiNkaWFsb2dDbGllbnQgLnAtZHJvcGRvd24tcGFuZWwge1xyXG4gICAgei1pbmRleDogMTUwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3Q+Pj4jZGlhbG9nQ2xpZW50IC5wLWRpYWxvZy1mb290ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuOmhvc3Q+Pj4jZGlhbG9nQ2xpZW50IC5wLWRpYWxvZy1mb290ZXIgc3BhbiB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2RpYWxvZ0NsaWVudCAucC1kaWFsb2cgLnAtZGlhbG9nLWhlYWRlciAucC1kaWFsb2ctaGVhZGVyLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdD4+PiNkaWFsb2dDbGllbnQgLnAtZGlhbG9nIC5wLWRpYWxvZy1oZWFkZXItaWNvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuOmhvc3Q+Pj4jZGlhbG9nQ2xpZW50IC5wLWRpYWxvZyAucC1kaWFsb2ctaGVhZGVyIC5wLWRpYWxvZy10aXRsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuOmhvc3Q+Pj4jZGlhbG9nQ2xpZW50IC5wLWJ1dHRvbnNldCAucC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuOmhvc3Q+Pj4jZGlhbG9nQ2xpZW50IC5wLWRpYWxvZyAucC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtIDJyZW0gMS41cmVtO1xyXG59XHJcblxyXG46aG9zdD4+PiNkaWFsb2dDbGllbnQgLnAtc2VsZWN0YnV0dG9uIC5wLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFREYyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG46aG9zdD4+PiNkaWFsb2dDbGllbnQgLnAtc2VsZWN0YnV0dG9uIC5wLWJ1dHRvbi5wLWhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkE5NUQxO1xyXG59XHJcblxyXG46aG9zdD4+PiNidXR0b25WYWxpZGVyIC5wLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTIycHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkE5NUQxO1xyXG59XHJcblxyXG4uYmxvY2tGb3JtIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5ibG9ja0Zvcm0gZGl2LmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5ibG9ja0Zvcm0gZGl2LmxhYmVsIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM5QTlGQTg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG4uYmxvY2tGb3JtIC5wLWlucHV0dGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuOmhvc3Q+Pj4uYmxvY2tGb3JtIC5wLWlucHV0bnVtYmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG46aG9zdD4+Pi5ibG9ja0Zvcm0gLnAtZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+LmJsb2NrRm9ybSAucC1kcm9wZG93biAucC1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4jYmxvY2tMZWZ0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2Zvb3RlclRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0RERERERDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjZmOTtcclxufVxyXG5cclxuI3RvdGFsVFRDIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIGNvbG9yOiAjODk4RTk5O1xyXG59XHJcblxyXG4jdG90YWxFbkF0dGVudGUge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM4OThFOTk7XHJcbn1cclxuXHJcbiN0b3RhbFBheWVlcyB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzg5OEU5OTtcclxufVxyXG5cclxuOmhvc3Q+Pj4ucC10YWJ2aWV3LXBhbmVscyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuOmhvc3Q+Pj4jb25nbGV0c0NsaWVudCAjY2xpZW50SW5mb3MgLnAtdGFidmlldy1wYW5lbHMge1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+I29uZ2xldHNDbGllbnQgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS10aGVhZD50cj50aCB7XHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgKi9cclxuICAgIGNvbG9yOiAjMkE5NUQxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjpob3N0Pj4+I29uZ2xldHNDbGllbnQgLnAtZGF0YXRhYmxlIHRyPnRoLFxyXG46aG9zdD4+PiNvbmdsZXRzQ2xpZW50IC5wLWRhdGF0YWJsZSB0cj50ZCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3Q+Pj4jb25nbGV0c0NsaWVudCAucC1kYXRhdGFibGUgLnAtZGF0YXRhYmxlLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuOmhvc3Q+Pj4uclNDbGFzcy5wLWlucHV0dGV4dCB7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxuOmhvc3Q+Pj4ubm9tQ2xhc3MucC1pbnB1dHRleHQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbjpob3N0Pj4+LnAtdG9hc3Qge1xyXG4gICAgei1pbmRleDogMTEwMDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuI25vUmVjb3Jkc0ZhY3R1cmVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI25vUmVjb3Jkc0ZhY3R1cmVzIGRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbm9SZWNvcmRzRmFjdHVyZXMgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGNvbG9yOiAjNUQzRDdEO1xyXG59XHJcblxyXG4jbm9SZWNvcmRzRmFjdHVyZXMgaW1nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4jYmxvY2tMZWZ0IHtcclxuICAgIHdpZHRoOiA1NiU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAuOHJlbTtcclxufVxyXG5cclxuI2Jsb2NrQXBlcmN1IHtcclxuICAgIHdpZHRoOiA0NCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn0iXX0= */"] });
    return ClientsComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients',
                templateUrl: './clients.component.html',
                styleUrls: ['./clients.component.css'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"] }, { type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["ClientServiceProxy"] }, { type: _shared_globalEventsService__WEBPACK_IMPORTED_MODULE_5__["GlobalEventsService"] }, { type: _shared_services_format_service__WEBPACK_IMPORTED_MODULE_8__["FormatService"] }, { type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["FactureServiceProxy"] }, { type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["DevisServiceProxy"] }, { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] }, { type: _shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogService"] }, { type: _shared_services_lazy_table_service__WEBPACK_IMPORTED_MODULE_9__["LazyTableService"] }]; }, { tableChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_app_table_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"], { static: false }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=clients-clients-module.js.map