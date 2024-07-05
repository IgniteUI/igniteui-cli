import { BaseComponent } from "@igniteui/cli-core";

class IgcBannerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Banner";
		this.group = "Notifications";
		this.description = `Customizable banner component`;
	}
}
module.exports = new IgcBannerComponent();
