import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';
import {
  IgxGridModule,
  IgxProgressBarModule,
  IgxAvatarModule,
  IgxBadgeModule,
  IgxIconModule,
  IgxSwitchModule,
  IgxInputGroupModule
} from 'igniteui-angular';
import { IgxSparklineModule, IgxSparklineCoreModule } from 'igniteui-angular-charts';
describe('<%=ClassName%>Component', () => {
  let component: <%=ClassName%>Component;
  let fixture: ComponentFixture<<%=ClassName%>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%=ClassName%>Component ],
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
