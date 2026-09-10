import { BaseComponent } from "@igniteui/cli-core";

class IgcDialogComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Dialog";
		this.group = "Interactions";
		this.description = `Customizable modal dialog component`;
	}
}
module.exports = new IgcDialogComponent();
