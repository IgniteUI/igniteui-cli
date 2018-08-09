
import { BaseComponent } from "../../../../lib/BaseComponent";

class FunnelChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Funnel Chart";
		this.group = "Charts";
		this.description = "Displays funnel chart in HTML5 web applications and is based on the Canvas element.";
	}
}
module.exports = new FunnelChartComponent();
