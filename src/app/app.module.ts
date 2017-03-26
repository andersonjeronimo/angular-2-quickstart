import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
//import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//NgModule is a decorator function that takes a single metadata object whose properties describe the module. 
//The most important properties are: imports, exports, declarations, providers, bootstrap
@NgModule({
  //imports - other modules whose exported classes are needed by component templates declared in this module.
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
    ],
  //declarations - the view classes that belong to this module. 
  //Angular has three kinds of view classes: components, directives, and pipes.
  declarations: [
    AppComponent, 
    HeroDetailComponent, 
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent,
  ],
  //providers - creators of services that this module contributes to the global collection of services; 
  //they become accessible in all parts of the app.
  providers: [HeroService],
  //bootstrap - the main application view, called the root component, that hosts all other app views. 
  //Only the root module should set this bootstrap property.
  bootstrap: [AppComponent]
})


export class AppModule {
}

//exports - the subset of declarations that should be visible and usable in the component templates of other modules.

