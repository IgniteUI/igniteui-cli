import { IgxDialogComponent } from 'igniteui-angular';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  public showLogin = true;
  public get title() { return this.showLogin ? 'Login' : 'Register'; }
  @ViewChild(IgxDialogComponent) public loginDialog: IgxDialogComponent;

  open() {
    this.loginDialog.open();
  }

  close() {
    this.loginDialog.close();
  }

  onOpen () {
    this.showLogin = true;
  }

  toggleView() {
    this.showLogin = !this.showLogin;
  }
}
