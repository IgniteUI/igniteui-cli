import { BaseComponent } from "@igniteui/cli-core";

class IgcIconButtonComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Icon button";
		this.group = "Data Entry & Display";
		this.description = `Customizable icon button component`;
	}
}
module.exports = new IgcIconButtonComponent();
