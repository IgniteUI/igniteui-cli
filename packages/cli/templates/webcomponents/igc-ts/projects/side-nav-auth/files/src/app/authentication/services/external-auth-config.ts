// Social login configuration.
// To enable a provider, uncomment its entry and replace the placeholder value(s) with your
// real credentials from the provider's developer console.
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
  // TODO: Uncomment and replace with your Google OAuth Client ID (type: Web application)
  // google?: { clientId: string };

  // TODO: Uncomment and replace with your Microsoft Application (client) ID
  //       tenantId defaults to 'common' (multi-tenant). Set it for single-tenant apps.
  // microsoft?: { clientId: string; tenantId?: string };

  // TODO: Uncomment and replace with your Facebook App ID.
  //       Also add the Facebook JS SDK to your index.html <head>:
  //       <script async defer crossorigin="anonymous"
  //         src="https://connect.facebook.net/en_US/sdk.js"></script>
  // facebook?: { clientId: string };
}

// Active OAuth configuration — uncomment provider(s) above to enable social login.
export const oauthConfig: OAuthConfig = {};
