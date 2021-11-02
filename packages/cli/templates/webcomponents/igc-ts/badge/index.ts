import { BaseComponent } from "@igniteui/cli-core";

class IgcBadgeComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Badge";
		this.group = "Data Entry & Display";
		this.description = `Customizable badge component`;
	}
}
module.exports = new IgcBadgeComponent();
