import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { EnvironmentProviders, importProvidersFrom, Provider } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';

import { BackendProvider } from './services/fake-backend.service';
import { JwtInterceptor } from './services/jwt.interceptor';

/** Provides all authentication-related dependencies (OIDC, JWT interceptor, fake backend). */
export function provideAuthentication(): Array<Provider | EnvironmentProviders> {
  return [
    importProvidersFrom(AuthModule.forRoot({ config: [] })),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // TODO: DELETE THIS BEFORE PRODUCTION!
    BackendProvider
  ];
}
