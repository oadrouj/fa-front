(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1401],{

/***/ "Ftqt":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/locales/he.js ***!
  \****************************************************/
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
    if (i === 2 && v === 0) return 2;
    if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0) return 4;
    return 5;
  }

  exports.default = ['he', [['לפנה״צ', 'אחה״צ'], u, u], [['לפנה״צ', 'אחה״צ'], ['AM', 'PM'], u], [['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'], ['יום א׳', 'יום ב׳', 'יום ג׳', 'יום ד׳', 'יום ה׳', 'יום ו׳', 'שבת'], ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת'], ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳']], u, [['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], ['ינו׳', 'פבר׳', 'מרץ', 'אפר׳', 'מאי', 'יוני', 'יולי', 'אוג׳', 'ספט׳', 'אוק׳', 'נוב׳', 'דצמ׳'], ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']], u, [['לפנה״ס', 'לספירה'], u, ['לפני הספירה', 'לספירה']], 0, [5, 6], ['d.M.y', 'd בMMM y', 'd בMMMM y', 'EEEE, d בMMMM y'], ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss zzzz'], ['{1}, {0}', u, '{1} בשעה {0}', u], ['.', ',', ';', '%', "\u200E+", "\u200E-", 'E', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0%', "\u200F#,##0.00\xA0\xA4;\u200F-#,##0.00\xA0\xA4", '#E0'], 'ILS', '₪', 'שקל חדש', {
    'BYN': [u, 'р'],
    'CNY': ["\u200ECN\xA5\u200E", '¥'],
    'ILP': ['ל״י'],
    'THB': ['฿'],
    'TWD': ['NT$']
  }, 'rtl', plural];
});

/***/ })

}]);
//# sourceMappingURL=1401.js.map