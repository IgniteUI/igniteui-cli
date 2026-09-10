import { BaseComponent } from "@igniteui/cli-core";

class IgcRangeSliderComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Range Slider";
		this.group = "Interactions";
		this.description = `Basic range slider component`;
	}
}
module.exports = new IgcRangeSliderComponent();
