webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page3Page = (function () {
    function Page3Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page3',template:/*ion-inline-start:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/page3/page3.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      นโยบาย\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3"></ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/page3/page3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], Page3Page);
    return Page3Page;
}());

//# sourceMappingURL=page3.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-order/create-order.module": [
		158
	],
	"../pages/step3/step3.module": [
		165
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderPageModule", function() { return CreateOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_order__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_qr_scanner__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_order_scan_result_create_order_scan_result__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_order_add_material_create_order_add_material__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CreateOrderPageModule = (function () {
    function CreateOrderPageModule() {
    }
    CreateOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_order__["a" /* CreateOrderPage */],
                __WEBPACK_IMPORTED_MODULE_4__create_order_scan_result_create_order_scan_result__["a" /* CreateOrderScanResultPage */],
                __WEBPACK_IMPORTED_MODULE_5__create_order_add_material_create_order_add_material__["a" /* CreateOrderAddMaterialPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_order__["a" /* CreateOrderPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_qr_scanner__["a" /* QRScanner */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__create_order_scan_result_create_order_scan_result__["a" /* CreateOrderScanResultPage */],
                __WEBPACK_IMPORTED_MODULE_5__create_order_add_material_create_order_add_material__["a" /* CreateOrderAddMaterialPage */]
            ]
        })
    ], CreateOrderPageModule);
    return CreateOrderPageModule;
}());

