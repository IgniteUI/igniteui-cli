
import { BaseComponent } from "@igniteui/cli-core";

class IgxTooltipComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Tooltip";
		this.group = "Interactions";
	}
}
module.exports = new IgxTooltipComponent();
