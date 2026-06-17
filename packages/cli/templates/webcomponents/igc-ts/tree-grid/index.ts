import { BaseComponent } from "@igniteui/cli-core";

class IgcTreeGridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Tree Grid";
		this.group = "Grids & Lists";
		this.description = "pick from different tree grid views";
	}
}
module.exports = new IgcTreeGridComponent();
