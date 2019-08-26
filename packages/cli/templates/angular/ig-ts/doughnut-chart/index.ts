
import { BaseComponent } from "@igniteui-cli/core";

class DoughnutChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Doughnut Chart";
		this.group = "Charts";
		this.description = `igDoughnutChart control allows for proportionally illustrating the
							occurrences of a variable.`;
	}
}
module.exports = new DoughnutChartComponent();
