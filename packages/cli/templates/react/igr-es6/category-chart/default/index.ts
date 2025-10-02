import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrCategoryChartTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Category Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "category-chart";
		this.projectType = "igr-es6";
		this.name = "Category Chart";
		this.description = `makes visualizing category data easy. Simplifies the complexities
							of the data visualization domain into manageable API`;
		this.packages = ["igniteui-react-charts@~19.2.2"]; // TODO: read version from igniteui-react-core in package.json
	}
}
module.exports = new IgrCategoryChartTemplate();
