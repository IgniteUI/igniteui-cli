import { BaseComponent } from "@igniteui/cli-core";

class IgrTsPivotGridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Pivot Grid";
		this.group = "Grids & Lists";
		this.description = "IgrPivotGrid component for React";
	}
}
module.exports = new IgrTsPivotGridComponent();
