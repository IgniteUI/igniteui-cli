import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_GRIDS_PACKAGE } from "../../constants";

class TreeGridTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.id = "tree-grid";
		this.name = "Tree Grid";
		this.widget = "igTreeGrid";
		this.description = "IgrTreeGrid template for React";
		this.projectType = "igr-ts";
		this.components = ["Tree Grid"];
		this.controlGroup = "Data Grids";
		this.packages = [IGNITEUI_REACT_GRIDS_PACKAGE];
		this.hasExtraConfiguration = false;
	}
}
module.exports = new TreeGridTemplate();
