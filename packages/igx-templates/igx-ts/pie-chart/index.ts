import { BaseComponent } from "@igniteui/cli-core";

class IgxPieChartComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Pie Chart";
		this.group = "Charts";
		this.description = "easily illustrate the proportions of data entries";
	}
}
module.exports = new IgxPieChartComponent();
