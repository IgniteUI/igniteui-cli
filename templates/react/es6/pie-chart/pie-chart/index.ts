import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

class PieChartTemplate extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "pie-chart";
		this.name = "Pie Chart";
		this.widget = "igPieChart";
		this.description = "Pie Chart template for React";
		this.projectType = "es6";
		this.components = ["Pie Chart"];
		this.controlGroup = "Charts";
		this.dependencies = ["igDataChart"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new PieChartTemplate();
