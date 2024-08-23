import { ApplicationConfig, Provider, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  IgxNavigationDrawerModule,
  IgxNavbarModule,
  IgxLayoutModule,
  IgxRippleModule,
} from '<%=igxPackage%>';

import { AuthenticationModule, ExternalAuthService } from './authentication';
import { routes } from './app.routes';

// provide the HAMMER_GESTURE_CONFIG token
// to override the default settings of the HammerModule
// { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
const providers: Provider = [
  provideRouter(routes),
  importProvidersFrom(
    BrowserModule,
    HammerModule,
    IgxLayoutModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    AuthenticationModule
  ),
  provideAnimations(),
  ExternalAuthService
];

export const appConfig: ApplicationConfig = { providers };
