import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class PieChartTemplate extends AngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Pie Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "pie-chart";
		this.projectType = "ig-ts";
		this.name = "Pie Chart";
		this.description = "igPieChart template for Angular";
		this.dependencies = ["igPieChart"];
	}
}
module.exports = new PieChartTemplate();
