import { BaseComponent } from "@igniteui/cli-core";

class IgxDockManagerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Dock Manager";
		this.group = "Layouts";
		this.description = `provides means to manage the layout of your application through panes, allowing your end-users to customize it further by pinning, resizing, moving and hiding panes.`;
	}
}
module.exports = new IgxDockManagerComponent();
