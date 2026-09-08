import { BaseComponent } from "@igniteui/cli-core";

class IgrTooltipComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Tooltip";
		this.group = "Interactions";
		this.description = `displays supplementary information for an element on hover or focus`;
	}
}
module.exports = new IgrTooltipComponent();
