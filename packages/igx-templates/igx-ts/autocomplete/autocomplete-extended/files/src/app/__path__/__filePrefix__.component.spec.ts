import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule, IgxToastModule } from '<%=igxPackage%>';
import {
  <%=ClassName%>Component,
  <%=ClassName%>PipeStartsWith,
  <%=ClassName%>RegionContains
} from './<%=filePrefix%>.component';

describe('<%=ClassName%>Component', () => {
  let component: <%=ClassName%>Component;
  let fixture: ComponentFixture<<%=ClassName%>Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        <%=ClassName%>Component,
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
