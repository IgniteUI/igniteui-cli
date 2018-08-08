
import { BaseComponent } from "../../../../lib/BaseComponent";

class GridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Grid";
		this.group = "Data Grids";
		this.description = "Pick from Grids: Basic, Custom, Editing, Export, Templating.";
	}
}
module.exports = new GridComponent();
