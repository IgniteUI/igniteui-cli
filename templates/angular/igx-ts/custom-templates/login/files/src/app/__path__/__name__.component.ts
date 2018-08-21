import {Component} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';
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

  constructor(private authentication: AuthenticationService, private user: UserService, fb: FormBuilder) {
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
    this.authentication.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
      const msgSuccess = document.getElementById('successMsg');
      const msgHello = document.getElementById('helloMsg');
      const form = document.getElementById('loginForm');

      this.user.setToken(r.token);
      msgHello.textContent = 'Hello, ' + this.email + '! You have successfully logged in! ';
      form.hidden = true;
      msgSuccess.hidden = false;
          }
        },
        r => {
          alert(r.error.error);
        });
  }

  showRegistrationForm() {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');

    loginForm.hidden = true;
    registrationForm.hidden = false;
  }

  tryRegister() {
    this.authentication.register(
      this.firstName,
      this.lastName,
      this.newEmail,
      this.newPassword
    )
      .subscribe(
        r => {
          const msgSuccess = document.getElementById('registrationSuccessMsg');
          const registrationForm = document.getElementById('registrationForm');

          registrationForm.hidden = true;
          msgSuccess.hidden = false;
        },
        r => {
          alert(r.error.error);
        });
  }

  logout() {
	const msgSuccess = document.getElementById('successMsg');
	const msgRegistrationSuccess = document.getElementById('registrationSuccessMsg');
    const form = document.getElementById('loginForm');

	this.email = '';
	this.password = '';
	msgSuccess.hidden = true;
	msgRegistrationSuccess.hidden = true;
    form.hidden = false;
  }
}
