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
import { ExternalAuth } from '../services/external-auth';
import { UserStore } from '../services/user-store';
import { provideAuthentication } from '../provide-authentication';
import { LoginBar } from './login-bar';

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
    hasProvider() { }
  }

  afterEach(() => { vi.restoreAllMocks(); });

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
        LoginBar
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
    expect(fixture.debugElement.query(By.css('.navbar-login')).nativeElement.innerText).toBe('Log In');
    const userStore = TestBed.inject(UserStore);
    vi.spyOn(userStore, 'currentUser', 'get').mockReturnValue({
      picture: 'picture'
    } as any);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.navbar-login'))).toBeNull();
    const avatar: IgxAvatarComponent = fixture.debugElement.query(By.css('igx-avatar')).componentInstance;
    expect(avatar.src).toBe('picture');
  });

  it('should open dialog on button click (not logged)', () => {
    const button = fixture.debugElement.query(By.css('.navbar-login'));
    vi.spyOn(component.loginDialog(), 'open');
    button.triggerEventHandler('click', {});
    expect(component.loginDialog().open).toHaveBeenCalled();
  });

  it('should open drop down on button click (logged in)', async () => {
    const userStore = TestBed.inject(UserStore);
    vi.spyOn(userStore, 'currentUser', 'get').mockReturnValue({
      picture: 'picture'
    } as any);
    fixture.detectChanges();

    const avatar = fixture.debugElement.query(By.css('.profile-avatar'));
    avatar.triggerEventHandler('click', {});
    await fixture.whenStable();
    expect(component.igxDropDown().collapsed).toBeFalsy();
  });

  it('should handle user menu items', async () => {
    const userStore = TestBed.inject(UserStore);
    const externalAuth = TestBed.inject(ExternalAuth);
    const router: Router = TestBed.inject(Router);
    vi.spyOn(router, 'navigate');
    vi.spyOn(userStore, 'clearCurrentUser');
    vi.spyOn(externalAuth, 'logout');

    const dropdown = component.igxDropDown();
    dropdown.open();
    dropdown.setSelectedItem(0);
    expect(router.navigate).toHaveBeenCalledWith(['/auth/profile']);

    dropdown.setSelectedItem(1);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
    expect(userStore.clearCurrentUser).toHaveBeenCalled();
    expect(externalAuth.logout).toHaveBeenCalled();
  });
});
