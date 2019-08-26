import { BaseComponent } from "@igniteui-cli/core";

class GridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Grid";
		this.group = "Data Grids";
		this.description = "pick from grids: basic, custom, editing, export, templating.";
	}
}
module.exports = new GridComponent();
