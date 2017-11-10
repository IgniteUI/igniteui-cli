import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

class ColumnChartTemplate extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "column-chart";
		this.name = "Column Chart";
		this.widget = "igDataChart";
		this.description = "Column series template of Data Chart";
		this.projectType = "es6";
		this.components = ["Column Chart"];
		this.controlGroup = "Charts";
		this.dependencies = ["igDataChart"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new ColumnChartTemplate();
