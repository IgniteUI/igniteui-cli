import { BaseComponent } from "@igniteui/cli-core";

class PieChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Pie Chart";
		this.group = "Charts";
		this.description = "igPieChart illustrate proportion.";
	}
}
module.exports = new PieChartComponent();
