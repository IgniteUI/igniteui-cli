import { BaseComponent } from "@igniteui/cli-core";

class IgcToastComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Toast";
		this.group = "Notifications";
		this.description = `Customizable toast component`;
	}
}
module.exports = new IgcToastComponent();
