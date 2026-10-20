import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxDoughnutChartTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Doughnut Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "doughnut-chart";
		this.projectType = "igx-ts";
		this.name = "Doughnut Chart";
		this.description = "proportionally illustrate the occurrences of variables";
		this.packages = ["igniteui-angular-core@~22.0.0", "igniteui-angular-charts@~22.0.0"];
	}
}
module.exports = new IgxDoughnutChartTemplate();
