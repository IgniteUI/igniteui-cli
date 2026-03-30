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

import { provideAuthentication } from './authentication';
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
    provideAuthentication({
      // google: { clientId: 'YOUR_GOOGLE_CLIENT_ID' },
      // microsoft: { clientId: 'YOUR_MICROSOFT_CLIENT_ID', tenantId: 'YOUR_TENANT_ID' },
      // facebook: { clientId: 'YOUR_FACEBOOK_CLIENT_ID' },
    })
  ]
};
