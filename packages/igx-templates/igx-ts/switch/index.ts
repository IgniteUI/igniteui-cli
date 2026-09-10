import { BaseComponent } from "@igniteui/cli-core";

class IgxSwitchComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Switch";
		this.group = "Data Entry & Display";
		this.description = "a selection component that allows users to make a binary choice for a condition";
	}
}
module.exports = new IgxSwitchComponent();
