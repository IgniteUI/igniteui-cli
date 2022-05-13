import { BaseComponent } from "@igniteui/cli-core";

class IgxPivotGridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Pivot Grid with data selector";
		this.group = "Grids & Lists";
		this.description = "IgxPivotGrid with data selector";
	}
}
module.exports = new IgxPivotGridComponent();
