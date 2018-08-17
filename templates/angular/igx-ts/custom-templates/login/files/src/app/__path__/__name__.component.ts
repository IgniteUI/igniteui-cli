import {Component} from '@angular/core';
import {ApiService} from './api.service';
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
  public myUser: FormGroup;


  constructor(private api: ApiService, private user: UserService, fb: FormBuilder) {
	this.myUser = fb.group( {
		email: ['', Validators.required],
		password: ['', Validators.required]
	  });
  }

  tryLogin() {
    this.api.login(
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

  logout() {
    const msgSuccess = document.getElementById('successMsg');
    const form = document.getElementById('loginForm');

	this.email = '';
	this.password = '';
    msgSuccess.hidden = true;
    form.hidden = false;
  }
}
