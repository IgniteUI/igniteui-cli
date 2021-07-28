import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';

describe('<%=ClassName%>Component', () => {
  let component: <%=ClassName%>Component;
  let fixture: ComponentFixture<<%=ClassName%>Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [<%=ClassName%>Component],
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
        IgxSparklineCoreModule
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
