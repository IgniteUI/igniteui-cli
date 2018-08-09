
import { BaseComponent } from "../../../../lib/BaseComponent";

class RadialChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Radial Chart";
		this.group = "Charts";
		this.description = "visualizes categorized data with a line, columns or pie-slice.";
	}
}
module.exports = new RadialChartComponent();
