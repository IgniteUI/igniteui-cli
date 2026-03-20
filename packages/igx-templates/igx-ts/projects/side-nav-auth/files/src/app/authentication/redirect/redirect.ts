import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { firstValueFrom } from 'rxjs';
import { ExternalLogin } from '../models/login';
import { Authentication } from '../services/authentication';
import { ExternalAuthProvider } from '../services/external-auth-configs';
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user-store';

const routeData = 'value';

@Component({
  template: '<p>Signing in...</p>'
})
export class Redirect implements OnInit {
  private provider: ExternalAuthProvider;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private userStore: UserStore,
    private authentication: Authentication,
    private externalAuth: ExternalAuth,
    private oidcSecurityService: OidcSecurityService) {
    this.provider = route.snapshot.data[routeData].provider as ExternalAuthProvider;
  }

  async ngOnInit() {
    await firstValueFrom(this.oidcSecurityService.checkAuth());
    const userInfo: ExternalLogin = await this.externalAuth.getUserInfo(this.provider);
    const result = await this.authentication.loginWith(userInfo);
    if (!result.error) {
      this.userStore.setCurrentUser(result.user!);
      this.router.navigate(['/profile']);
    } else {
      alert(result.error);
    }
  }
}
