(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1468],{

/***/ "U39Y":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/locales/mk.js ***!
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
        v = n.toString().replace(/^[^.]*\.?/, '').length,
        f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11)) return 1;
    return 5;
  }

  exports.default = ['mk', [['претпл.', 'попл.'], u, ['претпладне', 'попладне']], u, [['н', 'п', 'в', 'с', 'ч', 'п', 'с'], ['нед.', 'пон.', 'вт.', 'сре.', 'чет.', 'пет.', 'саб.'], ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота'], ['нед.', 'пон.', 'вто.', 'сре.', 'чет.', 'пет.', 'саб.']], [['н', 'п', 'в', 'с', 'ч', 'п', 'с'], ['нед.', 'пон.', 'вто.', 'сре.', 'чет.', 'пет.', 'саб.'], ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота'], ['нед.', 'пон.', 'вто.', 'сре.', 'чет.', 'пет.', 'саб.']], [['ј', 'ф', 'м', 'а', 'м', 'ј', 'ј', 'а', 'с', 'о', 'н', 'д'], ['јан.', 'фев.', 'мар.', 'апр.', 'мај', 'јун.', 'јул.', 'авг.', 'септ.', 'окт.', 'ноем.', 'дек.'], ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември']], u, [['пр.н.е.', 'н.е.'], u, ['пред нашата ера', 'од нашата ера']], 1, [6, 0], ['d.M.yy', 'd.M.y', 'd MMMM y', 'EEEE, d MMMM y'], ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u], [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'MKD', 'ден.', 'Македонски денар', {
    'AUD': [u, '$'],
    'CNY': [u, '¥'],
    'GBP': [u, '£'],
    'HKD': [u, '$'],
    'ILS': [u, '₪'],
    'INR': [u, '₹'],
    'JPY': [u, '¥'],
    'KRW': [u, '₩'],
    'MKD': ['ден.'],
    'NZD': [u, '$'],
    'TWD': [u, 'NT$'],
    'USD': ['US$', '$'],
    'VND': [u, '₫']
  }, 'ltr', plural];
});

/***/ })

}]);
//# sourceMappingURL=1468.js.map