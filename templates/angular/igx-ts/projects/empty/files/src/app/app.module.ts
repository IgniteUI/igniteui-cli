import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error-routing/page-not-found/page-not-found.component'; 
import { GlobalErrorHandlerService } from './error-routing/error-handle/global-error-handler';
import { UncaughtErrorComponent } from './error-routing/error-handle/uncaught-error.component';

@NgModule({
  declarations: [
    AppComponent,
	HomeComponent,
	PageNotFoundComponent,
	UncaughtErrorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
	IgxRippleModule
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
