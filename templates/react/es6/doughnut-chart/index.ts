import { BaseComponent } from "../../../../lib/BaseComponent";

class DoughnutChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Doughnut Chart";
		this.group = "Charts"
	}
}
module.exports = new DoughnutChartComponent();