import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserStore } from './services/user-store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private router = inject(Router);
  private userStore = inject(UserStore);

  canActivate(route: ActivatedRouteSnapshot) {
    if (this.userStore.currentUser) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
