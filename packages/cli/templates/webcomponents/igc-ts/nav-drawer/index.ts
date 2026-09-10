import { BaseComponent } from "@igniteui/cli-core";

class IgcNavDrawerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Nav Drawer";
		this.group = "Menus";
		this.description = `Collapsible side navigation container for quick access between views`;
	}
}
module.exports = new IgcNavDrawerComponent();
