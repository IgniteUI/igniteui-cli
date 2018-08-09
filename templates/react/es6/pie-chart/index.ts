import { BaseComponent } from "../../../../lib/BaseComponent";

class PieChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Pie Chart";
		this.group = "Charts";
		this.description = "Displays pie chars in HTML5 web applications and is based on the Canvas element.";
	}
}
module.exports = new PieChartComponent();
