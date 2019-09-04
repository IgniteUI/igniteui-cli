import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { $(ClassName)Component } from './$(filePrefix).component';
import { $(ClassName)TreeGridGroupingPipe } from './tree-grid-grouping.pipe';
import { IgxTreeGridModule, IgxCheckboxModule, IgxButtonModule, IgxSliderModule, IgxSwitchModule } from 'igniteui-angular';

describe('$(ClassName)Component', () => {
  let component: $(ClassName)Component;
  let fixture: ComponentFixture<$(ClassName)Component >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [$(ClassName)Component, $(ClassName)TreeGridGroupingPipe],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        IgxTreeGridModule,
        IgxCheckboxModule,
        IgxButtonModule,
        IgxSliderModule,
        IgxSwitchModule]
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
