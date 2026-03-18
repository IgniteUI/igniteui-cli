import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { <%=ClassName%> } from './<%=filePrefix%>';
import { IgxGridModule, IgxButtonModule, IgxSwitchModule, IgxSliderModule, IgxCheckboxModule, IgxDialogModule, IgxIconComponent, IgxButtonGroupComponent, IgxFocusModule } from '<%=igxPackage%>';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ <%=ClassName%> ],
      imports: [ FormsModule, BrowserAnimationsModule,
        IgxGridModule, IgxDialogModule, IgxCategoryChartModule,
        IgxButtonModule, IgxSwitchModule, IgxSliderModule, IgxCheckboxModule,
        IgxButtonGroupComponent, IgxIconComponent, IgxFocusModule ],
      teardown: { destroyAfterEach: false }
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
