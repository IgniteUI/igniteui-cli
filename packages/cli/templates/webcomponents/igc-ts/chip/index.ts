import { BaseComponent } from "@igniteui/cli-core";

class IgcChipComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Chip";
		this.group = "Data Entry & Display";
		this.description = `Customizable chip component`;
	}
}
module.exports = new IgcChipComponent();
