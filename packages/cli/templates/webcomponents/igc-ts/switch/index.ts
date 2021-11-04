import { BaseComponent } from "@igniteui/cli-core";

class IgcSwitchComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Switch";
		this.group = "Data Entry & Display";
		this.description = `Basic switch component`;
	}
}
module.exports = new IgcSwitchComponent();
