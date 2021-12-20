import { BaseComponent } from "@igniteui/cli-core";

class IgcRadialGaugeComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Radial Gauge";
		this.group = "Gauges";
		this.description = "pick from different gauge views";
	}
}
module.exports = new IgcRadialGaugeComponent();
