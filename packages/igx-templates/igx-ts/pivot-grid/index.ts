import { BaseComponent } from "@igniteui/cli-core";

class IgxPivotGridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Pivot Grid";
		this.group = "Grids & Lists";
		this.description = "Pick from Pivot Grids: Basic Pivot Grid and Pivot Grid with data selector";
	}
}
module.exports = new IgxPivotGridComponent();
