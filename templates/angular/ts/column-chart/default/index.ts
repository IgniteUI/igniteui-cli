import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class ColumnChartTemplate extends AngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Column Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "column-chart";
		this.framework = "angular";
		this.projectType = "ts";
		this.name = "Column Chart";
		this.description = "Column series template of Data Chart";
		this.dependencies = ["igDataChart"];
	}
}
module.exports = new ColumnChartTemplate();
