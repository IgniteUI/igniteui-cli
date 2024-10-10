
import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
		this.packages = ["igniteui-react-grids@~18.7.0", "igniteui-react-inputs@~18.7.0",
			"igniteui-react-layouts@~18.7.0", "igniteui-react@~18.7.0"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new GridTemplate();
