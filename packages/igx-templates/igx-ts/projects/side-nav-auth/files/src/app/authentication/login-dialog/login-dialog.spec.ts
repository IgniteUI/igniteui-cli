import { Component, DebugElement, EventEmitter, Output } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDialogModule } from 'igniteui-angular';
import { LoginDialog } from './login-dialog';

@Component({
  selector: 'app-login, app-register',
  template: '',
  imports: [IgxDialogModule]
})
class TestSignViewComponent {
  @Output() public viewChange = new EventEmitter();
  @Output() public loggedIn = new EventEmitter();
  @Output() public registered = new EventEmitter();
}

describe('LoginDialog', () => {
  let component: LoginDialog;
  let fixture: ComponentFixture<LoginDialog>;

  const checkViews = (): { loginView: DebugElement, registerView: DebugElement } => {
    const loginView = fixture.debugElement.query(By.css('app-login'));
    const registerView = fixture.debugElement.query(By.css('app-register'));
    return { loginView, registerView };
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [NoopAnimationsModule, IgxDialogModule, LoginDialog, TestSignViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch views, show login on open', fakeAsync(() => {
    let result = checkViews();
    expect(result.loginView).not.toBeNull();
    expect(result.registerView).toBeNull();

    component.showLogin = false;
    fixture.detectChanges();
    result = checkViews();
    expect(result.loginView).toBeNull();
    expect(result.registerView).not.toBeNull();
    expect(component.loginDialog.title).toEqual('Register');

    component.open();
    tick();
    fixture.detectChanges();
    result = checkViews();
    expect(result.loginView).not.toBeNull();
    expect(result.registerView).toBeNull();
    expect(component.showLogin).toBeTruthy();
    expect(component.loginDialog.title).toEqual('Login');
  }));

  it('should switch views, close on events', () => {
    let view: TestSignViewComponent = fixture.debugElement.query(By.css('app-login')).componentInstance;
    vi.spyOn(component.loginDialog, 'close').mockImplementation(() => {});

    view.viewChange.emit();
    expect(component.showLogin).toBeFalsy();
    view.loggedIn.emit();
    expect(component.loginDialog.close).toHaveBeenCalledTimes(1);
    fixture.detectChanges();
    view = fixture.debugElement.query(By.css('app-register')).componentInstance;
    view.viewChange.emit();
    expect(component.showLogin).toBeTruthy();
    view.registered.emit();
    expect(component.loginDialog.close).toHaveBeenCalledTimes(2);
  });
});
