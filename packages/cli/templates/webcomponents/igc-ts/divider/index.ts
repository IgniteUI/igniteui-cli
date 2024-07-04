import { BaseComponent } from "@igniteui/cli-core";

class IgcDividerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Divider";
		this.group = "Data Entry & Display";
		this.description = `Customizable divider component`;
	}
}
module.exports = new IgcDividerComponent();
