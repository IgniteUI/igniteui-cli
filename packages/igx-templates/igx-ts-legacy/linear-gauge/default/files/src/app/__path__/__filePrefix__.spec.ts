import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges';
import { <%=ClassName%> } from './<%=filePrefix%>';
import * as gauges from 'igniteui-angular-gauges';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  // mock method specific to LinearGauge
  vi.spyOn(gauges.XamLinearGaugeView.prototype, 'ar').mockImplementation(() => { /* mock */ });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [<%=ClassName%>],
      imports: [IgxLinearGaugeModule, NoopAnimationsModule]
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
    // disable animation
    component.linearGauge.transitionDuration = 0;
  });
});
