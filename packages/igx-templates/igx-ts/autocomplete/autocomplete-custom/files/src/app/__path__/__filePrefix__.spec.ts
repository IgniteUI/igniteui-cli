import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule } from '<%=igxPackage%>';
import { <%=ClassName%>, <%=ClassName%>PipeStartsWith } from './<%=filePrefix%>';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, IgxDropDownModule, IgxAutocompleteModule, NoopAnimationsModule,
		IgxInputGroupModule, <%=ClassName%>, <%=ClassName%>PipeStartsWith]
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
