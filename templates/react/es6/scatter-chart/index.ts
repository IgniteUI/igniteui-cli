import { BaseComponent } from "../../../../lib/BaseComponent";

class ScatterChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Scatter Chart";
		this.group = "Charts"
	}
}
module.exports = new ScatterChartComponent();