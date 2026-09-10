import { BaseComponent } from "@igniteui/cli-core";

class IgcStepperComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Stepper";
		this.group = "Layouts";
		this.description = `Visualizes content as a process divided into steps`;
	}
}
module.exports = new IgcStepperComponent();
