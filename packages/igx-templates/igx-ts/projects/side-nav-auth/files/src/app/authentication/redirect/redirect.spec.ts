import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { of } from 'rxjs';
import { Authentication } from '../services/authentication';
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user-store';
import { Redirect } from './redirect';

describe('Redirect', () => {
  let fixture: ComponentFixture<Redirect>;
  const activeRouteSpy: any = { snapshot: { data: { provider: {} } } };
  const extAuthSpy = { getUserInfo: vi.fn() };
  const authSpy = { loginWith: vi.fn() };
  const userServSpy = { setCurrentUser: vi.fn() };
  const oidcSecuritySpy = { checkAuth: vi.fn() };

  afterEach(() => { vi.restoreAllMocks(); });

  beforeEach(async () => {
    oidcSecuritySpy.checkAuth.mockReturnValue(of(null));
    await TestBed.configureTestingModule({
	  imports: [RouterTestingModule, Redirect],
      providers: [
        { provide: ActivatedRoute, useValue: activeRouteSpy },
        { provide: ExternalAuth, useValue: extAuthSpy },
        { provide: Authentication, useValue: authSpy },
        { provide: UserStore, useValue: userServSpy },
        { provide: OidcSecurityService, useValue: oidcSecuritySpy }
      ]
    })
      .compileComponents();
  });

  it('should try external login on init', async () => {
    const router: Router = TestBed.inject(Router);
    vi.spyOn(router, 'navigate');
    extAuthSpy.getUserInfo.mockResolvedValue({ test: '1' });
    authSpy.loginWith.mockResolvedValue({
      error: null,
      user: { name: 'TEST' }
    });
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
    vi.spyOn(router, 'navigate');
    extAuthSpy.getUserInfo.mockResolvedValue({ test: '1' });
    authSpy.loginWith.mockResolvedValue({
      error: 'Err'
    });
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    fixture = TestBed.createComponent(Redirect);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(window.alert).toHaveBeenCalledWith('Err');
  });
});
