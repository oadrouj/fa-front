(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[854],{

/***/ "eGKE":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/common/locales/global/ar-DZ.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js
(function (global) {
  global.ng = global.ng || {};
  global.ng.common = global.ng.common || {};
  global.ng.common.locales = global.ng.common.locales || {};
  var u = undefined;

  function plural(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10) return 3;
    if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99) return 4;
    return 5;
  }

  global.ng.common.locales['ar-dz'] = ['ar-DZ', [['ص', 'م'], u, u], [['ص', 'م'], u, ['صباحًا', 'مساءً']], [['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'], ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'], u, ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']], u, [['ج', 'ف', 'م', 'أ', 'م', 'ج', 'ج', 'أ', 'س', 'أ', 'ن', 'د'], ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'], u], u, [['ق.م', 'م'], u, ['قبل الميلاد', 'ميلادي']], 6, [5, 6], ["d\u200F/M\u200F/y", "dd\u200F/MM\u200F/y", 'd MMMM y', 'EEEE، d MMMM y'], ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'], ['{1} {0}', u, u, u], [',', '.', ';', "\u200E%\u200E", "\u200E+", "\u200E-", 'E', '×', '‰', '∞', 'ليس رقمًا', ':'], ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'], 'DZD', "\u062F.\u062C.\u200F", 'دينار جزائري', {
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
  }, 'rtl', plural, [[['فجرًا', 'صباحًا', 'ظهرًا', 'بعد الظهر', 'مساءً', 'منتصف الليل', 'ليلاً'], ['فجرًا', 'ص', 'ظهرًا', 'بعد الظهر', 'مساءً', 'منتصف الليل', 'ليلاً'], ['فجرًا', 'صباحًا', 'ظهرًا', 'بعد الظهر', 'مساءً', 'منتصف الليل', 'ليلاً']], u, [['03:00', '06:00'], ['06:00', '12:00'], ['12:00', '13:00'], ['13:00', '18:00'], ['18:00', '24:00'], ['00:00', '01:00'], ['01:00', '03:00']]]];
})(typeof globalThis !== 'undefined' && globalThis || typeof global !== 'undefined' && global || typeof window !== 'undefined' && window);

/***/ })

}]);
//# sourceMappingURL=854.js.map