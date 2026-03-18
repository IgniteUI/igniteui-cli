import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxLabelDirective,
  IgxInputDirective, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

import { Authentication } from '../services/authentication';
import { ExternalAuthProvider } from '../services/external-auth-configs';
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
  imports: [ReactiveFormsModule, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxLabelDirective,
    IgxInputDirective, IgxButtonDirective, IgxRippleDirective, NgIf]
})
export class Login {
  public loginForm: FormGroup;
  @Output() public viewChange: EventEmitter<any> = new EventEmitter();
  @Output() public loggedIn: EventEmitter<any> = new EventEmitter();
  /** expose to template */
  public providers = ExternalAuthProvider;

  constructor(
    public authService: ExternalAuth, private authentication: Authentication,
    private userService: UserStore, private router: Router, fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signUpG() {
    this.authService.login(ExternalAuthProvider.Google);
  }

  signUpMS() {
    this.authService.login(ExternalAuthProvider.Microsoft);
  }

  signUpFb() {
    this.authService.login(ExternalAuthProvider.Facebook);
    this.loggedIn.emit();
  }

  async tryLogin() {
    const response = await this.authentication.login(this.loginForm.value);
    if (!response.error) {
      this.userService.setCurrentUser(response.user!);
      this.router.navigate(['/profile']);
      this.loginForm.reset();
      // https://github.com/angular/angular/issues/15741
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.controls[key].setErrors(null);
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
