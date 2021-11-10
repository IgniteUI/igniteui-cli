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
		this.dependencies = [
			{ import: "IgxFinancialChartModule", from: "igniteui-angular-charts" }
		];
		this.packages = ["igniteui-angular-core@~12.1.2", "igniteui-angular-charts@~12.1.2"];
	}
}
module.exports = new IgxFinancialChartTemplate();
