import { BaseComponent } from "@igniteui/cli-core";

class IgcNavbarComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Navbar";
		this.group = "Menus";
		this.description = `Customizable navbar component`;
	}
}
module.exports = new IgcNavbarComponent();
