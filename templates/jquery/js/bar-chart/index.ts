
import { BaseComponent } from "../../../../lib/BaseComponent";

class BarChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Bar Chart";
		this.group = "Charts";
		this.description = "Visualizes categorized data with horizontal bars.";
	}
}
module.exports = new BarChartComponent();
