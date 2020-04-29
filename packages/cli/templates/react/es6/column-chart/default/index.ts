import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";

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
