
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxLinearGaugeComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Linear Gauge";
		this.group = "Gauges";
	}
}
module.exports = new IgxLinearGaugeComponent();
