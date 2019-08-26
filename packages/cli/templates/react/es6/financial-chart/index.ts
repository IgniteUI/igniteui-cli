import { BaseComponent } from "@igniteui/cli-core";

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
