webpackJsonp([0],{

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-order/all-order.module": [
		160
	],
	"../pages/create-order/create-order.module": [
		166
	],
	"../pages/step3/step3.module": [
		170
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrderPageModule", function() { return AllOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_order__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_order_detail_all_order_detail__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AllOrderPageModule = (function () {
    function AllOrderPageModule() {
    }
    AllOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_order__["a" /* AllOrderPage */],
                __WEBPACK_IMPORTED_MODULE_3__all_order_detail_all_order_detail__["a" /* AllOrderDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_order__["a" /* AllOrderPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__all_order_detail_all_order_detail__["a" /* AllOrderDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */]
            ]
        })
    ], AllOrderPageModule);
    return AllOrderPageModule;
}());

//# sourceMappingURL=all-order.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_order_detail_all_order_detail__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(22);
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
 * Generated class for the AllOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllOrderPage = (function () {
    function AllOrderPage(navCtrl, navParams, restProvider, loadingCtrl, modalCtrl, datePipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.datePipe = datePipe;
    }
    AllOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllOrderPage');
        this.getAllOrderList();
    };
    AllOrderPage.prototype.showDetail = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__all_order_detail_all_order_detail__["a" /* AllOrderDetailPage */], {
            id: i
        });
    };
    AllOrderPage.prototype.getAllOrderList = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 30000,
            dismissOnPageChange: false
        });
        this.loader.present();
        var obj = {
            "serviceName": "get_all_order",
            "getvalue": ""
        };
        this.restProvider.getService(obj).then(function (data) {
            if (data["status"]) {
                _this.orderList = data['data'];
                _this.tmpOrderList = data['data'];
                _this.orderList.forEach(function (item, index) {
                    //  item.ORDER_DATE=new Date();
                    _this.orderList[index]['newDate'] = _this.datePipe.transform(item.ORDER_DATE, 'dd MMMM yyyy');
                    _this.tmpOrderList[index]['newDate'] = _this.datePipe.transform(item.ORDER_DATE, 'dd MMMM yyyy');
                });
                console.log(_this.orderList);
            }
            else {
            }
            _this.loader.dismiss();
        }).catch(function (error) {
            _this.loader.dismiss();
            console.log("thisis");
            console.log(error);
        });
    };
    AllOrderPage.prototype.getTmpOrderList = function () {
        this.orderList = this.tmpOrderList;
    };
    AllOrderPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        //this.initializeItems();
        // this.getTmpOrderList();
        var listFilter = [];
        // set val to the value of the ev target
        var val = ev.target.value;
        // console.log(this.tmpOrderList);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            //  this.orderList =
            this.tmpOrderList.filter(function (item) {
                if (item.FIRSTNAME.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    listFilter.push(item);
                }
                if (item.LASTNAME.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    listFilter.push(item);
                }
                if (item.RECEIPT_NO.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    listFilter.push(item);
                }
                if (item.newDate.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    listFilter.push(item);
                }
                // return (item.FIRSTNAME.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.orderList = listFilter;
        }
        else {
            this.getTmpOrderList();
        }
    };
    AllOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-order',template:/*ion-inline-start:"/Volumes/Work/workspace/github/materialApp/src/pages/all-order/all-order.html"*/'<!--\n  Generated template for the AllOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ประวัติการซื้อขาย</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content-bg" padding>\n\n\n  <ion-card >\n    <!-- <ion-card-header>\n      ประวัติการซื้อขาย\n    </ion-card-header>\n -->\n\n    <ion-grid>\n\n\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n\n        <ion-col>\n          <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n        </ion-col>\n\n\n      </ion-row>\n\n\n      <ion-row class="header-list">\n        <ion-col col-2 style="text-align: center;">\n          <div>เลขที่ใบเสร็จ</div>\n        </ion-col>\n        <ion-col col-3>\n          <div style="text-align: center;">วันที่</div>\n        </ion-col>\n        <ion-col col-3 style="text-align: center;">\n          <div>ชื่อ นามสกุล</div>\n        </ion-col>\n        <ion-col col-2 style="text-align: center;">\n          <div>จำนวน/ถุง</div>\n        </ion-col>\n        <ion-col col-2 style="text-align: center;">\n          <div>ยอดการซื้อขาย</div>\n        </ion-col>\n      </ion-row>\n\n\n\n      <div class=\'section\'>\n        <ion-row *ngFor="let item of orderList; index as i;" on-click="showDetail(item);">\n\n          <ion-col col-2 class="border-right" style="text-align: center;">\n            <div>{{item.RECEIPT_NO}}</div>\n          </ion-col>\n\n          <ion-col col-3 class="border-right"  style="text-align: center;">\n            <div>{{item.ORDER_DATE | date:\'dd MMMM yyyy\'}} {{item.ORDER_TIME}}</div>\n          </ion-col>\n\n          <ion-col class="border-right"  style="text-align: center;" col-3>\n            <div>{{item.FIRSTNAME}} {{item.LASTNAME}}</div>\n          </ion-col>\n\n          <ion-col class="border-right"  style="text-align: right;" col-2>\n            <div>{{item.ITEM_QUANTITY}}</div>\n          </ion-col>\n\n          <ion-col style="text-align: right;" col-2>\n            <div>{{item.ORDER_NET}}</div>\n          </ion-col>\n\n        </ion-row>\n      </div>\n\n    </ion-grid>\n\n    <!-- \n       \n                 <iframe width="100%" height="500" frameBorder="0" src="https://digiday.co.th/bms_dev/report_order_fixed"></iframe>\n     -->\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/github/materialApp/src/pages/all-order/all-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]])
    ], AllOrderPage);
    return AllOrderPage;
}());

