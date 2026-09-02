import { BaseComponent } from "@igniteui/cli-core";

class IgxSliderComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Slider";
		this.group = "Interactions";
		this.description = "allows users to select a single value or a range from a set of values";
	}
}
module.exports = new IgxSliderComponent();
