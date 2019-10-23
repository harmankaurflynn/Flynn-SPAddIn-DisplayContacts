(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-details/contact-details.component */ "./src/app/contact-details/contact-details.component.ts");





var routes = [
    {
        path: 'files', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    },
    {
        path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        // children:[
        //   { path: ':key', component: DisplayFilesComponent,data: {
        //     breadcrumb: 'files/:key'
        //   }},
        //   { path: ':key', component: DisplayFilesComponent,data: {
        //   breadcrumb: 'files/:key'
        // }}
        //]
    },
    //{
    //    path: 'sharedservices/safety/FlynnSPAddinContacts/app/files', component: AppComponent
    //},
    //{
    //    path: 'sharedservices/safety/FlynnSPAddinContacts/app/', component: ContactDetailsComponent
    //},
    { path: '**', component: _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular';
    }
    AppComponent.prototype.ngOnInit = function () {
        // document.getElementById('senderId').text(this.senderId);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-details/contact-details.component */ "./src/app/contact-details/contact-details.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__["MatchesRegionPipe"],
                _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"], useValue: window['_app_base'] || '/' },
                _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__["MatchesRegionPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-details/contact-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/contact-details/contact-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*----------contact tabs----*/\r\n/* Style the tab content */\r\nul.tab {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #f1f1f1;\r\n}\r\n/* Float the list items side by side */\r\nul.tab li {\r\n    float: left;\r\n  }\r\n/* Style the links inside the list items */\r\nul.tab li button {\r\n      margin-left:0px;\r\n      display: inline-block;\r\n      color: #0c5030;\r\n      text-align: center;\r\n      padding: 14px 16px;\r\n      text-decoration: none;\r\n      transition: 0.3s;\r\n      font-size: 19px;\r\n      border: 1px solid #ccc;\r\n    }\r\n/* Change background color of links on hover */\r\nul.tab li button:hover {\r\n        background-color: #ddd;\r\n      }\r\n/* Create an active/current tablink class */\r\nul.tab li button:focus, .active {\r\n        background-color: white;\r\n        border-bottom: none !important;\r\n      }\r\n.tabcontent {\r\n  display: none;\r\n  padding: 6px 12px;\r\n  border-top: none;\r\n  margin: 30px;\r\n}\r\n.contactdetailstabs {\r\n  width: 90%;\r\n  border: 1px solid #ccc;\r\n  height: auto;\r\n}\r\n@-webkit-keyframes fadeEffect {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fadeEffect {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n/*---end tabs--*/\r\n/*---style card*/\r\n/* entire container, keeps perspective */\r\n.card-container {\r\n  -webkit-perspective: 600px;\r\n  -o-perspective: 600px;\r\n  perspective: 600px;\r\n  margin-bottom: 30px;\r\n  margin-left: -250px;\r\n}\r\n/* flip the pane when hovered */\r\n.card-container:hover .card, .card-container.hover .card {\r\n    -webkit-transform: rotateY( 0deg );\r\n    transform: rotateY( 0deg );\r\n  }\r\n.card-container.static:hover .card, .card-container.static.hover .card {\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n/* flip speed goes here */\r\n.card {\r\n  transition: -webkit-transform .5s;\r\n  transition: transform .5s;\r\n  transition: transform .5s, -webkit-transform .5s;\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d;\r\n  position: relative;\r\n}\r\n/* hide back of pane during swap */\r\n.front, .back {\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #FFF;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n/* front pane, placed above back */\r\n.front {\r\n  z-index: 2;\r\n}\r\n/* back, initially hidden pane */\r\n.back {\r\n  -webkit-transform: rotateY( 0deg );\r\n  transform: rotateY( 0deg );\r\n  z-index: 3;\r\n}\r\n.card {\r\n  background: none repeat scroll 0 0 #FFFFFF;\r\n  border-radius: 4px;\r\n  color: #444444;\r\n}\r\n.card-container, .front, .back {\r\n  width: 100%;\r\n  height: 320px;\r\n  border-radius: 4px;\r\n}\r\n.card .cover {\r\n  height: 105px;\r\n  overflow: hidden;\r\n  border-radius: 4px 4px 0 0;\r\n}\r\n.card .cover img {\r\n    width: 100%;\r\n  }\r\n.card .user {\r\n  border-radius: 50%;\r\n  display: block;\r\n  height: 120px;\r\n  margin: -55px auto 0;\r\n  overflow: hidden;\r\n  width: 120px;\r\n}\r\n.card .user img {\r\n    background: none repeat scroll 0 0 #FFFFFF;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n.card .content {\r\n  background-color: rgba(0, 0, 0, 0);\r\n  box-shadow: none;\r\n  padding: 10px 20px 20px;\r\n}\r\n.card .content .main {\r\n    min-height: 160px;\r\n  }\r\n.card .back .content .main {\r\n  height: 215px;\r\n}\r\n.card .name {\r\n  font-size: 22px;\r\n  line-height: 28px;\r\n  margin: 10px 0 0;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n}\r\n.card h5 {\r\n  margin: 5px 0;\r\n  font-weight: 400;\r\n  line-height: 20px;\r\n}\r\n.card .profession {\r\n  color: #999999;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n.card .footer {\r\n  border-top: 1px solid #EEEEEE;\r\n  color: #999999;\r\n  margin: 30px 0 0;\r\n  padding: 10px 0 0;\r\n  text-align: center;\r\n}\r\n.card .footer .social-links {\r\n    font-size: 18px;\r\n  }\r\n.card .footer .social-links a {\r\n      margin: 0 7px;\r\n    }\r\n.card .header {\r\n  padding: 15px 20px;\r\n  height: 90px;\r\n}\r\n.card .motto {\r\n  border-bottom: 1px solid #EEEEEE;\r\n  color: #999999;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  padding-bottom: 10px;\r\n  text-align: center;\r\n}\r\n/*      Just for presentation        */\r\n.title {\r\n  color: #506A85;\r\n  text-align: center;\r\n  font-weight: 300;\r\n  font-size: 44px;\r\n  margin-bottom: 90px;\r\n  line-height: 90%;\r\n}\r\n.title small {\r\n    font-size: 17px;\r\n    color: #999;\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n  }\r\n.space-50 {\r\n  height: 50px;\r\n  display: block;\r\n}\r\n.space-200 {\r\n  height: 200px;\r\n  display: block;\r\n}\r\n.white-board {\r\n  background-color: #FFFFFF;\r\n  min-height: 200px;\r\n  padding: 60px 60px 20px;\r\n}\r\n.ct-heart {\r\n  color: #F74933;\r\n}\r\npre.prettyprint {\r\n  background-color: #ffffff;\r\n  border: 1px solid #999;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n  text-align: left;\r\n}\r\n.atv, .str {\r\n  color: #05AE0E;\r\n}\r\n.tag, .pln, .kwd {\r\n  color: #3472F7;\r\n}\r\n.atn {\r\n  color: #2C93FF;\r\n}\r\n.pln {\r\n  color: #333;\r\n}\r\n.com {\r\n  color: #999;\r\n}\r\n/*---end style card*/\r\n.viewrow {\r\n  list-style-type: none;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding: 2em 0;\r\n}\r\n#container {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n#left {\r\n  float: left;\r\n  width: 30%;\r\n  text-align: left;\r\n  font-size: 18px;\r\n}\r\n#center {\r\n  display: inline-block;\r\n  margin: 0 auto;\r\n  width: 100px;\r\n}\r\n#right {\r\n  width: 40%;\r\n}\r\n/*--loader*/\r\n.loader-hidden {\r\n  display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1kZXRhaWxzL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUM5QiwyQkFBMkI7QUFDM0I7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMEJBQTBCO0NBQzNCO0FBRUMsdUNBQXVDO0FBQ3ZDO0lBQ0UsWUFBWTtHQUNiO0FBRUMsMkNBQTJDO0FBQzNDO01BQ0UsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQix1QkFBdUI7S0FDeEI7QUFFQywrQ0FBK0M7QUFDL0M7UUFDRSx1QkFBdUI7T0FDeEI7QUFFRCw0Q0FBNEM7QUFDNUM7UUFDRSx3QkFBd0I7UUFDeEIsK0JBQStCO09BQ2hDO0FBRVA7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0NBQ2Q7QUFFRDtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsYUFBYTtDQUNkO0FBRUQ7RUFDRTtJQUNFLFdBQVc7R0FDWjs7RUFFRDtJQUNFLFdBQVc7R0FDWjtDQUNGO0FBRUQ7RUFDRTtJQUNFLFdBQVc7R0FDWjs7RUFFRDtJQUNFLFdBQVc7R0FDWjtDQUNGO0FBRUQsaUJBQWlCO0FBRWpCLGlCQUFpQjtBQUNqQix5Q0FBeUM7QUFDekM7RUFDRSwyQkFBMkI7RUFFM0Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsb0JBQW9CO0NBQ3JCO0FBQ0MsZ0NBQWdDO0FBQ2hDO0lBQ0UsbUNBQW1DO0lBR25DLDJCQUEyQjtHQUM1QjtBQUVEO0lBQ0Usd0JBQXdCO0lBR3hCLGdCQUFnQjtHQUNqQjtBQUNILDBCQUEwQjtBQUMxQjtFQUlFLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFB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Q29udGVudCI6WyIvKi0tLS0tLS0tLS1jb250YWN0IHRhYnMtLS0tKi9cclxuLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXHJcbnVsLnRhYiB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuICAvKiBGbG9hdCB0aGUgbGlzdCBpdGVtcyBzaWRlIGJ5IHNpZGUgKi9cclxuICB1bC50YWIgbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAgIC8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIGxpc3QgaXRlbXMgKi9cclxuICAgIHVsLnRhYiBsaSBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY29sb3I6ICMwYzUwMzA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuXHJcbiAgICAgIC8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgICAgIHVsLnRhYiBsaSBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCB0YWJsaW5rIGNsYXNzICovXHJcbiAgICAgIHVsLnRhYiBsaSBidXR0b246Zm9jdXMsIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuLnRhYmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0ZGV0YWlsc3RhYnMge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlRWZmZWN0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlRWZmZWN0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLyotLS1lbmQgdGFicy0tKi9cclxuXHJcbi8qLS0tc3R5bGUgY2FyZCovXHJcbi8qIGVudGlyZSBjb250YWluZXIsIGtlZXBzIHBlcnNwZWN0aXZlICovXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNjAwcHg7XHJcbiAgLW1vei1wZXJzcGVjdGl2ZTogNjAwcHg7XHJcbiAgLW8tcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XHJcbn1cclxuICAvKiBmbGlwIHRoZSBwYW5lIHdoZW4gaG92ZXJlZCAqL1xyXG4gIC5jYXJkLWNvbnRhaW5lcjpob3ZlciAuY2FyZCwgLmNhcmQtY29udGFpbmVyLmhvdmVyIC5jYXJkIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKCAwZGVnICk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSggMGRlZyApO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKCAwZGVnICk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDBkZWcgKTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lci5zdGF0aWM6aG92ZXIgLmNhcmQsIC5jYXJkLWNvbnRhaW5lci5zdGF0aWMuaG92ZXIgLmNhcmQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIC1vLXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbi8qIGZsaXAgc3BlZWQgZ29lcyBoZXJlICovXHJcbi5jYXJkIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC41cztcclxuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIC41cztcclxuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gLjVzO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAtby10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBoaWRlIGJhY2sgb2YgcGFuZSBkdXJpbmcgc3dhcCAqL1xyXG4uZnJvbnQsIC5iYWNrIHtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtby1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbn1cclxuXHJcbi8qIGZyb250IHBhbmUsIHBsYWNlZCBhYm92ZSBiYWNrICovXHJcbi5mcm9udCB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLyogYmFjaywgaW5pdGlhbGx5IGhpZGRlbiBwYW5lICovXHJcbi5iYWNrIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSggMGRlZyApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKCAwZGVnICk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKCAwZGVnICk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKCAwZGVnICk7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgI0ZGRkZGRjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICM0NDQ0NDQ7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciwgLmZyb250LCAuYmFjayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jb3ZlciB7XHJcbiAgaGVpZ2h0OiAxMDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG59XHJcblxyXG4gIC5jYXJkIC5jb3ZlciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuLmNhcmQgLnVzZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIG1hcmdpbjogLTU1cHggYXV0byAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4gIC5jYXJkIC51c2VyIGltZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwICNGRkZGRkY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4uY2FyZCAuY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xyXG59XHJcblxyXG4gIC5jYXJkIC5jb250ZW50IC5tYWluIHtcclxuICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xyXG4gIH1cclxuXHJcbi5jYXJkIC5iYWNrIC5jb250ZW50IC5tYWluIHtcclxuICBoZWlnaHQ6IDIxNXB4O1xyXG59XHJcblxyXG4uY2FyZCAubmFtZSB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2FyZCBoNSB7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZCAucHJvZmVzc2lvbiB7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIC5mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUVFRUVFO1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG4gIG1hcmdpbjogMzBweCAwIDA7XHJcbiAgcGFkZGluZzogMTBweCAwIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gIC5jYXJkIC5mb290ZXIgLnNvY2lhbC1saW5rcyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAgIC5jYXJkIC5mb290ZXIgLnNvY2lhbC1saW5rcyBhIHtcclxuICAgICAgbWFyZ2luOiAwIDdweDtcclxuICAgIH1cclxuXHJcbi5jYXJkIC5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuXHJcbi5jYXJkIC5tb3R0byB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUVFRUU7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiAgICAgIEp1c3QgZm9yIHByZXNlbnRhdGlvbiAgICAgICAgKi9cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICM1MDZBODU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiA0NHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDkwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuICAudGl0bGUgc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbi5zcGFjZS01MCB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc3BhY2UtMjAwIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ud2hpdGUtYm9hcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgcGFkZGluZzogNjBweCA2MHB4IDIwcHg7XHJcbn1cclxuXHJcbi5jdC1oZWFydCB7XHJcbiAgY29sb3I6ICNGNzQ5MzM7XHJcbn1cclxuXHJcbnByZS5wcmV0dHlwcmludCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYXR2LCAuc3RyIHtcclxuICBjb2xvcjogIzA1QUUwRTtcclxufVxyXG5cclxuLnRhZywgLnBsbiwgLmt3ZCB7XHJcbiAgY29sb3I6ICMzNDcyRjc7XHJcbn1cclxuXHJcbi5hdG4ge1xyXG4gIGNvbG9yOiAjMkM5M0ZGO1xyXG59XHJcblxyXG4ucGxuIHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmNvbSB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi8qLS0tZW5kIHN0eWxlIGNhcmQqL1xyXG5cclxuLnZpZXdyb3cge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBwYWRkaW5nOiAyZW0gMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDMwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2NlbnRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuI3JpZ2h0IHtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4vKi0tbG9hZGVyKi9cclxuLmxvYWRlci1oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contact-details/contact-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/contact-details/contact-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<link href=\"https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n\r\n\r\n\r\n  \r\n  <div style=\"margin: 0px 35px auto;\" *ngIf=\"contactsDirectors\">\r\n    <div style=\"padding:20px;font-size:22px;\">\r\n\r\n      <b> Safety Director</b>\r\n    </div>\r\n    <div class=\"container\" *ngFor=\"let contact of contactsDirectors\" style=\"width:320px; height:400px !important;margin-left:50px; display:inline-block;\">\r\n\r\n      <div class=\"row\" style=\"margin-left:200px; margin-bottom:5px;\">\r\n        <div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4 col-sm-4\">\r\n              <div class=\"card-container\" style=\"width:320px\">\r\n                <div class=\"card\">\r\n                  <div class=\"front\" style=\"height:370px !important;\">\r\n\r\n                    <div class=\"cover\">\r\n                      <img src=\"../app/images/greenBackGrad.jpg\" />\r\n                     \r\n                    </div>\r\n                    <div class=\"user\">\r\n                      <img class=\"img-circle\" [src]=\"contact.photo\">\r\n                    </div>\r\n                    <div class=\"content\">\r\n                      <div class=\"main\">\r\n                        <h3 class=\"name\"><div><span style=\"color:#003300\">{{contact.name}}</span></div></h3>\r\n                        <p class=\"profession\"><span style=\"color:#003300\">{{contact.jobTitle}} , {{contact.country}}</span></p>\r\n                        <h5><i class=\"fa fa-phone\" style=\"padding-right:3px\"></i><a style=\"color:#003300\">{{contact.businessPhoneNo}}</a></h5>\r\n                        <h5><i class=\"fa fa-mobile-phone\" style=\"padding-right:3px\"></i><a style=\"color:#003300\">{{contact.mobilePhone}}</a></h5>\r\n                        <h5><i class=\"fa fa-envelope\" style=\"padding-right:3px\"></i><span style=\"color:#003300\">{{contact.emailID}}</span></h5>\r\n\r\n                      </div>\r\n                      \r\n                    </div>\r\n                  </div> <!-- end front panel-->\r\n                </div> <!-- end back panel -->\r\n              </div> <!-- end card -->\r\n            </div> <!-- end card-container -->\r\n          </div> <!-- end col sm 4 -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div [class.loader-hidden]=\"!loaderShow\">\r\n\r\n  <img src=\"../app/images/Loading.gif\" />\"\r\n</div>\r\n\r\n<div style=\"margin: 0px 35px auto;\" *ngIf=\"contacts\" >\r\n  <div style=\"padding:20px;font-size:22px;\">\r\n\r\n    <b> Safety Contacts</b>\r\n  </div>\r\n  <div class=\"contactdetailstabs\" id=\"contactdetailstabs\">\r\n    \r\n  \r\n    <ul class=\"tab\">\r\n      <li>\r\n        <button class=\"tablinks active\" id=\"defaultOpen\" (click)=\"openTab($event, 'Canada')\">Canada</button>\r\n      </li>\r\n      <li>\r\n        <button class=\"tablinks\" (click)=\"openTab($event, 'US')\">US</button>\r\n      </li>\r\n    </ul>\r\n    <div class=\"tabcontent\" id=\"canada\" style=\"padding-left: 20px; display: block;\">\r\n\r\n\r\n      <div class=\"region\" *ngFor=\"let region of contactsDistinctRegions; let i=index\">\r\n\r\n        <div style=\"padding:20px;font-size:18px;\">\r\n\r\n          <b> {{region}}</b>\r\n        </div>\r\n        <div>\r\n\r\n          <div class=\"container\" *ngFor=\"let contact of contactsForRegion | matchesRegion : region\" style=\"width:320px; height:400px !important;margin-left:50px; display:inline-block;\">\r\n\r\n            <div class=\"row\" style=\"margin-left:200px; margin-bottom:5px;\">\r\n              <div>\r\n\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"col-md-4 col-sm-4\">\r\n                    <div class=\"card-container\" style=\"width:320px\">\r\n                      <div class=\"card\">\r\n                        <div class=\"front\" style=\"height:370px !important;\">\r\n\r\n                          <div class=\"cover\">\r\n                            <img src=\"../app/images/greenBackGrad.jpg\" />\r\n                          </div>\r\n                          <div class=\"user\">\r\n                            <img class=\"img-circle\" [src]=\"contact.photo\">\r\n                          </div>\r\n                          <div class=\"content\">\r\n                            <div class=\"main\">\r\n                              <h3 class=\"name\"><div><a style=\"color:#003300\">{{contact.name}}</a></div></h3>\r\n                              <p class=\"profession\"><a style=\"color:#003300\">{{contact.jobTitle}} , {{contact.city}}</a></p>\r\n                              <h5><i class=\"fa fa-phone\" style=\"padding-right:3px\"></i><a style=\"color:#003300\">{{contact.businessPhoneNo}}</a></h5>\r\n                              <h5><i class=\"fa fa-mobile-phone\" style=\"padding-right:3px\"></i><a style=\"color:#003300\">{{contact.mobilePhone}}</a></h5>\r\n                              <h5><i class=\"fa fa-envelope\" style=\"padding-right:3px\"></i><a style=\"color:#003300\">{{contact.emailID}}</a></h5>\r\n\r\n                            </div>\r\n\r\n\r\n                          </div>\r\n                        </div> <!-- end front panel-->\r\n                      </div> <!-- end back panel -->\r\n                    </div> <!-- end card -->\r\n                  </div> <!-- end card-container -->\r\n                </div> <!-- end col sm 4 -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div> <!-- end card -->\r\n    <!--</div>--> <!-- end div -->\r\n  </div>\r\n</div>\r\n\r\n<div class='form-text error' *ngIf=\"errorMessage\">\r\n {{errorMessage}}\r\n</div>\r\n\r\n       \r\n"

/***/ }),

/***/ "./src/app/contact-details/contact-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/contact-details/contact-details.component.ts ***!
  \**************************************************************/
/*! exports provided: MatchesRegionPipe, ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesRegionPipe", function() { return MatchesRegionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_distinct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/distinct */ "./node_modules/rxjs-compat/_esm5/add/operator/distinct.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var MatchesRegionPipe = /** @class */ (function () {
    function MatchesRegionPipe() {
    }
    MatchesRegionPipe.prototype.transform = function (items, region) {
        return items.filter(function (item) { return item.region === region; });
    };
    MatchesRegionPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'matchesRegion'
        })
    ], MatchesRegionPipe);
    return MatchesRegionPipe;
}());

