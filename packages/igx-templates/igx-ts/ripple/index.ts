import { BaseComponent } from "@igniteui/cli-core";

class IgxRippleComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Ripple";
		this.group = "Interactions";
		this.description = "defines an area in which a ripple animates in response to a user action";
	}
}
module.exports = new IgxRippleComponent();
