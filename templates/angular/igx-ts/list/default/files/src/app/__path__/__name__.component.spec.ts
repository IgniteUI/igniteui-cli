import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { $(ClassName)Component } from './$(filePrefix).component';
import { IgxListModule, IgxAvatarModule, IgxIconModule, IgxFilterModule } from 'igniteui-angular/main';

describe('$(ClassName)Component', () => {
  let component: $(ClassName)Component;
  let fixture: ComponentFixture<$(ClassName)Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [$(ClassName)Component],
      imports: [ FormsModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxFilterModule ]
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
