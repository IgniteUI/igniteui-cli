import { Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { Profile } from './authentication/profile/profile';
import { Redirect } from './authentication/redirect/redirect';
import { ExternalAuthProvider } from './authentication/services/external-auth-configs';
import { ExternalAuthRedirectUrl } from './authentication/services/external-auth.service';

export const routes: Routes = [
  { path: 'profile', component: Profile, canActivate: [AuthGuard] },
  { path: ExternalAuthRedirectUrl.Google, component: Redirect, data: { provider: ExternalAuthProvider.Google } },
  { path: ExternalAuthRedirectUrl.Facebook, component: Redirect, data: { provider: ExternalAuthProvider.Facebook } },
  { path: ExternalAuthRedirectUrl.Microsoft, component: Redirect, data: { provider: ExternalAuthProvider.Microsoft } }
];
