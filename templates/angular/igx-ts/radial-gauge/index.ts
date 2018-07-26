
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxRadialGaugeComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Radial Gauge";
		this.group = "Gauges";
	}
}
module.exports = new IgxRadialGaugeComponent();
