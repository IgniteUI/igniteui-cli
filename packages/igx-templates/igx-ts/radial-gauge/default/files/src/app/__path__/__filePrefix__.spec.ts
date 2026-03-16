import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { <%=ClassName%> } from './<%=filePrefix%>';
import * as igGauges from 'igniteui-angular-gauges';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  // mock method specific to RadialGauge
  vi.spyOn(igGauges.XamRadialGauge.prototype, 'im').mockImplementation(() => { /* mock */ });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
	  imports: [IgxRadialGaugeModule, NoopAnimationsModule, <%=ClassName%>]
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
    component.radialGauge.transitionDuration = 0;
  });
});
