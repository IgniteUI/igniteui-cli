import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IgxButtonModule, NavigationDrawerModule, IgxNavbarModule } from 'igniteui-angular/main';
import { HomeComponent } from './home/home.component';

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
		FormsModule,
		BrowserModule,
		BrowserAnimationsModule,
    AppRoutingModule,
    IgxButtonModule,
    NavigationDrawerModule,
    IgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
