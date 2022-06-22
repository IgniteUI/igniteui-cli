import { BaseComponent } from "@igniteui/cli-core";

class IgcDropdownComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Dropdown";
		this.group = "Data Entry & Display";
		this.description = `Displays a toggleable list of predefined values`;
	}
}
module.exports = new IgcDropdownComponent();
