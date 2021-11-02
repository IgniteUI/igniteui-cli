import { BaseComponent } from "@igniteui/cli-core";

class IgcRadioGroupComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Radio Group";
		this.group = "Data Entry & Display";
		this.description = `Customizable radio group component`;
	}
}
module.exports = new IgcRadioGroupComponent();
