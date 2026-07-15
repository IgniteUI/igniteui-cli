import { BaseComponent } from "@igniteui/cli-core";

class IgrTsHierarchicalGridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Hierarchical Grid";
		this.group = "Grids & Lists";
		this.description = "IgrHierarchicalGrid component for React";
	}
}
module.exports = new IgrTsHierarchicalGridComponent();
