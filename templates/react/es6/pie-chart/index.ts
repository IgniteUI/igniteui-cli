import { BaseComponent } from "../../../../lib/BaseComponent";

class PieChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Pie Chart";
		this.group = "Charts";
		this.description = "igPieChart illustrate proportion.";
	}
}
module.exports = new PieChartComponent();
