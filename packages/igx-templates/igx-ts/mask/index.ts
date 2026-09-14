import { BaseComponent } from "@igniteui/cli-core";

class IgxMaskComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Mask";
		this.group = "Data Entry & Display";
		this.description = "controls user input and formats the visible value based on configurable mask rules";
	}
}
module.exports = new IgxMaskComponent();
