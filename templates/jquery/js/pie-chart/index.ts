
import { BaseComponent } from "../../../../lib/BaseComponent";

class PieChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Pie Chart";
		this.group = "Charts"
	}
}
module.exports = new PieChartComponent();