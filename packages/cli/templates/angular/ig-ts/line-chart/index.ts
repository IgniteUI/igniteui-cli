
import { BaseComponent } from "@igniteui/cli-core";

class LineChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Line Chart";
		this.group = "Charts";
		this.description = "visualizes categorized data with a line with sharp edges on data points.";
	}
}
module.exports = new LineChartComponent();
