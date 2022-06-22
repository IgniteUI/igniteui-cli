import { BaseComponent } from "@igniteui/cli-core";

class IgcTreeComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Tree";
		this.group = "Grids & Lists";
		this.description = `Basic tree component`;
	}
}
module.exports = new IgcTreeComponent();
