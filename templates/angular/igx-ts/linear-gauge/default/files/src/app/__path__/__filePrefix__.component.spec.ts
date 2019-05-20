import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { $(ClassName)Component } from './$(filePrefix).component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges/ES5/igx-linear-gauge-module';

describe('$(ClassName)Component', () => {
  let component: $(ClassName)Component;
  let fixture: ComponentFixture<$(ClassName)Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [$(ClassName)Component],
      imports: [IgxLinearGaugeModule, NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent($(ClassName)Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
