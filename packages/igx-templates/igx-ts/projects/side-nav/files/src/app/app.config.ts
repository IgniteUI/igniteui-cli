import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  IgxNavigationDrawerModule,
  IgxNavbarModule,
  IgxLayoutModule,
  IgxRippleModule,
} from 'igniteui-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(
      BrowserModule,
      HammerModule,
      IgxLayoutModule,
      IgxNavbarModule,
      IgxNavigationDrawerModule,
      IgxRippleModule
    ),
    provideAnimations()
    // provide the HAMMER_GESTURE_CONFIG token
    // to override the default settings of the HammerModule
    // { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
  ]
};
