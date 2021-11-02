import { BaseComponent } from "@igniteui/cli-core";

class IgcRadioComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Radio";
		this.group = "Data Entry & Display";
		this.description = `Customizable radio component`;
	}
}
module.exports = new IgcRadioComponent();
