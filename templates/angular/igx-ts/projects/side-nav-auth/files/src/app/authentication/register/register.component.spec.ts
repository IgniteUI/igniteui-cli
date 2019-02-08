import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';

import { RegisterComponent } from './register.component';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  const authSpy = jasmine.createSpyObj('AuthenticationService', ['register']);
  const userServSpy = jasmine.createSpyObj('UserService', ['setCurrentUser']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, NoopAnimationsModule, RouterTestingModule,
        IgxInputGroupModule, IgxButtonModule, IgxIconModule, IgxRippleModule ],
      declarations: [ RegisterComponent ],
      providers: [
        { provide: AuthenticationService, useValue: authSpy },
        { provide: UserService, useValue: userServSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit login data',  async () => {
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls['given_name'].setValue('John');
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls['email'].setValue('test@example.com');
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls['password'].setValue('123456');
    expect(component.registrationForm.valid).toBeTruthy();
    component.registrationForm.controls['family_name'].setValue('Doe');
    spyOn(component.registered, 'emit');
    authSpy.register.and.returnValue(Promise.resolve({
      error: null,
      user: { name: 'John Doe' }
    }));
    await component.tryRegister();
    expect(authSpy.register).toHaveBeenCalledTimes(1);
    expect(authSpy.register).toHaveBeenCalledWith({
      given_name: 'John',
      family_name: 'Doe',
      email: 'test@example.com',
      password: '123456'
    });
    expect(userServSpy.setCurrentUser).toHaveBeenCalledWith({name: 'John Doe'});
    expect(component.registered.emit).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/profile']);
    authSpy.register.and.returnValue(Promise.resolve({
      error: 'Reg error'
    }));
    spyOn(window, 'alert');
    await component.tryRegister();
    expect(window.alert).toHaveBeenCalledWith('Reg error');
  });
  
  it(`should properly emit when 'showLoginForm' is called`, () => {
    spyOn(component.viewChange, 'emit');
    component.showLoginForm();
    expect(component.viewChange.emit).toHaveBeenCalled();
  });
});
