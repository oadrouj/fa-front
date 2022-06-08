(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1475],{

/***/ "xrJx":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/locales/mt.js ***!
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
    if (n === 1) return 1;
    if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10) return 3;
    if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19) return 4;
    return 5;
  }

  exports.default = ['mt', [['am', 'pm'], ['AM', 'PM'], u], u, [['Ħd', 'T', 'Tl', 'Er', 'Ħm', 'Ġm', 'Sb'], ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib'], ['Il-Ħadd', 'It-Tnejn', 'It-Tlieta', 'L-Erbgħa', 'Il-Ħamis', 'Il-Ġimgħa', 'Is-Sibt'], ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib']], [['Ħd', 'Tn', 'Tl', 'Er', 'Ħm', 'Ġm', 'Sb'], ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib'], ['Il-Ħadd', 'It-Tnejn', 'It-Tlieta', 'L-Erbgħa', 'Il-Ħamis', 'Il-Ġimgħa', 'Is-Sibt'], ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib']], [['J', 'F', 'M', 'A', 'M', 'Ġ', 'L', 'A', 'S', 'O', 'N', 'D'], ['Jan', 'Fra', 'Mar', 'Apr', 'Mej', 'Ġun', 'Lul', 'Aww', 'Set', 'Ott', 'Nov', 'Diċ'], ['Jannar', 'Frar', 'Marzu', 'April', 'Mejju', 'Ġunju', 'Lulju', 'Awwissu', 'Settembru', 'Ottubru', 'Novembru', 'Diċembru']], [['Jn', 'Fr', 'Mz', 'Ap', 'Mj', 'Ġn', 'Lj', 'Aw', 'St', 'Ob', 'Nv', 'Dċ'], ['Jan', 'Fra', 'Mar', 'Apr', 'Mej', 'Ġun', 'Lul', 'Aww', 'Set', 'Ott', 'Nov', 'Diċ'], ['Jannar', 'Frar', 'Marzu', 'April', 'Mejju', 'Ġunju', 'Lulju', 'Awwissu', 'Settembru', 'Ottubru', 'Novembru', 'Diċembru']], [['QK', 'WK'], u, ['Qabel Kristu', 'Wara Kristu']], 0, [6, 0], ['dd/MM/y', 'dd MMM y', 'd \'ta\'’ MMMM y', 'EEEE, d \'ta\'’ MMMM y'], ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u], ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'], 'EUR', '€', 'ewro', {
    'JPY': ['JP¥', '¥'],
    'USD': ['US$', '$']
  }, 'ltr', plural];
});

/***/ })

}]);
//# sourceMappingURL=1475.js.map