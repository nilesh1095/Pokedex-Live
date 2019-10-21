(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/details-page/details-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details-page/details-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 mb-5\" *ngIf=\"isDataTrue\">\n  <div class=\"col\">\n    <div class=\"card shadow-sm\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"col-5\">\n            <h5 class=\"text-capitalize\">{{pokemonName}}</h5>\n          </div>\n          <div class=\"col-7\">\n            <div class=\"float-right\" *ngFor=\"let type of types\">\n              <span class=\"badge badge-primary badge-pill mr-1\"\n                [ngStyle]=\"{'backgroundColor':type.color}\">{{type.name}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-3\">\n            <img src=\"{{imageUrl}}\"\n              alt=\"{{pokemonName}}\" class=\"card-img-top rounded mx-auto mt-2\">\n          </div>\n          <div class=\"col-md-9\">\n            <h4 class=\"mx-auto text-capitalize\">{{pokemonName}}</h4>\n            <div class=\"row align-items-center\">\n              <div class=\"col-12 col-md-3\">\n                HP\n              </div>\n              <div class=\"col-12 col-md-9\">\n                <div class=\"progress\">\n                  <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" [ngStyle]=\"{'width.%': hp}\" aria-valuenow=\"25\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <small>{{hp}}%</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row align-items-center\">\n              <div class=\"col-12 col-md-3\">\n                Attack\n              </div>\n              <div class=\"col-12 col-md-9\">\n                <div class=\"progress\">\n                  <div class=\"progress-bar  progress-bar-striped bg-danger progress-bar-animated\" role=\"progressbar\" [ngStyle]=\"{'width.%': attack}\" aria-valuenow=\"25\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <small>{{attack}}%</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row align-items-center\">\n              <div class=\"col-12 col-md-3\">\n                Defence\n              </div>\n              <div class=\"col-12 col-md-9\">\n                <div class=\"progress\">\n                  <div class=\"progress-bar progress-bar-striped bg-success progress-bar-animated\" role=\"progressbar\" [ngStyle]=\"{'width.%': defence}\" aria-valuenow=\"25\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <small>{{defence}}%</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row align-items-center\">\n              <div class=\"col-12 col-md-3\">\n                Speed\n              </div>\n              <div class=\"col-12 col-md-9\">\n                <div class=\"progress\">\n                  <div class=\"progress-bar progress-bar-striped bg-info progress-bar-animated \" role=\"progressbar\" [ngStyle]=\"{'width.%': speed}\" aria-valuenow=\"25\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <small>{{speed}}%</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row align-items-center\">\n              <div class=\"col-12 col-md-3\">\n                Special Attack\n              </div>\n              <div class=\"col-12 col-md-9\">\n                <div class=\"progress\">\n                  <div class=\"progress-bar progress-bar-striped bg-warning progress-bar-animated\" role=\"progressbar\" [ngStyle]=\"{'width.%': specialAttack}\" aria-valuenow=\"25\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <small>{{specialAttack}}%</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row align-items-center\">\n              <div class=\"col-12 col-md-3\">\n                Special Defence\n              </div>\n              <div class=\"col-12 col-md-9\">\n                <div class=\"progress\">\n                  <div class=\"progress-bar progress-bar-striped bg-success progress-bar-animated\" role=\"progressbar\" [ngStyle]=\"{'width.%': specialDefence}\"\n                    aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <small>{{specialDefence}}%</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-2\">\n          <div class=\"col\">\n            <p class=\"p-2 font-weight-bold\">{{description}}</p>\n          </div>\n        </div>\n      </div>\n      <hr />\n      <div class=\"card-body\">\n        <h5 class=\"card-title text-center\">Profile</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6 class=\"float-right\">\n                  Height:\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-left\">\n                  {{height}} ft.\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-right\">\n                  Weight:\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-left\">\n                  {{weight}} lbs.\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-right\">\n                  Growth-Rate:\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-left text-capitalize\">\n                  {{growthRate}}\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-right\">\n                  Capture-Rate:\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"progress\">\n                  <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" [ngStyle]=\"{'width.%': captureRate}\" aria-valuenow=\"25\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <small>{{captureRate}}%</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6 class=\"float-right\">\n                  Egg Group:\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-left text-capitalize\">\n                  {{eggGroups}}\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-right\">\n                  Moves:\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-left\">\n                  {{this.moves}}\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-right \">\n                  Abilities:\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-left text-capitalize\">\n                  {{abilities}}\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"float-right\">\n                  Happiness:\n                </h6>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"progress\">\n                  <div class=\"progress-bar progress-bar-striped bg-success progress-bar-animated\" role=\"progressbar\" [ngStyle]=\"{'width.%': happiness}\" aria-valuenow=\"25\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <small>{{happiness}}%</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-10 container\">\n    <h3>{{errorMessage}}</h3>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <header>\n    <div class=\"collapse\" id=\"navbarHeader\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-8 col-md-7 py-4\">\n            <h4 class=\"text-white\">About</h4>\n            <p class=\"about\">{{aboutText}}</p>\n          </div>\n          <div class=\"col-sm-4 offset-md-1 py-4\">\n            <h4 class=\"text-white\">Contact</h4>\n            <ul class=\"list-unstyled\">\n              <li><a href=\"#\" class=\"text-white\">Follow on Twitter</a></li>\n              <li><a href=\"#\" class=\"text-white\">Like on Facebook</a></li>\n              <li><a href=\"#\" class=\"text-white\">Email me</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"navbar navbar-dark shadow-sm\">\n      <div class=\"container d-flex justify-content-between\">\n        <a routerLink=\"/\" class=\"navbar-brand d-flex align-items-center\">\n          <img src=\"../../assets/pokemon-icon-png-3.jpg\" width=\"50\" height=\"50\" alt=\"\">\n        </a>\n        <form class=\"form-inline mt-2 mt-md-0\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" ngModel\n            name=\"pokemonName\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarHeader\"\n          aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </div>\n    </div>\n  </header>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-page/description/description.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-page/description/description.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading\">Welcome to Pokedéx</h1>\n    <p class=\"lead text-muted\">{{bannerText}}</p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-description\" *ngIf=\"isDescriptionShown\">\n  <button type=\"button\" (click)=\"onCloseClicked()\" class=\"close\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <app-description></app-description>\n</div>\n<div class=\"album mt-5 bg-light\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <app-pokemon-container \n            class=\"col-md-4\" \n            *ngFor=\"let pokemon of pokemonData\" \n            [pokemon]=pokemon>\n        </app-pokemon-container>\n    </div>\n  </div>\n</div>\n<nav aria-label=\"Page navigation example \">\n    <div class=\"container d-flex mb-5 justify-content-between\">\n        <div class=\"page-item\" (click) =\"onPreviousClicked()\" [ngClass] =\"{active : isPreviousActive}\">\n            <a class=\"page-link\" tabindex=\"-1\">Previous</a>\n        </div>\n        <div class=\"page-item\" (click)=\"onNextClicked()\" [ngClass] =\"{active : isNextActive}\" >\n            <a class=\"page-link\">Next</a>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-page/pokemon-container/pokemon-container.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-page/pokemon-container/pokemon-container.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"card mb-4 shadow-sm\">\n    <img src=\"{{imageUrl}}\" class=\"bd-placeholder-img card-img-top\"  width=\"100%\" height=\"225\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"card-text text-capitalize font-weight-bold\">{{pokemon.name}}</p>\n      <div class=\" align-items-center\">\n        <div class=\"btn-group\">\n          <button type=\"button\" routerLink=\"/details/{{pokemon.name}}\" class=\"btn btn-sm btn-outline-secondary\">Details</button>\n        </div>\n        <div class=\"float-right\" *ngFor=\"let type of types\">\n          <span class=\"badge badge-primary badge-pill mr-1\"\n            [ngStyle]=\"{'backgroundColor':type.color}\">{{type.name}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n"

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
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");






const routes = [
    {
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    },
    {
        path: 'details/:pokemonName',
        component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__["DetailsPageComponent"]
    },
    {
        path: 'errorPage',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]
    }
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

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
        this.title = 'Pokemon';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_page_description_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/description/description.component */ "./src/app/home-page/description/description.component.ts");
