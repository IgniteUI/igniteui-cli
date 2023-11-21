import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';
import { IgxGridModule, IgxButtonModule, IgxSwitchModule, IgxSliderModule, IgxCheckboxModule, IgxDialogModule } from '<%=igxPackage%>';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

describe('<%=ClassName%>Component', () => {
  let component: <%=ClassName%>Component;
  let fixture: ComponentFixture<<%=ClassName%>Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ <%=ClassName%>Component ],
      imports: [ FormsModule, BrowserAnimationsModule,
        IgxGridModule, IgxDialogModule, IgxCategoryChartModule,
        IgxButtonModule, IgxSwitchModule, IgxSliderModule, IgxCheckboxModule ]
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
