import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class DoughnutChartTemplate extends AngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Doughnut Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "doughnut-chart";
		this.projectType = "ig-ts";
		this.name = "Doughnut Chart";
		this.description = "Data Chart Doughnut series template";
		this.dependencies = ["igDoughnutChart"];
	}
}
module.exports = new DoughnutChartTemplate();
