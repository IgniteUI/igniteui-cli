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
