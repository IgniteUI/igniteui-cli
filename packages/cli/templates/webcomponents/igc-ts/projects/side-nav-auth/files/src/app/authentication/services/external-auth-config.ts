// Social login configuration.
// To enable a provider, set its entry in oauthConfig below with your real credentials
// from the provider's developer console.
//
// Redirect URIs to register in each provider's app settings:
//   {your-origin}/auth/redirect-google
//   {your-origin}/auth/redirect-facebook
//   {your-origin}/auth/redirect-microsoft
//
// Developer consoles:
//   Google:    https://console.cloud.google.com/apis/credentials
//   Microsoft: https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps
//   Facebook:  https://developers.facebook.com/apps

export type OAuthProvider = 'google' | 'facebook' | 'microsoft';

export interface OAuthConfig {
  google?: { clientId: string };

  // tenantId defaults to 'common' (multi-tenant). Set it for single-tenant apps.
  // IMPORTANT: The redirect URI must be registered as a SPA redirect URI in Azure
  // (not "Web"), otherwise the token exchange will fail with a CORS error.
  // See: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
  microsoft?: { clientId: string; tenantId?: string };

  // Facebook login uses the JS SDK (popup flow). The SDK script must be loaded in
  // index.html (see below). In the Facebook app dashboard you must also:
  //   - Enable "Login with the JavaScript SDK"
  //   - Add your domain to "Allowed Domains for the JavaScript SDK"
  //   - Add the redirect URI to "Valid OAuth Redirect URIs"
  //   - Serve the app over HTTPS
  // See: https://developers.facebook.com/docs/facebook-login/web
  facebook?: { clientId: string };
}

// Active OAuth configuration — fill in the providers you want to enable, for example:
//
// export const oauthConfig: OAuthConfig = {
//   google: { clientId: 'YOUR_GOOGLE_CLIENT_ID' },
//   microsoft: { clientId: 'YOUR_AZURE_APP_CLIENT_ID', tenantId: 'common' },
//   facebook: { clientId: 'YOUR_FACEBOOK_APP_ID' },
// };
export const oauthConfig: OAuthConfig = {};
