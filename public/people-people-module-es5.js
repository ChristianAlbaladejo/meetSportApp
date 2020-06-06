function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["people-people-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPeoplePeoplePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>People</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-list-header>\n      People\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let user of users\" >\n      <ion-avatar slot=\"start\">\n        <img (click)=\"loadUser(user)\" *ngIf=\"user.image\" src=\"{{url + '/get-image-user/'+ user.image}}\">\n        <img (click)=\"loadUser(user)\" *ngIf=\"!user.image\"  src=\"../../assets/no-user.webp\">\n      </ion-avatar>\n      <ion-label>\n        <h2 (click)=\"loadUser(user)\">{{user.name + ' ' + user.surname}}</h2>\n        <h3 (click)=\"loadUser(user)\">{{user.nick}}</h3>\n        <p (click)=\"loadUser(user)\">{{user.email}}</p>\n        <div class=\"followButton\" *ngIf=\"user._id != identity._id\">\n          <ion-button color=\"success\" (click)=\"followUser(user._id)\" *ngIf=\"follows.indexOf(user._id) < 0\">\n            <ion-icon name=\"add-circle-outline\"></ion-icon> &nbsp; Follow\n          </ion-button>\n          <ion-button ion-button [color]=\"user._id == followUserOver ? 'primary' : 'warning'\"\n            (mouseover)=\"mouseEnter(user._id)\" (mouseleave)=\"mouseLeave(user._id)\"\n            *ngIf=\"follows.indexOf(user._id) >= 0\" (click)=unfollowUser(user._id)>\n            <span *ngIf=\"user._id == followUserOver;else following\">\n              <ion-icon name=\"close-circle-outline\"></ion-icon> &nbsp; Unfollow\n            </span>\n            <ng-template #following>\n              <ion-icon name=\"checkmark-circle-outline\"></ion-icon> &nbsp; Following\n            </ng-template>\n          </ion-button>\n        </div>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/people/people-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/people/people-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: PeoplePageRoutingModule */

  /***/
  function srcAppPeoplePeopleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeoplePageRoutingModule", function () {
      return PeoplePageRoutingModule;
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


    var _people_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./people.page */
    "./src/app/people/people.page.ts");

    var routes = [{
      path: '',
      component: _people_page__WEBPACK_IMPORTED_MODULE_3__["PeoplePage"]
    }];

    var PeoplePageRoutingModule = function PeoplePageRoutingModule() {
      _classCallCheck(this, PeoplePageRoutingModule);
    };

    PeoplePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PeoplePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/people/people.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/people/people.module.ts ***!
    \*****************************************/

  /*! exports provided: PeoplePageModule */

  /***/
  function srcAppPeoplePeopleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeoplePageModule", function () {
      return PeoplePageModule;
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


    var _people_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./people-routing.module */
    "./src/app/people/people-routing.module.ts");
    /* harmony import */


    var _people_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./people.page */
    "./src/app/people/people.page.ts");

    var PeoplePageModule = function PeoplePageModule() {
      _classCallCheck(this, PeoplePageModule);
    };

    PeoplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _people_routing_module__WEBPACK_IMPORTED_MODULE_5__["PeoplePageRoutingModule"]],
      declarations: [_people_page__WEBPACK_IMPORTED_MODULE_6__["PeoplePage"]]
    })], PeoplePageModule);
    /***/
  },

  /***/
  "./src/app/people/people.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/people/people.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPeoplePeoplePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/people/people.page.ts":
  /*!***************************************!*\
    !*** ./src/app/people/people.page.ts ***!
    \***************************************/

  /*! exports provided: PeoplePage */

  /***/
  function srcAppPeoplePeoplePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeoplePage", function () {
      return PeoplePage;
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

    var PeoplePage = /*#__PURE__*/function () {
      function PeoplePage(modal, _route, _router, _userService, alert, loading, navCtrl, _followService) {
        _classCallCheck(this, PeoplePage);

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

      _createClass(PeoplePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
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

                    this._userService.getUsers(this.page).subscribe(function (response) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (response.users) {
                                  _context.next = 11;
                                  break;
                                }

                                _context.next = 3;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
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
                                _context.next = 20;
                                break;

                              case 11:
                                this.users = response.users;
                                this.total = response.total;
                                this.page = response.page;
                                this.follows = response.users_following;
                                console.log(response);

                                if (this.page > this.pages) {
                                  this._router.navigate(['/people']);
                                }

                                _context.next = 19;
                                return loading;

                              case 19:
                                _context.sent.dismiss();

                              case 20:
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
                                console.log(errorMessage);

                                if (!(errorMessage != null)) {
                                  _context2.next = 11;
                                  break;
                                }

                                _context2.next = 5;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 5:
                                alert = _context2.sent;
                                _context2.next = 8;
                                return loading;

                              case 8:
                                _context2.sent.dismiss();

                                _context2.next = 11;
                                return alert.present();

                              case 11:
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
          var _this2 = this;

          var follow = new _models_follow__WEBPACK_IMPORTED_MODULE_3__["Follow"]('', this.identity._id, followed);

          this._followService.addFollow(this.token, follow).subscribe(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (response.follow) {
                        _context4.next = 8;
                        break;
                      }

                      _context4.next = 3;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context4.sent;
                      _context4.next = 6;
                      return alert.present();

                    case 6:
                      _context4.next = 9;
                      break;

                    case 8:
                      this.follows.push(followed);

                    case 9:
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
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          });
        }
      }, {
        key: "unfollowUser",
        value: function unfollowUser(followed) {
          var _this3 = this;

          this._followService.deleteFollow(this.token, followed).subscribe(function (response) {
            var search = _this3.follows.indexOf(followed);

            if (search != -1) {
              _this3.follows.splice(search, 1);
            }
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          });
        }
      }, {
        key: "doInfinite",
        value: function doInfinite(infiniteScroll) {
          this.page++;
          this.getUsers().then(function (result) {
            return infiniteScroll.target.complete();
          });
        }
      }, {
        key: "loadUser",
        value: function loadUser(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modal.create({
                      component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"],
                      componentProps: {
                        'user': user
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
      }]);

      return PeoplePage;
    }();

    PeoplePage.ctorParameters = function () {
      return [{
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

    PeoplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-people',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./people.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.page.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./people.page.scss */
      "./src/app/people/people.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _services_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"]])], PeoplePage);
    /***/
  }
}]);
//# sourceMappingURL=people-people-module-es5.js.map