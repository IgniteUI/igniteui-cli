import { BaseComponent } from "@igniteui/cli-core";

class IgxNavigationDrawerComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Navigation Drawer";
		this.group = "Layouts";
		this.description = "a container element for side navigation, providing quick access between views";
	}
}
module.exports = new IgxNavigationDrawerComponent();
