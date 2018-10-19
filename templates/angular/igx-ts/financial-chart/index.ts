
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxFinancialChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Financial Chart";
		this.group = "Charts";
		this.description = `charting component that makes it easy to visualize financial data by
							using a simple and intuitive API.`;
	}
}
module.exports = new IgxFinancialChartComponent();