/* harmony import */ var _home_page_pokemon_container_pokemon_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-page/pokemon-container/pokemon-container.component */ "./src/app/home-page/pokemon-container/pokemon-container.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
            _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_8__["DetailsPageComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _home_page_description_description_component__WEBPACK_IMPORTED_MODULE_10__["DescriptionComponent"],
            _home_page_pokemon_container_pokemon_container_component__WEBPACK_IMPORTED_MODULE_11__["PokemonContainerComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "API": {
        GETPOKEMONS: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=21',
        BASEURL: 'https://pokeapi.co/api/v2/',
        IMAGEBASEURL: 'https://github.com/TheDiscordians/pokeAPI/blob/master/sprites/gif/'
    },
    "TEXT": {
        ERRORMESSAGE: 'No data found for the given input. Please enter a valid Pokemon',
        ABOUTTEXT: "The Pokédex section has a wealth of information on all the Pokémon creatures from the entire game series.On the main list pages you can see the various Pokémons.Click a Pokémon's details button to see a detailed page with Pokédex data, descriptions from previous games, sprites, evolutions, moves and more!",
        BANNERTEXT: "All the Pokémon data you'll ever need in one place,easily accessible through this website. You can search for any Pokémon just by typing the name of the Pokémon in the above search bar."
    },
    "TYPE_COLORS": {
        bug: '#B1C12E',
        dark: '#4F3A2D',
        dragon: '#755EDF',
        electric: '#FCBC17',
        fairy: '#F4B1F4',
        fighting: '#823551D',
        fire: '#E73B0C',
        flying: '#A3B3F7',
        ghost: '#6060B2',
        grass: '#74C236',
        ground: '#D3B357',
        ice: '#A3E7FD',
        normal: '#C8C4BC',
        poison: '#934594',
        psychic: '#ED4882',
        rock: '#B9A156',
        steel: '#B5B5C3',
        water: '#3295F6'
    }
});


