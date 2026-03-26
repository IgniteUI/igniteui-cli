import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxComboModule, IgxIconComponent, IgxTooltipModule, IgxTreeComponent, IgxTreeNodeComponent } from '<%=igxPackage%>';
import { <%=ClassName%> } from './<%=filePrefix%>';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [<%=ClassName%>],
      imports: [IgxComboModule, NoopAnimationsModule, IgxTooltipModule, IgxIconComponent, IgxTreeComponent, IgxTreeNodeComponent]
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
