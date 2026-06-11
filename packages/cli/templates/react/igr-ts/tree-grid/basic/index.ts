import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_GRIDS_PACKAGE } from "../../constants";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(__dirname, "../../../../../shared-data");

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

	public get templatePaths(): string[] {
		return [
			...super.templatePaths,
			path.join(SHARED_DATA_ROOT, "tree-grid", "files")
		];
	}
}
module.exports = new TreeGridTemplate();
