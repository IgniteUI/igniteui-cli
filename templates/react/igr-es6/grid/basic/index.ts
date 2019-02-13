
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
		this.packages = ["igniteui-react-grids@^16.6.4"]; // TODO: read version from igniteui-react-core in package.json

		this.hasExtraConfiguration = false;
	}
}
module.exports = new GridTemplate();
