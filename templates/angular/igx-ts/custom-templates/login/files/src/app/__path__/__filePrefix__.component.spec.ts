import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { $(ClassName)Component } from './$(filePrefix).component';
import { IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';

describe('$(ClassName)Component', () => {
  let component: $(ClassName)Component;
  let fixture: ComponentFixture<$(ClassName)Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [$(ClassName)Component],
      imports: [ ReactiveFormsModule, NoopAnimationsModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent($(ClassName)Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not allow login until valid',  async () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['email'].setValue('test@example.com');
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['password'].setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should not allow register until valid',  async () => {
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls['newEmail'].setValue('test@example.com');
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls['firstName'].setValue('John');
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls['lastName'].setValue('Doe');
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls['newPassword'].setValue('123456');
    expect(component.registrationForm.valid).toBeTruthy();
  });
});
