import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { $(ClassName)Component } from './$(filePrefix).component';
import { IgxFinancialChartModule } from 'igniteui-angular-charts/ES5/igx-financial-chart-module';

describe('$(ClassName)Component', () => {
  let component: $(ClassName)Component;
  let fixture: ComponentFixture<$(ClassName)Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [$(ClassName)Component],
      imports: [IgxFinancialChartModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent($(ClassName)Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', done => {
    expect(component).toBeTruthy();
    fixture.whenStable().then(done);
  });
});
