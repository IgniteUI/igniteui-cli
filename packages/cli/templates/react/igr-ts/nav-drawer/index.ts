import { BaseComponent } from "@igniteui/cli-core";

class IgrNavDrawerComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Nav Drawer";
		this.group = "Menus";
		this.description = `a side navigation container for quick access between views within an application`;
	}
}
module.exports = new IgrNavDrawerComponent();
