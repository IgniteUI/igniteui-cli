import { BaseComponent } from "../../../../lib/BaseComponent";

class FinancialChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Financial Chart";
		this.group = "Charts";
		this.description = "lightweight, high-performance chart.";
	}
}
module.exports = new FinancialChartComponent();
