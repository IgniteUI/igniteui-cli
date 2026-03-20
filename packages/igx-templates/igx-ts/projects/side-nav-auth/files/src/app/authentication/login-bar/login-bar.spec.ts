import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  IgxAvatarComponent,
  IgxAvatarModule,
  IgxButtonModule,
  IgxDialogModule,
  IgxDropDownModule,
  IgxIconModule,
  IgxRippleModule,
  IgxToggleModule
} from 'igniteui-angular';
import { LoginDialog } from '../login-dialog/login-dialog';
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user-store';
import { provideAuthentication } from '../provide-authentication';
import { LoginBar } from './login-bar';

@Component({
  selector: 'app-login-dialog',
  template: '',
  imports: [RouterTestingModule,
	  IgxAvatarModule,
	  IgxButtonModule,
	  IgxDialogModule,
	  IgxDropDownModule,
	  IgxIconModule,
	  IgxRippleModule,
	  IgxToggleModule]
})
class TestLoginDialog extends LoginDialog {
  open() { }
}

describe('LoginBar', () => {
  let component: LoginBar;
  let fixture: ComponentFixture<LoginBar>;
  class TestUserServSpy {
    logout() { }
    get currentUser() { return null; }
    clearCurrentUser() { return null; }
  }

  class MockExternalAuth {
    logout() { }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        IgxAvatarModule,
        IgxButtonModule,
        IgxDialogModule,
        IgxDropDownModule,
        IgxIconModule,
        IgxRippleModule,
        IgxToggleModule,
		LoginBar,
		TestLoginDialog
      ],
      providers: [
        ...provideAuthentication(),
        { provide: UserStore, useClass: TestUserServSpy },
        { provide: ExternalAuth, useClass: MockExternalAuth }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch between buttons based on logged user ', () => {
    let buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(1);
    expect(buttons[0].nativeElement.innerText).toBe('Log In');
    const userStore = TestBed.inject(UserStore);
    spyOnProperty(userStore, 'currentUser', 'get').and.returnValue({
      picture: 'picture'
    });
    fixture.detectChanges();
    buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(1);
    expect(buttons[0].nativeElement.children.length).toEqual(2);
    const avatar: IgxAvatarComponent = fixture.debugElement.query(By.css('igx-avatar')).componentInstance;
    expect(avatar.src).toBe('picture');
  });

  it('should open dialog on button click (not logged)', () => {
    // override ViewChild:
    component.loginDialog = new TestLoginDialog();

    const button = fixture.debugElement.query(By.css('button'));
    spyOn(component.loginDialog, 'open');
    button.triggerEventHandler('click', {});
    expect(component.loginDialog.open).toHaveBeenCalled();
  });

  it('should open drop down on button click (logged in)', async () => {
    const userStore = TestBed.inject(UserStore);
    spyOnProperty(userStore, 'currentUser', 'get').and.returnValue({
      picture: 'picture'
    });
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', {});
    await fixture.whenStable();
    expect(component.igxDropDown.collapsed).toBeFalsy();
  });

  it('should handle user menu items', async () => {
    const userStore = TestBed.inject(UserStore);
    const externalAuth = TestBed.inject(ExternalAuth);
    const router: Router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    spyOn(userStore, 'clearCurrentUser');
    spyOn(externalAuth, 'logout');

    component.igxDropDown.open();
    component.igxDropDown.setSelectedItem(0);
    expect(router.navigate).toHaveBeenCalledWith(['/profile']);

    component.igxDropDown.setSelectedItem(1);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
    expect(userStore.clearCurrentUser).toHaveBeenCalled();
    expect(externalAuth.logout).toHaveBeenCalled();
  });
});