/***/ }),

/***/ "./src/app/details-page/details-page.component.less":
/*!**********************************************************!*\
  !*** ./src/app/details-page/details-page.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-top {\n  height: 200px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy1wYWdlL0Y6L1Byb2plY3RzL0FuZ3VsYXIgLSA3L1Bva2Vtb24vc3JjL2FwcC9kZXRhaWxzLXBhZ2UvZGV0YWlscy1wYWdlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9kZXRhaWxzLXBhZ2UvZGV0YWlscy1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtcGFnZS9kZXRhaWxzLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWctdG9we1xuICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn0iLCIuY2FyZC1pbWctdG9wIHtcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/details-page/details-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/details-page/details-page.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.service */ "./src/app/details-page/details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");





let DetailsPageComponent = class DetailsPageComponent {
    constructor(detailsService, route, router) {
        this.detailsService = detailsService;
        this.route = route;
        this.router = router;
        this.isDataTrue = false;
        this.TYPE_COLORS = _constants__WEBPACK_IMPORTED_MODULE_4__["default"].TYPE_COLORS;
    }
    ngOnInit() {
        this.route.params
            .subscribe(params => {
            this.getPokemons(params['pokemonName']);
        });
    }
    getPokemons(pokemonName) {
        this.detailsService.getPokemonDetails(pokemonName)
            .subscribe(data => {
            this.initializePokemonDetails(data);
        }, err => {
            if (err.status === 404) {
                this.router.navigate(['/errorPage']);
            }
        });
        this.detailsService.getPokemonSpeciesData(pokemonName)
            .subscribe(data => {
            this.initializeSpeciesData(data);
        }, err => console.log('HTTP Error', err));
    }
    initializePokemonDetails(data) {
        this.isDataTrue = true;
        this.pokemonName = data.name;
        this.imageUrl = _constants__WEBPACK_IMPORTED_MODULE_4__["default"].API.IMAGEBASEURL + this.pokemonName + '.gif?raw=true';
        data.stats.forEach((ele) => {
            if (ele.stat.name === "hp") {
                this.hp = ele.base_stat;
            }
            else if (ele.stat.name === "attack") {
                this.attack = ele.base_stat;
            }
            else if (ele.stat.name === "defense") {
                this.defence = ele.base_stat;
            }
            else if (ele.stat.name === "speed") {
                this.speed = ele.base_stat;
            }
            else if (ele.stat.name === "special-attack") {
                this.specialAttack = ele.base_stat;
            }
            else {
                this.specialDefence = ele.base_stat;
            }
        });
        this.height = data.height;
        this.weight = data.weight;
        this.types = data.types.map(ele => {
            let temp = {
                name: ele.type.name,
                color: this.TYPE_COLORS[ele.type.name]
            };
            return temp;
        });
        this.abilities = data.abilities[0].ability.name + ', ' + data.abilities[1].ability.name;
        this.moves = data.moves.length;
    }
    initializeSpeciesData(data) {
        data.flavor_text_entries.forEach(e => {
            if (e.language.name === 'en') {
                this.description = e.flavor_text;
            }
        });
        this.captureRate = data.capture_rate;
        this.eggGroups = data.egg_groups[0].name;
        this.growthRate = data.growth_rate.name;
        this.happiness = data.base_happiness;
    }
};
DetailsPageComponent.ctorParameters = () => [
    { type: _details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-page',
        template: __webpack_require__(/*! raw-loader!./details-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/details-page/details-page.component.html"),
        styles: [__webpack_require__(/*! ./details-page.component.less */ "./src/app/details-page/details-page.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], DetailsPageComponent);



/***/ }),

/***/ "./src/app/details-page/details.service.ts":
/*!*************************************************!*\
  !*** ./src/app/details-page/details.service.ts ***!
  \*************************************************/
/*! exports provided: DetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function() { return DetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");




let DetailsService = class DetailsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _constants__WEBPACK_IMPORTED_MODULE_3__["default"].API.BASEURL;
    }
    getPokemonDetails(pokemonName) {
        return this.http.get(this.baseUrl + 'pokemon/' + pokemonName + '/');
    }
    getPokemonSpeciesData(pokemonName) {
        return this.http.get(this.baseUrl + 'pokemon-species/' + pokemonName + '/');
    }
};
DetailsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DetailsService);



/***/ }),

