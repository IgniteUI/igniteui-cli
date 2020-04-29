import { BaseComponent } from "@igniteui/cli-core";

class IgrPieChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Pie Chart";
		this.group = "Charts";
		this.description = `easily illustate the proportions of data entries`;
	}
}
module.exports = new IgrPieChartComponent();
