import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {
  IgxButtonModule,
  IgxIconModule,
  IgxRippleModule,
  IgxAvatarModule,
  IgxDropDownModule,
  IgxToggleModule,
  IgxDialogModule,
  IgxAvatarComponent
} from 'igniteui-angular';

import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { LoginBarComponent } from './login-bar.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-dialog',
  template: ''
})
class TestLoginDialogComponent extends LoginDialogComponent {
  open() {  }
}

describe('LoginBarComponent', () => {
  let component: LoginBarComponent;
  let fixture: ComponentFixture<LoginBarComponent>;
  class TestUserServSpy {
    logout() {}
    get currentUser() { return null; }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        IgxButtonModule,
        IgxToggleModule,
        IgxIconModule,
        IgxRippleModule,
        IgxAvatarModule,
        IgxDropDownModule,
        IgxDialogModule
      ],
      declarations: [ LoginBarComponent, TestLoginDialogComponent ],
      providers: [
        { provide: UserService, useClass: TestUserServSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBarComponent);
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
    const userServ = TestBed.get(UserService);
    spyOnProperty(userServ, 'currentUser', 'get').and.returnValue({
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
    component.loginDialog = new TestLoginDialogComponent();

    const button = fixture.debugElement.query(By.css('button'));
    spyOn(component.loginDialog, 'open');
    button.triggerEventHandler('click', {});
    expect(component.loginDialog.open).toHaveBeenCalled();
  });

  it('should open drop down on button click (logged in)', async () => {
    const userServ = TestBed.get(UserService);
    spyOnProperty(userServ, 'currentUser', 'get').and.returnValue({
      picture: 'picture'
    });
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', {});
    await fixture.whenStable();
    expect(component.igxDropDown.collapsed).toBeFalsy();
  });

  it('should handle user menu items', async () => {
    const userServ = TestBed.get(UserService);
    const router: Router = TestBed.get(Router);
    spyOn(router, 'navigate');
    spyOn(userServ, 'logout');

    component.igxDropDown.open();
    component.igxDropDown.setSelectedItem(0);
    expect(router.navigate).toHaveBeenCalledWith(['/profile']);

    component.igxDropDown.setSelectedItem(1);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
    expect(userServ.logout).toHaveBeenCalled();
  });
});
