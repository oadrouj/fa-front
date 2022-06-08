(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-account-module~app-app-module"],{

/***/ "+J/9":
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js ***!
  \*********************************************************************/
/*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function() { return _fixedSizeVirtualScrollStrategyFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function() { return FixedSizeVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function() { return CdkFixedSizeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function() { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function() { return ScrollingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function() { return ScrollDispatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function() { return VIEWPORT_RULER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function() { return CdkVirtualForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function() { return VIRTUAL_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function() { return CdkVirtualScrollViewport; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ "dEu6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "LSvS");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "FWMu");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/collections */ "chLL");









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * The injection token used to specify the virtual scrolling strategy.
 * @type {?}
 */




var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */

var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
  /**
   * @param {?} itemSize The size of the items in the virtually scrolling list.
   * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, FixedSizeVirtualScrollStrategy);

    this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     */

    this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
    /**
     * The attached viewport.
     */

    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param {?} viewport The viewport to attach this strategy to.
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(FixedSizeVirtualScrollStrategy, [{
    key: "attach",
    value: function attach(viewport) {
      this._viewport = viewport;

      this._updateTotalContentSize();

      this._updateRenderedRange();
    }
    /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */

  }, {
    key: "detach",
    value: function detach() {
      this._scrolledIndexChange.complete();

      this._viewport = null;
    }
    /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */

  }, {
    key: "updateItemAndBufferSize",
    value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
      if (maxBufferPx < minBufferPx) {
        throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
      }

      this._itemSize = itemSize;
      this._minBufferPx = minBufferPx;
      this._maxBufferPx = maxBufferPx;

      this._updateTotalContentSize();

      this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */

  }, {
    key: "onContentScrolled",
    value: function onContentScrolled() {
      this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */

  }, {
    key: "onDataLengthChanged",
    value: function onDataLengthChanged() {
      this._updateTotalContentSize();

      this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */

  }, {
    key: "onContentRendered",
    value: function onContentRendered() {}
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */

  }, {
    key: "onRenderedOffsetChanged",
    value: function onRenderedOffsetChanged() {}
    /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */

  }, {
    key: "scrollToIndex",
    value: function scrollToIndex(index, behavior) {
      if (this._viewport) {
        this._viewport.scrollToOffset(index * this._itemSize, behavior);
      }
    }
    /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */

  }, {
    key: "_updateTotalContentSize",
    value: function _updateTotalContentSize() {
      if (!this._viewport) {
        return;
      }

      this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    }
    /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */

  }, {
    key: "_updateRenderedRange",
    value: function _updateRenderedRange() {
      if (!this._viewport) {
        return;
      }
      /** @type {?} */


      var scrollOffset = this._viewport.measureScrollOffset();
      /** @type {?} */


      var firstVisibleIndex = scrollOffset / this._itemSize;
      /** @type {?} */

      var renderedRange = this._viewport.getRenderedRange();
      /** @type {?} */


      var newRange = {
        start: renderedRange.start,
        end: renderedRange.end
      };
      /** @type {?} */

      var viewportSize = this._viewport.getViewportSize();
      /** @type {?} */


      var dataLength = this._viewport.getDataLength();
      /** @type {?} */


      var startBuffer = scrollOffset - newRange.start * this._itemSize;

      if (startBuffer < this._minBufferPx && newRange.start != 0) {
        /** @type {?} */
        var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
        newRange.start = Math.max(0, newRange.start - expandStart);
        newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
      } else {
        /** @type {?} */
        var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

        if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
          /** @type {?} */
          var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

          if (expandEnd > 0) {
            newRange.end = Math.min(dataLength, newRange.end + expandEnd);
            newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
          }
        }
      }

      this._viewport.setRenderedRange(newRange);

      this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

      this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    }
  }]);

  return FixedSizeVirtualScrollStrategy;
}();
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 * @return {?}
 */


function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
/**
 * A virtual scroll strategy that supports fixed-size items.
 */


var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
  function CdkFixedSizeVirtualScroll() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkFixedSizeVirtualScroll);

    this._itemSize = 20;
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    /**
     * The scroll strategy used by this directive.
     */

    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  /**
   * The size of the items in the list (in pixels).
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkFixedSizeVirtualScroll, [{
    key: "itemSize",
    get: function get() {
      return this._itemSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceNumberProperty"])(value);
    }
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels).
     * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
     * @return {?}
     */

  }, {
    key: "minBufferPx",
    get: function get() {
      return this._minBufferPx;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceNumberProperty"])(value);
    }
    /**
     * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
     * @return {?}
     */

  }, {
    key: "maxBufferPx",
    get: function get() {
      return this._maxBufferPx;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceNumberProperty"])(value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
  }]);

  return CdkFixedSizeVirtualScroll;
}();

CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
  return new (t || CdkFixedSizeVirtualScroll)();
};

CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: CdkFixedSizeVirtualScroll,
  selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
  inputs: {
    itemSize: "itemSize",
    minBufferPx: "minBufferPx",
    maxBufferPx: "maxBufferPx"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: VIRTUAL_SCROLL_STRATEGY,
    useFactory: _fixedSizeVirtualScrollStrategyFactory,
    deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(
    /**
    * @return {?}
    */
    function () {
      return CdkFixedSizeVirtualScroll;
    })]
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});
CdkFixedSizeVirtualScroll.propDecorators = {
  itemSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  minBufferPx: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  maxBufferPx: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'cdk-virtual-scroll-viewport[itemSize]',
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return CdkFixedSizeVirtualScroll;
        })]
      }]
    }]
  }], function () {
    return [];
  }, {
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    minBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    maxBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */


var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */

var ScrollDispatcher = /*#__PURE__*/function () {
  /**
   * @param {?} _ngZone
   * @param {?} _platform
   */
  function ScrollDispatcher(_ngZone, _platform) {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ScrollDispatcher);

    this._ngZone = _ngZone;
    this._platform = _platform;
    /**
     * Subject for notifying that a registered scrollable reference element has been scrolled.
     */

    this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /**
     * Keeps track of the global `scroll` and `resize` subscriptions.
     */

    this._globalSubscription = null;
    /**
     * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
     */

    this._scrolledCount = 0;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     */

    this.scrollContainers = new Map();
  }
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param {?} scrollable Scrollable instance to be registered.
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(ScrollDispatcher, [{
    key: "register",
    value: function register(scrollable) {
      var _this = this;

      if (!this.scrollContainers.has(scrollable)) {
        this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this._scrolled.next(scrollable);
        }));
      }
    }
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */

  }, {
    key: "deregister",
    value: function deregister(scrollable) {
      /** @type {?} */
      var scrollableReference = this.scrollContainers.get(scrollable);

      if (scrollableReference) {
        scrollableReference.unsubscribe();
        this.scrollContainers.delete(scrollable);
      }
    }
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */

  }, {
    key: "scrolled",
    value: function scrolled() {
      var _this2 = this;

      var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

      if (!this._platform.isBrowser) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])();
      }

      return new rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"](
      /**
      * @param {?} observer
      * @return {?}
      */
      function (observer) {
        if (!_this2._globalSubscription) {
          _this2._addGlobalListener();
        } // In the case of a 0ms delay, use an observable without auditTime
        // since it does add a perceptible delay in processing overhead.

        /** @type {?} */


        var subscription = auditTimeInMs > 0 ? _this2._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this2._scrolled.subscribe(observer);
        _this2._scrolledCount++;
        return (
          /**
          * @return {?}
          */
          function () {
            subscription.unsubscribe();
            _this2._scrolledCount--;

            if (!_this2._scrolledCount) {
              _this2._removeGlobalListener();
            }
          }
        );
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var _this3 = this;

      this._removeGlobalListener();

      this.scrollContainers.forEach(
      /**
      * @param {?} _
      * @param {?} container
      * @return {?}
      */
      function (_, container) {
        return _this3.deregister(container);
      });

      this._scrolled.complete();
    }
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */

  }, {
    key: "ancestorScrolled",
    value: function ancestorScrolled(elementRef, auditTimeInMs) {
      /** @type {?} */
      var ancestors = this.getAncestorScrollContainers(elementRef);
      return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(
      /**
      * @param {?} target
      * @return {?}
      */
      function (target) {
        return !target || ancestors.indexOf(target) > -1;
      }));
    }
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */

  }, {
    key: "getAncestorScrollContainers",
    value: function getAncestorScrollContainers(elementRef) {
      var _this4 = this;

      /** @type {?} */
      var scrollingContainers = [];
      this.scrollContainers.forEach(
      /**
      * @param {?} _subscription
      * @param {?} scrollable
      * @return {?}
      */
      function (_subscription, scrollable) {
        if (_this4._scrollableContainsElement(scrollable, elementRef)) {
          scrollingContainers.push(scrollable);
        }
      });
      return scrollingContainers;
    }
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */

  }, {
    key: "_scrollableContainsElement",
    value: function _scrollableContainsElement(scrollable, elementRef) {
      /** @type {?} */
      var element = elementRef.nativeElement;
      /** @type {?} */

      var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
      // are the scrollable's element.

      do {
        if (element == scrollableElement) {
          return true;
        }
      } while (element =
      /** @type {?} */
      element.parentElement);

      return false;
    }
    /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */

  }, {
    key: "_addGlobalListener",
    value: function _addGlobalListener() {
      var _this5 = this;

      this._globalSubscription = this._ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(window.document, 'scroll').subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this5._scrolled.next();
        });
      });
    }
    /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */

  }, {
    key: "_removeGlobalListener",
    value: function _removeGlobalListener() {
      if (this._globalSubscription) {
        this._globalSubscription.unsubscribe();

        this._globalSubscription = null;
      }
    }
  }]);

  return ScrollDispatcher;
}();

ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
  return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]));
};

ScrollDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: ScrollDispatcher,
  factory: ScrollDispatcher.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

ScrollDispatcher.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]
  }];
};
/** @nocollapse */


ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"])({
  factory: function ScrollDispatcher_Factory() {
    return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]));
  },
  token: ScrollDispatcher,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](ScrollDispatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]
    }];
  }, null);
})();
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */


function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
  return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */


var SCROLL_DISPATCHER_PROVIDER = {
  // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
  provide: ScrollDispatcher,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_8__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]],
  useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */

var CdkScrollable = /*#__PURE__*/function () {
  /**
   * @param {?} elementRef
   * @param {?} scrollDispatcher
   * @param {?} ngZone
   * @param {?=} dir
   */
  function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
    var _this6 = this;

    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkScrollable);

    this.elementRef = elementRef;
    this.scrollDispatcher = scrollDispatcher;
    this.ngZone = ngZone;
    this.dir = dir;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"](
    /**
    * @param {?} observer
    * @return {?}
    */
    function (observer) {
      return _this6.ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(_this6.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this6._destroyed)).subscribe(observer);
      });
    });
  }
  /**
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkScrollable, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.scrollDispatcher.register(this);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.scrollDispatcher.deregister(this);

      this._destroyed.next();

      this._destroyed.complete();
    }
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */

  }, {
    key: "elementScrolled",
    value: function elementScrolled() {
      return this._elementScrolled;
    }
    /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */

  }, {
    key: "getElementRef",
    value: function getElementRef() {
      return this.elementRef;
    }
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(options) {
      /** @type {?} */
      var el = this.elementRef.nativeElement;
      /** @type {?} */

      var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

      options.left = options.left == null ? isRtl ? options.end : options.start : options.left;
      options.right = options.right == null ? isRtl ? options.start : options.end : options.right; // Rewrite the bottom offset as a top offset.

      if (options.bottom != null) {
        /** @type {?} */
        options.top = el.scrollHeight - el.clientHeight - options.bottom;
      } // Rewrite the right offset as a left offset.


      if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["RtlScrollAxisType"].NORMAL) {
        if (options.left != null) {
          /** @type {?} */
          options.right = el.scrollWidth - el.clientWidth - options.left;
        }

        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["RtlScrollAxisType"].INVERTED) {
          options.left = options.right;
        } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["RtlScrollAxisType"].NEGATED) {
          options.left = options.right ? -options.right : options.right;
        }
      } else {
        if (options.right != null) {
          /** @type {?} */
          options.left = el.scrollWidth - el.clientWidth - options.right;
        }
      }

      this._applyScrollToOptions(options);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "_applyScrollToOptions",
    value: function _applyScrollToOptions(options) {
      /** @type {?} */
      var el = this.elementRef.nativeElement;

      if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["supportsScrollBehavior"])()) {
        el.scrollTo(options);
      } else {
        if (options.top != null) {
          el.scrollTop = options.top;
        }

        if (options.left != null) {
          el.scrollLeft = options.left;
        }
      }
    }
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */

  }, {
    key: "measureScrollOffset",
    value: function measureScrollOffset(from) {
      /** @type {?} */
      var LEFT = 'left';
      /** @type {?} */

      var RIGHT = 'right';
      /** @type {?} */

      var el = this.elementRef.nativeElement;

      if (from == 'top') {
        return el.scrollTop;
      }

      if (from == 'bottom') {
        return el.scrollHeight - el.clientHeight - el.scrollTop;
      } // Rewrite start & end as left or right offsets.

      /** @type {?} */


      var isRtl = this.dir && this.dir.value == 'rtl';

      if (from == 'start') {
        from = isRtl ? RIGHT : LEFT;
      } else if (from == 'end') {
        from = isRtl ? LEFT : RIGHT;
      }

      if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["RtlScrollAxisType"].INVERTED) {
        // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
        // 0 when scrolled all the way right.
        if (from == LEFT) {
          return el.scrollWidth - el.clientWidth - el.scrollLeft;
        } else {
          return el.scrollLeft;
        }
      } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["RtlScrollAxisType"].NEGATED) {
        // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
        // 0 when scrolled all the way right.
        if (from == LEFT) {
          return el.scrollLeft + el.scrollWidth - el.clientWidth;
        } else {
          return -el.scrollLeft;
        }
      } else {
        // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
        // (scrollWidth - clientWidth) when scrolled all the way right.
        if (from == LEFT) {
          return el.scrollLeft;
        } else {
          return el.scrollWidth - el.clientWidth - el.scrollLeft;
        }
      }
    }
  }]);

  return CdkScrollable;
}();

CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
  return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], 8));
};

CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: CdkScrollable,
  selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
});
/** @nocollapse */

CdkScrollable.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
  }, {
    type: ScrollDispatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CdkScrollable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: '[cdk-scrollable], [cdkScrollable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
    }, {
      type: ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Checks if the given ranges are equal.
 * @param {?} r1
 * @param {?} r2
 * @return {?}
 */


function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 * @type {?}
 */


var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_10__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_10__["asapScheduler"];
/**
 * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
 */

var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CdkVirtualScrollViewport, _CdkScrollable);

  var _super = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(CdkVirtualScrollViewport);

  /**
   * @param {?} elementRef
   * @param {?} _changeDetectorRef
   * @param {?} ngZone
   * @param {?} _scrollStrategy
   * @param {?} dir
   * @param {?} scrollDispatcher
   */
  function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
    var _this7;

    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkVirtualScrollViewport);

    _this7 = _super.call(this, elementRef, scrollDispatcher, ngZone, dir);
    _this7.elementRef = elementRef;
    _this7._changeDetectorRef = _changeDetectorRef;
    _this7._scrollStrategy = _scrollStrategy;
    /**
     * Emits when the viewport is detached from a CdkVirtualForOf.
     */

    _this7._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /**
     * Emits when the rendered range changes.
     */

    _this7._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    _this7._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
    // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
    // depending on how the strategy calculates the scrolled index, it may come at a cost to
    // performance.

    /**
     * Emits when the index of the first element visible in the viewport changes.
     */

    _this7.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"](
    /**
    * @param {?} observer
    * @return {?}
    */
    function (observer) {
      return _this7._scrollStrategy.scrolledIndexChange.subscribe(
      /**
      * @param {?} index
      * @return {?}
      */
      function (index) {
        return Promise.resolve().then(
        /**
        * @return {?}
        */
        function () {
          return _this7.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return observer.next(index);
          });
        });
      });
    });
    /**
     * A stream that emits whenever the rendered range changes.
     */

    _this7.renderedRangeStream = _this7._renderedRangeSubject.asObservable();
    /**
     * The total size of all content (in pixels), including content that is not currently rendered.
     */

    _this7._totalContentSize = 0;
    /**
     * A string representing the `style.width` property value to be used for the spacer element.
     */

    _this7._totalContentWidth = '';
    /**
     * A string representing the `style.height` property value to be used for the spacer element.
     */

    _this7._totalContentHeight = '';
    /**
     * The currently rendered range of indices.
     */

    _this7._renderedRange = {
      start: 0,
      end: 0
    };
    /**
     * The length of the data bound to this viewport (in number of items).
     */

    _this7._dataLength = 0;
    /**
     * The size of the viewport (in pixels).
     */

    _this7._viewportSize = 0;
    /**
     * The last rendered content offset that was set.
     */

    _this7._renderedContentOffset = 0;
    /**
     * Whether the last rendered content offset was to the end of the content (and therefore needs to
     * be rewritten as an offset to the start of the content).
     */

    _this7._renderedContentOffsetNeedsRewrite = false;
    /**
     * Whether there is a pending change detection cycle.
     */

    _this7._isChangeDetectionPending = false;
    /**
     * A list of functions to run after the next change detection cycle.
     */

    _this7._runAfterChangeDetection = [];

    if (!_scrollStrategy) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }

    return _this7;
  }
  /**
   * The direction the viewport scrolls.
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkVirtualScrollViewport, [{
    key: "orientation",
    get: function get() {
      return this._orientation;
    }
    /**
     * @param {?} orientation
     * @return {?}
     */
    ,
    set: function set(orientation) {
      if (this._orientation !== orientation) {
        this._orientation = orientation;

        this._calculateSpacerSize();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this8 = this;

      Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
      // the Viewport to be rendered with the correct size before we measure. We run this outside the
      // zone to avoid causing more change detection cycles. We handle the change detection loop
      // ourselves instead.


      this.ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        return Promise.resolve().then(
        /**
        * @return {?}
        */
        function () {
          _this8._measureViewportSize();

          _this8._scrollStrategy.attach(_this8);

          _this8.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(
          /** @type {?} */
          null), // Collect multiple events into one until the next animation frame. This way if
          // there are multiple scroll events in the same frame we only need to recheck
          // our layout once.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this8._scrollStrategy.onContentScrolled();
          });

          _this8._markChangeDetectionNeeded();
        });
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.detach();

      this._scrollStrategy.detach(); // Complete all subjects


      this._renderedRangeSubject.complete();

      this._detachedSubject.complete();

      Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
    }
    /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */

  }, {
    key: "attach",
    value: function attach(forOf) {
      var _this9 = this;

      if (this._forOf) {
        throw Error('CdkVirtualScrollViewport is already attached.');
      } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
      // changes. Run outside the zone to avoid triggering change detection, since we're managing the
      // change detection loop ourselves.


      this.ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this9._forOf = forOf;

        _this9._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this9._detachedSubject)).subscribe(
        /**
        * @param {?} data
        * @return {?}
        */
        function (data) {
          /** @type {?} */
          var newLength = data.length;

          if (newLength !== _this9._dataLength) {
            _this9._dataLength = newLength;

            _this9._scrollStrategy.onDataLengthChanged();
          }

          _this9._doChangeDetection();
        });
      });
    }
    /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */

  }, {
    key: "detach",
    value: function detach() {
      this._forOf = null;

      this._detachedSubject.next();
    }
    /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */

  }, {
    key: "getDataLength",
    value: function getDataLength() {
      return this._dataLength;
    }
    /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */

  }, {
    key: "getViewportSize",
    value: function getViewportSize() {
      return this._viewportSize;
    } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

    /**
     * Get the current rendered range of items.
     * @return {?}
     */

  }, {
    key: "getRenderedRange",
    value: function getRenderedRange() {
      return this._renderedRange;
    }
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */

  }, {
    key: "setTotalContentSize",
    value: function setTotalContentSize(size) {
      if (this._totalContentSize !== size) {
        this._totalContentSize = size;

        this._calculateSpacerSize();

        this._markChangeDetectionNeeded();
      }
    }
    /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */

  }, {
    key: "setRenderedRange",
    value: function setRenderedRange(range) {
      var _this10 = this;

      if (!rangesEqual(this._renderedRange, range)) {
        this._renderedRangeSubject.next(this._renderedRange = range);

        this._markChangeDetectionNeeded(
        /**
        * @return {?}
        */
        function () {
          return _this10._scrollStrategy.onContentRendered();
        });
      }
    }
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */

  }, {
    key: "getOffsetToRenderedContentStart",
    value: function getOffsetToRenderedContentStart() {
      return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    }
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */

  }, {
    key: "setRenderedContentOffset",
    value: function setRenderedContentOffset(offset) {
      var _this11 = this;

      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
      // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
      // in the negative direction.

      /** @type {?} */
      var isRtl = this.dir && this.dir.value == 'rtl';
      /** @type {?} */

      var isHorizontal = this.orientation == 'horizontal';
      /** @type {?} */

      var axis = isHorizontal ? 'X' : 'Y';
      /** @type {?} */

      var axisDirection = isHorizontal && isRtl ? -1 : 1;
      /** @type {?} */

      var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
      this._renderedContentOffset = offset;

      if (to === 'to-end') {
        transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
        // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
        // expand upward).

        this._renderedContentOffsetNeedsRewrite = true;
      }

      if (this._renderedContentTransform != transform) {
        // We know this value is safe because we parse `offset` with `Number()` before passing it
        // into the string.
        this._renderedContentTransform = transform;

        this._markChangeDetectionNeeded(
        /**
        * @return {?}
        */
        function () {
          if (_this11._renderedContentOffsetNeedsRewrite) {
            _this11._renderedContentOffset -= _this11.measureRenderedContentSize();
            _this11._renderedContentOffsetNeedsRewrite = false;

            _this11.setRenderedContentOffset(_this11._renderedContentOffset);
          } else {
            _this11._scrollStrategy.onRenderedOffsetChanged();
          }
        });
      }
    }
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */

  }, {
    key: "scrollToOffset",
    value: function scrollToOffset(offset) {
      var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

      /** @type {?} */
      var options = {
        behavior: behavior
      };

      if (this.orientation === 'horizontal') {
        options.start = offset;
      } else {
        options.top = offset;
      }

      this.scrollTo(options);
    }
    /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */

  }, {
    key: "scrollToIndex",
    value: function scrollToIndex(index) {
      var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

      this._scrollStrategy.scrollToIndex(index, behavior);
    }
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */

  }, {
    key: "measureScrollOffset",
    value: function measureScrollOffset(from) {
      return Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
    }
    /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */

  }, {
    key: "measureRenderedContentSize",
    value: function measureRenderedContentSize() {
      /** @type {?} */
      var contentEl = this._contentWrapper.nativeElement;
      return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    }
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */

  }, {
    key: "measureRangeSize",
    value: function measureRangeSize(range) {
      if (!this._forOf) {
        return 0;
      }

      return this._forOf.measureRangeSize(range, this.orientation);
    }
    /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */

  }, {
    key: "checkViewportSize",
    value: function checkViewportSize() {
      // TODO: Cleanup later when add logic for handling content resize
      this._measureViewportSize();

      this._scrollStrategy.onDataLengthChanged();
    }
    /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */

  }, {
    key: "_measureViewportSize",
    value: function _measureViewportSize() {
      /** @type {?} */
      var viewportEl = this.elementRef.nativeElement;
      this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
    }
    /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */

  }, {
    key: "_markChangeDetectionNeeded",
    value: function _markChangeDetectionNeeded(runAfter) {
      var _this12 = this;

      if (runAfter) {
        this._runAfterChangeDetection.push(runAfter);
      } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
      // properties sequentially we only have to run `_doChangeDetection` once at the end.


      if (!this._isChangeDetectionPending) {
        this._isChangeDetectionPending = true;
        this.ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          return Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            _this12._doChangeDetection();
          });
        });
      }
    }
    /**
     * Run change detection.
     * @private
     * @return {?}
     */

  }, {
    key: "_doChangeDetection",
    value: function _doChangeDetection() {
      var _this13 = this;

      this._isChangeDetectionPending = false; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
      // from the root, since the repeated items are content projected in. Calling `detectChanges`
      // instead does not properly check the projected content.

      this.ngZone.run(
      /**
      * @return {?}
      */
      function () {
        return _this13._changeDetectorRef.markForCheck();
      }); // Apply the content transform. The transform can't be set via an Angular binding because
      // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
      // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
      // the `Number` function first to coerce it to a numeric value.

      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      /** @type {?} */

      var runAfterChangeDetection = this._runAfterChangeDetection;
      this._runAfterChangeDetection = [];

      var _iterator = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(runAfterChangeDetection),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fn = _step.value;
          fn();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Calculates the `style.width` and `style.height` for the spacer element.
     * @private
     * @return {?}
     */

  }, {
    key: "_calculateSpacerSize",
    value: function _calculateSpacerSize() {
      this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
      this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
    }
  }]);

  return CdkVirtualScrollViewport;
}(CdkScrollable);

CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
  return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ScrollDispatcher));
};

CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CdkVirtualScrollViewport,
  selectors: [["cdk-virtual-scroll-viewport"]],
  viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 3);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
    }
  },
  hostAttrs: [1, "cdk-virtual-scroll-viewport"],
  hostVars: 4,
  hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
    }
  },
  inputs: {
    orientation: "orientation"
  },
  outputs: {
    scrolledIndexChange: "scrolledIndexChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: CdkScrollable,
    useExisting: CdkVirtualScrollViewport
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 4,
  consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
  template: function CdkVirtualScrollViewport_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
    }
  },
  styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

CdkVirtualScrollViewport.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [VIRTUAL_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }]
  }, {
    type: ScrollDispatcher
  }];
};

CdkVirtualScrollViewport.propDecorators = {
  orientation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  scrolledIndexChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
  }],
  _contentWrapper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
    args: ['contentWrapper', {
      static: true
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
    args: [{
      selector: 'cdk-virtual-scroll-viewport',
      template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>",
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
      host: {
        'class': 'cdk-virtual-scroll-viewport',
        '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
        '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
      providers: [{
        provide: CdkScrollable,
        useExisting: CdkVirtualScrollViewport
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [VIRTUAL_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: ScrollDispatcher
    }];
  }, {
    scrolledIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    _contentWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
      args: ['contentWrapper', {
        static: true
      }]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Helper to extract size from a DOM Node.
 * @param {?} orientation
 * @param {?} node
 * @return {?}
 */


function getSize(orientation, node) {
  /** @type {?} */
  var el =
  /** @type {?} */
  node;

  if (!el.getBoundingClientRect) {
    return 0;
  }
  /** @type {?} */


  var rect = el.getBoundingClientRect();
  return orientation == 'horizontal' ? rect.width : rect.height;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 * @template T
 */


var CdkVirtualForOf = /*#__PURE__*/function () {
  /**
   * @param {?} _viewContainerRef
   * @param {?} _template
   * @param {?} _differs
   * @param {?} _viewport
   * @param {?} ngZone
   */
  function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
    var _this14 = this;

    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkVirtualForOf);

    this._viewContainerRef = _viewContainerRef;
    this._template = _template;
    this._differs = _differs;
    this._viewport = _viewport;
    /**
     * Emits when the rendered view of the data changes.
     */

    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /**
     * Subject that emits when a new DataSource instance is given.
     */

    this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /**
     * The size of the cache used to store templates that are not being used for re-use later.
     * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
     */

    this.cdkVirtualForTemplateCacheSize = 20;
    /**
     * Emits whenever the data in the current DataSource changes.
     */

    this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(
    /** @type {?} */
    null), // Bundle up the previous and current data sources so we can work with both.
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
    // new one, passing back a stream of data changes which we run through `switchMap` to give
    // us a data stream that emits the latest data from whatever the current `DataSource` is.
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(
    /**
    * @param {?} __0
    * @return {?}
    */
    function (_ref) {
      var _ref2 = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          prev = _ref2[0],
          cur = _ref2[1];

      return _this14._changeDataSource(prev, cur);
    }), // Replay the last emitted data when someone subscribes.
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["shareReplay"])(1));
    /**
     * The differ used to calculate changes to the data.
     */

    this._differ = null;
    /**
     * The template cache used to hold on ot template instancess that have been stamped out, but don't
     * currently need to be rendered. These instances will be reused in the future rather than
     * stamping out brand new ones.
     */

    this._templateCache = [];
    /**
     * Whether the rendered data should be updated during the next ngDoCheck cycle.
     */

    this._needsUpdate = false;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    this.dataStream.subscribe(
    /**
    * @param {?} data
    * @return {?}
    */
    function (data) {
      _this14._data = data;

      _this14._onRenderedDataChange();
    });

    this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._destroyed)).subscribe(
    /**
    * @param {?} range
    * @return {?}
    */
    function (range) {
      _this14._renderedRange = range;
      ngZone.run(
      /**
      * @return {?}
      */
      function () {
        return _this14.viewChange.next(_this14._renderedRange);
      });

      _this14._onRenderedDataChange();
    });

    this._viewport.attach(this);
  }
  /**
   * The DataSource to display.
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkVirtualForOf, [{
    key: "cdkVirtualForOf",
    get: function get() {
      return this._cdkVirtualForOf;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._cdkVirtualForOf = value;
      /** @type {?} */

      var ds = Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__["isDataSource"])(value) ? value : // Slice the value if its an NgIterable to ensure we're working with an array.
      new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"] ? value : Array.prototype.slice.call(value || []));

      this._dataSourceChanges.next(ds);
    }
    /**
     * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
     * the item and produces a value to be used as the item's identity when tracking changes.
     * @return {?}
     */

  }, {
    key: "cdkVirtualForTrackBy",
    get: function get() {
      return this._cdkVirtualForTrackBy;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    ,
    set: function set(fn) {
      var _this15 = this;

      this._needsUpdate = true;
      this._cdkVirtualForTrackBy = fn ?
      /**
      * @param {?} index
      * @param {?} item
      * @return {?}
      */
      function (index, item) {
        return fn(index + (_this15._renderedRange ? _this15._renderedRange.start : 0), item);
      } : undefined;
    }
    /**
     * The template used to stamp out new elements.
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "cdkVirtualForTemplate",
    set: function set(value) {
      if (value) {
        this._needsUpdate = true;
        this._template = value;
      }
    }
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */

  }, {
    key: "measureRangeSize",
    value: function measureRangeSize(range, orientation) {
      if (range.start >= range.end) {
        return 0;
      }

      if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
        throw Error("Error: attempted to measure an item that isn't rendered.");
      } // The index into the list of rendered views for the first item in the range.

      /** @type {?} */


      var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

      /** @type {?} */

      var rangeLen = range.end - range.start; // Loop over all root nodes for all items in the range and sum up their size.

      /** @type {?} */

      var totalSize = 0;
      /** @type {?} */

      var i = rangeLen;

      while (i--) {
        /** @type {?} */
        var view =
        /** @type {?} */
        this._viewContainerRef.get(i + renderedStartIndex);
        /** @type {?} */


        var j = view ? view.rootNodes.length : 0;

        while (j--) {
          totalSize += getSize(orientation,
          /** @type {?} */
          view.rootNodes[j]);
        }
      }

      return totalSize;
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this._differ && this._needsUpdate) {
        // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
        // this list being rendered (can use simpler algorithm) vs needs update due to data actually
        // changing (need to do this diff).

        /** @type {?} */
        var changes = this._differ.diff(this._renderedItems);

        if (!changes) {
          this._updateContext();
        } else {
          this._applyChanges(changes);
        }

        this._needsUpdate = false;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._viewport.detach();

      this._dataSourceChanges.next();

      this._dataSourceChanges.complete();

      this.viewChange.complete();

      this._destroyed.next();

      this._destroyed.complete();

      var _iterator2 = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this._templateCache),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var view = _step2.value;
          view.destroy();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */

  }, {
    key: "_onRenderedDataChange",
    value: function _onRenderedDataChange() {
      if (!this._renderedRange) {
        return;
      }

      this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

      if (!this._differ) {
        this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
      }

      this._needsUpdate = true;
    }
    /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */

  }, {
    key: "_changeDataSource",
    value: function _changeDataSource(oldDs, newDs) {
      if (oldDs) {
        oldDs.disconnect(this);
      }

      this._needsUpdate = true;
      return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])();
    }
    /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */

  }, {
    key: "_updateContext",
    value: function _updateContext() {
      /** @type {?} */
      var count = this._data.length;
      /** @type {?} */

      var i = this._viewContainerRef.length;

      while (i--) {
        /** @type {?} */
        var view =
        /** @type {?} */
        this._viewContainerRef.get(i);

        view.context.index = this._renderedRange.start + i;
        view.context.count = count;

        this._updateComputedContextProperties(view.context);

        view.detectChanges();
      }
    }
    /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "_applyChanges",
    value: function _applyChanges(changes) {
      var _this16 = this;

      // Rearrange the views to put them in the right location.
      changes.forEachOperation(
      /**
      * @param {?} record
      * @param {?} adjustedPreviousIndex
      * @param {?} currentIndex
      * @return {?}
      */
      function (record, adjustedPreviousIndex, currentIndex) {
        if (record.previousIndex == null) {
          // Item added.
          // Item added.

          /** @type {?} */
          var view = _this16._insertViewForNewItem(
          /** @type {?} */
          currentIndex);

          view.context.$implicit = record.item;
        } else if (currentIndex == null) {
          // Item removed.
          _this16._cacheView(_this16._detachView(
          /** @type {?} */
          adjustedPreviousIndex));
        } else {
          // Item moved.
          // Item moved.

          /** @type {?} */
          var _view =
          /** @type {?} */
          _this16._viewContainerRef.get(
          /** @type {?} */
          adjustedPreviousIndex);

          _this16._viewContainerRef.move(_view, currentIndex);

          _view.context.$implicit = record.item;
        }
      }); // Update $implicit for any items that had an identity change.

      changes.forEachIdentityChange(
      /**
      * @param {?} record
      * @return {?}
      */
      function (record) {
        /** @type {?} */
        var view =
        /** @type {?} */
        _this16._viewContainerRef.get(
        /** @type {?} */
        record.currentIndex);

        view.context.$implicit = record.item;
      }); // Update the context variables on all items.

      /** @type {?} */

      var count = this._data.length;
      /** @type {?} */

      var i = this._viewContainerRef.length;

      while (i--) {
        /** @type {?} */
        var view =
        /** @type {?} */
        this._viewContainerRef.get(i);

        view.context.index = this._renderedRange.start + i;
        view.context.count = count;

        this._updateComputedContextProperties(view.context);
      }
    }
    /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */

  }, {
    key: "_cacheView",
    value: function _cacheView(view) {
      if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
        this._templateCache.push(view);
      } else {
        /** @type {?} */
        var index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
        // destroy the view on its own, otherwise destroy it through the
        // container to ensure that all the references are removed.


        if (index === -1) {
          view.destroy();
        } else {
          this._viewContainerRef.remove(index);
        }
      }
    }
    /**
     * Inserts a view for a new item, either from the cache or by creating a new one.
     * @private
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "_insertViewForNewItem",
    value: function _insertViewForNewItem(index) {
      return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
    }
    /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */

  }, {
    key: "_updateComputedContextProperties",
    value: function _updateComputedContextProperties(context) {
      context.first = context.index === 0;
      context.last = context.index === context.count - 1;
      context.even = context.index % 2 === 0;
      context.odd = !context.even;
    }
    /**
     * Creates a new embedded view and moves it to the given index
     * @private
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "_createEmbeddedViewAt",
    value: function _createEmbeddedViewAt(index) {
      // Note that it's important that we insert the item directly at the proper index,
      // rather than inserting it and the moving it in place, because if there's a directive
      // on the same node that injects the `ViewContainerRef`, Angular will insert another
      // comment node which can throw off the move when it's being repeated for all items.
      return this._viewContainerRef.createEmbeddedView(this._template, {
        $implicit:
        /** @type {?} */
        null,
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      }, index);
    }
    /**
     * Inserts a recycled view from the cache at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "_insertViewFromCache",
    value: function _insertViewFromCache(index) {
      /** @type {?} */
      var cachedView = this._templateCache.pop();

      if (cachedView) {
        this._viewContainerRef.insert(cachedView, index);
      }

      return cachedView || null;
    }
    /**
     * Detaches the embedded view at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "_detachView",
    value: function _detachView(index) {
      return (
        /** @type {?} */
        this._viewContainerRef.detach(index)
      );
    }
  }]);

  return CdkVirtualForOf;
}();

CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
  return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
};

CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: CdkVirtualForOf,
  selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
  inputs: {
    cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
    cdkVirtualForOf: "cdkVirtualForOf",
    cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
    cdkVirtualForTemplate: "cdkVirtualForTemplate"
  }
});
/** @nocollapse */

CdkVirtualForOf.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["TemplateRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["IterableDiffers"]
  }, {
    type: CdkVirtualScrollViewport,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["SkipSelf"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }];
};

CdkVirtualForOf.propDecorators = {
  cdkVirtualForOf: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  cdkVirtualForTrackBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  cdkVirtualForTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  cdkVirtualForTemplateCacheSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CdkVirtualForOf, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: '[cdkVirtualFor][cdkVirtualForOf]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["TemplateRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["IterableDiffers"]
    }, {
      type: CdkVirtualScrollViewport,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["SkipSelf"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }];
  }, {
    cdkVirtualForTemplateCacheSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    cdkVirtualForOf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    cdkVirtualForTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    cdkVirtualForTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ScrollingModule = function ScrollingModule() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ScrollingModule);
};

ScrollingModule.ɵfac = function ScrollingModule_Factory(t) {
  return new (t || ScrollingModule)();
};

ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: ScrollingModule
});
ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ScrollingModule, {
    declarations: function declarations() {
      return [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport];
    },
    imports: function imports() {
      return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"]];
    },
    exports: function exports() {
      return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](ScrollingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"]],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport],
      declarations: [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport]
    }]
  }], null, null);
})();
/**
 * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
 * \@breaking-change 8.0.0 delete this alias
 */


var ScrollDispatchModule = function ScrollDispatchModule() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ScrollDispatchModule);
};

ScrollDispatchModule.ɵfac = function ScrollDispatchModule_Factory(t) {
  return new (t || ScrollDispatchModule)();
};

ScrollDispatchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: ScrollDispatchModule
});
ScrollDispatchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [[ScrollingModule], ScrollingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ScrollDispatchModule, {
    imports: [ScrollingModule],
    exports: [ScrollingModule]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](ScrollDispatchModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
    args: [{
      imports: [ScrollingModule],
      exports: [ScrollingModule]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Time in ms to throttle the resize events by default.
 * @type {?}
 */


var DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */

var ViewportRuler = /*#__PURE__*/function () {
  /**
   * @param {?} _platform
   * @param {?} ngZone
   */
  function ViewportRuler(_platform, ngZone) {
    var _this17 = this;

    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ViewportRuler);

    this._platform = _platform;
    ngZone.runOutsideAngular(
    /**
    * @return {?}
    */
    function () {
      _this17._change = _platform.isBrowser ? Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(window, 'orientationchange')) : Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(); // Note that we need to do the subscription inside `runOutsideAngular`
      // since subscribing is what causes the event listener to be added.

      _this17._invalidateCache = _this17.change().subscribe(
      /**
      * @return {?}
      */
      function () {
        return _this17._updateViewportSize();
      });
    });
  }
  /**
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(ViewportRuler, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._invalidateCache.unsubscribe();
    }
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */

  }, {
    key: "getViewportSize",
    value: function getViewportSize() {
      if (!this._viewportSize) {
        this._updateViewportSize();
      }
      /** @type {?} */


      var output = {
        width: this._viewportSize.width,
        height: this._viewportSize.height
      }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

      if (!this._platform.isBrowser) {
        this._viewportSize =
        /** @type {?} */
        null;
      }

      return output;
    }
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */

  }, {
    key: "getViewportRect",
    value: function getViewportRect() {
      // Use the document element's bounding rect rather than the window scroll properties
      // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
      // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
      // conceptual viewports. Under most circumstances these viewports are equivalent, but they
      // can disagree when the page is pinch-zoomed (on devices that support touch).
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
      // We use the documentElement instead of the body because, by default (without a css reset)
      // browsers typically give the document body an 8px margin, which is not included in
      // getBoundingClientRect().

      /** @type {?} */
      var scrollPosition = this.getViewportScrollPosition();

      var _this$getViewportSize = this.getViewportSize(),
          width = _this$getViewportSize.width,
          height = _this$getViewportSize.height;

      return {
        top: scrollPosition.top,
        left: scrollPosition.left,
        bottom: scrollPosition.top + height,
        right: scrollPosition.left + width,
        height: height,
        width: width
      };
    }
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */

  }, {
    key: "getViewportScrollPosition",
    value: function getViewportScrollPosition() {
      // While we can get a reference to the fake document
      // during SSR, it doesn't have getBoundingClientRect.
      if (!this._platform.isBrowser) {
        return {
          top: 0,
          left: 0
        };
      } // The top-left-corner of the viewport is determined by the scroll position of the document
      // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
      // whether `document.body` or `document.documentElement` is the scrolled element, so reading
      // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
      // `document.documentElement` works consistently, where the `top` and `left` values will
      // equal negative the scroll position.

      /** @type {?} */


      var documentElement =
      /** @type {?} */
      document.documentElement;
      /** @type {?} */

      var documentRect = documentElement.getBoundingClientRect();
      /** @type {?} */

      var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
      /** @type {?} */

      var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
      return {
        top: top,
        left: left
      };
    }
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */

  }, {
    key: "change",
    value: function change() {
      var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
      return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["auditTime"])(throttleTime)) : this._change;
    }
    /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */

  }, {
    key: "_updateViewportSize",
    value: function _updateViewportSize() {
      this._viewportSize = this._platform.isBrowser ? {
        width: window.innerWidth,
        height: window.innerHeight
      } : {
        width: 0,
        height: 0
      };
    }
  }]);

  return ViewportRuler;
}();

ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
  return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
};

ViewportRuler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: ViewportRuler,
  factory: ViewportRuler.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

ViewportRuler.ctorParameters = function () {
  return [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }];
};
/** @nocollapse */


ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"])({
  factory: function ViewportRuler_Factory() {
    return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
  },
  token: ViewportRuler,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](ViewportRuler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }];
  }, null);
})();
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */


function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
  return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */


var VIEWPORT_RULER_PROVIDER = {
  // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
  provide: ViewportRuler,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_8__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]],
  useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ "7kUa":
/*!*************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js ***!
  \*************************************************************************/
/*! exports provided: InputText, InputTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return InputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextModule", function() { return InputTextModule; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








var InputText = /*#__PURE__*/function () {
  function InputText(el, ngModel) {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InputText);

    this.el = el;
    this.ngModel = ngModel;
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InputText, [{
    key: "ngDoCheck",
    value: function ngDoCheck() {
      this.updateFilledState();
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      this.updateFilledState();
    }
  }, {
    key: "updateFilledState",
    value: function updateFilledState() {
      this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length || this.ngModel && this.ngModel.model;
    }
  }]);

  return InputText;
}();

InputText.ɵfac = function InputText_Factory(t) {
  return new (t || InputText)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], 8));
};

InputText.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: InputText,
  selectors: [["", "pInputText", ""]],
  hostVars: 6,
  hostBindings: function InputText_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function InputText_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("p-inputtext", true)("p-component", true)("p-filled", ctx.filled);
    }
  }
});

InputText.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }]
  }];
};

InputText.propDecorators = {
  onInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['input', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InputText, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[pInputText]',
      host: {
        '[class.p-inputtext]': 'true',
        '[class.p-component]': 'true',
        '[class.p-filled]': 'filled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
      }]
    }];
  }, {
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['input', ['$event']]
    }]
  });
})();

var InputTextModule = function InputTextModule() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InputTextModule);
};

InputTextModule.ɵfac = function InputTextModule_Factory(t) {
  return new (t || InputTextModule)();
};

InputTextModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: InputTextModule
});
InputTextModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InputTextModule, {
    declarations: function declarations() {
      return [InputText];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
    },
    exports: function exports() {
      return [InputText];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InputTextModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      exports: [InputText],
      declarations: [InputText]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "7zfz":
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js ***!
  \*******************************************************************/
/*! exports provided: ConfirmEventType, ConfirmationService, ContextMenuService, FilterMatchMode, FilterOperator, FilterService, Footer, Header, MessageService, PrimeIcons, PrimeNGConfig, PrimeTemplate, SharedModule, TranslationKeys, TreeDragDropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEventType", function() { return ConfirmEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return ConfirmationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuService", function() { return ContextMenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMatchMode", function() { return FilterMatchMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOperator", function() { return FilterOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeIcons", function() { return PrimeIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeNGConfig", function() { return PrimeNGConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeTemplate", function() { return PrimeTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationKeys", function() { return TranslationKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDragDropService", function() { return TreeDragDropService; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/utils */ "t2ka");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








var _c0 = ["*"];

var FilterMatchMode = function FilterMatchMode() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FilterMatchMode);
};

