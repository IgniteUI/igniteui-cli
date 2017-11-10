import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

class FinancialChartComponent extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "financial-chart";
		this.name = "Financial Chart";
		this.widget = "igDataChart";
		this.description = "Financial Chart template for React";
		this.projectType = "es6";
		this.components = ["Financial Chart"];
		this.controlGroup = "Charts";
		this.dependencies = ["igDataChart"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new FinancialChartComponent();
