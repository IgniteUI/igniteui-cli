import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_GRIDS_PACKAGE } from "../../constants";

class PivotGridTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.id = "pivot-grid";
		this.name = "Pivot Grid";
		this.widget = "igPivotGrid";
		this.description = "IgrPivotGrid template for React";
		this.projectType = "igr-ts";
		this.components = ["Pivot Grid"];
		this.controlGroup = "Data Grids";
		this.packages = [IGNITEUI_REACT_GRIDS_PACKAGE];
		this.hasExtraConfiguration = false;
	}
}
module.exports = new PivotGridTemplate();
