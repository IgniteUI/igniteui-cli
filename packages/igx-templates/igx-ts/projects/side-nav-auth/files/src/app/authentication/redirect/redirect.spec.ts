import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Authentication } from '../services/authentication';
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user-store';
import { Redirect } from './redirect';

describe('Redirect', () => {
  let fixture: ComponentFixture<Redirect>;
  const activeRouteSpy: any = { snapshot: { data: { value: { provider: {} } } } };
  const extAuthSpy = jasmine.createSpyObj('ExternalAuth', ['getUserInfo']);
  const authSpy = jasmine.createSpyObj('Authentication', ['loginWith']);
  const userServSpy = jasmine.createSpyObj('UserStore', ['setCurrentUser']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
	  imports: [RouterTestingModule, Redirect],
      providers: [
        { provide: ActivatedRoute, useValue: activeRouteSpy },
        { provide: ExternalAuth, useValue: extAuthSpy },
        { provide: Authentication, useValue: authSpy },
        { provide: UserStore, useValue: userServSpy }
      ]
    })
      .compileComponents();
  });

  it('should try external login on init', async () => {
    const router: Router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    extAuthSpy.getUserInfo.and.returnValue(Promise.resolve({ test: '1' }));
    authSpy.loginWith.and.returnValue(Promise.resolve({
      error: null,
      user: { name: 'TEST' }
    }));
    fixture = TestBed.createComponent(Redirect);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(extAuthSpy.getUserInfo).toHaveBeenCalled();
    expect(authSpy.loginWith).toHaveBeenCalledWith({ test: '1' });
    expect(userServSpy.setCurrentUser).toHaveBeenCalledWith({ name: 'TEST' });
    expect(router.navigate).toHaveBeenCalledWith(['/profile']);
  });

  it('should show err on external login', async () => {
    const router: Router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    extAuthSpy.getUserInfo.and.returnValue(Promise.resolve({ test: '1' }));
    authSpy.loginWith.and.returnValue(Promise.resolve({
      error: 'Err'
    }));
    spyOn(window, 'alert');
    fixture = TestBed.createComponent(Redirect);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(window.alert).toHaveBeenCalledWith('Err');
  });
});
