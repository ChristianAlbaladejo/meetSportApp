(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["follow-following-follow-following-module"],{

/***/ "./src/app/follow-following/follow-following-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/follow-following/follow-following-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FollowFollowingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowFollowingPageRoutingModule", function() { return FollowFollowingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _follow_following_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./follow-following.page */ "./src/app/follow-following/follow-following.page.ts");




const routes = [
    {
        path: '',
        component: _follow_following_page__WEBPACK_IMPORTED_MODULE_3__["FollowFollowingPage"]
    }
];
let FollowFollowingPageRoutingModule = class FollowFollowingPageRoutingModule {
};
FollowFollowingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FollowFollowingPageRoutingModule);



/***/ }),

/***/ "./src/app/follow-following/follow-following.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/follow-following/follow-following.module.ts ***!
  \*************************************************************/
/*! exports provided: FollowFollowingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowFollowingPageModule", function() { return FollowFollowingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _follow_following_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./follow-following-routing.module */ "./src/app/follow-following/follow-following-routing.module.ts");
/* harmony import */ var _follow_following_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./follow-following.page */ "./src/app/follow-following/follow-following.page.ts");







let FollowFollowingPageModule = class FollowFollowingPageModule {
};
FollowFollowingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _follow_following_routing_module__WEBPACK_IMPORTED_MODULE_5__["FollowFollowingPageRoutingModule"]
        ],
        declarations: [_follow_following_page__WEBPACK_IMPORTED_MODULE_6__["FollowFollowingPage"]]
    })
], FollowFollowingPageModule);



/***/ })

}]);
//# sourceMappingURL=follow-following-follow-following-module-es2015.js.map