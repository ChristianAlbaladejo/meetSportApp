function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" color=\"success\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>User</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button><ion-icon (click)=\"takePicture()\" name=\"camera-outline\"></ion-icon></ion-button> -->\n      <ion-button *ngIf=\"!editing\" (click)=\"edit()\">Edit</ion-button>\n      <ion-button *ngIf=\"editing\" (click)=\"save()\">Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div id=\"container\">\n    <ion-card>\n\n      <img *ngIf=\"user.image\" class=\"imageUser\" src=\"{{url + '/get-image-user/' + user.image}}\">\n      <img *ngIf=\"!user.image\" src=\"../../assets/no-user.webp\">\n      <p *ngIf=\"stats\">\n        <ion-chip outline color=\"secondary\">\n          <ion-label>Following &nbsp; {{stats.following}}</ion-label>\n        </ion-chip>\n        <ion-chip outline color=\"secondary\">\n          <ion-label>Followed &nbsp; {{stats.followed}}</ion-label>\n        </ion-chip>\n      </p>\n      <ion-item>\n        <input type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" [disabled]=\"!editing\"\n          (change)=\"fileChangeEvent($event)\" />\n        <label for=\"file\">\n          <ion-icon name=\"images\"></ion-icon> Chage user image\n        </label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Name: </ion-label>\n        <ion-input [(ngModel)]=\"identity.name\" name=\"name\" #name=\"ngModel\" [readonly]=\"!editing\" type=\"text\" required>\n        </ion-input>\n        <span *ngIf=\"!name.value && name.touched\">\n          Name is required\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Surname: </ion-label>\n        <ion-input [(ngModel)]=\"identity.surname\" name=\"surname\" #surname=\"ngModel\" [readonly]=\"!editing\" type=\"text\"\n          required>\n        </ion-input>\n        <span *ngIf=\"!surname.value && surname.touched\">\n          Surname is required\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Nick: </ion-label>\n        <ion-input [(ngModel)]=\"identity.nick\" name=\"nick\" #nick=\"ngModel\" [readonly]=\"!editing\" type=\"text\" required>\n        </ion-input>\n        <span *ngIf=\"!nick.value && nick.touched\">\n          Nick is required\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Email: </ion-label>\n        <ion-input [(ngModel)]=\"identity.email\" name=\"email\" #email=\"ngModel\" [readonly]=\"!editing\" type=\"text\"\n          required>\n        </ion-input>\n        <span *ngIf=\"!email.value && email.touched\">\n          Email is required\n        </span>\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserPageRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
      return UserPageRoutingModule;
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


    var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/user/user.page.ts");

    var routes = [{
      path: '',
      component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }];

    var UserPageRoutingModule = function UserPageRoutingModule() {
      _classCallCheck(this, UserPageRoutingModule);
    };

    UserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserPageModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
      return UserPageModule;
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


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/user/user.page.ts");

    var UserPageModule = function UserPageModule() {
      _classCallCheck(this, UserPageModule);
    };

    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]],
      declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })], UserPageModule);
    /***/
  },

  /***/
  "./src/app/user/user.page.scss":
  /*!*************************************!*\
    !*** ./src/app/user/user.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fileInput {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.fileInput label {\n  color: #717171;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0.5em 1em;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n\n.imageUser {\n  width: 100%;\n  height: 18rem;\n}\n\n#container {\n  max-width: 500px;\n  margin: auto;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9DOlxcVXNlcnNcXENocmlzdGlhblxcRG9jdW1lbnRzXFxQcm95ZWN0b0ZpbmFsLURBV1xcbWVldFNwb3J0XFxtZWV0U3BvcnRBcHAtdjIvc3JjXFxhcHBcXHVzZXJcXHVzZXIucGFnZS5zY3NzIiwic3JjL2FwcC91c2VyL3VzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDUjs7QURDSTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0VSOztBRENJO0VBQ0YsZ0JBQUE7RUFDRCxZQUFBO0FDRUQ7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuZmlsZUlucHV0IHtcbiAgICAgICAgd2lkdGg6IDAuMXB4O1xuICAgICAgICBoZWlnaHQ6IDAuMXB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICAuZmlsZUlucHV0ICAgbGFiZWwge1xuICAgICAgICBjb2xvcjogIzcxNzE3MTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5pbWFnZVVzZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE4cmVtOztcbiAgICB9XG5cbiAgICAjY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiBtYXJnaW46IGF1dG87XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iLCIuZmlsZUlucHV0IHtcbiAgd2lkdGg6IDAuMXB4O1xuICBoZWlnaHQ6IDAuMXB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZmlsZUlucHV0IGxhYmVsIHtcbiAgY29sb3I6ICM3MTcxNzE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZVVzZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxOHJlbTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/user.page.ts":
  /*!***********************************!*\
    !*** ./src/app/user/user.page.ts ***!
    \***********************************/

  /*! exports provided: UserPage */

  /***/
  function srcAppUserUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPage", function () {
      return UserPage;
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
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* import { Plugins, CameraResultType, CameraSource} from '@capacitor/core'
    import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'; */


    var UserPage = /*#__PURE__*/function () {
      function UserPage(camera, navCtrl, modal, _route, _router, _userService, alert, loading, _uploadService) {
        _classCallCheck(this, UserPage);

        this.camera = camera;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.alert = alert;
        this.loading = loading;
        this._uploadService = _uploadService;
        this.mode = 'login';
        this.user = this._userService.getIdentity();
        this.identity = this.user;
        this.token = this._userService.getToken();
        this.editing = false;
        this.url = 'https://api-meet-sport.herokuapp.com/api';
        this.stats = this._userService.getStats();
      }

      _createClass(UserPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "edit",
        value: function edit() {
          this.editing = true;
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this._userService.getUser(id).subscribe(function (response) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!response.user) {
                                  _context.next = 6;
                                  break;
                                }

                                console.log(response);
                                this.user = response.user;
                                console.log(this.user);
                                _context.next = 11;
                                break;

                              case 6:
                                _context.next = 8;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 8:
                                alert = _context.sent;
                                _context.next = 11;
                                return alert.present();

                              case 11:
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
                                return alert.present();

                              case 5:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this2 = this;

            var alert, loading;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(this.user.name == '' || this.user.surname == '' || this.user.nick == '' || this.user.email == '')) {
                      _context6.next = 9;
                      break;
                    }

                    _context6.next = 3;
                    return this.alert.create({
                      message: 'Ohh! Something gone wrong. 😥',
                      buttons: ['OK']
                    });

                  case 3:
                    alert = _context6.sent;
                    this.getUser(this.identity._id);
                    _context6.next = 7;
                    return alert.present();

                  case 7:
                    _context6.next = 15;
                    break;

                  case 9:
                    loading = this.loading.create({
                      message: 'Please wait...'
                    });
                    _context6.next = 12;
                    return loading;

                  case 12:
                    _context6.sent.present();

                    this._userService.updateUser(this.user).subscribe(function (response) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        var _this3 = this;

                        var _alert;

                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                if (response.user) {
                                  _context4.next = 8;
                                  break;
                                }

                                _context4.next = 3;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 3:
                                _alert = _context4.sent;
                                _context4.next = 6;
                                return _alert.present();

                              case 6:
                                _context4.next = 11;
                                break;

                              case 8:
                                localStorage.setItem('identify', JSON.stringify(this.user));
                                this.identity = this.user;

                                this._uploadService.makeFileRequest(this.url + '/upload-image-user/' + this.user._id, [], this.filesToUpload, this.token, 'image').then(function (result) {
                                  console.log(result);
                                  _this3.user.image = result.user.image;
                                  localStorage.setItem('identify', JSON.stringify(_this3.user));
                                });

                              case 11:
                                _context4.next = 13;
                                return loading;

                              case 13:
                                _context4.sent.dismiss();

                              case 14:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    }, function (error) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var errorMessage, _alert2;

                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                errorMessage = error;

                                if (!(errorMessage != null)) {
                                  _context5.next = 10;
                                  break;
                                }

                                _context5.next = 4;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 4:
                                _alert2 = _context5.sent;
                                _context5.next = 7;
                                return loading;

                              case 7:
                                _context5.sent.dismiss();

                                _context5.next = 10;
                                return _alert2.present();

                              case 10:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });

                    this.editing = false;

                  case 15:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "following",
        value: function following() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modal.create({
                      component: _follow_following_follow_following_page__WEBPACK_IMPORTED_MODULE_6__["FollowFollowingPage"],
                      componentProps: {
                        'user': this.user
                      }
                    });

                  case 2:
                    modal = _context7.sent;
                    _context7.next = 5;
                    return modal.present();

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(fileInput) {
          this.filesToUpload = fileInput.target.files;
          console.log(this.filesToUpload);
        }
      }, {
        key: "takePicture",
        value: function takePicture() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }
      }]);

      return UserPage;
    }();

    UserPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
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

    UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.page.scss */
      "./src/app/user/user.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]])], UserPage);
    /***/
  }
}]);
//# sourceMappingURL=user-user-module-es5.js.map