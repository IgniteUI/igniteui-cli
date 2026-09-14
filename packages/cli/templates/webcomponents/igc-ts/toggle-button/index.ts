import { BaseComponent } from "@igniteui/cli-core";

class IgcToggleButtonComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Toggle button";
		this.group = "Data Entry & Display";
		this.description = `A button that toggles between selected and unselected state`;
	}
}
module.exports = new IgcToggleButtonComponent();