//# sourceMappingURL=all-order.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderPageModule", function() { return CreateOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_order__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_qr_scanner__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_order_scan_result_create_order_scan_result__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_order_add_material_create_order_add_material__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_create_order_add_material_create_order_add_material__ = __webpack_require__(275);
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
                __WEBPACK_IMPORTED_MODULE_5__create_order_scan_result_create_order_scan_result__["a" /* CreateOrderScanResultPage */],
                __WEBPACK_IMPORTED_MODULE_6__create_order_add_material_create_order_add_material__["a" /* CreateOrderAddMaterialPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_order__["a" /* CreateOrderPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__providers_create_order_add_material_create_order_add_material__["a" /* CreateOrderAddMaterialProvider */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__create_order_scan_result_create_order_scan_result__["a" /* CreateOrderScanResultPage */],
                __WEBPACK_IMPORTED_MODULE_6__create_order_add_material_create_order_add_material__["a" /* CreateOrderAddMaterialPage */]
            ]
        })
    ], CreateOrderPageModule);
    return CreateOrderPageModule;
}());

//# sourceMappingURL=create-order.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderScanResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_order_add_material_create_order_add_material__ = __webpack_require__(169);
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
        console.log(this.scannerId);
        this.scannerId = this.navParams.get('id');
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
        if (this.scannerId === "") {
            this.scannerId = "undefined";
        }
        var obj = {
            "serviceName": "users",
            "getvalue": this.scannerId
        };
        this.restProvider.getService(obj).then(function (data) {
            _this.isData = true;
            _this.currentData = data;
            var fullname = data['data']["FIRSTNAME"] + " " + data['data']["LASTNAME"];
            var userType = data['data']["USER_TYPE"];
            var address = data['data']["ADDR"];
            _this.resultData = {
                "name": "",
                "userType": "",
                "address": ""
            };
            console.log("datastatus==" + data["status"]);
            if (!data["status"]) {
                _this.querySataus = false;
            }
            else {
                _this.querySataus = true;
                _this.resultData = {
                    "name": fullname,
                    "userType": userType,
                    "address": address
                };
            }
            _this.loader.dismiss();
        }).catch(function (error) {
            _this.isData = true;
            _this.querySataus = false;
            _this.loader.dismiss();
            console.log("thisis");
            console.log(error);
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
            selector: 'page-create-order-scan-result',template:/*ion-inline-start:"/Volumes/Work/workspace/github/materialApp/src/pages/create-order-scan-result/create-order-scan-result.html"*/'<!--\n  Generated template for the CreateOrderScanResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>ผลแสกน</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="isData" class="card-container">\n    <ion-card-content style="text-align: center;">\n      <ion-grid *ngIf="querySataus">\n        <ion-row>\n          <ion-col col-12>\n            <ion-icon class="status-icon correct" name="ios-checkmark-circle-outline"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <p class="result-text correct">แสกนสำเร็จ</p>\n          </ion-col>\n        </ion-row>\n        <ion-row style="padding:0">\n          <ion-col col-12>\n            <p class="name-text">{{resultData.name}}</p>\n            <p class="userType-text">{{resultData.userType}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n            <p class="address-text">{{resultData.address}}</p>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row justify-content-center>\n            <!-- <ion-col col-6>\n                <button ion-button block color="light">ยกเลิกการทำรายการ</button>\n            </ion-col> -->\n            <ion-col col-6>\n                <button ion-button block on-click="nextPage()">สร้างรายการจัดซื้อ</button>\n            </ion-col>\n          </ion-row> \n\n      </ion-grid>\n\n\n\n\n      <ion-grid *ngIf="querySataus == false">\n        <ion-row>\n          <ion-col col-12>\n            <ion-icon class="status-icon wrong" name="ios-close-circle-outline"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <p class="add-new-text">\n              ไม่พบรายการ\n            </p>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/github/materialApp/src/pages/create-order-scan-result/create-order-scan-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CreateOrderScanResultPage);
    return CreateOrderScanResultPage;
}());

