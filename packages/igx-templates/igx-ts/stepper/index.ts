import { BaseComponent } from "@igniteui/cli-core";

class IgxStepperComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Stepper";
		this.group = "Layouts";
		this.description = `visualizes content as a process and shows its progress by dividing the content into successive steps`;
	}
}
module.exports = new IgxStepperComponent();