import {Component} from '@angular/core';
import {ApiService} from './api.service';
import {UserService} from './user.service';

@Component({
	selector: 'app-$(filePrefix)',
	templateUrl: './$(filePrefix).component.html',
	styleUrls: ['./$(filePrefix).component.css']
  })
  
  export class $(ClassName)Component {

  email = '';
  password = '';

  constructor(private api: ApiService, private user: UserService) {
  }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
			this.user.setToken(r.token);
			alert("Hello " + this.email);
          }
        },
        r => {
          alert(r.error.error);
        });
  }
}
