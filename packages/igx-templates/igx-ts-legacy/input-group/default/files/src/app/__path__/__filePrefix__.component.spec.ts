import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxButtonModule,
  IgxComboModule,
  IgxDatePickerModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxRippleModule,
  IgxSelectModule,
  IgxTimePickerModule
} from '<%=igxPackage%>';
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';

describe('<%=ClassName%>Component', () => {
  let component: <%=ClassName%>Component;
  let fixture: ComponentFixture<<%=ClassName%>Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [<%=ClassName%>Component],
      imports: [
        FormsModule,
		ReactiveFormsModule,
        NoopAnimationsModule,
        IgxInputGroupModule,
        IgxButtonModule,
        IgxRippleModule,
        IgxIconModule,
        IgxComboModule,
        IgxDatePickerModule,
        IgxTimePickerModule,
        IgxSelectModule
      ]
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
});
