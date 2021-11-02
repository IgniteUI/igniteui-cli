import { BaseComponent } from "@igniteui/cli-core";

class IgcButtonComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "List";
		this.group = "Grids & Lists";
		this.description = `Customizable list component`;
	}
}
module.exports = new IgcButtonComponent();
