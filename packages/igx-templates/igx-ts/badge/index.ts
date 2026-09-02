import { BaseComponent } from "@igniteui/cli-core";

class IgxBadgeComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Badge";
		this.group = "Data Entry & Display";
		this.description = "displays visual notifications used to decorate avatars, menus, etc.";
	}
}
module.exports = new IgxBadgeComponent();
