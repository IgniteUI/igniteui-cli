import { BaseComponent } from "../../../../lib/BaseComponent";

class TreeGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Tree Grid";
		this.group = "Data Grids";
		this.description = "Pick from Tree Grids: Basic, Custom, Editing, Export.";
	}
}
module.exports = new TreeGridComponent();
