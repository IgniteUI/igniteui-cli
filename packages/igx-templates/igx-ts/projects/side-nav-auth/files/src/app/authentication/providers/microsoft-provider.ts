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
    return {
      id: userData.oid,
      name: userData.name,
      email: userData.email,
      externalToken: token
    };
  }
}
