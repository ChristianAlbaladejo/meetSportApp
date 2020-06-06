function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sended-sended-module"], {
  /***/
  "./src/app/sended/sended-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/sended/sended-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SendedPageRoutingModule */

  /***/
  function srcAppSendedSendedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendedPageRoutingModule", function () {
      return SendedPageRoutingModule;
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


    var _sended_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sended.page */
    "./src/app/sended/sended.page.ts");

    var routes = [{
      path: '',
      component: _sended_page__WEBPACK_IMPORTED_MODULE_3__["SendedPage"]
    }];

    var SendedPageRoutingModule = function SendedPageRoutingModule() {
      _classCallCheck(this, SendedPageRoutingModule);
    };

    SendedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SendedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sended/sended.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/sended/sended.module.ts ***!
    \*****************************************/

  /*! exports provided: SendedPageModule */

  /***/
  function srcAppSendedSendedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendedPageModule", function () {
      return SendedPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _sended_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sended-routing.module */
    "./src/app/sended/sended-routing.module.ts");
    /* harmony import */


    var _sended_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sended.page */
    "./src/app/sended/sended.page.ts");

    var SendedPageModule = function SendedPageModule() {
      _classCallCheck(this, SendedPageModule);
    };

    SendedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sended_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendedPageRoutingModule"]],
      declarations: [_sended_page__WEBPACK_IMPORTED_MODULE_6__["SendedPage"]]
    })], SendedPageModule);
    /***/
  }
}]);
//# sourceMappingURL=sended-sended-module-es5.js.map