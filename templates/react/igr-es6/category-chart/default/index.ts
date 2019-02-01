import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgxCategoryChartTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Category Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "category-chart";
		this.projectType = "igr-es6";
		this.name = "Category Chart";
		this.description = "basic category chart with chart type selector.";
		this.packages = ["igniteui-react-charts@^16.6.4"]; // TODO: read version from igniteui-react-core in package.json
	}
}
module.exports = new IgxCategoryChartTemplate();
