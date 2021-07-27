
import { BaseComponent } from "@igniteui/cli-core";

class IgxFinancialChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Financial Chart";
		this.group = "Charts";
	}
}
module.exports = new IgxFinancialChartComponent();
