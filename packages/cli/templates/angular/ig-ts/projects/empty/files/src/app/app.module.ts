import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
//import { RouterModule }  from '@angular/router';
// import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule} from './app-routing.module';// in case using the routing module of angular cli
//import { routes } from './app.routes';

import { AppComponent }  from './app.component';
import { NavMenuComponent } from "./shared/nav-menu.component";
import { HomeComponent } from './components/home.component';
import { IgniteUIModule } from 'igniteui-angular-wrappers';


@NgModule({
imports: [ BrowserModule, FormsModule, AppRoutingModule, IgniteUIModule],
declarations: [
	HomeComponent,
	AppComponent,
	NavMenuComponent],
	// providers: [{provide: APP_BASE_HREF, useValue: '/'}],//set it either here or in the index.html
	bootstrap: [ AppComponent ]
})
export class AppModule { }
