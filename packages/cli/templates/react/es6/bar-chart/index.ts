import { BaseComponent } from "@igniteui/cli-core";

class BarChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Bar Chart";
		this.group = "Charts";
		this.description = "visualizes categorized data with horizontal bars.";
	}
}
module.exports = new BarChartComponent();
