
import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_GRIDS_PACKAGE } from "../../constants";

class GridTemplate extends IgniteUIForReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "grid";
		this.name = "Grid";
		this.widget = "igGrid";
		this.description = "IgrGrid template for React";
		this.projectType = "igr-ts";
		this.components = ["Grid"];
		this.controlGroup = "Data Grids";
		this.packages = [IGNITEUI_REACT_GRIDS_PACKAGE];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new GridTemplate();
