import { BaseComponent } from "@igniteui/cli-core";

class IgxHierarchicalGridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Hierarchical Grid";
		this.group = "Grids & Lists";
		this.description = "pick from grids: basic or custom";
		this.groupPriority = 10;
	}
}
module.exports = new IgxHierarchicalGridComponent();