FilterMatchMode.STARTS_WITH = 'startsWith';
FilterMatchMode.CONTAINS = 'contains';
FilterMatchMode.NOT_CONTAINS = 'notContains';
FilterMatchMode.ENDS_WITH = 'endsWith';
FilterMatchMode.EQUALS = 'equals';
FilterMatchMode.NOT_EQUALS = 'notEquals';
FilterMatchMode.IN = 'in';
FilterMatchMode.LESS_THAN = 'lt';
FilterMatchMode.LESS_THAN_OR_EQUAL_TO = 'lte';
FilterMatchMode.GREATER_THAN = 'gt';
FilterMatchMode.GREATER_THAN_OR_EQUAL_TO = 'gte';
FilterMatchMode.BETWEEN = 'between';
FilterMatchMode.IS = 'is';
FilterMatchMode.IS_NOT = 'isNot';
FilterMatchMode.BEFORE = 'before';
FilterMatchMode.AFTER = 'after';
FilterMatchMode.DATE_IS = 'dateIs';
FilterMatchMode.DATE_IS_NOT = 'dateIsNot';
FilterMatchMode.DATE_BEFORE = 'dateBefore';
FilterMatchMode.DATE_AFTER = 'dateAfter';

var PrimeNGConfig = /*#__PURE__*/function () {
  function PrimeNGConfig() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PrimeNGConfig);

    this.ripple = false;
    this.filterMatchModeOptions = {
      text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
      numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
      date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    };
    this.translation = {
      startsWith: 'Starts with',
      contains: 'Contains',
      notContains: 'Not contains',
      endsWith: 'Ends with',
      equals: 'Equals',
      notEquals: 'Not equals',
      noFilter: 'No Filter',
      lt: 'Less than',
      lte: 'Less than or equal to',
      gt: 'Greater than',
      gte: 'Greater than or equal to',
      is: 'Is',
      isNot: 'Is not',
      before: 'Before',
      after: 'After',
      dateIs: 'Date is',
      dateIsNot: 'Date is not',
      dateBefore: 'Date is before',
      dateAfter: 'Date is after',
      clear: 'Clear',
      apply: 'Apply',
      matchAll: 'Match All',
      matchAny: 'Match Any',
      addRule: 'Add Rule',
      removeRule: 'Remove Rule',
      accept: 'Yes',
      reject: 'No',
      choose: 'Choose',
      upload: 'Upload',
      cancel: 'Cancel',
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: 'Today',
      weekHeader: 'Wk',
      weak: 'Weak',
      medium: 'Medium',
      strong: 'Strong',
      passwordPrompt: 'Enter a password',
      emptyMessage: 'No results found',
      emptyFilterMessage: 'No results found'
    };
    this.translationSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.translationObserver = this.translationSource.asObservable();
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PrimeNGConfig, [{
    key: "getTranslation",
    value: function getTranslation(key) {
      return this.translation[key];
    }
  }, {
    key: "setTranslation",
    value: function setTranslation(value) {
      this.translation = Object.assign(Object.assign({}, this.translation), value);
      this.translationSource.next(this.translation);
    }
  }]);

  return PrimeNGConfig;
}();

PrimeNGConfig.ɵfac = function PrimeNGConfig_Factory(t) {
  return new (t || PrimeNGConfig)();
};

PrimeNGConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function PrimeNGConfig_Factory() {
    return new PrimeNGConfig();
  },
  token: PrimeNGConfig,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PrimeNGConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

var TranslationKeys = function TranslationKeys() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TranslationKeys);
};

TranslationKeys.STARTS_WITH = 'startsWith';
TranslationKeys.CONTAINS = 'contains';
TranslationKeys.NOT_CONTAINS = 'notContains';
TranslationKeys.ENDS_WITH = 'endsWith';
TranslationKeys.EQUALS = 'equals';
TranslationKeys.NOT_EQUALS = 'notEquals';
TranslationKeys.NO_FILTER = 'noFilter';
TranslationKeys.LT = 'lt';
TranslationKeys.LTE = 'lte';
TranslationKeys.GT = 'gt';
TranslationKeys.GTE = 'gte';
TranslationKeys.IS = 'is';
TranslationKeys.IS_NOT = 'isNot';
TranslationKeys.BEFORE = 'before';
TranslationKeys.AFTER = 'after';
TranslationKeys.CLEAR = 'clear';
TranslationKeys.APPLY = 'apply';
TranslationKeys.MATCH_ALL = 'matchAll';
TranslationKeys.MATCH_ANY = 'matchAny';
TranslationKeys.ADD_RULE = 'addRule';
TranslationKeys.REMOVE_RULE = 'removeRule';
TranslationKeys.ACCEPT = 'accept';
TranslationKeys.REJECT = 'reject';
TranslationKeys.CHOOSE = 'choose';
TranslationKeys.UPLOAD = 'upload';
TranslationKeys.CANCEL = 'cancel';
TranslationKeys.DAY_NAMES = 'dayNames';
TranslationKeys.DAY_NAMES_SHORT = 'dayNamesShort';
TranslationKeys.DAY_NAMES_MIN = 'dayNamesMin';
TranslationKeys.MONTH_NAMES = 'monthNames';
TranslationKeys.MONTH_NAMES_SHORT = 'monthNamesShort';
TranslationKeys.TODAY = 'today';
TranslationKeys.WEEK_HEADER = 'weekHeader';
TranslationKeys.WEAK = 'weak';
TranslationKeys.MEDIUM = 'medium';
TranslationKeys.STRONG = 'strong';
TranslationKeys.PASSWORD_PROMPT = 'passwordPrompt';
TranslationKeys.EMPTY_MESSAGE = 'emptyMessage';
TranslationKeys.EMPTY_FILTER_MESSAGE = 'emptyFilterMessage';
var ConfirmEventType;

(function (ConfirmEventType) {
  ConfirmEventType[ConfirmEventType["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType[ConfirmEventType["REJECT"] = 1] = "REJECT";
  ConfirmEventType[ConfirmEventType["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));

var ConfirmationService = /*#__PURE__*/function () {
  function ConfirmationService() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ConfirmationService);

    this.requireConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.acceptConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
    this.accept = this.acceptConfirmationSource.asObservable();
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ConfirmationService, [{
    key: "confirm",
    value: function confirm(confirmation) {
      this.requireConfirmationSource.next(confirmation);
      return this;
    }
  }, {
    key: "close",
    value: function close() {
      this.requireConfirmationSource.next(null);
      return this;
    }
  }, {
    key: "onAccept",
    value: function onAccept() {
      this.acceptConfirmationSource.next();
    }
  }]);

  return ConfirmationService;
}();

ConfirmationService.ɵfac = function ConfirmationService_Factory(t) {
  return new (t || ConfirmationService)();
};

ConfirmationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ConfirmationService,
  factory: ConfirmationService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ConfirmationService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
  }], function () {
    return [];
  }, null);
})();

var FilterService = /*#__PURE__*/function () {
  function FilterService() {
    var _this = this;

    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FilterService);

    this.filters = {
      startsWith: function startsWith(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        var filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        var stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.slice(0, filterValue.length) === filterValue;
      },
      contains: function contains(value, filter, filterLocale) {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        var filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        var stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue) !== -1;
      },
      notContains: function notContains(value, filter, filterLocale) {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        var filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        var stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue) === -1;
      },
      endsWith: function endsWith(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        var filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        var stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
      },
      equals: function equals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();else return primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      },
      notEquals: function notEquals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return false;
        }

        if (value === undefined || value === null) {
          return true;
        }

        if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();else return primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      },
      in: function _in(value, filter) {
        if (filter === undefined || filter === null || filter.length === 0) {
          return true;
        }

        for (var i = 0; i < filter.length; i++) {
          if (primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].equals(value, filter[i])) {
            return true;
          }
        }

        return false;
      },
      between: function between(value, filter) {
        if (filter == null || filter[0] == null || filter[1] == null) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();else return filter[0] <= value && value <= filter[1];
      },
      lt: function lt(value, filter, filterLocale) {
        if (filter === undefined || filter === null) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();else return value < filter;
      },
      lte: function lte(value, filter, filterLocale) {
        if (filter === undefined || filter === null) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();else return value <= filter;
      },
      gt: function gt(value, filter, filterLocale) {
        if (filter === undefined || filter === null) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();else return value > filter;
      },
      gte: function gte(value, filter, filterLocale) {
        if (filter === undefined || filter === null) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();else return value >= filter;
      },
      is: function is(value, filter, filterLocale) {
        return _this.filters.equals(value, filter, filterLocale);
      },
      isNot: function isNot(value, filter, filterLocale) {
        return _this.filters.notEquals(value, filter, filterLocale);
      },
      before: function before(value, filter, filterLocale) {
        return _this.filters.lt(value, filter, filterLocale);
      },
      after: function after(value, filter, filterLocale) {
        return _this.filters.gt(value, filter, filterLocale);
      },
      dateIs: function dateIs(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        return value.toDateString() === filter.toDateString();
      },
      dateIsNot: function dateIsNot(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        return value.toDateString() !== filter.toDateString();
      },
      dateBefore: function dateBefore(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        return value.getTime() < filter.getTime();
      },
      dateAfter: function dateAfter(value, filter) {
        if (filter === undefined || filter === null) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        return value.getTime() > filter.getTime();
      }
    };
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterService, [{
    key: "filter",
    value: function filter(value, fields, filterValue, filterMatchMode, filterLocale) {
      var filteredItems = [];

      if (value) {
        var _iterator = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            var _iterator2 = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(fields),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var field = _step2.value;
                var fieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(item, field);

                if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                  filteredItems.push(item);
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return filteredItems;
    }
  }, {
    key: "register",
    value: function register(rule, fn) {
      this.filters[rule] = fn;
    }
  }]);

  return FilterService;
}();

FilterService.ɵfac = function FilterService_Factory(t) {
  return new (t || FilterService)();
};

FilterService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function FilterService_Factory() {
    return new FilterService();
  },
  token: FilterService,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FilterService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

var ContextMenuService = /*#__PURE__*/function () {
  function ContextMenuService() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ContextMenuService);

    this.activeItemKeyChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContextMenuService, [{
    key: "changeKey",
    value: function changeKey(key) {
      this.activeItemKey = key;
      this.activeItemKeyChange.next(this.activeItemKey);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.activeItemKey = null;
      this.activeItemKeyChange.next(this.activeItemKey);
    }
  }]);

  return ContextMenuService;
}();

ContextMenuService.ɵfac = function ContextMenuService_Factory(t) {
  return new (t || ContextMenuService)();
};

ContextMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ContextMenuService,
  factory: ContextMenuService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ContextMenuService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
  }], function () {
    return [];
  }, null);
})();

var MessageService = /*#__PURE__*/function () {
  function MessageService() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MessageService);

    this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.clearSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.messageObserver = this.messageSource.asObservable();
    this.clearObserver = this.clearSource.asObservable();
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MessageService, [{
    key: "add",
    value: function add(message) {
      if (message) {
        this.messageSource.next(message);
      }
    }
  }, {
    key: "addAll",
    value: function addAll(messages) {
      if (messages && messages.length) {
        this.messageSource.next(messages);
      }
    }
  }, {
    key: "clear",
    value: function clear(key) {
      this.clearSource.next(key || null);
    }
  }]);

  return MessageService;
}();

MessageService.ɵfac = function MessageService_Factory(t) {
  return new (t || MessageService)();
};

MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: MessageService,
  factory: MessageService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MessageService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
  }], function () {
    return [];
  }, null);
})();

var PrimeIcons = function PrimeIcons() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PrimeIcons);
};

PrimeIcons.ALIGN_CENTER = 'pi pi-align-center';
PrimeIcons.ALIGN_JUSTIFY = 'pi pi-align-justify';
PrimeIcons.ALIGN_LEFT = 'pi pi-align-left';
PrimeIcons.ALIGN_RIGHT = 'pi pi-align-right';
PrimeIcons.AMAZON = 'pi pi-amazon';
PrimeIcons.ANDROID = 'pi pi-android';
PrimeIcons.ANGLE_DOUBLE_DOWN = 'pi pi-angle-double-down';
PrimeIcons.ANGLE_DOUBLE_LEFT = 'pi pi-angle-double-left';
PrimeIcons.ANGLE_DOUBLE_RIGHT = 'pi pi-angle-double-right';
PrimeIcons.ANGLE_DOUBLE_UP = 'pi pi-angle-double-up';
PrimeIcons.ANGLE_DOWN = 'pi pi-angle-down';
PrimeIcons.ANGLE_LEFT = 'pi pi-angle-left';
PrimeIcons.ANGLE_RIGHT = 'pi pi-angle-right';
PrimeIcons.ANGLE_UP = 'pi pi-angle-up';
PrimeIcons.APPLE = 'pi pi-apple';
PrimeIcons.ARROW_CIRCLE_DOWN = 'pi pi-arrow-circle-down';
PrimeIcons.ARROW_CIRCLE_LEFT = 'pi pi-arrow-circle-left';
PrimeIcons.ARROW_CIRCLE_RIGHT = 'pi pi-arrow-circle-right';
PrimeIcons.ARROW_CIRCLE_UP = 'pi pi-arrow-circle-up';
PrimeIcons.ARROW_DOWN = 'pi pi-arrow-down';
PrimeIcons.ARROW_LEFT = 'pi pi-arrow-left';
PrimeIcons.ARROW_RIGHT = 'pi pi-arrow-right';
PrimeIcons.ARROW_UP = 'pi pi-arrow-up';
PrimeIcons.BACKWARD = 'pi pi-backward';
PrimeIcons.BAN = 'pi pi-ban';
PrimeIcons.BARS = 'pi pi-bars';
PrimeIcons.BELL = 'pi pi-bell';
PrimeIcons.BOOK = 'pi pi-book';
PrimeIcons.BOOKMARK = 'pi pi-bookmark';
PrimeIcons.BRIEFCASE = 'pi pi-briefcase';
PrimeIcons.CALENDAR_MINUS = 'pi pi-calendar-minus';
PrimeIcons.CALENDAR_PLUS = 'pi pi-calendar-plus';
PrimeIcons.CALENDAR_TIMES = 'pi pi-calendar-times';
PrimeIcons.CALENDAR = 'pi pi-calendar';
PrimeIcons.CAMERA = 'pi pi-camera';
PrimeIcons.CARET_DOWN = 'pi pi-caret-down';
PrimeIcons.CARET_LEFT = 'pi pi-caret-left';
PrimeIcons.CARET_RIGHT = 'pi pi-caret-right';
PrimeIcons.CARET_UP = 'pi pi-caret-up';
PrimeIcons.CHART_BAR = 'pi pi-chart-bar';
PrimeIcons.CHART_LINE = 'pi pi-chart-line';
PrimeIcons.CHECK_CIRCLE = 'pi pi-check-circle';
PrimeIcons.CHECK_SQUARE = 'pi pi-check-square';
PrimeIcons.CHECK = 'pi pi-check';
PrimeIcons.CHEVRON_CIRCLE_DOWN = 'pi pi-chevron-circle-down';
PrimeIcons.CHEVRON_CIRCLE_LEFT = 'pi pi-chevron-circle-left';
PrimeIcons.CHEVRON_CIRCLE_RIGHT = 'pi pi-chevron-circle-right';
PrimeIcons.CHEVRON_CIRCLE_UP = 'pi pi-chevron-circle-up';
PrimeIcons.CHEVRON_DOWN = 'pi pi-chevron-down';
PrimeIcons.CHEVRON_LEFT = 'pi pi-chevron-left';
PrimeIcons.CHEVRON_RIGHT = 'pi pi-chevron-right';
PrimeIcons.CHEVRON_UP = 'pi pi-chevron-up';
PrimeIcons.CLOCK = 'pi pi-clock';
PrimeIcons.CLONE = 'pi pi-clone';
PrimeIcons.CLOUD_DOWNLOAD = 'pi pi-cloud-download';
PrimeIcons.CLOUD_UPLOAD = 'pi pi-cloud-upload';
PrimeIcons.CLOUD = 'pi pi-cloud';
PrimeIcons.COG = 'pi pi-cog';
PrimeIcons.COMMENT = 'pi pi-comment';
PrimeIcons.COMMENTS = 'pi pi-comments';
PrimeIcons.COMPASS = 'pi pi-compass';
PrimeIcons.COPY = 'pi pi-copy';
PrimeIcons.CREDIT_CARD = 'pi pi-credit-card';
PrimeIcons.DESKTOP = 'pi pi-desktop';
PrimeIcons.DISCORD = 'pi pi-discord';
PrimeIcons.DIRECTIONS_ALT = 'pi pi-directions-alt';
PrimeIcons.DIRECTIONS = 'pi pi-directions';
PrimeIcons.DOLLAR = 'pi pi-dollar';
PrimeIcons.DOWNLOAD = 'pi pi-download';
PrimeIcons.EJECT = 'pi pi-eject';
PrimeIcons.ELLIPSIS_H = 'pi pi-ellipsis-h';
PrimeIcons.ELLIPSIS_V = 'pi pi-ellipsis-v';
PrimeIcons.ENVELOPE = 'pi pi-envelope';
PrimeIcons.EXCLAMATION_CIRCLE = 'pi pi-exclamation-circle';
PrimeIcons.EXCLAMATION_TRIANGLE = 'pi pi-exclamation-triangle ';
PrimeIcons.EXTERNAL_LINK = 'pi pi-external-link';
PrimeIcons.EYE_SLASH = 'pi pi-eye-slash';
PrimeIcons.EYE = 'pi pi-eye';
PrimeIcons.FACEBOOK = 'pi pi-facebook';
PrimeIcons.FAST_BACKWARD = 'pi pi-fast-backward';
PrimeIcons.FAST_FORWARD = 'pi pi-fast-forward';
PrimeIcons.FILE_EXCEL = 'pi pi-file-excel';
PrimeIcons.FILE_O = 'pi pi-file-o';
PrimeIcons.FILE_PDF = 'pi pi-file-pdf';
PrimeIcons.FILE = 'pi pi-file';
PrimeIcons.FILTER = 'pi pi-filter';
PrimeIcons.FILTER_SLASH = 'pi pi-filter-slash';
PrimeIcons.FLAG = 'pi pi-flag';
PrimeIcons.FOLDER_OPEN = 'pi pi-folder-open';
PrimeIcons.FOLDER = 'pi pi-folder';
PrimeIcons.FORWARD = 'pi pi-forward';
PrimeIcons.GITHUB = 'pi pi-github';
PrimeIcons.GLOBE = 'pi pi-globe';
PrimeIcons.GOOGLE = 'pi pi-google';
PrimeIcons.HEART = 'pi pi-heart';
PrimeIcons.HOME = 'pi pi-home';
PrimeIcons.ID_CARD = 'pi pi-id-card';
PrimeIcons.IMAGE = 'pi pi-image';
PrimeIcons.IMAGES = 'pi pi-images';
PrimeIcons.INBOX = 'pi pi-inbox';
PrimeIcons.INFO_CIRCLE = 'pi pi-info-circle';
PrimeIcons.INFO = 'pi pi-info';
PrimeIcons.KEY = 'pi pi-key';
PrimeIcons.LINK = 'pi pi-link';
PrimeIcons.LIST = 'pi pi-list';
PrimeIcons.LOCK_OPEN = 'pi pi-lock-open';
PrimeIcons.LOCK = 'pi pi-lock';
PrimeIcons.MAP = 'pi pi-map';
PrimeIcons.MAP_MARKER = 'pi pi-map-marker';
PrimeIcons.MICROSOFT = 'pi pi-microsoft';
PrimeIcons.MINUS_CIRCLE = 'pi pi-minus-circle';
PrimeIcons.MINUS = 'pi pi-minus';
PrimeIcons.MOBILE = 'pi pi-mobile';
PrimeIcons.MONEY_BILL = 'pi pi-money-bill';
PrimeIcons.MOON = 'pi pi-moon';
PrimeIcons.PALETTE = 'pi pi-palette';
PrimeIcons.PAPERCLIP = 'pi pi-paperclip';
PrimeIcons.PAUSE = 'pi pi-pause';
PrimeIcons.PAYPAL = 'pi pi-paypal';
PrimeIcons.PENCIL = 'pi pi-pencil';
PrimeIcons.PERCENTAGE = 'pi pi-percentage';
PrimeIcons.PHONE = 'pi pi-phone';
PrimeIcons.PLAY = 'pi pi-play';
PrimeIcons.PLUS_CIRCLE = 'pi pi-plus-circle';
PrimeIcons.PLUS = 'pi pi-plus';
PrimeIcons.POWER_OFF = 'pi pi-power-off';
PrimeIcons.PRINT = 'pi pi-print';
PrimeIcons.QUESTION_CIRCLE = 'pi pi-question-circle';
PrimeIcons.QUESTION = 'pi pi-question';
PrimeIcons.RADIO_OFF = 'pi pi-radio-off';
PrimeIcons.RADIO_ON = 'pi pi-radio-on';
PrimeIcons.REFRESH = 'pi pi-refresh';
PrimeIcons.REPLAY = 'pi pi-replay';
PrimeIcons.REPLY = 'pi pi-reply';
PrimeIcons.SAVE = 'pi pi-save';
PrimeIcons.SEARCH_MINUS = 'pi pi-search-minus';
PrimeIcons.SEARCH_PLUS = 'pi pi-search-plus';
PrimeIcons.SEARCH = 'pi pi-search';
PrimeIcons.SEND = 'pi pi-send';
PrimeIcons.SHARE_ALT = 'pi pi-share-alt';
PrimeIcons.SHIELD = 'pi pi-shield';
PrimeIcons.SHOPPING_CART = 'pi pi-shopping-cart';
PrimeIcons.SIGN_IN = 'pi pi-sign-in';
PrimeIcons.SIGN_OUT = 'pi pi-sign-out';
PrimeIcons.SITEMAP = 'pi pi-sitemap';
PrimeIcons.SLACK = 'pi pi-slack';
PrimeIcons.SLIDERS_H = 'pi pi-sliders-h';
PrimeIcons.SLIDERS_V = 'pi pi-sliders-v';
PrimeIcons.SORT_ALPHA_ALT_DOWN = 'pi pi-sort-alpha-alt-down';
PrimeIcons.SORT_ALPHA_ALT_UP = 'pi pi-sort-alpha-alt-up';
PrimeIcons.SORT_ALPHA_DOWN = 'pi pi-sort-alpha-down';
PrimeIcons.SORT_ALPHA_UP = 'pi pi-sort-alpha-up';
PrimeIcons.SORT_ALT = 'pi pi-sort-alt';
PrimeIcons.SORT_AMOUNT_DOWN_ALT = 'pi pi-sort-amount-down-alt';
PrimeIcons.SORT_AMOUNT_DOWN = 'pi pi-sort-amount-down';
PrimeIcons.SORT_AMOUNT_UP_ALT = 'pi pi-sort-amount-up-alt';
PrimeIcons.SORT_AMOUNT_UP = 'pi pi-sort-amount-up';
PrimeIcons.SORT_DOWN = 'pi pi-sort-down';
PrimeIcons.SORT_NUMERIC_ALT_DOWN = 'pi pi-sort-numeric-alt-down';
PrimeIcons.SORT_NUMERIC_ALT_UP = 'pi pi-sort-numeric-alt-up';
PrimeIcons.SORT_NUMERIC_DOWN = 'pi pi-sort-numeric-down';
PrimeIcons.SORT_NUMERIC_UP = 'pi pi-sort-numeric-up';
PrimeIcons.SORT_UP = 'pi pi-sort-up';
PrimeIcons.SORT = 'pi pi-sort';
PrimeIcons.SPINNER = 'pi pi-spinner';
PrimeIcons.STAR_O = 'pi pi-star-o';
PrimeIcons.STAR = 'pi pi-star';
PrimeIcons.STEP_BACKWARD_ALT = 'pi pi-step-backward-alt';
PrimeIcons.STEP_BACKWARD = 'pi pi-step-backward';
PrimeIcons.STEP_FORWARD_ALT = 'pi pi-step-forward-alt';
PrimeIcons.STEP_FORWARD = 'pi pi-step-forward';
PrimeIcons.SUN = 'pi pi-sun';
PrimeIcons.TABLE = 'pi pi-table';
PrimeIcons.TABLET = 'pi pi-tablet';
PrimeIcons.TAG = 'pi pi-tag';
PrimeIcons.TAGS = 'pi pi-tags';
PrimeIcons.TH_LARGE = 'pi pi-th-large';
PrimeIcons.THUMBS_DOWN = 'pi pi-thumbs-down';
PrimeIcons.THUMBS_UP = 'pi pi-thumbs-up';
PrimeIcons.TICKET = 'pi pi-ticket';
PrimeIcons.TIMES_CIRCLE = 'pi pi-times-circle';
PrimeIcons.TIMES = 'pi pi-times';
PrimeIcons.TRASH = 'pi pi-trash';
PrimeIcons.TWITTER = 'pi pi-twitter';
PrimeIcons.UNDO = 'pi pi-undo';
PrimeIcons.UNLOCK = 'pi pi-unlock';
PrimeIcons.UPLOAD = 'pi pi-upload';
PrimeIcons.USER_EDIT = 'pi pi-user-edit';
PrimeIcons.USER_MINUS = 'pi pi-user-minus';
PrimeIcons.USER_PLUS = 'pi pi-user-plus';
PrimeIcons.USER = 'pi pi-user';
PrimeIcons.USERS = 'pi pi-users';
PrimeIcons.VIDEO = 'pi pi-video';
PrimeIcons.VIMEO = 'pi pi-vimeo';
PrimeIcons.VOLUME_DOWN = 'pi pi-volume-down';
PrimeIcons.VOLUME_OFF = 'pi pi-volume-off';
PrimeIcons.VOLUME_UP = 'pi pi-volume-up';
PrimeIcons.YOUTUBE = 'pi pi-youtube';
PrimeIcons.WALLET = 'pi pi-wallet';
PrimeIcons.WIFI = 'pi pi-wifi';
PrimeIcons.WINDOW_MAXIMIZE = 'pi pi-window-maximize';
PrimeIcons.WINDOW_MINIMIZE = 'pi pi-window-minimize';

