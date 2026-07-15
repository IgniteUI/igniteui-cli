import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { firstValueFrom } from 'rxjs';
import { ExternalLogin } from '../models/login';
import { Authentication } from '../services/authentication';
import { ExternalAuthProvider } from '../services/external-auth-configs';
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user-store';

@Component({
  template: '<p>Signing in...</p>'
})
export class Redirect implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private userStore = inject(UserStore);
  private authentication = inject(Authentication);
  private externalAuth = inject(ExternalAuth);
  private oidcSecurityService = inject(OidcSecurityService);
  private provider: ExternalAuthProvider;

  constructor() {
    this.provider = this.route.snapshot.data['provider'] as ExternalAuthProvider;
  }

  async ngOnInit() {
    try {
      // Facebook uses the JS SDK (popup), not OIDC — skip checkAuth to avoid
      // querying an OIDC config that does not exist for this provider.
      if (this.provider !== ExternalAuthProvider.Facebook) {
        // Pass the configId so the correct OIDC config is used when multiple providers
        // are active. Without it, angular-auth-oidc-client falls back to the first config.
        const configId = this.externalAuth.activeProvider;
        await firstValueFrom(this.oidcSecurityService.checkAuth(undefined, configId));
      }
      const userInfo: ExternalLogin = await this.externalAuth.getUserInfo(this.provider);
      const result = await this.authentication.loginWith(userInfo);
      if (!result.error) {
        this.userStore.setCurrentUser(result.user!);
        this.router.navigate(['/auth/profile']);
      } else {
        alert(result.error);
      }
    } catch (err) {
      console.error('External authentication failed:', err);
      alert('Authentication failed. Please try again.');
    }
  }
}
