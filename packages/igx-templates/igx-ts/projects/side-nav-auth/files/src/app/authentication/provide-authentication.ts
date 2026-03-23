import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { EnvironmentProviders, importProvidersFrom, Provider } from '@angular/core';
import { AuthModule, StsConfigLoader } from 'angular-auth-oidc-client';

import { OidcConfigLoader } from './providers/oidc-config-loader';
import { BackendProvider } from './services/fake-backend';
import { JwtInterceptor } from './services/jwt.interceptor';

/** Provides all authentication-related dependencies (OIDC, JWT interceptor, fake backend). */
export function provideAuthentication(): Array<Provider | EnvironmentProviders> {
  return [
    importProvidersFrom(AuthModule.forRoot({
      loader: {
        provide: StsConfigLoader,
        useExisting: OidcConfigLoader
      }
    })),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // TODO: DELETE THIS BEFORE PRODUCTION!
    BackendProvider
  ];
}
