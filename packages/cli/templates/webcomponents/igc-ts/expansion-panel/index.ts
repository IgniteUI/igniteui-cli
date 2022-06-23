import { BaseComponent } from "@igniteui/cli-core";

class IgcExpansionPanelComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Expansion Panel";
		this.group = "Layouts";
		this.description = `Lightweight accordion component`;
	}
}
module.exports = new IgcExpansionPanelComponent();
