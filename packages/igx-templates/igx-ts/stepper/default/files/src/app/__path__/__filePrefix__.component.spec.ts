import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';
import { IgxStepperModule, IgxButtonModule, IgxButtonGroupModule } from '<%=igxPackage%>';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('<%=ClassName%>Component', () => {
  let component: <%=ClassName%>Component;
  let fixture: ComponentFixture<<%=ClassName%>Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
	  imports: [NoopAnimationsModule, IgxStepperModule, IgxButtonModule, IgxButtonGroupModule, <%=ClassName%>Component]
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
