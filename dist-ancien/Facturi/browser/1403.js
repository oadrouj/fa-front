(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1403],{

/***/ "iOka":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/locales/hr-BA.js ***!
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
    var i = Math.floor(Math.abs(n)),
        v = n.toString().replace(/^[^.]*\.?/, '').length,
        f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11)) return 1;
    if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14) || f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 && !(f % 100 >= 12 && f % 100 <= 14)) return 3;
    return 5;
  }

  exports.default = ['hr-BA', [['AM', 'PM'], u, u], u, [['N', 'P', 'U', 'S', 'Č', 'P', 'S'], ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub'], ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'], ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub']], u, [['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'], ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro'], ['siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja', 'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenoga', 'prosinca']], [['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'], ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro'], ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac']], [['pr.n.e.', 'AD'], ['pr. Kr.', 'po. Kr.'], ['prije Krista', 'poslije Krista']], 1, [6, 0], ['d. M. yy.', 'd. MMM y.', 'd. MMMM y.', 'EEEE, d. MMMM y.'], ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss (zzzz)'], ['{1} {0}', u, '{1} \'u\' {0}', u], [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'BAM', 'KM', 'konvertibilna marka', {
    'AUD': [u, '$'],
    'BAM': ['KM'],
    'BRL': [u, 'R$'],
    'CAD': [u, '$'],
    'CNY': [u, '¥'],
    'EUR': [u, '€'],
    'GBP': [u, '£'],
    'HKD': [u, '$'],
    'ILS': [u, '₪'],
    'INR': [u, '₹'],
    'JPY': [u, '¥'],
    'KRW': [u, '₩'],
    'MXN': [u, '$'],
    'NZD': [u, '$'],
    'TWD': [u, 'NT$'],
    'USD': [u, '$'],
    'VND': [u, '₫'],
    'XCD': [u, '$'],
    'XPF': [],
    'XXX': []
  }, 'ltr', plural];
});

/***/ })

}]);
//# sourceMappingURL=1403.js.map