/***/ "./src/app/error/error.component.less":
/*!********************************************!*\
  !*** ./src/app/error/error.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 100px;\n  margin-left: 340px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvRjovUHJvamVjdHMvQW5ndWxhciAtIDcvUG9rZW1vbi9zcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMzQwcHg7XG59IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMzQwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");



let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
        this.errorMessage = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TEXT.ERRORMESSAGE;
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
        styles: [__webpack_require__(/*! ./error.component.less */ "./src/app/error/error.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ErrorComponent);



/***/ }),

/***/ "./src/app/header/header.component.less":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header .navbar,\n.header #navbarHeader {\n  background-color: #ef5350;\n}\n.header .btn-outline-success:hover {\n  background-color: #FBC805;\n  border-color: #FBC805;\n  color: #fff;\n}\n.header .btn-outline-success {\n  color: #FBC805;\n  border-color: #FBC805;\n}\n.header .about {\n  color: #FBC805 !important;\n}\n.header a:hover {\n  color: #FBC805 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Y6L1Byb2plY3RzL0FuZ3VsYXIgLSA3L1Bva2Vtb24vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVRLHlCQUFBO0FDQ1I7QURIQTtFQUtRLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQ1I7QURSQTtFQVVRLGNBQUE7RUFDQSxxQkFBQTtBQ0NSO0FEWkE7RUFjUSx5QkFBQTtBQ0NSO0FEZkE7RUFpQlEseUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICAgIC5uYXZiYXIsI25hdmJhckhlYWRlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTM1MDtcbiAgICB9XG4gICAgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkM4MDU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0ZCQzgwNTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5idG4tb3V0bGluZS1zdWNjZXNze1xuICAgICAgICBjb2xvcjogI0ZCQzgwNTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRkJDODA1O1xuICAgIH1cbiAgICAuYWJvdXR7XG4gICAgICAgIGNvbG9yOiAjRkJDODA1ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGE6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAjRkJDODA1ICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIi5oZWFkZXIgLm5hdmJhcixcbi5oZWFkZXIgI25hdmJhckhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjUzNTA7XG59XG4uaGVhZGVyIC5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCQzgwNTtcbiAgYm9yZGVyLWNvbG9yOiAjRkJDODA1O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXIgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICBjb2xvcjogI0ZCQzgwNTtcbiAgYm9yZGVyLWNvbG9yOiAjRkJDODA1O1xufVxuLmhlYWRlciAuYWJvdXQge1xuICBjb2xvcjogI0ZCQzgwNSAhaW1wb3J0YW50O1xufVxuLmhlYWRlciBhOmhvdmVyIHtcbiAgY29sb3I6ICNGQkM4MDUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");




let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.aboutText = _constants__WEBPACK_IMPORTED_MODULE_3__["default"].TEXT.ABOUTTEXT;
    }
    onSubmit(form) {
        this.pokemonName = form.value.pokemonName;
        this.router.navigate(['/details', this.pokemonName]);
        form.reset();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/header/header.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/home-page/description/description.component.less":
/*!******************************************************************!*\
  !*** ./src/app/home-page/description/description.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  margin-bottom: 0 !important;\n  background-color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2Rlc2NyaXB0aW9uL0Y6L1Byb2plY3RzL0FuZ3VsYXIgLSA3L1Bva2Vtb24vc3JjL2FwcC9ob21lLXBhZ2UvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4iLCIuanVtYm90cm9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home-page/description/description.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home-page/description/description.component.ts ***!
  \****************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");



let DescriptionComponent = class DescriptionComponent {
    constructor() { }
    ngOnInit() {
        this.bannerText = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TEXT.BANNERTEXT;
    }
};
DescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-description',
        template: __webpack_require__(/*! raw-loader!./description.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-page/description/description.component.html"),
        styles: [__webpack_require__(/*! ./description.component.less */ "./src/app/home-page/description/description.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DescriptionComponent);



/***/ }),

