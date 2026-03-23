import { OidcSecurityService } from 'angular-auth-oidc-client';
import { firstValueFrom } from 'rxjs';
import { ExternalLogin } from '../models/login';
import { AuthProvider } from './auth-provider';

/** Base provider for OpenID Connect (OIDC) https://openid.net/connect/ */
export abstract class BaseOidcProvider implements AuthProvider {
  constructor(
    protected oidcSecurityService: OidcSecurityService,
    protected configId: string) { }

  public login() {
    this.oidcSecurityService.authorize(this.configId);
  }

  public async getUserInfo(): Promise<ExternalLogin> {
    const result = await firstValueFrom(this.oidcSecurityService.userData$);
    const configData = result.allUserData?.find(
      d => d.configId === this.configId
    );
    if (configData?.userData) {
      return this.formatUserData(configData.userData);
    }
    return Promise.reject(null);
  }

  public logout() {
    this.oidcSecurityService.logoff(this.configId);
  }

  /** Format received user data per provider claims */
  protected abstract formatUserData(userData: { [key: string]: any; }): Promise<ExternalLogin>;
}
