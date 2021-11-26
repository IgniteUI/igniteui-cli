import { BaseComponent } from "@igniteui/cli-core";

class IgcFinancialChartComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Financial Chart";
		this.group = "Charts";
		this.description = "pick from different chart views";
	}
}
module.exports = new IgcFinancialChartComponent();
