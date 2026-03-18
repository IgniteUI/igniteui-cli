import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxGridModule, IgxDatePickerModule, IgxCheckboxModule, IgxDialogModule, IgxHierarchicalGridModule, IgxInputGroupModule
} from '<%=igxPackage%>';
import { <%=ClassName%> } from './<%=filePrefix%>';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [<%=ClassName%>],
      imports: [
        FormsModule,
        NoopAnimationsModule,
        IgxGridModule,
        IgxHierarchicalGridModule,
        IgxDatePickerModule,
        IgxCheckboxModule,
        IgxDialogModule,
        IgxInputGroupModule
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
