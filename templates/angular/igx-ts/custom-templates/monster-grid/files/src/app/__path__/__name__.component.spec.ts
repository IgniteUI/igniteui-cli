import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxExcelExporterService } from 'igniteui-angular';

import { $(ClassName)Component } from './$(filePrefix).component';

import {
  IgxGridModule,
  IgxAvatarModule,
  IgxBadgeModule,
  IgxButtonModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxRippleModule,
  IgxSwitchModule,
  IgxToggleModule,
  IgxCheckboxModule
} from 'igniteui-angular';
describe('$(ClassName)Component', () => {
  let component: $(ClassName)Component;
  let fixture: ComponentFixture<$(ClassName)Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ $(ClassName)Component ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        IgxGridModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxButtonModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRippleModule,
        IgxSwitchModule,
        IgxToggleModule,
        IgxCheckboxModule
      ],
      providers: [IgxExcelExporterService]
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
