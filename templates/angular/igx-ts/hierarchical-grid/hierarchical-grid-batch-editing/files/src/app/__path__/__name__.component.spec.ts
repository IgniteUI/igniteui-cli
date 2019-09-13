import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
    IgxGridModule, IgxDatePickerModule, IgxCheckboxModule, IgxDialogModule, IgxHierarchicalGridModule
} from 'igniteui-angular';
import { $(ClassName)Component } from './$(filePrefix).component';
import { HierarchicalGridWithTransactionsComponent } from './__name__-transactions.component';

describe('$(ClassName)Component', () => {
  let component: $(ClassName)Component;
  let fixture: ComponentFixture<$(ClassName)Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ $(ClassName)Component, HierarchicalGridWithTransactionsComponent ],
      imports: [ FormsModule, NoopAnimationsModule, IgxGridModule, IgxHierarchicalGridModule,
         IgxDatePickerModule, IgxCheckboxModule, IgxDialogModule ]
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
