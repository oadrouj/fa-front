(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "YNjN":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/locales/en-BZ.js ***!
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

  exports.default = ['en-BZ', [['a', 'p'], ['am', 'pm'], u], [['am', 'pm'], u, u], [['S', 'M', 'T', 'W', 'T', 'F', 'S'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']], u, [['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']], u, [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']], 0, [6, 0], ['dd/MM/yy', 'dd-MMM-y', 'dd MMMM y', 'EEEE, dd MMMM y'], ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1}, {0}', u, '{1} \'at\' {0}', u], ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'], 'BZD', '$', 'Belize Dollar', {
    'BZD': ['$'],
    'JPY': ['JP¥', '¥'],
    'USD': ['US$', '$']
  }, 'ltr', plural];
});

/***/ })

}]);
//# sourceMappingURL=104.js.map