var FilterOperator = function FilterOperator() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FilterOperator);
};

FilterOperator.AND = 'and';
FilterOperator.OR = 'or';

var Header = function Header() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Header);
};

Header.ɵfac = function Header_Factory(t) {
  return new (t || Header)();
};

Header.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: Header,
  selectors: [["p-header"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Header, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'p-header',
      template: '<ng-content></ng-content>'
    }]
  }], null, null);
})();

var Footer = function Footer() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Footer);
};

Footer.ɵfac = function Footer_Factory(t) {
  return new (t || Footer)();
};

Footer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: Footer,
  selectors: [["p-footer"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Footer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'p-footer',
      template: '<ng-content></ng-content>'
    }]
  }], null, null);
})();

var PrimeTemplate = /*#__PURE__*/function () {
  function PrimeTemplate(template) {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PrimeTemplate);

    this.template = template;
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PrimeTemplate, [{
    key: "getType",
    value: function getType() {
      return this.name;
    }
  }]);

  return PrimeTemplate;
}();

PrimeTemplate.ɵfac = function PrimeTemplate_Factory(t) {
  return new (t || PrimeTemplate)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
};

PrimeTemplate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: PrimeTemplate,
  selectors: [["", "pTemplate", ""]],
  inputs: {
    type: "type",
    name: ["pTemplate", "name"]
  }
});

PrimeTemplate.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
  }];
};

PrimeTemplate.propDecorators = {
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
    args: ['pTemplate']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PrimeTemplate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[pTemplate]',
      host: {}
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['pTemplate']
    }]
  });
})();

var SharedModule = function SharedModule() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SharedModule);
};

SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};

SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: function declarations() {
      return [Header, Footer, PrimeTemplate];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]];
    },
    exports: function exports() {
      return [Header, Footer, PrimeTemplate];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SharedModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
      exports: [Header, Footer, PrimeTemplate],
      declarations: [Header, Footer, PrimeTemplate]
    }]
  }], null, null);
})();

var TreeDragDropService = /*#__PURE__*/function () {
  function TreeDragDropService() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TreeDragDropService);

    this.dragStartSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.dragStopSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.dragStart$ = this.dragStartSource.asObservable();
    this.dragStop$ = this.dragStopSource.asObservable();
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TreeDragDropService, [{
    key: "startDrag",
    value: function startDrag(event) {
      this.dragStartSource.next(event);
    }
  }, {
    key: "stopDrag",
    value: function stopDrag(event) {
      this.dragStopSource.next(event);
    }
  }]);

  return TreeDragDropService;
}();

TreeDragDropService.ɵfac = function TreeDragDropService_Factory(t) {
  return new (t || TreeDragDropService)();
};

TreeDragDropService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TreeDragDropService,
  factory: TreeDragDropService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TreeDragDropService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
  }], function () {
    return [];
  }, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "FCZ4":
/*!***************************************************!*\
  !*** ./src/shared/animations/routerTransition.ts ***!
  \***************************************************/
/*! exports provided: appModuleAnimation, accountModuleAnimation, slideFromBottom, slideFromUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appModuleAnimation", function() { return appModuleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountModuleAnimation", function() { return accountModuleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromBottom", function() { return slideFromBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromUp", function() { return slideFromUp; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

function appModuleAnimation() {
    return slideFromBottom();
}
function accountModuleAnimation() {
    return slideFromUp();
}
function slideFromBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'padding-top': '20px', opacity: '0' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'padding-top': '0px', opacity: '1' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.33s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', 'padding-top': '0px' }))
        ])
    ]);
}
function slideFromUp() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'margin-top': '10px', opacity: '0' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'margin-top': '0px', opacity: '1' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', 'margin-top': '0px' }))
        ])
    ]);
}


/***/ }),

/***/ "FWMu":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/bidi.js ***!
  \****************************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */


var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('cdk-dir-doc', {
  providedIn: 'root',
  factory: DIR_DOCUMENT_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */

function DIR_DOCUMENT_FACTORY() {
  return Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */


var Directionality = /*#__PURE__*/function () {
  /**
   * @param {?=} _document
   */
  function Directionality(_document) {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Directionality);

    /**
     * The current 'ltr' or 'rtl' value.
     */
    this.value = 'ltr';
    /**
     * Stream that emits whenever the 'ltr' / 'rtl' state changes.
     */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();

    if (_document) {
      // TODO: handle 'auto' value -
      // We still need to account for dir="auto".
      // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
      // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now

      /** @type {?} */
      var bodyDir = _document.body ? _document.body.dir : null;
      /** @type {?} */

      var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      /** @type {?} */

      var value = bodyDir || htmlDir;
      this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
    }
  }
  /**
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Directionality, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.change.complete();
    }
  }]);

  return Directionality;
}();

Directionality.ɵfac = function Directionality_Factory(t) {
  return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](DIR_DOCUMENT, 8));
};

Directionality.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: Directionality,
  factory: Directionality.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

Directionality.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [DIR_DOCUMENT]
    }]
  }];
};
/** @nocollapse */


Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function Directionality_Factory() {
    return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(DIR_DOCUMENT, 8));
  },
  token: Directionality,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Directionality, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [DIR_DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */


var Dir = /*#__PURE__*/function () {
  function Dir() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dir);

    /**
     * Normalized direction that accounts for invalid/unsupported values.
     */
    this._dir = 'ltr';
    /**
     * Whether the `value` has been set to its initial value.
     */

    this._isInitialized = false;
    /**
     * Event emitted when the direction changes.
     */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
  }
  /**
   * \@docs-private
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dir, [{
    key: "dir",
    get: function get() {
      return this._dir;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      /** @type {?} */
      var old = this._dir;
      /** @type {?} */

      var normalizedValue = value ? value.toLowerCase() : value;
      this._rawDir = value;
      this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

      if (old !== this._dir && this._isInitialized) {
        this.change.emit(this._dir);
      }
    }
    /**
     * Current layout direction of the element.
     * @return {?}
     */

  }, {
    key: "value",
    get: function get() {
      return this.dir;
    }
    /**
     * Initialize once default value has been set.
     * @return {?}
     */

  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      this._isInitialized = true;
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.change.complete();
    }
  }]);

  return Dir;
}();

Dir.ɵfac = function Dir_Factory(t) {
  return new (t || Dir)();
};

Dir.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: Directionality,
    useExisting: Dir
  }])]
});
Dir.propDecorators = {
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
    args: ['dirChange']
  }],
  dir: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Dir, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[dir]',
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        '[attr.dir]': '_rawDir'
      },
      exportAs: 'dir'
    }]
  }], function () {
    return [];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
      args: ['dirChange']
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var BidiModule = function BidiModule() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BidiModule);
};

BidiModule.ɵfac = function BidiModule_Factory(t) {
  return new (t || BidiModule)();
};

BidiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: BidiModule
});
BidiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BidiModule, {
    declarations: [Dir],
    exports: [Dir]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BidiModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      exports: [Dir],
      declarations: [Dir]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "LSvS":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/platform.js ***!
  \********************************************************************/
/*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType, _supportsShadowDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function() { return RtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function() { return _supportsShadowDom; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.

/** @type {?} */


var hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687

try {
  hasV8BreakIterator = typeof Intl !== 'undefined' &&
  /** @type {?} */
  Intl.v8BreakIterator;
} catch (_a) {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */


var Platform =
/**
 * \@breaking-change 8.0.0 remove optional decorator
 * @param {?=} _platformId
 */
function Platform(_platformId) {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Platform);

  this._platformId = _platformId;
  /**
   * Whether the Angular application is being rendered in the browser.
   * We want to use the Angular platform check because if the Document is shimmed
   * without the navigator, the following checks will fail. This is preferred because
   * sometimes the Document may be shimmed without the user's knowledge or intention
   */

  this.isBrowser = this._platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
  /**
   * Whether the current browser is Microsoft Edge.
   */

  this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  /**
   * Whether the current rendering engine is Microsoft Trident.
   */

  this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
  /**
   * Whether the current rendering engine is Blink.
   */
  // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

  this.BLINK = this.isBrowser && !!(
  /** @type {?} */
  window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
  /**
   * Whether the current rendering engine is WebKit.
   */
  // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
  // ensure that Webkit runs standalone and is not used as another engine's base.

  this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  /**
   * Whether the current platform is Apple iOS.
   */

  this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
  /**
   * Whether the current browser is Firefox.
   */
  // It's difficult to detect the plain Gecko engine, because most of the browsers identify
  // them self as Gecko-like browsers and modify the userAgent's according to that.
  // Since we only cover one explicit Firefox case, we can simply check for Firefox
  // instead of having an unstable check for Gecko.

  this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  /**
   * Whether the current platform is Android.
   */
  // Trident on mobile adds the android platform to the userAgent to trick detections.

  this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
  /**
   * Whether the current browser is Safari.
   */
  // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
  // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
  // Safari browser should also use Webkit as its layout engine.

  this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
};

Platform.ɵfac = function Platform_Factory(t) {
  return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], 8));
};

Platform.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: Platform,
  factory: Platform.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

Platform.ctorParameters = function () {
  return [{
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
    }]
  }];
};
/** @nocollapse */


Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
  factory: function Platform_Factory() {
    return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], 8));
  },
  token: Platform,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Platform, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
      }]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var PlatformModule = function PlatformModule() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PlatformModule);
};

PlatformModule.ɵfac = function PlatformModule_Factory(t) {
  return new (t || PlatformModule)();
};

PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PlatformModule
});
PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlatformModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
    args: [{}]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */


var supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */

var candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
// first changing it to something else:
// The specified value "" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
/**
 * @return {?} The input types supported by this browser.
 */

function getSupportedInputTypes() {
  // Result is cached.
  if (supportedInputTypes) {
    return supportedInputTypes;
  } // We can't check if an input type is not supported until we're on the browser, so say that
  // everything is supported when not on the browser. We don't use `Platform` here since it's
  // just a helper function and can't inject it.


  if (typeof document !== 'object' || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }
  /** @type {?} */


  var featureTestInput = document.createElement('input');
  supportedInputTypes = new Set(candidateInputTypes.filter(
  /**
  * @param {?} value
  * @return {?}
  */
  function (value) {
    featureTestInput.setAttribute('type', value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */


var supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */

function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test',
      /** @type {?} */
      null, Object.defineProperty({}, 'passive', {
        get:
        /**
        * @return {?}
        */
        function get() {
          return supportsPassiveEvents = true;
        }
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }

  return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */


function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */


var RtlScrollAxisType = {
  /**
   * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
   * all the way right.
   */
  NORMAL: 0,

  /**
   * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
   * all the way right.
   */
  NEGATED: 1,

  /**
   * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
   * all the way right.
   */
  INVERTED: 2
};
RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */

var rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */

function supportsScrollBehavior() {
  return !!(typeof document == 'object' && 'scrollBehavior' in
  /** @type {?} */
  document.documentElement.style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */


function getRtlScrollAxisType() {
  // We can't check unless we're on the browser. Just assume 'normal' if we're not.
  if (typeof document !== 'object' || !document) {
    return RtlScrollAxisType.NORMAL;
  }

  if (!rtlScrollAxisType) {
    // Create a 1px wide scrolling container and a 2px wide content element.

    /** @type {?} */
    var scrollContainer = document.createElement('div');
    /** @type {?} */

    var containerStyle = scrollContainer.style;
    scrollContainer.dir = 'rtl';
    containerStyle.height = '1px';
    containerStyle.width = '1px';
    containerStyle.overflow = 'auto';
    containerStyle.visibility = 'hidden';
    containerStyle.pointerEvents = 'none';
    containerStyle.position = 'absolute';
    /** @type {?} */

    var content = document.createElement('div');
    /** @type {?} */

    var contentStyle = content.style;
    contentStyle.width = '2px';
    contentStyle.height = '1px';
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
    // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
    // dealing with one of the other two types of browsers.

    if (scrollContainer.scrollLeft === 0) {
      // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
      // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
      // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
      // return 0 when we read it again.
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }

    /** @type {?} */
    scrollContainer.parentNode.removeChild(scrollContainer);
  }

  return rtlScrollAxisType;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var shadowDomIsSupported;
/**
 * Checks whether the user's browser support Shadow DOM.
 * @return {?}
 */

function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    /** @type {?} */
    var head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (
    /** @type {?} */
    head.createShadowRoot || head.attachShadow));
  }

  return shadowDomIsSupported;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "Q4Mo":
/*!**********************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js ***!
  \**********************************************************************/
/*! exports provided: Ripple, RippleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleModule", function() { return RippleModule; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ "YyRF");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");









var Ripple = /*#__PURE__*/function () {
  function Ripple(el, zone, config) {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ripple);

    this.el = el;
    this.zone = zone;
    this.config = config;
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Ripple, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;

      if (this.config && this.config.ripple) {
        this.zone.runOutsideAngular(function () {
          _this.create();

          _this.mouseDownListener = _this.onMouseDown.bind(_this);

          _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
        });
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      var ink = this.getInk();

      if (!ink || getComputedStyle(ink, null).display === 'none') {
        return;
      }

      primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(ink, 'p-ink-active');

      if (!primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHeight(ink) && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getWidth(ink)) {
        var d = Math.max(primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.el.nativeElement), primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.el.nativeElement));
        ink.style.height = d + 'px';
        ink.style.width = d + 'px';
      }

      var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.el.nativeElement);
      var x = event.pageX - offset.left + document.body.scrollTop - primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getWidth(ink) / 2;
      var y = event.pageY - offset.top + document.body.scrollLeft - primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHeight(ink) / 2;
      ink.style.top = y + 'px';
      ink.style.left = x + 'px';
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(ink, 'p-ink-active');
    }
  }, {
    key: "getInk",
    value: function getInk() {
      for (var i = 0; i < this.el.nativeElement.children.length; i++) {
        if (this.el.nativeElement.children[i].className.indexOf('p-ink') !== -1) {
          return this.el.nativeElement.children[i];
        }
      }

      return null;
    }
  }, {
    key: "resetInk",
    value: function resetInk() {
      var ink = this.getInk();

      if (ink) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(ink, 'p-ink-active');
      }
    }
  }, {
    key: "onAnimationEnd",
    value: function onAnimationEnd(event) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(event.currentTarget, 'p-ink-active');
    }
  }, {
    key: "create",
    value: function create() {
      var ink = document.createElement('span');
      ink.className = 'p-ink';
      this.el.nativeElement.appendChild(ink);
      this.animationListener = this.onAnimationEnd.bind(this);
      ink.addEventListener('animationend', this.animationListener);
    }
  }, {
    key: "remove",
    value: function remove() {
      var ink = this.getInk();

      if (ink) {
        this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
        ink.removeEventListener('animationend', this.animationListener);
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeElement(ink);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.config && this.config.ripple) {
        this.remove();
      }
    }
  }]);

  return Ripple;
}();

Ripple.ɵfac = function Ripple_Factory(t) {
  return new (t || Ripple)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeNGConfig"], 8));
};

Ripple.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: Ripple,
  selectors: [["", "pRipple", ""]],
  hostVars: 2,
  hostBindings: function Ripple_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("p-ripple", true);
    }
  }
});

Ripple.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeNGConfig"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Ripple, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[pRipple]',
      host: {
        '[class.p-ripple]': 'true'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeNGConfig"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
      }]
    }];
  }, null);
})();

var RippleModule = function RippleModule() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RippleModule);
};

RippleModule.ɵfac = function RippleModule_Factory(t) {
  return new (t || RippleModule)();
};

RippleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: RippleModule
});
RippleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RippleModule, {
    declarations: function declarations() {
      return [Ripple];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
    },
    exports: function exports() {
      return [Ripple];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RippleModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      exports: [Ripple],
      declarations: [Ripple]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "YyRF":
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js ***!
  \*******************************************************************/
/*! exports provided: ConnectedOverlayScrollHandler, DomHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedOverlayScrollHandler", function() { return ConnectedOverlayScrollHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomHandler", function() { return DomHandler; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");




/**
 * @dynamic is for runtime initializing DomHandler.browser
 *
 * If delete below comment, we can see this error message:
 *  Metadata collected contains an error that will be reported at runtime:
 *  Only initialized variables and constants can be referenced
 *  because the value of this variable is needed by the template compiler.
 */
// @dynamic
var DomHandler = /*#__PURE__*/function () {
  function DomHandler() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DomHandler);
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DomHandler, null, [{
    key: "addClass",
    value: function addClass(element, className) {
      if (element.classList) element.classList.add(className);else element.className += ' ' + className;
    }
  }, {
    key: "addMultipleClasses",
    value: function addMultipleClasses(element, className) {
      if (element.classList) {
        var styles = className.trim().split(' ');

        for (var i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        var _styles = className.split(' ');

        for (var _i = 0; _i < _styles.length; _i++) {
          element.className += ' ' + _styles[_i];
        }
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, className) {
      if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }, {
    key: "hasClass",
    value: function hasClass(element, className) {
      if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
  }, {
    key: "siblings",
    value: function siblings(element) {
      return Array.prototype.filter.call(element.parentNode.children, function (child) {
        return child !== element;
      });
    }
  }, {
    key: "find",
    value: function find(element, selector) {
      return Array.from(element.querySelectorAll(selector));
    }
  }, {
    key: "findSingle",
    value: function findSingle(element, selector) {
      if (element) {
        return element.querySelector(selector);
      }

      return null;
    }
  }, {
    key: "index",
    value: function index(element) {
      var children = element.parentNode.childNodes;
      var num = 0;

      for (var i = 0; i < children.length; i++) {
        if (children[i] == element) return num;
        if (children[i].nodeType == 1) num++;
      }

      return -1;
    }
  }, {
    key: "indexWithinGroup",
    value: function indexWithinGroup(element, attributeName) {
      var children = element.parentNode ? element.parentNode.childNodes : [];
      var num = 0;

      for (var i = 0; i < children.length; i++) {
        if (children[i] == element) return num;
        if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1) num++;
      }

      return -1;
    }
  }, {
    key: "relativePosition",
    value: function relativePosition(element, target) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var targetHeight = target.offsetHeight;
      var targetOffset = target.getBoundingClientRect();
      var viewport = this.getViewport();
      var top, left;

      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;
        element.style.transformOrigin = 'bottom';

        if (targetOffset.top + top < 0) {
          top = -1 * targetOffset.top;
        }
      } else {
        top = targetHeight;
        element.style.transformOrigin = 'top';
      }

      if (elementDimensions.width > viewport.width) {
        // element wider then viewport and cannot fit on screen (align at left side of viewport)
        left = targetOffset.left * -1;
      } else if (targetOffset.left + elementDimensions.width > viewport.width) {
        // element wider then viewport but can be fit on screen (align at right side of viewport)
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      } else {
        // element fits on screen (align with target)
        left = 0;
      }

      element.style.top = top + 'px';
      element.style.left = left + 'px';
    }
  }, {
    key: "absolutePosition",
    value: function absolutePosition(element, target) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var elementOuterHeight = elementDimensions.height;
      var elementOuterWidth = elementDimensions.width;
      var targetOuterHeight = target.offsetHeight;
      var targetOuterWidth = target.offsetWidth;
      var targetOffset = target.getBoundingClientRect();
      var windowScrollTop = this.getWindowScrollTop();
      var windowScrollLeft = this.getWindowScrollLeft();
      var viewport = this.getViewport();
      var top, left;

      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        element.style.transformOrigin = 'bottom';

        if (top < 0) {
          top = windowScrollTop;
        }
      } else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
        element.style.transformOrigin = 'top';
      }

      if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);else left = targetOffset.left + windowScrollLeft;
      element.style.top = top + 'px';
      element.style.left = left + 'px';
    }
  }, {
    key: "getParents",
    value: function getParents(element) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return element['parentNode'] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
    }
  }, {
    key: "getScrollableParents",
    value: function getScrollableParents(element) {
      var scrollableParents = [];

      if (element) {
        var parents = this.getParents(element);
        var overflowRegex = /(auto|scroll)/;

        var overflowCheck = function overflowCheck(node) {
          var styleDeclaration = window['getComputedStyle'](node, null);
          return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
        };

        var _iterator = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(parents),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var parent = _step.value;
            var scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];

            if (scrollSelectors) {
              var selectors = scrollSelectors.split(',');

              var _iterator2 = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(selectors),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var selector = _step2.value;
                  var el = this.findSingle(parent, selector);

                  if (el && overflowCheck(el)) {
                    scrollableParents.push(el);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (parent.nodeType !== 9 && overflowCheck(parent)) {
              scrollableParents.push(parent);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return scrollableParents;
    }
  }, {
    key: "getHiddenElementOuterHeight",
    value: function getHiddenElementOuterHeight(element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementHeight = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementHeight;
    }
  }, {
    key: "getHiddenElementOuterWidth",
    value: function getHiddenElementOuterWidth(element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementWidth = element.offsetWidth;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementWidth;
    }
  }, {
    key: "getHiddenElementDimensions",
    value: function getHiddenElementDimensions(element) {
      var dimensions = {};
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return dimensions;
    }
  }, {
    key: "scrollInView",
    value: function scrollInView(container, item) {
      var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
      var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
      var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
      var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
      var containerRect = container.getBoundingClientRect();
      var itemRect = item.getBoundingClientRect();
      var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
      var scroll = container.scrollTop;
      var elementHeight = container.clientHeight;
      var itemHeight = this.getOuterHeight(item);

      if (offset < 0) {
        container.scrollTop = scroll + offset;
      } else if (offset + itemHeight > elementHeight) {
        container.scrollTop = scroll + offset - elementHeight + itemHeight;
      }
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(element, duration) {
      element.style.opacity = 0;
      var last = +new Date();
      var opacity = 0;

      var tick = function tick() {
        opacity = +element.style.opacity.replace(",", ".") + (new Date().getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +new Date();

        if (+opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
      };

      tick();
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(element, ms) {
      var opacity = 1,
          interval = 50,
          duration = ms,
          gap = interval / duration;
      var fading = setInterval(function () {
        opacity = opacity - gap;

        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }

        element.style.opacity = opacity;
      }, interval);
    }
  }, {
    key: "getWindowScrollTop",
    value: function getWindowScrollTop() {
      var doc = document.documentElement;
      return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }
  }, {
    key: "getWindowScrollLeft",
    value: function getWindowScrollLeft() {
      var doc = document.documentElement;
      return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }
  }, {
    key: "matches",
    value: function matches(element, selector) {
      var p = Element.prototype;

      var f = p['matches'] || p.webkitMatchesSelector || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
      };

      return f.call(element, selector);
    }
  }, {
    key: "getOuterWidth",
    value: function getOuterWidth(el, margin) {
      var width = el.offsetWidth;

      if (margin) {
        var style = getComputedStyle(el);
        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      }

      return width;
    }
  }, {
    key: "getHorizontalPadding",
    value: function getHorizontalPadding(el) {
      var style = getComputedStyle(el);
      return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    }
  }, {
    key: "getHorizontalMargin",
    value: function getHorizontalMargin(el) {
      var style = getComputedStyle(el);
      return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    }
  }, {
    key: "innerWidth",
    value: function innerWidth(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
  }, {
    key: "width",
    value: function width(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
  }, {
    key: "getInnerHeight",
    value: function getInnerHeight(el) {
      var height = el.offsetHeight;
      var style = getComputedStyle(el);
      height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
      return height;
    }
  }, {
    key: "getOuterHeight",
    value: function getOuterHeight(el, margin) {
      var height = el.offsetHeight;

      if (margin) {
        var style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }

      return height;
    }
  }, {
    key: "getHeight",
    value: function getHeight(el) {
      var height = el.offsetHeight;
      var style = getComputedStyle(el);
      height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      return height;
    }
  }, {
    key: "getWidth",
    value: function getWidth(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      return width;
    }
  }, {
    key: "getViewport",
    value: function getViewport() {
      var win = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          w = win.innerWidth || e.clientWidth || g.clientWidth,
          h = win.innerHeight || e.clientHeight || g.clientHeight;
      return {
        width: w,
        height: h
      };
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      var rect = el.getBoundingClientRect();
      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    }
  }, {
    key: "replaceElementWith",
    value: function replaceElementWith(element, replacementElement) {
      var parentNode = element.parentNode;
      if (!parentNode) throw "Can't replace element";
      return parentNode.replaceChild(replacementElement, element);
    }
  }, {
    key: "getUserAgent",
    value: function getUserAgent() {
      return navigator.userAgent;
    }
  }, {
    key: "isIE",
    value: function isIE() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE ');

      if (msie > 0) {
        // IE 10 or older => return version number
        return true;
      }

      var trident = ua.indexOf('Trident/');

      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return true;
      }

      var edge = ua.indexOf('Edge/');

      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return true;
      } // other browser


      return false;
    }
  }, {
    key: "isIOS",
    value: function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    }
  }, {
    key: "isAndroid",
    value: function isAndroid() {
      return /(android)/i.test(navigator.userAgent);
    }
  }, {
    key: "appendChild",
    value: function appendChild(element, target) {
      if (this.isElement(target)) target.appendChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);else throw 'Cannot append ' + target + ' to ' + element;
    }
  }, {
    key: "removeChild",
    value: function removeChild(element, target) {
      if (this.isElement(target)) target.removeChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.removeChild(element);else throw 'Cannot remove ' + element + ' from ' + target;
    }
  }, {
    key: "removeElement",
    value: function removeElement(element) {
      if (!('remove' in Element.prototype)) element.parentNode.removeChild(element);else element.remove();
    }
  }, {
    key: "isElement",
    value: function isElement(obj) {
      return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
    }
  }, {
    key: "calculateScrollbarWidth",
    value: function calculateScrollbarWidth(el) {
      if (el) {
        var style = getComputedStyle(el);
        return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
      } else {
        if (this.calculatedScrollbarWidth !== null) return this.calculatedScrollbarWidth;
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "p-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarWidth;
        return scrollbarWidth;
      }
    }
  }, {
    key: "calculateScrollbarHeight",
    value: function calculateScrollbarHeight() {
      if (this.calculatedScrollbarHeight !== null) return this.calculatedScrollbarHeight;
      var scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarHeight;
      return scrollbarHeight;
    }
  }, {
    key: "invokeElementMethod",
    value: function invokeElementMethod(element, methodName, args) {
      element[methodName].apply(element, args);
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
          window.getSelection().removeAllRanges();
        }
      } else if (document['selection'] && document['selection'].empty) {
        try {
          document['selection'].empty();
        } catch (error) {//ignore IE bug
        }
      }
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      if (!this.browser) {
        var matched = this.resolveUserAgent();
        this.browser = {};

        if (matched.browser) {
          this.browser[matched.browser] = true;
          this.browser['version'] = matched.version;
        }

        if (this.browser['chrome']) {
          this.browser['webkit'] = true;
        } else if (this.browser['webkit']) {
          this.browser['safari'] = true;
        }
      }

      return this.browser;
    }
  }, {
    key: "resolveUserAgent",
    value: function resolveUserAgent() {
      var ua = navigator.userAgent.toLowerCase();
      var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      return {
        browser: match[1] || "",
        version: match[2] || "0"
      };
    }
  }, {
    key: "isInteger",
    value: function isInteger(value) {
      if (Number.isInteger) {
        return Number.isInteger(value);
      } else {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
      }
    }
  }, {
    key: "isHidden",
    value: function isHidden(element) {
      return element.offsetParent === null;
    }
  }, {
    key: "getFocusableElements",
    value: function getFocusableElements(element) {
      var focusableElements = DomHandler.find(element, "button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])");
      var visibleFocusableElements = [];

      var _iterator3 = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(focusableElements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var focusableElement = _step3.value;
          if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden") visibleFocusableElements.push(focusableElement);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return visibleFocusableElements;
    }
  }, {
    key: "generateZIndex",
    value: function generateZIndex() {
      this.zindex = this.zindex || 999;
      return ++this.zindex;
    }
  }]);

  return DomHandler;
}();

DomHandler.zindex = 1000;
DomHandler.calculatedScrollbarWidth = null;
DomHandler.calculatedScrollbarHeight = null;

var ConnectedOverlayScrollHandler = /*#__PURE__*/function () {
  function ConnectedOverlayScrollHandler(element) {
    var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ConnectedOverlayScrollHandler);

    this.element = element;
    this.listener = listener;
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ConnectedOverlayScrollHandler, [{
    key: "bindScrollListener",
    value: function bindScrollListener() {
      this.scrollableParents = DomHandler.getScrollableParents(this.element);

      for (var i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].addEventListener('scroll', this.listener);
      }
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollableParents) {
        for (var i = 0; i < this.scrollableParents.length; i++) {
          this.scrollableParents[i].removeEventListener('scroll', this.listener);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbindScrollListener();
      this.element = null;
      this.listener = null;
      this.scrollableParents = null;
    }
  }]);

  return ConnectedOverlayScrollHandler;
}();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "arFO":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js ***!
  \************************************************************************/
/*! exports provided: DROPDOWN_VALUE_ACCESSOR, Dropdown, DropdownItem, DropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_VALUE_ACCESSOR", function() { return DROPDOWN_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return DropdownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return DropdownModule; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "+J/9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dom */ "YyRF");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/utils */ "t2ka");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");





















function DropdownItem_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.label || "empty");
  }
}

function DropdownItem_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}

var _c0 = function _c0(a0) {
  return {
    "height": a0
  };
};

var _c1 = function _c1(a1, a2) {
  return {
    "p-dropdown-item": true,
    "p-highlight": a1,
    "p-disabled": a2
  };
};

var _c2 = function _c2(a0) {
  return {
    $implicit: a0
  };
};

var _c3 = ["container"];
var _c4 = ["filter"];
var _c5 = ["in"];
var _c6 = ["editableInput"];

function Dropdown_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.label || "empty");
  }
}

function Dropdown_span_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}

var _c7 = function _c7(a1) {
  return {
    "p-dropdown-label p-inputtext": true,
    "p-dropdown-label-empty": a1
  };
};

function Dropdown_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Dropdown_span_5_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Dropdown_span_5_ng_container_2_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c7, ctx_r2.label == null || ctx_r2.label.length === 0))("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.selectedItemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r2.selectedOption));
  }
}

var _c8 = function _c8(a1) {
  return {
    "p-dropdown-label p-inputtext p-placeholder": true,
    "p-dropdown-label-empty": a1
  };
};

function Dropdown_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c8, ctx_r3.placeholder == null || ctx_r3.placeholder.length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.placeholder || "empty");
  }
}

function Dropdown_input_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Dropdown_input_7_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r10.onEditableInputClick();
    })("input", function Dropdown_input_7_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r12.onEditableInputChange($event);
    })("focus", function Dropdown_input_7_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r13.onEditableInputFocus($event);
    })("blur", function Dropdown_input_7_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r14.onInputBlur($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r4.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("maxlength", ctx_r4.maxlength)("placeholder", ctx_r4.placeholder)("aria-expanded", ctx_r4.overlayVisible);
  }
}

function Dropdown_i_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Dropdown_i_8_Template_i_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r15.clear($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function Dropdown_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}

function Dropdown_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Dropdown_div_11_div_2_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.enter", function Dropdown_div_11_div_2_Template_input_keydown_enter_2_listener($event) {
      return $event.preventDefault();
    })("keydown", function Dropdown_div_11_div_2_Template_input_keydown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r29.onKeydown($event, false);
    })("input", function Dropdown_div_11_div_2_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r31.onFilterInputChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r18.filterValue || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("placeholder", ctx_r18.filterPlaceholder)("aria-label", ctx_r18.ariaFilterLabel);
  }
}

function Dropdown_div_11_ng_container_5_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var optgroup_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r34.getOptionGroupLabel(optgroup_r33) || "empty");
  }
}

function Dropdown_div_11_ng_container_5_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}

function Dropdown_div_11_ng_container_5_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}

var _c9 = function _c9(a0, a1) {
  return {
    $implicit: a0,
    selectedOption: a1
  };
};

function Dropdown_div_11_ng_container_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Dropdown_div_11_ng_container_5_ng_template_1_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Dropdown_div_11_ng_container_5_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, Dropdown_div_11_ng_container_5_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 14);
  }

  if (rf & 2) {
    var optgroup_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);

    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r32.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r32.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c2, optgroup_r33));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r21)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c9, ctx_r32.getOptionGroupChildren(optgroup_r33), ctx_r32.selectedOption));
  }
}

function Dropdown_div_11_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Dropdown_div_11_ng_container_5_ng_template_1_Template, 4, 10, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r19.optionsToDisplay);
  }
}

function Dropdown_div_11_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}

function Dropdown_div_11_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Dropdown_div_11_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);

    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r21)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c9, ctx_r20.optionsToDisplay, ctx_r20.selectedOption));
  }
}

function Dropdown_div_11_ng_template_7_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-dropdownItem", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function Dropdown_div_11_ng_template_7_ng_container_0_ng_template_1_Template_p_dropdownItem_onClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48);
      var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return ctx_r47.onItemClick($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var option_r45 = ctx.$implicit;
    var selectedOption_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).selectedOption;
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("option", option_r45)("selected", selectedOption_r40 == option_r45)("label", ctx_r44.getOptionLabel(option_r45))("disabled", ctx_r44.isOptionDisabled(option_r45))("template", ctx_r44.itemTemplate);
  }
}

function Dropdown_div_11_ng_template_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Dropdown_div_11_ng_template_7_ng_container_0_ng_template_1_Template, 1, 5, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var options_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", options_r39);
  }
}

function Dropdown_div_11_ng_template_7_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p-dropdownItem", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function Dropdown_div_11_ng_template_7_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_dropdownItem_onClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r62);
      var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return ctx_r61.onItemClick($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var option_r54 = ctx.$implicit;
    var selectedOption_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).selectedOption;
    var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("option", option_r54)("selected", selectedOption_r40 == option_r54)("label", ctx_r53.getOptionLabel(option_r54))("disabled", ctx_r53.isOptionDisabled(option_r54))("template", ctx_r53.itemTemplate);
  }
}

function Dropdown_div_11_ng_template_7_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scrolledIndexChange", function Dropdown_div_11_ng_template_7_ng_template_1_cdk_virtual_scroll_viewport_0_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65);
      var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return ctx_r64.scrollToSelectedVirtualScrollElement();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Dropdown_div_11_ng_template_7_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template, 2, 5, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var options_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r51.scrollHeight))("itemSize", ctx_r51.itemSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkVirtualForOf", options_r39);
  }
}

function Dropdown_div_11_ng_template_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, Dropdown_div_11_ng_template_7_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 3, 5, "cdk-virtual-scroll-viewport", 36);
  }

  if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r43.virtualScroll && ctx_r43.optionsToDisplay && ctx_r43.optionsToDisplay.length);
  }
}

function Dropdown_div_11_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, Dropdown_div_11_ng_template_7_ng_container_0_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Dropdown_div_11_ng_template_7_ng_template_1_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r22.virtualScroll)("ngIfElse", _r42);
  }
}

function Dropdown_div_11_li_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r67.emptyFilterMessageLabel, " ");
  }
}

function Dropdown_div_11_li_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0, null, 41);
  }
}

function Dropdown_div_11_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Dropdown_div_11_li_9_ng_container_1_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Dropdown_div_11_li_9_ng_container_2_Template, 2, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r23.emptyFilterTemplate && !ctx_r23.emptyTemplate)("ngIfElse", ctx_r23.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.emptyFilterTemplate || ctx_r23.emptyTemplate);
  }
}

function Dropdown_div_11_li_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r70.emptyMessageLabel, " ");
  }
}

function Dropdown_div_11_li_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0, null, 42);
  }
}

function Dropdown_div_11_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Dropdown_div_11_li_10_ng_container_1_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Dropdown_div_11_li_10_ng_container_2_Template, 2, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r24.emptyTemplate)("ngIfElse", ctx_r24.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r24.emptyTemplate);
  }
}

function Dropdown_div_11_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}

var _c10 = function _c10(a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};

var _c11 = function _c11(a1) {
  return {
    value: "visible",
    params: a1
  };
};

var _c12 = function _c12(a0) {
  return {
    "p-dropdown-virtualscroll": a0
  };
};

function Dropdown_div_11_Template(rf, ctx) {
  if (rf & 1) {
    var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("@overlayAnimation.start", function Dropdown_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r74);
      var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r73.onOverlayAnimationStart($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Dropdown_div_11_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Dropdown_div_11_div_2_Template, 5, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, Dropdown_div_11_ng_container_5_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, Dropdown_div_11_ng_container_6_Template, 2, 5, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, Dropdown_div_11_ng_template_7_Template, 3, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, Dropdown_div_11_li_9_Template, 3, 3, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, Dropdown_div_11_li_10_Template, 3, 3, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, Dropdown_div_11_ng_container_11_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r6.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "p-dropdown-panel p-component")("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](15, _c10, ctx_r6.showTransitionOptions, ctx_r6.hideTransitionOptions)))("ngStyle", ctx_r6.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("max-height", ctx_r6.virtualScroll ? "auto" : ctx_r6.scrollHeight || "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c12, ctx_r6.virtualScroll));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.filterValue && ctx_r6.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.filterValue && ctx_r6.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.footerTemplate);
  }
}

var _c13 = function _c13(a1, a2, a3, a4) {
  return {
    "p-dropdown p-component": true,
    "p-disabled": a1,
    "p-dropdown-open": a2,
    "p-focus": a3,
    "p-dropdown-clearable": a4
  };
};

var DROPDOWN_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function () {
    return Dropdown;
  }),
  multi: true
};

var DropdownItem = /*#__PURE__*/function () {
  function DropdownItem() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DropdownItem);

    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DropdownItem, [{
    key: "onOptionClick",
    value: function onOptionClick(event) {
      this.onClick.emit({
        originalEvent: event,
        option: this.option
      });
    }
  }]);

  return DropdownItem;
}();

DropdownItem.ɵfac = function DropdownItem_Factory(t) {
  return new (t || DropdownItem)();
};

DropdownItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DropdownItem,
  selectors: [["p-dropdownItem"]],
  inputs: {
    option: "option",
    selected: "selected",
    label: "label",
    disabled: "disabled",
    visible: "visible",
    itemSize: "itemSize",
    template: "template"
  },
  outputs: {
    onClick: "onClick"
  },
  decls: 3,
  vars: 14,
  consts: [["role", "option", "pRipple", "", 3, "ngStyle", "ngClass", "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function DropdownItem_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DropdownItem_Template_li_click_0_listener($event) {
        return ctx.onOptionClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DropdownItem_span_1_Template, 2, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DropdownItem_ng_container_2_Template, 1, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, ctx.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](9, _c1, ctx.selected, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.label)("aria-selected", ctx.selected);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c2, ctx.option));
    }
  },
  directives: [primeng_ripple__WEBPACK_IMPORTED_MODULE_13__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]],
  encapsulation: 2
});
DropdownItem.propDecorators = {
  option: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  itemSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  template: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](DropdownItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
    args: [{
      selector: 'p-dropdownItem',
      template: "\n        <li (click)=\"onOptionClick($event)\" role=\"option\" pRipple\n            [attr.aria-label]=\"label\" [attr.aria-selected]=\"selected\"\n            [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'p-dropdown-item':true, 'p-highlight': selected, 'p-disabled': disabled}\">\n            <span *ngIf=\"!template\">{{label||'empty'}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    "
    }]
  }], function () {
    return [];
  }, {
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],
    option: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }]
  });
})();

