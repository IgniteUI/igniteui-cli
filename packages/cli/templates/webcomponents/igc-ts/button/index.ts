import { BaseComponent } from "@igniteui/cli-core";

class IgcButtonComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Button";
		this.group = "Data Entry & Display";
		this.description = `Customizable button component`;
	}
}
module.exports = new IgcButtonComponent();
