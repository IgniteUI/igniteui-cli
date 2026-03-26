import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { EnvironmentProviders, Provider } from '@angular/core';
import { provideAuth } from 'angular-auth-oidc-client';

import { BackendProvider } from './services/fake-backend';
import { JwtInterceptor } from './services/jwt.interceptor';

/** Provides all authentication-related dependencies (OIDC, JWT interceptor, fake backend). */
export function provideAuthentication(): Array<Provider | EnvironmentProviders> {
  return [
    provideAuth({
      config: {
        // authority: '<your OIDC authority URL>',
        // redirectUrl: '<your redirect URL>',
        // postLogoutRedirectUri: window.location.origin,
        // clientId: '<your client ID>',
        // scope: 'openid profile email',
        // responseType: 'code',
        // silentRenew: true,
        // useRefreshToken: true
      },
    }),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // BackendProvider intercepts HTTP requests and simulates a REST API for development/testing.
    // Remove this provider and configure a real backend before deploying to production.
    BackendProvider
  ];
}
