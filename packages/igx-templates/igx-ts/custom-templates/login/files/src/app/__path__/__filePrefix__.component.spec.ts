import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';
import { IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule } from '<%=igxPackage%>';

const MAIL_GROUP_NAME = 'email';
const PASSWORD_GROUP_NAME = 'password';
const NEW_MAIL_GROUP_NAME = 'newEmail';
const NEW_PASSWORD_GROUP_NAME = 'newPassword';
const FIRST_NAME_GROUP_NAME = 'firstName';
const LAST_NAME_GROUP_NAME = 'lastName';

describe('<%=ClassName%>Component', () => {
  let component: <%=ClassName%>Component;
  let fixture: ComponentFixture<<%=ClassName%>Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        NoopAnimationsModule,
        IgxInputGroupModule,
        IgxButtonModule,
        IgxIconModule,
        IgxRippleModule,
        <%=ClassName%>Component,
      ],
      providers: [
        { provide: ExternalAuthService, useValue: extAuthSpy },
        { provide: AuthenticationService, useValue: authSpy },
        { provide: UserService, useValue: userServSpy },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%=ClassName%>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not allow login until valid',  async () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls[MAIL_GROUP_NAME].setValue('test@example.com');
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls[PASSWORD_GROUP_NAME].setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should not allow register until valid',  async () => {
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls[NEW_MAIL_GROUP_NAME].setValue('test@example.com');
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls[FIRST_NAME_GROUP_NAME].setValue('John');
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls[LAST_NAME_GROUP_NAME].setValue('Doe');
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls[NEW_PASSWORD_GROUP_NAME].setValue('123456');
    expect(component.registrationForm.valid).toBeTruthy();
  });
});
