(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "Z1dJ":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/locales/ar-PS.js ***!
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
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10) return 3;
    if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99) return 4;
    return 5;
  }

  exports.default = ['ar-PS', [['ص', 'م'], u, u], [['ص', 'م'], u, ['صباحًا', 'مساءً']], [['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'], ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'], u, ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']], u, [['ك', 'ش', 'آ', 'ن', 'أ', 'ح', 'ت', 'آ', 'أ', 'ت', 'ت', 'ك'], ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'], u], u, [['ق.م', 'م'], u, ['قبل الميلاد', 'ميلادي']], 1, [6, 0], ["d\u200F/M\u200F/y", "dd\u200F/MM\u200F/y", 'd MMMM y', 'EEEE، d MMMM y'], ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'], ['{1} {0}', u, u, u], ['.', ',', ';', "\u200E%\u200E", "\u200E+", "\u200E-", 'E', '×', '‰', '∞', 'ليس رقمًا', ':'], ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'], 'ILS', '₪', 'شيكل إسرائيلي جديد', {
    'AED': ["\u062F.\u0625.\u200F"],
    'ARS': [u, 'AR$'],
    'AUD': ['AU$'],
    'BBD': [u, 'BB$'],
    'BHD': ["\u062F.\u0628.\u200F"],
    'BMD': [u, 'BM$'],
    'BND': [u, 'BN$'],
    'BSD': [u, 'BS$'],
    'BZD': [u, 'BZ$'],
    'CAD': ['CA$'],
    'CLP': [u, 'CL$'],
    'CNY': ['CN¥'],
    'COP': [u, 'CO$'],
    'CUP': [u, 'CU$'],
    'DOP': [u, 'DO$'],
    'DZD': ["\u062F.\u062C.\u200F"],
    'EGP': ["\u062C.\u0645.\u200F", 'E£'],
    'FJD': [u, 'FJ$'],
    'GBP': ['UK£'],
    'GYD': [u, 'GY$'],
    'HKD': ['HK$'],
    'IQD': ["\u062F.\u0639.\u200F"],
    'IRR': ['ر.إ.'],
    'JMD': [u, 'JM$'],
    'JOD': ["\u062F.\u0623.\u200F"],
    'JPY': ['JP¥'],
    'KWD': ["\u062F.\u0643.\u200F"],
    'KYD': [u, 'KY$'],
    'LBP': ["\u0644.\u0644.\u200F", 'L£'],
    'LRD': [u, '$LR'],
    'LYD': ["\u062F.\u0644.\u200F"],
    'MAD': ["\u062F.\u0645.\u200F"],
    'MRU': ['أ.م.'],
    'MXN': ['MX$'],
    'NZD': ['NZ$'],
    'OMR': ["\u0631.\u0639.\u200F"],
    'QAR': ["\u0631.\u0642.\u200F"],
    'SAR': ["\u0631.\u0633.\u200F"],
    'SBD': [u, 'SB$'],
    'SDD': ["\u062F.\u0633.\u200F"],
    'SDG': ['ج.س.'],
    'SRD': [u, 'SR$'],
    'SYP': ["\u0644.\u0633.\u200F", '£'],
    'THB': ['฿'],
    'TND': ["\u062F.\u062A.\u200F"],
    'TTD': [u, 'TT$'],
    'TWD': ['NT$'],
    'USD': ['US$'],
    'UYU': [u, 'UY$'],
    'XXX': ['***'],
    'YER': ["\u0631.\u064A.\u200F"]
  }, 'rtl', plural];
});

/***/ })

}]);
//# sourceMappingURL=22.js.map