
import { BaseComponent } from "../../../../lib/BaseComponent";

class ColumnChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Column Chart";
		this.group = "Charts";
		this.description = "Visualizes categorized data with vertical columns.";
	}
}
module.exports = new ColumnChartComponent();
