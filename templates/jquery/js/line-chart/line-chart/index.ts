import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class LineChartTemplate extends jQueryTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Line Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "line-chart";
		this.framework = "jquery";
		this.projectType = "js";
		this.name = "Line Chart";
		this.description = "Line series template of Data Chart";
		this.dependencies = ["igDataChart"];	
	};
	
}
module.exports = new LineChartTemplate();