//# sourceMappingURL=create-order-scan-result.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderAddMaterialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__all_order_detail_all_order_detail__ = __webpack_require__(82);
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
    function CreateOrderAddMaterialPage(navCtrl, navParams, restProvider, loadingCtrl, decimalPipe, geolocation, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.decimalPipe = decimalPipe;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.userData = {};
        this.displayUserData = {};
        this.tmpProductSizeObj = {};
        this.tmpProductTypeObj = {};
        this.isGetData = false;
        this.canAdd = false;
        this.arrayAdded = [];
        this.isEdit = false;
        this.userData = this.navParams.get('data');
        console.log(this.userData);
        this.currentObj = {
            "id": "",
            "productType": "",
            "productSize": "",
            "qty": "",
            "weight": 0,
            "price": 0
        };
        this.weight = this.currentObj.weight;
        this.price = this.currentObj.price;
    }
    CreateOrderAddMaterialPage.prototype.ionViewDidLoad = function () {
        this.isEdit = false;
        console.log('ionViewDidLoad CreateOrderAddMaterialPage');
        this.displayUserData = { "fullname": this.userData['data']['FIRSTNAME'] + " " + this.userData['data']['LASTNAME'] };
        this.getProducType();
        this.sumPrice = 0.00;
        this.sumWeight = 0.00;
        this.sumQty = 0.00;
    };
    CreateOrderAddMaterialPage.prototype.getProducType = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 30000,
            dismissOnPageChange: false
        });
        this.loader.present();
        var obj = {
            "serviceName": "get_type_product",
            "getvalue": ""
        };
        this.restProvider.getService(obj).then(function (data) {
            console.log(data);
            _this.producTypeObj = data["data"];
            _this.producTypeObj.forEach(function (item) {
                _this.tmpProductTypeObj[item.PRODUCT_TYPE_ID] = item;
            });
            _this.loader.dismiss();
        });
    };
    CreateOrderAddMaterialPage.prototype.onProductTypeChange = function (selectedValue) {
        if (this.productSel > 0) {
            this.currentObj.productType = selectedValue;
            this.getSizeProductFn(selectedValue);
            this.isGetData = false;
            this.currentObj.productSize = "";
            this.calculate();
        }
    };
    CreateOrderAddMaterialPage.prototype.onProductSizeChange = function (selectedValue) {
        this.currentObj.productSize = selectedValue;
        console.log('productSizeSel', selectedValue);
        //this.getSizeProduct(selectedValue);
        this.calculate();
    };
    CreateOrderAddMaterialPage.prototype.onQtyChange = function () {
        this.currentObj.qty = this.qty;
        console.log(this.qty);
        this.calculate();
    };
    CreateOrderAddMaterialPage.prototype.getSizeProductFn = function (productId) {
        var _this = this;
        // this.loader.present();
        var obj = {
            "serviceName": "get_product",
            "getvalue": productId
        };
        this.restProvider.getService(obj).then(function (data) {
            console.log(data);
            _this.producSizeObj = data["data"];
            _this.isGetData = data['status'];
            //used for calculate
            _this.producSizeObj.forEach(function (item) {
                _this.tmpProductSizeObj[item.PRODUCT_SIZE_ID] = item;
            });
            console.log("-------------------");
            console.log(_this.tmpProductSizeObj);
            // this.loader.dismiss();
        });
    };
    CreateOrderAddMaterialPage.prototype.calculate = function () {
        if (this.isValue()) {
            var calWeight = this.currentObj.qty * this.tmpProductSizeObj[this.currentObj.productSize]['ITEM_WEIGHT'];
            var calPrice = this.currentObj.qty * this.tmpProductSizeObj[this.currentObj.productSize]['PRICE_PER_ITEM'];
            calWeight = this.decimalPipe.transform(calWeight, '1.2-2');
            calPrice = this.decimalPipe.transform(calPrice, '1.2-2');
            console.log(parseFloat(calPrice.replace(/,/g, ''))),
                this.weight = calWeight;
            this.currentObj.weight = calWeight;
            this.price = calPrice;
            this.currentObj.price = calPrice;
            this.canAdd = true;
        }
        else {
            this.weight = 0;
            this.currentObj.weight = 0;
            this.price = 0;
            this.currentObj.price = 0;
            this.canAdd = false;
        }
    };
    CreateOrderAddMaterialPage.prototype.isValue = function () {
        if (this.currentObj.productType !== "" && this.currentObj.productSize !== "" && (this.currentObj.qty !== "" && this.currentObj.qty > 0)) {
            this.canAdd = true;
            console.log("isgetval");
            return true;
        }
        else {
            this.canAdd = false;
            return false;
        }
    };
    CreateOrderAddMaterialPage.prototype.getProductTypeName = function (productTypeId) {
        return this.tmpProductTypeObj[productTypeId]['PRODUCT_TYPE_NAME'];
    };
    CreateOrderAddMaterialPage.prototype.getProductSizeName = function (productSizeId) {
        return this.tmpProductSizeObj[productSizeId]['PRODUCT_SIZE_NAME'];
    };
    CreateOrderAddMaterialPage.prototype.addItem = function () {
        var myobj = this.currentObj;
        this.arrayAdded.push(myobj);
        this.clearInputList();
        // console.log(this.arrayAdded);
    };
    CreateOrderAddMaterialPage.prototype.editItem = function () {
        var myobj = this.currentObj;
        this.arrayAdded[this.currentIndexEditObj] = myobj;
        this.clearInputList();
    };
    CreateOrderAddMaterialPage.prototype.clearInputList = function () {
        this.isEdit = false;
        this.currentObj = {
            "id": "",
            "productType": "",
            "productSize": "",
            "qty": "",
            "weight": 0,
            "price": 0
        };
        this.productSel = 0;
        this.productSizeSel = 0;
        this.qty = 0;
        this.weight = 0;
        this.price = 0;
        this.isGetData = false;
        this.sumValue();
    };
    CreateOrderAddMaterialPage.prototype.editList = function (index) {
        this.isEdit = true;
        this.currentIndexEditObj = index;
        var getval = this.arrayAdded[index];
        this.currentObj = {
            "id": "",
            "productType": getval.productType,
            "productSize": getval.productSize,
            "qty": getval.qty,
            "weight": getval.weight,
            "price": getval.price
        };
        this.productSel = getval.productType;
        this.productSizeSel = getval.productSize;
        this.qty = getval.qty;
        this.weight = getval.weight;
        this.price = getval.price;
        console.log(index);
    };
    CreateOrderAddMaterialPage.prototype.sumValue = function () {
        var tmpPrice = 0.00;
        var tmpWeigth = 0.00;
        var tmpQty = 0;
        this.arrayAdded.forEach(function (item) {
            tmpPrice = tmpPrice + parseFloat(item.price.replace(/,/g, ''));
            tmpWeigth = tmpWeigth + parseFloat(item.weight.replace(/,/g, ''));
            tmpQty = tmpQty + parseFloat(item.qty.replace(/,/g, ''));
        });
        console.log(tmpPrice);
        this.sumQty = tmpQty;
        this.sumPrice = this.decimalPipe.transform(tmpPrice, '1.2-2');
        ;
        this.sumWeight = this.decimalPipe.transform(tmpWeigth, '1.2-2');
        ;
    };
    CreateOrderAddMaterialPage.prototype.removeList = function (index) {
        this.arrayAdded.splice(index, 1);
        this.sumValue();
    };
    CreateOrderAddMaterialPage.prototype.submitList = function () {
        var _this = this;
        //receive_new_order
        var tmpArray = [];
        var userid = this.restProvider.getUserData();
        console.log(userid);
        console.log("userID===", userid.USER_ID);
        this.arrayAdded.forEach(function (item) {
            var newvalue = {
                "iProductTypeID": item.productType,
                "iProductSizeID": item.productSize,
                "iProductWeight": _this.tmpProductSizeObj[item.productSize]['ITEM_WEIGHT'],
                "iTotalAmount": parseFloat(item.price.replace(/,/g, '')),
                "iProductPrice": _this.tmpProductSizeObj[item.productSize]['PRICE_PER_ITEM'],
                "iProduct_Qty": item.qty
            };
            tmpArray.push(newvalue);
        });
        //this.geolocationData = resp;
        // resp.coords.latitude
        var obj = {
            "serviceName": "receive_new_order",
            "params": {
                "iBuyerID": userid.USER_ID,
                "iFarmerID": this.userData['data']['USER_ID'],
                "iItemQty": this.sumQty,
                "iNetOrderPrice": parseFloat(this.sumPrice.replace(/,/g, '')),
                "sLocation_LAT": this.geolocationData.coords.latitude || 0,
                "sLocation_LNG": this.geolocationData.coords.longitude || 0,
                "sLocation_ACCURACY": this.geolocationData.coords.accuracy || 0,
                "sLocation_ALTITUDE": this.geolocationData.coords.altitude || 0,
                "sLocation_HEADING": this.geolocationData.coords.heading || 0,
                "sLocation_SPEED": this.geolocationData.coords.speed || 0,
                "sLocation_ALTACC": this.geolocationData.coords.altitudeAccuracy || 0,
                "aData_ItemOrder": tmpArray
            }
        };
        console.log("senddata ----------------------------");
        console.log(obj);
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 30000,
            dismissOnPageChange: false
        });
        this.loader.present();
        this.restProvider.postService(obj).then(function (data) {
            console.log(data);
            _this.loader.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__all_order_detail_all_order_detail__["a" /* AllOrderDetailPage */], { tmpId: obj,
                fromPage: "addMaterial" });
        });
    };
    CreateOrderAddMaterialPage.prototype.getLocation = function () {
        var _this = this;
        console.log("callgeo----------");
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.geolocationData = resp;
            // resp.coords.latitude
            _this.submitList();
            console.log("----------------");
            console.log(JSON.stringify(resp));
            // resp.coords.longitude
        }).catch(function (error) {
            _this.geolocationData = null;
            _this.submitList();
            console.log('Error getting location', JSON.stringify(error));
        });
    };
    CreateOrderAddMaterialPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'ยืนยัน',
            message: "<p>คุณต้องการยืนยันการสั่งซื้อหรือไม่</p>",
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'ยืนยัน',
                    handler: function (data) {
                        _this.getLocation();
                    }
                }
            ]
        });
        prompt.present();
    };
    CreateOrderAddMaterialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-order-add-material',template:/*ion-inline-start:"/Volumes/Work/workspace/github/materialApp/src/pages/create-order-add-material/create-order-add-material.html"*/'<!--\n  Generated template for the CreateOrderAddMaterialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>สร้างรายการจัดซื้อ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="content-bg" padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        \n        <ion-card>\n\n          <ion-card-header>\n            สร้างรายการ\n          </ion-card-header>\n        \n          <ion-card-content class="add-material-style">\n          <ion-list>\n            <ion-item>\n              <ion-label>ชนิดยาเส้น</ion-label>\n              <ion-select [(ngModel)]="productSel" (ionChange)="onProductTypeChange($event)" placeholder="เลือกชนิดยาเส้น">\n                <ion-option *ngFor="let item of producTypeObj" [value]="item.PRODUCT_TYPE_ID">{{item.PRODUCT_TYPE_NAME}}</ion-option>\n              </ion-select>\n            </ion-item>\n\n            \n            <ion-item>\n                <ion-label>เบอร์ยาเส้น</ion-label>\n                <ion-select [disabled]="!isGetData" (ionChange)="onProductSizeChange($event)" [(ngModel)]="productSizeSel" placeholder="เลือกเบอร์ยาเส้น">\n                  <ion-option *ngFor="let item of producSizeObj" [value]="item.PRODUCT_SIZE_ID">{{item.PRODUCT_SIZE_NAME}}</ion-option>\n                </ion-select>\n             \n              </ion-item>\n\n              <ion-item >\n                  <ion-label>จำนวนถุง</ion-label>\n                  <ion-input class="input-text-alight-right" (keyup)="onQtyChange()" type="number" pattern="[0-9]*" [(ngModel)]="qty" placeholder="0"></ion-input>\n                </ion-item>\n\n                <ion-item >\n                  <ion-label>น้ำหนัก/กิโลกรัม</ion-label>\n                  <ion-input class="input-text-alight-right" [(ngModel)]="weight" type="text" [disabled]="true" placeholder="0" value="0">0</ion-input>\n                </ion-item>\n                <ion-item >\n                  <ion-label>ราคา/ถุง</ion-label>\n                  <ion-input class="input-text-alight-right" [(ngModel)]="price" type="text" [disabled]="true" value="0">0</ion-input>\n                </ion-item>\n\n                <ion-row justify-content-center>\n                  <!-- <ion-col col-6>\n                      <button ion-button block color="light">ยกเลิกการทำรายการ</button>\n                  </ion-col> -->\n                  <ion-col col-6>\n                      <button  *ngIf="!isEdit"  ion-button block [disabled]="!canAdd" on-click="addItem()">เพิ่มรายการ</button>\n                      <button  *ngIf="isEdit" ion-button block [disabled]="!canAdd" on-click="editItem()">แก้ไขรายการ</button>\n                  </ion-col>\n\n                  \n                </ion-row> \n\n      \n          \n          </ion-list>\n          </ion-card-content>\n        \n        </ion-card>\n\n      </ion-col>\n      <ion-col col-6>\n        \n        <ion-card>\n\n          <ion-card-header>\n            รายการซื้อ {{displayUserData.fullname}}\n          </ion-card-header>\n        \n          <ion-card-content>\n            \n            <ion-list  *ngFor="let item of arrayAdded; index as i;" >\n              <ion-item-sliding>\n                <ion-item  >\n                  <h2>{{getProductTypeName(item.productType)}}</h2>\n                  <h3>{{getProductSizeName(item.productSize)}}</h3>\n\n                  <p item-end style="text-align:right;">{{item.weight}} กิโลกรัม<br>{{item.qty}} ถุง<br>{{item.price}} บาท</p>\n   \n                \n                </ion-item>\n       \n                <ion-item-options side="right">\n\n                    <button  ion-button on-click="editList(i)" color="info">\n                        <ion-icon name="ios-build-outline"></ion-icon>\n                      </button>\n                  <button   ion-button on-click="removeList(i)" color="danger">\n                    <ion-icon name="ios-remove-circle-outline"></ion-icon>\n                  </button>\n          \n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-list>\n\n\n          </ion-card-content>\n\n\n          <ion-item>\n              <span item-left>จำนวนรวม : {{sumWeight}} <br> จำนวนถุงรวม : {{sumQty}}</span>\n              <span  item-end>\n                ราคารวม : {{sumPrice}}\n              </span>\n            </ion-item>\n\n        \n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-12>\n            <button  ion-button block [disabled]="arrayAdded.length == 0" on-click="showPrompt()">เสร็จสิ้นการทำรายการ</button>\n           \n        </ion-col>\n    </ion-row>\n    \n   \n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/workspace/github/materialApp/src/pages/create-order-add-material/create-order-add-material.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* DecimalPipe */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CreateOrderAddMaterialPage);
    return CreateOrderAddMaterialPage;
}());

