import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Profile } from './profile/profile';
import { Redirect } from './redirect/redirect';
import { ExternalAuthProvider } from './services/external-auth-configs';
import { ExternalAuthRedirectUrl } from './services/external-auth';

const authRoutes: Routes = [
  { path: 'profile', component: Profile, canActivate: [AuthGuard] },
  { path: ExternalAuthRedirectUrl.Google, component: Redirect, data: { provider: ExternalAuthProvider.Google } },
  { path: ExternalAuthRedirectUrl.Facebook, component: Redirect, data: { provider: ExternalAuthProvider.Facebook } },
  { path: ExternalAuthRedirectUrl.Microsoft, component: Redirect, data: { provider: ExternalAuthProvider.Microsoft } }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationRoutingModule { }
