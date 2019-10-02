import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ExternalAuthProvider } from './services/external-auth-configs';
import { ExternalAuthRedirectUrl } from './services/external-auth.service';

const authRoutes: Routes = [
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: ExternalAuthRedirectUrl.Google, component: RedirectComponent, data: { provider: ExternalAuthProvider.Google } },
    { path: ExternalAuthRedirectUrl.Facebook, component: RedirectComponent, data: { provider: ExternalAuthProvider.Facebook } },
    { path: ExternalAuthRedirectUrl.Microsoft, component: RedirectComponent, data: { provider: ExternalAuthProvider.Microsoft } }
];

@NgModule({
    imports: [
      RouterModule.forChild(authRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AuthenticationRoutingModule {}
