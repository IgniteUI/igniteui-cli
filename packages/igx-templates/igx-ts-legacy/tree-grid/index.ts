import { BaseComponent } from "@igniteui/cli-core";

class IgxGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Tree Grid";
		this.group = "Grids & Lists";
		this.description = "pick from tree grid templates";
		this.groupPriority = 9;
	}
}
module.exports = new IgxGridComponent();
