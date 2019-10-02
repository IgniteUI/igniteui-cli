import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';

import { LoginComponent } from './login.component';
import { ExternalAuthService } from '../services/external-auth.service';
import { ExternalAuthProvider } from '../services/external-auth-configs';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const MAIL_GROUP_NAME = 'email';
const PASSWORD_GROUP_NAME = 'password';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const extAuthSpy = jasmine.createSpyObj('ExternalAuthService', ['login', 'hasProvider']);
  const authSpy = jasmine.createSpyObj('AuthenticationService', ['login']);
  const userServSpy = jasmine.createSpyObj('UserService', ['setCurrentUser']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, RouterTestingModule, NoopAnimationsModule,
        IgxInputGroupModule, IgxButtonModule, IgxIconModule, IgxRippleModule ],
      declarations: [ LoginComponent ],
      providers: [
        { provide: ExternalAuthService, useValue: extAuthSpy },
        { provide: AuthenticationService, useValue: authSpy },
        { provide: UserService, useValue: userServSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit login data',  async () => {
    const router: Router = TestBed.get(Router);
    spyOn(router, 'navigate');
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls[MAIL_GROUP_NAME].setValue('test@example.com');
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls[PASSWORD_GROUP_NAME].setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
    spyOn(component.loggedIn, 'emit');
    authSpy.login.and.returnValue(Promise.resolve({
      error: null,
      user: { name: 'TEST' }
    }));
    await component.tryLogin();
    expect(authSpy.login).toHaveBeenCalledTimes(1);
    expect(authSpy.login).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: '123456'
    });
    expect(userServSpy.setCurrentUser).toHaveBeenCalledWith({name: 'TEST'});
    expect(component.loggedIn.emit).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/profile']);

    authSpy.login.and.returnValue(Promise.resolve({
      error: 'Err'
    }));
    spyOn(window, 'alert');
    await component.tryLogin();
    expect(window.alert).toHaveBeenCalledWith('Err');
  });

  it('should enable external auth buttons when configured', () => {
    let activeProvider = ExternalAuthProvider.Facebook;
    const has = (provider: ExternalAuthProvider) => provider ? provider === activeProvider : true;
    (extAuthSpy.hasProvider as jasmine.Spy).and.callFake(has);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('button.facebook'))).toEqual(jasmine.any(DebugElement));
    expect(fixture.debugElement.query(By.css('button.google'))).toBeNull();
    expect(fixture.debugElement.query(By.css('button.microsoft'))).toBeNull();
    activeProvider = ExternalAuthProvider.Google;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('button.facebook'))).toBeNull();
    expect(fixture.debugElement.query(By.css('button.google'))).toEqual(jasmine.any(DebugElement));
    expect(fixture.debugElement.query(By.css('button.microsoft'))).toBeNull();
  });

  it('should call correct external auth login per button', () => {
    (extAuthSpy.hasProvider as jasmine.Spy).and.returnValue(true);
    fixture.detectChanges();
    spyOn(component.loggedIn, 'emit');
    fixture.debugElement.query(By.css('button.facebook')).nativeElement.click();
    expect(extAuthSpy.login).toHaveBeenCalledWith(ExternalAuthProvider.Facebook);
    expect(component.loggedIn.emit).toHaveBeenCalled();

    fixture.debugElement.query(By.css('button.google')).nativeElement.click();
    expect(extAuthSpy.login).toHaveBeenCalledWith(ExternalAuthProvider.Google);

    fixture.debugElement.query(By.css('button.microsoft')).nativeElement.click();
    expect(extAuthSpy.login).toHaveBeenCalledWith(ExternalAuthProvider.Microsoft);
  });

  it('should emit viewChange on "create account" click', () => {
    spyOn(fixture.componentInstance.viewChange, 'emit');
    fixture.debugElement.query(By.css('#register')).nativeElement.click();
    expect(fixture.componentInstance.viewChange.emit).toHaveBeenCalled();
  });
});
