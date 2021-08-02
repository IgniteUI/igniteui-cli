import { Component, DebugElement, EventEmitter, Output } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDialogModule } from 'igniteui-angular';
import { LoginDialogComponent } from './login-dialog.component';

@Component({
  selector: 'app-login, app-register',
  template: ''
})
class TestSignViewComponent {
  @Output() public viewChange = new EventEmitter();
  @Output() public loggedIn = new EventEmitter();
  @Output() public registered = new EventEmitter();
}

describe('LoginDialogComponent', () => {
  let component: LoginDialogComponent;
  let fixture: ComponentFixture<LoginDialogComponent>;

  const checkViews = (): { loginView: DebugElement, registerView: DebugElement } => {
    const loginView = fixture.debugElement.query(By.css('app-login'));
    const registerView = fixture.debugElement.query(By.css('app-register'));
    return { loginView, registerView };
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDialogComponent, TestSignViewComponent],
      imports: [NoopAnimationsModule, IgxDialogModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogComponent);
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
    spyOn(component.loginDialog, 'close');

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
