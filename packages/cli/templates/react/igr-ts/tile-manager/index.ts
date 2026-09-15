import { BaseComponent } from "@igniteui/cli-core";

class IgrTileManagerComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Tile Manager";
		this.group = "Layouts";
		this.description = `enables dynamic arrangement, resizing and interaction of dashboard-like tiles`;
	}
}
module.exports = new IgrTileManagerComponent();
