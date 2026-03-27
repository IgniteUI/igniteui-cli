import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { EnvironmentProviders, Provider } from '@angular/core';
import { OpenIdConfiguration, provideAuth } from 'angular-auth-oidc-client';

import { BackendProvider } from './services/fake-backend';
import { JwtInterceptor } from './services/jwt.interceptor';

/**
 * Provides all authentication-related dependencies (OIDC, JWT interceptor, fake backend).
 * Pass OIDC provider configurations via `configs` to enable social login.
 * See `authentication/oidc-configs.ts` for available provider configuration templates.
 */
export function provideAuthentication(configs: OpenIdConfiguration[] = []): Array<Provider | EnvironmentProviders> {
  return [
    provideAuth({ config: configs }),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // BackendProvider intercepts HTTP requests and simulates a REST API for development/testing.
    // Remove this provider and configure a real backend before deploying to production.
    BackendProvider
  ];
}
