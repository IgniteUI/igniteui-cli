import { BaseComponent } from "@igniteui/cli-core";

class IgxBottomNavComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Bottom Navigation";
		this.group = "Layouts";
		this.description = "enables the user to navigate among a number of content panels displayed in a single view.";
	}
}
module.exports = new IgxBottomNavComponent();
