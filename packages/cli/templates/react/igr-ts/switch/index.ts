import { BaseComponent } from "@igniteui/cli-core";

class IgrSwitchComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Switch";
		this.group = "Data Entry & Display";
		this.description = `represents a switch component`;
	}
}
module.exports = new IgrSwitchComponent();
