import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcTileManagerTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tile Manager"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "tile-manager";
		this.projectType = "igc-ts";
		this.name = "Tile Manager";
		this.description = "basic IgcTileManager";
	}
}
module.exports = new IgcTileManagerTemplate();
