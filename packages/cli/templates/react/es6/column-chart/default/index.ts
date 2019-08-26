import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "@igniteui/cli-core";

class ColumnChartTemplate extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "column-chart";
		this.name = "Column Chart";
		this.widget = "igDataChart";
		this.description = "igDataChart column series template";
		this.projectType = "es6";
		this.components = ["Column Chart"];
		this.controlGroup = "Charts";
		this.dependencies = ["igDataChart"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new ColumnChartTemplate();
