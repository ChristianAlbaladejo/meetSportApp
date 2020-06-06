function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["received-received-module"], {
  /***/
  "./src/app/received/received-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/received/received-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ReceivedPageRoutingModule */

  /***/
  function srcAppReceivedReceivedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReceivedPageRoutingModule", function () {
      return ReceivedPageRoutingModule;
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


    var _received_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./received.page */
    "./src/app/received/received.page.ts");

    var routes = [{
      path: '',
      component: _received_page__WEBPACK_IMPORTED_MODULE_3__["ReceivedPage"]
    }];

    var ReceivedPageRoutingModule = function ReceivedPageRoutingModule() {
      _classCallCheck(this, ReceivedPageRoutingModule);
    };

    ReceivedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReceivedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/received/received.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/received/received.module.ts ***!
    \*********************************************/

  /*! exports provided: ReceivedPageModule */

  /***/
  function srcAppReceivedReceivedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReceivedPageModule", function () {
      return ReceivedPageModule;
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


    var _received_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./received-routing.module */
    "./src/app/received/received-routing.module.ts");
    /* harmony import */


    var _received_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./received.page */
    "./src/app/received/received.page.ts");

    var ReceivedPageModule = function ReceivedPageModule() {
      _classCallCheck(this, ReceivedPageModule);
    };

    ReceivedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _received_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReceivedPageRoutingModule"]],
      declarations: [_received_page__WEBPACK_IMPORTED_MODULE_6__["ReceivedPage"]]
    })], ReceivedPageModule);
    /***/
  }
}]);
//# sourceMappingURL=received-received-module-es5.js.map