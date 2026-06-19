import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
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
		this.packages = [ "igniteui-webcomponents-grids@~7.1.0" ];
	}

	public get templatePaths(): string[] {
		return [
			...super.templatePaths,
			path.join(SHARED_DATA_ROOT, "pivot-grid", "files")
		];
	}
}
module.exports = new IgcPivotGridTemplate();
