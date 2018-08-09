
import { BaseComponent } from "../../../../lib/BaseComponent";

class ScatterChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Scatter Chart";
		this.group = "Charts";
		this.description = `Visualizes data with dots or with a line with sharp edges on data points in
							Cartesian coordinate system`;
	}
}
module.exports = new ScatterChartComponent();
