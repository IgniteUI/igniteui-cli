import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { <%=ClassName%> } from './<%=filePrefix%>';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [<%=ClassName%>],
      imports: [IgxRadialGaugeModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    vi.useFakeTimers();
    fixture = TestBed.createComponent(<%=ClassName%>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.useRealTimers();
    fixture.destroy();
  });

  it('should create', () => {
    vi.advanceTimersByTime(1000);
    expect(component).toBeTruthy();
    // disable animation
    component.radialGauge.transitionDuration = 0;
  });
});
