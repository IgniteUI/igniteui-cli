import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { <%=ClassName%> } from './<%=filePrefix%>';
import { <%=ClassName%>TreeGridGrouping } from './tree-grid-grouping';
import { IgxTreeGridModule, IgxCheckboxModule, IgxButtonModule, IgxSliderModule, IgxSwitchModule } from '<%=igxPackage%>';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        IgxTreeGridModule,
        IgxCheckboxModule,
        IgxButtonModule,
        IgxSliderModule,
        IgxSwitchModule,
        <%=ClassName%>,
        <%=ClassName%>TreeGridGrouping
      ]
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
