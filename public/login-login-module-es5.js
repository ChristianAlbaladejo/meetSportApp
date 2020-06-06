function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n    <ion-content class=\"login\" no-bounce>\n      <ion-card padding class=\"login-box\">\n         <img src=\"../../assets/logo.PNG\" alt=\"\" class=\"if-logo\">  \n        <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n          <ion-item>\n    \n            <ion-input [disabled]=\"isLocked\" clearInput=\"false\" [(ngModel)]=\"user.email\" #email=\"ngModel\"\n              placeholder=\"Email\" name=\"email\" type=\"email\" spellcheck=\"false\" autocapitalize=\"off\" class=\"code\"\n              required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"></ion-input>\n              <span *ngIf=\"!email.valid && email.touched\">The email is incorrect</span>\n          </ion-item>\n    \n          <ion-item>\n            <ion-input clearInput=\"false\" [(ngModel)]=\"user.password\" #password=\"ngModel\" placeholder=\"Password\" name=\"password\"\n              type=\"password\" spellcheck=\"false\" autocapitalize=\"off\" class=\"code\" required></ion-input>\n              <span *ngIf=\"!email.valid && email.touched\">Password is required</span>\n          </ion-item>\n    \n          <ion-button type=\"submit\" color=\"primary\" class=\"login-button\" block>\n            Login\n          </ion-button>\n\n          <ion-button routerLink=\"../register\" color=\"primary\" class=\"login-register\" block>\n            Register\n          </ion-button>\n        </form>\n      </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login {\n  background: url('logo.jpg') no-repeat !important;\n  background-size: cover !important;\n}\n\n.login-box {\n  max-width: 350px;\n  margin: 0 auto;\n  margin-top: 40px;\n}\n\n.logo {\n  margin: 0 auto;\n  height: 30px;\n}\n\n.if-logo {\n  height: 200px;\n  margin-left: 22%;\n}\n\n.RP-Icon {\n  width: 100%;\n  height: 66px;\n  margin: 0 auto;\n  margin-left: -2px;\n  bottom: 90px;\n  margin-top: 50px;\n}\n\n.login-button {\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-left: 5%;\n  margin-bottom: 20px;\n}\n\n.login-register {\n  width: 90%;\n  margin: 0 auto;\n  margin-left: 5%;\n  margin-bottom: 20px;\n}\n\n.code {\n  margin-top: 1vw;\n  border-bottom: 1px solid #ddd;\n  padding: 10px;\n  color: #888;\n}\n\n.app-version {\n  color: white;\n  font-size: 18px;\n  font-weight: 300;\n  text-align: center;\n  margin-top: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxDaHJpc3RpYW5cXERvY3VtZW50c1xcUHJveWVjdG9GaW5hbC1EQVdcXG1lZXRTcG9ydFxcbWVldFNwb3J0QXBwLXYyL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRyxnREFBQTtFQUNELGlDQUFBO0FDQUY7O0FER0M7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FGOztBRElDO0VBQ0MsY0FBQTtFQUdBLFlBQUE7QUNIRjs7QURPQztFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0pIOztBRE9DO0VBQ08sV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDTixZQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURTQztFQUNDLFVBQUE7RUFDQSxjQUFBO0VBQ00sZ0JBQUE7RUFDQSxlQUFBO0VBQ04sbUJBQUE7QUNORjs7QURTSTtFQUNGLFVBQUE7RUFDQSxjQUFBO0VBQ00sZUFBQTtFQUNOLG1CQUFBO0FDTkY7O0FEU0M7RUFDTyxlQUFBO0VBQ04sNkJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ05GOztBRFNDO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxvZ2luIHtcblx0XHQgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbG9nby5qcGcnKSBuby1yZXBlYXQgIWltcG9ydGFudDsgIFxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcblx0fVxuXG5cdC5sb2dpbi1ib3h7XG5cdFx0bWF4LXdpZHRoOjM1MHB4O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdG1hcmdpbi10b3A6NDBweDtcblx0fVxuXHRcblxuXHQubG9nbyB7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0Ly9tYXJnaW4tbGVmdDogOThweDtcblx0XHQvL3dpZHRoOjEwMCU7XG5cdFx0aGVpZ2h0OjMwcHg7XG5cdFx0XG5cdH1cblxuXHQuaWYtbG9nbyB7XG5cdFx0IGhlaWdodDogMjAwcHg7XG5cdFx0IG1hcmdpbi1sZWZ0OiAyMiU7XG5cdH1cblxuXHQuUlAtSWNvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTJweDtcblx0XHRib3R0b206IDkwcHg7XG5cdFx0bWFyZ2luLXRvcDo1MHB4O1xuICAgICAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXHR9XG5cblx0LmxvZ2luLWJ1dHRvbiB7XG5cdFx0d2lkdGg6OTAlO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcblx0XHRtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5sb2dpbi1yZWdpc3RlciB7XG5cdFx0d2lkdGg6OTAlO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG5cdFx0bWFyZ2luLWJvdHRvbToyMHB4O1xuXHR9XG5cdFxuXHQuY29kZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMXZ3O1xuXHRcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHRjb2xvcjogIzg4ODtcblx0fVxuXHRcblx0LmFwcC12ZXJzaW9uIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbi10b3A6IDkwcHg7XG5cdH1cblxuIiwiLmxvZ2luIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ28uanBnXCIpIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1ib3gge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uaWYtbG9nbyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG59XG5cbi5SUC1JY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjZweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICBib3R0b206IDkwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubG9naW4tcmVnaXN0ZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29kZSB7XG4gIG1hcmdpbi10b3A6IDF2dztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4uYXBwLXZlcnNpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA5MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(_router, _route_, _userService, alert, loading, navCtrl, menuCtrl) {
        _classCallCheck(this, LoginPage);

        this._router = _router;
        this._route_ = _route_;
        this._userService = _userService;
        this.alert = alert;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]("", "", "", "", "", "", "ROLE_USER", "");
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(false);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
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

                    this._userService.signup(this.user).subscribe(function (response) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.identity = response.user;

                                if (!(!this.identity || !this.identity._id)) {
                                  _context.next = 12;
                                  break;
                                }

                                _context.next = 4;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 4:
                                alert = _context.sent;
                                _context.next = 7;
                                return loading;

                              case 7:
                                _context.sent.dismiss();

                                _context.next = 10;
                                return alert.present();

                              case 10:
                                _context.next = 17;
                                break;

                              case 12:
                                localStorage.setItem('identity', JSON.stringify(this.identity));
                                this.getToken();
                                _context.next = 16;
                                return loading;

                              case 16:
                                _context.sent.dismiss();

                              case 17:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, function (error) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var errorMessage, alert;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                errorMessage = error;

                                if (!(errorMessage != null)) {
                                  _context2.next = 10;
                                  break;
                                }

                                _context2.next = 4;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 4:
                                alert = _context2.sent;
                                _context2.next = 7;
                                return loading;

                              case 7:
                                _context2.sent.dismiss();

                                _context2.next = 10;
                                return alert.present();

                              case 10:
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
        key: "getToken",
        value: function getToken() {
          var _this2 = this;

          this._userService.signup(this.user, 'true').subscribe(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.token = response.token;

                      if (!(this.token.length <= 0)) {
                        _context4.next = 9;
                        break;
                      }

                      _context4.next = 4;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context4.sent;
                      _context4.next = 7;
                      return alert.present();

                    case 7:
                      _context4.next = 13;
                      break;

                    case 9:
                      localStorage.setItem('token', this.token);
                      this.navCtrl.pop();
                      this.getCounters();
                      this.navCtrl.navigateRoot('/');

                    case 13:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var errorMessage, alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      errorMessage = error;

                      if (!(errorMessage != null)) {
                        _context5.next = 7;
                        break;
                      }

                      _context5.next = 4;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context5.sent;
                      _context5.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          });
        }
      }, {
        key: "getCounters",
        value: function getCounters() {
          this._userService.getCounters().subscribe(function (response) {
            localStorage.setItem('stats', JSON.stringify(response));
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map