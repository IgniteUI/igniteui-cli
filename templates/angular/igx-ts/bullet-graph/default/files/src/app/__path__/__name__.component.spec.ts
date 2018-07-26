import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { $(ClassName)Component } from './$(filePrefix).component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxBulletGraphModule } from 'igniteui-angular-gauges/ES5/igx-bullet-graph-module';

describe('$(ClassName)Component', () => {
  let component: $(ClassName)Component;
  let fixture: ComponentFixture<$(ClassName)Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [$(ClassName)Component],
      imports: [IgxBulletGraphModule, NoopAnimationsModule]
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
