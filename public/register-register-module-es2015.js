(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"login\">\n  <ion-card padding class=\"login-box\">\n    <!--  <img src=\"../../assets/logo.jpg\" alt=\"\" class=\"if-logo\">  -->\n    <form #RegisterForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\" novalidate>\n      <ion-item>\n        <ion-input [disabled]=\"isLocked\" clearInput=\"false\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"user.name\" #username=\"ngModel\"\n          placeholder=\"Name\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" class=\"code\"\n          required></ion-input>\n          <span *ngIf=\"!name.valid && name.touched\">\n            Name is required\n          </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-input clearInput=\"false\" [(ngModel)]=\"user.surname\" name=\"surname\" #surname=\"ngModel\" placeholder=\"Surname\" \n          type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" class=\"code\" required></ion-input>\n          <span *ngIf=\"!surname.valid && surname.touched\">\n            Surname is required\n          </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-input clearInput=\"false\" [(ngModel)]=\"user.nick\" name=\"nick\" #nick=\"ngModel\" placeholder=\"Nick\" \n          type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" class=\"code\" required></ion-input>\n        <span *ngIf=\"!nick.valid && nick.touched\">\n          Nick is required\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-input clearInput=\"false\" [(ngModel)]=\"user.email\" name=\"email\"  pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" #email=\"ngModel\" placeholder=\"Email\" type=\"email\"\n          spellcheck=\"false\" autocapitalize=\"off\" class=\"code\" required></ion-input>\n        <span *ngIf=\"!email.valid && email.touched\">\n          Email is required\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-input clearInput=\"false\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" placeholder=\"Password\" type=\"password\"\n          spellcheck=\"false\" autocapitalize=\"off\" class=\"code\" required></ion-input>\n        <span *ngIf=\"!password.valid && password.touched\">\n          Password is required\n        </span>\n      </ion-item>\n\n      <ion-button type=\"submit\" [disabled]=\"!RegisterForm.form.valid\" color=\"primary\" class=\"login-register\" block>\n        Register\n      </ion-button>\n      <ion-button routerLink=\"../login\" color=\"primary\" class=\"login-register\" block>\n        Login\n      </ion-button>\n    </form>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background: url('logo.jpg') no-repeat !important;\n  background-size: cover !important;\n}\n\n.login-box {\n  max-width: 350px;\n  margin: 0 auto;\n  margin-top: 40px;\n}\n\n.logo {\n  margin: 0 auto;\n  height: 30px;\n}\n\n.if-logo {\n  height: 200px;\n}\n\n.RP-Icon {\n  width: 100%;\n  height: 66px;\n  margin: 0 auto;\n  margin-left: -2px;\n  bottom: 90px;\n  margin-top: 50px;\n}\n\n.login-button {\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-left: 5%;\n  margin-bottom: 20px;\n}\n\n.login-register {\n  width: 90%;\n  margin: 0 auto;\n  margin-left: 5%;\n  margin-bottom: 20px;\n}\n\n.code {\n  margin-top: 1vw;\n  border-bottom: 1px solid #ddd;\n  padding: 10px;\n  color: #888;\n}\n\n.app-version {\n  color: white;\n  font-size: 18px;\n  font-weight: 300;\n  text-align: center;\n  margin-top: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxDaHJpc3RpYW5cXERvY3VtZW50c1xcUHJveWVjdG9GaW5hbC1EQVdcXG1lZXRTcG9ydFxcbWVldFNwb3J0QXBwLXYyL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxnREFBQTtFQUNELGlDQUFBO0FDQ0Y7O0FERUM7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREdDO0VBQ0MsY0FBQTtFQUdBLFlBQUE7QUNGRjs7QURNQztFQUNFLGFBQUE7QUNISDs7QURNQztFQUNPLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ04sWUFBQTtFQUNBLGdCQUFBO0FDSEY7O0FEUUM7RUFDQyxVQUFBO0VBQ0EsY0FBQTtFQUNNLGdCQUFBO0VBQ0EsZUFBQTtFQUNOLG1CQUFBO0FDTEY7O0FEUUk7RUFDRixVQUFBO0VBQ0EsY0FBQTtFQUNNLGVBQUE7RUFDTixtQkFBQTtBQ0xGOztBRFFDO0VBQ08sZUFBQTtFQUNOLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNMRjs7QURRQztFQUNDLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xyXG5cdFx0IGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ28uanBnJykgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7ICBcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5sb2dpbi1ib3h7XHJcblx0XHRtYXgtd2lkdGg6MzUwcHg7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdG1hcmdpbi10b3A6NDBweDtcclxuXHR9XHJcblx0XHJcblxyXG5cdC5sb2dvIHtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0Ly9tYXJnaW4tbGVmdDogOThweDtcclxuXHRcdC8vd2lkdGg6MTAwJTtcclxuXHRcdGhlaWdodDozMHB4O1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHQuaWYtbG9nbyB7XHJcblx0XHQgaGVpZ2h0OiAyMDBweDsgXHJcblx0fVxyXG5cclxuXHQuUlAtSWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG5cdFx0Ym90dG9tOiA5MHB4O1xyXG5cdFx0bWFyZ2luLXRvcDo1MHB4O1xyXG4gICAgICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuXHR9XHJcblxyXG5cdC5sb2dpbi1idXR0b24ge1xyXG5cdFx0d2lkdGg6OTAlO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHRcdG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luLXJlZ2lzdGVyIHtcclxuXHRcdHdpZHRoOjkwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHRcdG1hcmdpbi1ib3R0b206MjBweDtcclxuXHR9XHJcblx0XHJcblx0LmNvZGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXZ3O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRjb2xvcjogIzg4ODtcclxuXHR9XHJcblx0XHJcblx0LmFwcC12ZXJzaW9uIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiA5MHB4O1xyXG5cdH0iLCIubG9naW4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvbG9nby5qcGdcIikgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLWJveCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5pZi1sb2dvIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLlJQLUljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gIGJvdHRvbTogOTBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmxvZ2luLWJ1dHRvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sb2dpbi1yZWdpc3RlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb2RlIHtcbiAgbWFyZ2luLXRvcDogMXZ3O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi5hcHAtdmVyc2lvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let RegisterPage = class RegisterPage {
    constructor(_router, _route_, _userService, alert, loading) {
        this._router = _router;
        this._route_ = _route_;
        this._userService = _userService;
        this.alert = alert;
        this.loading = loading;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]("", "", "", "", "", "", "ROLE_USER", "");
    }
    ngOnInit() {
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = this.loading.create({
                message: 'Please wait...'
            });
            (yield loading).present();
            this._userService.register(this.user).subscribe((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (response.user && response.user._id) {
                    const alert = yield this.alert.create({
                        header: 'Success',
                        message: 'You have already registered! 🤪',
                        buttons: ['OK']
                    });
                    (yield loading).dismiss();
                    yield alert.present();
                }
                else {
                    const alert = yield this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                    });
                    (yield loading).dismiss();
                    yield alert.present();
                }
            }), error => {
                console.log(error);
            });
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map