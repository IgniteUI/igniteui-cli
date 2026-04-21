import { Component, inject, output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxLabelDirective,
  IgxInputDirective, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

import { Authentication } from '../services/authentication';
import { ExternalAuthProvider } from '../services/external-auth-configs';
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user-store';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
  imports: [ReactiveFormsModule, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxLabelDirective,
    IgxInputDirective, IgxButtonDirective, IgxRippleDirective]
})
export class Login {
  public externalAuth = inject(ExternalAuth);
  private authentication = inject(Authentication);
  private userStore = inject(UserStore);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  public viewChange = output<void>();
  public loggedIn = output<void>();
  /** expose to template */
  public providers = ExternalAuthProvider;

  signUpG() {
    this.externalAuth.login(ExternalAuthProvider.Google);
  }

  signUpMS() {
    this.externalAuth.login(ExternalAuthProvider.Microsoft);
  }

  signUpFb() {
    this.externalAuth.login(ExternalAuthProvider.Facebook);
    this.loggedIn.emit();
  }

  async tryLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    const response = await this.authentication.login(this.loginForm.value as any);
    if (!response.error) {
      this.userStore.setCurrentUser(response.user!);
      this.router.navigate(['/auth/profile']);
      this.loginForm.reset();
      // https://github.com/angular/angular/issues/15741
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.setErrors(null);
      });
      this.loggedIn.emit();
    } else {
      alert(response.error);
    }
  }

  showRegistrationForm() {
    this.viewChange.emit();
  }
}
