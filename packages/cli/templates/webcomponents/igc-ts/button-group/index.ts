import { BaseComponent } from "@igniteui/cli-core";

class IgcButtonGroupComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Button group";
		this.group = "Data Entry & Display";
		this.description = `Basic button group component`;
	}
}
module.exports = new IgcButtonGroupComponent();
