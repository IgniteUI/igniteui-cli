import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';
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
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IgxInputGroupComponent,
    IgxPrefixDirective,
    IgxIconComponent,
    IgxLabelDirective,
    IgxInputDirective,
    IgxButtonDirective,
    IgxRippleDirective,
    NgIf
  ]
})
export class <%=ClassName%>Component {
  public loginForm: FormGroup;
  public registrationForm: FormGroup;
  public showLogin = true;
  public showRegister = false;
  public showSuccessLogin = false;
  public showSuccessRegister = false;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group( {
        email: ['', Validators.required],
        password: ['', Validators.required]
      });

    this.registrationForm = fb.group( {
        newEmail: ['', Validators.required],
        newPassword: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
    });
  }

  tryLogin() {
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
    const registerInfo = this.registrationForm.value;
    // use registerInfo
    this.showRegister = false;
    this.showSuccessRegister = true;
  }
}
