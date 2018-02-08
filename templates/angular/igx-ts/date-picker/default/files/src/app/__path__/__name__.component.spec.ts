import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { $(ClassName)Component } from './$(filePrefix).component';
import { IgxDatePickerModule } from 'igniteui-angular/main';

describe('$(ClassName)Component', () => {
	let component: $(ClassName)Component;
	let fixture: ComponentFixture<$(ClassName)Component>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [$(ClassName)Component],
			imports: [IgxDatePickerModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent($(ClassName)Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
