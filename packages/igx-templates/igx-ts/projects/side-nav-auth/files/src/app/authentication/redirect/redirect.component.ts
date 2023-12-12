import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalLogin } from '../models/login';
import { AuthenticationService } from '../services/authentication.service';
import { ExternalAuthProvider } from '../services/external-auth-configs';
import { ExternalAuthService } from '../services/external-auth.service';
import { UserService } from '../services/user.service';

const routeData = 'value';

@Component({
  template: '<p>Signing in...</p>',
  standalone: true
})
export class RedirectComponent implements OnInit {
  private provider: ExternalAuthProvider;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private user: UserService,
    private authService: AuthenticationService,
    private externalAuthService: ExternalAuthService) {
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
