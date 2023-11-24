import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule } from 'igniteui-angular';

import { AuthenticationModule, ExternalAuthService } from './authentication';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
	provideRouter(routes),
	provideAnimations(),
	importProvidersFrom(
	  BrowserModule,
	  HammerModule,
	  IgxLayoutModule,
	  IgxNavbarModule,
	  IgxNavigationDrawerModule,
	  IgxRippleModule,
	  AuthenticationModule),
	  ExternalAuthService
	// provide the HAMMER_GESTURE_CONFIG token after the above line 
	// to override the default settings of the HammerModule
    // { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
  ]
};
