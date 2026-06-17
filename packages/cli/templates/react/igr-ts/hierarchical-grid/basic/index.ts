import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_GRIDS_PACKAGE } from "../../constants";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(path.dirname(require.resolve("@igniteui/angular-templates/package.json")), "shared-data");

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

	public get templatePaths(): string[] {
		return [
			...super.templatePaths,
			path.join(SHARED_DATA_ROOT, "hierarchical-grid", "files")
		];
	}
}
module.exports = new HierarchicalGridTemplate();
