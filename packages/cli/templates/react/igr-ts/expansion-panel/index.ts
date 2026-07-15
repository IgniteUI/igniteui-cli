import { BaseComponent } from "@igniteui/cli-core";

class IgrExpansionPanelComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Expansion Panel";
		this.group = "Layouts";
		this.description = `provides a collapsible content section with a header.`;
	}
}
module.exports = new IgrExpansionPanelComponent();
