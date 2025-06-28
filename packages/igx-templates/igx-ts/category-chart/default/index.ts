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
		this.packages = ["igniteui-angular-core@~20.0.0", "igniteui-angular-charts@~20.0.0"];
	}
}
module.exports = new IgxCategoryChartTemplate();
