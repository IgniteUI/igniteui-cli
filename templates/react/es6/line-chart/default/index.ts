import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

class LineChartTemplate extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "line-chart";
		this.name = "Line Chart";
		this.widget = "igDataChart";
		this.description = "Data Chart Line series template";
		this.projectType = "es6";
		this.components = ["Line Chart"];
		this.controlGroup = "Charts";
		this.dependencies = ["igDataChart"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new LineChartTemplate();
