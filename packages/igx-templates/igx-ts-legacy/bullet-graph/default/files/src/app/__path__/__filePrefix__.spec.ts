import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IgxBulletGraphModule } from 'igniteui-angular-gauges';
import { <%=ClassName%> } from './<%=filePrefix%>';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [<%=ClassName%>],
      imports: [IgxBulletGraphModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    vi.useFakeTimers();
    fixture = TestBed.createComponent(<%=ClassName%>);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // disable animation
    component.bulletGraph.transitionDuration = 0;
  });

  afterEach(() => {
    vi.useRealTimers();
    fixture.destroy();
  });

  it('should create', () => {
    vi.advanceTimersByTime(1000);
    expect(component).toBeTruthy();
  });
});
