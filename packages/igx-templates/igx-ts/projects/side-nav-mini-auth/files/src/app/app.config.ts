import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import {
  IgxNavigationDrawerModule,
  IgxNavbarModule,
  IgxIconModule,
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
      IgxNavigationDrawerModule,
      IgxNavbarModule,
      IgxIconModule,
      IgxRippleModule,
    ),
    provideAnimations(),
    // Social login: uncomment the provider(s) you want and replace the placeholder client IDs.
    // Each provider requires its redirect URI to be registered in the provider's developer console.
    // Redirect URIs: {origin}/auth/redirect-google | /auth/redirect-facebook | /auth/redirect-microsoft
    // Guide: https://github.com/IgniteUI/igniteui-cli/wiki/Angular-Authentication-Project-Template
    provideAuthentication({
      // TODO: Uncomment and replace with your Google OAuth Client ID
      // google: { clientId: 'YOUR_GOOGLE_CLIENT_ID' },
      // TODO: Uncomment and replace with your Microsoft Client ID + Tenant ID
      // microsoft: { clientId: 'YOUR_MICROSOFT_CLIENT_ID', tenantId: 'YOUR_TENANT_ID' },
      // TODO: Uncomment and replace with your Facebook App ID
      // facebook: { clientId: 'YOUR_FACEBOOK_CLIENT_ID' },
    })
  ]
};
