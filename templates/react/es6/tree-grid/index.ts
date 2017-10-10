
import { BaseComponent } from "../../../../lib/BaseComponent";

class TreeGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Tree Grid";
		this.group = "Grids";
	}
}
module.exports = new TreeGridComponent();