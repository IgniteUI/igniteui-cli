import { BaseComponent } from "@igniteui/cli-core";

class IgrStepperComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Stepper";
		this.group = "Layouts";
		this.description = `divides content into logical steps within a wizard-like workflow`;
	}
}
module.exports = new IgrStepperComponent();
