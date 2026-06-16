import { Component, inject, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  CloseScrollStrategy,
  ConnectedPositioningStrategy,
  HorizontalAlignment,
  IgxDropDownComponent,
  ISelectionEventArgs,
  IgxRippleDirective,
  IgxButtonDirective,
  IgxToggleActionDirective,
  IgxAvatarComponent,
  IgxDropDownItemComponent,
  OverlaySettings,
  VerticalAlignment
} from 'igniteui-angular';
import { LoginDialog } from '../login-dialog/login-dialog';
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user-store';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.html',
  styleUrl: './login-bar.scss',
  imports: [IgxRippleDirective, IgxButtonDirective, IgxToggleActionDirective, IgxAvatarComponent,
    IgxDropDownComponent, IgxDropDownItemComponent, LoginDialog]
})
export class LoginBar {

  loginDialog = viewChild.required(LoginDialog);

  igxDropDown = viewChild.required(IgxDropDownComponent);

  public menuOverlaySettings: OverlaySettings = {
    closeOnOutsideClick: true,
    modal: false,
    positionStrategy: new ConnectedPositioningStrategy({
      horizontalDirection: HorizontalAlignment.Left,
      horizontalStartPoint: HorizontalAlignment.Right,
      verticalStartPoint: VerticalAlignment.Bottom
    }),
    scrollStrategy: new CloseScrollStrategy()
  };

  public userStore = inject(UserStore);
  private externalAuth = inject(ExternalAuth);
  private router = inject(Router);

  public get isProfileRoute() {
    return false;
  }

  openDialog() {
    this.loginDialog().open();
  }

  handleLogout() {
    this.router.navigate(['/home']);
    this.userStore.clearCurrentUser();
    this.externalAuth.logout();
  }

  menuSelect(args: ISelectionEventArgs) {
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
