import { ComponentFixture, TestBed } from '@angular/core/testing';
import { <%=ClassName%> } from './<%=filePrefix%>';
import { IgxStepperModule, IgxButtonModule, IgxButtonGroupModule } from '<%=igxPackage%>';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
	  imports: [NoopAnimationsModule, IgxStepperModule, IgxButtonModule, IgxButtonGroupModule, <%=ClassName%>]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(<%=ClassName%>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
