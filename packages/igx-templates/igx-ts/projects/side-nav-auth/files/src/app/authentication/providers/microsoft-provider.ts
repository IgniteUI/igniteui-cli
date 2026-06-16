import { firstValueFrom } from 'rxjs';
import { ExternalLogin } from '../models/login';
import { BaseOidcProvider } from './base-oidc-provider';

export class MicrosoftProvider extends BaseOidcProvider {
  /**
   * Format user data response from available claims:
   * https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#payload-claims
   */
  protected async formatUserData(userData: any): Promise<ExternalLogin> {
    const token = await firstValueFrom(this.oidcSecurityService.getAccessToken(this.configId));
    // The 'email' claim is not guaranteed in Microsoft ID tokens even when requested.
    // Fall back to 'preferred_username' which is typically the UPN/email for work/school accounts.
    // See: https://learn.microsoft.com/en-us/entra/identity-platform/id-token-claims-reference
    return {
      id: userData.oid,
      name: userData.name,
      email: userData.email ?? userData.preferred_username,
      externalToken: token
    };
  }
}
