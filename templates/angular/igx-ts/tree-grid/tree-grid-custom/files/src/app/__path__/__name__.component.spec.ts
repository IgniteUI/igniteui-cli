import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { $(ClassName)Component } from './$(filePrefix).component';
import { IgxTreeGridModule, IgxDatePickerModule, IgxCheckboxModule } from 'igniteui-angular';

describe('$(ClassName)Component', () => {
  let component: $(ClassName)Component;
  let fixture: ComponentFixture<$(ClassName)Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ $(ClassName)Component ],
      imports: [ BrowserAnimationsModule, IgxTreeGridModule, IgxDatePickerModule, IgxCheckboxModule ]
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
