import { BaseComponent } from "@igniteui/cli-core";

class IgcAvatarComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Avatar";
		this.group = "Layouts";
		this.description = `Customizable avatar component`;
	}
}
module.exports = new IgcAvatarComponent();
