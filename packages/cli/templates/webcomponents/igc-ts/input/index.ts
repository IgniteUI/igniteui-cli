import { BaseComponent } from "@igniteui/cli-core";

class IgcInputComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Input";
		this.group = "Data Entry & Display";
		this.description = `Customizable input component`;
	}
}
module.exports = new IgcInputComponent();
