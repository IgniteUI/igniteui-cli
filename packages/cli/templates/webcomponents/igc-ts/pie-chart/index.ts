import { BaseComponent } from "@igniteui/cli-core";

class IgcPieChartComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Pie Chart";
		this.group = "Charts";
		this.description = "pick from different chart views";
	}
}
module.exports = new IgcPieChartComponent();
