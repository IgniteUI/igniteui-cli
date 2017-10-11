import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class BarChartTemplate extends AngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Bar Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "bar-chart";
		this.framework = "angular";
		this.projectType = "ts";
		this.name = "Bar Chart";
		this.description = "Bar series template of Data Chart";
		this.dependencies = ["igDataChart"];
	}
}
module.exports = new BarChartTemplate();
