(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"dark\" id=\"items_tab\">\n      <ion-icon name=\"settings\"></ion-icon>\n    </ion-fab-button>\n    <!-- <ion-fab-list side=\"start\">\n          <ion-fab-button color=\"light\" id=\"items_tab\">\n            <ion-icon name=\"cog\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button color=\"light\" id=\"items_tab\">\n            <ion-icon name=\"color-wand\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button color=\"light\" id=\"items_tab\">\n            <ion-icon name=\"images\"></ion-icon>\n          </ion-fab-button>\n    </ion-fab-list> -->\n  </ion-fab>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" style=\"margin-top:70px;\">\n    <ion-fab-button color=\"light\" id=\"zoom-in\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" style=\"margin-top:140px;\">\n    <ion-fab-button color=\"light\" id=\"zoom-out\">\n      <ion-icon name=\"remove\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div class=\"main\">\n\n    <!-- 3D Viewer -->\n    <div id=\"viewer\">\n\n      <div id=\"main-controls\">\n        <!-- <a href=\"#\" class=\"btn btn-default btn-sm\" id=\"new\">\n          New Plan\n        </a>\n        <a href=\"#\" class=\"btn btn-default btn-sm\" id=\"saveFile\">\n          Save Plan\n        </a>\n        <a class=\"btn btn-sm btn-default btn-file\">\n         <input type=\"file\" class=\"hidden-input\" id=\"loadFile\">\n         Load Plan\n        </a> -->\n      </div>\n\n      <div id=\"camera-controls\">\n        <!-- <a href=\"#\" class=\"btn btn-default bottom\" id=\"zoom-out\">\n          <span class=\"glyphicon glyphicon-zoom-out\"></span>\n        </a>\n        <a href=\"#\" class=\"btn btn-default bottom\" id=\"reset-view\">\n          <span class=\"glyphicon glyphicon glyphicon-home\"></span>\n        </a>\n        <a href=\"#\" class=\"btn btn-default bottom\" id=\"zoom-in\">\n          <span class=\"glyphicon glyphicon-zoom-in\"></span>\n        </a>\n\n        <span>&nbsp;</span>\n\n        <a class=\"btn btn-default bottom\" href=\"#\" id=\"move-left\" >\n          <span class=\"glyphicon glyphicon-arrow-left\"></span>\n        </a>\n        <span class=\"btn-group-vertical\">\n          <a class=\"btn btn-default\" href=\"#\" id=\"move-up\">\n            <span class=\"glyphicon glyphicon-arrow-up\"></span>\n          </a>\n          <a class=\"btn btn-default\" href=\"#\" id=\"move-down\">\n            <span class=\"glyphicon glyphicon-arrow-down\"></span>\n          </a>\n        </span>\n        <a class=\"btn btn-default bottom\" href=\"#\" id=\"move-right\" >\n          <span class=\"glyphicon glyphicon-arrow-right\"></span>\n        </a> -->\n      </div>\n\n      <div id=\"loading-modal\">\n        <h1>Loading...</h1>\n      </div>\n    </div>\n\n    <!-- 2D Floorplanner -->\n    <div id=\"floorplanner\">\n      <canvas id=\"floorplanner-canvas\"></canvas>\n      <div id=\"floorplanner-controls\">\n\n        <button id=\"move\" class=\"btn btn-sm btn-default\">\n          <span class=\"glyphicon glyphicon-move\"></span>\n          Move Walls\n        </button>\n        <button id=\"draw\" class=\"btn btn-sm btn-default\">\n          <span class=\"glyphicon glyphicon-pencil\"></span>\n          Draw Walls\n        </button>\n        <button id=\"delete\" class=\"btn btn-sm btn-default\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n          Delete Walls\n        </button>\n        <span class=\"pull-right\">\n          <button class=\"btn btn-primary btn-sm\" id=\"update-floorplan\">Done &raquo;</button>\n        </span>\n\n      </div>\n      <div id=\"draw-walls-hint\">\n        Press the \"Esc\" key to stop drawing walls\n      </div>\n    </div>\n\n    <!-- Add Items -->\n    <div id=\"add-items\">\n      <div class=\"row\" id=\"items-wrapper\">\n\n        <!-- Items added here by items.js -->\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var DashboardPage = /** @class */ (function () {
    function DashboardPage(menu, authService, loadingController) {
        this.menu = menu;
        this.authService = authService;
        this.loadingController = loadingController;
        this.menu.enable(true);
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.prototype.minusCameraDistance = function () {
        console.log("minusCameraDistance()");
    };
    DashboardPage.prototype.plusCameraDistance = function () {
        console.log("plusCameraDistance()");
    };
    DashboardPage.prototype.ionViewWillEnter = function () {
        // this.authService.user().subscribe(
        //   user => {
        //     this.user = user;
        //   }
        // );
        this.presentLoading();
        var self = this;
        setTimeout(function () {
            self.loadScript();
        }, 3000);
    };
    DashboardPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading...',
                            duration: 3000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardPage.prototype.loadScript = function () {
        var isFound = false;
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; ++i) {
            if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
                isFound = true;
            }
        }
        if (!isFound) {
            console.log(isFound);
            var dynamicScripts = ["assets/blueprint3d/js/three.min.js"];
            for (var i = 0; i < dynamicScripts.length; i++) {
                var node = document.createElement('script');
                node.src = dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }
            dynamicScripts = ["assets/blueprint3d/js/blueprint3d.js"];
            for (var i = 0; i < dynamicScripts.length; i++) {
                var node = document.createElement('script');
                node.src = dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }
            dynamicScripts = ["assets/blueprint3d/js/jquery.js"];
            for (var i = 0; i < dynamicScripts.length; i++) {
                var node = document.createElement('script');
                node.src = dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }
            dynamicScripts = ["assets/blueprint3d/js/bootstrap.js"];
            for (var i = 0; i < dynamicScripts.length; i++) {
                var node = document.createElement('script');
                node.src = dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }
            dynamicScripts = ["assets/blueprint3d/js/items.js"];
            for (var i = 0; i < dynamicScripts.length; i++) {
                var node = document.createElement('script');
                node.src = dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }
            dynamicScripts = ["assets/blueprint3d/js/example.js"];
            for (var i = 0; i < dynamicScripts.length; i++) {
                var node = document.createElement('script');
                node.src = dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
    };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/pages/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map