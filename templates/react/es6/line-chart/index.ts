import { BaseComponent } from "../../../../lib/BaseComponent";

class LineChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Line Chart";
		this.group = "Charts"
	}
}
module.exports = new LineChartComponent();