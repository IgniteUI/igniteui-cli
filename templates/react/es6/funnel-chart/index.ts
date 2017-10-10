import { BaseComponent } from "../../../../lib/BaseComponent";

class FunnelChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Funnel Chart";
		this.group = "Charts"
	}
}
module.exports = new FunnelChartComponent();