import { BaseComponent } from "@igniteui/cli-core";
class IgcSliderComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Slider";
		this.group = "Interactions"
		this.description = `Basic slider component`;
	}
}
module.exports = new IgcSliderComponent();