/***/ "./src/app/home-page/home-page-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/home-page/home-page-service.service.ts ***!
  \********************************************************/
/*! exports provided: HomePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageService", function() { return HomePageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HomePageService = class HomePageService {
    constructor(http) {
        this.http = http;
    }
    getPokemons(url) {
        return this.http.get(url);
    }
};
HomePageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomePageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HomePageService);



/***/ }),

/***/ "./src/app/home-page/home-page.component.less":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close {\n  font-size: 2rem;\n}\n.page-description {\n  padding: 16px 16px 0px 16px;\n  background-color: white;\n}\n.page-item {\n  cursor: pointer;\n}\n.page-link {\n  border-radius: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0Y6L1Byb2plY3RzL0FuZ3VsYXIgLSA3L1Bva2Vtb24vc3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKO0FEQ0E7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURDQTtFQUNJLGVBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2V7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuLnBhZ2UtZGVzY3JpcHRpb257XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDBweCAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnBhZ2UtaXRlbXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFnZS1saW5re1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iLCIuY2xvc2Uge1xuICBmb250LXNpemU6IDJyZW07XG59XG4ucGFnZS1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAwcHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ucGFnZS1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhZ2UtbGluayB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_page_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page-service.service */ "./src/app/home-page/home-page-service.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/constants */ "./src/app/constants.ts");




let HomePageComponent = class HomePageComponent {
    constructor(HomePageService) {
        this.HomePageService = HomePageService;
        this.isDescriptionShown = true;
        this.url = _app_constants__WEBPACK_IMPORTED_MODULE_3__["default"].API.GETPOKEMONS;
        this.nextUrl = null;
        this.previousUrl = null;
        this.isNextActive = true;
        this.isPreviousActive = false;
    }
    ngOnInit() {
        this.fetchPokemons(this.url);
    }
    onCloseClicked() {
        this.isDescriptionShown = false;
    }
    onNextClicked() {
        this.fetchPokemons(this.nextUrl);
    }
    onPreviousClicked() {
        this.fetchPokemons(this.previousUrl);
    }
    fetchPokemons(url) {
        this.HomePageService.getPokemons(url)
            .subscribe((data) => {
            this.pokemonData = data.results;
            this.nextUrl = data.next;
            this.previousUrl = data.previous;
            this.isPreviousActive = this.previousUrl != null ? true : false;
            this.isNextActive = this.nextUrl != null ? true : false;
        });
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _home_page_service_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__(/*! ./home-page.component.less */ "./src/app/home-page/home-page.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_page_service_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"]])
], HomePageComponent);



/***/ }),

/***/ "./src/app/home-page/pokemon-container/pokemon-container.component.less":
/*!******************************************************************************!*\
  !*** ./src/app/home-page/pokemon-container/pokemon-container.component.less ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9wb2tlbW9uLWNvbnRhaW5lci9wb2tlbW9uLWNvbnRhaW5lci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/home-page/pokemon-container/pokemon-container.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home-page/pokemon-container/pokemon-container.component.ts ***!
  \****************************************************************************/
/*! exports provided: PokemonContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonContainerComponent", function() { return PokemonContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var src_app_details_page_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/details-page/details.service */ "./src/app/details-page/details.service.ts");




let PokemonContainerComponent = class PokemonContainerComponent {
    constructor(DetailsService) {
        this.DetailsService = DetailsService;
        this.TYPE_COLORS = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_COLORS;
    }
    ngOnInit() {
        this.imageUrl = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].API.IMAGEBASEURL + this.pokemon.name + ".gif?raw=true";
        this.DetailsService.getPokemonDetails(this.pokemon.name)
            .subscribe((data) => {
            this.types = data.types.map(ele => {
                let temp = {
                    name: ele.type.name,
                    color: this.TYPE_COLORS[ele.type.name]
                };
                return temp;
            });
        });
    }
};
PokemonContainerComponent.ctorParameters = () => [
    { type: src_app_details_page_details_service__WEBPACK_IMPORTED_MODULE_3__["DetailsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PokemonContainerComponent.prototype, "pokemon", void 0);
PokemonContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pokemon-container',
        template: __webpack_require__(/*! raw-loader!./pokemon-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-page/pokemon-container/pokemon-container.component.html"),
        styles: [__webpack_require__(/*! ./pokemon-container.component.less */ "./src/app/home-page/pokemon-container/pokemon-container.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_details_page_details_service__WEBPACK_IMPORTED_MODULE_3__["DetailsService"]])
], PokemonContainerComponent);



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

module.exports = __webpack_require__(/*! F:\Projects\Angular - 7\Pokemon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map