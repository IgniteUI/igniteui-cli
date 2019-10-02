import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Register } from '../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string;
  email: string;
  password: string;

  public registrationForm: FormGroup;

  @Output() viewChange: EventEmitter<any> = new EventEmitter();
  @Output() registered: EventEmitter<any> = new EventEmitter();

  constructor(private authentication: AuthenticationService,
              private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.registrationForm = this.fb.group({
      given_name: ['', Validators.required],
      family_name: ['', Validators.nullValidator],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async tryRegister() {
    const response = await this.authentication.register(this.registrationForm.value as Register);
    if (!response.error) {
      this.userService.setCurrentUser(response.user);
      this.router.navigate(['/profile']);
      this.registered.emit();
    } else {
      alert(response.error);
    }
  }

  showLoginForm() {
    this.viewChange.emit();
  }
}
