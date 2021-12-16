import { BaseComponent } from "@igniteui/cli-core";

class IgcLinearGaugeComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Linear Gauge";
		this.group = "Gauges";
		this.description = "pick from different gauge views";
	}
}
module.exports = new IgcLinearGaugeComponent();
