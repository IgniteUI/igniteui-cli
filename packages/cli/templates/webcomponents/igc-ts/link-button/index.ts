import { BaseComponent } from "@igniteui/cli-core";

class IgcLinkButtonComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Link Button";
		this.group = "Data Entry & Display";
		this.description = `Customizable link button component`;
	}
}
module.exports = new IgcLinkButtonComponent();
