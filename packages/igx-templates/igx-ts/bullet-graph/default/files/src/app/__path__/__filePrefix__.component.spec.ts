import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxBulletGraphModule } from 'igniteui-angular-gauges';
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';

describe('<%=ClassName%>Component', () => {
  let component: <%=ClassName%>Component;
  let fixture: ComponentFixture<<%=ClassName%>Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IgxBulletGraphModule, NoopAnimationsModule, <%=ClassName%>Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%=ClassName%>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // disable animation
    component.bulletGraph.transitionDuration = 0;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
