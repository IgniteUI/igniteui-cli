import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';
import { IgxStepperModule, IgxButtonModule, IgxButtonGroupModule } from '<%=igxPackage%>';

describe('<%=ClassName%>Component', () => {
  let component: <%=ClassName%>Component;
  let fixture: ComponentFixture<<%=ClassName%>Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [<%=ClassName%>Component],
      imports: [ IgxStepperModule, IgxButtonModule, IgxButtonGroupModule ]
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