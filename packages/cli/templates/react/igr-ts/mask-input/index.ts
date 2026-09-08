import { BaseComponent } from "@igniteui/cli-core";

class IgrMaskInputComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Mask Input";
		this.group = "Data Entry & Display";
		this.description = `an input field that formats and validates user input based on a configurable mask`;
	}
}
module.exports = new IgrMaskInputComponent();
