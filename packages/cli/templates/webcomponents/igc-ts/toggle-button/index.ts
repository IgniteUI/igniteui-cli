import { BaseComponent } from "@igniteui/cli-core";

class IgcToggleButtonComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Toggle button";
		this.group = "Data Entry & Display";
		this.description = `Basic toggle button component`;
	}
}
module.exports = new IgcToggleButtonComponent();
