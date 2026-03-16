import { Component, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular';
import { NgIf } from '@angular/common';

import { Register } from '../register/register';
import { Login } from '../login/login';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.html',
  styleUrl: './login-dialog.scss',
  imports: [IgxDialogComponent, NgIf, Login, Register]
})
export class LoginDialog {
  public showLogin = true;
  public get title() { return this.showLogin ? 'Login' : 'Register'; }
  @ViewChild(IgxDialogComponent, { static: true })
  public loginDialog!: IgxDialogComponent;

  open() {
    this.loginDialog.open();
  }

  close() {
    this.loginDialog.close();
  }

  onOpen() {
    this.showLogin = true;
  }

  toggleView() {
    this.showLogin = !this.showLogin;
  }
}
