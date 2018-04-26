
import { BaseComponent } from "../../../../lib/BaseComponent";

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
