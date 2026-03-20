import { firstValueFrom } from 'rxjs';
import { ExternalLogin } from '../models/login';
import { BaseOidcProvider } from './base-oidc-provider';

export class GoogleProvider extends BaseOidcProvider {
  /**
   * Format user data per provider claims:
   * https://developers.google.com/identity/protocols/OpenIDConnect
   * https://developers.google.com/+/web/api/rest/openidconnect/getOpenIdConnect
   */
  protected async formatUserData(userData: { [key: string]: any; }): Promise<ExternalLogin> {
    const token = await firstValueFrom(this.oidcSecurityService.getAccessToken(this.externalStsConfig.configId));
    return {
      id: userData['sub'],
      name: userData['name'],
      email: userData['email'],
      given_name: userData['given_name'],
      family_name: userData['family_name'],
      picture: userData['picture'],
      externalToken: token
    };
  }
}
