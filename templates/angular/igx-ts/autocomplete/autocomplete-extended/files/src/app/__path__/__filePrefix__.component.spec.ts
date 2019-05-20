import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { $(ClassName)Component, $(ClassName)PipeStartsWith,
    $(ClassName)RegionContains } from './$(filePrefix).component';
import { IgxDropDownModule, IgxAutocompleteModule, IgxInputGroupModule, IgxToastModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

describe('$(ClassName)Component', () => {
    let component: $(ClassName)Component;
    let fixture: ComponentFixture<$(ClassName)Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [$(ClassName)Component, $(ClassName)PipeStartsWith, $(ClassName)RegionContains],
            imports: [FormsModule, IgxDropDownModule, IgxAutocompleteModule, NoopAnimationsModule, IgxInputGroupModule, IgxToastModule]
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
