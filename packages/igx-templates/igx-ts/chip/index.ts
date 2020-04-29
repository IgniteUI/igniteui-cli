
import { BaseComponent } from "@igniteui/cli-core";

class IgxChipComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Chip";
		this.group = "Data Entry & Display";
		this.description = `a compact visual component that displays information in an obround.`;
	}
}
module.exports = new IgxChipComponent();
