import { BaseComponent } from "@igniteui/cli-core";

class IgrTsTreeGridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Tree Grid";
		this.group = "Grids & Lists";
		this.description = "IgrTreeGrid component for React";
	}
}
module.exports = new IgrTsTreeGridComponent();