var Dropdown = /*#__PURE__*/function () {
  function Dropdown(el, renderer, cd, zone, filterService, config) {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Dropdown);

    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.filterService = filterService;
    this.config = config;
    this.scrollHeight = '200px';
    this.resetFilterOnHide = false;
    this.dropdownIcon = 'pi pi-chevron-down';
    this.optionGroupChildren = "items";
    this.autoDisplayFirst = true;
    this.emptyFilterMessage = '';
    this.emptyMessage = '';
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    this.hideTransitionOptions = '.1s linear';
    this.filterMatchMode = "contains";
    this.tooltip = '';
    this.tooltipPosition = 'right';
    this.tooltipPositionStyle = 'absolute';
    this.autofocusFilter = true;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();

    this.onModelChange = function () {};

    this.onModelTouched = function () {};

    this.viewPortOffsetTop = 0;
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Dropdown, [{
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(_disabled) {
      if (_disabled) {
        this.focused = false;
        if (this.overlayVisible) this.hide();
      }

      this._disabled = _disabled;

      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this = this;

      this.templates.forEach(function (item) {
        switch (item.getType()) {
          case 'item':
            _this.itemTemplate = item.template;
            break;

          case 'selectedItem':
            _this.selectedItemTemplate = item.template;
            break;

          case 'header':
            _this.headerTemplate = item.template;
            break;

          case 'footer':
            _this.footerTemplate = item.template;
            break;

          case 'emptyfilter':
            _this.emptyFilterTemplate = item.template;
            break;

          case 'empty':
            _this.emptyTemplate = item.template;
            break;

          case 'group':
            _this.groupTemplate = item.template;
            break;

          default:
            _this.itemTemplate = item.template;
            break;
        }
      });
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.optionsToDisplay = this.options;
      this.updateSelectedOption(null);
    }
  }, {
    key: "options",
    get: function get() {
      return this._options;
    },
    set: function set(val) {
      this._options = val;
      this.optionsToDisplay = this._options;
      this.updateSelectedOption(this.value);
      this.optionsChanged = true;

      if (this._filterValue && this._filterValue.length) {
        this.activateFilter();
      }
    }
  }, {
    key: "filterValue",
    get: function get() {
      return this._filterValue;
    },
    set: function set(val) {
      this._filterValue = val;
      this.activateFilter();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      if (this.editable) {
        this.updateEditableLabel();
      }
    }
  }, {
    key: "label",
    get: function get() {
      return this.selectedOption ? this.getOptionLabel(this.selectedOption) : null;
    }
  }, {
    key: "emptyMessageLabel",
    get: function get() {
      return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_8__["TranslationKeys"].EMPTY_MESSAGE);
    }
  }, {
    key: "emptyFilterMessageLabel",
    get: function get() {
      return this.emptyFilterMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_8__["TranslationKeys"].EMPTY_FILTER_MESSAGE);
    }
  }, {
    key: "updateEditableLabel",
    value: function updateEditableLabel() {
      if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
        this.editableInputViewChild.nativeElement.value = this.selectedOption ? this.getOptionLabel(this.selectedOption) : this.value || '';
      }
    }
  }, {
    key: "getOptionLabel",
    value: function getOptionLabel(option) {
      return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].resolveFieldData(option, this.optionLabel) : option.label != undefined ? option.label : option;
    }
  }, {
    key: "getOptionValue",
    value: function getOptionValue(option) {
      return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].resolveFieldData(option, this.optionValue) : this.optionLabel || option.value === undefined ? option : option.value;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option) {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].resolveFieldData(option, this.optionDisabled) : option.disabled !== undefined ? option.disabled : false;
    }
  }, {
    key: "getOptionGroupLabel",
    value: function getOptionGroupLabel(optionGroup) {
      return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup.label != undefined ? optionGroup.label : optionGroup;
    }
  }, {
    key: "getOptionGroupChildren",
    value: function getOptionGroupChildren(optionGroup) {
      return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(event) {
      var _this2 = this;

      var option = event.option;

      if (!this.isOptionDisabled(option)) {
        this.selectItem(event, option);
        this.accessibleViewChild.nativeElement.focus();
      }

      setTimeout(function () {
        _this2.hide();
      }, 150);
    }
  }, {
    key: "selectItem",
    value: function selectItem(event, option) {
      var _this3 = this;

      if (this.selectedOption != option) {
        this.selectedOption = option;
        this.value = this.getOptionValue(option);
        this.onModelChange(this.value);
        this.updateEditableLabel();
        this.onChange.emit({
          originalEvent: event.originalEvent,
          value: this.value
        });

        if (this.virtualScroll) {
          setTimeout(function () {
            _this3.viewPortOffsetTop = _this3.viewPort ? _this3.viewPort.measureScrollOffset() : 0;
          }, 1);
        }
      }
    }
  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      var _this4 = this;

      if (this.optionsChanged && this.overlayVisible) {
        this.optionsChanged = false;

        if (this.virtualScroll) {
          this.updateVirtualScrollSelectedIndex(true);
        }

        this.zone.runOutsideAngular(function () {
          setTimeout(function () {
            _this4.alignOverlay();
          }, 1);
        });
      }

      if (this.selectedOptionUpdated && this.itemsWrapper) {
        if (this.virtualScroll && this.viewPort) {
          var range = this.viewPort.getRenderedRange();
          this.updateVirtualScrollSelectedIndex(false);

          if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
            this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
          }
        }

        var selectedItem = primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].findSingle(this.overlay, 'li.p-highlight');

        if (selectedItem) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].scrollInView(this.itemsWrapper, primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].findSingle(this.overlay, 'li.p-highlight'));
        }

        this.selectedOptionUpdated = false;
      }
    }
  }, {
    key: "writeValue",
    value: function writeValue(value) {
      if (this.filter) {
        this.resetFilter();
      }

      this.value = value;
      this.updateSelectedOption(value);
      this.updateEditableLabel();
      this.cd.markForCheck();
    }
  }, {
    key: "resetFilter",
    value: function resetFilter() {
      this._filterValue = null;

      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.filterViewChild.nativeElement.value = '';
      }

      this.optionsToDisplay = this.options;
    }
  }, {
    key: "updateSelectedOption",
    value: function updateSelectedOption(val) {
      this.selectedOption = this.findOption(val, this.optionsToDisplay);

      if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
        this.selectedOption = this.optionsToDisplay[0];
      }

      this.selectedOptionUpdated = true;
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onModelChange = fn;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
  }, {
    key: "setDisabledState",
    value: function setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
  }, {
    key: "onMouseclick",
    value: function onMouseclick(event) {
      if (this.disabled || this.readonly || this.isInputClick(event)) {
        return;
      }

      this.onClick.emit(event);
      this.accessibleViewChild.nativeElement.focus();
      if (this.overlayVisible) this.hide();else this.show();
      this.cd.detectChanges();
    }
  }, {
    key: "isInputClick",
    value: function isInputClick(event) {
      return primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].hasClass(event.target, 'p-dropdown-clear-icon') || event.target.isSameNode(this.accessibleViewChild.nativeElement) || this.editableInputViewChild && event.target.isSameNode(this.editableInputViewChild.nativeElement);
    }
  }, {
    key: "isOutsideClicked",
    value: function isOutsideClicked(event) {
      return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || this.overlay && this.overlay.contains(event.target));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this.optionsToDisplay || this.optionsToDisplay && this.optionsToDisplay.length === 0;
    }
  }, {
    key: "onEditableInputClick",
    value: function onEditableInputClick() {
      this.bindDocumentClickListener();
    }
  }, {
    key: "onEditableInputFocus",
    value: function onEditableInputFocus(event) {
      this.focused = true;
      this.hide();
      this.onFocus.emit(event);
    }
  }, {
    key: "onEditableInputChange",
    value: function onEditableInputChange(event) {
      this.value = event.target.value;
      this.updateSelectedOption(this.value);
      this.onModelChange(this.value);
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.overlayVisible = true;
    }
  }, {
    key: "onOverlayAnimationStart",
    value: function onOverlayAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.overlay = event.element;
          var itemsWrapperSelector = this.virtualScroll ? '.cdk-virtual-scroll-viewport' : '.p-dropdown-items-wrapper';
          this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].findSingle(this.overlay, itemsWrapperSelector);
          this.appendOverlay();

          if (this.autoZIndex) {
            this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].zindex);
          }

          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();

          if (this.options && this.options.length) {
            if (!this.virtualScroll) {
              var selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].findSingle(this.itemsWrapper, '.p-dropdown-item.p-highlight');

              if (selectedListItem) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].scrollInView(this.itemsWrapper, selectedListItem);
              }
            }
          }

          if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.preventModelTouched = true;

            if (this.autofocusFilter) {
              this.filterViewChild.nativeElement.focus();
            }
          }

          this.onShow.emit(event);
          break;

        case 'void':
          this.onOverlayHide();
          this.onHide.emit(event);
          break;
      }
    }
  }, {
    key: "scrollToSelectedVirtualScrollElement",
    value: function scrollToSelectedVirtualScrollElement() {
      if (!this.virtualAutoScrolled) {
        if (this.viewPortOffsetTop) {
          this.viewPort.scrollToOffset(this.viewPortOffsetTop);
        } else if (this.virtualScrollSelectedIndex > -1) {
          this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
        }
      }

      this.virtualAutoScrolled = true;
    }
  }, {
    key: "updateVirtualScrollSelectedIndex",
    value: function updateVirtualScrollSelectedIndex(resetOffset) {
      if (this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length) {
        if (resetOffset) {
          this.viewPortOffsetTop = 0;
        }

        this.virtualScrollSelectedIndex = this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay);
      }
    }
  }, {
    key: "appendOverlay",
    value: function appendOverlay() {
      if (this.appendTo) {
        if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].appendChild(this.overlay, this.appendTo);

        if (!this.overlay.style.minWidth) {
          this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].getWidth(this.containerViewChild.nativeElement) + 'px';
        }
      }
    }
  }, {
    key: "restoreOverlayAppend",
    value: function restoreOverlayAppend() {
      if (this.overlay && this.appendTo) {
        this.el.nativeElement.appendChild(this.overlay);
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.overlayVisible = false;

      if (this.filter && this.resetFilterOnHide) {
        this.resetFilter();
      }

      if (this.virtualScroll) {
        this.virtualAutoScrolled = false;
      }

      this.cd.markForCheck();
    }
  }, {
    key: "alignOverlay",
    value: function alignOverlay() {
      if (this.overlay) {
        if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].absolutePosition(this.overlay, this.containerViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].relativePosition(this.overlay, this.containerViewChild.nativeElement);
      }
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      this.focused = true;
      this.onFocus.emit(event);
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      this.focused = false;
      this.onBlur.emit(event);

      if (!this.preventModelTouched) {
        this.onModelTouched();
      }

      this.preventModelTouched = false;
    }
  }, {
    key: "findPrevEnabledOption",
    value: function findPrevEnabledOption(index) {
      var prevEnabledOption;

      if (this.optionsToDisplay && this.optionsToDisplay.length) {
        for (var i = index - 1; 0 <= i; i--) {
          var option = this.optionsToDisplay[i];

          if (option.disabled) {
            continue;
          } else {
            prevEnabledOption = option;
            break;
          }
        }

        if (!prevEnabledOption) {
          for (var _i = this.optionsToDisplay.length - 1; _i >= index; _i--) {
            var _option = this.optionsToDisplay[_i];

            if (this.isOptionDisabled(_option)) {
              continue;
            } else {
              prevEnabledOption = _option;
              break;
            }
          }
        }
      }

      return prevEnabledOption;
    }
  }, {
    key: "findNextEnabledOption",
    value: function findNextEnabledOption(index) {
      var nextEnabledOption;

      if (this.optionsToDisplay && this.optionsToDisplay.length) {
        for (var i = index + 1; index < this.optionsToDisplay.length - 1; i++) {
          var option = this.optionsToDisplay[i];

          if (this.isOptionDisabled(option)) {
            continue;
          } else {
            nextEnabledOption = option;
            break;
          }
        }

        if (!nextEnabledOption) {
          for (var _i2 = 0; _i2 < index; _i2++) {
            var _option2 = this.optionsToDisplay[_i2];

            if (this.isOptionDisabled(_option2)) {
              continue;
            } else {
              nextEnabledOption = _option2;
              break;
            }
          }
        }
      }

      return nextEnabledOption;
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(event, search) {
      if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
        return;
      }

      switch (event.which) {
        //down
        case 40:
          if (!this.overlayVisible && event.altKey) {
            this.show();
          } else {
            if (this.group) {
              var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;

              if (selectedItemIndex !== -1) {
                var nextItemIndex = selectedItemIndex.itemIndex + 1;

                if (nextItemIndex < this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex]).length) {
                  this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex])[nextItemIndex]);
                  this.selectedOptionUpdated = true;
                } else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                  this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex + 1])[0]);
                  this.selectedOptionUpdated = true;
                }
              } else {
                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[0])[0]);
              }
            } else {
              var _selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;

              var nextEnabledOption = this.findNextEnabledOption(_selectedItemIndex);

              if (nextEnabledOption) {
                this.selectItem(event, nextEnabledOption);
                this.selectedOptionUpdated = true;
              }
            }
          }

          event.preventDefault();
          break;
        //up

        case 38:
          if (this.group) {
            var _selectedItemIndex2 = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;

            if (_selectedItemIndex2 !== -1) {
              var prevItemIndex = _selectedItemIndex2.itemIndex - 1;

              if (prevItemIndex >= 0) {
                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[_selectedItemIndex2.groupIndex])[prevItemIndex]);
                this.selectedOptionUpdated = true;
              } else if (prevItemIndex < 0) {
                var prevGroup = this.optionsToDisplay[_selectedItemIndex2.groupIndex - 1];

                if (prevGroup) {
                  this.selectItem(event, this.getOptionGroupChildren(prevGroup)[this.getOptionGroupChildren(prevGroup).length - 1]);
                  this.selectedOptionUpdated = true;
                }
              }
            }
          } else {
            var _selectedItemIndex3 = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;

            var prevEnabledOption = this.findPrevEnabledOption(_selectedItemIndex3);

            if (prevEnabledOption) {
              this.selectItem(event, prevEnabledOption);
              this.selectedOptionUpdated = true;
            }
          }

          event.preventDefault();
          break;
        //space

        case 32:
        case 32:
          if (!this.overlayVisible) {
            this.show();
            event.preventDefault();
          }

          break;
        //enter

        case 13:
          if (!this.filter || this.optionsToDisplay && this.optionsToDisplay.length > 0) {
            this.hide();
          }

          event.preventDefault();
          break;
        //escape and tab

        case 27:
        case 9:
          this.hide();
          break;
        //search item based on keyboard input

        default:
          if (search && !event.metaKey) {
            this.search(event);
          }

          break;
      }
    }
  }, {
    key: "search",
    value: function search(event) {
      var _this5 = this;

      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      var char = event.key;
      this.previousSearchChar = this.currentSearchChar;
      this.currentSearchChar = char;
      if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;else this.searchValue = this.searchValue ? this.searchValue + char : char;
      var newOption;

      if (this.group) {
        var searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : {
          groupIndex: 0,
          itemIndex: 0
        };
        newOption = this.searchOptionWithinGroup(searchIndex);
      } else {
        var _searchIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;

        newOption = this.searchOption(++_searchIndex);
      }

      if (newOption && !this.isOptionDisabled(newOption)) {
        this.selectItem(event, newOption);
        this.selectedOptionUpdated = true;
      }

      this.searchTimeout = setTimeout(function () {
        _this5.searchValue = null;
      }, 250);
    }
  }, {
    key: "searchOption",
    value: function searchOption(index) {
      var option;

      if (this.searchValue) {
        option = this.searchOptionInRange(index, this.optionsToDisplay.length);

        if (!option) {
          option = this.searchOptionInRange(0, index);
        }
      }

      return option;
    }
  }, {
    key: "searchOptionInRange",
    value: function searchOptionInRange(start, end) {
      for (var i = start; i < end; i++) {
        var opt = this.optionsToDisplay[i];

        if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
          return opt;
        }
      }

      return null;
    }
  }, {
    key: "searchOptionWithinGroup",
    value: function searchOptionWithinGroup(index) {
      var option;

      if (this.searchValue) {
        for (var i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
          for (var j = index.groupIndex === i ? index.itemIndex + 1 : 0; j < this.getOptionGroupChildren(this.optionsToDisplay[i]).length; j++) {
            var opt = this.getOptionGroupChildren(this.optionsToDisplay[i])[j];

            if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
              return opt;
            }
          }
        }

        if (!option) {
          for (var _i3 = 0; _i3 <= index.groupIndex; _i3++) {
            for (var _j = 0; _j < (index.groupIndex === _i3 ? index.itemIndex : this.getOptionGroupChildren(this.optionsToDisplay[_i3]).length); _j++) {
              var _opt = this.getOptionGroupChildren(this.optionsToDisplay[_i3])[_j];

              if (this.getOptionLabel(_opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(_opt)) {
                return _opt;
              }
            }
          }
        }
      }

      return null;
    }
  }, {
    key: "findOptionIndex",
    value: function findOptionIndex(val, opts) {
      var index = -1;

      if (opts) {
        for (var i = 0; i < opts.length; i++) {
          if (val == null && this.getOptionValue(opts[i]) == null || primeng_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].equals(val, this.getOptionValue(opts[i]), this.dataKey)) {
            index = i;
            break;
          }
        }
      }

      return index;
    }
  }, {
    key: "findOptionGroupIndex",
    value: function findOptionGroupIndex(val, opts) {
      var groupIndex, itemIndex;

      if (opts) {
        for (var i = 0; i < opts.length; i++) {
          groupIndex = i;
          itemIndex = this.findOptionIndex(val, this.getOptionGroupChildren(opts[i]));

          if (itemIndex !== -1) {
            break;
          }
        }
      }

      if (itemIndex !== -1) {
        return {
          groupIndex: groupIndex,
          itemIndex: itemIndex
        };
      } else {
        return -1;
      }
    }
  }, {
    key: "findOption",
    value: function findOption(val, opts, inGroup) {
      if (this.group && !inGroup) {
        var opt;

        if (opts && opts.length) {
          var _iterator = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(opts),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var optgroup = _step.value;
              opt = this.findOption(val, this.getOptionGroupChildren(optgroup), true);

              if (opt) {
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return opt;
      } else {
        var index = this.findOptionIndex(val, opts);
        return index != -1 ? opts[index] : null;
      }
    }
  }, {
    key: "onFilterInputChange",
    value: function onFilterInputChange(event) {
      var inputValue = event.target.value;

      if (inputValue && inputValue.length) {
        this._filterValue = inputValue;
        this.activateFilter();
      } else {
        this._filterValue = null;
        this.optionsToDisplay = this.options;
      }

      this.optionsChanged = true;
      this.onFilter.emit({
        originalEvent: event,
        filter: this._filterValue
      });
    }
  }, {
    key: "activateFilter",
    value: function activateFilter() {
      var searchFields = (this.filterBy || this.optionLabel || 'label').split(',');

      if (this.options && this.options.length) {
        if (this.group) {
          var filteredGroups = [];

          var _iterator2 = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.options),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var optgroup = _step2.value;
              var filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);

              if (filteredSubOptions && filteredSubOptions.length) {
                filteredGroups.push(Object.assign(Object.assign({}, optgroup), Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.optionGroupChildren, filteredSubOptions)));
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.optionsToDisplay = filteredGroups;
        } else {
          this.optionsToDisplay = this.filterService.filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        }

        this.optionsChanged = true;
      }
    }
  }, {
    key: "applyFocus",
    value: function applyFocus() {
      if (this.editable) primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].findSingle(this.el.nativeElement, '.p-dropdown-label.p-inputtext').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].findSingle(this.el.nativeElement, 'input[readonly]').focus();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.applyFocus();
    }
  }, {
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this6 = this;

      if (!this.documentClickListener) {
        var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
        this.documentClickListener = this.renderer.listen(documentTarget, 'click', function (event) {
          if (_this6.isOutsideClicked(event)) {
            _this6.hide();

            _this6.unbindDocumentClickListener();
          }

          _this6.cd.markForCheck();
        });
      }
    }
  }, {
    key: "unbindDocumentClickListener",
    value: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        this.documentClickListener();
        this.documentClickListener = null;
      }
    }
  }, {
    key: "bindDocumentResizeListener",
    value: function bindDocumentResizeListener() {
      this.documentResizeListener = this.onWindowResize.bind(this);
      window.addEventListener('resize', this.documentResizeListener);
    }
  }, {
    key: "unbindDocumentResizeListener",
    value: function unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
      }
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      if (!primeng_dom__WEBPACK_IMPORTED_MODULE_9__["DomHandler"].isAndroid()) {
        this.hide();
      }
    }
  }, {
    key: "bindScrollListener",
    value: function bindScrollListener() {
      var _this7 = this;

      if (!this.scrollHandler) {
        this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_9__["ConnectedOverlayScrollHandler"](this.containerViewChild.nativeElement, function (event) {
          if (_this7.overlayVisible) {
            _this7.hide();
          }
        });
      }

      this.scrollHandler.bindScrollListener();
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
  }, {
    key: "clear",
    value: function clear(event) {
      this.value = null;
      this.onModelChange(this.value);
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
      this.updateSelectedOption(this.value);
      this.updateEditableLabel();
    }
  }, {
    key: "onOverlayHide",
    value: function onOverlayHide() {
      this.unbindDocumentClickListener();
      this.unbindDocumentResizeListener();
      this.unbindScrollListener();
      this.overlay = null;
      this.itemsWrapper = null;
      this.onModelTouched();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }

      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
  }]);

  return Dropdown;
}();

