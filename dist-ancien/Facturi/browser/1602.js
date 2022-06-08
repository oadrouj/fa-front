(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1602],{

/***/ "Tmiw":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/locales/ur.js ***!
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
    return 5;
  }

  exports.default = ['ur', [['a', 'p'], ['AM', 'PM'], u], [['AM', 'PM'], u, u], [['S', 'M', 'T', 'W', 'T', 'F', 'S'], ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'], u, u], u, [['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'], u], u, [['قبل مسیح', 'عیسوی'], u, u], 0, [6, 0], ['d/M/yy', 'd MMM، y', 'd MMMM، y', 'EEEE، d MMMM، y'], ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'], ['{1} {0}', u, u, u], ['.', ',', ';', '%', "\u200E+", "\u200E-", 'E', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'], 'PKR', 'Rs', 'پاکستانی روپیہ', {
    'JPY': ['JP¥', '¥'],
    'PKR': ['Rs'],
    'THB': ['฿'],
    'TWD': ['NT$']
  }, 'rtl', plural];
});

/***/ })

}]);
//# sourceMappingURL=1602.js.map