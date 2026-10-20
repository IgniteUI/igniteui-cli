import { BaseComponent } from "@igniteui/cli-core";

class IgcCategoryChartComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Category Chart";
		this.group = "Charts";
		this.description = "makes visualizing category data easy";
	}
}
module.exports = new IgcCategoryChartComponent();