//# sourceMappingURL=create-order.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderScanResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_order_add_material_create_order_add_material__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateOrderScanResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateOrderScanResultPage = (function () {
    function CreateOrderScanResultPage(navCtrl, navParams, restProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.querySataus = true;
        this.isData = false;
        this.statusIcon = "ios-checkmark-circle-outline";
        this.querySataus = true;
        this.scannerId = this.navParams.get('id');
        console.log(this.scannerId);
        // this.resultData = { 
        //   "name":"john doh",
        //   "userType":"ผู้ขาย",
        //   "address":"bangkok"
        // }
    }
    CreateOrderScanResultPage.prototype.ionViewWillLeave = function () {
    };
    CreateOrderScanResultPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 30000,
            dismissOnPageChange: false
        });
        this.loader.present();
        this.isData = false;
        var obj = {
            "serviceName": "users",
            "getvalue": this.scannerId
        };
        this.restProvider.getService(obj).then(function (data) {
            _this.isData = true;
            _this.currentData = data;
            _this.loader.dismiss();
            _this.resultData = {
                "name": data['data']["FIRSTNAME"] + " " + data['data']["LASTNAME"],
                "userType": data['data']["USER_TYPE"],
                "address": "bangkok"
            };
        });
    };
    CreateOrderScanResultPage.prototype.nextPage = function () {
        console.log("nextpage");
        console.log(this.currentData);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_order_add_material_create_order_add_material__["a" /* CreateOrderAddMaterialPage */], {
            data: this.currentData
        });
    };
    CreateOrderScanResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-order-scan-result',template:/*ion-inline-start:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/create-order-scan-result/create-order-scan-result.html"*/'<!--\n  Generated template for the CreateOrderScanResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ผลแสกน</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="isData" class="card-container">\n    <ion-card-content style="text-align: center;">\n      <ion-grid *ngIf="querySataus">\n        <ion-row>\n          <ion-col col-12>\n            <ion-icon class="status-icon correct" name="ios-checkmark-circle-outline"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <p class="result-text correct">แสกนสำเร็จ</p>\n          </ion-col>\n        </ion-row>\n\n\n\n        <ion-row style="padding:0">\n          <ion-col col-12>\n            <p class="name-text">{{resultData.name}}</p>\n            <p class="userType-text">{{resultData.userType}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n            <p class="address-text">{{resultData.address}}</p>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row justify-content-center>\n            <!-- <ion-col col-6>\n                <button ion-button block color="light">ยกเลิกการทำรายการ</button>\n            </ion-col> -->\n            <ion-col col-6>\n                <button ion-button block on-click="nextPage()">สร้างรายการจัดซื้อ</button>\n            </ion-col>\n          </ion-row> \n\n      </ion-grid>\n\n\n\n\n      <ion-grid *ngIf="!querySataus">\n        <ion-row>\n          <ion-col col-12>\n            <ion-icon class="status-icon wrong" name="ios-close-circle-outline"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <p class="add-new-text">\n              ไม่พบรายการ\n            </p>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/create-order-scan-result/create-order-scan-result.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object])
    ], CreateOrderScanResultPage);
    return CreateOrderScanResultPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=create-order-scan-result.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderAddMaterialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreateOrderAddMaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateOrderAddMaterialPage = (function () {
    function CreateOrderAddMaterialPage(navCtrl, navParams, restProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.isGetData = false;
    }
    CreateOrderAddMaterialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateOrderAddMaterialPage');
        this.getProducType();
    };
    CreateOrderAddMaterialPage.prototype.getProducType = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 30000,
            dismissOnPageChange: false
        });
        this.loader.present();
        this.restProvider.getTypeProduct().then(function (data) {
            console.log(data);
            _this.producTypeObj = data["data"];
            _this.loader.dismiss();
        });
    };
    CreateOrderAddMaterialPage.prototype.onProductTypeChange = function (selectedValue) {
        console.log("productSel", this.productSel);
        console.log('Selected', selectedValue);
        this.getSizeProductFn(selectedValue);
        this.isGetData = false;
    };
    CreateOrderAddMaterialPage.prototype.onProductSizeChange = function (selectedValue) {
        console.log('productSizeSel', selectedValue);
        //this.getSizeProduct(selectedValue);
    };
    CreateOrderAddMaterialPage.prototype.getSizeProductFn = function (productId) {
        // this.loader.present();
        var _this = this;
        this.restProvider.getSizeProduct(productId).then(function (data) {
            console.log(data);
            _this.producSizeObj = data["data"];
            _this.isGetData = data['status'];
            // this.loader.dismiss();
        });
    };
    CreateOrderAddMaterialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-order-add-material',template:/*ion-inline-start:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/create-order-add-material/create-order-add-material.html"*/'<!--\n  Generated template for the CreateOrderAddMaterialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>สร้างรายการจัดซื้อ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        \n        <ion-card>\n\n          <ion-card-header>\n            สร้างรายการ\n          </ion-card-header>\n        \n          <ion-card-content class="add-material-style">\n          <ion-list>\n            <ion-item>\n              <ion-label>ชนิดยาเส้น</ion-label>\n              <ion-select [(ngModel)]="productSel" (ionChange)="onProductTypeChange($event)" placeholder="เลือกชนิดยาเส้น">\n                <ion-option *ngFor="let item of producTypeObj" [value]="item.PRODUCT_TYPE_ID">{{item.PRODUCT_TYPE_NAME}}</ion-option>\n              </ion-select>\n            </ion-item>\n\n            \n            <ion-item>\n                <ion-label>เบอร์ยาเส้น</ion-label>\n                <ion-select [disabled]="!isGetData" (ionChange)="onProductSizeChange($event)" [(ngModel)]="productSizeSel" placeholder="เลือกเบอร์ยาเส้น">\n                  <ion-option *ngFor="let item of producSizeObj" [value]="item.PRODUCT_SIZE_ID">{{item.PRODUCT_SIZE_NAME}}</ion-option>\n                </ion-select>\n             \n              </ion-item>\n\n              <ion-item >\n                  <ion-label>จำนวนถุง</ion-label>\n                  <ion-input class="input-text-alight-right" type="number" placeholder="0" value="0"></ion-input>\n                </ion-item>\n\n                <ion-item >\n                  <ion-label>น้ำหนัก/กิโลกรัม</ion-label>\n                  <ion-input class="input-text-alight-right" type="text" [disabled]="true" placeholder="0" value="0">0</ion-input>\n                </ion-item>\n                <ion-item >\n                  <ion-label>ราคา/ถุง</ion-label>\n                  <ion-input class="input-text-alight-right" type="text" [disabled]="true" value="0">0</ion-input>\n                </ion-item>\n\n          \n          </ion-list>\n          </ion-card-content>\n        \n        </ion-card>\n\n      </ion-col>\n      <ion-col col-6>\n        \n        <ion-card>\n\n          <ion-card-header>\n            รายการซื้อ\n          </ion-card-header>\n        \n          <ion-card-content>\n            <!-- Add card content here! -->\n          </ion-card-content>\n        \n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n   \n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/create-order-add-material/create-order-add-material.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], CreateOrderAddMaterialPage);
    return CreateOrderAddMaterialPage;
}());

