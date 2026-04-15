import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IgxBulletGraphModule } from 'igniteui-angular-gauges';
import { <%=ClassName%> } from './<%=filePrefix%>';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgxBulletGraphModule, <%=ClassName%>]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(<%=ClassName%>);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // disable animation
    component.bulletGraph.transitionDuration = 0;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
