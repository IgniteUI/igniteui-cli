import { OidcSecurityService } from 'angular-auth-oidc-client';
import { firstValueFrom } from 'rxjs';
import { ExternalLogin } from '../models/login';
import { ExternalAuthConfig } from '../services/external-auth-configs';
import { AuthProvider } from './auth-provider';

/** Base provider for OpenID Connect (OIDC) https://openid.net/connect/ */
export abstract class BaseOidcProvider implements AuthProvider {
  constructor(
    protected oidcSecurityService: OidcSecurityService,
    protected externalStsConfig: ExternalAuthConfig) { }

  public login() {
    this.oidcSecurityService.authorize(this.externalStsConfig.configId);
  }

  public async getUserInfo(): Promise<ExternalLogin> {
    const result = await firstValueFrom(this.oidcSecurityService.userData$);
    const configData = result.allUserData?.find(
      d => d.configId === this.externalStsConfig.configId
    );
    if (configData?.userData) {
      return this.formatUserData(configData.userData);
    }
    return Promise.reject(null);
  }

  public logout() {
    this.oidcSecurityService.logoff(this.externalStsConfig.configId);
  }

  /** Format received user data per provider claims */
  protected abstract formatUserData(userData: { [key: string]: any; }): Promise<ExternalLogin>;
}