Dropdown.ɵfac = function Dropdown_Factory(t) {
  return new (t || Dropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeNGConfig"]));
};

Dropdown.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: Dropdown,
  selectors: [["p-dropdown"]],
  contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"], 0);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Dropdown_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c5, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkVirtualScrollViewport"], 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c6, 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.filterViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.accessibleViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.viewPort = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editableInputViewChild = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function Dropdown_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.value)("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
    }
  },
  inputs: {
    scrollHeight: "scrollHeight",
    resetFilterOnHide: "resetFilterOnHide",
    dropdownIcon: "dropdownIcon",
    optionGroupChildren: "optionGroupChildren",
    autoDisplayFirst: "autoDisplayFirst",
    emptyFilterMessage: "emptyFilterMessage",
    emptyMessage: "emptyMessage",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    filterMatchMode: "filterMatchMode",
    tooltip: "tooltip",
    tooltipPosition: "tooltipPosition",
    tooltipPositionStyle: "tooltipPositionStyle",
    autofocusFilter: "autofocusFilter",
    disabled: "disabled",
    options: "options",
    filterValue: "filterValue",
    filter: "filter",
    name: "name",
    style: "style",
    panelStyle: "panelStyle",
    styleClass: "styleClass",
    panelStyleClass: "panelStyleClass",
    readonly: "readonly",
    required: "required",
    editable: "editable",
    appendTo: "appendTo",
    tabindex: "tabindex",
    placeholder: "placeholder",
    filterPlaceholder: "filterPlaceholder",
    filterLocale: "filterLocale",
    inputId: "inputId",
    selectId: "selectId",
    dataKey: "dataKey",
    filterBy: "filterBy",
    autofocus: "autofocus",
    optionLabel: "optionLabel",
    optionValue: "optionValue",
    optionDisabled: "optionDisabled",
    optionGroupLabel: "optionGroupLabel",
    group: "group",
    showClear: "showClear",
    virtualScroll: "virtualScroll",
    itemSize: "itemSize",
    ariaFilterLabel: "ariaFilterLabel",
    ariaLabelledBy: "ariaLabelledBy",
    maxlength: "maxlength",
    tooltipStyleClass: "tooltipStyleClass"
  },
  outputs: {
    onChange: "onChange",
    onFilter: "onFilter",
    onFocus: "onFocus",
    onBlur: "onBlur",
    onClick: "onClick",
    onShow: "onShow",
    onHide: "onHide"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([DROPDOWN_VALUE_ACCESSOR])],
  decls: 12,
  vars: 22,
  consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "", "aria-haspopup", "listbox", "aria-haspopup", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["in", ""], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["type", "text", "class", "p-dropdown-label p-inputtext", "aria-haspopup", "listbox", 3, "disabled", "click", "input", "focus", "blur", 4, "ngIf"], ["class", "p-dropdown-clear-icon pi pi-times", 3, "click", 4, "ngIf"], ["role", "button", "aria-haspopup", "listbox", 1, "p-dropdown-trigger"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["type", "text", "aria-haspopup", "listbox", 1, "p-dropdown-label", "p-inputtext", 3, "disabled", "click", "input", "focus", "blur"], ["editableInput", ""], [1, "p-dropdown-clear-icon", "pi", "pi-times", 3, "click"], [3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet"], ["class", "p-dropdown-header", 4, "ngIf"], [1, "p-dropdown-items-wrapper"], ["role", "listbox", 1, "p-dropdown-items", 3, "ngClass"], ["itemslist", ""], ["class", "p-dropdown-empty-message", 4, "ngIf"], [1, "p-dropdown-header"], [1, "p-dropdown-filter-container", 3, "click"], ["type", "text", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "value", "keydown.enter", "keydown", "input"], ["filter", ""], [1, "p-dropdown-filter-icon", "pi", "pi-search"], ["ngFor", "", 3, "ngForOf"], [1, "p-dropdown-item-group"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], [3, "option", "selected", "label", "disabled", "template", "onClick"], [3, "ngStyle", "itemSize", "scrolledIndexChange", 4, "ngIf"], [3, "ngStyle", "itemSize", "scrolledIndexChange"], ["viewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "p-dropdown-empty-message"], ["emptyFilter", ""], ["empty", ""]],
  template: function Dropdown_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Dropdown_Template_div_click_0_listener($event) {
        return ctx.onMouseclick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Dropdown_Template_input_focus_3_listener($event) {
        return ctx.onInputFocus($event);
      })("blur", function Dropdown_Template_input_blur_3_listener($event) {
        return ctx.onInputBlur($event);
      })("keydown", function Dropdown_Template_input_keydown_3_listener($event) {
        return ctx.onKeydown($event, true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, Dropdown_span_5_Template, 3, 12, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, Dropdown_span_6_Template, 2, 4, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, Dropdown_input_7_Template, 2, 4, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, Dropdown_i_8_Template, 1, 0, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, Dropdown_div_11_Template, 12, 22, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](17, _c13, ctx.disabled, ctx.overlayVisible, ctx.focused, ctx.showClear && !ctx.disabled))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("id", ctx.inputId)("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy)("tabindex", ctx.tabindex)("autofocus", ctx.autofocus);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editable && ctx.label != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editable && ctx.label == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editable);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.value != null && ctx.showClear && !ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-expanded", ctx.overlayVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.dropdownIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.overlayVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], DropdownItem, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkVirtualForOf"]],
  styles: [".p-dropdown{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-dropdown-clear-icon{margin-top:-.5rem;position:absolute;top:50%}.p-dropdown-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-dropdown-label{cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-dropdown-items{list-style-type:none;margin:0;padding:0}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}"],
  encapsulation: 2,
  data: {
    animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 0,
      transform: 'scaleY(0.8)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{showTransitionParams}}')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});

Dropdown.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["FilterService"]
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeNGConfig"]
  }];
};

Dropdown.propDecorators = {
  scrollHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  filter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  style: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  panelStyle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  styleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  panelStyleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  readonly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  editable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  appendTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  tabindex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  filterPlaceholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  filterLocale: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  inputId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  selectId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  dataKey: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  filterBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  autofocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  resetFilterOnHide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  dropdownIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  optionLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  optionValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  optionDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  optionGroupLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  optionGroupChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  autoDisplayFirst: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  group: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  showClear: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  emptyFilterMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  emptyMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  virtualScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  itemSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  autoZIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  baseZIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  showTransitionOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  hideTransitionOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  ariaFilterLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  ariaLabelledBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  filterMatchMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  maxlength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  tooltip: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  tooltipPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  tooltipPositionStyle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  tooltipStyleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  autofocusFilter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  onChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }],
  onFilter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }],
  onFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }],
  onShow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }],
  onHide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }],
  containerViewChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
    args: ['container']
  }],
  filterViewChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
    args: ['filter']
  }],
  accessibleViewChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
    args: ['in']
  }],
  viewPort: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
    args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkVirtualScrollViewport"]]
  }],
  editableInputViewChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
    args: ['editableInput']
  }],
  templates: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"]]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  filterValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](Dropdown, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
    args: [{
      selector: 'p-dropdown',
      template: "\n         <div #container [ngClass]=\"{'p-dropdown p-component':true,\n            'p-disabled':disabled, 'p-dropdown-open':overlayVisible, 'p-focus':focused, 'p-dropdown-clearable': showClear && !disabled}\"\n            (click)=\"onMouseclick($event)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"p-hidden-accessible\">\n                <input #in [attr.id]=\"inputId\" type=\"text\" readonly (focus)=\"onInputFocus($event)\" aria-haspopup=\"listbox\"\n                    aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" [attr.aria-labelledby]=\"ariaLabelledBy\" (blur)=\"onInputBlur($event)\" (keydown)=\"onKeydown($event, true)\"\n                    [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.autofocus]=\"autofocus\">\n            </div>\n            <span [ngClass]=\"{'p-dropdown-label p-inputtext':true,'p-dropdown-label-empty':(label == null || label.length === 0)}\" *ngIf=\"!editable && (label != null)\" [pTooltip]=\"tooltip\" [tooltipPosition]=\"tooltipPosition\" [positionStyle]=\"tooltipPositionStyle\" [tooltipStyleClass]=\"tooltipStyleClass\">\n                <ng-container *ngIf=\"!selectedItemTemplate\">{{label||'empty'}}</ng-container>\n                <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: selectedOption}\"></ng-container>\n            </span>\n            <span [ngClass]=\"{'p-dropdown-label p-inputtext p-placeholder':true,'p-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}\" *ngIf=\"!editable && (label == null)\">{{placeholder||'empty'}}</span>\n            <input #editableInput type=\"text\" [attr.maxlength]=\"maxlength\" class=\"p-dropdown-label p-inputtext\" *ngIf=\"editable\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\"\n                aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" (click)=\"onEditableInputClick()\" (input)=\"onEditableInputChange($event)\" (focus)=\"onEditableInputFocus($event)\" (blur)=\"onInputBlur($event)\">\n            <i class=\"p-dropdown-clear-icon pi pi-times\" (click)=\"clear($event)\" *ngIf=\"value != null && showClear && !disabled\"></i>\n            <div class=\"p-dropdown-trigger\" role=\"button\" aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\">\n                <span class=\"p-dropdown-trigger-icon\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"'p-dropdown-panel p-component'\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\">\n                <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n                <div class=\"p-dropdown-header\" *ngIf=\"filter\" >\n                    <div class=\"p-dropdown-filter-container\" (click)=\"$event.stopPropagation()\">\n                        <input #filter type=\"text\" autocomplete=\"off\" [value]=\"filterValue||''\" class=\"p-dropdown-filter p-inputtext p-component\" [attr.placeholder]=\"filterPlaceholder\"\n                        (keydown.enter)=\"$event.preventDefault()\" (keydown)=\"onKeydown($event, false)\" (input)=\"onFilterInputChange($event)\" [attr.aria-label]=\"ariaFilterLabel\">\n                        <span class=\"p-dropdown-filter-icon pi pi-search\"></span>\n                    </div>\n                </div>\n                <div class=\"p-dropdown-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"p-dropdown-items\" [ngClass]=\"{'p-dropdown-virtualscroll': virtualScroll}\" role=\"listbox\">\n                        <ng-container *ngIf=\"group\">\n                            <ng-template ngFor let-optgroup [ngForOf]=\"optionsToDisplay\">\n                                <li class=\"p-dropdown-item-group\">\n                                    <span *ngIf=\"!groupTemplate\">{{getOptionGroupLabel(optgroup)||'empty'}}</span>\n                                    <ng-container *ngTemplateOutlet=\"groupTemplate; context: {$implicit: optgroup}\"></ng-container>\n                                </li>\n                                <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: getOptionGroupChildren(optgroup), selectedOption: selectedOption}\"></ng-container>\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngIf=\"!group\">\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}\"></ng-container>\n                        </ng-container>\n                        <ng-template #itemslist let-options let-selectedOption=\"selectedOption\">\n                            <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                                <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"options\">\n                                    <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\" [label]=\"getOptionLabel(option)\" [disabled]=\"isOptionDisabled(option)\"\n                                                    (onClick)=\"onItemClick($event)\"\n                                                    [template]=\"itemTemplate\"></p-dropdownItem>\n                                </ng-template>\n                            </ng-container>\n                            <ng-template #virtualScrollList>\n                                <cdk-virtual-scroll-viewport (scrolledIndexChange)=\"scrollToSelectedVirtualScrollElement()\" #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && optionsToDisplay && optionsToDisplay.length\">\n                                    <ng-container *cdkVirtualFor=\"let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">\n                                        <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\" [label]=\"getOptionLabel(option)\" [disabled]=\"isOptionDisabled(option)\"\n                                                                   (onClick)=\"onItemClick($event)\"\n                                                                   [template]=\"itemTemplate\"></p-dropdownItem>\n                                    </ng-container>\n                                </cdk-virtual-scroll-viewport>\n                            </ng-template>\n                        </ng-template>\n                        <li *ngIf=\"filterValue && isEmpty()\" class=\"p-dropdown-empty-message\">\n                            <ng-container *ngIf=\"!emptyFilterTemplate && !emptyTemplate; else emptyFilter\">\n                                {{emptyFilterMessageLabel}}\n                            </ng-container>\n                            <ng-container #emptyFilter *ngTemplateOutlet=\"emptyFilterTemplate || emptyTemplate\"></ng-container>\n                        </li>\n                        <li *ngIf=\"!filterValue && isEmpty()\" class=\"p-dropdown-empty-message\">\n                            <ng-container *ngIf=\"!emptyTemplate; else empty\">\n                                {{emptyMessageLabel}}\n                            </ng-container>\n                            <ng-container #empty *ngTemplateOutlet=\"emptyTemplate\"></ng-container>\n                        </li>\n                    </ul>\n                </div>\n                <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0,
        transform: 'scaleY(0.8)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{showTransitionParams}}')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0
      }))])])],
      host: {
        '[class.p-inputwrapper-filled]': 'value',
        '[class.p-inputwrapper-focus]': 'focused || overlayVisible'
      },
      providers: [DROPDOWN_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
      styles: [".p-dropdown{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-dropdown-clear-icon{margin-top:-.5rem;position:absolute;top:50%}.p-dropdown-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-dropdown-label{cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-dropdown-items{list-style-type:none;margin:0;padding:0}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["FilterService"]
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeNGConfig"]
    }];
  }, {
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    resetFilterOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    dropdownIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    optionGroupChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    autoDisplayFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    emptyFilterMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    filterMatchMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    tooltipPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    tooltipPositionStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    autofocusFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],
    onFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    filter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    panelStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    panelStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    filterPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    selectId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    dataKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    filterBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    optionLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    optionValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    optionDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    optionGroupLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    showClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    ariaFilterLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    maxlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    tooltipStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
      args: ['container']
    }],
    filterViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
      args: ['filter']
    }],
    accessibleViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
      args: ['in']
    }],
    viewPort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
      args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkVirtualScrollViewport"]]
    }],
    editableInputViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
      args: ['editableInput']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"]]
    }]
  });
})();

var DropdownModule = function DropdownModule() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DropdownModule);
};

DropdownModule.ɵfac = function DropdownModule_Factory(t) {
  return new (t || DropdownModule)();
};

DropdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: DropdownModule
});
DropdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_13__["RippleModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DropdownModule, {
    declarations: function declarations() {
      return [Dropdown, DropdownItem];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_13__["RippleModule"]];
    },
    exports: function exports() {
      return [Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](DropdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_13__["RippleModule"]],
      exports: [Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]],
      declarations: [Dropdown, DropdownItem]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "chLL":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/collections.js ***!
  \***********************************************************************/
/*! exports provided: UniqueSelectionDispatcher, ArrayDataSource, isDataSource, DataSource, getMultipleValuesInSingleSelectionError, SelectionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSource", function() { return isDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @abstract
 * @template T
 */



var DataSource = function DataSource() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DataSource);
};
/**
 * Checks whether an object is a data source.
 * @param {?} value
 * @return {?}
 */


function isDataSource(value) {
  // Check if the value is a DataSource by observing if it has a connect function. Cannot
  // be checked as an `instanceof DataSource` since people could create their own sources
  // that match the interface, but don't extend DataSource.
  return value && typeof value.connect === 'function';
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * DataSource wrapper for a native array.
 * @template T
 */


var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ArrayDataSource, _DataSource);

  var _super = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(ArrayDataSource);

  /**
   * @param {?} _data
   */
  function ArrayDataSource(_data) {
    var _this;

    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ArrayDataSource);

    _this = _super.call(this);
    _this._data = _data;
    return _this;
  }
  /**
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ArrayDataSource, [{
    key: "connect",
    value: function connect() {
      return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"] ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this._data);
    }
    /**
     * @return {?}
     */

  }, {
    key: "disconnect",
    value: function disconnect() {}
  }]);

  return ArrayDataSource;
}(DataSource);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */


var SelectionModel = /*#__PURE__*/function () {
  /**
   * @param {?=} _multiple
   * @param {?=} initiallySelectedValues
   * @param {?=} _emitChanges
   */
  function SelectionModel() {
    var _this2 = this;

    var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

    var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, SelectionModel);

    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    /**
     * Currently-selected values.
     */

    this._selection = new Set();
    /**
     * Keeps track of the deselected options that haven't been emitted by the change event.
     */

    this._deselectedToEmit = [];
    /**
     * Keeps track of the selected options that haven't been emitted by the change event.
     */

    this._selectedToEmit = [];
    /**
     * Event emitted when the value has changed.
     */

    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    /**
     * Event emitted when the value has changed.
     * @deprecated Use `changed` instead.
     * \@breaking-change 8.0.0 To be changed to `changed`
     */

    this.onChange = this.changed;

    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach(
        /**
        * @param {?} value
        * @return {?}
        */
        function (value) {
          return _this2._markSelected(value);
        });
      } else {
        this._markSelected(initiallySelectedValues[0]);
      } // Clear the array in order to avoid firing the change event for preselected values.


      this._selectedToEmit.length = 0;
    }
  }
  /**
   * Selected values.
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SelectionModel, [{
    key: "selected",
    get: function get() {
      if (!this._selected) {
        this._selected = Array.from(this._selection.values());
      }

      return this._selected;
    }
    /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */

  }, {
    key: "select",
    value: function select() {
      var _this3 = this;

      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      this._verifyValueAssignment(values);

      values.forEach(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        return _this3._markSelected(value);
      });

      this._emitChangeEvent();
    }
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */

  }, {
    key: "deselect",
    value: function deselect() {
      var _this4 = this;

      for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
      }

      this._verifyValueAssignment(values);

      values.forEach(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        return _this4._unmarkSelected(value);
      });

      this._emitChangeEvent();
    }
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle(value) {
      this.isSelected(value) ? this.deselect(value) : this.select(value);
    }
    /**
     * Clears all of the selected values.
     * @return {?}
     */

  }, {
    key: "clear",
    value: function clear() {
      this._unmarkAll();

      this._emitChangeEvent();
    }
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "isSelected",
    value: function isSelected(value) {
      return this._selection.has(value);
    }
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._selection.size === 0;
    }
    /**
     * Determines whether the model has a value.
     * @return {?}
     */

  }, {
    key: "hasValue",
    value: function hasValue() {
      return !this.isEmpty();
    }
    /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */

  }, {
    key: "sort",
    value: function sort(predicate) {
      if (this._multiple && this.selected) {
        /** @type {?} */
        this._selected.sort(predicate);
      }
    }
    /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */

  }, {
    key: "isMultipleSelection",
    value: function isMultipleSelection() {
      return this._multiple;
    }
    /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */

  }, {
    key: "_emitChangeEvent",
    value: function _emitChangeEvent() {
      // Clear the selected values so they can be re-cached.
      this._selected = null;

      if (this._selectedToEmit.length || this._deselectedToEmit.length) {
        this.changed.next({
          source: this,
          added: this._selectedToEmit,
          removed: this._deselectedToEmit
        });
        this._deselectedToEmit = [];
        this._selectedToEmit = [];
      }
    }
    /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_markSelected",
    value: function _markSelected(value) {
      if (!this.isSelected(value)) {
        if (!this._multiple) {
          this._unmarkAll();
        }

        this._selection.add(value);

        if (this._emitChanges) {
          this._selectedToEmit.push(value);
        }
      }
    }
    /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_unmarkSelected",
    value: function _unmarkSelected(value) {
      if (this.isSelected(value)) {
        this._selection.delete(value);

        if (this._emitChanges) {
          this._deselectedToEmit.push(value);
        }
      }
    }
    /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */

  }, {
    key: "_unmarkAll",
    value: function _unmarkAll() {
      var _this5 = this;

      if (!this.isEmpty()) {
        this._selection.forEach(
        /**
        * @param {?} value
        * @return {?}
        */
        function (value) {
          return _this5._unmarkSelected(value);
        });
      }
    }
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */

  }, {
    key: "_verifyValueAssignment",
    value: function _verifyValueAssignment(values) {
      if (values.length > 1 && !this._multiple) {
        throw getMultipleValuesInSingleSelectionError();
      }
    }
  }]);

  return SelectionModel;
}();
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * \@docs-private
 * @return {?}
 */


function getMultipleValuesInSingleSelectionError() {
  return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */


var UniqueSelectionDispatcher = /*#__PURE__*/function () {
  function UniqueSelectionDispatcher() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, UniqueSelectionDispatcher);

    this._listeners = [];
  }
  /**
   * Notify other items that selection for the given name has been set.
   * @param {?} id ID of the item.
   * @param {?} name Name of the item.
   * @return {?}
   */


  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UniqueSelectionDispatcher, [{
    key: "notify",
    value: function notify(id, name) {
      var _iterator = Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(this._listeners),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var listener = _step.value;
          listener(id, name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */

  }, {
    key: "listen",
    value: function listen(listener) {
      var _this6 = this;

      this._listeners.push(listener);

      return (
        /**
        * @return {?}
        */
        function () {
          _this6._listeners = _this6._listeners.filter(
          /**
          * @param {?} registered
          * @return {?}
          */
          function (registered) {
            return listener !== registered;
          });
        }
      );
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._listeners = [];
    }
  }]);

  return UniqueSelectionDispatcher;
}();

UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
  return new (t || UniqueSelectionDispatcher)();
};

UniqueSelectionDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: UniqueSelectionDispatcher,
  factory: UniqueSelectionDispatcher.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

UniqueSelectionDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"])({
  factory: function UniqueSelectionDispatcher_Factory() {
    return new UniqueSelectionDispatcher();
  },
  token: UniqueSelectionDispatcher,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "dEu6":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/coercion.js ***!
  \********************************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */

function coerceBooleanProperty(value) {
  return value != null && "".concat(value) !== 'false';
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */


function coerceNumberProperty(value) {
  var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */


function _isNumberValue(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(
  /** @type {?} */
  value)) && !isNaN(Number(value));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */


function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */


function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }

  return typeof value === 'string' ? value : "".concat(value, "px");
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 * @template T
 * @param {?} elementOrRef
 * @return {?}
 */


function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "jIHw":
/*!**********************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js ***!
  \**********************************************************************/
/*! exports provided: Button, ButtonDirective, ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return ButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ "YyRF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "7zfz");











function Button_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

var _c0 = function _c0(a1, a2, a3, a4) {
  return {
    "p-button-icon": true,
    "p-button-icon-left": a1,
    "p-button-icon-right": a2,
    "p-button-icon-top": a3,
    "p-button-icon-bottom": a4
  };
};

function Button_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 4);
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.loading ? "p-button-loading-icon " + ctx_r1.loadingIcon : ctx_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](4, _c0, ctx_r1.iconPos === "left" && ctx_r1.label, ctx_r1.iconPos === "right" && ctx_r1.label, ctx_r1.iconPos === "top" && ctx_r1.label, ctx_r1.iconPos === "bottom" && ctx_r1.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", true);
  }
}

function Button_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", ctx_r2.icon && !ctx_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.label || "\xA0");
  }
}

function Button_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r3.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.badgeStyleClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.badge);
  }
}

var _c1 = function _c1(a1, a2, a3, a4, a5) {
  return {
    "p-button p-component": true,
    "p-button-icon-only": a1,
    "p-button-vertical": a2,
    "p-disabled": a3,
    "p-button-loading": a4,
    "p-button-loading-label-only": a5
  };
};

var _c2 = ["*"];

var ButtonDirective = /*#__PURE__*/function () {
  function ButtonDirective(el) {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonDirective);

    this.el = el;
    this.iconPos = 'left';
    this.loadingIcon = "pi pi-spinner pi-spin";
    this._loading = false;
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonDirective, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this._initialStyleClass = this.el.nativeElement.className;
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addMultipleClasses(this.el.nativeElement, this.getStyleClass());

      if (this.icon) {
        this.createIconEl();
      }

      var labelElement = document.createElement("span");

      if (this.icon && !this.label) {
        labelElement.setAttribute('aria-hidden', 'true');
      }

      labelElement.className = 'p-button-label';
      if (this.label) labelElement.appendChild(document.createTextNode(this.label));else labelElement.innerHTML = '&nbsp;';
      this.el.nativeElement.appendChild(labelElement);
      this.initialized = true;
    }
  }, {
    key: "getStyleClass",
    value: function getStyleClass() {
      var styleClass = 'p-button p-component';

      if (this.icon && !this.label) {
        styleClass = styleClass + ' p-button-icon-only';
      }

      if (this.loading) {
        styleClass = styleClass + ' p-disabled p-button-loading';
        if (!this.icon && this.label) styleClass = styleClass + ' p-button-loading-label-only';
      }

      return styleClass;
    }
  }, {
    key: "setStyleClass",
    value: function setStyleClass() {
      var styleClass = this.getStyleClass();
      this.el.nativeElement.className = styleClass + ' ' + this._initialStyleClass;
    }
  }, {
    key: "createIconEl",
    value: function createIconEl() {
      var iconElement = document.createElement("span");
      iconElement.className = 'p-button-icon';
      iconElement.setAttribute("aria-hidden", "true");
      var iconPosClass = this.label ? 'p-button-icon-' + this.iconPos : null;

      if (iconPosClass) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(iconElement, iconPosClass);
      }

      primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addMultipleClasses(iconElement, this.getIconClass());
      var labelEl = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.el.nativeElement, '.p-button-label');
      if (labelEl) this.el.nativeElement.insertBefore(iconElement, labelEl);else this.el.nativeElement.appendChild(iconElement);
    }
  }, {
    key: "getIconClass",
    value: function getIconClass() {
      return this.loading ? 'p-button-loading-icon ' + this.loadingIcon : this._icon;
    }
  }, {
    key: "setIconClass",
    value: function setIconClass() {
      var iconElement = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.el.nativeElement, '.p-button-icon');

      if (iconElement) {
        if (this.iconPos) iconElement.className = 'p-button-icon p-button-icon-' + this.iconPos + ' ' + this.getIconClass();else iconElement.className = 'p-button-icon ' + this.getIconClass();
      } else {
        this.createIconEl();
      }
    }
  }, {
    key: "removeIconElement",
    value: function removeIconElement() {
      var iconElement = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.el.nativeElement, '.p-button-icon');
      this.el.nativeElement.removeChild(iconElement);
    }
  }, {
    key: "label",
    get: function get() {
      return this._label;
    },
    set: function set(val) {
      this._label = val;

      if (this.initialized) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.el.nativeElement, '.p-button-label').textContent = this._label || '&nbsp;';
        this.setStyleClass();
      }
    }
  }, {
    key: "icon",
    get: function get() {
      return this._icon;
    },
    set: function set(val) {
      this._icon = val;

      if (this.initialized) {
        this.setIconClass();
        this.setStyleClass();
      }
    }
  }, {
    key: "loading",
    get: function get() {
      return this._loading;
    },
    set: function set(val) {
      this._loading = val;

      if (this.initialized) {
        if (this.loading || this.icon) this.setIconClass();else this.removeIconElement();
        this.setStyleClass();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.initialized = false;
    }
  }]);

  return ButtonDirective;
}();

