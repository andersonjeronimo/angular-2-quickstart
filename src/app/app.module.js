"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
var hero_service_1 = require('./hero.service');
var dashboard_component_1 = require('./dashboard.component');
//NgModule is a decorator function that takes a single metadata object whose properties describe the module. 
//The most important properties are: imports, exports, declarations, providers, bootstrap
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //imports - other modules whose exported classes are needed by component templates declared in this module.
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'heroes',
                        component: heroes_component_1.HeroesComponent
                    },
                    {
                        path: 'dashboard',
                        component: dashboard_component_1.DashboardComponent
                    },
                    {
                        path: 'detail/:id',
                        component: hero_detail_component_1.HeroDetailComponent
                    },
                ])
            ],
            //declarations - the view classes that belong to this module. 
            //Angular has three kinds of view classes: components, directives, and pipes.
            declarations: [
                app_component_1.AppComponent,
                hero_detail_component_1.HeroDetailComponent,
                dashboard_component_1.DashboardComponent,
                heroes_component_1.HeroesComponent
            ],
            //providers - creators of services that this module contributes to the global collection of services; 
            //they become accessible in all parts of the app.
            providers: [
                hero_service_1.HeroService
            ],
            //bootstrap - the main application view, called the root component, that hosts all other app views. 
            //Only the root module should set this bootstrap property.
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//exports - the subset of declarations that should be visible and usable in the component templates of other modules.
//# sourceMappingURL=app.module.js.map