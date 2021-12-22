import { BaseComponent } from "@igniteui/cli-core";

class IgcGridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Grid";
		this.group = "Grids & Lists";
		this.description = "pick from different grid views";
		//this.groupPriority = 10;
	}
}
module.exports = new IgcGridComponent();
