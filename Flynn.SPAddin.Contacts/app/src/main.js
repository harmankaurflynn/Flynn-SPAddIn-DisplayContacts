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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-details/contact-details.component */ "./src/app/contact-details/contact-details.component.ts");





const routes = [
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
    {
        path: 'sharedservices/safety/FlynnSPAddinContacts/app/files', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    },
    {
        path: 'sharedservices/safety/FlynnSPAddinContacts/app/', component: _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailsComponent"]
    },
    {
        path: 'files', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    },
    { path: '**', component: _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Angular';
    }
    ngOnInit() {
        // document.getElementById('senderId').text(this.senderId);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-details/contact-details.component */ "./src/app/contact-details/contact-details.component.ts");








let AppModule = class AppModule {
};
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



/***/ }),

/***/ "./src/app/contact-details/contact-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/contact-details/contact-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*----------contact tabs----*/\r\n/* Style the tab content */\r\nul.tab {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #f1f1f1;\r\n}\r\n/* Float the list items side by side */\r\nul.tab li {\r\n    float: left;\r\n  }\r\n/* Style the links inside the list items */\r\nul.tab li button {\r\n      display: inline-block;\r\n      color: #0c5030;\r\n      text-align: center;\r\n      padding: 14px 16px;\r\n      text-decoration: none;\r\n      transition: 0.3s;\r\n      font-size: 19px;\r\n      border: 1px solid #ccc;\r\n    }\r\n/* Change background color of links on hover */\r\nul.tab li button:hover {\r\n        background-color: #ddd;\r\n      }\r\n/* Create an active/current tablink class */\r\nul.tab li button:focus, .active {\r\n        background-color: white;\r\n        border-bottom: none !important;\r\n      }\r\n.tabcontent {\r\n  display: none;\r\n  padding: 6px 12px;\r\n  border-top: none;\r\n  margin: 30px;\r\n}\r\n.contactdetailstabs {\r\n  width: 90%;\r\n  border: 1px solid #ccc;\r\n  height:auto;\r\n}\r\n@-webkit-keyframes fadeEffect {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fadeEffect {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n/*---end tabs--*/\r\n/*---style card*/\r\n/* entire container, keeps perspective */\r\n.card-container {\r\n  -webkit-perspective: 600px;\r\n  -o-perspective: 600px;\r\n  perspective: 600px;\r\n  margin-bottom: 30px;\r\n  margin-left: -250px;\r\n}\r\n/* flip the pane when hovered */\r\n.card-container:hover .card, .card-container.hover .card {\r\n    -webkit-transform: rotateY( 0deg );\r\n    transform: rotateY( 0deg );\r\n  }\r\n.card-container.static:hover .card, .card-container.static.hover .card {\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n/* flip speed goes here */\r\n.card {\r\n  transition: -webkit-transform .5s;\r\n  transition: transform .5s;\r\n  transition: transform .5s, -webkit-transform .5s;\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d;\r\n  position: relative;\r\n}\r\n/* hide back of pane during swap */\r\n.front, .back {\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #FFF;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n/* front pane, placed above back */\r\n.front {\r\n  z-index: 2;\r\n}\r\n/* back, initially hidden pane */\r\n.back {\r\n  -webkit-transform: rotateY( 0deg );\r\n  transform: rotateY( 0deg );\r\n  z-index: 3;\r\n}\r\n.card {\r\n  background: none repeat scroll 0 0 #FFFFFF;\r\n  border-radius: 4px;\r\n  color: #444444;\r\n}\r\n.card-container, .front, .back {\r\n  width: 100%;\r\n  height: 320px;\r\n  \r\n  border-radius: 4px;\r\n   \r\n}\r\n.card .cover {\r\n  height: 105px;\r\n  overflow: hidden;\r\n  border-radius: 4px 4px 0 0;\r\n}\r\n.card .cover img {\r\n    width: 100%;\r\n  }\r\n.card .user {\r\n  border-radius: 50%;\r\n  display: block;\r\n  height: 120px;\r\n  margin: -55px auto 0;\r\n  overflow: hidden;\r\n  width: 120px;\r\n}\r\n.card .user img {\r\n    background: none repeat scroll 0 0 #FFFFFF;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n.card .content {\r\n  background-color: rgba(0, 0, 0, 0);\r\n  box-shadow: none;\r\n  padding: 10px 20px 20px;\r\n}\r\n.card .content .main {\r\n    min-height: 160px;\r\n  }\r\n.card .back .content .main {\r\n  height: 215px;\r\n}\r\n.card .name {\r\n  font-size: 22px;\r\n  line-height: 28px;\r\n  margin: 10px 0 0;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n}\r\n.card h5 {\r\n  margin: 5px 0;\r\n  font-weight: 400;\r\n  line-height: 20px;\r\n}\r\n.card .profession {\r\n  color: #999999;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n.card .footer {\r\n  border-top: 1px solid #EEEEEE;\r\n  color: #999999;\r\n  margin: 30px 0 0;\r\n  padding: 10px 0 0;\r\n  text-align: center;\r\n}\r\n.card .footer .social-links {\r\n    font-size: 18px;\r\n  }\r\n.card .footer .social-links a {\r\n      margin: 0 7px;\r\n    }\r\n.card .header {\r\n  padding: 15px 20px;\r\n  height: 90px;\r\n}\r\n.card .motto {\r\n  border-bottom: 1px solid #EEEEEE;\r\n  color: #999999;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  padding-bottom: 10px;\r\n  text-align: center;\r\n}\r\n/*      Just for presentation        */\r\n.title {\r\n  color: #506A85;\r\n  text-align: center;\r\n  font-weight: 300;\r\n  font-size: 44px;\r\n  margin-bottom: 90px;\r\n  line-height: 90%;\r\n}\r\n.title small {\r\n    font-size: 17px;\r\n    color: #999;\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n  }\r\n.space-50 {\r\n  height: 50px;\r\n  display: block;\r\n}\r\n.space-200 {\r\n  height: 200px;\r\n  display: block;\r\n}\r\n.white-board {\r\n  background-color: #FFFFFF;\r\n  min-height: 200px;\r\n  padding: 60px 60px 20px;\r\n}\r\n.ct-heart {\r\n  color: #F74933;\r\n}\r\npre.prettyprint {\r\n  background-color: #ffffff;\r\n  border: 1px solid #999;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n  text-align: left;\r\n}\r\n.atv, .str {\r\n  color: #05AE0E;\r\n}\r\n.tag, .pln, .kwd {\r\n  color: #3472F7;\r\n}\r\n.atn {\r\n  color: #2C93FF;\r\n}\r\n.pln {\r\n  color: #333;\r\n}\r\n.com {\r\n  color: #999;\r\n}\r\n/*---end style card*/\r\n.viewrow {\r\n  list-style-type: none;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding: 2em 0;\r\n}\r\n#container {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n#left {\r\n  float: left;\r\n  width: 30%;\r\n  text-align: left;\r\n  font-size: 18px;\r\n}\r\n#center {\r\n  display: inline-block;\r\n  margin: 0 auto;\r\n  width: 100px;\r\n}\r\n#right {\r\n  width: 40%;\r\n}\r\n/*--loader*/\r\n.loader-hidden {\r\n  display:none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1kZXRhaWxzL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUM5QiwyQkFBMkI7QUFDM0I7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMEJBQTBCO0NBQzNCO0FBRUMsdUNBQXVDO0FBQ3ZDO0lBQ0UsWUFBWTtHQUNiO0FBRUMsMkNBQTJDO0FBQzNDO01BQ0Usc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLHNCQUFzQjtNQUN0QixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtLQUN4QjtBQUVDLCtDQUErQztBQUMvQztRQUNFLHVCQUF1QjtPQUN4QjtBQUVELDRDQUE0QztBQUM1QztRQUNFLHdCQUF3QjtRQUN4QiwrQkFBK0I7T0FDaEM7QUFFUDtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0NBQ2I7QUFFRDtFQUNFO0lBQ0UsV0FBVztHQUNaOztFQUVEO0lBQ0UsV0FBVztHQUNaO0NBQ0Y7QUFFRDtFQUNFO0lBQ0UsV0FBVztHQUNaOztFQUVEO0lBQ0UsV0FBVztHQUNaO0NBQ0Y7QUFFRCxpQkFBaUI7QUFFakIsaUJBQWlCO0FBQ2pCLHlDQUF5QztBQUN6QztFQUNFLDJCQUEyQjtFQUUzQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixvQkFBb0I7Q0FDckI7QUFDQyxnQ0FBZ0M7QUFDaEM7SUFDRSxtQ0FBbUM7SUFHbkMsMkJBQTJCO0dBQzVCO0FBRUQ7SUFDRSx3QkFBd0I7SUFHeEIsZ0JBQWdCO0dBQ2pCO0FBQ0gsMEJBQTBCO0FBQzFCO0VBSUUsa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixpREFBMEI7RUFDMUIscUNBQXFDO0VBR3JDLDZCQUE2QjtFQUM3QixtQkFBbUI7Q0FDcEI7QUFFRCxtQ0FBbUM7QUFDbkM7RUFDRSxvQ0FBb0M7RUFHcEMsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLHVCQUF1QjtFQUN2Qiw0Q0FBNEM7Q0FDN0M7QUFFRCxtQ0FBbUM7QUFDbkM7RUFDRSxXQUFXO0NBQ1o7QUFFRCxpQ0FBaUM7QUFDakM7RUFDRSxtQ0FBbUM7RUFHbkMsMkJBQTJCO0VBQzNCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsMkNBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYzs7RUFFZCxtQkFBbUI7O0NBRXBCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDJCQUEyQjtDQUM1QjtBQUVDO0lBQ0UsWUFBWTtHQUNiO0FBRUg7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQWE7Q0FDZDtBQUVDO0lBQ0UsMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixhQUFhO0dBQ2Q7QUFFSDtFQUNFLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsd0JBQXdCO0NBQ3pCO0FBRUM7SUFDRSxrQkFBa0I7R0FDbkI7QUFFSDtFQUNFLGNBQWM7Q0FDZjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDJCQUEyQjtDQUM1QjtBQUVEO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7QUFFRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCO0FBRUM7SUFDRSxnQkFBZ0I7R0FDakI7QUFFQztNQUNFLGNBQWM7S0FDZjtBQUVMO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7Q0FDcEI7QUFFRCx1Q0FBdUM7QUFFdkM7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjtBQUVDO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsVUFBVTtHQUNYO0FBRUg7RUFDRSxhQUFhO0VBQ2IsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsY0FBYztFQUNkLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsd0JBQXdCO0NBQ3pCO0FBRUQ7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxZQUFZO0NBQ2I7QUFFRDtFQUNFLFlBQVk7Q0FDYjtBQUVELHFCQUFxQjtBQUVyQjtFQUNFLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsV0FBVztDQUNaO0FBRUQsWUFBWTtBQUNaO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1kZXRhaWxzL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tY29udGFjdCB0YWJzLS0tLSovXHJcbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xyXG51bC50YWIge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiAgLyogRmxvYXQgdGhlIGxpc3QgaXRlbXMgc2lkZSBieSBzaWRlICovXHJcbiAgdWwudGFiIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgICAvKiBTdHlsZSB0aGUgbGlua3MgaW5zaWRlIHRoZSBsaXN0IGl0ZW1zICovXHJcbiAgICB1bC50YWIgbGkgYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjb2xvcjogIzBjNTAzMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG5cclxuICAgICAgLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgbGlua3Mgb24gaG92ZXIgKi9cclxuICAgICAgdWwudGFiIGxpIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cclxuICAgICAgdWwudGFiIGxpIGJ1dHRvbjpmb2N1cywgLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4udGFiY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLmNvbnRhY3RkZXRhaWxzdGFicyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGhlaWdodDphdXRvO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUVmZmVjdCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUVmZmVjdCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi8qLS0tZW5kIHRhYnMtLSovXHJcblxyXG4vKi0tLXN0eWxlIGNhcmQqL1xyXG4vKiBlbnRpcmUgY29udGFpbmVyLCBrZWVwcyBwZXJzcGVjdGl2ZSAqL1xyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gIC1tb3otcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gIC1vLXBlcnNwZWN0aXZlOiA2MDBweDtcclxuICBwZXJzcGVjdGl2ZTogNjAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG59XHJcbiAgLyogZmxpcCB0aGUgcGFuZSB3aGVuIGhvdmVyZWQgKi9cclxuICAuY2FyZC1jb250YWluZXI6aG92ZXIgLmNhcmQsIC5jYXJkLWNvbnRhaW5lci5ob3ZlciAuY2FyZCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSggMGRlZyApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoIDBkZWcgKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSggMGRlZyApO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKCAwZGVnICk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIuc3RhdGljOmhvdmVyIC5jYXJkLCAuY2FyZC1jb250YWluZXIuc3RhdGljLmhvdmVyIC5jYXJkIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtby10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4vKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xyXG4uY2FyZCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAuNXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIC41cztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLW8tdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyogaGlkZSBiYWNrIG9mIHBhbmUgZHVyaW5nIHN3YXAgKi9cclxuLmZyb250LCAuYmFjayB7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLW8tYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG59XHJcblxyXG4vKiBmcm9udCBwYW5lLCBwbGFjZWQgYWJvdmUgYmFjayAqL1xyXG4uZnJvbnQge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi8qIGJhY2ssIGluaXRpYWxseSBoaWRkZW4gcGFuZSAqL1xyXG4uYmFjayB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoIDBkZWcgKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSggMGRlZyApO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWSggMGRlZyApO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSggMGRlZyApO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwICNGRkZGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjNDQ0NDQ0O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIsIC5mcm9udCwgLmJhY2sge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzIwcHg7XHJcbiAgXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICBcclxufVxyXG5cclxuLmNhcmQgLmNvdmVyIHtcclxuICBoZWlnaHQ6IDEwNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbn1cclxuXHJcbiAgLmNhcmQgLmNvdmVyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4uY2FyZCAudXNlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgbWFyZ2luOiAtNTVweCBhdXRvIDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbiAgLmNhcmQgLnVzZXIgaW1nIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgI0ZGRkZGRjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbi5jYXJkIC5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbiAgLmNhcmQgLmNvbnRlbnQgLm1haW4ge1xyXG4gICAgbWluLWhlaWdodDogMTYwcHg7XHJcbiAgfVxyXG5cclxuLmNhcmQgLmJhY2sgLmNvbnRlbnQgLm1haW4ge1xyXG4gIGhlaWdodDogMjE1cHg7XHJcbn1cclxuXHJcbi5jYXJkIC5uYW1lIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5jYXJkIGg1IHtcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIC5wcm9mZXNzaW9uIHtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNhcmQgLmZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFRUVFRUU7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgbWFyZ2luOiAzMHB4IDAgMDtcclxuICBwYWRkaW5nOiAxMHB4IDAgMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgLmNhcmQgLmZvb3RlciAuc29jaWFsLWxpbmtzIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gICAgLmNhcmQgLmZvb3RlciAuc29jaWFsLWxpbmtzIGEge1xyXG4gICAgICBtYXJnaW46IDAgN3B4O1xyXG4gICAgfVxyXG5cclxuLmNhcmQgLmhlYWRlciB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxufVxyXG5cclxuLmNhcmQgLm1vdHRvIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qICAgICAgSnVzdCBmb3IgcHJlc2VudGF0aW9uICAgICAgICAqL1xyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzUwNkE4NTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDQ0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcclxuICBsaW5lLWhlaWdodDogOTAlO1xyXG59XHJcblxyXG4gIC50aXRsZSBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuLnNwYWNlLTUwIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zcGFjZS0yMDAge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi53aGl0ZS1ib2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBwYWRkaW5nOiA2MHB4IDYwcHggMjBweDtcclxufVxyXG5cclxuLmN0LWhlYXJ0IHtcclxuICBjb2xvcjogI0Y3NDkzMztcclxufVxyXG5cclxucHJlLnByZXR0eXByaW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hdHYsIC5zdHIge1xyXG4gIGNvbG9yOiAjMDVBRTBFO1xyXG59XHJcblxyXG4udGFnLCAucGxuLCAua3dkIHtcclxuICBjb2xvcjogIzM0NzJGNztcclxufVxyXG5cclxuLmF0biB7XHJcbiAgY29sb3I6ICMyQzkzRkY7XHJcbn1cclxuXHJcbi5wbG4ge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uY29tIHtcclxuICBjb2xvcjogIzk5OTtcclxufSBcclxuXHJcbi8qLS0tZW5kIHN0eWxlIGNhcmQqL1xyXG5cclxuLnZpZXdyb3cge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBwYWRkaW5nOiAyZW0gMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDMwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2NlbnRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuI3JpZ2h0IHtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4vKi0tbG9hZGVyKi9cclxuLmxvYWRlci1oaWRkZW4ge1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/contact-details/contact-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/contact-details/contact-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<link href=\"https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n\r\n\r\n\r\n  \r\n  <div style=\"margin: 0px 35px auto;\" *ngIf=\"contactsDirectors\">\r\n    <div style=\"padding:20px;font-size:22px;\">\r\n\r\n      <b> Safety Director</b>\r\n    </div>\r\n    <div class=\"container\" *ngFor=\"let contact of contactsDirectors\" style=\"width:320px; height:400px !important;margin-left:50px; display:inline-block;\">\r\n\r\n      <div class=\"row\" style=\"margin-left:200px; margin-bottom:5px;\">\r\n        <div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4 col-sm-4\">\r\n              <div class=\"card-container\" style=\"width:320px\">\r\n                <div class=\"card\">\r\n                  <div class=\"front\" style=\"height:370px !important;\">\r\n\r\n                    <div class=\"cover\">\r\n                      <img src=\"../app/images/greenBackGrad.jpg\" />\r\n                     \r\n                    </div>\r\n                    <div class=\"user\">\r\n                      <img class=\"img-circle\" [src]=\"contact.photo\">\r\n                    </div>\r\n                    <div class=\"content\">\r\n                      <div class=\"main\">\r\n                        <h3 class=\"name\"><div><span style=\"color:#003300\">{{contact.name}}</span></div></h3>\r\n                        <p class=\"profession\"><span style=\"color:#003300\">{{contact.jobTitle}} , {{contact.country}}</span></p>\r\n                        <h5><i class=\"fa fa-phone\" style=\"padding-right:3px\"></i><span style=\"color:#003300\">{{contact.businessPhoneNo}}</span></h5>\r\n                        <h5><i class=\"fa fa-mobile-phone\" style=\"padding-right:3px\"></i><span style=\"color:#003300\">{{contact.mobilePhone}}</span></h5>\r\n                        <h5><i class=\"fa fa-envelope\" style=\"padding-right:3px\"></i><span style=\"color:#003300\">{{contact.emailID}}</span></h5>\r\n\r\n                      </div>\r\n                      \r\n                    </div>\r\n                  </div> <!-- end front panel-->\r\n                </div> <!-- end back panel -->\r\n              </div> <!-- end card -->\r\n            </div> <!-- end card-container -->\r\n          </div> <!-- end col sm 4 -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div style=\"margin: 0px 35px auto;\" >\r\n  <div style=\"padding:20px;font-size:22px;\">\r\n\r\n    <b> Safety Contacts</b>\r\n  </div>\r\n  <div class=\"contactdetailstabs\" id=\"contactdetailstabs\">\r\n    \r\n    <div [class.loader-hidden]=\"!loaderShow\">\r\n     \r\n      <img src=\"../app/images/Loading.gif\" />\"\r\n    </div>\r\n    <ul class=\"tab\">\r\n      <li>\r\n        <button class=\"tablinks active\" id=\"defaultOpen\" (click)=\"openTab($event, 'Canada')\">Canada</button>\r\n      </li>\r\n      <li>\r\n        <button class=\"tablinks\" (click)=\"openTab($event, 'US')\">US</button>\r\n      </li>\r\n    </ul>\r\n    <div class=\"tabcontent\" id=\"canada\" style=\"padding-left: 20px; display: block;\">\r\n\r\n\r\n      <div class=\"region\" *ngFor=\"let region of contactsDistinctRegions; let i=index\">\r\n\r\n        <div style=\"padding:20px;font-size:18px;\">\r\n\r\n          <b> {{region}}</b>\r\n        </div>\r\n        <div>\r\n\r\n          <div class=\"container\" *ngFor=\"let contact of contactsForRegion | matchesRegion : region\" style=\"width:320px; height:400px !important;margin-left:50px; display:inline-block;\">\r\n\r\n            <div class=\"row\" style=\"margin-left:200px; margin-bottom:5px;\">\r\n              <div>\r\n\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"col-md-4 col-sm-4\">\r\n                    <div class=\"card-container\" style=\"width:320px\">\r\n                      <div class=\"card\">\r\n                        <div class=\"front\" style=\"height:370px !important;\">\r\n\r\n                          <div class=\"cover\">\r\n                            <img src=\"../app/images/greenBackGrad.jpg\" />\r\n                          </div>\r\n                          <div class=\"user\">\r\n                            <img class=\"img-circle\" [src]=\"contact.photo\">\r\n                          </div>\r\n                          <div class=\"content\">\r\n                            <div class=\"main\">\r\n                              <h3 class=\"name\"><div><span style=\"color:#003300\">{{contact.name}}</span></div></h3>\r\n                              <p class=\"profession\"><span style=\"color:#003300\">{{contact.jobTitle}} , {{contact.city}}</span></p>\r\n                              <h5><i class=\"fa fa-phone\" style=\"padding-right:3px\"></i><span style=\"color:#003300\">{{contact.businessPhoneNo}}</span></h5>\r\n                              <h5><i class=\"fa fa-mobile-phone\" style=\"padding-right:3px\"></i><span style=\"color:#003300\">{{contact.mobilePhone}}</span></h5>\r\n                              <h5><i class=\"fa fa-envelope\" style=\"padding-right:3px\"></i><span style=\"color:#003300\">{{contact.emailID}}</span></h5>\r\n\r\n                            </div>\r\n\r\n\r\n                          </div>\r\n                        </div> <!-- end front panel-->\r\n                      </div> <!-- end back panel -->\r\n                    </div> <!-- end card -->\r\n                  </div> <!-- end card-container -->\r\n                </div> <!-- end col sm 4 -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div> <!-- end card -->\r\n    <!--</div>--> <!-- end div -->\r\n  </div>\r\n</div>\r\n\r\n<div class='form-text error' *ngIf=\"errorMessage\">\r\n {{errorMessage}}\r\n</div>\r\n\r\n       \r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_distinct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/distinct */ "./node_modules/rxjs-compat/_esm2015/add/operator/distinct.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let MatchesRegionPipe = class MatchesRegionPipe {
    transform(items, region) {
        return items.filter(item => item.region === region);
    }
};
MatchesRegionPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'matchesRegion'
    })
], MatchesRegionPipe);

