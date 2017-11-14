
import { BaseComponent } from "../../../../lib/BaseComponent";

class RadialChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Radial Chart";
		this.group = "Charts";
	}
}
module.exports = new RadialChartComponent();
