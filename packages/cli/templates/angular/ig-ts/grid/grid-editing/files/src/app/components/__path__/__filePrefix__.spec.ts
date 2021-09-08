import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { $(ClassName)Component } from './$(filePrefix).component';
import { IgniteUIModule } from 'igniteui-angular-wrappers';
import { FormsModule } from '@angular/forms';

declare var $: any;

describe('$(ClassName)Component', () => {
  let component: $(ClassName)Component;
  let fixture: ComponentFixture<$(ClassName)Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [$(ClassName)Component],
      imports: [IgniteUIModule, FormsModule]
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
