import { BaseComponent } from "@igniteui/cli-core";

class IgcTileManagerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Tile Manager";
		this.group = "Layouts";
		this.description = `Displays content in tiles users can rearrange and resize`;
	}
}
module.exports = new IgcTileManagerComponent();
