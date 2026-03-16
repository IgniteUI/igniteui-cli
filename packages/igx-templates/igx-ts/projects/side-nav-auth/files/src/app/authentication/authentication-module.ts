import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';
import {
  IgxAvatarModule,
  IgxButtonModule,
  IgxDialogModule,
  IgxDropDownModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxRippleModule,
  IgxToggleModule
} from 'igniteui-angular';
import { AuthGuard } from './auth.guard';
import { AuthenticationRoutingModule } from './authentication-routing-module';
import { LoginBar } from './login-bar/login-bar';
import { LoginDialog } from './login-dialog/login-dialog';
import { Login } from './login/login';
import { Profile} from './profile/profile';
import { Redirect } from './redirect/redirect';
import { Register } from './register/register';
import { BackendProvider } from './services/fake-backend.service';
import { JwtInterceptor } from './services/jwt.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule.forRoot(),
    AuthenticationRoutingModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxDropDownModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxRippleModule,
    IgxToggleModule
  ],
  declarations: [
    LoginBar,
    Login,
    LoginDialog,
    Profile,
    Redirect,
    Register
  ],
  providers: [
    AuthGuard,
    OidcConfigService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // TODO: DELETE THIS BEFORE PRODUCTION!
    BackendProvider
  ],
  exports: [
    LoginBar,
    Login,
    Redirect,
    Register,
    LoginDialog,
    Profile
  ]
})
export class AuthenticationModule { }
