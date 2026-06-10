import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_GRIDS_PACKAGE } from "../../constants";

class HierarchicalGridTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.id = "hierarchical-grid";
		this.name = "Hierarchical Grid";
		this.widget = "igHierarchicalGrid";
		this.description = "IgrHierarchicalGrid template for React";
		this.projectType = "igr-ts";
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Data Grids";
		this.packages = [IGNITEUI_REACT_GRIDS_PACKAGE];
		this.hasExtraConfiguration = false;
	}
}
module.exports = new HierarchicalGridTemplate();
