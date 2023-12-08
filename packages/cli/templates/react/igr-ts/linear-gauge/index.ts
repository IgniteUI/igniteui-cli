
import { BaseComponent } from "@igniteui/cli-core";

class IgrTsLinearGaugeComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Linear Gauge";
		this.group = "Gauges";
		this.description = `value compared against a scale and one or more ranges.`;
	}
}
module.exports = new IgrTsLinearGaugeComponent();
