/** Base path for auth routes. OAuth redirect URIs are built as: {origin}/auth/redirect-google|facebook|microsoft */
export const AUTH_BASE_PATH = 'auth';

export enum ExternalAuthProvider {
  Facebook = 'Facebook',
  Google = 'Google',
  Microsoft = 'Microsoft'
}

/** Configuration for Facebook-based external authentication. */
export interface ExternalAuthConfig {
  client_id: string;
  redirect_url: string;
}
