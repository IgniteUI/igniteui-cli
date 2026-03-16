import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxBulletGraphModule } from 'igniteui-angular-gauges';
import { <%=ClassName%> } from './<%=filePrefix%>';
import * as igGauges from 'igniteui-angular-gauges';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  // mock method specific to BulletGraph
  vi.spyOn(igGauges.XamBulletGraph.prototype, 'fb').mockImplementation(() => { /* mock */ });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [<%=ClassName%>],
      imports: [IgxBulletGraphModule, NoopAnimationsModule]
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
