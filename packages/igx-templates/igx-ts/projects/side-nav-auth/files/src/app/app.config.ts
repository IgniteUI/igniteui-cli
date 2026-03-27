import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import {
  IgxLayoutModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
} from '<%=igxPackage%>';

import { provideAuthentication } from './authentication/provide-authentication';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      BrowserModule,
      HammerModule,
      IgxLayoutModule,
      IgxNavbarModule,
      IgxNavigationDrawerModule,
      IgxRippleModule,
    ),
    provideAnimations(),
    provideAuthentication()
  ]
};
