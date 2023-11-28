import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IgxDropDownComponent, ISelectionEventArgs } from 'igniteui-angular';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { ExternalAuthService } from '../services/external-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.scss']
})
export class LoginBarComponent {

  @ViewChild(LoginDialogComponent, { static: true })
  loginDialog!: LoginDialogComponent;

  @ViewChild(IgxDropDownComponent, { static: true })
  igxDropDown!: IgxDropDownComponent;

  constructor(
    public userService: UserService,
    private authService: ExternalAuthService,
    private router: Router) {
  }

  openDialog() {
    this.loginDialog.open();
  }

  handleLogout() {
    this.router.navigate(['/home']);
    this.userService.clearCurrentUser();
    this.authService.logout();
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
