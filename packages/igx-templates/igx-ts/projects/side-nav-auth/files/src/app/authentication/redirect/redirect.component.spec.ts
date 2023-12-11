import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../services/authentication.service';
import { ExternalAuthService } from '../services/external-auth.service';
import { UserService } from '../services/user.service';
import { RedirectComponent } from './redirect.component';

describe('RedirectComponent', () => {
  let fixture: ComponentFixture<RedirectComponent>;
  const activeRouteSpy: any = { snapshot: { data: { value: { provider: {} } } } };
  const extAuthSpy = jasmine.createSpyObj('ExternalAuthService', ['getUserInfo']);
  const authSpy = jasmine.createSpyObj('AuthenticationService', ['loginWith']);
  const userServSpy = jasmine.createSpyObj('UserService', ['setCurrentUser']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
	  imports: [RouterTestingModule, RedirectComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activeRouteSpy },
        { provide: ExternalAuthService, useValue: extAuthSpy },
        { provide: AuthenticationService, useValue: authSpy },
        { provide: UserService, useValue: userServSpy }
      ]
    })
      .compileComponents();
  }));

  it('should try external login on init', async () => {
    const router: Router = TestBed.inject(Router);
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
    fixture = TestBed.createComponent(RedirectComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(window.alert).toHaveBeenCalledWith('Err');
  });
});
