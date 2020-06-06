(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["other-user-other-user-module"],{

/***/ "./src/app/other-user/other-user-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/other-user/other-user-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OtherUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherUserPageRoutingModule", function() { return OtherUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _other_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other-user.page */ "./src/app/other-user/other-user.page.ts");




const routes = [
    {
        path: '',
        component: _other_user_page__WEBPACK_IMPORTED_MODULE_3__["OtherUserPage"]
    }
];
let OtherUserPageRoutingModule = class OtherUserPageRoutingModule {
};
OtherUserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OtherUserPageRoutingModule);



/***/ }),

/***/ "./src/app/other-user/other-user.module.ts":
/*!*************************************************!*\
  !*** ./src/app/other-user/other-user.module.ts ***!
  \*************************************************/
/*! exports provided: OtherUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherUserPageModule", function() { return OtherUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _other_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./other-user-routing.module */ "./src/app/other-user/other-user-routing.module.ts");
/* harmony import */ var _other_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-user.page */ "./src/app/other-user/other-user.page.ts");







let OtherUserPageModule = class OtherUserPageModule {
};
OtherUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _other_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtherUserPageRoutingModule"]
        ],
        declarations: [_other_user_page__WEBPACK_IMPORTED_MODULE_6__["OtherUserPage"]]
    })
], OtherUserPageModule);



/***/ })

}]);
//# sourceMappingURL=other-user-other-user-module-es2015.js.map