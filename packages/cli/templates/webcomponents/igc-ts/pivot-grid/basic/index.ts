import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import { IGNITEUI_WEBCOMPONENTS_GRIDS_PACKAGE } from "../../constants";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(path.dirname(require.resolve("@igniteui/angular-templates/package.json")), "shared-data");

class IgcPivotGridTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Pivot Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "pivot-grid";
		this.projectType = "igc-ts";
		this.name = "Pivot Grid";
		this.description = "Basic IgcPivotGrid component";
		this.packages = [ IGNITEUI_WEBCOMPONENTS_GRIDS_PACKAGE ];
	}

	public get templatePaths(): string[] {
		return [
			...super.templatePaths,
			path.join(SHARED_DATA_ROOT, "pivot-grid", "files")
		];
	}
}
module.exports = new IgcPivotGridTemplate();
