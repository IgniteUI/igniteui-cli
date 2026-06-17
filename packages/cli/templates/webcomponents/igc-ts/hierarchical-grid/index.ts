import { BaseComponent } from "@igniteui/cli-core";

class IgcHierarchicalGridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Hierarchical Grid";
		this.group = "Grids & Lists";
		this.description = "pick from different hierarchical grid views";
	}
}
module.exports = new IgcHierarchicalGridComponent();
