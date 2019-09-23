(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/landing/landing.page.ts");
/* harmony import */ var _auth_login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/login/login.page */ "./src/app/pages/auth/login/login.page.ts");
/* harmony import */ var _auth_register_register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/register/register.page */ "./src/app/pages/auth/register/register.page.ts");









var routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]
    }
];
var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"], _auth_login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _auth_register_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]],
            entryComponents: [_auth_login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _auth_register_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/landing/landing.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-title>landing</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <ion-img src=\"/assets/shapes.svg\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Welcome to Blueprint</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>This is prototype mobile app for blueprint3d.</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"primary\" expand=\"full\" color=\"primary\" (click)=\"login()\">Login</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"primary\" expand=\"full\" color=\"danger\" (click)=\"register()\">Register</ion-button>\n        </ion-col>\n      </ion-row>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/landing/landing.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/landing/landing.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/register/register.page */ "./src/app/pages/auth/register/register.page.ts");
/* harmony import */ var _auth_login_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/login/login.page */ "./src/app/pages/auth/login/login.page.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






var LandingPage = /** @class */ (function () {
    function LandingPage(modalController, menu, authService, navCtrl, platform) {
        this.modalController = modalController;
        this.menu = menu;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.menu.enable(false);
    }
    LandingPage.prototype.ionViewWillEnter = function () {
        //this.authService.getToken(); => {
        if (this.authService.getToken() && this.authService.isLoggedIn) {
            this.navCtrl.navigateRoot('/dashboard');
        }
        //};
    };
    LandingPage.prototype.ngOnInit = function () {
    };
    LandingPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registerModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _auth_register_register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
                        })];
                    case 1:
                        registerModal = _a.sent();
                        return [4 /*yield*/, registerModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LandingPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loginModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _auth_login_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"],
                        })];
                    case 1:
                        loginModal = _a.sent();
                        return [4 /*yield*/, loginModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.page.html */ "./src/app/pages/landing/landing.page.html"),
            styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/pages/landing/landing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], LandingPage);
    return LandingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module.js.map