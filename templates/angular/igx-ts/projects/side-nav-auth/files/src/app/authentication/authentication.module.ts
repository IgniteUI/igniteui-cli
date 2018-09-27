import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { BackendProvider } from './services/fake-backend.service';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RedirectComponent } from './redirect/redirect.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthModule, OidcConfigService, } from 'angular-auth-oidc-client';
import {
  IgxDialogModule, IgxIconModule,
  IgxInputGroupModule, IgxButtonModule,
  IgxAvatarModule, IgxToggleModule, IgxDropDownModule, IgxRippleModule
} from 'igniteui-angular';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule.forRoot(),
    AuthenticationRoutingModule,
    IgxToggleModule,
    IgxRippleModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxDropDownModule
  ],
  declarations: [
    LoginBarComponent,
    LoginComponent,
    RedirectComponent,
    RegisterComponent,
    LoginDialogComponent,
    ProfileComponent
  ],
  providers: [
    AuthGuard,
    OidcConfigService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // TODO: DELETE THIS BEFORE PRODUCTION!
    BackendProvider
  ],
  exports: [
    LoginBarComponent,
    LoginComponent,
    RedirectComponent,
    RegisterComponent,
    LoginDialogComponent,
    ProfileComponent
  ]
})
export class AuthenticationModule { }
