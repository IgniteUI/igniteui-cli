import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxExcelExporterService, IgxCsvExporterService } from '<%=igxPackage%>';
import { IgxSparklineModule, IgxSparklineCoreModule } from 'igniteui-angular-charts';

import { <%=ClassName%> } from './<%=filePrefix%>';

import {
  IgxGridModule,
  IgxAvatarModule,
  IgxBadgeModule,
  IgxButtonModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxRippleModule,
  IgxSwitchModule,
  IgxToggleModule,
  IgxCheckboxModule
} from '<%=igxPackage%>';
describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        IgxGridModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxButtonModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRippleModule,
        IgxSwitchModule,
        IgxToggleModule,
        IgxCheckboxModule,
        IgxSparklineModule,
        IgxSparklineCoreModule,
        <%=ClassName%>
      ],
      providers: [IgxExcelExporterService, IgxCsvExporterService]
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
