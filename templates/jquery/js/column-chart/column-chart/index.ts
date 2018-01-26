import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class ColumnChartTemplate extends jQueryTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Column Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "column-chart";
		this.framework = "jquery";
		this.projectType = "js";
		this.name = "Column Chart";
		this.description = "Data Chart Column series template";
		this.dependencies = ["igDataChart"];
	}
}
module.exports = new ColumnChartTemplate();
