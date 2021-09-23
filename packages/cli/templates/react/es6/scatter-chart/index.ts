import { BaseComponent } from "@igniteui/cli-core";

class ScatterChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Scatter Chart";
		this.group = "Charts";
		this.description = `visualizes data with dots or with a line with sharp edges on data points in Cartesian
							coordinate system`;
	}
}
module.exports = new ScatterChartComponent();