//# sourceMappingURL=create-order-add-material.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3PageModule", function() { return Step3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step3__ = __webpack_require__(276);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step3__["a" /* Step3Page */]),
            ],
        })
    ], Step3PageModule);
    return Step3PageModule;
}());

//# sourceMappingURL=step3.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"/Volumes/Work/workspace/github/materialApp/src/pages/report/report.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      report\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <div>ssdfsdsf</div>\n  <div>\n  <ion-list id="report-list4">\n    <ion-item id="report-list-item-container3">\n      <div id="report-markdown8" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          we\n        </p>\n      </div>\n    </ion-item>\n    <ion-list id="report-list5">\n      <ion-item color="none" on-click="ssss()" id="report-list-item16">\n        Item 1\n      </ion-item>\n      <ion-item color="none" id="report-list-item17">\n        Item 2\n      </ion-item>\n      <ion-item color="none" id="report-list-item18">\n        Item 3\n      </ion-item>\n    </ion-list>\n  </ion-list>\n</div>\n</ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/github/materialApp/src/pages/report/report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-list',template:/*ion-inline-start:"/Volumes/Work/workspace/github/materialApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      List\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2"></ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/github/materialApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-settings',template:/*ion-inline-start:"/Volumes/Work/workspace/github/materialApp/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5"></ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/github/materialApp/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_order_create_order__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(30);
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
    function LoginPage(navCtrl, formBuilder, menuCtrl, restProvider, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        // this.username = this.authForm.controls['username'];     
        // this.password = this.authForm.controls['password'];    
        this.menuCtrl.enable(false);
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1)])]
        });
    }
    LoginPage.prototype.onSubmit = function (value) {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: 'กำลังเข้าสู่ระบบ...',
            duration: 30000,
            dismissOnPageChange: false
        });
        if (this.authForm.valid) {
            var obj = {
                "serviceName": "auth_user",
                "params": {
                    "sUsername": value.username,
                    "sPassword": value.password
                }
            };
            this.loader.present();
            this.restProvider.postService(obj).then(function (data) {
                console.log(data['status']);
                if (data['status']) {
                    _this.restProvider.setUserData(data['data']);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__create_order_create_order__["a" /* CreateOrderPage */]);
                }
                _this.loader.dismiss();
            }).catch(function (error) {
                console.log(error);
                _this.loader.dismiss();
                _this.showPrompt();
            });
            console.log("submit");
            //  window.localStorage.setItem('password', value.password);
        }
    };
    LoginPage.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'เกิดข้อผิดพลาด',
            message: "<p>Username หรือ Password ไม่ถูกต้อง</p>",
            buttons: [
                {
                    text: 'ยืนยัน',
                    handler: function (data) {
                    }
                }
            ]
        });
        prompt.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/Work/workspace/github/materialApp/src/pages/login/login.html"*/'\n\n\n<ion-content padding style=" padding-left: 100px !important;" id="page4" class="main-bg-color">\n \n <div class="login-container"> \n  <h1 id="login-heading1" class="font-base" >\n    ระบบบริหารจัดการรับซื้อสินค้าเกษตร\n  </h1>\n  <form  [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n    <ion-item  style="background-color: transparent;" id="login-input3" [ngClass]="{\'error-border\':!authForm.controls.username.valid && authForm.controls.username.touched}">\n      <!-- <ion-label  floating>Enter your Username</ion-label> -->\n      <ion-input class="input-clear-style" type="text"  formControlName="username" placeholder="Enter your Username"></ion-input>\n    </ion-item>\n    <ion-item style="background-color: transparent;" [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n     <!-- <ion-label floating>Password</ion-label> -->\n      <ion-input type="password"  class="input-clear-style" formControlName="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <div style="margin-top:20px;">\n      <button class="submit-login"   ion-button round outline color="light"   [disabled]="!authForm.valid"  type="submit">log in</button>  \n    </div>\n  </form>\n\n  <div id="login-markdown1" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#FFFFFF;">\n      Forgot Password?\n    </p>\n  </div>\n </div>\n</ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/github/materialApp/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_report_report__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_step3_step3_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_create_order_create_order_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_all_order_all_order_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_locales_th__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { AuthenticaitonProvider } from '../providers/authenticaiton/authenticaiton';








Object(__WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_18__angular_common_locales_th__["a" /* default */], 'th');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_step3_step3_module__["Step3PageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_create_order_create_order_module__["CreateOrderPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_all_order_all_order_module__["AllOrderPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: 'ย้อนกลับ',
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/all-order/all-order.module#AllOrderPageModule', name: 'AllOrderPage', segment: 'all-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-order/create-order.module#CreateOrderPageModule', name: 'CreateOrderPage', segment: 'create-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/step3/step3.module#Step3PageModule', name: 'Step3Page', segment: 'step3', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* LOCALE_ID */],
                    useValue: 'th-TH' },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common__["e" /* DecimalPipe */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common__["d" /* DatePipe */]
                // AuthenticaitonProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderAddMaterialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the CreateOrderAddMaterialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CreateOrderAddMaterialProvider = (function () {
    function CreateOrderAddMaterialProvider(http) {
        this.http = http;
        console.log('Hello CreateOrderAddMaterialProvider Provider');
    }
    CreateOrderAddMaterialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CreateOrderAddMaterialProvider);
    return CreateOrderAddMaterialProvider;
}());

