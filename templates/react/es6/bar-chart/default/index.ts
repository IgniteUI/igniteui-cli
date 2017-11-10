import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

class BarChartTemplate extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "bar-chart";
		this.name = "Bar Chart";
		this.widget = "igDataChart";
		this.description = "Bar series template of Data Chart";
		this.projectType = "es6";
		this.components = ["Bar Chart"];
		this.controlGroup = "Charts";
		this.dependencies = ["igDataChart"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new BarChartTemplate();
