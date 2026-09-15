import { BaseComponent } from "@igniteui/cli-core";

class IgxAvatarComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Avatar";
		this.group = "Data Entry & Display";
		this.description = "displays an image, icon or initials to the user";
	}
}
module.exports = new IgxAvatarComponent();