//# sourceMappingURL=create-order-add-material.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3PageModule", function() { return Step3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step3__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Step3PageModule = (function () {
    function Step3PageModule() {
    }
    Step3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__step3__["a" /* Step3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step3__["a" /* Step3Page */]),
            ],
        })
    ], Step3PageModule);
    return Step3PageModule;
}());

//# sourceMappingURL=step3.module.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page3_page3__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportPage = (function () {
    function ReportPage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        //    this.menuCtrl.open();
        this.menuCtrl.enable(true);
    }
    ReportPage.prototype.ssss = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page3_page3__["a" /* Page3Page */]);
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/report/report.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      report\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <div>ssdfsdsf</div>\n  <div>\n  <ion-list id="report-list4">\n    <ion-item id="report-list-item-container3">\n      <div id="report-markdown8" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          we\n        </p>\n      </div>\n    </ion-item>\n    <ion-list id="report-list5">\n      <ion-item color="none" on-click="ssss()" id="report-list-item16">\n        Item 1\n      </ion-item>\n      <ion-item color="none" id="report-list-item17">\n        Item 2\n      </ion-item>\n      <ion-item color="none" id="report-list-item18">\n        Item 3\n      </ion-item>\n    </ion-list>\n  </ion-list>\n</div>\n</ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/report/report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      List\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2"></ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5"></ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_order_create_order__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ReportPage } from '../report/report';

// import { AuthenticaitonProvider } from '../../providers/authenticaiton/authenticaiton';

var LoginPage = (function () {
    function LoginPage(navCtrl, formBuilder, menuCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        // this.username = this.authForm.controls['username'];     
        // this.password = this.authForm.controls['password'];    
        this.menuCtrl.enable(false);
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1)])]
        });
    }
    LoginPage.prototype.onSubmit = function (value) {
        if (this.authForm.valid) {
            console.log("submit");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__create_order_create_order__["a" /* CreateOrderPage */]);
            //  window.localStorage.setItem('password', value.password);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/login/login.html"*/'\n\n\n<ion-content padding style=" padding-left: 100px !important;" id="page4" class="main-bg-color">\n \n <div class="login-container"> \n  <h1 id="login-heading1" class="font-base" >\n    ระบบบริหารจัดการรับซื้อสินค้าเกษตร\n  </h1>\n  <form  [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n    <ion-item  style="background-color: transparent;" id="login-input3" [ngClass]="{\'error-border\':!authForm.controls.username.valid && authForm.controls.username.touched}">\n      <!-- <ion-label  floating>Enter your Username</ion-label> -->\n      <ion-input class="input-clear-style" type="text"  formControlName="username" placeholder="Enter your Username"></ion-input>\n    </ion-item>\n    <ion-item style="background-color: transparent;" [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n     <!-- <ion-label floating>Password</ion-label> -->\n      <ion-input type="password"  class="input-clear-style" formControlName="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <div style="margin-top:20px;">\n      <button class="submit-login"   ion-button round outline color="light"   [disabled]="!authForm.valid"  type="submit">log in</button>  \n    </div>\n  </form>\n\n  <div id="login-markdown1" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#FFFFFF;">\n      Forgot Password?\n    </p>\n  </div>\n </div>\n</ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_report_report__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_page3_page3__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_step3_step3_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_create_order_create_order_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_rest_rest__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { AuthenticaitonProvider } from '../providers/authenticaiton/authenticaiton';




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page3_page3__["a" /* Page3Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_step3_step3_module__["Step3PageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_order_create_order_module__["CreateOrderPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: 'ย้อนกลับ',
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/create-order/create-order.module#CreateOrderPageModule', name: 'CreateOrderPage', segment: 'create-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/step3/step3.module#Step3PageModule', name: 'Step3Page', segment: 'step3', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page3_page3__["a" /* Page3Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__["a" /* HTTP */]
                // AuthenticaitonProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Step3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Step3Page = (function () {
    function Step3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Step3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step3Page');
    };
    Step3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-step3',template:/*ion-inline-start:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/step3/step3.html"*/'<!--\n  Generated template for the Step3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step3efef</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/step3/step3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Step3Page);
    return Step3Page;
}());

