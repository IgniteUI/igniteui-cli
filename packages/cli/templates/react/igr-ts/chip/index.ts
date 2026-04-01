import { BaseComponent } from "@igniteui/cli-core";

class IgrChipComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Chip";
		this.group = "Data Entry & Display";
		this.description = `displays a chip with selectable and removable options.`;
	}
}
module.exports = new IgrChipComponent();