let ContactDetailsComponent = class ContactDetailsComponent {
    constructor(http) {
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
    ngOnInit() {
        let contactsList = this.GetData();
        contactsList.then((success) => {
            this.loaderShow = false;
            let element = document.getElementById('defaultOpen');
            element.click();
            console.log("success");
            let heoght = document.getElementById('contactdetailstabs').clientHeight;
            this.resizeWindow();
            console.log("**height" + heoght);
        }, (error) => {
            this.loaderShow = false;
            this.errorMessage = error;
        });
    }
    GetData() {
        let promise = new Promise((resolve, reject) => {
            let listname = decodeURIComponent(this.getQueryStringParameter("ListName"));
            if (listname && listname != undefined && listname != "undefined") {
                this.loaderShow = true;
                this.getSharePointListData("/web/lists/getbytitle('" + listname + "')/items?$orderby = Title", true).subscribe(response => {
                    var picture;
                    this.contacts = [];
                    const contents = response;
                    if (contents) {
                        contents.forEach((content) => {
                            this.contacts.push({
                                name: content.Title, emailID: content.Email, jobTitle: content.JobTitle, country: content.Country, businessPhoneNo: content.WorkPhone,
                                mobilePhone: content.HomePhone, region: content.Region, photo: content.Photo, city: content.WorkCity
                            }); // or self.messages.push(m) - if you used self
                            console.log("entry");
                        });
                    }
                    console.log("Contacts" + this.contacts.length);
                    document.getElementById('defaultOpen').click;
                    resolve(this.contacts);
                });
            }
            else {
                reject("Enter List Name in webpart properties to display contacts");
            }
        });
        return promise;
    }
    getContactsforSelectedCountry() {
        console.log("Current Country" + this.contactsCountry);
        this.contactsDistinctRegions = [];
        this.contactsByCountry = [];
        this.contactsByCountry = this.contacts.filter(contact => contact.country === this.contactsCountry);
        this.contactsDirectors = this.contacts.filter(contact => contact.jobTitle === "Safety Director");
        this.contactsRegionalHealthManagers = this.contactsByCountry.filter(contact => contact.jobTitle === "Regional Health & Safety Manager");
        this.contactsHealthSpecialist = this.contactsByCountry.filter(contact => contact.jobTitle === "Health & Safety Specialist");
        this.contactsForRegion = [];
        this.contactsForRegion = this.contactsForRegion.concat(this.contactsRegionalHealthManagers, this.contactsHealthSpecialist);
        //this.contactsForRegion.push(this.contactsHealthSpecialist);
        let set = new Set();
        this.contactsDistinctRegions = this.contactsByCountry.map(a => a.region);
        this.contactsDistinctRegions = [...new Set(this.contactsDistinctRegions)];
        console.log("Curent country Regions" + this.contactsDistinctRegions.length);
        //this.contactsDistinctRegions = this.contactsByCountry.map(a => a.region).distinct().toArray();
    }
    getSharePointListData(query, isCD) {
        let SPAppWebUrl = decodeURIComponent(this.getQueryStringParameter("SPAppWebUrl"));
        let SPHostUrl = decodeURIComponent(this.getQueryStringParameter("SPHostUrl"));
        console.log("appweb" + SPAppWebUrl);
        let url = "";
        if (isCD == true)
            url = SPAppWebUrl + "/_api/SP.AppContextSite(@target)" + query + "&@target='" + SPHostUrl + "'";
        else
            url = SPAppWebUrl + "/_api" + query;
        console.log("Final url" + url);
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
        options.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        options.headers.append('accept', "application/json;odata=verbose");
        options.headers.append('Content-Type', "application/json;odata=verbose");
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            return res.json().d.results;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'server error')));
    }
    getQueryStringParameter(param) {
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
    }
    openTab(evt, tabName) {
        var i, tablinks;
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        //document.getElementById(tabName).style.display = "block";
        if (evt.currentTarget != undefined)
            evt.currentTarget.className += " active";
        else
            tablinks[0].className += " active";
        this.contactsCountry = tabName;
        this.getContactsforSelectedCountry();
    }
    resizeWindow() {
        this.senderId = decodeURIComponent(this.getQueryStringParameter("SenderId"));
        console.log("Sender ID " + this.senderId);
        this.previousHeight = this.minHeight = document.body.clientHeight;
        console.log("Previousheight** " + this.previousHeight);
        // display the Sender Id
        var message = "<Message senderId=" + this.senderId + ">"
            + "resize(" + 100 % +"," + this.previousHeight + ")</Message>";
        window.parent.postMessage(message, "*");
    }
};
ContactDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-details',
        template: __webpack_require__(/*! ./contact-details.component.html */ "./src/app/contact-details/contact-details.component.html"),
        styles: [__webpack_require__(/*! ./contact-details.component.css */ "./src/app/contact-details/contact-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], ContactDetailsComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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