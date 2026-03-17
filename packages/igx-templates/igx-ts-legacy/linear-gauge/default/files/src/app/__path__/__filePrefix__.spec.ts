import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges';
import { <%=ClassName%> } from './<%=filePrefix%>';
import * as gauges from 'igniteui-angular-gauges';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [<%=ClassName%>],
      imports: [IgxLinearGaugeModule]
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
    component.linearGauge.transitionDuration = 0;
  });
});
