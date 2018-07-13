import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxCategoryChartTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Category Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "category-chart";
		this.projectType = "igx-ts";
		this.name = "Category Chart";
		this.description = "Basic Category chart with chart type selector.";
		this.dependencies = [
			{ import: "IgxCategoryChartModule", from: "igniteui-angular-charts/ES5/igx-category-chart-module" },
			{import: "FormsModule", from: "@angular/forms"}
		];
		this.packages = ["tslib", "igniteui-angular-charts@5.3.1"];
	}
}
module.exports = new IgxCategoryChartTemplate();
