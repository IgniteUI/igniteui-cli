import { BaseComponent } from "../../../../lib/BaseComponent";

class FinancialChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Financial Chart";
		this.group = "Charts";
	}
}
module.exports = new FinancialChartComponent();
