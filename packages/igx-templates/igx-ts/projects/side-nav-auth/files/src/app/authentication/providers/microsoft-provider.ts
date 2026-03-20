import { firstValueFrom } from 'rxjs';
import { ExternalLogin } from '../models/login';
import { BaseOidcProvider } from './base-oidc-provider';

export class MicrosoftProvider extends BaseOidcProvider {
  public static keysURL = 'ms-discovery/keys';

  /**
   * Format user data response from available claims:
   * https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#payload-claims
   */
  protected async formatUserData(userData: { [key: string]: any; }): Promise<ExternalLogin> {
    const token = await firstValueFrom(this.oidcSecurityService.getAccessToken(this.externalStsConfig.configId));
    return {
      id: userData['oid'],
      name: userData['name'],
      email: userData['email'],
      externalToken: token
    };
  }
}
