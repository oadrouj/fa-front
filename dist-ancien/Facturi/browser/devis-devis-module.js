(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["devis-devis-module"],{

/***/ "/HKH":
/*!******************************************!*\
  !*** ./src/app/devis/devis.component.ts ***!
  \******************************************/
/*! exports provided: DevisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevisComponent", function() { return DevisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_enums_DialogState_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/enums/DialogState.enum */ "35Vz");
/* harmony import */ var _shared_globalEventsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/globalEventsService */ "PYeD");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "KALY");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/toast.service */ "hlTd");
/* harmony import */ var _devis_dialog_devis_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devis-dialog/devis-dialog.component */ "F8Wo");
/* harmony import */ var _shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/confirm-dialog.service */ "Lxc4");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/table/table.component */ "9Rdk");
/* harmony import */ var _app_factures_factures_dialog_factures_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/factures/factures-dialog/factures-dialog.component */ "irdR");
/* harmony import */ var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/session/app-session.service */ "tvsI");
/* harmony import */ var _shared_components_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/components/item-preview/item-preview.component */ "K616");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _shared_services_estimate_invoice_status_state_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/services/estimate-invoice-status-state.service */ "DVXe");
/* harmony import */ var _shared_services_lazy_table_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/services/lazy-table.service */ "1XFo");
/* harmony import */ var _shared_services_preview_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/services/preview.service */ "gjAz");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/autocomplete */ "V5BG");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
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












































