import { BaseComponent } from "@igniteui/cli-core";

class IgcHighlightComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Highlight";
		this.group = "Interactions";
		this.description = `Searches and highlights matching text projected into its default slot`;
	}
}
module.exports = new IgcHighlightComponent();
