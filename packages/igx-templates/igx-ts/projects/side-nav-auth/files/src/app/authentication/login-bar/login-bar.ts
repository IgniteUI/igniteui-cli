import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { IgxDropDownComponent, ISelectionEventArgs, IgxRippleDirective, IgxButtonDirective, IgxToggleActionDirective,
  IgxAvatarComponent, IgxIconComponent, IgxDropDownItemComponent } from 'igniteui-angular';
import { LoginDialog } from '../login-dialog/login-dialog';
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.html',
  styleUrl: './login-bar.scss',
  imports: [NgIf, IgxRippleDirective, IgxButtonDirective, IgxToggleActionDirective, IgxAvatarComponent, IgxIconComponent,
    IgxDropDownComponent, IgxDropDownItemComponent, LoginDialog]
})
export class LoginBar {

  @ViewChild(LoginDialog, { static: true })
  loginDialog!: LoginDialog;

  @ViewChild(IgxDropDownComponent, { static: true })
  igxDropDown!: IgxDropDownComponent;

  constructor(
    public userStore: UserStore,
    private externalAuth: ExternalAuth,
    private router: Router) {
  }

  openDialog() {
    this.loginDialog.open();
  }

  handleLogout() {
    this.router.navigate(['/home']);
    this.userStore.clearCurrentUser();
    this.externalAuth.logout();
  }

  menuSelect(args: ISelectionEventArgs) {
    // TODO: Use item value, swap to menu component in the future
    switch (args.newSelection.index) {
      case 0:
        this.router.navigate(['/profile']);
        break;
      case 1:
        this.handleLogout();
        break;
    }
  }
}
