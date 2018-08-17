import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class ScatterChartTemplate extends jQueryTemplate {

	constructor() {
		super(__dirname);
		this.components = ["Scatter Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "scatter-chart";
		this.framework = "jquery";
		this.projectType = "js";
		this.name = "Scatter Chart";
		this.description = "igDataChart Scatter series template";
		this.dependencies = ["igDataChart"];
	}
}
module.exports = new ScatterChartTemplate();
