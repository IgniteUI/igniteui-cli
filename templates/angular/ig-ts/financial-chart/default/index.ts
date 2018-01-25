import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class FinancialChartTemplate extends AngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Financial Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "financial-chart";
		this.projectType = "ig-ts";
		this.name = "Financial Chart";
		this.description = "Data Chart Financial series template";
		this.dependencies = ["igDataChart"];
	}
}
module.exports = new FinancialChartTemplate();
