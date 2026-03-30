import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, Provider } from '@angular/core';
import { OpenIdConfiguration, provideAuth } from 'angular-auth-oidc-client';

import { BackendProvider } from './services/fake-backend';
import { JwtInterceptor } from './services/jwt.interceptor';
import { ExternalAuth, ExternalAuthRedirectUrl } from './services/external-auth';
import { ExternalAuthProvider, AUTH_BASE_PATH } from './services/external-auth-configs';

/**
 * Social login provider credentials.
 * In `app.config.ts`, uncomment the providers you want to enable and fill in your credentials.
 * See https://github.com/IgniteUI/igniteui-cli/wiki/Angular-Authentication-Project-Template#add-a-third-party-social-provider
 */
export interface AuthProviders {
  /** Google OAuth configuration. Provide to enable Google social login. */
  google?: { clientId: string };
  /** Microsoft OAuth configuration. Provide to enable Microsoft social login. */
  microsoft?: { clientId: string; tenantId: string };
  /** Facebook app configuration. Provide to enable Facebook social login. */
  facebook?: { clientId: string };
}

/**
 * Provides all authentication-related dependencies (OIDC, JWT interceptor, fake backend).
 * Pass provider credentials via `authProviders` to activate social login.
 *
 * @example
 * // In app.config.ts:
 * provideAuthentication({
 *   // google: { clientId: 'YOUR_GOOGLE_CLIENT_ID' },
 *   // microsoft: { clientId: 'YOUR_MICROSOFT_CLIENT_ID', tenantId: 'YOUR_TENANT_ID' },
 *   // facebook: { clientId: 'YOUR_FACEBOOK_CLIENT_ID' },
 * })
 */
export function provideAuthentication(authProviders: AuthProviders = {}): (Provider | EnvironmentProviders)[] {
  const oidcConfigs: OpenIdConfiguration[] = [];

  if (authProviders.google) {
    oidcConfigs.push({
      configId: ExternalAuthProvider.Google,
      authority: 'https://accounts.google.com',
      redirectUrl: `${window.location.origin}/${AUTH_BASE_PATH}/${ExternalAuthRedirectUrl.Google}`,
      postLogoutRedirectUri: window.location.origin,
      clientId: authProviders.google.clientId,
      scope: 'openid profile email',
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true
    });
  }

  if (authProviders.microsoft) {
    oidcConfigs.push({
      configId: ExternalAuthProvider.Microsoft,
      authority: `https://login.microsoftonline.com/${authProviders.microsoft.tenantId}/v2.0/`,
      redirectUrl: `${window.location.origin}/${AUTH_BASE_PATH}/${ExternalAuthRedirectUrl.Microsoft}`,
      postLogoutRedirectUri: window.location.origin,
      clientId: authProviders.microsoft.clientId,
      scope: 'openid profile email',
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true,
      strictIssuerValidationOnWellKnownRetrievalOff: true
    });
  }

  return [
    provideAuth({ config: oidcConfigs }),
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
        if (authProviders.google) { externalAuth.addGoogle(); }
        if (authProviders.microsoft) { externalAuth.addMicrosoft(); }
        if (authProviders.facebook) { externalAuth.addFacebook(authProviders.facebook.clientId); }
      }
    }
  ];
}
