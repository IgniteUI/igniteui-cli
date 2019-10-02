import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { ExternalAuthProvider } from '../services/external-auth-configs';
import { ExternalAuthService } from '../services/external-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;
  @Output() public viewChange: EventEmitter<any> = new EventEmitter();
  @Output() public loggedIn: EventEmitter<any> = new EventEmitter();
  /** expose to template */
  public providers = ExternalAuthProvider;

  constructor(
    public authService: ExternalAuthService, private authentication: AuthenticationService,
    private userService: UserService, private router: Router, fb: FormBuilder
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
      this.userService.setCurrentUser(response.user);
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
