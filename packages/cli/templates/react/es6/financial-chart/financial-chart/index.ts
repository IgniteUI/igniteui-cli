import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";

class FinancialChartComponent extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "financial-chart";
		this.name = "Financial Chart";
		this.widget = "igDataChart";
		this.description = "financial chart template for React";
		this.projectType = "es6";
		this.components = ["Financial Chart"];
		this.controlGroup = "Charts";
		this.dependencies = ["igDataChart"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new FinancialChartComponent();
