
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxLinearGaugeComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Linear Gauge";
		this.group = "Gauges";
		this.description = `A value compared against a scale and one or more ranges.`;
	}
}
module.exports = new IgxLinearGaugeComponent();
