import { Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { Home } from './home/home';
import { Profile } from './authentication/profile/profile';
import { Redirect } from './authentication/redirect/redirect';
import { ExternalAuthProvider } from './authentication/services/external-auth-configs';
import { ExternalAuthRedirectUrl } from './authentication/services/external-auth';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home, data: { text: 'Home' } },
  { path: 'profile', component: Profile, canActivate: [AuthGuard] },
  { path: ExternalAuthRedirectUrl.Google, component: Redirect, data: { provider: ExternalAuthProvider.Google } },
  { path: ExternalAuthRedirectUrl.Facebook, component: Redirect, data: { provider: ExternalAuthProvider.Facebook } },
  { path: ExternalAuthRedirectUrl.Microsoft, component: Redirect, data: { provider: ExternalAuthProvider.Microsoft } }
];
