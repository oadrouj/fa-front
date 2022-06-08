(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalogue-catalogue-module"],{

/***/ "0EKl":
/*!***********************************************!*\
  !*** ./src/app/catalogue/catalogue.module.ts ***!
  \***********************************************/
/*! exports provided: CatalogueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueModule", function() { return CatalogueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _catalogue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogue.component */ "L6jA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/primeng-shared.module */ "BhnP");







var CatalogueModule = /** @class */ (function () {
    function CatalogueModule() {
    }
    CatalogueModule.ɵfac = function CatalogueModule_Factory(t) { return new (t || CatalogueModule)(); };
    CatalogueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CatalogueModule });
    CatalogueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _catalogue_component__WEBPACK_IMPORTED_MODULE_2__["CatalogueComponent"] }
                ]),
                _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_4__["PrimengSharedModule"]
            ]] });
    return CatalogueModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CatalogueModule, { declarations: [_catalogue_component__WEBPACK_IMPORTED_MODULE_2__["CatalogueComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_4__["PrimengSharedModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        { path: '', component: _catalogue_component__WEBPACK_IMPORTED_MODULE_2__["CatalogueComponent"] }
                    ]),
                    _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_4__["PrimengSharedModule"]
                ],
                declarations: [_catalogue_component__WEBPACK_IMPORTED_MODULE_2__["CatalogueComponent"],]
            }]
    }], null, null); })();


/***/ }),

/***/ "L6jA":
/*!**************************************************!*\
  !*** ./src/app/catalogue/catalogue.component.ts ***!
  \**************************************************/
/*! exports provided: CatalogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueComponent", function() { return CatalogueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_table_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/table/table.component */ "9Rdk");
/* harmony import */ var _shared_enums_reference_prefix_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/enums/reference-prefix.enum */ "x+Hk");
/* harmony import */ var _shared_globalEventsService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/globalEventsService */ "PYeD");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "KALY");
/* harmony import */ var _shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/confirm-dialog.service */ "Lxc4");
/* harmony import */ var _shared_services_format_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/format.service */ "1R+M");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/toast.service */ "hlTd");
/* harmony import */ var _shared_services_calculations_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/services/calculations.service */ "n017");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_lazy_table_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/services/lazy-table.service */ "1XFo");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/selectbutton */ "5o1E");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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

































function CatalogueComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogueComponent_ng_template_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.accept(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogueComponent_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CatalogueComponent_ng_template_110_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Champ(s) obligatoire(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogueComponent_ng_template_110_Template_p_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function () { return { width: "50vw" }; };
var _c1 = function () { return { marginTop: "marginTop" }; };
var _c2 = function () { return ["reference", "client"]; };
var CatalogueComponent = /** @class */ (function () {
    function CatalogueComponent(_formatService, _catalogueServiceProxy, _toastService, _confirmDialogService, globalEventsService, formBuilder, _calculationsService, _lazyTableService) {
        var _this = this;
        this._formatService = _formatService;
        this._catalogueServiceProxy = _catalogueServiceProxy;
        this._toastService = _toastService;
        this._confirmDialogService = _confirmDialogService;
        this.globalEventsService = globalEventsService;
        this.formBuilder = formBuilder;
        this._calculationsService = _calculationsService;
        this._lazyTableService = _lazyTableService;
        this.title = 'Item';
        this.imageSrc = 'assets/img/CatalogueLogo.png';
        this.primaryColor = 'purple';
        this.secondaryColor = '';
        this.tableSelectionColor = 'var(--light-purple-color)';
        this.searchText = '';
        this.typeOptions = [
            { value: 'produit', label: 'produit' },
            { value: 'prestation', label: 'prestation' },
        ];
        this.cols = [
            {
                header: 'REFERENCE',
                field: 'reference',
                type: 'text',
                format: function (number, customPrefix) {
                    return _this._formatService.formatReferenceNumber(number, customPrefix ? customPrefix : _shared_enums_reference_prefix_enum__WEBPACK_IMPORTED_MODULE_3__["ReferencePrefix"].Catalogue);
                },
            },
            {
                header: "DATE D'AJOUT",
                field: 'addedDate',
                type: 'date',
                format: function (date) { return date.toDate(); },
            },
            {
                header: 'ITEM',
                field: 'designation',
                type: 'text',
            },
            {
                header: 'PRIX HT',
                field: 'htPrice',
                type: 'currency',
            },
            {
                header: 'UNITE',
                field: 'unity',
                type: 'number',
            },
            {
                header: 'TVA',
                field: 'tva',
                type: 'number',
                suffix: '%',
            },
            {
                header: 'TOTAL VENTES',
                field: 'totalSalesTTC',
                type: 'currency',
            },
        ];
        this.Currency = 'MAD';
        this.dialogDisplay = false;
        this.catalogueOptions = ['produit', 'prestation'];
        this.tvaOptions = [10, 15, 20];
        this.unityOptions = ['Heures', 'Kg'];
        this.favIcon = document.querySelector('#favIcon');
        this.filterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    }
    CatalogueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalEventsService.announcedThePageChangedColorSubject("var(--" + this.primaryColor + "-color");
        this.favIcon.href = 'assets/img/CatalogueLogo.png';
        this.initiateFormGroup();
        this._lazyTableService.rowSelected$.subscribe(function (res) {
            _this.selectedItem = res;
        });
    };
    CatalogueComponent.prototype.initiateFormGroup = function () {
        this.formGroup = this.formBuilder.group({
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            unity: [''],
            htPrice: [0],
            tva: [0],
            minimalQuantity: [1],
            dialogSelectedType: ['produit'],
        });
    };
    CatalogueComponent.prototype.getListApi = function (event) {
        var typeFilter = event.filters && event.filters.type && event.filters.type.value;
        return this._catalogueServiceProxy
            .getAllCatalogues(event.first, event.rows, event.globalFilter, event.sortField, event.sortOrder, typeFilter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (res) { return ({
            items: res.items,
            length: res.totalEntityItems,
            montantTotalAllDevis: 0,
        }); }));
    };
    CatalogueComponent.prototype.emitFilterEvent = function (filterType, value) {
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
            this.filterSubject.next({
                type: 'filterByButton',
                value: {
                    type: this.selectedType,
                },
            });
        }
    };
    CatalogueComponent.prototype.resetFilterFields = function () {
        this.selectedType = '';
        this.emitFilterEvent('filterByButton', null);
    };
    CatalogueComponent.prototype.refreshTable = function (item) {
        var index = this.tableChild.tableData.findIndex(function (val) { return val.id == item.id; });
        this.tableChild.tableData[index] = __assign({}, item);
        this.tableChild.tableData = __spread(this.tableChild.tableData);
    };
    CatalogueComponent.prototype.newCatalogue = function () {
        this.initiateFormGroup();
        this.dialogTitle = 'NOUVEL';
        this.dialogDisplay = true;
    };
    CatalogueComponent.prototype.closeDialog = function () {
        this.dialogDisplay = false;
        // this.formGroup.reset()
    };
    CatalogueComponent.prototype.editCatalogue = function () {
        if (this.selectedItem) {
            this.dialogTitle = 'MODIFIER';
            this.formGroup.setValue({
                designation: this.selectedItem.designation,
                description: this.selectedItem.description,
                unity: this.selectedItem.unity,
                htPrice: this.selectedItem.htPrice,
                tva: this.selectedItem.tva,
                minimalQuantity: this.selectedItem.minimalQuantity,
                dialogSelectedType: this.selectedItem.catalogueType,
            });
            this.dialogDisplay = true;
        }
        else {
            this.catchNoSelectedItem(this.selectedItem, 'Catalougue');
        }
    };
    CatalogueComponent.prototype.deleteCatalogue = function () {
        var _this = this;
        if (this.selectedItem) {
            this._confirmDialogService.deleteConfirm({
                acceptCallback: function () {
                    _this._catalogueServiceProxy
                        .deleteCatalogue(_this.selectedItem.id)
                        .subscribe(function (res) {
                        if (res) {
                            _this._lazyTableService.emitDataOperation = {
                                action: 'remove',
                                payload: _this.selectedItem.id,
                            };
                            _this._toastService.success({
                                summary: 'Opération réussie',
                                detail: 'Le catalogue est supprimé avec succès',
                            });
                        }
                        else {
                            //TODO: propagate this method to other components
                            _this._toastService.deleteInternalError();
                        }
                    });
                },
                rejectCallback: function () { },
            });
        }
        else {
            this.catchNoSelectedItem(this.selectedItem, 'catalougue');
        }
    };
    CatalogueComponent.prototype.submit = function () {
        var _this = this;
        if (this.formGroup.valid) {
            if (this.dialogTitle == 'NOUVEL') {
                var createCatalogInput_1 = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["CreateCatalogueInput"]({
                    designation: this.formGroup.value.designation,
                    description: this.formGroup.value.description,
                    catalogueType: this.formGroup.value.dialogSelectedType,
                    unity: this.formGroup.value.unity,
                    htPrice: this.formGroup.value.htPrice || 0,
                    tva: this.formGroup.value.tva || 0,
                    minimalQuantity: this.formGroup.value.minimalQuantity || 1,
                });
                this._catalogueServiceProxy
                    .createCatalogue(createCatalogInput_1)
                    .subscribe(function (res) {
                    if (res) {
                        _this._toastService.success({
                            summary: 'Opértion réussie',
                            detail: 'Vous avez ajouté un nouvel item',
                        });
                        _this.selectedItem = __assign(__assign({}, createCatalogInput_1), { id: res.id, reference: res.reference, addedDate: res.addedDate, referencePrefix: _shared_enums_reference_prefix_enum__WEBPACK_IMPORTED_MODULE_3__["ReferencePrefix"].Catalogue, totalSalesTTC: 0, totalUnitsSold: 0 });
                        _this._lazyTableService.emitDataOperation = {
                            action: 'add',
                            payload: _this.selectedItem,
                        };
                        _this.updateTtcPrice('ttcPrice');
                        _this.closeDialog();
                    }
                    else {
                        _this._toastService.internalError();
                    }
                });
            }
            else if (this.dialogTitle == 'MODIFIER') {
                var updateCatalogInput_1 = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["UpdateCatalogueInput"]({
                    id: this.selectedItem.id,
                    designation: this.formGroup.value.designation,
                    description: this.formGroup.value.description,
                    catalogueType: this.formGroup.value.dialogSelectedType,
                    unity: this.formGroup.value.unity,
                    htPrice: this.formGroup.value.htPrice || 0,
                    tva: this.formGroup.value.tva || 0,
                    minimalQuantity: this.formGroup.value.minimalQuantity || 1,
                });
                this._catalogueServiceProxy
                    .updateCatalogue(updateCatalogInput_1)
                    .subscribe(function (res) {
                    if (res) {
                        _this._toastService.success({
                            summary: 'Opértion réussie',
                            detail: 'Vous avez modifié ce item avec succès',
                        });
                        _this.selectedItem = __assign(__assign({}, _this.selectedItem), updateCatalogInput_1);
                        _this.refreshTable(__assign({}, _this.selectedItem));
                        _this.closeDialog();
                    }
                    else {
                        _this._toastService.internalError();
                    }
                });
            }
        }
        else {
            this._toastService.error({
                summary: 'Erreur',
                detail: 'Veuillez remplir le chemps Désignation',
            });
        }
    };
    CatalogueComponent.prototype.catalogueFormatReferenceNumber = function (catalogue) {
        return (catalogue &&
            this._formatService.formatReferenceNumber(catalogue.reference, catalogue.referencePrefix
                ? catalogue.referencePrefix
                : _shared_enums_reference_prefix_enum__WEBPACK_IMPORTED_MODULE_3__["ReferencePrefix"].Catalogue));
    };
    CatalogueComponent.prototype.isNullOrEmpty = function (str) {
        return str == undefined || str.toString().trim() == '';
    };
    CatalogueComponent.prototype.replaceIfIsNullOrEmpty = function (key) {
        if (!this.selectedItem || this.isNullOrEmpty(this.selectedItem[key])) {
            return '...';
        }
        else {
            this.updateTtcPrice(key);
            return this.selectedItem[key];
        }
    };
    CatalogueComponent.prototype.updateTtcPrice = function (key) {
        if (key == 'ttcPrice') {
            this.selectedItem.ttcPrice = this._calculationsService.calculateTTC(this.selectedItem.htPrice, this.selectedItem.tva);
        }
    };
    CatalogueComponent.prototype.catchNoSelectedItem = function (selectedItem, element) {
        if (!selectedItem) {
            this._toastService.error({
                summary: "Aucun " + element + " s\u00E9lectionn\u00E9",
                detail: "S\u00E9l\u00E9ctionner un " + element,
            });
            return false;
        }
    };
    CatalogueComponent.ɵfac = function CatalogueComponent_Factory(t) { return new (t || CatalogueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_format_service__WEBPACK_IMPORTED_MODULE_7__["FormatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["CatalogueServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_globalEventsService__WEBPACK_IMPORTED_MODULE_4__["GlobalEventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_calculations_service__WEBPACK_IMPORTED_MODULE_9__["CalculationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_lazy_table_service__WEBPACK_IMPORTED_MODULE_12__["LazyTableService"])); };
    CatalogueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogueComponent, selectors: [["app-catalogue"]], viewQuery: function CatalogueComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_app_table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableChild = _t.first);
        } }, decls: 111, vars: 56, consts: [["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"], ["cd", ""], ["pTemplate", "footer"], ["styleClass", "styleClass", 3, "baseZIndex"], [1, "main", "pt-5"], [1, "grid", "mx-0"], [1, "leftSection", "md:col-12", "p-0", "positon-relative"], [1, "pl-3"], [1, "header"], [1, "flex", "justify-content-between", "align-items-start"], [1, "flex", "flex-wrap", "align-items-start"], [1, "mr-3", 3, "src"], [1, "title", 3, "ngClass"], ["pButton", "", 1, "btn-new-devis", "text-normal", 3, "ngClass", "label", "click"], [1, "subtitle", "pt-2"], [1, "flex", "justify-content-between"], [1, "searchInput", "p-input-icon-left", "mt-2", "shadow-1"], [1, "pi", "pi-search"], ["pInputText", "", "placeholder", "Rechercher ici", 1, "", 3, "ngModel", "ngModelChange", "input"], [1, "flex", "align-items-center", "filterContainer"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Type", 3, "options", "ngModel", "showClear", "ngModelChange", "onChange"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa fa-undo", 3, "ngClass", "click"], [3, "cols", "currency", "styleClass", "styleId", "highlightColorInput", "filterEvent", "getListApi$", "globalFilterFields"], ["dt1", ""], [1, "rightSection", "col-12", "p-0"], [1, "devis-details"], [1, "header", "flex", "justify-content-end"], ["pButton", "", "label", "Modifier", 1, "p-button-text", 3, "click"], ["pButton", "", "label", "Supprimer", 1, "p-button-text", 3, "click"], [1, "content", "p-4"], [1, "flex", "flex-column", "px-1"], [1, "lineHeight-18", "text-2xl"], [1, "color-purple", "text-xl"], [1, "grid", "pt-3", "w-25rem"], [1, "col-7"], [1, "col-5"], [1, "col-5", "color-purple"], ["id", "dialogCatalogue", 3, "header", "visible", "modal", "baseZIndex", "draggable", "resizable", "visibleChange"], ["dialog", ""], [3, "formGroup"], ["formControlName", "dialogSelectedType", 1, "uppercase", 3, "options"], [1, "grid", "blockForm", "mx-3", "mt-3", "mb-2"], [1, "col-5", "label"], [1, "red-color"], ["type", "text", "pInputText", "", "placeholder", "Text", "formControlName", "designation"], ["type", "text", "pInputText", "", "placeholder", "Text", "formControlName", "description"], ["type", "text", "pInputText", "", "formControlName", "unity"], ["type", "text", "pInputText", "", "formControlName", "htPrice"], ["formControlName", "tva", "id", "tva", 3, "suffix"], ["formControlName", "minimalQuantity", 3, "suffix"], ["type", "button", "pButton", "", "icon", "pi pi-check", "label", "Oui", 3, "click"], ["type", "button", "pButton", "", "icon", "pi pi-times", "label", "Non", 1, "p-button-danger", 3, "click"], ["id", "buttonValider", "label", "Valider", 3, "click"]], template: function CatalogueComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-confirmDialog", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CatalogueComponent_ng_template_2_Template, 2, 0, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-toast", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogueComponent_Template_button_click_14_listener() { return ctx.newCatalogue(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tous vos produits et services en un seul endroit !");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CatalogueComponent_Template_input_ngModelChange_20_listener($event) { return ctx.searchText = $event; })("input", function CatalogueComponent_Template_input_input_20_listener($event) { return ctx.emitFilterEvent("filterByInput", $event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p-dropdown", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CatalogueComponent_Template_p_dropdown_ngModelChange_22_listener($event) { return ctx.selectedType = $event; })("onChange", function CatalogueComponent_Template_p_dropdown_onChange_22_listener() { return ctx.emitFilterEvent("filterByButton", null); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogueComponent_Template_button_click_23_listener() { return ctx.resetFilterFields(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-table", 22, 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogueComponent_Template_button_click_29_listener() { return ctx.editCatalogue(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogueComponent_Template_button_click_30_listener() { return ctx.deleteCatalogue(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Unit\u00E9");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Devise");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Prix HT");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "TVA");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Prix TTC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Quantit\u00E9 minimale");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Total Ventes TTC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Total Unit\u00E9s vendues");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p-dialog", 37, 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function CatalogueComponent_Template_p_dialog_visibleChange_73_listener($event) { return ctx.dialogDisplay = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "form", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "p-selectButton", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "D\u00E9signation ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Unit\u00E9");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Prix (MAD)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "TVA");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "p-inputNumber", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Quantit\u00E9 minimale");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "p-inputNumber", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, CatalogueComponent_ng_template_110_Template, 5, 0, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseZIndex", 10000);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseZIndex", 20000);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "color-" + ctx.primaryColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + ctx.primaryColor)("label", "Nouvel " + ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.typeOptions)("ngModel", ctx.selectedType)("showClear", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-button-rounded ml-2 bg-" + ctx.primaryColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols)("currency", ctx.Currency)("styleClass", "table")("styleId", "devisList")("highlightColorInput", ctx.tableSelectionColor)("filterEvent", ctx.filterSubject.asObservable())("getListApi$", ctx.getListApi)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.replaceIfIsNullOrEmpty("designation"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.replaceIfIsNullOrEmpty("description"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.catalogueFormatReferenceNumber(ctx.selectedItem), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 51, ctx.replaceIfIsNullOrEmpty("catalogueType")), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.replaceIfIsNullOrEmpty("unity"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Currency);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.replaceIfIsNullOrEmpty("htPrice"), " ", ctx.Currency, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.replaceIfIsNullOrEmpty("tva"), "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.replaceIfIsNullOrEmpty("ttcPrice"), " ", ctx.Currency, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.replaceIfIsNullOrEmpty("minimalQuantity"), " ", ctx.replaceIfIsNullOrEmpty("unity"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.replaceIfIsNullOrEmpty("totalSalesTTC"), " ", ctx.Currency, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.replaceIfIsNullOrEmpty("totalUnitsSold"), " ", ctx.replaceIfIsNullOrEmpty("unity"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("header", "", ctx.dialogTitle, " ITEM");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.dialogDisplay)("modal", true)("baseZIndex", 10000)("draggable", false)("resizable", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.catalogueOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suffix", " %");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suffix", " " + ctx.formGroup.get("unity").value);
        } }, directives: [primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__["ConfirmDialog"], primeng_api__WEBPACK_IMPORTED_MODULE_14__["PrimeTemplate"], primeng_toast__WEBPACK_IMPORTED_MODULE_15__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], primeng_button__WEBPACK_IMPORTED_MODULE_17__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__["Dropdown"], _app_table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["Dialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_21__["SelectButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_22__["InputNumber"], primeng_button__WEBPACK_IMPORTED_MODULE_17__["Button"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["TitleCasePipe"]], styles: ["[_nghost-%COMP%] .p-button {\r\n    border: none;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    padding-right: .8rem;\r\n    background: #f1f6ff;\r\n    min-height: 100vh;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n    padding-right: 1.5rem;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 1.875rem;\r\n}\r\n\r\n.btn-new-devis[_ngcontent-%COMP%] {\r\n    height: 48px;\r\n}\r\n\r\n.subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    color: #898e99;\r\n}\r\n\r\n[_nghost-%COMP%] .searchInput.p-input-icon-left {\r\n    max-width: 216px;\r\n    max-height: 35px;\r\n    width: 100%;\r\n    background-color: #F1EDED;\r\n    border-radius: 24px;\r\n}\r\n\r\n[_nghost-%COMP%] .searchInput.p-input-icon-left>.p-inputtext {\r\n    max-height: 35px;\r\n    width: 100%;\r\n    background-color: #F1EDED;\r\n    border: none;\r\n    border-radius: 24px;\r\n}\r\n\r\ni.pi-search[_ngcontent-%COMP%] {\r\n    font-weight: 800;\r\n}\r\n\r\n.searchInput[_ngcontent-%COMP%], i.pi-search[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n}\r\n\r\n[_nghost-%COMP%] .filterContainer .p-dropdown, [_nghost-%COMP%] .filterContainer .p-autocomplete .p-autocomplete-input, [_nghost-%COMP%] .filterContainer .p-calendar .p-inputtext, [_nghost-%COMP%] .filterContainer .p-inputnumber-input {\r\n    border: none;\r\n    margin-right: 6px;\r\n    width: 82px;\r\n}\r\n\r\n[_nghost-%COMP%] .filterContainer .p-inputtext, [_nghost-%COMP%] .filterContainer .p-dropdown .p-cal, [_nghost-%COMP%] .filterContainer .p-autocomplete .p-autocomplete-input, [_nghost-%COMP%] .filterContainer .p-inputnumber-input {\r\n    padding: 6px 0px 6px 6px;\r\n    color: #7d86a9;\r\n    font-size: 0.8rem;\r\n    font-weight: 500;\r\n}\r\n\r\n[_nghost-%COMP%] .filterContainer .p-dropdown .pi-chevron-down {\r\n    font-size: 0.75rem;\r\n}\r\n\r\n.filterBtn[_ngcontent-%COMP%] {\r\n    max-height: 35px;\r\n    font-size: 1rem;\r\n    padding: 0.5rem .8rem;\r\n}\r\n\r\n[_nghost-%COMP%] .filterBtn .pi-filter {\r\n    font-size: 0.85rem;\r\n}\r\n\r\n[_nghost-%COMP%]     #devisList .p-datatable {\r\n    margin-top: 1rem;\r\n    padding-right: .5rem;\r\n}\r\n\r\n[_nghost-%COMP%] #devisList .p-datatable .p-datatable-tbody>tr {\r\n    background: transparent;\r\n}\r\n\r\n[_nghost-%COMP%] #devisList .p-datatable .p-datatable-thead>tr>th {\r\n    font-size: 0.85rem;\r\n    padding: 0px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    background-color: transparent;\r\n}\r\n\r\n[_nghost-%COMP%]     #devisList .p-datatable .p-datatable-thead>tr>th, [_nghost-%COMP%]     #devisList .p-datatable .p-datatable-scrollable-header {\r\n    background: transparent;\r\n    color: var(--purple-color);\r\n}\r\n\r\n[_nghost-%COMP%]     #devisList .p-datatable .p-datatable-tbody>tr>td {\r\n    font-size: 0.85rem;\r\n    color: #898e99;\r\n    text-align: center;\r\n    padding: .8rem .1rem;\r\n}\r\n\r\n\r\n\r\n.devisTotal[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0rem;\r\n    min-height: 3.2rem;\r\n    padding-left: 1.5rem;\r\n    padding-right: 20%;\r\n    border-top: 1px solid var(--light-gray-color);\r\n}\r\n\r\n.devisTotal[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\r\n    font-size: 1.42rem;\r\n}\r\n\r\n.devisTotal[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\r\n    font-size: 0.95rem;\r\n}\r\n\r\n\r\n\r\n.devis-details[_ngcontent-%COMP%] {\r\n    background-color: #faf9f9;\r\n    \r\n    min-height: max(calc(100vh - 60px), 710px);\r\n    margin-bottom: 0.7rem;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 50%);\r\n}\r\n\r\n.devis-details[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 20px 20px;\r\n    border-bottom: 1px solid #d8d8d8;\r\n}\r\n\r\n.devis-details[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .p-button-text[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n    padding: 3px;\r\n    color: var(--purple-color);\r\n}\r\n\r\n[_nghost-%COMP%]     .devis-details .p-datatable {\r\n    margin-top: .6rem;\r\n}\r\n\r\n.leftSection[_ngcontent-%COMP%] {\r\n    width: 56%;\r\n}\r\n\r\n.rightSection[_ngcontent-%COMP%] {\r\n    width: 44%;\r\n}\r\n\r\n.lineHeight-18[_ngcontent-%COMP%] {\r\n    line-height: 2rem;\r\n}\r\n\r\n.devis-details[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.devis-details[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%] {\r\n    color: #898e99;\r\n    padding-top: 0;\r\n    padding-bottom: 8px;\r\n}\r\n\r\n.devis-details[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%] {\r\n    padding-top: 0;\r\n    padding-bottom: 8px;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogCatalogue .p-dialog {\r\n    border-radius: 20px;\r\n    width: 460px;\r\n    height: 475px;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogCatalogue .p-dialog-header {\r\n    border-top-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    background-color: var(--purple-color);\r\n    color: white;\r\n    padding: 0.5rem 1.5rem;\r\n    text-align: center;\r\n    -ms-flex-pack: normal;\r\n        justify-content: normal;\r\n    position: relative;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogCatalogue .p-dialog-footer {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n    border-bottom-left-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogCatalogue .p-dialog-footer span {\r\n    -ms-flex-item-align: center;\r\n        align-self: center;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogCatalogue .p-dialog .p-dialog-header .p-dialog-header-icon {\r\n    color: white;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogCatalogue .p-dialog .p-dialog-header-icons {\r\n    position: absolute;\r\n    right: 0px;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogCatalogue .p-dialog .p-dialog-header .p-dialog-title {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogCatalogue .p-buttonset .p-button {\r\n    width: 50%;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogCatalogue .p-dialog .p-dialog-content {\r\n    padding: 1.25rem 1.5rem;\r\n    overflow: visible;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogCatalogue .p-selectbutton .p-button {\r\n    background-color: #E4EDF2;\r\n    font-size: 14px;\r\n}\r\n\r\n[_nghost-%COMP%] #dialogCatalogue .p-selectbutton .p-button.p-highlight {\r\n    background-color: var(--purple-color);\r\n}\r\n\r\n[_nghost-%COMP%] #buttonValider .p-button {\r\n    width: 122px;\r\n    height: 44px;\r\n    background-color: var(--purple-color);\r\n}\r\n\r\n.blockForm[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    color: #676767;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.blockForm[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.blockForm[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%] {\r\n    margin: auto\r\n}\r\n\r\n.blockForm[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #9A9FA8;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.blockForm[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n.blockForm[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 32px;\r\n    border-radius: 4px;\r\n}\r\n\r\n[_nghost-%COMP%] .blockForm .p-inputnumber {\r\n    width: 100%;\r\n    height: 32px;\r\n    border-radius: 4px;\r\n}\r\n\r\n[_nghost-%COMP%] .blockForm .p-dropdown {\r\n    width: 100%;\r\n    height: 34px;\r\n    border-radius: 4px;\r\n}\r\n\r\n[_nghost-%COMP%] .blockForm .p-dropdown .p-dropdown-label {\r\n    padding-top: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2d1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7OztJQUlJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBOzs7O0lBSUksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUdBLHdCQUF3Qjs7QUFFeEI7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFHQSxrQkFBa0I7O0FBRWxCO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBdUI7UUFBdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHNCQUE4QjtRQUE5Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDJCQUFrQjtRQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImNhdGFsb2d1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q+Pj4ucC1idXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAuOHJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmMWY2ZmY7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5oZWFkZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxufVxyXG5cclxuLmJ0bi1uZXctZGV2aXMge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgY29sb3I6ICM4OThlOTk7XHJcbn1cclxuXHJcbjpob3N0Pj4+LnNlYXJjaElucHV0LnAtaW5wdXQtaWNvbi1sZWZ0IHtcclxuICAgIG1heC13aWR0aDogMjE2cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFFREVEO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxufVxyXG5cclxuOmhvc3Q+Pj4uc2VhcmNoSW5wdXQucC1pbnB1dC1pY29uLWxlZnQ+LnAtaW5wdXR0ZXh0IHtcclxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUVERUQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG59XHJcblxyXG5pLnBpLXNlYXJjaCB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uc2VhcmNoSW5wdXQsXHJcbmkucGktc2VhcmNoIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOmhvc3Q+Pj4uZmlsdGVyQ29udGFpbmVyIC5wLWRyb3Bkb3duLFxyXG46aG9zdD4+Pi5maWx0ZXJDb250YWluZXIgLnAtYXV0b2NvbXBsZXRlIC5wLWF1dG9jb21wbGV0ZS1pbnB1dCxcclxuOmhvc3Q+Pj4uZmlsdGVyQ29udGFpbmVyIC5wLWNhbGVuZGFyIC5wLWlucHV0dGV4dCxcclxuOmhvc3Q+Pj4uZmlsdGVyQ29udGFpbmVyIC5wLWlucHV0bnVtYmVyLWlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgd2lkdGg6IDgycHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+LmZpbHRlckNvbnRhaW5lciAucC1pbnB1dHRleHQsXHJcbjpob3N0Pj4+LmZpbHRlckNvbnRhaW5lciAucC1kcm9wZG93biAucC1jYWwsXHJcbjpob3N0Pj4+LmZpbHRlckNvbnRhaW5lciAucC1hdXRvY29tcGxldGUgLnAtYXV0b2NvbXBsZXRlLWlucHV0LFxyXG46aG9zdD4+Pi5maWx0ZXJDb250YWluZXIgLnAtaW5wdXRudW1iZXItaW5wdXQge1xyXG4gICAgcGFkZGluZzogNnB4IDBweCA2cHggNnB4O1xyXG4gICAgY29sb3I6ICM3ZDg2YTk7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbjpob3N0Pj4+LmZpbHRlckNvbnRhaW5lciAucC1kcm9wZG93biAucGktY2hldnJvbi1kb3duIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxufVxyXG5cclxuLmZpbHRlckJ0biB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIC44cmVtO1xyXG59XHJcblxyXG46aG9zdD4+Pi5maWx0ZXJCdG4gLnBpLWZpbHRlciB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAjZGV2aXNMaXN0IC5wLWRhdGF0YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XHJcbn1cclxuXHJcbjpob3N0Pj4+I2RldmlzTGlzdCAucC1kYXRhdGFibGUgLnAtZGF0YXRhYmxlLXRib2R5PnRyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46aG9zdD4+PiNkZXZpc0xpc3QgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS10aGVhZD50cj50aCB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAjZGV2aXNMaXN0IC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtdGhlYWQ+dHI+dGgsXHJcbjpob3N0IDo6bmctZGVlcCAjZGV2aXNMaXN0IC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtc2Nyb2xsYWJsZS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlLWNvbG9yKTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwICNkZXZpc0xpc3QgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS10Ym9keT50cj50ZCB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBjb2xvcjogIzg5OGU5OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC44cmVtIC4xcmVtO1xyXG59XHJcblxyXG5cclxuLyogTGlzdCBkZXRhaWxzIGZvb3RlciAqL1xyXG5cclxuLmRldmlzVG90YWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcmVtO1xyXG4gICAgbWluLWhlaWdodDogMy4ycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheS1jb2xvcik7XHJcbn1cclxuXHJcbi5kZXZpc1RvdGFsIDpudGgtY2hpbGQoMSkge1xyXG4gICAgZm9udC1zaXplOiAxLjQycmVtO1xyXG59XHJcblxyXG4uZGV2aXNUb3RhbCA6bnRoLWNoaWxkKDIpIHtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuXHJcbi8qIERldmlzIGRldGFpbHMgKi9cclxuXHJcbi5kZXZpcy1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWY5Zjk7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiA3ODJweDsgKi9cclxuICAgIG1pbi1oZWlnaHQ6IG1heChjYWxjKDEwMHZoIC0gNjBweCksIDcxMHB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCA1MCUpO1xyXG59XHJcblxyXG4uZGV2aXMtZGV0YWlscyAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG59XHJcblxyXG4uZGV2aXMtZGV0YWlscyAuaGVhZGVyIC5wLWJ1dHRvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUtY29sb3IpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRldmlzLWRldGFpbHMgLnAtZGF0YXRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IC42cmVtO1xyXG59XHJcblxyXG4ubGVmdFNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDU2JTtcclxufVxyXG5cclxuLnJpZ2h0U2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNDQlO1xyXG59XHJcblxyXG4ubGluZUhlaWdodC0xOCB7XHJcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcclxufVxyXG5cclxuLmRldmlzLWRldGFpbHMgLmNvbnRlbnQgLmdyaWQge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uZGV2aXMtZGV0YWlscyAuY29udGVudCAuZ3JpZCAuY29sLTcge1xyXG4gICAgY29sb3I6ICM4OThlOTk7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5kZXZpcy1kZXRhaWxzIC5jb250ZW50IC5ncmlkIC5jb2wtNSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2RpYWxvZ0NhdGFsb2d1ZSAucC1kaWFsb2cge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA0NjBweDtcclxuICAgIGhlaWdodDogNDc1cHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2RpYWxvZ0NhdGFsb2d1ZSAucC1kaWFsb2ctaGVhZGVyIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1jb2xvcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2RpYWxvZ0NhdGFsb2d1ZSAucC1kaWFsb2ctZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2RpYWxvZ0NhdGFsb2d1ZSAucC1kaWFsb2ctZm9vdGVyIHNwYW4ge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdD4+PiNkaWFsb2dDYXRhbG9ndWUgLnAtZGlhbG9nIC5wLWRpYWxvZy1oZWFkZXIgLnAtZGlhbG9nLWhlYWRlci1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3Q+Pj4jZGlhbG9nQ2F0YWxvZ3VlIC5wLWRpYWxvZyAucC1kaWFsb2ctaGVhZGVyLWljb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2RpYWxvZ0NhdGFsb2d1ZSAucC1kaWFsb2cgLnAtZGlhbG9nLWhlYWRlciAucC1kaWFsb2ctdGl0bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0Pj4+I2RpYWxvZ0NhdGFsb2d1ZSAucC1idXR0b25zZXQgLnAtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbjpob3N0Pj4+I2RpYWxvZ0NhdGFsb2d1ZSAucC1kaWFsb2cgLnAtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuOmhvc3Q+Pj4jZGlhbG9nQ2F0YWxvZ3VlIC5wLXNlbGVjdGJ1dHRvbiAucC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RURGMjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuOmhvc3Q+Pj4jZGlhbG9nQ2F0YWxvZ3VlIC5wLXNlbGVjdGJ1dHRvbiAucC1idXR0b24ucC1oaWdobGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWNvbG9yKTtcclxufVxyXG5cclxuOmhvc3Q+Pj4jYnV0dG9uVmFsaWRlciAucC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEyMnB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWNvbG9yKTtcclxufVxyXG5cclxuLmJsb2NrRm9ybSAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYmxvY2tGb3JtIGRpdiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4uYmxvY2tGb3JtIGRpdi5sYWJlbCB7XHJcbiAgICBtYXJnaW46IGF1dG9cclxufVxyXG5cclxuLmJsb2NrRm9ybSBkaXYubGFiZWwgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzlBOUZBODtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbi5ibG9ja0Zvcm0gZGl2LmxhYmVsIHNwYW4gc3BhbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYmxvY2tGb3JtIC5wLWlucHV0dGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuOmhvc3Q+Pj4uYmxvY2tGb3JtIC5wLWlucHV0bnVtYmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG46aG9zdD4+Pi5ibG9ja0Zvcm0gLnAtZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+LmJsb2NrRm9ybSAucC1kcm9wZG93biAucC1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59Il19 */"] });
    return CatalogueComponent;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catalogue',
                templateUrl: './catalogue.component.html',
                styleUrls: ['./catalogue.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_format_service__WEBPACK_IMPORTED_MODULE_7__["FormatService"] }, { type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["CatalogueServiceProxy"] }, { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] }, { type: _shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogService"] }, { type: _shared_globalEventsService__WEBPACK_IMPORTED_MODULE_4__["GlobalEventsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_calculations_service__WEBPACK_IMPORTED_MODULE_9__["CalculationsService"] }, { type: _shared_services_lazy_table_service__WEBPACK_IMPORTED_MODULE_12__["LazyTableService"] }]; }, { tableChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_app_table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], { static: false }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=catalogue-catalogue-module.js.map