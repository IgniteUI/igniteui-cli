import { BaseComponent } from "@igniteui/cli-core";

class IgcMaskInputComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Mask Input";
		this.group = "Data Entry & Display";
		this.description = `Text input where user entry is constrained to a configurable character mask`;
	}
}
module.exports = new IgcMaskInputComponent();
