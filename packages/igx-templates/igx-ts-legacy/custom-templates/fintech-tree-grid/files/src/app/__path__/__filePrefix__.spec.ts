import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { <%=ClassName%> } from './<%=filePrefix%>';
import { <%=ClassName%>TreeGridGroupingPipe } from './tree-grid-grouping.pipe';
import { IgxTreeGridModule, IgxCheckboxModule, IgxButtonModule, IgxSliderModule, IgxSwitchModule } from '<%=igxPackage%>';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ <%=ClassName%>, <%=ClassName%>TreeGridGroupingPipe ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        IgxTreeGridModule,
        IgxCheckboxModule,
        IgxButtonModule,
        IgxSliderModule,
        IgxSwitchModule]
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
