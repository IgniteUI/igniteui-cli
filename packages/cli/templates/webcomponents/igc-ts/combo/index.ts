import { BaseComponent } from "@igniteui/cli-core";

class IgcComboComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Combo";
		this.group = "Data Entry & Display";
		this.description = `Provides easy filtering and selection of multiple items from a data-bound list`;
	}
}
module.exports = new IgcComboComponent();
