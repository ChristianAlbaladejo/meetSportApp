function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.page.html":
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.page.html ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddAddPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>Back\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Add</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #formAdd=\"ngForm\" (ngSubmit)=\"onSubmit(formAdd)\">\n    <ion-item>\n      <ion-label>For:</ion-label>\n      <ion-select *ngIf=\"follows\" name=\"receiver\" #receiver=\"ngModel\" [(ngModel)]=\"message.receiver\" class=\"form-control\" required>\n        <ion-select-option *ngFor=\"let follow of follows\" value=\"{{follow.user._id}}\">{{follow.user.name + ' ' + follow.user.surname + ' (' + follow.user.nick + ')'}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n   <!--  <ion-list>\n      <ion-list-header>\n        For:\n      </ion-list-header>\n      <ion-item *ngIf=\"follows\">\n        <ion-avatar slot=\"start\">\n          <img src=\"./avatar-finn.png\">\n        </ion-avatar>\n        <ion-label>\n          <h2>Finn</h2>\n          <h3>I'm a big deal</h3>\n          <p>Listen, I've had a pretty messed up day...</p>\n        </ion-label>\n      </ion-item>\n    </ion-list> -->\n    <ion-item>\n      <ion-label position=\"floating\">Message:</ion-label>\n      <ion-textarea name=\"text\" #text=\"ngModel\" [(ngModel)]=\"message.text\" required></ion-textarea>\n      <span *ngIf=\"!text.valid && text.touched\">The message is required</span>\n    </ion-item>\n    <ion-button type=\"submit\" color=\"primary\">\n      Send\n    </ion-button>\n  </form>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\n    <ion-header>\n      <ion-toolbar color=\"success\">\n        <ion-title>MeetSport</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-item>\n        <ion-avatar slot=\"end\">\n          <img *ngIf=\"identity.image\" src=\"{{url + '/get-image-user/' + identity.image}}\">\n          <img *ngIf=\"!identity.image\" src=\"../../assets/no-user.webp\">\n        </ion-avatar>\n        <ion-label>\n          <h3>{{identity.name + ' ' + identity.surname}}</h3>\n          <p>{{identity.email}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-list *ngFor=\"let pages of navigate\">\n        <ion-menu-toggle auto-hide=\"true\">\n          <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\">\n            <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\n            {{pages.title}}\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"true\">\n        <ion-item (click)=\"logout()\">\n            <ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\n            Log-out\n        </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"content1\"></ion-router-outlet>\n  \n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/follow-following/follow-following.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/follow-following/follow-following.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFollowFollowingFollowFollowingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" color=\"success\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>People</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"following\">\n  <ion-list>\n    <ion-list-header>\n      People\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let follow of following\">\n      <ion-avatar slot=\"start\">\n        <img (click)=\"loadUser(follow.followed)\" *ngIf=\"follow.followed.image\" src=\"{{url + '/get-image-user/'+ follow.followed.image}}\">\n        <img (click)=\"loadUser(follow.followed)\" *ngIf=\"!follow.followed.image\" src=\"../../assets/no-user.webp\">\n      </ion-avatar>\n      <ion-label>\n        <h2 (click)=\"loadUser(follow.followed)\">{{follow.followed.name + ' ' + follow.followed.surname}}</h2>\n        <h3 (click)=\"loadUser(follow.followed)\">{{follow.followed.nick}}</h3>\n        <p (click)=\"loadUser(follow.followed)\">{{follow.followed.email}}</p>\n        <div class=\"followButton\" *ngIf=\"follow.followed._id != identity._id\">\n          <ion-button color=\"success\" (click)=\"followUser(follow.followed._id)\" *ngIf=\"follows.indexOf(follow.followed._id) < 0\">\n            <ion-icon name=\"add-circle-outline\"></ion-icon> &nbsp; Follow\n          </ion-button>\n          <ion-button ion-button [color]=\"follow.followed._id == followUserOver ? 'primary' : 'secondary'\"\n            (mouseover)=\"mouseEnter(follow.followed._id)\" (mouseleave)=\"mouseLeave(user._id)\"\n            *ngIf=\"follows.indexOf(follow.followed._id) >= 0\" (click)=unfollowUser(follow.followed._id)>\n            <span *ngIf=\"user._id == followUserOver;else following\">\n              <ion-icon name=\"close-circle-outline\"></ion-icon> &nbsp; Unfollow\n            </span>\n            <ng-template #following>\n              <ion-icon name=\"checkmark-circle-outline\"></ion-icon> &nbsp; Following\n            </ng-template>\n          </ion-button>\n        </div>\n      </ion-label>\n    </ion-item>\n  </ion-list> \n</div>\n\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/other-user/other-user.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/other-user/other-user.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOtherUserOtherUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>Back\n      </ion-button>\n    </ion-buttons>\n    <ion-title>User</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div id=\"container\">\n    <ion-card>\n\n      <img *ngIf=\"user.image\" class=\"imageUser\" src=\"{{url + '/get-image-user/' + user.image}}\">\n      <img *ngIf=\"!user.image\" src=\"../../assets/no-user.webp\">\n      <p *ngIf=\"stats\">\n        <ion-chip outline color=\"secondary\">\n          <ion-label>Following &nbsp; {{stats.following}}</ion-label>\n        </ion-chip>\n        <ion-chip outline color=\"secondary\">\n          <ion-label>Followed &nbsp; {{stats.followed}}</ion-label>\n        </ion-chip>\n      </p>\n      <ion-item>\n        <ion-label stacked>Name: </ion-label>\n        <ion-input [(ngModel)]=\"user.name\" name=\"name\" #name=\"ngModel\" [readonly]=\"!editing\" type=\"text\" required>\n        </ion-input>\n        <span *ngIf=\"!name.value && name.touched\">\n          Name is required\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Surname: </ion-label>\n        <ion-input [(ngModel)]=\"user.surname\" name=\"surname\" #surname=\"ngModel\" [readonly]=\"!editing\" type=\"text\"\n          required>\n        </ion-input>\n        <span *ngIf=\"!surname.value && surname.touched\">\n          Surname is required\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Nick: </ion-label>\n        <ion-input [(ngModel)]=\"user.nick\" name=\"nick\" #nick=\"ngModel\" [readonly]=\"!editing\" type=\"text\" required>\n        </ion-input>\n        <span *ngIf=\"!nick.value && nick.touched\">\n          Nick is required\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Email: </ion-label>\n        <ion-input [(ngModel)]=\"user.email\" name=\"email\" #email=\"ngModel\" [readonly]=\"!editing\" type=\"text\" required>\n        </ion-input>\n        <span *ngIf=\"!email.value && email.touched\">\n          Email is required\n        </span>\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>Back\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-item *ngIf=\"user\">\n    <ion-avatar slot=\"start\">\n      <img (click)=\"goUser(user)\" *ngIf=\"user.image\" src=\"{{url + '/get-image-user/'+ user.image}}\">\n      <img (click)=\"goUser(user)\" *ngIf=\"!user.image\" src=\"../../assets/no-user.webp\">\n    </ion-avatar>\n    <ion-label>\n      <ion-button color=\"light\" *ngIf=\"followed\">Te sigue</ion-button>\n      <h3>{{user?.name +' '+ user?.surname}}</h3>\n      <h3>{{user?.nick}}</h3>\n    </ion-label>\n    <ion-button *ngIf=\"!following\" color=\"success\" (click)=\"followUser(user._id)\">Follow</ion-button>\n    <ion-button *ngIf=\"following\" color=\"primary\" (click)=\"unfollowUser(user._id)\" (mouseenter)=\"mouseEnter(user._id)\"\n      (mouseleave)=\"mouseLeave()\" [color]=\"user._id == followUserOver ? 'primary' : 'warning'\">\n      <span *ngIf=\" user._id==followUserOver; else following\">\n        Unfollow\n      </span>\n      <ng-template #following>\n        Following\n      </ng-template>\n    </ion-button>\n  </ion-item>\n  <div *ngIf=\"publications\">\n  <div id=\"container\" *ngFor=\"let publication of publications;let i = index\">\n    <ion-card>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"publication.user.image\" src=\"{{url + '/get-image-user/' + publication.user.image}}\">\n          <img *ngIf=\"!publication.user.image\" src=\"../../assets/no-user.webp\">\n        </ion-avatar>\n        <ion-label>\n          <h3>{{publication?.user.name +' '+ publication?.user.surname+ ' '}}|\n            &nbsp;{{'  ' +publication?.created_at | date}}</h3>\n          <h3>{{publication?.text}}</h3>\n          <h3>{{publication?.date}}</h3>\n          <!-- <ion-button slot=\"end\" (click)=\"delete(publication._id)\">ASD</ion-button> -->\n        </ion-label>\n      </ion-item>\n\n      <ion-card-content (click)=\"openPublication(publication)\">\n        <!-- Poner el archivo para descargar -->\n        <div id=\"{{'map'+i}}\" style=\"max-width:500px; height:300px\"></div>\n      </ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n          </ion-col>\n          <ion-col>\n            <ion-button *ngIf=\"!checkIfExists(publication)\" (click)=like(publication)>Subscribe </ion-button>\n            <ion-button color=\"warning\" *ngIf=\"checkIfExists(publication)\" (click)=dislike(publication)>Unsubscribe </ion-button>\n          </ion-col>\n          <ion-col>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    \n  </div>\n\n  <div id=\"container-no-exits\" *ngIf=\"publications.length == 0\">\n    <strong>You have no publications</strong>\n    <p>You can create them or follow people to see them</p>\n  </div>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/publication/publication.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publication/publication.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicationPublicationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>Back\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Publication</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"publication.user._id == identity._id\" (click)=\"delete()\"><ion-icon name=\"trash-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-avatar slot=\"start\" (click)=openUser(publication.user)>\n      <img *ngIf=\"publication.user.image\" src=\"{{url + '/get-image-user/' + publication.user.image}}\">\n      <img *ngIf=\"!publication.user.image\" src=\"../../assets/no-user.webp\">\n    </ion-avatar>\n    <ion-label>\n      <h3>{{publication?.user.name +' '+ publication?.user.surname+ ' '}}|\n        &nbsp;{{'  ' +publication?.created_at | date}}</h3>\n      <h3>{{publication?.text}}</h3>\n      <h3>Date of exit: {{times?.date | date}} &nbsp; {{ times?.hour}}</h3>\n      <!-- <ion-button slot=\"end\" (click)=\"delete(publication._id)\">ASD</ion-button> -->\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>What are you going to do?</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-textarea [(ngModel)]=\"publication.text\" name=\"text\" #text=\"ngModel\" type=\"text-area\" required>\n    </ion-textarea>\n  </ion-item>\n  <ion-item>\n    <!-- <input type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"fileChangeEvent($event)\" />\n    <label for=\"file\">\n      <ion-icon name=\"images\"></ion-icon> Upload file\n    </label> \n     <a href=\"{{url + '/get-image-user/'+ publication.user.image}}\" target=\"_blank\" download=\"file\">Download</a> \n     <form method=\"get\" action=\"{{url + '/get-image-user/'+ publication.user.image}}\">\n      <button type=\"submit\">Download!</button>\n    </form> -->\n  </ion-item>\n  <div id=\"map\"></div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/received/received.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/received/received.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReceivedReceivedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>Back\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Received</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"messages\">\n    <ion-item *ngFor=\"let message of messages\">\n      <ion-avatar slot=\"start\">\n        <img (click)=\"loadUser(user)\" *ngIf=\"message.emitter.image\"\n          src=\"{{url + '/get-image-user/'+ message.emitter.image}}\">\n        <img (click)=\"loadUser(user)\" *ngIf=\"!message.emitter.image\" src=\"../../assets/no-user.webp\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{message.emitter.name + ' ' + message.emitter.surname}}&nbsp;{{'  ' +message?.created_at | date}}</h2>\n        <p>{{message.text}}</p>\n      </ion-label>\n    </ion-item>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <ion-button *ngIf=\"page != this.total\" (click)=\"doInfinite()\">\n          Load more\n        </ion-button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sended/sended.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sended/sended.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSendedSendedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>Back\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Received</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"messages\">\n    <ion-item *ngFor=\"let message of messages\">\n      <ion-avatar slot=\"start\">\n        <img (click)=\"loadUser(user)\" *ngIf=\"message.emitter.image\" src=\"{{url + '/get-image-user/'+ message.emitter.image}}\">\n        <img (click)=\"loadUser(user)\" *ngIf=\"!message.emitter.image\" src=\"../../assets/no-user.webp\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{message.emitter.name + ' ' + message.emitter.surname}}&nbsp;{{'  ' +message?.created_at | date}}</h2>\n        <h4>Sended to: {{ message?.receiver.name + ' ' + message.receiver.surname }}</h4>\n        <p>{{message.text}}</p>\n      </ion-label>\n    </ion-item>\n  </div>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <ion-button *ngIf=\"page != this.total\" (click)=\"doInfinite()\">\n        Load more\n      </ion-button>\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/add/add.page.scss":
  /*!***********************************!*\
    !*** ./src/app/add/add.page.scss ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAddAddPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/add/add.page.ts":
  /*!*********************************!*\
    !*** ./src/app/add/add.page.ts ***!
    \*********************************/

  /*! exports provided: AddPage */

  /***/
  function srcAppAddAddPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPage", function () {
      return AddPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/message */
    "./src/app/models/message.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_follow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/follow.service */
    "./src/app/services/follow.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/message.service */
    "./src/app/services/message.service.ts");

    var AddPage = /*#__PURE__*/function () {
      function AddPage(_messageService, navParams, modal, _route, _router, _userService, alert, loading, navCtrl, _followService) {
        _classCallCheck(this, AddPage);

        this._messageService = _messageService;
        this.navParams = navParams;
        this.modal = modal;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.alert = alert;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this._followService = _followService;
        this.identity = this._userService.getIdentity();
        this.message = new _models_message__WEBPACK_IMPORTED_MODULE_3__["Message"]('', '', '', '', this.identity._id, '');
        this.token = this._userService.getToken();
        this.url = 'https://api-meet-sport.herokuapp.com/api';
      }

      _createClass(AddPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMyFollows();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.modal.dismiss();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    loading = this.loading.create({
                      message: 'Please wait...'
                    });
                    _context3.next = 3;
                    return loading;

                  case 3:
                    _context3.sent.present();

                    this._messageService.addMessage(this.token, this.message).subscribe(function (response) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                form.reset();
                                _context.next = 3;
                                return this.alert.create({
                                  message: 'The message has been sent successfully!!. 👍',
                                  buttons: ['OK']
                                });

                              case 3:
                                alert = _context.sent;
                                _context.next = 6;
                                return loading;

                              case 6:
                                _context.sent.dismiss();

                                _context.next = 9;
                                return alert.present();

                              case 9:
                                this.modal.dismiss();

                              case 10:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, function (error) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 2:
                                alert = _context2.sent;
                                _context2.next = 5;
                                return loading;

                              case 5:
                                _context2.sent.dismiss();

                                _context2.next = 8;
                                return alert.present();

                              case 8:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getMyFollows",
        value: function getMyFollows() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    loading = this.loading.create({
                      message: 'Please wait...'
                    });
                    _context6.next = 3;
                    return loading;

                  case 3:
                    _context6.sent.present();

                    this._followService.getMyFollows(this.token).subscribe(function (response) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                console.log(response.follows);
                                this.follows = response.follows;
                                _context4.next = 4;
                                return loading;

                              case 4:
                                _context4.sent.dismiss();

                              case 5:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    }, function (error) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                _context5.next = 2;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 2:
                                alert = _context5.sent;
                                _context5.next = 5;
                                return loading;

                              case 5:
                                _context5.sent.dismiss();

                                _context5.next = 8;
                                return alert.present();

                              case 8:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return AddPage;
    }();

    AddPage.ctorParameters = function () {
      return [{
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _services_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"]
      }];
    };

    AddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.page.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"], _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add.page.scss */
      "./src/app/add/add.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _services_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"]])], AddPage);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | dashboard-dashboard-module */
        "dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./dashboard/dashboard.module */
        "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | login-login-module */
        [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | register-register-module */
        [__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'user',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | user-user-module */
        "user-user-module").then(__webpack_require__.bind(null,
        /*! ./user/user.module */
        "./src/app/user/user.module.ts")).then(function (m) {
          return m.UserPageModule;
        });
      }
    }, {
      path: 'people',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | people-people-module */
        "people-people-module").then(__webpack_require__.bind(null,
        /*! ./people/people.module */
        "./src/app/people/people.module.ts")).then(function (m) {
          return m.PeoplePageModule;
        });
      }
    }, {
      path: 'add-publication',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | add-publication-add-publication-module */
        "add-publication-add-publication-module").then(__webpack_require__.bind(null,
        /*! ./add-publication/add-publication.module */
        "./src/app/add-publication/add-publication.module.ts")).then(function (m) {
          return m.AddPublicationPageModule;
        });
      }
    }, {
      path: 'publication',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | publication-publication-module */
        "publication-publication-module").then(__webpack_require__.bind(null,
        /*! ./publication/publication.module */
        "./src/app/publication/publication.module.ts")).then(function (m) {
          return m.PublicationPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | profile-profile-module */
        "profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./profile/profile.module */
        "./src/app/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'follow-following',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | follow-following-follow-following-module */
        "follow-following-follow-following-module").then(__webpack_require__.bind(null,
        /*! ./follow-following/follow-following.module */
        "./src/app/follow-following/follow-following.module.ts")).then(function (m) {
          return m.FollowFollowingPageModule;
        });
      }
    }, {
      path: 'other-user',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | other-user-other-user-module */
        "other-user-other-user-module").then(__webpack_require__.bind(null,
        /*! ./other-user/other-user.module */
        "./src/app/other-user/other-user.module.ts")).then(function (m) {
          return m.OtherUserPageModule;
        });
      }
    }, {
      path: 'messages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | messages-messages-messages-module */
        "messages-messages-messages-module").then(__webpack_require__.bind(null,
        /*! ./messages/messages/messages.module */
        "./src/app/messages/messages/messages.module.ts")).then(function (m) {
          return m.MessagesPageModule;
        });
      }
    }, {
      path: 'add',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | add-add-module */
        "add-add-module").then(__webpack_require__.bind(null,
        /*! ./add/add.module */
        "./src/app/add/add.module.ts")).then(function (m) {
          return m.AddPageModule;
        });
      }
    }, {
      path: 'received',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | received-received-module */
        "received-received-module").then(__webpack_require__.bind(null,
        /*! ./received/received.module */
        "./src/app/received/received.module.ts")).then(function (m) {
          return m.ReceivedPageModule;
        });
      }
    }, {
      path: 'sended',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sended-sended-module */
        "sended-sended-module").then(__webpack_require__.bind(null,
        /*! ./sended/sended.module */
        "./src/app/sended/sended.module.ts")).then(function (m) {
          return m.SendedPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxDaHJpc3RpYW5cXERvY3VtZW50c1xcUHJveWVjdG9GaW5hbC1EQVdcXG1lZXRTcG9ydFxcbWVldFNwb3J0QXBwLXYyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router, _userService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this._userService = _userService;
        this.sideMenu();
        this.initializeApp();
        this.url = 'https://api-meet-sport.herokuapp.com/api';
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this3 = this;

          this.platform.ready().then(function () {
            _this3.router.navigateByUrl('login');

            _this3.statusBar.styleDefault();

            _this3.splashScreen.hide();
          });
        }
        /*  primerget(){
           const path = 'http://localhost:3800/api/home' ;
           return this.api.getPrueba();
         } */

      }, {
        key: "sideMenu",
        value: function sideMenu() {
          this.navigate = [{
            title: "Home",
            url: "/",
            icon: "home"
          }, {
            title: "People",
            url: "/people",
            icon: "people-outline"
          }, {
            title: "Chat",
            url: "/messages",
            icon: "chatbubbles-outline"
          }, {
            title: "User",
            url: "/user",
            icon: "person-circle-outline"
          }];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.identity = this._userService.getIdentity();
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.identity = this._userService.getIdentity();
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.identity = null;
          this.router.navigate(['/login']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var ngx_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-moment */
    "./node_modules/ngx-moment/fesm2015/ngx-moment.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _publication_publication_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./publication/publication.page */
    "./src/app/publication/publication.page.ts");
    /* harmony import */


    var _profile_profile_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./profile/profile.page */
    "./src/app/profile/profile.page.ts");
    /* harmony import */


    var _follow_following_follow_following_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./follow-following/follow-following.page */
    "./src/app/follow-following/follow-following.page.ts");
    /* harmony import */


    var _other_user_other_user_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./other-user/other-user.page */
    "./src/app/other-user/other-user.page.ts");
    /* harmony import */


    var _received_received_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./received/received.page */
    "./src/app/received/received.page.ts");
    /* harmony import */


    var _add_add_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./add/add.page */
    "./src/app/add/add.page.ts");
    /* harmony import */


    var _sended_sended_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./sended/sended.page */
    "./src/app/sended/sended.page.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* import {MessagesModule} from './messages/messages.module' */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _publication_publication_page__WEBPACK_IMPORTED_MODULE_15__["PublicationPage"], _profile_profile_page__WEBPACK_IMPORTED_MODULE_16__["ProfilePage"], _follow_following_follow_following_page__WEBPACK_IMPORTED_MODULE_17__["FollowFollowingPage"], _other_user_other_user_page__WEBPACK_IMPORTED_MODULE_18__["OtherUserPage"], _received_received_page__WEBPACK_IMPORTED_MODULE_19__["ReceivedPage"], _add_add_page__WEBPACK_IMPORTED_MODULE_20__["AddPage"], _sended_sended_page__WEBPACK_IMPORTED_MODULE_21__["SendedPage"]],
      entryComponents: [_publication_publication_page__WEBPACK_IMPORTED_MODULE_15__["PublicationPage"], _profile_profile_page__WEBPACK_IMPORTED_MODULE_16__["ProfilePage"], _follow_following_follow_following_page__WEBPACK_IMPORTED_MODULE_17__["FollowFollowingPage"], _other_user_other_user_page__WEBPACK_IMPORTED_MODULE_18__["OtherUserPage"], _received_received_page__WEBPACK_IMPORTED_MODULE_19__["ReceivedPage"], _add_add_page__WEBPACK_IMPORTED_MODULE_20__["AddPage"], _sended_sended_page__WEBPACK_IMPORTED_MODULE_21__["SendedPage"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_8__["MomentModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMaps"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/follow-following/follow-following.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/follow-following/follow-following.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFollowFollowingFollowFollowingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGxvdy1mb2xsb3dpbmcvZm9sbG93LWZvbGxvd2luZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/follow-following/follow-following.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/follow-following/follow-following.page.ts ***!
    \***********************************************************/

  /*! exports provided: FollowFollowingPage */

  /***/
  function srcAppFollowFollowingFollowFollowingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowFollowingPage", function () {
      return FollowFollowingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_follow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/follow */
    "./src/app/models/follow.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_follow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/follow.service */
    "./src/app/services/follow.service.ts");
    /* harmony import */


    var _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../profile/profile.page */
    "./src/app/profile/profile.page.ts");

    var FollowFollowingPage = /*#__PURE__*/function () {
      function FollowFollowingPage(navParams, modal, _route, _router, _userService, alert, loading, navCtrl, _followService) {
        _classCallCheck(this, FollowFollowingPage);

        this.navParams = navParams;
        this.modal = modal;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.alert = alert;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this._followService = _followService;
        this.page = 1;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = 'https://api-meet-sport.herokuapp.com/api';
        this.user = this.navParams.get('user');
        console.log(this.user, "asdasd");
      }

      _createClass(FollowFollowingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFollows(this.user._id, 1);
        }
      }, {
        key: "getFollows",
        value: function getFollows(user_id, page) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this4 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    loading = this.loading.create({
                      message: 'Please wait...'
                    });
                    _context9.next = 3;
                    return loading;

                  case 3:
                    _context9.sent.present();

                    this._followService.getFollowing(this.token, user_id, page).subscribe(function (response) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                if (response.follows) {
                                  _context7.next = 11;
                                  break;
                                }

                                _context7.next = 3;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 3:
                                alert = _context7.sent;
                                _context7.next = 6;
                                return loading;

                              case 6:
                                _context7.sent.dismiss();

                                _context7.next = 9;
                                return alert.present();

                              case 9:
                                _context7.next = 20;
                                break;

                              case 11:
                                console.log(response, "aaaaa");
                                this.total = response.total;
                                this.following = response.following;
                                this.pages = response.pages;
                                _context7.t0 = response;
                                _context7.next = 18;
                                return loading;

                              case 18:
                                _context7.t1 = _context7.sent;
                                this.follows = _context7.t0.user_following.call(_context7.t0, _context7.t1).dismiss();

                              case 20:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    }, function (error) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                        var errorMessage, alert;
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                errorMessage = error;
                                console.log(errorMessage);

                                if (!(errorMessage != null)) {
                                  _context8.next = 11;
                                  break;
                                }

                                _context8.next = 5;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrongg. 😥',
                                  buttons: ['OK']
                                });

                              case 5:
                                alert = _context8.sent;
                                _context8.next = 8;
                                return loading;

                              case 8:
                                _context8.sent.dismiss();

                                _context8.next = 11;
                                return alert.present();

                              case 11:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "mouseEnter",
        value: function mouseEnter(user_id) {
          this.followUserOver = user_id;
        }
      }, {
        key: "mouseLeave",
        value: function mouseLeave(user_id) {
          this.followUserOver = 0;
        }
      }, {
        key: "followUser",
        value: function followUser(followed) {
          var _this5 = this;

          var follow = new _models_follow__WEBPACK_IMPORTED_MODULE_3__["Follow"]('', this.identity._id, followed);

          this._followService.addFollow(this.token, follow).subscribe(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var alert;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (response.follow) {
                        _context10.next = 8;
                        break;
                      }

                      _context10.next = 3;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context10.sent;
                      _context10.next = 6;
                      return alert.present();

                    case 6:
                      _context10.next = 9;
                      break;

                    case 8:
                      this.follows.push(followed);

                    case 9:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var alert;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context11.sent;
                      _context11.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          });
        }
      }, {
        key: "unfollowUser",
        value: function unfollowUser(followed) {
          var _this6 = this;

          this._followService.deleteFollow(this.token, followed).subscribe(function (response) {
            var search = _this6.follows.indexOf(followed);

            if (search != -1) {
              _this6.follows.splice(search, 1);
            }
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var alert;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context12.sent;
                      _context12.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          });
        }
      }, {
        key: "doInfinite",
        value: function doInfinite(infiniteScroll) {
          this.page++;
          /* this.getUsers().then(result => infiniteScroll.target.complete()); */
        }
      }, {
        key: "loadUser",
        value: function loadUser(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var modal;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.modal.create({
                      component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"],
                      componentProps: {
                        'user': user
                      }
                    });

                  case 2:
                    modal = _context13.sent;
                    _context13.next = 5;
                    return modal.present();

                  case 5:
                    return _context13.abrupt("return", _context13.sent);

                  case 6:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }]);

      return FollowFollowingPage;
    }();

    FollowFollowingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _services_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"]
      }];
    };

    FollowFollowingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-follow-following',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./follow-following.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/follow-following/follow-following.page.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./follow-following.page.scss */
      "./src/app/follow-following/follow-following.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _services_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"]])], FollowFollowingPage);
    /***/
  },

  /***/
  "./src/app/models/follow.ts":
  /*!**********************************!*\
    !*** ./src/app/models/follow.ts ***!
    \**********************************/

  /*! exports provided: Follow */

  /***/
  function srcAppModelsFollowTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Follow", function () {
      return Follow;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Follow = function Follow(_id, user, followed) {
      _classCallCheck(this, Follow);

      this._id = _id;
      this.user = user;
      this.followed = followed;
    };
    /***/

  },

  /***/
  "./src/app/models/message.ts":
  /*!***********************************!*\
    !*** ./src/app/models/message.ts ***!
    \***********************************/

  /*! exports provided: Message */

  /***/
  function srcAppModelsMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Message = function Message(_id, text, viewed, created_at, emitter, receiver) {
      _classCallCheck(this, Message);

      this._id = _id;
      this.text = text;
      this.viewed = viewed;
      this.created_at = created_at;
      this.emitter = emitter;
      this.receiver = receiver;
    };
    /***/

  },

  /***/
  "./src/app/other-user/other-user.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/other-user/other-user.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOtherUserOtherUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  max-width: 500px;\n  margin: auto;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.imageUser {\n  width: 100%;\n  height: 18rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RoZXItdXNlci9DOlxcVXNlcnNcXENocmlzdGlhblxcRG9jdW1lbnRzXFxQcm95ZWN0b0ZpbmFsLURBV1xcbWVldFNwb3J0XFxtZWV0U3BvcnRBcHAtdjIvc3JjXFxhcHBcXG90aGVyLXVzZXJcXG90aGVyLXVzZXIucGFnZS5zY3NzIiwic3JjL2FwcC9vdGhlci11c2VyL290aGVyLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDRCxZQUFBO0FDQ0Q7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtBQ0RGOztBREdBO0VBQ1EsV0FBQTtFQUNBLGFBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL290aGVyLXVzZXIvb3RoZXItdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiBtYXJnaW46IGF1dG87XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5pbWFnZVVzZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE4cmVtOztcbiAgICB9XG4iLCIjY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmltYWdlVXNlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/other-user/other-user.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/other-user/other-user.page.ts ***!
    \***********************************************/

  /*! exports provided: OtherUserPage */

  /***/
  function srcAppOtherUserOtherUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherUserPage", function () {
      return OtherUserPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/upload.service */
    "./src/app/services/upload.service.ts");
    /* harmony import */


    var _follow_following_follow_following_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../follow-following/follow-following.page */
    "./src/app/follow-following/follow-following.page.ts");

    var OtherUserPage = /*#__PURE__*/function () {
      function OtherUserPage(navParams, navCtrl, modalController, _route, _router, _userService, alert, loading, _uploadService) {
        _classCallCheck(this, OtherUserPage);

        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.alert = alert;
        this.loading = loading;
        this._uploadService = _uploadService;
        this.mode = 'login';
        this.user = this.navParams.get('user');
        console.log(this.user, 'aa');
        this.getUser(this.user._id);
        /* this.identity = this.user; */

        this.token = this._userService.getToken();
        this.url = 'https://api-meet-sport.herokuapp.com/api';
        this.getCounters(this.user._id);
      }

      _createClass(OtherUserPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUser",
        value: function getUser(id) {
          var _this7 = this;

          this._userService.getUser(id).subscribe(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var alert;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      if (!response.user) {
                        _context14.next = 6;
                        break;
                      }

                      console.log(response);
                      this.user = response.user;
                      console.log(this.user);
                      _context14.next = 12;
                      break;

                    case 6:
                      _context14.next = 8;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 8:
                      alert = _context14.sent;
                      console.log('problemo');
                      _context14.next = 12;
                      return alert.present();

                    case 12:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var alert;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context15.sent;
                      _context15.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          });
        }
      }, {
        key: "getCounters",
        value: function getCounters(id) {
          var _this8 = this;

          this._userService.getCounters(id).subscribe(function (response) {
            _this8.stats = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }, {
        key: "following",
        value: function following() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var modal;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.modalController.create({
                      component: _follow_following_follow_following_page__WEBPACK_IMPORTED_MODULE_6__["FollowFollowingPage"],
                      componentProps: {
                        'user': this.user
                      }
                    });

                  case 2:
                    modal = _context16.sent;
                    _context16.next = 5;
                    return modal.present();

                  case 5:
                    return _context16.abrupt("return", _context16.sent);

                  case 6:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }]);

      return OtherUserPage;
    }();

    OtherUserPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]
      }];
    };

    OtherUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-other-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./other-user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/other-user/other-user.page.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./other-user.page.scss */
      "./src/app/other-user/other-user.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]])], OtherUserPage);
    /***/
  },

  /***/
  "./src/app/profile/profile.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  max-width: 500px;\n  margin: auto;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container-no-exits {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container-no-exits strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container-no-exits p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXENocmlzdGlhblxcRG9jdW1lbnRzXFxQcm95ZWN0b0ZpbmFsLURBV1xcbWVldFNwb3J0XFxtZWV0U3BvcnRBcHAtdjIvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDRCxZQUFBO0FDQ0Q7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gbWFyZ2luOiBhdXRvO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNjb250YWluZXItbm8tZXhpdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lci1uby1leGl0cyBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyLW5vLWV4aXRzIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn0iLCIjY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2NvbnRhaW5lci1uby1leGl0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lci1uby1leGl0cyBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyLW5vLWV4aXRzIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/profile.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/profile/profile.page.ts ***!
    \*****************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _models_follow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/follow */
    "./src/app/models/follow.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_follow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/follow.service */
    "./src/app/services/follow.service.ts");
    /* harmony import */


    var _services_publication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/publication.service */
    "./src/app/services/publication.service.ts");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");
    /* harmony import */


    var _publication_publication_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../publication/publication.page */
    "./src/app/publication/publication.page.ts");
    /* harmony import */


    var _other_user_other_user_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../other-user/other-user.page */
    "./src/app/other-user/other-user.page.ts");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(navParams, modalController, _googleMaps, _publicationService, modal, _route, _router, _userService, _followUser, alert, loading, navCtrl) {
        _classCallCheck(this, ProfilePage);

        this.navParams = navParams;
        this.modalController = modalController;
        this._googleMaps = _googleMaps;
        this._publicationService = _publicationService;
        this.modal = modal;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._followUser = _followUser;
        this.alert = alert;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.followed = false;
        this.following = false;
        this.coords = [];
        this.markers = [];
        this.maps = [];
        this.page = 1;
        this.times = [];
        /* this.sub = this._route.params.subscribe(params => {
          this.id = params.id;
          console.log(this.id);
        }); */

        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = 'https://api-meet-sport.herokuapp.com/api';
        this.user = this.navParams.get('user');
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /* this.getUser(this.user._id); */
          google.maps.event.addDomListener(window, 'load', this.getPublications(this.page));
          /* setTimeout(() => {
            this.getPublications(this.page);
          }, 3000); */

          /*  const loading = await this.loading.create();
           loading.present();
           
           this._route.paramMap.pipe(
             switchMap((params: ParamMap) => {
               return this._publicationService.getPublicationsUser(this.token, this.user._id, this.page)
             })
           ).subscribe(res => {
             
             this.coords = [];
             this.total = res.total_items;
             this.pages = res.pages;
             this.items_per_page = res.items_per_page
             this.publications = res.publications
             for (let i = 0; i < this.publications.length; i++) {
               let cord = this.publications[i].location.split(',');
               let object = {
                 lat: cord[0], lng: cord[1], zoom: 15
               }
               this.coords.push(object);
             }
             
             setTimeout(() => {
               google.maps.event.addDomListener(window, 'load', this.initialize());
               loading.dismiss();
             },3000)
          }) */
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          var _this9 = this;

          this._userService.getUser(id).subscribe(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var alert;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (!response.user) {
                        _context17.next = 8;
                        break;
                      }

                      console.log(response);
                      this.user = response.user;
                      console.log(this.user);

                      if (response.following && response.following._id) {
                        this.following = true;
                      } else {
                        this.following = false;
                      }

                      if (response.followed && response.followed._id) {
                        this.followed = true;
                      } else {
                        this.followed = false;
                      }

                      _context17.next = 14;
                      break;

                    case 8:
                      _context17.next = 10;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 10:
                      alert = _context17.sent;
                      console.log('problemo');
                      _context17.next = 14;
                      return alert.present();

                    case 14:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var alert;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context18.sent;
                      _context18.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          });
        }
      }, {
        key: "getCounters",
        value: function getCounters(id) {
          var _this10 = this;

          this._userService.getCounters(id).subscribe(function (response) {
            _this10.stats = response;
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var alert;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context19.sent;
                      _context19.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          });
        }
      }, {
        key: "followUser",
        value: function followUser(followed) {
          var _this11 = this;

          var follow = new _models_follow__WEBPACK_IMPORTED_MODULE_4__["Follow"]('', this.identity._id, followed);

          this._followUser.addFollow(this.token, follow).subscribe(function (response) {
            _this11.following = true;
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var alert;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context20.sent;
                      _context20.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          });
        }
      }, {
        key: "unfollowUser",
        value: function unfollowUser(followed) {
          var _this12 = this;

          this._followUser.deleteFollow(this.token, followed).subscribe(function (response) {
            _this12.following = false;
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var alert;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context21.sent;
                      _context21.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          });
        }
      }, {
        key: "mouseEnter",
        value: function mouseEnter(user_id) {
          this.followUserOver = user_id;
        }
      }, {
        key: "mouseLeave",
        value: function mouseLeave() {
          this.followUserOver = 0;
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.modal.dismiss();
        }
      }, {
        key: "getPublications",
        value: function getPublications(page) {
          var adding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var _this13 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.loading.create();

                  case 2:
                    loading = _context23.sent;
                    loading.present();

                    this._publicationService.getPublicationsUser(this.token, this.user._id, page).subscribe(function (response) {
                      if (response.publications) {
                        _this13.coords = [];
                        _this13.total = response.total_items;
                        _this13.pages = response.pages;
                        _this13.items_per_page = response.items_per_page;

                        if (!adding) {
                          _this13.publications = response.publications;

                          for (var i = 0; i < _this13.publications.length; i++) {
                            var cord = _this13.publications[i].location.split(',');

                            var time = _this13.publications[i].date.split(',');

                            var object2 = {
                              date: time[0],
                              hour: time[1].substr(12).slice(0, 5)
                            };
                            var object = {
                              lat: cord[0],
                              lng: cord[1],
                              zoom: 15
                            };

                            _this13.coords.push(object);

                            _this13.times.push(object2);
                          }

                          setTimeout(function () {
                            _this13.initialize();

                            loading.dismiss();
                          }, 3000);
                        } else {
                          var arrayA = _this13.publications;
                          var arrayB = response.publications;
                          _this13.publications = arrayA.concat(arrayB);
                          console.log(_this13.publications);

                          for (var _i = 0; _i < _this13.publications.length; _i++) {
                            var _cord = _this13.publications[_i].location.split(',');

                            var _time = _this13.publications[_i].date.split(',');

                            var _object = {
                              lat: _cord[0],
                              lng: _cord[1],
                              zoom: 15
                            };
                            var _object2 = {
                              date: _time[0],
                              hour: _time[1]
                            };

                            _this13.coords.push(_object);

                            _this13.times.push(_object2);
                          }

                          setTimeout(function () {
                            _this13.initialize();

                            loading.dismiss();
                          }, 3000);
                        }
                      } else {
                        //Mostrar el div que no tienes publications
                        loading.dismiss();
                      }
                    }, function (error) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee22$(_context22) {
                          while (1) {
                            switch (_context22.prev = _context22.next) {
                              case 0:
                                _context22.next = 2;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 2:
                                alert = _context22.sent;
                                loading.dismiss();
                                _context22.next = 6;
                                return alert.present();

                              case 6:
                              case "end":
                                return _context22.stop();
                            }
                          }
                        }, _callee22, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(p) {
          var _this14 = this;

          this._publicationService.deletePublication(this.token, p).subscribe(function (response) {
            if (response.publications) {
              console.log("bien");
            } else {
              console.log("bien");
            }
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var alert;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context24.sent;
                      _context24.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          });
        }
        /*   initialize() {
            for (var i = 0, length = this.coords.length; i < length; i++) {
              var point = this.coords[i];
              var latlng = new google.maps.LatLng(point.lat, point.lng);
             
              this.maps[i] = new google.maps.Map(document.getElementById('map' + (i)), {
                zoom: point.zoom,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              });
              google.maps.event.addListenerOnce(this.maps[i], 'idle', function () {
                
              });
              google.maps.event.addListenerOnce(this.maps[i], 'tilesloaded', function () {
                //this part runs when the mapobject is created and rendered
                console.log("hola");
                google.maps.event.addListenerOnce(this.maps[i], 'tilesloaded', function () {
                  this.markers[i] = new google.maps.Marker({
                    position: latlng,
                    map: this.maps[i],
                    title: 'Location'
                  });
                  console.log("holaaaa");
                });
              });
              
              
            }
            
             console.log(this.maps, this.markers)
          } */

      }, {
        key: "initialize",
        value: function initialize() {
          for (var i = 0, length = this.coords.length; i < length; i++) {
            var point = this.coords[i];
            var latlng = new google.maps.LatLng(point.lat, point.lng);
            this.maps[i] = new google.maps.Map(document.getElementById('map' + i), {
              zoom: point.zoom,
              center: latlng,
              zoomControl: false,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: false,
              fullscreenControl: false,
              gestureHandling: 'none'
            });
            this.markers[i] = new google.maps.Marker({
              position: latlng,
              map: this.maps[i]
            });
          }

          console.log(this.maps, this.markers);
        }
      }, {
        key: "doInfinite",
        value: function doInfinite(infiniteScroll) {
          if (this.publications.length == this.total) {
            infiniteScroll.target.complete();
          } else {
            this.page++;
            this.getPublications(this.page, true).then(function (result) {
              return infiniteScroll.target.complete();
            });
          }
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.page = 1;
          this.getPublications(this.page, false).then(function (result) {
            return event.target.complete();
          });
        }
      }, {
        key: "openPublication",
        value: function openPublication(publication) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var modal;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.modalController.create({
                      component: _publication_publication_page__WEBPACK_IMPORTED_MODULE_9__["PublicationPage"],
                      componentProps: {
                        'publication': publication
                      }
                    });

                  case 2:
                    modal = _context25.sent;
                    _context25.next = 5;
                    return modal.present();

                  case 5:
                    return _context25.abrupt("return", _context25.sent);

                  case 6:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "goUser",
        value: function goUser(u) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var modal;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.modalController.create({
                      component: _other_user_other_user_page__WEBPACK_IMPORTED_MODULE_10__["OtherUserPage"],
                      componentProps: {
                        'user': u
                      }
                    });

                  case 2:
                    modal = _context26.sent;
                    _context26.next = 5;
                    return modal.present();

                  case 5:
                    return _context26.abrupt("return", _context26.sent);

                  case 6:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "like",
        value: function like(publication) {
          var _this15 = this;

          this.identity = this._userService.getIdentity();

          this._publicationService.like(this.token, publication).subscribe(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var alert, i;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      if (response) {
                        _context27.next = 8;
                        break;
                      }

                      _context27.next = 3;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context27.sent;
                      _context27.next = 6;
                      return alert.present();

                    case 6:
                      _context27.next = 9;
                      break;

                    case 8:
                      for (i = 0; i < this.publications.length; i++) {
                        if (this.publications[i]._id == publication._id) {
                          this.publications[i].like.push(this.identity._id);
                        }
                      }

                    case 9:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var alert;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context28.sent;
                      _context28.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          });
        }
      }, {
        key: "dislike",
        value: function dislike(publication) {
          var _this16 = this;

          this.identity = this._userService.getIdentity();

          this._publicationService.dislike(this.token, publication).subscribe(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var alert, i, indice;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      if (response) {
                        _context29.next = 8;
                        break;
                      }

                      _context29.next = 3;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context29.sent;
                      _context29.next = 6;
                      return alert.present();

                    case 6:
                      _context29.next = 9;
                      break;

                    case 8:
                      for (i = 0; i < this.publications.length; i++) {
                        if (this.publications[i]._id == publication._id) {
                          indice = this.publications[i].like.indexOf(this.identity._id);
                          this.publications[i].like.splice(indice, 1);
                        }
                      }

                    case 9:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var alert;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context30.sent;
                      _context30.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          });
        }
      }, {
        key: "checkIfExists",
        value: function checkIfExists(p) {
          if (p.like.includes(this.identity._id)) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMaps"]
      }, {
        type: _services_publication_service__WEBPACK_IMPORTED_MODULE_7__["PublicationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"], _services_publication_service__WEBPACK_IMPORTED_MODULE_7__["PublicationService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/profile/profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMaps"], _services_publication_service__WEBPACK_IMPORTED_MODULE_7__["PublicationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], ProfilePage);
    /***/
  },

  /***/
  "./src/app/publication/publication.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/publication/publication.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicationPublicationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljYXRpb24vQzpcXFVzZXJzXFxDaHJpc3RpYW5cXERvY3VtZW50c1xcUHJveWVjdG9GaW5hbC1EQVdcXG1lZXRTcG9ydFxcbWVldFNwb3J0QXBwLXYyL3NyY1xcYXBwXFxwdWJsaWNhdGlvblxccHVibGljYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHVibGljYXRpb24vcHVibGljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIjbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/publication/publication.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/publication/publication.page.ts ***!
    \*************************************************/

  /*! exports provided: PublicationPage */

  /***/
  function srcAppPublicationPublicationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationPage", function () {
      return PublicationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_follow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/follow.service */
    "./src/app/services/follow.service.ts");
    /* harmony import */


    var _services_publication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/publication.service */
    "./src/app/services/publication.service.ts");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");

    var PublicationPage = /*#__PURE__*/function () {
      function PublicationPage(modalController, _publicationService, navParams, _route, _router, _userService, alert, loading, navCtrl, _followService, _googleMaps) {
        _classCallCheck(this, PublicationPage);

        this.modalController = modalController;
        this._publicationService = _publicationService;
        this.navParams = navParams;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.alert = alert;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this._followService = _followService;
        this._googleMaps = _googleMaps;
        this.mapRef = null;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = 'https://api-meet-sport.herokuapp.com/api';
        this.publication = this.navParams.get('publication');
        this.times = this.navParams.get('times');
        console.log(this.times);
      }

      _createClass(PublicationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.loadMap();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.modalController.dismiss();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
            var cord, object, latlng, myLatLng, mapEle, marker;
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    cord = this.publication.location.split(',');
                    object = {
                      lat: cord[0],
                      lng: cord[1]
                    };
                    latlng = new google.maps.LatLng(object.lat, object.lng);
                    myLatLng = latlng;
                    mapEle = document.getElementById('map');
                    this.mapRef = new google.maps.Map(mapEle, {
                      center: myLatLng,
                      zoom: 12
                    });
                    marker = new google.maps.Marker({
                      position: latlng,
                      map: this.mapRef,
                      animation: google.maps.Animation.DROP
                    });

                  case 7:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
            var _this17 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    alert = this.alert.create({
                      header: 'Confirm delete publication',
                      message: 'Are you sure you want to delete the publication?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Accept',
                        handler: function handler() {
                          _this17._publicationService.deletePublication(_this17.token, _this17.publication._id).subscribe(function (response) {
                            if (response.publications) {} else {}
                          }, function (error) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
                              var alert;
                              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                                while (1) {
                                  switch (_context32.prev = _context32.next) {
                                    case 0:
                                      _context32.next = 2;
                                      return this.alert.create({
                                        message: 'Ohh! Something gone wrong. 😥',
                                        buttons: ['OK']
                                      });

                                    case 2:
                                      alert = _context32.sent;
                                      _context32.next = 5;
                                      return alert.present();

                                    case 5:
                                    case "end":
                                      return _context32.stop();
                                  }
                                }
                              }, _callee32, this);
                            }));
                          });

                          _this17.modalController.dismiss();
                        }
                      }]
                    });
                    _context33.next = 3;
                    return alert;

                  case 3:
                    _context33.sent.present();

                  case 4:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        }
      }]);

      return PublicationPage;
    }();

    PublicationPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]
      }, {
        type: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__["GoogleMaps"]
      }];
    };

    PublicationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-publication',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./publication.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/publication/publication.page.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"], _services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./publication.page.scss */
      "./src/app/publication/publication.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__["GoogleMaps"]])], PublicationPage);
    /***/
  },

  /***/
  "./src/app/received/received.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/received/received.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppReceivedReceivedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2VpdmVkL3JlY2VpdmVkLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/received/received.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/received/received.page.ts ***!
    \*******************************************/

  /*! exports provided: ReceivedPage */

  /***/
  function srcAppReceivedReceivedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReceivedPage", function () {
      return ReceivedPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_follow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/follow.service */
    "./src/app/services/follow.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/message.service */
    "./src/app/services/message.service.ts");

    var ReceivedPage = /*#__PURE__*/function () {
      function ReceivedPage(_messageService, navParams, modal, _route, _router, _userService, alert, loading, navCtrl, _followService) {
        _classCallCheck(this, ReceivedPage);

        this._messageService = _messageService;
        this.navParams = navParams;
        this.modal = modal;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.alert = alert;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this._followService = _followService;
        this.page = 1;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = 'https://api-meet-sport.herokuapp.com/api';
      }

      _createClass(ReceivedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMessages();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.modal.dismiss();
        }
      }, {
        key: "doInfinite",
        value: function doInfinite() {
          if (this.messages.length == this.total) {} else {
            this.page++;
            this.getMessages(true);
          }
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          var adding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
            var _this18 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee36$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    loading = this.loading.create({
                      message: 'Please wait...'
                    });
                    _context36.next = 3;
                    return loading;

                  case 3:
                    _context36.sent.present();

                    this._messageService.getMyMessages(this.token, this.page).subscribe(function (response) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
                        var arrayA, arrayB;
                        return regeneratorRuntime.wrap(function _callee34$(_context34) {
                          while (1) {
                            switch (_context34.prev = _context34.next) {
                              case 0:
                                console.log(response);

                                if (!response.messages) {} else {
                                  if (!adding) {
                                    this.messages = response.messages;
                                    this.total = response.pages;
                                  } else {
                                    arrayA = this.messages;
                                    arrayB = response.messages;
                                    this.messages = arrayA.concat(arrayB);
                                  }
                                }

                                _context34.next = 4;
                                return loading;

                              case 4:
                                _context34.sent.dismiss();

                              case 5:
                              case "end":
                                return _context34.stop();
                            }
                          }
                        }, _callee34, this);
                      }));
                    }, function (error) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee35$(_context35) {
                          while (1) {
                            switch (_context35.prev = _context35.next) {
                              case 0:
                                _context35.next = 2;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 2:
                                alert = _context35.sent;
                                _context35.next = 5;
                                return loading;

                              case 5:
                                _context35.sent.dismiss();

                                _context35.next = 8;
                                return alert.present();

                              case 8:
                              case "end":
                                return _context35.stop();
                            }
                          }
                        }, _callee35, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee36, this);
          }));
        }
      }]);

      return ReceivedPage;
    }();

    ReceivedPage.ctorParameters = function () {
      return [{
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]
      }];
    };

    ReceivedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-received',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./received.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/received/received.page.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"], _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./received.page.scss */
      "./src/app/received/received.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]])], ReceivedPage);
    /***/
  },

  /***/
  "./src/app/sended/sended.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/sended/sended.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSendedSendedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-modal {\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZGVkL0M6XFxVc2Vyc1xcQ2hyaXN0aWFuXFxEb2N1bWVudHNcXFByb3llY3RvRmluYWwtREFXXFxtZWV0U3BvcnRcXG1lZXRTcG9ydEFwcC12Mi9zcmNcXGFwcFxcc2VuZGVkXFxzZW5kZWQucGFnZS5zY3NzIiwic3JjL2FwcC9zZW5kZWQvc2VuZGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZW5kZWQvc2VuZGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tb2RhbHtcbiAgICBvdmVyZmxvdzpzY3JvbGxcbn0iLCJpb24tbW9kYWwge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sended/sended.page.ts":
  /*!***************************************!*\
    !*** ./src/app/sended/sended.page.ts ***!
    \***************************************/

  /*! exports provided: SendedPage */

  /***/
  function srcAppSendedSendedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendedPage", function () {
      return SendedPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_follow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/follow.service */
    "./src/app/services/follow.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/message.service */
    "./src/app/services/message.service.ts");

    var SendedPage = /*#__PURE__*/function () {
      function SendedPage(_messageService, navParams, modal, _route, _router, _userService, alert, loading, navCtrl, _followService) {
        _classCallCheck(this, SendedPage);

        this._messageService = _messageService;
        this.navParams = navParams;
        this.modal = modal;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.alert = alert;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this._followService = _followService;
        this.page = 1;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = 'https://api-meet-sport.herokuapp.com/api';
      }

      _createClass(SendedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMessages();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.modal.dismiss();
        }
      }, {
        key: "doInfinite",
        value: function doInfinite() {
          if (this.messages.length == this.total) {} else {
            this.page++;
            this.getMessages(true);
          }
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          var adding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
            var _this19 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee39$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    loading = this.loading.create({
                      message: 'Please wait...'
                    });
                    _context39.next = 3;
                    return loading;

                  case 3:
                    _context39.sent.present();

                    this._messageService.getEmmitMessages(this.token, this.page).subscribe(function (response) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
                        var arrayA, arrayB;
                        return regeneratorRuntime.wrap(function _callee37$(_context37) {
                          while (1) {
                            switch (_context37.prev = _context37.next) {
                              case 0:
                                console.log(response);

                                if (!response.messages) {} else {
                                  if (!adding) {
                                    this.messages = response.messages;
                                    this.total = response.pages;
                                  } else {
                                    arrayA = this.messages;
                                    arrayB = response.messages;
                                    this.messages = arrayA.concat(arrayB);
                                  }
                                }

                                _context37.next = 4;
                                return loading;

                              case 4:
                                _context37.sent.dismiss();

                              case 5:
                              case "end":
                                return _context37.stop();
                            }
                          }
                        }, _callee37, this);
                      }));
                    }, function (error) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee38$(_context38) {
                          while (1) {
                            switch (_context38.prev = _context38.next) {
                              case 0:
                                _context38.next = 2;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 2:
                                alert = _context38.sent;
                                _context38.next = 5;
                                return loading;

                              case 5:
                                _context38.sent.dismiss();

                                _context38.next = 8;
                                return alert.present();

                              case 8:
                              case "end":
                                return _context38.stop();
                            }
                          }
                        }, _callee38, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee39, this);
          }));
        }
      }]);

      return SendedPage;
    }();

    SendedPage.ctorParameters = function () {
      return [{
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]
      }];
    };

    SendedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sended',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sended.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sended/sended.page.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"], _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sended.page.scss */
      "./src/app/sended/sended.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]])], SendedPage);
    /***/
  },

  /***/
  "./src/app/services/follow.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/follow.service.ts ***!
    \********************************************/

  /*! exports provided: FollowService */

  /***/
  function srcAppServicesFollowServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowService", function () {
      return FollowService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var FollowService = /*#__PURE__*/function () {
      function FollowService(_http) {
        _classCallCheck(this, FollowService);

        this._http = _http;
        this.url = 'https://api-meet-sport.herokuapp.com/api';
      }

      _createClass(FollowService, [{
        key: "addFollow",
        value: function addFollow(token, follow) {
          var params = JSON.stringify(follow);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http.post(this.url + '/follow', params, {
            headers: headers
          });
        }
      }, {
        key: "deleteFollow",
        value: function deleteFollow(token, id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http["delete"](this.url + '/deleteFollow/' + id, {
            headers: headers
          });
        }
      }, {
        key: "getFollowing",
        value: function getFollowing(token) {
          var userId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http.get(this.url + '/following/' + userId + '/' + page, {
            headers: headers
          });
        }
      }, {
        key: "getMyFollows",
        value: function getMyFollows(token) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http.get(this.url + '/get-my-follows/true', {
            headers: headers
          });
        }
      }]);

      return FollowService;
    }();

    FollowService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FollowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], FollowService);
    /***/
  },

  /***/
  "./src/app/services/message.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/message.service.ts ***!
    \*********************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppServicesMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MessageService = /*#__PURE__*/function () {
      function MessageService(_http, alert, loading) {
        _classCallCheck(this, MessageService);

        this._http = _http;
        this.alert = alert;
        this.loading = loading;
        this.url = 'https://api-meet-sport.herokuapp.com/api';
      }

      _createClass(MessageService, [{
        key: "addMessage",
        value: function addMessage(token, message) {
          var params = JSON.stringify(message);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http.post(this.url + '/message', params, {
            headers: headers
          });
        }
      }, {
        key: "getMyMessages",
        value: function getMyMessages(token) {
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http.get(this.url + '/my-messages/' + page, {
            headers: headers
          });
        }
      }, {
        key: "getEmmitMessages",
        value: function getEmmitMessages(token) {
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http.get(this.url + '/messages/' + page, {
            headers: headers
          });
        }
      }]);

      return MessageService;
    }();

    MessageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], MessageService);
    /***/
  },

  /***/
  "./src/app/services/publication.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/publication.service.ts ***!
    \*************************************************/

  /*! exports provided: PublicationService */

  /***/
  function srcAppServicesPublicationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationService", function () {
      return PublicationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PublicationService = /*#__PURE__*/function () {
      function PublicationService(_http, alert, loading) {
        _classCallCheck(this, PublicationService);

        this._http = _http;
        this.alert = alert;
        this.loading = loading;
        this.url = 'https://api-meet-sport.herokuapp.com/api';
      }

      _createClass(PublicationService, [{
        key: "addPublication",
        value: function addPublication(token, publication) {
          var params = JSON.stringify(publication);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http.post(this.url + '/publication', params, {
            headers: headers
          });
        }
      }, {
        key: "getPublications",
        value: function getPublications(token) {
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http.get(this.url + '/publications/' + page, {
            headers: headers
          });
        }
      }, {
        key: "getPublicationsUser",
        value: function getPublicationsUser(token, user_id) {
          var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          console.log(user_id);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http.get(this.url + '/publications-user/' + user_id + '/' + page, {
            headers: headers
          });
        }
      }, {
        key: "deletePublication",
        value: function deletePublication(token, id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http["delete"](this.url + '/publication/' + id, {
            headers: headers
          });
        }
      }, {
        key: "like",
        value: function like(token, publication) {
          var params = JSON.stringify(publication);
          console.log(publication);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http.post(this.url + '/like/' + publication._id, params, {
            headers: headers
          });
        }
      }, {
        key: "dislike",
        value: function dislike(token, publication) {
          var params = JSON.stringify(publication);
          console.log(publication);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', token);
          return this._http.post(this.url + '/dislike/' + publication._id, params, {
            headers: headers
          });
        }
      }]);

      return PublicationService;
    }();

    PublicationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    PublicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], PublicationService);
    /***/
  },

  /***/
  "./src/app/services/upload.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/upload.service.ts ***!
    \********************************************/

  /*! exports provided: UploadService */

  /***/
  function srcAppServicesUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UploadService = /*#__PURE__*/function () {
      function UploadService() {
        _classCallCheck(this, UploadService);

        this.url = 'https://api-meet-sport.herokuapp.com/api';
      }

      _createClass(UploadService, [{
        key: "makeFileRequest",
        value: function makeFileRequest(url, params, files, token, name) {
          return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();

            for (var i = 0; i < files.length; i++) {
              formData.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.response));
                } else {
                  reject(xhr.response);
                }
              }
            };

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
          });
        }
      }]);

      return UploadService;
    }();

    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UploadService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(_http, alert, loading) {
        _classCallCheck(this, UserService);

        this._http = _http;
        this.alert = alert;
        this.loading = loading;
        this.url = 'https://api-meet-sport.herokuapp.com/api';
      }

      _createClass(UserService, [{
        key: "register",
        value: function register(user) {
          var payload = JSON.stringify(user);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-type', 'application/json');
          return this._http.post(this.url + '/register', payload, {
            headers: headers
          });
        }
      }, {
        key: "signup",
        value: function signup(user) {
          var gettoken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          if (gettoken != null) {
            user = Object.assign(user, {
              gettoken: gettoken
            });
          }

          var params = JSON.stringify(user);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this._http.post(this.url + '/login', params, {
            headers: headers
          });
        }
      }, {
        key: "getIdentity",
        value: function getIdentity() {
          var identity = JSON.parse(localStorage.getItem('identity'));

          if (identity != "undefined") {
            this.identity = identity;
          } else {
            this.identity = null;
          }

          return this.identity;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var token = localStorage.getItem('token');

          if (token != "undefined") {
            this.token = token;
          } else {
            this.token = null;
          }

          return this.token;
        }
      }, {
        key: "getStats",
        value: function getStats() {
          var stats = JSON.parse(localStorage.getItem('stats'));

          if (stats != 'undefined') {
            this.stats = stats;
          } else {
            this.stats = null;
          }

          return this.stats;
        }
      }, {
        key: "getCounters",
        value: function getCounters() {
          var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', this.getToken());

          if (userId != null) {
            return this._http.get(this.url + '/counters/' + userId, {
              headers: headers
            });
          } else {
            return this._http.get(this.url + '/counters', {
              headers: headers
            });
          }
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          var params = JSON.stringify(user);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', this.getToken());
          return this._http.put(this.url + '/update-user/' + user._id, params, {
            headers: headers
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', this.getToken());
          return this._http.get(this.url + '/users/' + page, {
            headers: headers
          });
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', this.getToken());
          return this._http.get(this.url + '/user/' + id, {
            headers: headers
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'https://api-meet-sport.herokuapp.com/api',
      apiGoogle: 'AIzaSyDrXC45qqoKHIKNr8Tir8z-88IOit5LbTo'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Christian\Documents\ProyectoFinal-DAW\meetSport\meetSportApp-v2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map