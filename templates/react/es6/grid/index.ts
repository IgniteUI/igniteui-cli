import { BaseComponent } from "../../../../lib/BaseComponent";

class GridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Grid";
		this.group = "Grids";
	}
}
module.exports = new GridComponent();