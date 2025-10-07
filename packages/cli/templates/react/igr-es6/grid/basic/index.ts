
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
		this.projectType = "igr-es6";
		this.components = ["Grid"];
		this.controlGroup = "Data Grids";
		// TODO: read version from igniteui-react-core in package.json
		this.packages = ["igniteui-react-grids@~19.2.3", "igniteui-react-inputs@~19.2.3",
			"igniteui-react-layouts@~19.2.3"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new GridTemplate();
