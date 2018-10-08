import {Component} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})

  export class LoginViewComponent {

  email = '';
  password = '';
  firstName = '';
  lastName = '';
  newEmail = '';
  newPassword = '';
  public myUser: FormGroup;
  public myRegistration: FormGroup;
  public showLogin = true;
  public showRegister = false;
  public showSuccessLogin = false;
  public showSuccessRegister = false;

  constructor(fb: FormBuilder) {
    this.myUser = fb.group( {
        email: ['', Validators.required],
        password: ['', Validators.required]
      });

    this.myRegistration = fb.group( {
        newEmail: ['', Validators.required],
        newPassword: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
    });
  }

  tryLogin() {
    this.showLogin = false;
    this.showSuccessLogin = true;
  }

  showRegistrationForm() {
    this.showLogin = false;
    this.showRegister = true;
  }
  showLoginForm() {
    this.showLogin = true;
    this.showRegister = false;
  }

  tryRegister() {
    this.showRegister = false;
    this.showSuccessRegister = true;
  }
}
