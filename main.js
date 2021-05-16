(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! O:\Career\Virtual Pursuite\Website\Source Code\vp-site\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AppComponent {
    constructor() {
        this.title = 'vp-site';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 102, vars: 0, consts: [["name", "description", "content", "'Viswa Kala Kendra' means the 'World Centre of Arts'. Moreover, it is a center for learning the world-famous classics:   Yoga, Bharathanatyam, and Karnatic Music perfectly and other forms of Indian classical dances, folks, contemporary dances, and Music. There are Three levels; such as the Basic, Moderate and Advanced levels of learning which will have the final concerts and be certified."], ["name", "keywords", "content", "bharathanatyam, karnatic music, yoga, folk, contemporary dances, fusion dances, classical dances,classical music,indian yoga, indian classical dances,indian classical music"], ["rel", "stylesheet", "type", "text/css", "href", "https://fonts.googleapis.com/css?family=Poppins"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [2, "width", "100%", "overflow", "hidden"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["aria-current", "page", "href", "#about", 1, "nav-link"], ["href", "#wedo", 1, "nav-link"], ["href", "#tech", 1, "nav-link"], ["href", "#footer", 1, "nav-link"], [1, "row"], [1, "col-12", "first-div"], ["src", "../assets/man.png", 1, "bg-man"], [1, "top-left"], ["data-title", "THINK. DESIGN. CREATE.", 1, "text"], [1, "row", "about"], ["id", "about", 1, "div-head", "text-center"], [1, "col-md-6", "col-sm-12", "descr"], [1, "col-md-6"], ["src", "../assets/website builder1.png", 1, "about-image", "mx-auto", "d-block"], ["id", "wedo", 1, "col-md-12", "col-sm-12", "we-do"], [1, "row", "justify-content-center"], [1, "div-head", "text-center"], [1, "col-md-4", "col-sm-12", "mt-5", "d-flex", "justify-content-center"], [1, "card", "d-flex", "text-center", "btn"], ["src", "../assets/online tution1.png", "alt", "", 2, "width", "255px", "height", "auto"], [1, "col-md-4", "col-sm-12", "mt-5", "d-flex", "justify-content-center", "btn"], [1, "card", "text-center"], ["src", "../assets/chat bot1.png", "alt", "", 2, "width", "255px", "height", "auto"], ["src", "../assets/website builder1.png", "alt", "", 2, "width", "255px", "height", "auto"], ["id", "tech", 1, "row", "justify-content-justify", "tech"], [1, "div-tech", "text-center"], [1, "col-md-3", "col-sm-12", "mt-3", "d-flex", "justify-content-center", "hvrbox"], ["src", "../assets/angular.png", "alt", "Angular", 2, "width", "100px", "height", "auto"], [1, "col-md-3", "col-sm-12", "mt-2", "d-flex", "justify-content-center"], ["src", "../assets/flutter.png", "alt", "Flutter", 2, "width", "100px", "height", "auto"], ["src", "../assets/Laravel.svg.png", "alt", "Laravel", 2, "width", "100px", "height", "auto"], ["src", "../assets/strapi.png", "alt", "strapi", 2, "width", "100px", "height", "auto"], [1, "col-md-5", "col-sm-12", "d-flex", "mt-4"], [1, "mapouter"], [1, "gmap_canvas"], ["width", "380", "height", "423", "id", "gmap_canvas", "src", "https://maps.google.com/maps?q=kalpetta%20673121%20ambilery%20&t=&z=13&ie=UTF8&iwloc=&output=embed", "frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0"], ["href", "https://soap2day-to.com"], ["href", "https://www.embedgooglemap.net"], [1, "col-md-5", "col-sm-12", "contact"], [1, "address"], [1, "fa", "fa-home", 2, "margin-right", "8px"], [1, "fa", "fa-phone", 2, "margin-right", "8px"], [1, "fa", "fa-envelope", 2, "margin-right", "8px"], ["id", "footer", 1, "col-12", "d-flex", "justify-content-center", "mt-4", "pt-3", "text-center", "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "VIRTUAL PURSUIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ABOUT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "TECHNOOGY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " THINK.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "DESIGN.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "CREATE. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "- About Us -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra tincidunt sem. Sed in augu non urna sollicitudin porta in in purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent accumsan pretium ante, vel viverra justo consectetur eget. Sed lobortis at mi a faucibus. Nunc fringilla nibh at purus placerat, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "- What We Do -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Online Tution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "ChatBot Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Website Creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "- Technology We Use -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "- Contact Us -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "iframe", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "soap2day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "google map on website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Next to MKC Agencies Ambilery Kalpetta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "7483714436, 9048219156");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "virtualpursuit369@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Virtual Pursuit Pvt.Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " \u00A9 VIRTUAL PURSUIT, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.body[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  width: 100%;\n  overflow-x: hidden;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  margin-left: 40rem;\n  font-family: poppins;\n  color: #fff !important;\n}\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-family: poppins;\n  color: #fff;\n  padding: 20px;\n  font-weight: 300;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #000 !important;\n}\n.bg-main[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n.bg-man[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 40rem;\n  margin-top: 162px;\n  height: 33rem;\n}\n.navbar[_ngcontent-%COMP%] {\n  background-color: #f8f9fa00 !important;\n  position: absolute !important;\n  z-index: 5;\n}\n.first-div[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);\n}\n.about[_ngcontent-%COMP%] {\n  margin-top: -3rem;\n  background-color: #efeff8;\n}\n.we-do[_ngcontent-%COMP%] {\n  background-color: #fdfdfd;\n  background-image: url('base.png');\n  background-position-x: 4px;\n  background-position-y: -185px;\n  padding-bottom: 60px;\n  background-size: 3px;\n}\n.tech[_ngcontent-%COMP%] {\n  background-color: #efeff8;\n  padding-bottom: 60px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  font-family: poppins;\n  width: 16rem;\n  background-color: #eff3f7;\n  color: #3f79e5;\n}\n.footer[_ngcontent-%COMP%] {\n  background-color: #3f79e5;\n  font-size: 12px;\n  color: #fff;\n}\n.top-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10rem;\n  right: 55rem;\n  font-size: 5rem;\n  color: #fff;\n  font-family: poppins;\n}\n.about-image[_ngcontent-%COMP%] {\n  height: 460px;\n}\n.div-head[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-size: 25px;\n  color: #3f79e5;\n  font-family: poppins;\n  margin-top: 115px;\n}\n.div-tech[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-size: 25px;\n  color: #3f79e5;\n  font-family: poppins;\n  margin-top: 60px;\n}\n.descr[_ngcontent-%COMP%] {\n  justify-content: center !important;\n  text-align: center;\n  margin-top: 7rem;\n  color: #3f79e5;\n  font-size: 20px;\n  font-family: poppins;\n  padding-left: 60px;\n}\n.address[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 20px;\n  font-weight: 500;\n  color: #458fe9;\n  font-family: \"Poppins\";\n  margin-bottom: 15px;\n}\n.div-contact[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-left: 200px;\n}\n.text[_ngcontent-%COMP%] {\n  color: transparent;\n  font-size: 6rem;\n  display: inline-block;\n  border-radius: 3px;\n  background-color: #1d3557;\n  position: relative;\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.text[_ngcontent-%COMP%]:before {\n  content: attr(data-title);\n  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  background-clip: text;\n  -webkit-background-clip: text;\n  transition: all 1s ease-in-out;\n  animation: text-animation 3s infinite;\n}\n@keyframes text-animation {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\nbody[_ngcontent-%COMP%] {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n@keyframes fadeInAnimation {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  \n  transition: transform 250ms;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n}\n@media only screen and (max-width: 600px) {\n  .body[_ngcontent-%COMP%] {\n    width: -webkit-fit-content !important;\n    width: -moz-fit-content !important;\n    width: fit-content !important;\n  }\n\n  .bg-man[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .about-image[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .top-left[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10rem;\n    left: 2rem;\n    right: 55rem;\n    font-size: 5rem;\n    color: #fff;\n    font-family: poppins;\n  }\n\n  .descr[_ngcontent-%COMP%] {\n    justify-content: center !important;\n    text-align: center;\n    margin-top: 3rem;\n    color: #3f79e5;\n    font-size: 20px;\n    font-family: poppins;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUY7QUFBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUdGO0FBQUE7RUFDRSxXQUFBO0FBR0Y7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUlGO0FBREE7RUFDRSxzQkFBQTtBQUlGO0FBREE7RUFDRSxzQkFBQTtBQUlGO0FBRkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUtGO0FBRkE7RUFDRSxrQkFBQTtFQUdBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBR0Y7QUFDQTtFQUNFLHNDQUFBO0VBQ0EsNkJBQUE7RUFJQSxVQUFBO0FBREY7QUFHQTtFQUNFLGFBQUE7RUFJQSw0RkFBQTtBQUhGO0FBS0E7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBRkY7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQURGO0FBR0E7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0FBQUY7QUFFQTtFQUNFLG1CQUFBO0VBR0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBREY7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFBRjtBQUVBO0VBQ0UsYUFBQTtBQUNGO0FBRUE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0E7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQUE7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQUFBO0VBQ0UsbUJBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUdKO0FBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQUdGO0FBRkU7RUFDRSx5QkFBQTtFQUVBLG1FQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0FBR0o7QUFDQTtFQUNBO0lBQ0UsUUFBQTtFQUVBO0VBQUY7SUFDRSxXQUFBO0VBRUE7RUFBRjtJQUNFLFFBQUE7RUFFQTtBQUNGO0FBRUE7RUFDRSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFBRjtBQUVBO0VBQ0U7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtBQUNGO0FBSUE7RUFDRTs7O0dBQUE7RUFJQSwyQkFBQTtBQUZGO0FBS0E7RUFDRSw0QkFBQTtBQUZGO0FBTUE7RUFFRTtJQUNFLHFDQUFBO0lBQUEsa0NBQUE7SUFBQSw2QkFBQTtFQUpGOztFQU9EO0lBQ0Usd0JBQUE7RUFKRDs7RUFPQTtJQUNDLHdCQUFBO0VBSkQ7O0VBT0E7SUFDRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7RUFKRjs7RUF3QkE7SUFDRSxrQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQXJCRjs7RUF1QkE7SUFDQSxlQUFBO0VBcEJBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJvZHkge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLm5hdmJhci1uYXYge1xuICBtYXJnaW4tbGVmdDogNDByZW07XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LWZhbWlseTogcG9wcGlucztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1tYWluIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5iZy1tYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA0MHJlbTtcbiAgbWFyZ2luLXRvcDogMTYycHg7XG4gIGhlaWdodDogMzNyZW07XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhMDAgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5maXJzdC1kaXYge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMzZDMzOTMgMCUsICMyYjc2YjkgMzclLCAjMmNhY2QxIDY1JSwgIzM1ZWI5MyAxMDAlKTtcbn1cblxuLmFib3V0IHtcbiAgbWFyZ2luLXRvcDogLTNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZjg7XG59XG5cbi53ZS1kbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvYmFzZS5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDRweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMTg1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDNweDtcbn1cblxuLnRlY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmY4O1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBmb250LWZhbWlseTogcG9wcGlucztcbiAgd2lkdGg6IDE2cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmM2Y3O1xuICBjb2xvcjogIzNmNzllNTtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjc5ZTU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b3AtbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHJlbTtcbiAgcmlnaHQ6IDU1cmVtO1xuICBmb250LXNpemU6IDVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogcG9wcGlucztcbn1cblxuLmFib3V0LWltYWdlIHtcbiAgaGVpZ2h0OiA0NjBweDtcbn1cblxuLmRpdi1oZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMzZjc5ZTU7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBtYXJnaW4tdG9wOiAxMTVweDtcbn1cblxuLmRpdi10ZWNoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMzZjc5ZTU7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4uZGVzY3Ige1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDdyZW07XG4gIGNvbG9yOiAjM2Y3OWU1O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG5cbi5hZGRyZXNzIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0NThmZTk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRpdi1jb250YWN0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMzU1NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xufVxuLnRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ExOGNkMSAwJSwgI2ZiYzJlYiAxMDAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogdGV4dC1hbmltYXRpb24gM3MgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgdGV4dC1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxufVxuYm9keSB7XG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIGVhc2UgM3M7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5idG4ge1xuICAvKlxuICAgIEFsbCBvZiB0aGUgYmFzZSBzdHlsZXMgaGF2ZVxuICAgIG1vdmVkIHRvIHRoZSDigJxDU1PigJ0gdGFiIGFib3ZlLlxuICAqL1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXM7XG59XG5cbi5idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5ib2R5IHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5iZy1tYW4ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hYm91dC1pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRvcC1sZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHJlbTtcbiAgICBsZWZ0OiAycmVtO1xuICAgIHJpZ2h0OiA1NXJlbTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XG4gIH1cblxuICAuZGVzY3Ige1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgY29sb3I6ICMzZjc5ZTU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxufSJdfQ== */", ".mapouter[_ngcontent-%COMP%] {\n                  position: relative;\n                  text-align: right;\n                  height: 423px;\n                  width: 380px;\n                }", ".gmap_canvas[_ngcontent-%COMP%] {\n                  overflow: hidden;\n                  background: none !important;\n                  height: 423px;\n                  width: 380px;\n                }"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map