var ContactDetailsComponent = /** @class */ (function () {
    function ContactDetailsComponent(http) {
        this.http = http;
        this.errorMessage = '';
        this.senderId = ''; // the App Part provides a Sender Id in the URL parameters,
        // every time the App Part is loaded, a new Id is generated.
        // The Sender Id identifies the rendered App Part.
        this.previousHeight = 0; // the height
        this.minHeight = 0; // the minimal allowed height
        this.firstResize = true;
        this.loaderShow = false;
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var contactsList = this.getData();
        contactsList.then(function (success) {
            _this.loaderShow = false;
            _this.contactsCountry = "Canada";
            _this.getContactsforSelectedCountry();
            console.log("success");
            _this.resizeWindow();
        }, function (error) {
            _this.loaderShow = false;
            _this.errorMessage = error;
        });
    };
    ContactDetailsComponent.prototype.getData = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var listname = decodeURIComponent(_this.getQueryStringParameter("ListName"));
            if (listname && listname != undefined && listname != "undefined") {
                _this.loaderShow = true;
                _this.getSharePointListData("/web/lists/getbytitle('" + listname + "')/items?$orderby = Title", true).subscribe(function (response) {
                    var picture;
                    _this.contacts = [];
                    var contents = response;
                    if (contents) {
                        contents.forEach(function (content) {
                            _this.contacts.push({
                                name: content.Title, emailID: content.Email, jobTitle: content.JobTitle, country: content.Country, businessPhoneNo: content.WorkPhone,
                                mobilePhone: content.CellPhone, region: content.Region, photo: content.Photo, city: content.WorkCity
                            }); // or self.messages.push(m) - if you used self
                            console.log("entry");
                        });
                    }
                    console.log("Contacts" + _this.contacts.length);
                    // document.getElementById('defaultOpen').click;
                    resolve(_this.contacts);
                });
            }
            else {
                reject("Enter List Name in webpart properties to display contacts");
            }
        });
        return promise;
    };
    ContactDetailsComponent.prototype.getContactsforSelectedCountry = function () {
        var _this = this;
        console.log("Current Country new" + this.contactsCountry);
        this.contactsDistinctRegions = [];
        this.contactsByCountry = [];
        this.contactsByCountry = this.contacts.filter(function (contact) { return contact.country === _this.contactsCountry; });
        this.contactsDirectors = this.contacts.filter(function (contact) { return contact.jobTitle === "Safety Director"; });
        this.contactsRegionalHealthManagers = this.contactsByCountry.filter(function (contact) { return contact.jobTitle === "Regional Health & Safety Manager"; });
        this.contactsHealthSpecialist = this.contactsByCountry.filter(function (contact) { return contact.jobTitle === "Health & Safety Specialist"; });
        this.contactsOthers = this.contactsByCountry.filter(function (contact) { return (contact.jobTitle != "Safety Director" && contact.jobTitle != "Regional Health & Safety Manager" && contact.jobTitle != "Health & Safety Specialist"); });
        this.contactsForRegion = [];
        this.contactsForRegion = this.contactsForRegion.concat(this.contactsRegionalHealthManagers, this.contactsHealthSpecialist, this.contactsOthers);
        //this.contactsForRegion.push(this.contactsHealthSpecialist);
        var set = new Set();
        this.contactsDistinctRegions = this.contactsByCountry.map(function (a) { return a.region; });
        this.contactsDistinctRegions = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](new Set(this.contactsDistinctRegions));
        console.log("Curent country new Regions" + this.contactsDistinctRegions.length);
        //this.contactsDistinctRegions = this.contactsByCountry.map(a => a.region).distinct().toArray();
    };
    ContactDetailsComponent.prototype.getSharePointListData = function (query, isCD) {
        var SPAppWebUrl = decodeURIComponent(this.getQueryStringParameter("SPAppWebUrl"));
        var SPHostUrl = decodeURIComponent(this.getQueryStringParameter("SPHostUrl"));
        console.log("appweb" + SPAppWebUrl);
        var url = "";
        if (isCD == true)
            url = SPAppWebUrl + "/_api/SP.AppContextSite(@target)" + query + "&@target='" + SPHostUrl + "'";
        else
            url = SPAppWebUrl + "/_api" + query;
        console.log("Final url" + url);
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
        options.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        options.headers.append('accept', "application/json;odata=verbose");
        options.headers.append('Content-Type', "application/json;odata=verbose");
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json().d.results;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'server error'); }));
    };
    ContactDetailsComponent.prototype.getQueryStringParameter = function (param) {
        try {
            var params = (document.URL).split("?")[1].split("&");
            var strParams = "";
            for (var i = 0; i < params.length; i = i + 1) {
                var singleParam = params[i].split("=");
                if (singleParam[0] == param) {
                    return singleParam[1];
                }
            }
        }
        catch (e) {
            return null;
        }
        ;
    };
    ContactDetailsComponent.prototype.openTab = function (evt, tabName) {
        var i, tablinks;
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        //document.getElementById(tabName).style.display = "block";
        if (evt != undefined && event.currentTarget != undefined)
            evt.currentTarget.className += " active";
        else
            tablinks[0].className += " active";
        this.contactsCountry = tabName;
        this.getContactsforSelectedCountry();
    };
    ContactDetailsComponent.prototype.resizeWindow = function () {
        this.senderId = decodeURIComponent(this.getQueryStringParameter("SenderId"));
        console.log("Sender ID " + this.senderId);
        this.previousHeight = this.minHeight = document.body.clientHeight;
        console.log("Previousheight** " + this.previousHeight);
        // display the Sender Id
        var message = "<Message senderId=" + this.senderId + ">"
            + "resize(" + 100 % +"," + this.previousHeight + ")</Message>";
        window.parent.postMessage(message, "*");
    };
    ContactDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-details',
            template: __webpack_require__(/*! ./contact-details.component.html */ "./src/app/contact-details/contact-details.component.html"),
            styles: [__webpack_require__(/*! ./contact-details.component.css */ "./src/app/contact-details/contact-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Harman\Work\Development\Flynn.SPAddin.Contacts\Flynn.SPAddin.Contacts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map