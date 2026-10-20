import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxPieChartTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Pie Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "pie-chart";
		this.projectType = "igx-ts";
		this.name = "Pie Chart";
		this.description = "easily illustrate the proportions of data entries";
		this.packages = ["igniteui-angular-core@~22.0.0", "igniteui-angular-charts@~22.0.0"];
	}
}
module.exports = new IgxPieChartTemplate();
