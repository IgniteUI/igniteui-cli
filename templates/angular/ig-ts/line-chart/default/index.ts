import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class LineChartTemplate extends AngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Line Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "line-chart";
		this.projectType = "ig-ts";
		this.name = "Line Chart";
		this.description = "Line series template of Data Chart";
		this.dependencies = ["igDataChart"];
	}
}
module.exports = new LineChartTemplate();
