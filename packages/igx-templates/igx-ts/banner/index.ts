import { BaseComponent } from "@igniteui/cli-core";

class IgxBannerComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Banner";
		this.group = "Interactions";
		this.description = "shows a banner at the full width of the screen above the app content";
	}
}
module.exports = new IgxBannerComponent();