//# sourceMappingURL=create-order-add-material.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-step3',template:/*ion-inline-start:"/Volumes/Work/workspace/github/materialApp/src/pages/step3/step3.html"*/'<!--\n  Generated template for the Step3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step3efef</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/workspace/github/materialApp/src/pages/step3/step3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Step3Page);
    return Step3Page;
}());

//# sourceMappingURL=step3.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_report_report__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_create_order_create_order__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_all_order_all_order__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(48);
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
    function MyApp(platform, statusBar, splashScreen, menuCtrl, restProvider, geolocation) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.restProvider = restProvider;
        this.geolocation = geolocation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]; //CreateOrderPage;//LoginPage;
        this.userName = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // let status bar overlay webview
            statusBar.overlaysWebView(true);
            statusBar.styleDefault();
            // set status bar to white
            // statusBar.backgroundColorByHexString('#CCCCCC');
            splashScreen.hide();
            _this.userName = {
                'firstName': '',
                'lastName': ''
            };
            console.log("callgeo----------");
            _this.geolocation.getCurrentPosition().then(function (resp) {
                // resp.coords.latitude
                console.log("----------------");
                console.log(JSON.stringify(resp));
                // resp.coords.longitude
            }).catch(function (error) {
                console.log('Error getting location', JSON.stringify(error));
            });
            _this.subscription = _this.restProvider.subUserData().subscribe(function (userData) {
                _this.userName = {
                    'firstName': userData.userData.FIRSTNAME,
                    'lastName': userData.userData.LASTNAME,
                    'userType': userData.userData.USER_TYPE
                };
                console.log(userData);
                console.log(_this.userName);
            });
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_create_order_create_order__["a" /* CreateOrderPage */]);
    };
    MyApp.prototype.goToAllOrder = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_all_order_all_order__["a" /* AllOrderPage */]);
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
    };
    MyApp.prototype.goToSettings = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/Work/workspace/github/materialApp/src/app/app.html"*/'<ion-split-pane>\n  <ion-menu ng-hide="true" type="push" [content]="mainContent">\n\n    <ion-content text-center style="background: #41C4FE;" id="side-menu21">\n\n\n\n      <div style="background: #41C4FE;">\n      <ion-card text-center  class="hide-card">\n        <img src="assets/imgs/avatar/default.png" class="custom-avatar" />\n        <h1 style="color: white;" >{{userName.firstName}} {{userName.lastName}}</h1>\n        <h2 style="color: white;">{{userName.userType}}</h2> \n      </ion-card>\n    </div>\n\n    <div style="background: #41C4FE;">\n      <ion-list id="menu-list1">\n        <ion-item color="white" menuClose="" on-click="goToCreateOrder()" id="menu-list-item1">\n          <ion-icon name="barcode" item-left></ion-icon>\n          ทำรายการรับซื้อ\n        </ion-item>\n\n        <ion-item color="white" menuClose="" on-click="goToAllOrder()" id="menu-list-item1">\n          <ion-icon name="barcode" item-left></ion-icon>\n          ประวัติการซื้อขาย\n        </ion-item>\n        <!-- <ion-item color="none" menuClose="" on-click="goToList()" id="menu-list-item2">\n          <ion-icon name="ionic" item-left></ion-icon>\n          รายชื่อคนกลาง\n        </ion-item> -->\n        <ion-item color="none" menuClose="" on-click="goToPage3()" id="menu-list-item3">\n          <ion-icon name="ionic" item-left></ion-icon>\n          นโยบาย และข้อตกลงในการรับซื้อ\n        </ion-item>\n        <ion-item color="none" menuClose="" on-click="goToSettings()" id="menu-list-item20">\n          <ion-icon name="settings" item-left></ion-icon>\n          ตั้งค่า\n        </ion-item>\n      </ion-list>\n    </div>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav main #mainContent [root]="rootPage"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"/Volumes/Work/workspace/github/materialApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(162);
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
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
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
    /**
     * This function use for call service By get method
     * @param obj
     *
     */
    RestProvider.prototype.getService = function (obj) {
        var _this = this;
        var url = this.apiUrl + "/bms_dev/api/" + obj.serviceName + "/" + obj.getvalue;
        console.log("url call = " + url);
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
    RestProvider.prototype.postService = function (obj) {
        var _this = this;
        var url = this.apiUrl + "/bms_dev/api/" + obj.serviceName;
        var params = obj.params;
        console.log("url call = " + url);
        return new Promise(function (resolve, reject) {
            if (!_this.isCore) {
                _this.httpClient.post(url, params).subscribe(function (data) {
                    console.log("callsuccess");
                    console.log(data);
                    resolve(data);
                }, function (err) {
                    console.log("error=");
                    console.log(err);
                    reject(err);
                });
            }
            else {
                _this.http.setRequestTimeout(_this.timeout);
                _this.http.setDataSerializer('json');
                _this.http.setHeader('Content-Type', 'application/json');
                _this.http.post(url, params, {})
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
    RestProvider.prototype.setUserData = function (userData) {
        this.userData = userData;
        this.subject.next({ userData: userData });
    };
    RestProvider.prototype.getUserData = function () {
        return this.userData;
        // return this.subject.asObservable();
    };
    RestProvider.prototype.subUserData = function () {
        return this.subject.asObservable();
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllOrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(165);
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
 * Generated class for the AllOrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllOrderDetailPage = (function () {
    function AllOrderDetailPage(navCtrl, navParams, restProvider, loadingCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.userDisplay = [];
    }
    AllOrderDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.orderDetailId = this.navParams.get('id');
        this.userDisplay = this.navParams.get('id');
        this.getFromPage = this.navParams.get('fromPage');
        this.summaryResult = this.navParams.get('tmpId');
        this.platform.ready().then(function () {
            alert("ready");
            _this.loadMap();
        });
        if (this.getFromPage == "addMaterial") {
        }
        console.log(" this.getFromPage=" + this.getFromPage);
        console.log(" this.getFromPage=" + this.summaryResult);
        console.log('ionViewDidLoad AllOrderDetailPage id=' + JSON.stringify(this.orderDetailId));
        this.getOrderDetail();
    };
    AllOrderDetailPage.prototype.getOrderDetail = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 30000,
            dismissOnPageChange: false
        });
        this.loader.present();
        var obj = {
            "serviceName": "view_item_order",
            "getvalue": this.orderDetailId.ORDER_ID
        };
        this.restProvider.getService(obj).then(function (data) {
            if (data["status"]) {
                console.log(data);
                _this.orderDetailData = data['data'];
            }
            else {
            }
            _this.loader.dismiss();
        }).catch(function (error) {
            _this.loader.dismiss();
            console.log("thisis");
            console.log(error);
        });
    };
    AllOrderDetailPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas');
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log('Map is ready!');
            // Now you can use all methods safely.
            _this.map.addMarker({
                title: 'Ionic',
                icon: 'blue',
                animation: 'DROP',
                position: {
                    lat: 43.0741904,
                    lng: -89.3809802
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    alert('clicked');
                });
            });
        });
    };
    AllOrderDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-order-detail',template:/*ion-inline-start:"/Volumes/Work/workspace/github/materialApp/src/pages/all-order-detail/all-order-detail.html"*/'<!--\n  Generated template for the AllOrderDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ประวัติการซื้อขาย</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="content-bg" padding>\n  <div style="height: 100%;" id="map_canvas"></div> \n</ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/github/materialApp/src/pages/all-order-detail/all-order-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], AllOrderDetailPage);
    return AllOrderDetailPage;
}());

