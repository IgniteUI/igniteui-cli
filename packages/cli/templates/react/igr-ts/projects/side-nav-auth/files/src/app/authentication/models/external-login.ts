/** User profile returned by a social (external) auth provider. */
export interface ExternalLogin {
  id: string;
  name: string;
  email: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  externalToken: string;
}
