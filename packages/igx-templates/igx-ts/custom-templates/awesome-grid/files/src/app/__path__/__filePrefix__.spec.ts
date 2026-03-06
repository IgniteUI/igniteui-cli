import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxAvatarModule,
  IgxBadgeModule,
  IgxGridModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxSwitchModule
} from '<%=igxPackage%>';
import { IgxSparklineCoreModule, IgxSparklineModule } from 'igniteui-angular-charts';
import { <%=ClassName%> } from './<%=filePrefix%>';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        IgxGridModule,
        IgxProgressBarModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxIconModule,
        IgxSwitchModule,
        IgxInputGroupModule,
        IgxSparklineModule,
        IgxSparklineCoreModule,
        <%=ClassName%>
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%=ClassName%>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
