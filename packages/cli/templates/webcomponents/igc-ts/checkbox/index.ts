import { BaseComponent } from "@igniteui/cli-core";

class IgcCheckboxComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Checkbox";
		this.group = "Data Entry & Display";
		this.description = `Customizable checkbox component`;
	}
}
module.exports = new IgcCheckboxComponent();
