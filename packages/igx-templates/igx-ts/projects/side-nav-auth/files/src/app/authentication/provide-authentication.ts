import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, Provider } from '@angular/core';
import { OpenIdConfiguration, provideAuth } from 'angular-auth-oidc-client';

import { BackendProvider } from './services/fake-backend';
import { JwtInterceptor } from './services/jwt.interceptor';
import { ExternalAuth } from './services/external-auth';

/**
 * Provides all authentication-related dependencies (OIDC, JWT interceptor, fake backend).
 * Pass OIDC provider configurations via `configs` to enable social login.
 * See `authentication/oidc-configs.ts` for available provider configuration templates.
 */
export function provideAuthentication(configs: OpenIdConfiguration[] = []): (Provider | EnvironmentProviders)[] {
  return [
    provideAuth({ config: configs }),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // BackendProvider intercepts HTTP requests and simulates a REST API for development/testing.
    // Remove this provider and configure a real backend before deploying to production.
    BackendProvider,
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        const externalAuth = inject(ExternalAuth);
        /**
         * To register a social login, un-comment one or more of the following and add your service provider Client ID.
         * Also un-comment the corresponding config in authentication/oidc-configs.ts and add it to the oidcConfigs array.
         * See https://github.com/IgniteUI/igniteui-cli/wiki/Angular-Authentication-Project-Template#add-a-third-party-social-provider
         */
        // externalAuth.addGoogle();
        // externalAuth.addMicrosoft();
        // externalAuth.addFacebook('YOUR_FACEBOOK_CLIENT_ID');
      }
    }
  ];
}
