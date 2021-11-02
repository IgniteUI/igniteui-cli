import { BaseComponent } from "@igniteui/cli-core";

class IgcRippleComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Ripple";
		this.group = "Interactions";
		this.description = `Customizable ripple component`;
	}
}
module.exports = new IgcRippleComponent();
