
import { BaseComponent } from "../../../../lib/BaseComponent";

class BarChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Bar Chart";
		this.group = "Charts"
	}
}
module.exports = new BarChartComponent();