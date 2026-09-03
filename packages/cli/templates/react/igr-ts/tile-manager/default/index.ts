import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrTileManagerTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tile Manager"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "tile-manager";
		this.projectType = "igr-ts";
		this.name = "Tile Manager";
		this.description = "basic IgrTileManager";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrTileManagerTemplate();