//# sourceMappingURL=step3.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_report_report__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_page3_page3__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_create_order_create_order__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]; //CreateOrderPage;//LoginPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // let status bar overlay webview
            statusBar.overlaysWebView(true);
            statusBar.styleDefault();
            // set status bar to white
            // statusBar.backgroundColorByHexString('#CCCCCC');
            splashScreen.hide();
        });
    }
    MyApp.prototype.shouldShow = function () {
        return true;
    };
    MyApp.prototype.shouldShow2 = function () {
        return false;
    };
    MyApp.prototype.goToCreateOrder = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_create_order_create_order__["a" /* CreateOrderPage */]);
    };
    MyApp.prototype.goToReport = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_report_report__["a" /* ReportPage */]);
    };
    MyApp.prototype.goToList = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]);
    };
    MyApp.prototype.goToPage3 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_page3_page3__["a" /* Page3Page */]);
    };
    MyApp.prototype.goToSettings = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/app/app.html"*/'<ion-split-pane>\n  <ion-menu ng-hide="true" type="push" [content]="mainContent">\n\n    <ion-content class="main-bg-color" id="side-menu21">\n      <ion-card text-center class="hide-card">\n        <img src="assets/imgs/avatar/default.png" class="custom-avatar" />\n        <h1>Name</h1>\n        <h2>Have some p tag here</h2>\n      </ion-card>\n\n      <ion-list id="menu-list1">\n\n\n        <ion-item color="white" menuClose="" on-click="goToCreateOrder()" id="menu-list-item1">\n          <ion-icon name="barcode" item-left></ion-icon>\n          ทำรายการรับซื้อ\n        </ion-item>\n\n        <ion-item color="white" menuClose="" on-click="goToReport()" id="menu-list-item1">\n          <ion-icon name="barcode" item-left></ion-icon>\n          รายงานประจำวัน\n        </ion-item>\n        <!-- <ion-item color="none" menuClose="" on-click="goToList()" id="menu-list-item2">\n          <ion-icon name="ionic" item-left></ion-icon>\n          รายชื่อคนกลาง\n        </ion-item> -->\n        <ion-item color="none" menuClose="" on-click="goToPage3()" id="menu-list-item3">\n          <ion-icon name="ionic" item-left></ion-icon>\n          นโยบาย และข้อตกลงในการรับซื้อ\n        </ion-item>\n        <ion-item color="none" menuClose="" on-click="goToSettings()" id="menu-list-item20">\n          <ion-icon name="settings" item-left></ion-icon>\n          ตั้งค่า\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav main #mainContent [root]="rootPage"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_order_scan_result_create_order_scan_result__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateOderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateOrderPage = (function () {
    function CreateOrderPage(navCtrl, navParams, qrScanner, platform, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(true);
        this.scanStatus = "hide";
        //get permission
        this.qrScanner.prepare()
            .then(function (status) {
            console.log(status);
            if (status.authorized) {
                // camera permission was granted
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    }
    CreateOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateOderPage');
    };
    //for web-develop
    CreateOrderPage.prototype.ionViewWillLeave = function () {
        console.log("DESTROY");
        if (this.scanStatus === "show") {
            this.hideCamera();
        }
    };
    //open camera and subscribe
    CreateOrderPage.prototype.callQrScanner = function () {
        var _this = this;
        if (!this.platform.is('core')) {
            var createOrder = this;
            // start scanning
            this.scanSub = this.qrScanner.scan().subscribe(function (text) {
                //createOrder.hideCamera() ;
                console.log('Scanned something', text);
                _this.scanSuccess(text);
            });
            this.showCamera();
        }
        else {
            //by pass without scan
            this.scanSuccess(1);
        }
    };
    CreateOrderPage.prototype.showCamera = function () {
        this.qrScanner.show();
        this.scanStatus = "show";
        window.document.querySelector('ion-app').classList.add('cameraView');
    };
    CreateOrderPage.prototype.scanSuccess = function (id) {
        console.log('scannsuccess');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_order_scan_result_create_order_scan_result__["a" /* CreateOrderScanResultPage */], {
            id: id
        });
    };
    CreateOrderPage.prototype.hideCamera = function () {
        this.qrScanner.hide(); // hide camera preview
        this.scanSub.unsubscribe(); // stop scanning
        this.scanStatus = "hide";
        window.document.querySelector('ion-app').classList.remove('cameraView');
    };
    CreateOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-order',template:/*ion-inline-start:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/create-order/create-order.html"*/'<!--\n  Generated template for the CreateOderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ทำรายการรับซื้อ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="test" padding>\n\n\n  <ion-card class="card-container hide-card ">\n\n    <ion-card-content style="text-align: center;">\n\n      <div [ngSwitch]="scanStatus">\n        <ion-grid *ngSwitchCase="\'hide\'">\n          <ion-row>\n            <ion-col col-12>\n              <ion-icon class="add-icon" name="add-circle-outline" on-click="callQrScanner()"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n\n\n              <p class="add-new-text">\n                กดเพื่อเริ่มทำรายการใหม่\n              </p>\n\n\n\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n        <ion-grid *ngSwitchCase="\'show\'">\n          <ion-row>\n            <ion-col col-12>\n              <ion-icon class="add-icon" name="qr-scanner-outline"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <p class="add-new-text" on-click="hideCamera()">\n                ยกเลิก\n              </p>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/ionic802/buy-material_restore/src/pages/create-order/create-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], CreateOrderPage);
    return CreateOrderPage;
}());

