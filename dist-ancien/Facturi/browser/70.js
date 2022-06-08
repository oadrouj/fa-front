(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "pHBe":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/locales/da-GL.js ***!
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
        t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
    if (n === 1 || !(t === 0) && (i === 0 || i === 1)) return 1;
    return 5;
  }

  exports.default = ['da-GL', [['a', 'p'], ['AM', 'PM'], u], [['AM', 'PM'], u, u], [['S', 'M', 'T', 'O', 'T', 'F', 'L'], ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'], ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'], ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']], [['S', 'M', 'T', 'O', 'T', 'F', 'L'], ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'], ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'], ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']], [['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'], ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']], u, [['fKr', 'eKr'], ['f.Kr.', 'e.Kr.'], u], 1, [6, 0], ['dd.MM.y', 'd. MMM y', 'd. MMMM y', 'EEEE \'den\' d. MMMM y'], ['HH.mm', 'HH.mm.ss', 'HH.mm.ss z', 'HH.mm.ss zzzz'], ['{1} {0}', u, '{1} \'kl\'. {0}', u], [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', '.'], ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'DKK', 'kr.', 'dansk krone', {
    'AUD': ['AU$', '$'],
    'DKK': ['kr.'],
    'ISK': [u, 'kr.'],
    'JPY': ['JP¥', '¥'],
    'NOK': [u, 'kr.'],
    'RON': [u, 'L'],
    'SEK': [u, 'kr.'],
    'THB': ['฿'],
    'TWD': ['NT$'],
    'USD': ['US$', '$']
  }, 'ltr', plural];
});

/***/ })

}]);
//# sourceMappingURL=70.js.map