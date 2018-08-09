import { BaseComponent } from "../../../../lib/BaseComponent";

class HierarchicalGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Hierarchical Grid";
		this.group = "Data Grids";
		this.description = "Pick from Hierarchical Grids:  Basic, Custom, Editing, Export.";
	}
}
module.exports = new HierarchicalGridComponent();
