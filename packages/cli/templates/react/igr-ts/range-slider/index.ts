import { BaseComponent } from "@igniteui/cli-core";

class IgrRangeSliderComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Range Slider";
		this.group = "Interactions";
		this.description = `lets a user select two numeric values within a range`;
	}
}
module.exports = new IgrRangeSliderComponent();
