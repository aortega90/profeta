webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__predictions_predictions__ = __webpack_require__(101);
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
 * Generated class for the MailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MailPage = (function () {
    function MailPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.data = {};
        this.data.username = '';
        this.data.response = '';
        this.http = http;
    }
    MailPage.prototype.submit = function () {
        var _this = this;
        console.log("holis");
        //var link = 'http://localhost/Api/api.php';
        //var link = 'http://lab.besign.com.ve/ProfetaDigital/Api/api.php';
        var link = 'http://lab.besign.com.ve/ProfetaDigital/Api/api.php';
        var myData = JSON.stringify({ username: this.data.username });
        this.http.post(link, myData)
            .subscribe(function (data) {
            _this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        }, function (error) {
            console.log("Oooops!");
        });
        console.log("antes del if");
        console.log(this.data.response);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__predictions_predictions__["a" /* PredictionsPage */]);
        console.log("dedeentro del ");
    };
    return MailPage;
}());
MailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mail',template:/*ion-inline-start:"/Users/developer/BESIGN/myProfetaBeta/src/pages/mail/mail.html"*/'<ion-content padding>\n <!--ion-list>\n <ion-item>\n <ion-label floating>Username</ion-label>\n <ion-input type="text" name="username" [(ngModel)]="data.username"></ion-input>\n <input type="email" name="email" clearInput="true"   [(ngModel)]="data.username" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})" required="">\n\n\n </ion-item>\n \n <button ion-button block (click)="submit()" type="submit" >Submit to server</button>\n </ion-list-->\n\n<!-- Probando este es el que es -->\n <!--form #f="ngForm" (ngSubmit)="submit()">\n  <ion-item margin-vertical >\n    <ion-label> <ion-icon name="mail"></ion-icon></ion-label>\n    <ion-input  type="email" name="username" placeholder="Coloca tu correo para ver 3 predicciones." [(ngModel)]="data.username" ngModel email></ion-input>\n  </ion-item>\n  <button ion-button block large [disabled]="!f.valid" type="submit" on-touch = "submit()" class="button-mail">Submit</button> \n</form-->\n<div class="center-item">\n	<h1>Coloca tu correo para ver 3 predicciones.</h1>\n	<form #f="ngForm" (ngSubmit)="submit()">\n		<ion-item margin-vertical>\n			<ion-label> <ion-icon name="mail" class="color-email"></ion-icon></ion-label>\n			<ion-input  type="email" class="text-mail" name="username" placeholder="" [(ngModel)]="data.username" ngModel email></ion-input>\n		</ion-item>\n	<button ion-button block large [disabled]="!f.valid" type="submit" on-touch = "submit()" class="button-mail">Ver el futuro</button> \n	</form>\n</div> \n\n\n <!--ion-card>\n <ion-card-header>\n Response\n </ion-card-header>\n \n <ion-card-content>\n <b>{{data.response}}</b>\n </ion-card-content>\n </ion-card-->\n</ion-content>'/*ion-inline-end:"/Users/developer/BESIGN/myProfetaBeta/src/pages/mail/mail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], MailPage);

//# sourceMappingURL=mail.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goodbye_goodbye__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PredictionsPage = (function () {
    function PredictionsPage(navCtrl, navParams, menu, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.platform = platform;
        this.showSkip = true;
        this.dir = 'ltr';
        this.predicciones = [
            "Tu ropa ya no estará en el closet, sino en una impresora ",
            "La ropa podría hacerte más social, tus redes estarán en ella...",
            "Vivirás más años, con menos estrés y menos trabajo, pero te aburrirás más",
            "Alguno de tus órganos podría ser una impresión 3D",
            "Necesitarás un nuevo pasaporte, el que tienes no te permitirá entrar a algún planeta",
            "Tus viajes familiares serán literalmente fueran de este mundo.",
            "Hablarás con las objetos y ya no te llamarán  loco por eso",
            "Los humanos no desaparecerán del planeta pero sí de internet",
            "Tu rostro te abrirá muchas puertas… y el email, el carro, tu teléfono... ",
            "La pregunta ¿eres robot o humano? será necesaria pero políticamente incorrecta",
            "La energía eléctrica estará en tu ropa, no en un bombillo",
            "No harás trámites para viajar...Un par de lentes te harán llegar a tu destino",
            "Viajarás, vivirás sin moverte de tu sofá ",
            "Mirarás, sonreirás y comprarás ¡Cuidado con lo que piensas!",
            "¡No más grupos de whatsapp! pronto serán “historia”",
            "Por fin responderás tu whatsapp mientras “manejas” sin sufrir un accidente",
            "La palabra “digital” no se escuchará más…",
            "No estarás pendiente de tu celular, porque ya nadie tendrá un celular…",
            "Extrañarás el estrés de trabajar largas horas y en una oficina",
            "No volverás a ver un vendedor en tu puerta... los paquetes llegarán 'solos'",
            "Pagarás con monedas de nombres que aún no conocemos"
        ];
        this.random_predicciones = [];
        this.dir = platform.dir();
        this.randomPredictions();
    }
    PredictionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PredictionsPage');
    };
    PredictionsPage.prototype.startApp = function () {
        this.navCtrl.setRoot('WelcomePage', {}, {
            animate: true,
            direction: 'forward'
        });
    };
    PredictionsPage.prototype.slideChanged = function () {
        var _this = this;
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        if (currentIndex == 3) {
            var TIME_IN_MS = 6900;
            var hideFooterTimeout = setTimeout(function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__goodbye_goodbye__["a" /* GoodbyePage */]);
            }, TIME_IN_MS);
        }
    };
    PredictionsPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    PredictionsPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    PredictionsPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    PredictionsPage.prototype.randomPredictions = function () {
        var limit = 3;
        var random_numbers = [];
        var arrayLength = this.predicciones.length;
        while (random_numbers.length < limit) {
            var random_number = Math.floor(Math.random() * arrayLength);
            if (random_numbers.indexOf(random_number) == -1) {
                random_numbers.push(random_number);
            }
        }
        for (var i = 0; i < limit; i++) {
            this.random_predicciones.push(this.predicciones[random_numbers[i]]);
        }
    };
    return PredictionsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], PredictionsPage.prototype, "slides", void 0);
PredictionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-predictions',template:/*ion-inline-start:"/Users/developer/BESIGN/myProfetaBeta/src/pages/predictions/predictions.html"*/'<!--\n  Generated template for the PredictionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>predictions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n--> \n\n<ion-content no-bounce>\n  <ion-slides loop="true" autoplay="7000" speed="1500" direction="vertical" effect="flip" pager="true" (ionSlideWillChange)="onSlideChangeStart($event)"  (ionSlideDidChange)="slideChanged()" >\n    \n    <ion-slide >\n      \n        <h1 class="slide-title"  [innerHTML]="random_predicciones[0]"></h1>\n      \n    </ion-slide>\n    \n    <ion-slide >\n      \n        <h1 class="slide-title"  [innerHTML]="random_predicciones[1]"></h1>\n      \n    </ion-slide>\n    \n    <ion-slide >\n      \n        <h1 class="slide-title"  [innerHTML]="random_predicciones[2]"></h1>\n      \n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/BESIGN/myProfetaBeta/src/pages/predictions/predictions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], PredictionsPage);

//# sourceMappingURL=predictions.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/goodbye/goodbye.module": [
		265,
		2
	],
	"../pages/mail/mail.module": [
		267,
		1
	],
	"../pages/predictions/predictions.module": [
		266,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mail_mail__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_goodbye_goodbye__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_predictions_predictions__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_mail_mail__["a" /* MailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_predictions_predictions__["a" /* PredictionsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_goodbye_goodbye__["a" /* GoodbyePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/goodbye/goodbye.module#GoodbyePageModule', name: 'GoodbyePage', segment: 'goodbye', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/predictions/predictions.module#PredictionsPageModule', name: 'PredictionsPage', segment: 'predictions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mail/mail.module#MailPageModule', name: 'MailPage', segment: 'mail', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_mail_mail__["a" /* MailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_predictions_predictions__["a" /* PredictionsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_goodbye_goodbye__["a" /* GoodbyePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(76);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/developer/BESIGN/myProfetaBeta/src/app/app.html"*/'  <ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/developer/BESIGN/myProfetaBeta/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_mail__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, events) {
        this.navCtrl = navCtrl;
        this.events = events;
    }
    HomePage.prototype.onToucheNextPage = function () {
        console.log("paso");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mail_mail__["a" /* MailPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/developer/BESIGN/myProfetaBeta/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profeta Beta \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<div id="video-home" on-click = "onToucheNextPage()" on-touch = "onToucheNextPage()" data-tap-disabled="true" >\n		<video autoplay loop src="assets/video/video-1.mp4" ></video>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/developer/BESIGN/myProfetaBeta/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodbyePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(76);
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
 * Generated class for the GoodbyePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GoodbyePage = (function () {
    function GoodbyePage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var TIME_IN_MS = 9999;
        var hideFooterTimeout = setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, TIME_IN_MS);
    }
    GoodbyePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GoodbyePage');
    };
    return GoodbyePage;
}());
GoodbyePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-goodbye',template:/*ion-inline-start:"/Users/developer/BESIGN/myProfetaBeta/src/pages/goodbye/goodbye.html"*/'<!--\n  Generated template for the GoodbyePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profeta Beta \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<div id="video-home">\n		<video autoplay loop src="assets/video/outro.mp4" ></video>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/developer/BESIGN/myProfetaBeta/src/pages/goodbye/goodbye.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], GoodbyePage);

//# sourceMappingURL=goodbye.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map