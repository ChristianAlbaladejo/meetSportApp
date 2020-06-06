function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"publications\">\n    <div id=\"container\" *ngFor=\"let publication of publications;let i = index\">\n      <ion-card>\n        <ion-item>\n          <ion-avatar slot=\"start\" (click)=openUser(publication.user)>\n            <img *ngIf=\"publication.user.image\" src=\"{{url + '/get-image-user/' + publication.user.image}}\">\n            <img *ngIf=\"!publication.user.image\" src=\"../../assets/no-user.webp\">\n          </ion-avatar>\n          <ion-label>\n            <h3>{{publication?.user.name +' '+ publication?.user.surname+ ' '}}|\n              &nbsp;{{'  ' +publication?.created_at | date}}</h3>\n            <h3>{{publication?.text}}</h3>\n            <h3>Date of exit: {{times[i]?.date | date}} &nbsp; {{ times[i]?.hour}}</h3>\n            <!-- <ion-button slot=\"end\" (click)=\"delete(publication._id)\">ASD</ion-button> -->\n          </ion-label>\n        </ion-item>\n        <ion-card-content (click)=\"openPublication(publication, times[i])\">\n          <div id=\"{{'map'+i}}\" style=\"max-width:500px; height:300px\"></div>\n        </ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n            </ion-col>\n            <ion-col>\n              <ion-button *ngIf=\"!checkIfExists(publication)\" (click)=like(publication)>Subscribe </ion-button>\n              <ion-button style=\"color:white\" color=\"warning\" *ngIf=\"checkIfExists(publication)\" (click)=dislike(publication)>Unsubscribe </ion-button>\n            </ion-col>\n            <ion-col>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-card>\n    </div>\n  \n  <div id=\"container-no-exits\" *ngIf=\"publications.length == 0\">\n    <strong>You have no publications</strong>\n    <p>You can create them or follow people to see them</p>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  </div>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" (click)=\"addPublication()\">\n    <ion-fab-button color=\"medium\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  max-width: 500px;\n  margin: auto;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container-no-exits {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container-no-exits strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container-no-exits p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXENocmlzdGlhblxcRG9jdW1lbnRzXFxQcm95ZWN0b0ZpbmFsLURBV1xcbWVldFNwb3J0XFxtZWV0U3BvcnRBcHAtdjIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDRCxZQUFBO0FDQ0Q7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtBQ0RGOztBREtBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gbWFyZ2luOiBhdXRvO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuI2NvbnRhaW5lci1uby1leGl0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyLW5vLWV4aXRzIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXItbm8tZXhpdHMgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNjb250YWluZXItbm8tZXhpdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXItbm8tZXhpdHMgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lci1uby1leGl0cyBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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
    /* harmony import */


    var _publication_publication_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../publication/publication.page */
    "./src/app/publication/publication.page.ts");
    /* harmony import */


    var _profile_profile_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../profile/profile.page */
    "./src/app/profile/profile.page.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(menuCtrl, modalController, _publicationService, _route, _router, _userService, alert, loading, navCtrl, _followService, _googleMaps) {
        _classCallCheck(this, HomePage);

        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
        this._publicationService = _publicationService;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.alert = alert;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this._followService = _followService;
        this._googleMaps = _googleMaps;
        this.page = 1;
        this.coords = [];
        this.markers = [];
        this.maps = [];
        this.times = [];
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = 'https://api-meet-sport.herokuapp.com/api';
        console.log(this.identity._id);
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPublications(this.page);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(true);
        }
      }, {
        key: "getPublications",
        value: function getPublications(page) {
          var adding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loading.create();

                  case 2:
                    loading = _context2.sent;
                    loading.present();

                    this._publicationService.getPublications(this.token, page).subscribe(function (response) {
                      if (response.publications) {
                        _this.coords = [];
                        _this.total = response.total_items;
                        _this.pages = response.pages;
                        _this.items_per_page = response.items_per_page;

                        if (!adding) {
                          _this.publications = response.publications;

                          for (var i = 0; i < _this.publications.length; i++) {
                            var cord = _this.publications[i].location.split(',');

                            var time = _this.publications[i].date.split(',');

                            var object2 = {
                              date: time[0],
                              hour: time[1].substr(12).slice(0, 5)
                            };
                            var object = {
                              lat: cord[0],
                              lng: cord[1],
                              zoom: 15
                            };

                            _this.coords.push(object);

                            _this.times.push(object2);
                          }

                          setTimeout(function () {
                            _this.initialize();

                            loading.dismiss();
                          }, 3000);
                        } else {
                          var arrayA = _this.publications;
                          var arrayB = response.publications;
                          _this.publications = arrayA.concat(arrayB);
                          console.log(_this.publications);

                          for (var _i = 0; _i < _this.publications.length; _i++) {
                            var _cord = _this.publications[_i].location.split(',');

                            var _time = _this.publications[_i].date.split(',');

                            var _object = {
                              lat: _cord[0],
                              lng: _cord[1],
                              zoom: 15
                            };
                            var _object2 = {
                              date: _time[0],
                              hour: _time[1]
                            };

                            _this.coords.push(_object);

                            _this.times.push(_object2);
                          }

                          setTimeout(function () {
                            _this.initialize();

                            loading.dismiss();
                          }, 3000);
                        }
                      } else {
                        //Mostrar el div que no tienes publications
                        loading.dismiss();
                      }
                    }, function (error) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.alert.create({
                                  message: 'Ohh! Something gone wrong. 😥',
                                  buttons: ['OK']
                                });

                              case 2:
                                alert = _context.sent;
                                loading.dismiss();
                                _context.next = 6;
                                return alert.present();

                              case 6:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(p) {
          var _this2 = this;

          this._publicationService.deletePublication(this.token, p).subscribe(function (response) {
            if (response.publications) {} else {}
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
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
        }
      }, {
        key: "addPublication",
        value: function addPublication() {
          this._router.navigate(['/add-publication']);
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
        value: function openPublication(publication, t) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: _publication_publication_page__WEBPACK_IMPORTED_MODULE_8__["PublicationPage"],
                      componentProps: {
                        'publication': publication,
                        'times': t
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function () {
                      _this3.page = 1;

                      _this3.getPublications(_this3.page);
                    });
                    _context4.next = 6;
                    return modal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openUser",
        value: function openUser(u) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_9__["ProfilePage"],
                      componentProps: {
                        'user': u
                      }
                    });

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return modal.present();

                  case 5:
                    return _context5.abrupt("return", _context5.sent);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "like",
        value: function like(publication) {
          var _this4 = this;

          this.identity = this._userService.getIdentity();

          this._publicationService.like(this.token, publication).subscribe(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert, i;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (response) {
                        _context6.next = 8;
                        break;
                      }

                      _context6.next = 3;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context6.sent;
                      _context6.next = 6;
                      return alert.present();

                    case 6:
                      _context6.next = 10;
                      break;

                    case 8:
                      for (i = 0; i < this.publications.length; i++) {
                        if (this.publications[i]._id == publication._id) {
                          this.publications[i].like.push(this.identity._id);
                          console.log(this.publications[i].like);
                        }
                      }

                      console.log(this.identity._id);

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          });
        }
      }, {
        key: "dislike",
        value: function dislike(publication) {
          var _this5 = this;

          this.identity = this._userService.getIdentity();

          this._publicationService.dislike(this.token, publication).subscribe(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var alert, i, indice;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (response) {
                        _context8.next = 8;
                        break;
                      }

                      _context8.next = 3;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context8.sent;
                      _context8.next = 6;
                      return alert.present();

                    case 6:
                      _context8.next = 9;
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
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alert.create({
                        message: 'Ohh! Something gone wrong. 😥',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context9.sent;
                      _context9.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
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

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"]
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

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"], _services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__["GoogleMaps"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map