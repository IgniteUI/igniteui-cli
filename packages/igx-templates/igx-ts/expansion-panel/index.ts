import { BaseComponent } from "@igniteui/cli-core";

class IgxExpansionPanelComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Expansion Panel";
		this.group = "Layouts";
		this.description = "a light and highly templateable component that allows you to dynamically display content";
	}
}
module.exports = new IgxExpansionPanelComponent();
