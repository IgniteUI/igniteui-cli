import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxCategoryChartTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Category Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "category-chart";
		this.projectType = "igx-ts";
		this.name = "Category Chart";
		this.description = "basic category chart with chart type selector.";
		this.dependencies = [
			{ import: "IgxCategoryChartModule", from: "igniteui-angular-charts" },
			{ import: "FormsModule", from: "@angular/forms" }
		];
		this.packages = ["tslib@^1.7.1", "igniteui-angular-core@~8.2.12", "igniteui-angular-charts@~8.2.12"];
	}
}
module.exports = new IgxCategoryChartTemplate();
