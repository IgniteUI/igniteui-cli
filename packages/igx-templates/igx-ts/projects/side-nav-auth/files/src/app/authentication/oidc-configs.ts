import { OpenIdConfiguration } from 'angular-auth-oidc-client';
import { ExternalAuthProvider } from './services/external-auth-configs';
import { ExternalAuthRedirectUrl } from './services/external-auth';

/**
 * OIDC provider configurations for social login.
 *
 * To enable a provider:
 *  1. Uncomment the corresponding configuration object.
 *  2. Replace the placeholder values with your actual client ID and authority URL.
 *  3. Ensure the matching `addGoogle()`, `addMicrosoft()` call is uncommented in `app.ts`.
 *
 * See https://github.com/damienbod/angular-auth-oidc-client for full configuration options.
 */

// export const googleOidcConfig: OpenIdConfiguration = {
//   configId: ExternalAuthProvider.Google,
//   authority: 'https://accounts.google.com',
//   redirectUrl: `${window.location.origin}/${ExternalAuthRedirectUrl.Google}`,
//   postLogoutRedirectUri: window.location.origin,
//   clientId: 'YOUR_GOOGLE_CLIENT_ID',
//   scope: 'openid profile email',
//   responseType: 'code',
//   silentRenew: true,
//   useRefreshToken: true
// };

// export const microsoftOidcConfig: OpenIdConfiguration = {
//   configId: ExternalAuthProvider.Microsoft,
//   authority: 'https://login.microsoftonline.com/<YOUR_MICROSOFT_TENANT_ID>/v2.0/',
//   redirectUrl: `${window.location.origin}/${ExternalAuthRedirectUrl.Microsoft}`,
//   postLogoutRedirectUri: window.location.origin,
//   clientId: 'YOUR_MICROSOFT_CLIENT_ID',
//   scope: 'openid profile email',
//   responseType: 'code',
//   silentRenew: true,
//   useRefreshToken: true,
//   strictIssuerValidationOnWellKnownRetrievalOff: true
// };

/** Active OIDC provider configurations. Uncomment entries above and add them here to enable social login. */
export const oidcConfigs: OpenIdConfiguration[] = [
  // googleOidcConfig,
  // microsoftOidcConfig
];
