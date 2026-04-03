import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserStore } from './services/user-store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private router = inject(Router);
  private userStore = inject(UserStore);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userStore.currentUser) {
      return true;
    }
    this.router.navigate([''], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
