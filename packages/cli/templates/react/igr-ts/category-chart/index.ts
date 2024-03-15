
import { BaseComponent } from "@igniteui/cli-core";

class IgrTsCategoryChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Category Chart";
		this.group = "Charts";
		this.description = `makes visualizing category data easy. Simplifies the complexities
			of the data visualization domain into manageable API`;
	}
}
module.exports = new IgrTsCategoryChartComponent();
