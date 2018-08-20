
import { BaseComponent } from "../../../../lib/BaseComponent";

class RadialChartComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Radial Chart";
		this.group = "Charts";
		this.description = "igDataChart with different radial series types.";
	}
}
module.exports = new RadialChartComponent();
