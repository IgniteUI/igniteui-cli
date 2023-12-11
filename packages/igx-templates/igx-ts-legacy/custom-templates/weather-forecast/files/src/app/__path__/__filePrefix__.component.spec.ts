import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';
import {
    IgxButtonModule,
    IgxCardModule,
    IgxExpansionPanelModule,
    IgxIconModule
} from '<%=igxPackage%>';
describe('<%=ClassName%>Component', () => {
  let component: <%=ClassName%>Component;
  let fixture: ComponentFixture<<%=ClassName%>Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [<%=ClassName%>Component],
      imports: [
        BrowserAnimationsModule,
        IgxButtonModule,
        IgxCardModule,
        IgxExpansionPanelModule,
        IgxIconModule
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
