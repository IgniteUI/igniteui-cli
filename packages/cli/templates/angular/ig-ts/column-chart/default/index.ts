import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class ColumnChartTemplate extends AngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Column Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "column-chart";
		this.projectType = "ig-ts";
		this.name = "Column Chart";
		this.description = "igDataChart column series template";
		this.dependencies = ["igDataChart"];
	}
}
module.exports = new ColumnChartTemplate();
