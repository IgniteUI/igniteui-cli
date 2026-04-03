import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IgxInputGroupComponent,
  IgxPrefixDirective,
  IgxIconComponent,
  IgxLabelDirective,
  IgxInputDirective,
  IgxButtonDirective,
  IgxRippleDirective,
} from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [
    ReactiveFormsModule,
    IgxInputGroupComponent,
    IgxPrefixDirective,
    IgxIconComponent,
    IgxLabelDirective,
    IgxInputDirective,
    IgxButtonDirective,
    IgxRippleDirective,
  ]
})
export class <%=ClassName%> {
  private fb = inject(FormBuilder);
  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  public registrationForm = this.fb.group({
    newEmail: ['', Validators.required],
    newPassword: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });
  public showLogin = true;
  public showRegister = false;
  public showSuccessLogin = false;
  public showSuccessRegister = false;

  tryLogin() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const loginInfo = this.loginForm.value;
    // use loginInfo
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const registerInfo = this.registrationForm.value;
    // use registerInfo
    this.showRegister = false;
    this.showSuccessRegister = true;
  }
}
