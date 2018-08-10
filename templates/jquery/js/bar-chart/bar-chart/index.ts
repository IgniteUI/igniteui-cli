import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class BarChartTemplate extends jQueryTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Bar Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "bar-chart";
		this.framework = "jquery";
		this.projectType = "js";
		this.name = "Bar Chart";
		this.description = "igDataChart bar series template";
		this.dependencies = ["igDataChart"];
	}
}
module.exports = new BarChartTemplate();