var _c0 = ["factureDialog"];
var _c1 = ["prv"];
var _c2 = function () { return { width: "50vw" }; };
var _c3 = function () { return { marginTop: "marginTop" }; };
var _c4 = function () { return ["reference", "client", "dateEmission", "echeancePaiement", "montantTtc", "statut"]; };
var DevisComponent = /** @class */ (function () {
    function DevisComponent(_devisServiceProxy, _clientServiceProxy, _toastService, _confirmDialogService, dialogService, globalEventsService, _sessionService, _fileApiServiceProxy, _sanitizer, _estimateInvoiceStatusStateService, _lazyTableService, _previewService, _infosEntrepriseService) {
        var _this = this;
        this._devisServiceProxy = _devisServiceProxy;
        this._clientServiceProxy = _clientServiceProxy;
        this._toastService = _toastService;
        this._confirmDialogService = _confirmDialogService;
        this.dialogService = dialogService;
        this.globalEventsService = globalEventsService;
        this._sessionService = _sessionService;
        this._fileApiServiceProxy = _fileApiServiceProxy;
        this._sanitizer = _sanitizer;
        this._estimateInvoiceStatusStateService = _estimateInvoiceStatusStateService;
        this._lazyTableService = _lazyTableService;
        this._previewService = _previewService;
        this._infosEntrepriseService = _infosEntrepriseService;
        this.sampleComponent = _app_factures_factures_dialog_factures_dialog_component__WEBPACK_IMPORTED_MODULE_12__["FacturesDialogComponent"];
        this.firstLoad = true;
        this.favIcon = document.querySelector('#favIcon');
        this.updateEstimateStatusToValid = function (data) {
            if (data) {
                _this.updateApiCall(_this.selectedDevisItem.id, _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Valide, 'Le devis est validé');
            }
        };
        this.title = 'Devis';
        this.entrepriseName = '';
        this.imageSrc = 'assets/img/DevisLogo.png';
        this.primaryColor = 'green';
        this.secondaryColor = '';
        this.tableSelectionColor = 'var(--light-green-color)';
        this.searchText = '';
        this.echeanceOptions = [15, 20, 30];
        this.statutOptions = [
            { value: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Cree, label: 'Créé' },
            { value: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Valide, label: 'Validé' },
            { value: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Converti, label: 'Converti' },
            { value: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Rejete, label: 'Rejeté' },
            { value: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Expire, label: 'Expiré' },
        ];
        this.cols = [
            {
                header: 'REFERENCE',
                field: 'reference',
                type: 'text',
            },
            {
                header: 'CLIENT',
                field: 'client.displayName',
                type: 'text',
            },
            {
                header: 'EMISSION',
                field: 'dateEmission',
                type: 'date',
                format: function (date) { return (date._i ? new Date(date._i) : new Date(date._d)); },
            },
            /* Hidding Echeance
            {
              header: 'ECHEANCE',
              field: 'echeancePaiement',
              type: 'text',
              suffix: 'jours',
            },*/
            {
                header: 'MONTANT TTC',
                field: 'montantTtc',
                type: 'currency',
            },
            {
                header: 'STATUT',
                field: 'statut',
                type: 'estimate-invoice-status-component',
                format: this.formatStatut,
            },
        ];
        this.devisStatusItems = [
            {
                actualStatus: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Valide,
                label: 'Convertir',
                icon: 'pi pi-check',
                command: function () {
                    _this._estimateInvoiceStatusStateService.statusModifier = {
                        statusAction: 'Convert',
                        target: 'Estimate',
                    };
                },
            },
            {
                actualStatus: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Valide,
                label: 'Rejeter',
                icon: 'pi pi-times',
                command: function () {
                    _this._estimateInvoiceStatusStateService.statusModifier = {
                        statusAction: 'Reject',
                        target: 'Estimate',
                    };
                },
            },
            {
                actualStatus: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Cree,
                label: 'Valider',
                icon: 'pi pi-check',
                command: function () {
                    _this._estimateInvoiceStatusStateService.statusModifier = {
                        statusAction: 'Validate',
                        target: 'Estimate',
                    };
                },
            },
        ];
        this.displayDialog = false;
        this.autoCompleteText = '';
        this.suggestions = [];
        this.dateEmission = new Date();
        this.echeancePayementOptions = [30, 60, 90];
        this.echeancePayementSelected = this.echeancePayementOptions[0] || '';
        this.summaryTotalHT = 0;
        this.summaryTVA = 0;
        this.summaryTotalTTC = 0;
        this.montantTotalAllDevis = 0;
        this.getUserName = function () { return _this._sessionService.user.userName; };
        this.filterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //#endregion
        //#region FactureDialog
        this.dialogComponentShown = false;
    }
    DevisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalEventsService.announcedThePageChangedColorSubject("var(--" + this.primaryColor + "-color");
        this.favIcon.href = 'assets/img/DevisLogo.png';
        this._fileApiServiceProxy.download().subscribe(function (res) {
            var objectURL = _this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res.data));
            _this.logoSrc = objectURL;
        });
        this._lazyTableService.rowSelected$.subscribe(function (res) {
            _this.firstLoad && (_this.montantTotalAllDevis = _this.tableChild.montantTotal);
            _this.selectedDevisItem = res;
            _this.calculateSummaryTotalHTAndTVA();
            _this.firstLoad = false;
        });
    };
    DevisComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._estimateInvoiceStatusStateService.statusModifier$.subscribe(function (res) {
            if (res.target == 'Estimate') {
                switch (res.statusAction) {
                    case 'Validate':
                        _this.dialogStatus = _shared_enums_DialogState_enum__WEBPACK_IMPORTED_MODULE_2__["DialogStatus"].CheckFormValidity;
                        _this.devisItemProp = __assign({}, _this.selectedDevisItem);
                        break;
                    case 'Convert':
                        _this.showFactureDialog();
                        break;
                    case 'Reject':
                        _this.updateApiCall(_this.selectedDevisItem.id, _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Rejete, 'Le devis est rejeté');
                        break;
                }
                document.body.style.overflow = 'auto';
            }
        });
    };
    //#endregion
    DevisComponent.prototype.emitDateFilterEvent = function (event) {
        if (this.selectedDate.every(function (x) { return x != null; }))
            this.emitFilterEvent('filterByButton', null);
    };
    DevisComponent.prototype.formatStatut = function (statut) {
        switch (statut) {
            case _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Cree:
                return 'Brouillon';
            case _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Valide:
                return 'Validé';
            case _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Converti:
                return 'Convérti';
            case _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Rejete:
                return 'Rejeté';
            case _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Expire:
                return 'Expiré';
            case _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Undefined:
                return ' ';
        }
    };
    DevisComponent.prototype.getDateEcheance = function (dateEmission, echeance) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(dateEmission).add(echeance, 'days').toDate();
    };
    DevisComponent.prototype.clientAutoCompleteSearch = function (event) {
        var _this = this;
        setTimeout(function () {
            _this._clientServiceProxy
                .getClientForAutoComplete(event.query)
                .subscribe(function (res) {
                _this.clientSuggestions = res.items;
            });
        }, 500);
    };
    DevisComponent.prototype.resetFilterFields = function () {
        this.selectedClient = null;
        this.selectedDate = null;
        this.selectedEcheance = null;
        this.selectedMontant = null;
        this.selectedStatut = null;
        this.emitFilterEvent('filterByButton', null);
    };
    DevisComponent.prototype.emitFilterEvent = function (filterType, value) {
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
                    client: this.selectedClient && this.selectedClient.id,
                    dateEmission: this.selectedDate,
                    echeancePaiement: this.selectedEcheance,
                    statut: this.selectedStatut,
                    montantTtc: this.selectedMontant,
                },
            });
        }
    };
    DevisComponent.prototype.newDevis = function () {
        this.displayDialog = true;
        this.devisItemProp = null;
        this.dialogStatus = _shared_enums_DialogState_enum__WEBPACK_IMPORTED_MODULE_2__["DialogStatus"].New;
    };
    DevisComponent.prototype.editDevis = function () {
        this.displayDialog = true;
        this.devisItemProp = __assign({}, this.selectedDevisItem);
        this.dialogStatus = _shared_enums_DialogState_enum__WEBPACK_IMPORTED_MODULE_2__["DialogStatus"].Edit;
    };
    DevisComponent.prototype.duplicateDevis = function () {
        this.displayDialog = true;
        this.devisItemProp = __assign({}, this.selectedDevisItem);
        this.dialogStatus = _shared_enums_DialogState_enum__WEBPACK_IMPORTED_MODULE_2__["DialogStatus"].Duplicate;
    };
    DevisComponent.prototype.deleteDevis = function () {
        var _this = this;
        this._confirmDialogService.deleteConfirm({
            acceptCallback: function () {
                _this._devisServiceProxy
                    .deleteDevis(_this.selectedDevisItem.id)
                    .subscribe(function (res) {
                    if (res) {
                        _this._lazyTableService.emitDataOperation = {
                            action: 'remove',
                            payload: _this.selectedDevisItem.id,
                        };
                        _this.summaryTotalHT = 0;
                        _this.summaryTVA = 0;
                        _this.montantTotalAllDevis -= _this.selectedDevisItem.montantTtc;
                        _this._toastService.info({
                            summary: 'Opération réussie',
                            detail: 'Le devis est supprimé avec succès',
                        });
                    }
                });
            },
            rejectCallback: function (type) {
                // switch (type) {
                //   case ConfirmEventType.REJECT:
                //     this._toastService.error({
                //       summary: 'Erreur',
                //       detail: "Une erreur s'est produite lors de la suppression",
                //     })
                //     break
                //   case ConfirmEventType.CANCEL:
                //     break
                // }
            },
        });
    };
    DevisComponent.prototype.onDialogClose = function () {
        this.displayDialog = false;
        this.dialogStatus = undefined;
        document.body.style.overflow = 'auto';
    };
    DevisComponent.prototype.calculateSummaryTotalHTAndTVA = function () {
        if (this.selectedDevisItem && this.selectedDevisItem.devisItems) {
            this.summaryTotalHT = this.selectedDevisItem.devisItems
                .map(function (item) { return item.unitPriceHT * item.quantity; })
                .reduce(function (accum, current) { return accum + current; });
            this.summaryTVA = this.selectedDevisItem.devisItems
                .map(function (item) { return (item.unitPriceHT * item.quantity * item.tva) / 100; })
                .reduce(function (accum, current) { return accum + current; });
            this.remiseAmount = this.calculateRemise(this.selectedDevisItem.remise, this.summaryTotalHT);
        }
    };
    DevisComponent.prototype.calculateRemise = function (remise, totalHT) {
        return (totalHT * remise) / 100;
    };
    DevisComponent.prototype.crudOperationTreatment = function (event) {
        var _this = this;
        var estimate = event.result;
        if (event.crudOperation == 'create') {
            this._lazyTableService.emitDataOperation = {
                action: 'add',
                payload: estimate,
            };
            this.montantTotalAllDevis += estimate.montantTtc;
        }
        else if (event.crudOperation == 'update') {
            this.montantTotalAllDevis +=
                estimate.montantTtc - this.selectedDevisItem.montantTtc;
            this.selectedDevisItem = __assign({}, estimate);
            this.child.selectedDevisItem = __assign({}, this.selectedDevisItem);
            var index = this.tableChild.tableData.findIndex(function (item) { return item.id == _this.selectedDevisItem.id; });
            this.tableChild.tableData[index] = __assign(__assign({}, this.selectedDevisItem), { dateEmission: moment__WEBPACK_IMPORTED_MODULE_5__(this.selectedDevisItem.dateEmission) });
            this.tableChild.tableData = __spread(this.tableChild.tableData);
        }
        this.calculateSummaryTotalHTAndTVA();
    };
    //#region Api Calls
    DevisComponent.prototype.getListDevisApi$ = function (event) {
        var clientFilter, dateEmissionFilter, echeancePaiementFilter, montantTtcFilter, statutFilter;
        if (event.filters) {
            clientFilter = event.filters.client && event.filters.client.value;
            dateEmissionFilter =
                event.filters.dateEmission && event.filters.dateEmission.value;
            echeancePaiementFilter =
                event.filters.echeancePaiement && event.filters.echeancePaiement.value;
            montantTtcFilter =
                event.filters.montantTtc && event.filters.montantTtc.value;
            statutFilter = event.filters.statut && event.filters.statut.value;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(this._devisServiceProxy.getAllDevisTotalRecords(0, 0, event.globalFilter, '', '', clientFilter, dateEmissionFilter, echeancePaiementFilter, montantTtcFilter, statutFilter), this._devisServiceProxy.getAllDevis(event.first, event.rows, event.globalFilter, event.sortField, event.sortOrder, clientFilter, dateEmissionFilter, echeancePaiementFilter, montantTtcFilter, statutFilter), this._devisServiceProxy.getAllDevisMontantTotal(event.first, event.rows, event.globalFilter, '', '', clientFilter, dateEmissionFilter, echeancePaiementFilter, montantTtcFilter, statutFilter)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (_a) {
            var _b = __read(_a, 3), length = _b[0], res = _b[1], montantTotalAllDevis = _b[2];
            var data = __spread(res.items);
            data.forEach(function (devis) {
                devis.statut =
                    devis.statut == _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Valide &&
                        moment__WEBPACK_IMPORTED_MODULE_5__().isAfter(moment__WEBPACK_IMPORTED_MODULE_5__(devis.dateEmission).add(devis.echeancePaiement, 'days'))
                        ? _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisStatutEnum"].Expire
                        : devis.statut;
            });
            return { items: data, length: length, montantTotalAllDevis: montantTotalAllDevis };
        }));
    };
    DevisComponent.prototype.updateApiCall = function (devisId, devisStatut, detail) {
        var _this = this;
        this._devisServiceProxy
            .changeDevisStatut(devisId, devisStatut)
            .subscribe(function (res) {
            if (res) {
                _this._toastService.info({ detail: detail });
                _this.selectedDevisItem = __assign(__assign({}, _this.selectedDevisItem), { statut: devisStatut });
                _this.tableChild.tableData.forEach(function (item) {
                    item.id == _this.selectedDevisItem.id && (item.statut = devisStatut);
                });
            }
        });
    };
    DevisComponent.prototype.showFactureDialog = function () {
        this.invoiceItemProp = __assign(__assign({}, this.selectedDevisItem), { factureItems: this.selectedDevisItem.devisItems });
        delete this.invoiceItemProp['devisItems'];
        this.dialogComponentShown = true;
        this.invoiceDialogStatus = _shared_enums_DialogState_enum__WEBPACK_IMPORTED_MODULE_2__["DialogStatus"].Convert;
    };
    //#endregion
    DevisComponent.prototype.print = function () {
        this._previewService.print({
            item: this.selectedDevisItem,
            remiseAmount: this.remiseAmount,
            summaryTVA: this.summaryTVA,
            summaryTotalHT: this.summaryTotalHT,
            title: 'Devis',
            logoSrc: this.logoSrc
        });
    };
    //TODO:Create a service for these two methods
    DevisComponent.prototype.isNullOrEmpty = function (str) {
        return str == undefined || str.toString().trim() == '';
    };
    DevisComponent.prototype.replaceIfIsNullOrEmpty = function (str) {
        if (!str || this.isNullOrEmpty(str)) {
            return '...';
        }
        else {
            return str;
        }
    };
    DevisComponent.prototype.downloadAsPDF = function () {
        this._previewService.download({
            item: this.selectedDevisItem,
            remiseAmount: this.remiseAmount,
            summaryTVA: this.summaryTVA,
            summaryTotalHT: this.summaryTotalHT,
            title: 'Devis',
            logoSrc: this.logoSrc
        });
    };
    DevisComponent.ɵfac = function DevisComponent_Factory(t) { return new (t || DevisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["ClientServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_globalEventsService__WEBPACK_IMPORTED_MODULE_3__["GlobalEventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_13__["AppSessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["FileApiServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_estimate_invoice_status_state_service__WEBPACK_IMPORTED_MODULE_16__["EstimateInvoiceStatusStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_lazy_table_service__WEBPACK_IMPORTED_MODULE_17__["LazyTableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_preview_service__WEBPACK_IMPORTED_MODULE_18__["PreviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["InfosEntrepriseServiceProxy"])); };
    DevisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevisComponent, selectors: [["app-devis"]], viewQuery: function DevisComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_devis_dialog_devis_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DevisDialogComponent"], 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_app_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sample = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableChild = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__["DialogService"], _shared_services_estimate_invoice_status_state_service__WEBPACK_IMPORTED_MODULE_16__["EstimateInvoiceStatusStateService"]])], decls: 48, vars: 52, consts: [["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"], ["styleClass", "styleClass"], [1, "main", "pt-5"], [1, "grid", "mx-0"], [1, "leftSection", "md:col-12", "p-0", "positon-relative"], [1, "pl-3"], [1, "header", "flex", "justify-content-between", "align-items-start"], [1, "flex", "flex-wrap", "align-items-baseline"], [1, "mr-3", "h-100", 3, "src"], [1, "title", 3, "ngClass"], ["pButton", "", 1, "btn-new-devis", "text-normal", 3, "ngClass", "label", "click"], [1, "subtitle", "pt-2"], [1, "searchInput", "p-input-icon-left", "mt-2", "shadow-1"], [1, "pi", "pi-search"], ["pInputText", "", "placeholder", "Rechercher ici", 1, "", 3, "ngModel", "ngModelChange", "input"], [1, "flex", "align-items-center", "pt-4", "filterContainer"], ["placeholder", "Client", "field", "displayName", 3, "ngModel", "suggestions", "ngModelChange", "completeMethod", "onSelect"], ["selectionMode", "range", "placeholder", "Date", 3, "ngModel", "ngModelChange", "onSelect"], ["placeholder", "Ech\u00E9ance", 3, "ngModel", "ngModelChange", "onInput"], ["placeholder", "Montant", "mode", "decimal", 3, "ngModel", "minFractionDigits", "ngModelChange", "onInput"], ["placeholder", "Statut", "optionLabel", "label", "optionValue", "value", 3, "options", "ngModel", "showClear", "ngModelChange", "onChange"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa fa-undo", 3, "ngClass", "click"], [3, "cols", "styleClass", "styleId", "highlightColorInput", "filterEvent", "getListApi$", "statusItems", "globalFilterFields"], ["dt1", ""], [1, "devisTotal", "flex", "justify-content-between", "align-items-center", "w-100"], [1, "color-gray"], [1, "rightSection", "md:col-12", "p-0"], [1, "devis-details"], [1, "header", "flex", "justify-content-end"], [1, "flex"], ["pButton", "", "label", "T\u00E9l\u00E9charger", 1, "p-button-text", 3, "click"], ["pButton", "", "label", "Imprimer", 1, "p-button-text", 3, "click"], ["pButton", "", "label", "Dupliquer", 1, "p-button-text", 3, "click"], ["pButton", "", "label", "Modifier", 1, "p-button-text", 3, "click"], ["pButton", "", "label", "Supprimer", 1, "p-button-text", 3, "click"], [3, "item", "title", "logoSrc", "summaryTotalHT", "summaryTVA", "remiseAmount"], ["prv", ""], [3, "visible", "dataItem", "dialogStatus", "openDialogEvent", "closeDialogEvent", "crudOperationEvent", "emitCheckFormIsValidEvent"], ["devisDialog", ""], [3, "visible", "dataItem", "dialogStatus", "closeDialogEvent"], ["factureDialog", ""]], template: function DevisComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-confirmDialog", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-toast", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DevisComponent_Template_button_click_11_listener() { return ctx.newDevis(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "lowercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DevisComponent_Template_input_ngModelChange_17_listener($event) { return ctx.searchText = $event; })("input", function DevisComponent_Template_input_input_17_listener($event) { return ctx.emitFilterEvent("filterByInput", $event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p-autoComplete", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DevisComponent_Template_p_autoComplete_ngModelChange_19_listener($event) { return ctx.selectedClient = $event; })("completeMethod", function DevisComponent_Template_p_autoComplete_completeMethod_19_listener($event) { return ctx.clientAutoCompleteSearch($event); })("onSelect", function DevisComponent_Template_p_autoComplete_onSelect_19_listener() { return ctx.emitFilterEvent("filterByButton", null); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p-calendar", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DevisComponent_Template_p_calendar_ngModelChange_20_listener($event) { return ctx.selectedDate = $event; })("onSelect", function DevisComponent_Template_p_calendar_onSelect_20_listener($event) { return ctx.emitDateFilterEvent($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p-inputNumber", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DevisComponent_Template_p_inputNumber_ngModelChange_21_listener($event) { return ctx.selectedEcheance = $event; })("onInput", function DevisComponent_Template_p_inputNumber_onInput_21_listener($event) { ctx.selectedEcheance = $event.value; return ctx.emitFilterEvent("filterByButton", null); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p-inputNumber", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DevisComponent_Template_p_inputNumber_ngModelChange_22_listener($event) { return ctx.selectedMontant = $event; })("onInput", function DevisComponent_Template_p_inputNumber_onInput_22_listener($event) { ctx.selectedMontant = $event.value; return ctx.emitFilterEvent("filterByButton", null); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p-dropdown", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DevisComponent_Template_p_dropdown_ngModelChange_23_listener($event) { return ctx.selectedStatut = $event; })("onChange", function DevisComponent_Template_p_dropdown_onChange_23_listener() { return ctx.emitFilterEvent("filterByButton", null); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DevisComponent_Template_button_click_24_listener() { return ctx.resetFilterFields(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-table", 22, 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total TTC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DevisComponent_Template_button_click_37_listener() { return ctx.downloadAsPDF(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DevisComponent_Template_button_click_38_listener() { return ctx.print(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DevisComponent_Template_button_click_39_listener() { return ctx.duplicateDevis(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DevisComponent_Template_button_click_40_listener() { return ctx.editDevis(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DevisComponent_Template_button_click_41_listener() { return ctx.deleteDevis(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-item-preview", 35, 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-devis-dialog", 37, 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openDialogEvent", function DevisComponent_Template_app_devis_dialog_openDialogEvent_44_listener() { return ctx.displayDialog = true; })("closeDialogEvent", function DevisComponent_Template_app_devis_dialog_closeDialogEvent_44_listener() { return ctx.onDialogClose(); })("crudOperationEvent", function DevisComponent_Template_app_devis_dialog_crudOperationEvent_44_listener($event) { return ctx.crudOperationTreatment($event); })("emitCheckFormIsValidEvent", function DevisComponent_Template_app_devis_dialog_emitCheckFormIsValidEvent_44_listener($event) { return ctx.updateEstimateStatusToValid($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "app-factures-dialog", 39, 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeDialogEvent", function DevisComponent_Template_app_factures_dialog_closeDialogEvent_46_listener() { return ctx.dialogComponentShown = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseZIndex", 10000);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "color-" + ctx.primaryColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + ctx.primaryColor)("label", "Nouveau " + ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Visualisez, modifiez et g\u00E9rez toutes vos ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 44, ctx.title), " !");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedClient)("suggestions", ctx.clientSuggestions);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedEcheance);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMontant)("minFractionDigits", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.statutOptions)("ngModel", ctx.selectedStatut)("showClear", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-button-rounded ml-2 bg-" + ctx.primaryColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols)("styleClass", "table")("styleId", "devisList")("highlightColorInput", ctx.tableSelectionColor)("filterEvent", ctx.filterSubject.asObservable())("getListApi$", ctx.getListDevisApi$)("statusItems", ctx.devisStatusItems)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 46, ctx.montantTotalAllDevis, "1.2-2"), " ", " " + (ctx.selectedDevisItem && ctx.selectedDevisItem.currency), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.selectedDevisItem)("title", ctx.title)("logoSrc", ctx.logoSrc)("summaryTotalHT", ctx.summaryTotalHT)("summaryTVA", ctx.summaryTVA)("remiseAmount", ctx.remiseAmount);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.displayDialog)("dataItem", ctx.devisItemProp)("dialogStatus", ctx.dialogStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.dialogComponentShown)("dataItem", ctx.invoiceItemProp)("dialogStatus", ctx.invoiceDialogStatus);
        } }, directives: [primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialog"], primeng_toast__WEBPACK_IMPORTED_MODULE_20__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgClass"], primeng_button__WEBPACK_IMPORTED_MODULE_22__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_24__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_25__["AutoComplete"], primeng_calendar__WEBPACK_IMPORTED_MODULE_26__["Calendar"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_27__["InputNumber"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_28__["Dropdown"], _app_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"], _shared_components_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_14__["ItemPreviewComponent"], _devis_dialog_devis_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DevisDialogComponent"], _app_factures_factures_dialog_factures_dialog_component__WEBPACK_IMPORTED_MODULE_12__["FacturesDialogComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DecimalPipe"]], styles: ["[_nghost-%COMP%] .p-button {\r\n    border: none;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    padding-right: .8rem;\r\n    background: #f1f6ff;\r\n    min-height: 100vh;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n    padding-right: 1.5rem;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 1.875rem;\r\n}\r\n\r\n.btn-new-devis[_ngcontent-%COMP%] {\r\n    width: 164px;\r\n    height: 48px;\r\n}\r\n\r\n.subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    color: #898e99;\r\n}\r\n\r\n[_nghost-%COMP%] .searchInput.p-input-icon-left {\r\n    max-width: 216px;\r\n    max-height: 35px;\r\n    width: 100%;\r\n    background-color: #F1EDED;\r\n    border-radius: 24px;\r\n}\r\n\r\n[_nghost-%COMP%] .searchInput.p-input-icon-left>.p-inputtext {\r\n    max-height: 35px;\r\n    width: 100%;\r\n    background-color: #F1EDED;\r\n    border: none;\r\n    border-radius: 24px;\r\n}\r\n\r\ni.pi-search[_ngcontent-%COMP%] {\r\n    font-weight: 800;\r\n}\r\n\r\n.searchInput[_ngcontent-%COMP%], i.pi-search[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n}\r\n\r\n[_nghost-%COMP%] .filterContainer .p-dropdown, [_nghost-%COMP%] .filterContainer .p-autocomplete .p-autocomplete-input, [_nghost-%COMP%] .filterContainer .p-calendar .p-inputtext, [_nghost-%COMP%] .filterContainer .p-inputnumber-input {\r\n    border: none;\r\n    margin-right: 6px;\r\n    width: 82px;\r\n}\r\n\r\n[_nghost-%COMP%] .filterContainer .p-inputtext, [_nghost-%COMP%] .filterContainer .p-dropdown .p-cal, [_nghost-%COMP%] .filterContainer .p-autocomplete .p-autocomplete-input, [_nghost-%COMP%] .filterContainer .p-inputnumber-input {\r\n    padding: 6px 0px 6px 6px;\r\n    color: #7d86a9;\r\n    font-size: 0.8rem;\r\n    font-weight: 500;\r\n}\r\n\r\n[_nghost-%COMP%] .filterContainer .p-dropdown .pi-chevron-down {\r\n    font-size: 0.75rem;\r\n}\r\n\r\n.filterBtn[_ngcontent-%COMP%] {\r\n    max-height: 35px;\r\n    font-size: 1rem;\r\n    padding: 0.5rem .8rem;\r\n}\r\n\r\n[_nghost-%COMP%] .filterBtn .pi-filter {\r\n    font-size: 0.85rem;\r\n}\r\n\r\n[_nghost-%COMP%]     #devisList .p-datatable {\r\n    margin-top: 1rem;\r\n    padding-right: .8rem;\r\n}\r\n\r\n[_nghost-%COMP%] #devisList .p-datatable .p-datatable-tbody>tr {\r\n    background: transparent;\r\n}\r\n\r\n[_nghost-%COMP%] #devisList .p-datatable .p-datatable-thead>tr>th {\r\n    font-size: 0.85rem;\r\n    padding-right: 0px;\r\n    padding-left: 2px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    background-color: transparent;\r\n}\r\n\r\n[_nghost-%COMP%]     #devisList .p-datatable .p-datatable-thead>tr>th, [_nghost-%COMP%]     #devisList .p-datatable .p-datatable-scrollable-header {\r\n    background: transparent;\r\n    color: var(--green-color);\r\n}\r\n\r\n[_nghost-%COMP%]     #devisList .p-datatable .p-datatable-tbody>tr>td {\r\n    font-size: 0.85rem;\r\n    color: #898e99;\r\n    text-align: center;\r\n    padding: .8rem .1rem;\r\n}\r\n\r\n\r\n\r\n.devisTotal[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0rem;\r\n    min-height: 3.2rem;\r\n    padding-left: 1.5rem;\r\n    padding-right: 20%;\r\n    border-top: 1px solid var(--light-gray-color);\r\n}\r\n\r\n.devisTotal[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\r\n    font-size: 1.42rem;\r\n}\r\n\r\n.devisTotal[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\r\n    font-size: 0.95rem;\r\n}\r\n\r\n\r\n\r\n.devis-details[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    \r\n    min-height: max(calc(100vh - 60px), 710px);\r\n    margin-bottom: 0.7rem;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 50%);\r\n}\r\n\r\n.devis-details[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 20px .75rem;\r\n    border-bottom: 1px solid #d8d8d8;\r\n}\r\n\r\n.devis-details[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n\r\n.devis-details[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    color: #898e99;\r\n}\r\n\r\n.border-radius-6[_ngcontent-%COMP%] {\r\n    border-radius: 6px;\r\n}\r\n\r\n[_nghost-%COMP%]     .p-splitbutton {\r\n    font-weight: 400;\r\n    min-width: 93.04px;\r\n    min-height: 37px;\r\n}\r\n\r\n[_nghost-%COMP%]     .p-splitbutton button {\r\n    border: none;\r\n    background-color: var(--green-color);\r\n}\r\n\r\n[_nghost-%COMP%]     .p-splitbutton button:hover {\r\n    background-color: var(--green-color);\r\n}\r\n\r\n[_nghost-%COMP%] .p-splitbutton .p-splitbutton-menubutton {\r\n    width: 1.357rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .p-splitbutton .pi-chevron-down {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .p-splitbutton-defaultbutton {\r\n    \r\n    font-size: 0.8rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .p-splitbutton-menubutton {\r\n    padding: 0;\r\n}\r\n\r\n.devis-details[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .p-button-text[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n    padding: 3px;\r\n    color: var(--green-color);\r\n}\r\n\r\n[_nghost-%COMP%]     .devis-details .p-datatable {\r\n    margin-top: .6rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .devis-details .p-datatable tr>th, [_nghost-%COMP%]     .devis-details .p-datatable tr, [_nghost-%COMP%]     .devis-details .p-datatable .p-datatable-scrollable-header {\r\n    background: transparent;\r\n}\r\n\r\n[_nghost-%COMP%]     .devis-details .p-datatable tr>th, [_nghost-%COMP%]     .devis-details .p-datatable tr>td {\r\n    font-size: 0.75rem;\r\n    padding: 1rem .25rem;\r\n    text-align: center;\r\n}\r\n\r\n[_nghost-%COMP%]     .devis-details .p-datatable .p-datatable-thead {\r\n    border: 1px solid #e4e4e4;\r\n}\r\n\r\n[_nghost-%COMP%]     .devis-details .p-datatable .p-datatable-thead th {\r\n    color: var(--green-color);\r\n}\r\n\r\n[_nghost-%COMP%]     .devis-details .p-datatable-footer {\r\n    width: 60%;\r\n    padding-top: 1.5rem;\r\n    padding-right: 16px;\r\n    margin-left: auto;\r\n    text-align: end;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n[_nghost-%COMP%]     .devis-details .p-datatable-footer .p-col-9 {\r\n    text-align: right;\r\n    padding-right: 30px;\r\n}\r\n\r\n[_nghost-%COMP%]     .devis-details .p-datatable-footer .p-grid * {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n[_nghost-%COMP%]     .devis-details .p-datatable-footer span {\r\n    font-size: 0.95rem;\r\n    font-weight: 400;\r\n}\r\n\r\n[_nghost-%COMP%]     .p-datatable-footer hr {\r\n    width: 65%;\r\n    margin-right: 0;\r\n    margin-top: 0.8rem;\r\n    margin-bottom: 1.1rem;\r\n    border-color: var(--light-gray-color);\r\n    border-style: solid;\r\n}\r\n\r\n.leftSection[_ngcontent-%COMP%] {\r\n    width: 56%;\r\n}\r\n\r\n.rightSection[_ngcontent-%COMP%] {\r\n    width: 44%;\r\n}\r\n\r\n[_nghost-%COMP%] .filterContainer .p-datepicker {\r\n    top: -198px !important;\r\n}\r\n\r\n\r\n\r\n.html2canvas[_ngcontent-%COMP%] {\r\n    -ms-transform: scale(0.9);\r\n        transform: scale(0.9)\r\n}\r\n\r\n.html2canvas[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    color: black !important;\r\n}\r\n\r\n.html2canvas[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7OztJQUlJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBOzs7O0lBSUksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFHQSx3QkFBd0I7O0FBRXhCO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0Esa0JBQWtCOztBQUVsQjtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFHQSwwQkFBMEI7O0FBRTFCO0lBQ0kseUJBQW9CO1FBQXBCO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiZGV2aXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0Pj4+LnAtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgcGFkZGluZy1yaWdodDogLjhyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNmZmO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XHJcbn1cclxuXHJcbi5idG4tbmV3LWRldmlzIHtcclxuICAgIHdpZHRoOiAxNjRweDtcclxuICAgIGhlaWdodDogNDhweDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGNvbG9yOiAjODk4ZTk5O1xyXG59XHJcblxyXG46aG9zdD4+Pi5zZWFyY2hJbnB1dC5wLWlucHV0LWljb24tbGVmdCB7XHJcbiAgICBtYXgtd2lkdGg6IDIxNnB4O1xyXG4gICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRURFRDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbn1cclxuXHJcbjpob3N0Pj4+LnNlYXJjaElucHV0LnAtaW5wdXQtaWNvbi1sZWZ0Pi5wLWlucHV0dGV4dCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFFREVEO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxufVxyXG5cclxuaS5waS1zZWFyY2gge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnNlYXJjaElucHV0LFxyXG5pLnBpLXNlYXJjaCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbjpob3N0Pj4+LmZpbHRlckNvbnRhaW5lciAucC1kcm9wZG93bixcclxuOmhvc3Q+Pj4uZmlsdGVyQ29udGFpbmVyIC5wLWF1dG9jb21wbGV0ZSAucC1hdXRvY29tcGxldGUtaW5wdXQsXHJcbjpob3N0Pj4+LmZpbHRlckNvbnRhaW5lciAucC1jYWxlbmRhciAucC1pbnB1dHRleHQsXHJcbjpob3N0Pj4+LmZpbHRlckNvbnRhaW5lciAucC1pbnB1dG51bWJlci1pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIHdpZHRoOiA4MnB4O1xyXG59XHJcblxyXG46aG9zdD4+Pi5maWx0ZXJDb250YWluZXIgLnAtaW5wdXR0ZXh0LFxyXG46aG9zdD4+Pi5maWx0ZXJDb250YWluZXIgLnAtZHJvcGRvd24gLnAtY2FsLFxyXG46aG9zdD4+Pi5maWx0ZXJDb250YWluZXIgLnAtYXV0b2NvbXBsZXRlIC5wLWF1dG9jb21wbGV0ZS1pbnB1dCxcclxuOmhvc3Q+Pj4uZmlsdGVyQ29udGFpbmVyIC5wLWlucHV0bnVtYmVyLWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDZweCAwcHggNnB4IDZweDtcclxuICAgIGNvbG9yOiAjN2Q4NmE5O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG46aG9zdD4+Pi5maWx0ZXJDb250YWluZXIgLnAtZHJvcGRvd24gLnBpLWNoZXZyb24tZG93biB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5maWx0ZXJCdG4ge1xyXG4gICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAuOHJlbTtcclxufVxyXG5cclxuOmhvc3Q+Pj4uZmlsdGVyQnRuIC5waS1maWx0ZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgI2RldmlzTGlzdCAucC1kYXRhdGFibGUge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC44cmVtO1xyXG59XHJcblxyXG46aG9zdD4+PiNkZXZpc0xpc3QgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS10Ym9keT50ciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOmhvc3Q+Pj4jZGV2aXNMaXN0IC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtdGhlYWQ+dHI+dGgge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAjZGV2aXNMaXN0IC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtdGhlYWQ+dHI+dGgsXHJcbjpob3N0IDo6bmctZGVlcCAjZGV2aXNMaXN0IC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtc2Nyb2xsYWJsZS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgI2RldmlzTGlzdCAucC1kYXRhdGFibGUgLnAtZGF0YXRhYmxlLXRib2R5PnRyPnRkIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGNvbG9yOiAjODk4ZTk5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLjhyZW0gLjFyZW07XHJcbn1cclxuXHJcblxyXG4vKiBMaXN0IGRldGFpbHMgZm9vdGVyICovXHJcblxyXG4uZGV2aXNUb3RhbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDByZW07XHJcbiAgICBtaW4taGVpZ2h0OiAzLjJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmF5LWNvbG9yKTtcclxufVxyXG5cclxuLmRldmlzVG90YWwgOm50aC1jaGlsZCgxKSB7XHJcbiAgICBmb250LXNpemU6IDEuNDJyZW07XHJcbn1cclxuXHJcbi5kZXZpc1RvdGFsIDpudGgtY2hpbGQoMikge1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG59XHJcblxyXG5cclxuLyogRGV2aXMgZGV0YWlscyAqL1xyXG5cclxuLmRldmlzLWRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDc4MnB4OyAqL1xyXG4gICAgbWluLWhlaWdodDogbWF4KGNhbGMoMTAwdmggLSA2MHB4KSwgNzEwcHgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDUwJSk7XHJcbn1cclxuXHJcbi5kZXZpcy1kZXRhaWxzIC5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjBweCAuNzVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcclxufVxyXG5cclxuLmRldmlzLWRldGFpbHMgLmNvbnRlbnQgaDEge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uZGV2aXMtZGV0YWlscyAuY29udGVudCAuZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGNvbG9yOiAjODk4ZTk5O1xyXG59XHJcblxyXG4uYm9yZGVyLXJhZGl1cy02IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wLXNwbGl0YnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtaW4td2lkdGg6IDkzLjA0cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzN3B4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnAtc3BsaXRidXR0b24gYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wLXNwbGl0YnV0dG9uIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XHJcbn1cclxuXHJcbjpob3N0Pj4+LnAtc3BsaXRidXR0b24gLnAtc3BsaXRidXR0b24tbWVudWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMS4zNTdyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1zcGxpdGJ1dHRvbiAucGktY2hldnJvbi1kb3duIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnAtc3BsaXRidXR0b24tZGVmYXVsdGJ1dHRvbiB7XHJcbiAgICAvKiBwYWRkaW5nOiA4cHg7ICovXHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wLXNwbGl0YnV0dG9uLW1lbnVidXR0b24ge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmRldmlzLWRldGFpbHMgLmhlYWRlciAucC1idXR0b24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRldmlzLWRldGFpbHMgLnAtZGF0YXRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IC42cmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRldmlzLWRldGFpbHMgLnAtZGF0YXRhYmxlIHRyPnRoLFxyXG46aG9zdCA6Om5nLWRlZXAgLmRldmlzLWRldGFpbHMgLnAtZGF0YXRhYmxlIHRyLFxyXG46aG9zdCA6Om5nLWRlZXAgLmRldmlzLWRldGFpbHMgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kZXZpcy1kZXRhaWxzIC5wLWRhdGF0YWJsZSB0cj50aCxcclxuOmhvc3QgOjpuZy1kZWVwIC5kZXZpcy1kZXRhaWxzIC5wLWRhdGF0YWJsZSB0cj50ZCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kZXZpcy1kZXRhaWxzIC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtdGhlYWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kZXZpcy1kZXRhaWxzIC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtdGhlYWQgdGgge1xyXG4gICAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kZXZpcy1kZXRhaWxzIC5wLWRhdGF0YWJsZS1mb290ZXIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kZXZpcy1kZXRhaWxzIC5wLWRhdGF0YWJsZS1mb290ZXIgLnAtY29sLTkge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRldmlzLWRldGFpbHMgLnAtZGF0YXRhYmxlLWZvb3RlciAucC1ncmlkICoge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGV2aXMtZGV0YWlscyAucC1kYXRhdGFibGUtZm9vdGVyIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS1mb290ZXIgaHIge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDAuOHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMXJlbTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheS1jb2xvcik7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4ubGVmdFNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDU2JTtcclxufVxyXG5cclxuLnJpZ2h0U2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNDQlO1xyXG59XHJcblxyXG46aG9zdD4+Pi5maWx0ZXJDb250YWluZXIgLnAtZGF0ZXBpY2tlciB7XHJcbiAgICB0b3A6IC0xOThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogUGRmIGdlbmVyYXRpb24gcmVnaW9uICovXHJcblxyXG4uaHRtbDJjYW52YXMge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpXHJcbn1cclxuXHJcbi5odG1sMmNhbnZhcyAqIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHRtbDJjYW52YXMgLmNvbnRlbnQgLmRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG59Il19 */"] });
    return DevisComponent;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-devis',
                templateUrl: './devis.component.html',
                styleUrls: ['./devis.component.css'],
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__["DialogService"], _shared_services_estimate_invoice_status_state_service__WEBPACK_IMPORTED_MODULE_16__["EstimateInvoiceStatusStateService"]],
            }]
    }], function () { return [{ type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DevisServiceProxy"] }, { type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["ClientServiceProxy"] }, { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }, { type: _shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__["DialogService"] }, { type: _shared_globalEventsService__WEBPACK_IMPORTED_MODULE_3__["GlobalEventsService"] }, { type: _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_13__["AppSessionService"] }, { type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["FileApiServiceProxy"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"] }, { type: _shared_services_estimate_invoice_status_state_service__WEBPACK_IMPORTED_MODULE_16__["EstimateInvoiceStatusStateService"] }, { type: _shared_services_lazy_table_service__WEBPACK_IMPORTED_MODULE_17__["LazyTableService"] }, { type: _shared_services_preview_service__WEBPACK_IMPORTED_MODULE_18__["PreviewService"] }, { type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["InfosEntrepriseServiceProxy"] }]; }, { sample: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['factureDialog', {}]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['prv', { static: true }]
        }], child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_devis_dialog_devis_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DevisDialogComponent"], { static: false }]
        }], tableChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_app_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "1jSL":
/*!***************************************!*\
  !*** ./src/app/devis/devis.module.ts ***!
  \***************************************/
/*! exports provided: DevisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevisModule", function() { return DevisModule; });
/* harmony import */ var _devis_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devis.component */ "/HKH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/primeng-shared.module */ "BhnP");






var DevisModule = /** @class */ (function () {
    function DevisModule() {
    }
    DevisModule.ɵfac = function DevisModule_Factory(t) { return new (t || DevisModule)(); };
    DevisModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DevisModule });
    DevisModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: '', component: _devis_component__WEBPACK_IMPORTED_MODULE_0__["DevisComponent"] }
                ]),
                _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_3__["PrimengSharedModule"],
            ]] });
    return DevisModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DevisModule, { declarations: [_devis_component__WEBPACK_IMPORTED_MODULE_0__["DevisComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_3__["PrimengSharedModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DevisModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _devis_component__WEBPACK_IMPORTED_MODULE_0__["DevisComponent"] }
                    ]),
                    _shared_primeng_shared_module__WEBPACK_IMPORTED_MODULE_3__["PrimengSharedModule"],
                ],
                declarations: [_devis_component__WEBPACK_IMPORTED_MODULE_0__["DevisComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=devis-devis-module.js.map