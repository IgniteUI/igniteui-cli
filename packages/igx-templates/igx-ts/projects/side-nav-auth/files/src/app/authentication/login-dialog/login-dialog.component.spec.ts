import { EventEmitter, Component, Output, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

  const checkViews = (login, register) => {
    const loginView = fixture.debugElement.query(By.css('app-login'));
    const registerView = fixture.debugElement.query(By.css('app-register'));
    expect(loginView).toEqual(login);
    expect(registerView).toEqual(register);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDialogComponent, TestSignViewComponent ],
      imports: [ NoopAnimationsModule, IgxDialogModule ]
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

  it('should switch views, show login on open', () => {
    checkViews(jasmine.any(DebugElement), null);
    component.showLogin = false;
    fixture.detectChanges();
    checkViews(null, jasmine.any(DebugElement));
    expect(component.loginDialog.title).toEqual('Register');
    component.open();
    fixture.detectChanges();
    checkViews(jasmine.any(DebugElement), null);
    expect(component.showLogin).toBeTruthy();
    expect(component.loginDialog.title).toEqual('Login');
  });

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
