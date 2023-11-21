import { Component, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
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
