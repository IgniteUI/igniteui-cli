import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalLogin } from '../models/login';
import { Authentication } from '../services/authentication';
import { ExternalAuthProvider } from '../services/external-auth-configs';
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user';

const routeData = 'value';

@Component({
  template: '<p>Signing in...</p>'
})
export class Redirect implements OnInit {
  private provider: ExternalAuthProvider;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private user: UserStore,
    private authService: Authentication,
    private externalAuthService: ExternalAuth) {
    this.provider = route.snapshot.data[routeData].provider as ExternalAuthProvider;
  }

  async ngOnInit() {
    const userInfo: ExternalLogin = await this.externalAuthService.getUserInfo(this.provider);
    const result = await this.authService.loginWith(userInfo);
    if (!result.error) {
      this.user.setCurrentUser(result.user!);
      this.router.navigate(['/profile']);
    } else {
      alert(result.error);
    }
  }
}
