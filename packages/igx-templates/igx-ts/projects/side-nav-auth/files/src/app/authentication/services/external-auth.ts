import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OpenIdConfiguration, OidcSecurityService } from 'angular-auth-oidc-client';
import { ExternalLogin } from '../models/login';
import { AuthProvider } from '../providers/auth-provider';
import { FacebookProvider } from '../providers/facebook-provider';
import { GoogleProvider } from '../providers/google-provider';
import { MicrosoftProvider } from '../providers/microsoft-provider';
import { OidcConfigLoader } from '../providers/oidc-config-loader';
import { ExternalAuthConfig, ExternalAuthProvider } from './external-auth-configs';
import { LocalStorageService } from './local-storage';

export enum ExternalAuthRedirectUrl {
  Facebook = 'redirect-facebook',
  Google = 'redirect-google',
  Microsoft = 'redirect-microsoft'
}

@Injectable({
  providedIn: 'root'
})
export class ExternalAuth {
  protected providers: Map<ExternalAuthProvider, AuthProvider> = new Map();
  public get activeProvider(): ExternalAuthProvider {
    return this.localStorage.getItem('extActiveProvider') as ExternalAuthProvider;
  }
  public set activeProvider(provider: ExternalAuthProvider) {
    this.localStorage.setItem('extActiveProvider', provider);
  }

  constructor(
    private router: Router,
    private oidcSecurityService: OidcSecurityService,
    private location: Location,
    private localStorage: LocalStorageService,
    private oidcConfigLoader: OidcConfigLoader) {
  }

  public hasProvider(provider?: ExternalAuthProvider) {
    if (provider) {
      return this.providers.has(provider);
    }
    return this.providers.size > 0;
  }

  public addGoogle(clientID: string) {
    const oidcConfig: OpenIdConfiguration = {
      configId: ExternalAuthProvider.Google,
      authority: 'https://accounts.google.com',
      clientId: clientID,
      scope: 'openid email profile',
      redirectUrl: this.getAbsoluteUrl(ExternalAuthRedirectUrl.Google),
      responseType: 'id_token token',
      postLogoutRedirectUri: '/',
      silentRenew: false
    };
    this.oidcConfigLoader.add(oidcConfig);
    this.providers.set(
      ExternalAuthProvider.Google,
      new GoogleProvider(this.oidcSecurityService, ExternalAuthProvider.Google)
    );
  }

  public addFacebook(clientID: string) {
    const fbConfig: ExternalAuthConfig = {
      client_id: clientID,
      redirect_url: ExternalAuthRedirectUrl.Facebook
    };

    this.providers.set(
      ExternalAuthProvider.Facebook,
      new FacebookProvider(fbConfig, this.router)
    );
  }

  public addMicrosoft(clientID: string) {
    const oidcConfig: OpenIdConfiguration = {
      configId: ExternalAuthProvider.Microsoft,
      authority: 'https://login.microsoftonline.com/consumers/v2.0/',
      clientId: clientID,
      scope: 'openid email profile',
      redirectUrl: this.getAbsoluteUrl(ExternalAuthRedirectUrl.Microsoft),
      responseType: 'id_token token',
      postLogoutRedirectUri: '/',
      silentRenew: false
    };
    this.oidcConfigLoader.add(oidcConfig);
    this.providers.set(
      ExternalAuthProvider.Microsoft,
      new MicrosoftProvider(this.oidcSecurityService, ExternalAuthProvider.Microsoft)
    );
  }

  public login(provider: ExternalAuthProvider) {
    const extProvider = this.providers.get(provider);
    if (extProvider) {
      this.activeProvider = provider;
      extProvider.login();
    }
  }

  /** TODO, use setActiveProvider only? */
  public async getUserInfo(provider: ExternalAuthProvider): Promise<ExternalLogin> {
    const extProvider = this.providers.get(provider);
    if (extProvider) {
      const userInfo = await extProvider.getUserInfo();
      userInfo.externalProvider = provider;
      return userInfo;
    }
    return Promise.reject(null); // TODO ?
  }

  /**
   * logout
   */
  public logout() {
    if (this.activeProvider) {
      this.providers.get(this.activeProvider)!.logout();
    }
  }

  /** Returns an absolute URL like <app root URL>/path */
  protected getAbsoluteUrl(path: string) {
    return window.location.origin + this.location.prepareExternalUrl(path);
  }
}