//# sourceMappingURL=create-order.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http, platform, httpClient, loadingCtrl) {
        this.http = http;
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.timeout = 45;
        //private apiUrl:string = "https://digiday.co.th";
        this.apiUrl = "http://localhost:8100";
        console.log('Hello RestProvider Provider');
        if (!platform.is('core')) {
            this.isCore = true;
            console.log("platform=mobile");
            this.apiUrl = "https://digiday.co.th";
        }
        else {
            this.isCore = false;
            this.apiUrl = "http://localhost:8100";
        }
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 30000,
            dismissOnPageChange: true
        });
    }
    RestProvider.prototype.getUserData = function (scannerId) {
        var _this = this;
        var that = this;
        var url = this.apiUrl + '/bms_dev/api/users/' + scannerId;
        return new Promise(function (resolve, reject) {
            if (!_this.isCore) {
                _this.httpClient.get(url, { responseType: 'json' }).subscribe(function (data) {
                    console.log("callsuccess");
                    console.log(data);
                    resolve(data);
                }, function (err) {
                    console.log("error=");
                    console.log(err);
                });
            }
            else {
                _this.http.setRequestTimeout(_this.timeout);
                _this.http.get(url, {}, {})
                    .then(function (data) {
                    console.log(data.data);
                    resolve(JSON.parse(data.data));
                })
                    .catch(function (error) {
                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);
                    reject(error);
                });
            }
        });
    };
    RestProvider.prototype.getTypeProduct = function () {
        var _this = this;
        var url = this.apiUrl + "/bms_dev/api/get_type_product";
        return new Promise(function (resolve, reject) {
            if (!_this.isCore) {
                _this.httpClient.get(url, { responseType: 'json' }).subscribe(function (data) {
                    console.log("callsuccess");
                    console.log(data);
                    resolve(data);
                }, function (err) {
                    console.log("error=");
                    console.log(err);
                });
            }
            else {
                _this.http.get(url, {}, {})
                    .then(function (data) {
                    console.log(data.data);
                    resolve(JSON.parse(data.data));
                })
                    .catch(function (error) {
                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);
                    reject(error);
                });
            }
        });
    };
    RestProvider.prototype.getSizeProduct = function (productId) {
        var _this = this;
        var url = this.apiUrl + "/bms_dev/api/get_product/" + productId;
        return new Promise(function (resolve) {
            if (!_this.isCore) {
                _this.httpClient.get(url, { responseType: 'json' }).subscribe(function (data) {
                    console.log("callsuccess");
                    console.log(data);
                    resolve(data);
                }, function (err) {
                    console.log("error=");
                    console.log(err);
                });
            }
            else {
                _this.http.get(url, {}, {})
                    .then(function (data) {
                    console.log(data.data);
                    resolve(JSON.parse(data.data));
                })
                    .catch(function (error) {
                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);
                });
            }
        });
    };
    RestProvider.prototype.getService = function (obj) {
        var _this = this;
        var url = this.apiUrl + "/bms_dev/api/" + obj.serviceName + "/" + obj.getvalue;
        return new Promise(function (resolve, reject) {
            if (!_this.isCore) {
                _this.httpClient.get(url, { responseType: 'json' }).subscribe(function (data) {
                    console.log("callsuccess");
                    console.log(data);
                    resolve(data);
                }, function (err) {
                    console.log("error=");
                    console.log(err);
                });
            }
            else {
                _this.http.setRequestTimeout(_this.timeout);
                _this.http.get(url, {}, {})
                    .then(function (data) {
                    console.log(data.data);
                    resolve(JSON.parse(data.data));
                })
                    .catch(function (error) {
                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);
                    reject(error);
                });
            }
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object])
    ], RestProvider);
    return RestProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map