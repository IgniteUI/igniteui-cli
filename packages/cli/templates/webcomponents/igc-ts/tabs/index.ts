import { BaseComponent } from "@igniteui/cli-core";

class IgcTabsComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Tabs";
		this.group = "Layouts";
		this.description = `Basic tabs component`;
	}
}
module.exports = new IgcTabsComponent();
