import { BaseComponent } from "@igniteui-cli/core";

class IgrLiveGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Data Grid";
		this.group = "Grids & Lists";
		this.description = "pick from grids: basic, sorting, templating.";
	}
}
module.exports = new IgrLiveGridComponent();
