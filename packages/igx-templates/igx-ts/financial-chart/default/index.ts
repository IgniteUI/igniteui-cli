import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxFinancialChartTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Financial Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "financial-chart";
		this.projectType = "igx-ts";
		this.name = "Financial Chart";
		this.packages = ["igniteui-angular-core@~17.2.0", "igniteui-angular-charts@~17.2.0"];
	}
}
module.exports = new IgxFinancialChartTemplate();
