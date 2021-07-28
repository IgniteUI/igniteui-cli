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
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RedirectComponent } from './redirect/redirect.component';
import { RegisterComponent } from './register/register.component';
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
    LoginBarComponent,
    LoginComponent,
    LoginDialogComponent,
    ProfileComponent,
    RedirectComponent,
    RegisterComponent
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
