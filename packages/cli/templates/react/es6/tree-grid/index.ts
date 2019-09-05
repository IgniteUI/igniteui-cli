
import { BaseComponent } from "@igniteui/cli-core";

class TreeGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Tree Grid";
		this.group = "Data Grids";
		this.description = "pick from tree grids: basic, custom, editing, export.";
	}
}
module.exports = new TreeGridComponent();
