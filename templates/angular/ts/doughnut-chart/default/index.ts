import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class DoughnutChartTemplate extends AngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Doughnut Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "doughnut-chart";
		this.projectType = "ts";
		this.name = "Doughnut Chart";
		this.description = "Doughnut series template of Data Chart";
		this.dependencies = ["igDoughnutChart"];
	}
}
module.exports = new DoughnutChartTemplate();
