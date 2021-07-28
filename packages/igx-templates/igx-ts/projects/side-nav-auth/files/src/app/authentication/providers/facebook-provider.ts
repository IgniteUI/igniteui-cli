import { Router } from '@angular/router';
import { ExternalLogin } from '../models/login';
import { ExternalAuthConfig } from '../services/external-auth-configs';
import { AuthProvider } from './auth-provider';

export class FacebookProvider implements AuthProvider {
  private user?: ExternalLogin;

  constructor(private externalStsConfig: ExternalAuthConfig, private router: Router) { }

  public config() {
    // Requiring HTTPS for Facebook Login
    // https://developers.facebook.com/blog/post/2018/06/08/enforce-https-facebook-login/
    FB.init({
      appId: this.externalStsConfig.client_id,
      xfbml: false,
      version: 'v3.1'
    });
  }

  public login() {
    const accessToken = 'accessToken';
    this.config();
    FB.login((response) => {
      if (response.authResponse) {
        FB.api(
          '/me?fields=id,email,name,first_name,last_name,picture',
          (newResponse: { [key: string]: any; }) => {
            this.user = {
              id: newResponse.id,
              name: newResponse.name,
              given_name: newResponse.first_name,
              family_name: newResponse.last_name,
              email: newResponse.email,
              picture: newResponse.picture,
              externalToken: FB.getAuthResponse()[accessToken]
            };
            this.router.navigate([this.externalStsConfig.redirect_url]);
          });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scope: 'public_profile' });
  }

  public getUserInfo(): Promise<ExternalLogin> {
    if (!this.user) {
      throw "User not logged in";
    }
    return Promise.resolve(this.user);
  }

  public logout() {
    FB.logout((response) => { });
  }
}
