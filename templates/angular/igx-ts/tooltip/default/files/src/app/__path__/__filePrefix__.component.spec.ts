import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { $(ClassName)Component } from './$(filePrefix).component';
import { IgxTooltipModule, IgxAvatarModule, IgxSwitchModule } from 'igniteui-angular';

describe('$(ClassName)Component', () => {
  let component: $(ClassName)Component;
  let fixture: ComponentFixture<$(ClassName)Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [$(ClassName)Component],
      imports: [NoopAnimationsModule, FormsModule, IgxTooltipModule, IgxAvatarModule, IgxSwitchModule]
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
