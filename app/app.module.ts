//this is the toot module. It is the glue in our application. It import all the neccessary modules, it declares all the Components that will be part of our app, it shows the services and identifies the bootstrap component, or the 'anchor' component use to render the HTML.
import './rxjs-extensions';

import { NgModule }      from '@angular/core'; //Angular - the core framework. @NgModule takes a metadata object that tells Angular how to compile and run module code

import { BrowserModule } from '@angular/platform-browser';//use web browser

import { FormsModule }   from '@angular/forms'//directives and services for creating forms. AngularJS lets you extend HTML with new attributes called Directives.

import { HttpModule }    from '@angular/http';// The HttpModule from @angular/http library holds providers for a complete set of HTTP services. o access these services from anywhere in the application.

import { AppRoutingModule }      from './app-routing.module';//routing


// We're going to trick the HTTP client into fetching and saving data from a mock service, the in-memory web API.Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }  from 'angular-in-memory-web-api';

import { InMemoryDataService }   from './in-memory-data.service'



import { AppComponent }          from './app.component'; // use the AppComponent.

import { DashboardComponent }    from './dashboard.component';// use DashboardComponent

import { HeroesComponent }       from './heroes.component';// use HeroDetailComponent

import{ HeroDetailComponent }    from './hero-detail.component';// use the HeroDetailComponent.

import { HeroService }           from './hero.service'; //use HeroService

import { HeroSearchComponent }   from './hero-search.component'; //use HeroSearchComponent




@NgModule({//The @NgModule decorator defines the metadata for the module.
	
  imports: [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
   ],// the modules we want to access

  declarations: [ 
  	AppComponent,
    DashboardComponent,
  	HeroDetailComponent ,
    HeroesComponent,
    HeroSearchComponent
  ],// This array contains the list of all components, pipes, and directives that we created and that belong in our application's module.
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]//identifies AppComponent as the bootstrap component. When Angular launches the app, it places the HTML rendering of AppComponent in the DOM,
})
export class AppModule { }//make the application root module available