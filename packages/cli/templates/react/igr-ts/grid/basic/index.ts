
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
		this.packages = ["igniteui-react-grids@~19.2.1", "igniteui-react-inputs@~19.2.2",
			"igniteui-react-layouts@~19.2.2", "igniteui-react@~19.2.1"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new GridTemplate();
