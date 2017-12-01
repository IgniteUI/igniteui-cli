
import { BaseComponent } from "../../../../lib/BaseComponent";

class ColumnChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Column Chart";
		this.group = "Charts";
	}
}
module.exports = new ColumnChartComponent();
