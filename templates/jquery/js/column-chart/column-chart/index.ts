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
		this.description = "Column series template of Data Chart";
		this.dependencies = ["igDataChart"];
	}
}
module.exports = new ColumnChartTemplate();
