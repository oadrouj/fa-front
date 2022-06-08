(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[842],{

/***/ "tWsb":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/locales/ga-GB.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
  if ( true && typeof module.exports === "object") {
    var v = factory(null, exports);
    if (v !== undefined) module.exports = v;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})(function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  }); // THIS CODE IS GENERATED - DO NOT MODIFY
  // See angular/tools/gulp-tasks/cldr/extract.js

  var u = undefined;

  function plural(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === Math.floor(n) && n >= 3 && n <= 6) return 3;
    if (n === Math.floor(n) && n >= 7 && n <= 10) return 4;
    return 5;
  }

  exports.default = ['ga-GB', [['r.n.', 'i.n.'], u, u], u, [['D', 'L', 'M', 'C', 'D', 'A', 'S'], ['Domh', 'Luan', 'Máirt', 'Céad', 'Déar', 'Aoine', 'Sath'], ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Sathairn'], ['Do', 'Lu', 'Má', 'Cé', 'Dé', 'Ao', 'Sa']], u, [['E', 'F', 'M', 'A', 'B', 'M', 'I', 'L', 'M', 'D', 'S', 'N'], ['Ean', 'Feabh', 'Márta', 'Aib', 'Beal', 'Meith', 'Iúil', 'Lún', 'MFómh', 'DFómh', 'Samh', 'Noll'], ['Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Meitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deireadh Fómhair', 'Samhain', 'Nollaig']], u, [['RC', 'AD'], u, ['Roimh Chríost', 'Anno Domini']], 1, [6, 0], ['dd/MM/y', 'd MMM y', 'd MMMM y', 'EEEE d MMMM y'], ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u], ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'], 'GBP', '£', 'Punt Steirling', {
    'THB': ['฿'],
    'TWD': ['NT$'],
    'XXX': []
  }, 'ltr', plural];
});

/***/ })

}]);
//# sourceMappingURL=842.js.map