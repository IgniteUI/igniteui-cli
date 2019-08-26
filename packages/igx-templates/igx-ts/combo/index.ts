
import { BaseComponent } from "@igniteui/cli-core";

class IgxComboComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Combo";
		this.group = "Grids & Lists";
		this.description = `provides easy filtering and selection of multiple items, grouping and
							adding custom values to the dropdown list.`;
	}
}
module.exports = new IgxComboComponent();
