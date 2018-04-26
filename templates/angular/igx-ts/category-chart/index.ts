
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxCategoryChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Category Chart";
		this.group = "Charts";
	}
}
module.exports = new IgxCategoryChartComponent();
