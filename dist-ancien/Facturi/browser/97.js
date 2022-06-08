(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "5BLQ":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/locales/en-AU.js ***!
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
        v = n.toString().replace(/^[^.]*\.?/, '').length;
    if (i === 1 && v === 0) return 1;
    return 5;
  }

  exports.default = ['en-AU', [['am', 'pm'], u, u], u, [['Su.', 'M.', 'Tu.', 'W.', 'Th.', 'F.', 'Sa.'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], ['Su', 'Mon', 'Tu', 'Wed', 'Th', 'Fri', 'Sat']], u, [['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']], u, [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']], 0, [6, 0], ['d/M/yy', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'], ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'], ['{1}, {0}', u, '{1} \'at\' {0}', u], ['.', ',', ';', '%', '+', '-', 'e', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'], 'AUD', '$', 'Australian Dollar', {
    'AUD': ['$'],
    'BDT': [u, 'Tk'],
    'BOB': [u, '$b'],
    'BRL': [u, 'R$'],
    'CAD': [u, '$'],
    'CNY': [u, '¥'],
    'CUP': [u, '₱'],
    'EGP': [u, '£'],
    'EUR': [u, '€'],
    'GBP': [u, '£'],
    'HKD': [u, '$'],
    'ILS': [u, '₪'],
    'INR': [u, '₹'],
    'ISK': [u, 'Kr'],
    'JPY': [u, '¥'],
    'KRW': [u, '₩'],
    'MXN': [u, '$'],
    'NZD': [u, '$'],
    'PYG': [u, 'Gs'],
    'SCR': ['Rs'],
    'SEK': [u, 'Kr'],
    'TWD': [u, '$'],
    'USD': [u, '$'],
    'UYU': [u, '$U'],
    'VND': [u, '₫'],
    'XAF': [],
    'XCD': [u, '$'],
    'XOF': [],
    'XPF': ['CFP']
  }, 'ltr', plural];
});

/***/ })

}]);
//# sourceMappingURL=97.js.map