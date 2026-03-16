import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { <%=ClassName%> } from './<%=filePrefix%>';
import {
    IgxButtonModule,
    IgxCardModule,
    IgxExpansionPanelModule,
    IgxIconModule
} from '<%=igxPackage%>';
describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        IgxButtonModule,
        IgxCardModule,
        IgxExpansionPanelModule,
        IgxIconModule,
        <%=ClassName%>
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
