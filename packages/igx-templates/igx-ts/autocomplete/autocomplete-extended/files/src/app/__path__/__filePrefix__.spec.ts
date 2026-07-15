import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule, IgxToastModule } from '<%=igxPackage%>';
import {
  <%=ClassName%>,
  <%=ClassName%>PipeStartsWith,
  <%=ClassName%>RegionContains
} from './<%=filePrefix%>';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        <%=ClassName%>,
        <%=ClassName%>PipeStartsWith,
        <%=ClassName%>RegionContains,
        FormsModule,
        IgxDropDownModule,
        IgxAutocompleteModule,
        IgxInputGroupModule,
        IgxToastModule,
        NoopAnimationsModule
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
