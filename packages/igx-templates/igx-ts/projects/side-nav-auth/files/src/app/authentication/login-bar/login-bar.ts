import { Component, inject, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IgxDropDownComponent, ISelectionEventArgs, IgxRippleDirective, IgxButtonDirective, IgxToggleActionDirective,
  IgxAvatarComponent, IgxIconComponent, IgxDropDownItemComponent } from 'igniteui-angular';
import { LoginDialog } from '../login-dialog/login-dialog';
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user-store';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.html',
  styleUrl: './login-bar.scss',
  imports: [IgxRippleDirective, IgxButtonDirective, IgxToggleActionDirective, IgxAvatarComponent, IgxIconComponent,
    IgxDropDownComponent, IgxDropDownItemComponent, LoginDialog]
})
export class LoginBar {

  loginDialog = viewChild.required(LoginDialog);

  igxDropDown = viewChild.required(IgxDropDownComponent);

  public userStore = inject(UserStore);
  private externalAuth = inject(ExternalAuth);
  private router = inject(Router);

  openDialog() {
    this.loginDialog().open();
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
        this.router.navigate(['/auth/profile']);
        break;
      case 1:
        this.handleLogout();
        break;
    }
  }
}
