(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1405],{

/***/ "xHNg":
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/hsb.js ***!
  \*****************************************************/
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
    if (v === 0 && i % 100 === 1 || f % 100 === 1) return 1;
    if (v === 0 && i % 100 === 2 || f % 100 === 2) return 2;
    if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4) return 3;
    return 5;
  }

  exports.default = ['hsb', [['dop.', 'pop.'], ['dopołdnja', 'popołdnju'], u], [['dopołdnja', 'popołdnju'], u, u], [['n', 'p', 'w', 's', 'š', 'p', 's'], ['nje', 'pón', 'wut', 'srj', 'štw', 'pja', 'sob'], ['njedźela', 'póndźela', 'wutora', 'srjeda', 'štwórtk', 'pjatk', 'sobota'], ['nj', 'pó', 'wu', 'sr', 'št', 'pj', 'so']], u, [['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'], ['jan.', 'feb.', 'měr.', 'apr.', 'mej.', 'jun.', 'jul.', 'awg.', 'sep.', 'okt.', 'now.', 'dec.'], ['januara', 'februara', 'měrca', 'apryla', 'meje', 'junija', 'julija', 'awgusta', 'septembra', 'oktobra', 'nowembra', 'decembra']], [['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'], ['jan', 'feb', 'měr', 'apr', 'mej', 'jun', 'jul', 'awg', 'sep', 'okt', 'now', 'dec'], ['januar', 'februar', 'měrc', 'apryl', 'meja', 'junij', 'julij', 'awgust', 'september', 'oktober', 'nowember', 'december']], [['př.Chr.n.', 'po Chr.n.'], u, ['před Chrystowym narodźenjom', 'po Chrystowym narodźenju']], 1, [6, 0], ['d.M.yy', 'd.M.y', 'd. MMMM y', 'EEEE, d. MMMM y'], ['H:mm \'hodź\'.', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss zzzz'], ['{1} {0}', u, u, u], [',', '.', ';', '%', '+', '-', 'E', '·', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'EUR', '€', 'euro', {
    'AUD': [u, '$'],
    'PLN': ['zł'],
    'THB': ['฿']
  }, 'ltr', plural];
});

/***/ })

}]);
//# sourceMappingURL=1405.js.map