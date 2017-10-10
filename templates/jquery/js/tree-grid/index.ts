
import { BaseComponent } from "../../../../lib/BaseComponent";

class TreeGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "TreeGrid";
		this.group = "Data Grids";
	}
}
module.exports = new TreeGridComponent();