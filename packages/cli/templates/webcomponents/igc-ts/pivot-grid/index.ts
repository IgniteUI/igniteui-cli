import { BaseComponent } from "@igniteui/cli-core";

class IgcPivotGridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Pivot Grid";
		this.group = "Grids & Lists";
		this.description = "pick from different pivot grid views";
	}
}
module.exports = new IgcPivotGridComponent();
