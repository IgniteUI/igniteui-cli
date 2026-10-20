import { BaseComponent } from "@igniteui/cli-core";

class IgxDoughnutChartComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Doughnut Chart";
		this.group = "Charts";
		this.description = "proportionally illustrate the occurrences of variables";
	}
}
module.exports = new IgxDoughnutChartComponent();
