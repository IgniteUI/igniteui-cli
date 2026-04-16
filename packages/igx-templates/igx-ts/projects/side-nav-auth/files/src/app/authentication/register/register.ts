import { Component, inject, output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxLabelDirective, IgxInputDirective, IgxButtonDirective,
	IgxRippleDirective } from 'igniteui-angular';
import { RegisterInfo } from '../models/register-info';
import { Authentication } from '../services/authentication';
import { UserStore } from '../services/user-store';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrl: './register.scss',
  imports: [ReactiveFormsModule, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxLabelDirective,
	IgxInputDirective, IgxButtonDirective, IgxRippleDirective]
})
export class Register {

  private authentication = inject(Authentication);
  private fb = inject(FormBuilder);
  private userStore = inject(UserStore);
  private router = inject(Router);

  public registrationForm = this.fb.group({
    given_name: ['', Validators.required],
    family_name: ['', Validators.nullValidator],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  viewChange = output<any>();
  registered = output<any>();

  async tryRegister() {
    const response = await this.authentication.register(this.registrationForm.value as RegisterInfo);
    if (!response.error) {
      this.userStore.setCurrentUser(response.user!);
      this.router.navigate(['/auth/profile']);
      this.registered.emit();
    } else {
      alert(response.error);
    }
  }

  showLoginForm() {
    this.viewChange.emit();
  }
}
