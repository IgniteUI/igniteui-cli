import { BaseComponent } from "@igniteui/cli-core";

class IgcTooltipComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Tooltip";
		this.group = "Interactions";
		this.description = `Displays informative text when users hover, focus or tap an element`;
	}
}
module.exports = new IgcTooltipComponent();
