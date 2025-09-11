import { BaseComponent } from "@igniteui/cli-core";

class IgrDataGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Data Grid";
		this.group = "Grids";
		this.description = "pick from grids: basic, sorting, templating.";
	}
}
module.exports = new IgrDataGridComponent();