//# sourceMappingURL=all-order-detail.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_order_scan_result_create_order_scan_result__ = __webpack_require__(168);
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
            selector: 'page-create-order',template:/*ion-inline-start:"/Volumes/Work/workspace/github/materialApp/src/pages/create-order/create-order.html"*/'<!--\n  Generated template for the CreateOderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ทำรายการรับซื้อ</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content-bg camera-display" padding>\n  <ion-card class="card-container hide-card ">\n    <ion-card-content style="text-align: center;">\n      <div [ngSwitch]="scanStatus">\n        <ion-grid *ngSwitchCase="\'hide\'">\n          <ion-row>\n            <ion-col col-12>\n              <ion-icon class="add-icon" name="add-circle-outline" on-click="callQrScanner()"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <p class="add-new-text">\n                กดเพื่อเริ่มทำรายการใหม่\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid *ngSwitchCase="\'show\'">\n          <ion-row>\n            <ion-col col-12>\n              <ion-icon class="add-icon" name="qr-scanner-outline"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <p class="add-new-text" on-click="hideCamera()">\n                ยกเลิก\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Volumes/Work/workspace/github/materialApp/src/pages/create-order/create-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], CreateOrderPage);
    return CreateOrderPage;
}());

//# sourceMappingURL=create-order.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map