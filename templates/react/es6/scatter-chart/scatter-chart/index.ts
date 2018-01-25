import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

class ScatterChartTemplate extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "scatter-chart";
		this.name = "Scatter Chart";
		this.widget = "igDataChart";
		this.description = "Data Chart Scatter series template for React";
		this.projectType = "es6";
		this.components = ["Scatter Chart"];
		this.controlGroup = "Charts";
		this.dependencies = ["igDataChart"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new ScatterChartTemplate();
