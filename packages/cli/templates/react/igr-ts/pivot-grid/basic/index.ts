import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_GRIDS_PACKAGE } from "../../constants";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(path.dirname(require.resolve("@igniteui/angular-templates/package.json")), "shared-data");

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

	public get templatePaths(): string[] {
		return [
			...super.templatePaths,
			path.join(SHARED_DATA_ROOT, "pivot-grid", "files")
		];
	}
}
module.exports = new PivotGridTemplate();
