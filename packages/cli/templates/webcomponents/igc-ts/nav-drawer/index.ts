import { BaseComponent } from "@igniteui/cli-core";

class IgcNavDrawerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Navigation Drawer";
		this.group = "Menus";
		this.description = `Customizable navigation drawer component`;
	}
}
module.exports = new IgcNavDrawerComponent();
