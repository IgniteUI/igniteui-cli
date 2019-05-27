import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RedirectComponent } from './redirect.component';
import { UserService } from '../services/user.service';
import { ExternalAuthService } from '../services/external-auth.service';
import { AuthenticationService } from '../services/authentication.service';

describe('RedirectComponent', () => {
  let fixture: ComponentFixture<RedirectComponent>;
  const extAuthSpy = jasmine.createSpyObj('ExternalAuthService', ['getUserInfo']);
  const authSpy = jasmine.createSpyObj('AuthenticationService', ['loginWith']);
  const userServSpy = jasmine.createSpyObj('UserService', ['setCurrentUser']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ RedirectComponent ],
      providers: [
        { provide: ExternalAuthService, useValue: extAuthSpy },
        { provide: AuthenticationService, useValue: authSpy },
        { provide: UserService, useValue: userServSpy }
      ]
    })
    .compileComponents();
  }));

  it('should try external login on init', async () => {
    const router: Router = TestBed.get(Router);
    spyOn(router, 'navigate');
    extAuthSpy.getUserInfo.and.returnValue(Promise.resolve({ test: '1' }));
    authSpy.loginWith.and.returnValue(Promise.resolve({
      error: null,
      user: { name: 'TEST' }
    }));
    fixture = TestBed.createComponent(RedirectComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(extAuthSpy.getUserInfo).toHaveBeenCalled();
    expect(authSpy.loginWith).toHaveBeenCalledWith({ test: '1' });
    expect(userServSpy.setCurrentUser).toHaveBeenCalledWith({name: 'TEST'});
    expect(router.navigate).toHaveBeenCalledWith(['/profile']);
  });

  it('should show err on external login', async () => {
    const router: Router = TestBed.get(Router);
    spyOn(router, 'navigate');
    extAuthSpy.getUserInfo.and.returnValue(Promise.resolve({ test: '1' }));
    authSpy.loginWith.and.returnValue(Promise.resolve({
      error: 'Err'
    }));
    spyOn(window, 'alert');
    fixture = TestBed.createComponent(RedirectComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(window.alert).toHaveBeenCalledWith('Err');
  });

});