ButtonDirective.ɵfac = function ButtonDirective_Factory(t) {
  return new (t || ButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
};

ButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: ButtonDirective,
  selectors: [["", "pButton", ""]],
  inputs: {
    iconPos: "iconPos",
    loadingIcon: "loadingIcon",
    label: "label",
    icon: "icon",
    loading: "loading"
  }
});

ButtonDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }];
};

ButtonDirective.propDecorators = {
  iconPos: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  loadingIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  icon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  loading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ButtonDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[pButton]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }];
  }, {
    iconPos: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    loadingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();

var Button = /*#__PURE__*/function () {
  function Button() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Button);

    this.type = "button";
    this.iconPos = 'left';
    this.loading = false;
    this.loadingIcon = "pi pi-spinner pi-spin";
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Button, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this = this;

      this.templates.forEach(function (item) {
        switch (item.getType()) {
          case 'content':
            _this.contentTemplate = item.template;
            break;

          default:
            _this.contentTemplate = item.template;
            break;
        }
      });
    }
  }, {
    key: "badgeStyleClass",
    value: function badgeStyleClass() {
      return {
        'p-badge p-component': true,
        'p-badge-no-gutter': this.badge && String(this.badge).length === 1
      };
    }
  }]);

  return Button;
}();

Button.ɵfac = function Button_Factory(t) {
  return new (t || Button)();
};

Button.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: Button,
  selectors: [["p-button"]],
  contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"], 0);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  inputs: {
    type: "type",
    iconPos: "iconPos",
    loading: "loading",
    loadingIcon: "loadingIcon",
    icon: "icon",
    badge: "badge",
    label: "label",
    disabled: "disabled",
    style: "style",
    styleClass: "styleClass",
    badgeClass: "badgeClass"
  },
  outputs: {
    onClick: "onClick",
    onFocus: "onFocus",
    onBlur: "onBlur"
  },
  ngContentSelectors: _c2,
  decls: 6,
  vars: 16,
  consts: [["pRipple", "", 3, "ngStyle", "disabled", "ngClass", "click", "focus", "blur"], [4, "ngTemplateOutlet"], [3, "ngClass", "class", 4, "ngIf"], ["class", "p-button-label", 4, "ngIf"], [3, "ngClass"], [1, "p-button-label"]],
  template: function Button_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Button_Template_button_click_0_listener($event) {
        return ctx.onClick.emit($event);
      })("focus", function Button_Template_button_focus_0_listener($event) {
        return ctx.onFocus.emit($event);
      })("blur", function Button_Template_button_blur_0_listener($event) {
        return ctx.onBlur.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Button_ng_container_2_Template, 1, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Button_span_3_Template, 1, 9, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, Button_span_4_Template, 2, 2, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, Button_span_5_Template, 2, 4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.style)("disabled", ctx.disabled || ctx.loading)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](10, _c1, ctx.icon && !ctx.label, (ctx.iconPos === "top" || ctx.iconPos === "bottom") && ctx.label, ctx.disabled || ctx.loading, ctx.loading, ctx.loading && !ctx.icon && ctx.label));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("type", ctx.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.contentTemplate && (ctx.icon || ctx.loading));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.contentTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.contentTemplate && ctx.badge);
    }
  },
  directives: [primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
  encapsulation: 2,
  changeDetection: 0
});
Button.propDecorators = {
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  iconPos: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  icon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  badge: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  loading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  loadingIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  style: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  styleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  badgeClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  templates: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]]
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Button, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'p-button',
      template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [ngStyle]=\"style\" [disabled]=\"disabled || loading\"\n            [ngClass]=\"{'p-button p-component':true,\n                        'p-button-icon-only': (icon && !label),\n                        'p-button-vertical': (iconPos === 'top' || iconPos === 'bottom') && label,\n                        'p-disabled': this.disabled || this.loading,\n                        'p-button-loading': this.loading,\n                        'p-button-loading-label-only': this.loading && !this.icon && this.label}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\" pRipple>\n            <ng-content></ng-content>\n            <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            <span [ngClass]=\"{'p-button-icon': true,\n                        'p-button-icon-left': iconPos === 'left' && label,\n                        'p-button-icon-right': iconPos === 'right' && label,\n                        'p-button-icon-top': iconPos === 'top' && label,\n                        'p-button-icon-bottom': iconPos === 'bottom' && label}\"\n                        [class]=\"loading ? 'p-button-loading-icon ' + loadingIcon : icon\" *ngIf=\"!contentTemplate && (icon||loading)\" [attr.aria-hidden]=\"true\"></span>\n            <span class=\"p-button-label\" [attr.aria-hidden]=\"icon && !label\" *ngIf=\"!contentTemplate\">{{label||'&nbsp;'}}</span>\n            <span [ngClass]=\"badgeStyleClass()\" [class]=\"badgeClass\" *ngIf=\"!contentTemplate && badge\">{{badge}}</span>\n        </button>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
    }]
  }], function () {
    return [];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    iconPos: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    loadingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    badge: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    badgeClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]]
    }]
  });
})();

var ButtonModule = function ButtonModule() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonModule);
};

ButtonModule.ɵfac = function ButtonModule_Factory(t) {
  return new (t || ButtonModule)();
};

ButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ButtonModule
});
ButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ButtonModule, {
    declarations: function declarations() {
      return [ButtonDirective, Button];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]];
    },
    exports: function exports() {
      return [ButtonDirective, Button];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ButtonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]],
      exports: [ButtonDirective, Button],
      declarations: [ButtonDirective, Button]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "t2ka":
/*!*********************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js ***!
  \*********************************************************************/
/*! exports provided: ObjectUtils, UniqueComponentId, lastId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUtils", function() { return ObjectUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueComponentId", function() { return UniqueComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastId", function() { return lastId; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");



var ObjectUtils = /*#__PURE__*/function () {
  function ObjectUtils() {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ObjectUtils);
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ObjectUtils, null, [{
    key: "equals",
    value: function equals(obj1, obj2, field) {
      if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.equalsByValue(obj1, obj2);
    }
  }, {
    key: "equalsByValue",
    value: function equalsByValue(obj1, obj2) {
      if (obj1 === obj2) return true;

      if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
        var arrA = Array.isArray(obj1),
            arrB = Array.isArray(obj2),
            i,
            length,
            key;

        if (arrA && arrB) {
          length = obj1.length;
          if (length != obj2.length) return false;

          for (i = length; i-- !== 0;) {
            if (!this.equalsByValue(obj1[i], obj2[i])) return false;
          }

          return true;
        }

        if (arrA != arrB) return false;
        var dateA = obj1 instanceof Date,
            dateB = obj2 instanceof Date;
        if (dateA != dateB) return false;
        if (dateA && dateB) return obj1.getTime() == obj2.getTime();
        var regexpA = obj1 instanceof RegExp,
            regexpB = obj2 instanceof RegExp;
        if (regexpA != regexpB) return false;
        if (regexpA && regexpB) return obj1.toString() == obj2.toString();
        var keys = Object.keys(obj1);
        length = keys.length;
        if (length !== Object.keys(obj2).length) return false;

        for (i = length; i-- !== 0;) {
          if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;
        }

        for (i = length; i-- !== 0;) {
          key = keys[i];
          if (!this.equalsByValue(obj1[key], obj2[key])) return false;
        }

        return true;
      }

      return obj1 !== obj1 && obj2 !== obj2;
    }
  }, {
    key: "resolveFieldData",
    value: function resolveFieldData(data, field) {
      if (data && field) {
        if (this.isFunction(field)) {
          return field(data);
        } else if (field.indexOf('.') == -1) {
          return data[field];
        } else {
          var fields = field.split('.');
          var value = data;

          for (var i = 0, len = fields.length; i < len; ++i) {
            if (value == null) {
              return null;
            }

            value = value[fields[i]];
          }

          return value;
        }
      } else {
        return null;
      }
    }
  }, {
    key: "isFunction",
    value: function isFunction(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    }
  }, {
    key: "reorderArray",
    value: function reorderArray(value, from, to) {
      var target;

      if (value && from !== to) {
        if (to >= value.length) {
          to %= value.length;
          from %= value.length;
        }

        value.splice(to, 0, value.splice(from, 1)[0]);
      }
    }
  }, {
    key: "insertIntoOrderedArray",
    value: function insertIntoOrderedArray(item, index, arr, sourceArr) {
      if (arr.length > 0) {
        var injected = false;

        for (var i = 0; i < arr.length; i++) {
          var currentItemIndex = this.findIndexInList(arr[i], sourceArr);

          if (currentItemIndex > index) {
            arr.splice(i, 0, item);
            injected = true;
            break;
          }
        }

        if (!injected) {
          arr.push(item);
        }
      } else {
        arr.push(item);
      }
    }
  }, {
    key: "findIndexInList",
    value: function findIndexInList(item, list) {
      var index = -1;

      if (list) {
        for (var i = 0; i < list.length; i++) {
          if (list[i] == item) {
            index = i;
            break;
          }
        }
      }

      return index;
    }
  }, {
    key: "removeAccents",
    value: function removeAccents(str) {
      if (str && str.search(/[\xC0-\xFF]/g) > -1) {
        str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
      }

      return str;
    }
  }]);

  return ObjectUtils;
}();

var lastId = 0;

function UniqueComponentId() {
  var prefix = 'pr_id_';
  lastId++;
  return "".concat(prefix).concat(lastId);
}
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "xlun":
/*!***********************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tooltip.js ***!
  \***********************************************************************/
/*! exports provided: Tooltip, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ "YyRF");







var Tooltip = /*#__PURE__*/function () {
  function Tooltip(el, zone) {
    Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tooltip);

    this.el = el;
    this.zone = zone;
    this.tooltipPosition = 'right';
    this.tooltipEvent = 'hover';
    this.appendTo = 'body';
    this.tooltipZIndex = 'auto';
    this.escape = true;
  }

  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tooltip, [{
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(val) {
      this._disabled = val;
      this.deactivate();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;

      this.zone.runOutsideAngular(function () {
        if (_this.tooltipEvent === 'hover') {
          _this.mouseEnterListener = _this.onMouseEnter.bind(_this);
          _this.mouseLeaveListener = _this.onMouseLeave.bind(_this);
          _this.clickListener = _this.onClick.bind(_this);

          _this.el.nativeElement.addEventListener('mouseenter', _this.mouseEnterListener);

          _this.el.nativeElement.addEventListener('mouseleave', _this.mouseLeaveListener);

          _this.el.nativeElement.addEventListener('click', _this.clickListener);
        } else if (_this.tooltipEvent === 'focus') {
          _this.focusListener = _this.onFocus.bind(_this);
          _this.blurListener = _this.onBlur.bind(_this);

          _this.el.nativeElement.addEventListener('focus', _this.focusListener);

          _this.el.nativeElement.addEventListener('blur', _this.blurListener);
        }
      });
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(e) {
      if (!this.container && !this.showTimeout) {
        this.activate();
      }
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(e) {
      this.deactivate();
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      this.activate();
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      this.deactivate();
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      this.deactivate();
    }
  }, {
    key: "activate",
    value: function activate() {
      var _this2 = this;

      this.active = true;
      this.clearHideTimeout();
      if (this.showDelay) this.showTimeout = setTimeout(function () {
        _this2.show();
      }, this.showDelay);else this.show();

      if (this.life) {
        var duration = this.showDelay ? this.life + this.showDelay : this.life;
        this.hideTimeout = setTimeout(function () {
          _this2.hide();
        }, duration);
      }
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this3 = this;

      this.active = false;
      this.clearShowTimeout();

      if (this.hideDelay) {
        this.clearHideTimeout(); //life timeout

        this.hideTimeout = setTimeout(function () {
          _this3.hide();
        }, this.hideDelay);
      } else {
        this.hide();
      }
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    },
    set: function set(text) {
      this._text = text;

      if (this.active) {
        if (this._text) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }, {
    key: "create",
    value: function create() {
      if (this.container) {
        this.clearHideTimeout();
        this.remove();
      }

      this.container = document.createElement('div');
      var tooltipArrow = document.createElement('div');
      tooltipArrow.className = 'p-tooltip-arrow';
      this.container.appendChild(tooltipArrow);
      this.tooltipText = document.createElement('div');
      this.tooltipText.className = 'p-tooltip-text';
      this.updateText();

      if (this.positionStyle) {
        this.container.style.position = this.positionStyle;
      }

      this.container.appendChild(this.tooltipText);
      if (this.appendTo === 'body') document.body.appendChild(this.container);else if (this.appendTo === 'target') primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.container, this.el.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.container, this.appendTo);
      this.container.style.display = 'inline-block';
    }
  }, {
    key: "show",
    value: function show() {
      if (!this.text || this.disabled) {
        return;
      }

      this.create();
      this.align();
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].fadeIn(this.container, 250);
      if (this.tooltipZIndex === 'auto') this.container.style.zIndex = ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex;else this.container.style.zIndex = this.tooltipZIndex;
      this.bindDocumentResizeListener();
      this.bindScrollListener();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.remove();
    }
  }, {
    key: "updateText",
    value: function updateText() {
      if (this.escape) {
        this.tooltipText.innerHTML = '';
        this.tooltipText.appendChild(document.createTextNode(this._text));
      } else {
        this.tooltipText.innerHTML = this._text;
      }
    }
  }, {
    key: "align",
    value: function align() {
      var position = this.tooltipPosition;

      switch (position) {
        case 'top':
          this.alignTop();

          if (this.isOutOfBounds()) {
            this.alignBottom();

            if (this.isOutOfBounds()) {
              this.alignRight();

              if (this.isOutOfBounds()) {
                this.alignLeft();
              }
            }
          }

          break;

        case 'bottom':
          this.alignBottom();

          if (this.isOutOfBounds()) {
            this.alignTop();

            if (this.isOutOfBounds()) {
              this.alignRight();

              if (this.isOutOfBounds()) {
                this.alignLeft();
              }
            }
          }

          break;

        case 'left':
          this.alignLeft();

          if (this.isOutOfBounds()) {
            this.alignRight();

            if (this.isOutOfBounds()) {
              this.alignTop();

              if (this.isOutOfBounds()) {
                this.alignBottom();
              }
            }
          }

          break;

        case 'right':
          this.alignRight();

          if (this.isOutOfBounds()) {
            this.alignLeft();

            if (this.isOutOfBounds()) {
              this.alignTop();

              if (this.isOutOfBounds()) {
                this.alignBottom();
              }
            }
          }

          break;
      }
    }
  }, {
    key: "getHostOffset",
    value: function getHostOffset() {
      if (this.appendTo === 'body' || this.appendTo === 'target') {
        var offset = this.el.nativeElement.getBoundingClientRect();
        var targetLeft = offset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getWindowScrollLeft();
        var targetTop = offset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getWindowScrollTop();
        return {
          left: targetLeft,
          top: targetTop
        };
      } else {
        return {
          left: 0,
          top: 0
        };
      }
    }
  }, {
    key: "alignRight",
    value: function alignRight() {
      this.preAlign('right');
      var hostOffset = this.getHostOffset();
      var left = hostOffset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.el.nativeElement);
      var top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.container)) / 2;
      this.container.style.left = left + 'px';
      this.container.style.top = top + 'px';
    }
  }, {
    key: "alignLeft",
    value: function alignLeft() {
      this.preAlign('left');
      var hostOffset = this.getHostOffset();
      var left = hostOffset.left - primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.container);
      var top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.container)) / 2;
      this.container.style.left = left + 'px';
      this.container.style.top = top + 'px';
    }
  }, {
    key: "alignTop",
    value: function alignTop() {
      this.preAlign('top');
      var hostOffset = this.getHostOffset();
      var left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.container)) / 2;
      var top = hostOffset.top - primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.container);
      this.container.style.left = left + 'px';
      this.container.style.top = top + 'px';
    }
  }, {
    key: "alignBottom",
    value: function alignBottom() {
      this.preAlign('bottom');
      var hostOffset = this.getHostOffset();
      var left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.container)) / 2;
      var top = hostOffset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.el.nativeElement);
      this.container.style.left = left + 'px';
      this.container.style.top = top + 'px';
    }
  }, {
    key: "preAlign",
    value: function preAlign(position) {
      this.container.style.left = -999 + 'px';
      this.container.style.top = -999 + 'px';
      var defaultClassName = 'p-tooltip p-component p-tooltip-' + position;
      this.container.className = this.tooltipStyleClass ? defaultClassName + ' ' + this.tooltipStyleClass : defaultClassName;
    }
  }, {
    key: "isOutOfBounds",
    value: function isOutOfBounds() {
      var offset = this.container.getBoundingClientRect();
      var targetTop = offset.top;
      var targetLeft = offset.left;
      var width = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.container);
      var height = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.container);
      var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getViewport();
      return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize(e) {
      this.hide();
    }
  }, {
    key: "bindDocumentResizeListener",
    value: function bindDocumentResizeListener() {
      var _this4 = this;

      this.zone.runOutsideAngular(function () {
        _this4.resizeListener = _this4.onWindowResize.bind(_this4);
        window.addEventListener('resize', _this4.resizeListener);
      });
    }
  }, {
    key: "unbindDocumentResizeListener",
    value: function unbindDocumentResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    }
  }, {
    key: "bindScrollListener",
    value: function bindScrollListener() {
      var _this5 = this;

      if (!this.scrollHandler) {
        this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_4__["ConnectedOverlayScrollHandler"](this.el.nativeElement, function () {
          if (_this5.container) {
            _this5.hide();
          }
        });
      }

      this.scrollHandler.bindScrollListener();
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      if (this.tooltipEvent === 'hover') {
        this.el.nativeElement.removeEventListener('mouseenter', this.mouseEnterListener);
        this.el.nativeElement.removeEventListener('mouseleave', this.mouseLeaveListener);
        this.el.nativeElement.removeEventListener('click', this.clickListener);
      } else if (this.tooltipEvent === 'focus') {
        this.el.nativeElement.removeEventListener('focus', this.focusListener);
        this.el.nativeElement.removeEventListener('blur', this.blurListener);
      }

      this.unbindDocumentResizeListener();
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.container && this.container.parentElement) {
        if (this.appendTo === 'body') document.body.removeChild(this.container);else if (this.appendTo === 'target') this.el.nativeElement.removeChild(this.container);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeChild(this.container, this.appendTo);
      }

      this.unbindDocumentResizeListener();
      this.unbindScrollListener();
      this.clearTimeouts();
      this.container = null;
      this.scrollHandler = null;
    }
  }, {
    key: "clearShowTimeout",
    value: function clearShowTimeout() {
      if (this.showTimeout) {
        clearTimeout(this.showTimeout);
        this.showTimeout = null;
      }
    }
  }, {
    key: "clearHideTimeout",
    value: function clearHideTimeout() {
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    }
  }, {
    key: "clearTimeouts",
    value: function clearTimeouts() {
      this.clearShowTimeout();
      this.clearHideTimeout();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.unbindEvents();
      this.remove();

      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
    }
  }]);

  return Tooltip;
}();

Tooltip.ɵfac = function Tooltip_Factory(t) {
  return new (t || Tooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
};

Tooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: Tooltip,
  selectors: [["", "pTooltip", ""]],
  inputs: {
    tooltipPosition: "tooltipPosition",
    tooltipEvent: "tooltipEvent",
    appendTo: "appendTo",
    tooltipZIndex: "tooltipZIndex",
    escape: "escape",
    disabled: ["tooltipDisabled", "disabled"],
    text: ["pTooltip", "text"],
    positionStyle: "positionStyle",
    tooltipStyleClass: "tooltipStyleClass",
    showDelay: "showDelay",
    hideDelay: "hideDelay",
    life: "life"
  }
});

Tooltip.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
  }];
};

Tooltip.propDecorators = {
  tooltipPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  tooltipEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  appendTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  positionStyle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  tooltipStyleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  tooltipZIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  escape: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  showDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  hideDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  life: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ["tooltipDisabled"]
  }],
  text: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['pTooltip']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Tooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[pTooltip]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
    }];
  }, {
    tooltipPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    tooltipEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    tooltipZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    escape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ["tooltipDisabled"]
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['pTooltip']
    }],
    positionStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    tooltipStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    showDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    hideDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    life: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();

var TooltipModule = function TooltipModule() {
  Object(C_Users_HP_Documents_Workstation_Facturi_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TooltipModule);
};

TooltipModule.ɵfac = function TooltipModule_Factory(t) {
  return new (t || TooltipModule)();
};

TooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: TooltipModule
});
TooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TooltipModule, {
    declarations: function declarations() {
      return [Tooltip];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
    },
    exports: function exports() {
      return [Tooltip];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      exports: [Tooltip],
      declarations: [Tooltip]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default~account-account-module~app-app-module.js.map