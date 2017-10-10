import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class PieChartTemplate extends jQueryTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Pie Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "pie-chart";
		this.framework = "jquery";
		this.projectType = "js";
		this.name = "Pie Chart";
		this.description = "Pie chart template";
		this.dependencies = ["igPieChart"];
	};
}
module.exports = new PieChartTemplate();