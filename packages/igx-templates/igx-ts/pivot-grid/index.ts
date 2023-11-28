import { BaseComponent } from "@igniteui/cli-core";

class IgxPivotGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Pivot Grid";
		this.group = "Grids & Lists";
		this.description = "basic IgxPivotGrid";
	}
}
module.exports = new IgxPivotGridComponent();
