import { BaseComponent } from "@igniteui/cli-core";

class IgcSelectComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Select";
		this.group = "Data Entry & Display";
		this.description = `Provides an input with a dropdown list allowing selection of a single item`;
	}
}
module.exports = new IgcSelectComponent();
