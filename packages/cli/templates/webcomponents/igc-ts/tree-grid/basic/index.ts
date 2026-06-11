import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(__dirname, "../../../../../shared-data");

class IgcTreeGridTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tree Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "tree-grid";
		this.projectType = "igc-ts";
		this.name = "Tree Grid";
		this.description = "IgcTreeGrid with hierarchical data";
		this.packages = [ "igniteui-webcomponents-grids@~7.1.0" ];
	}

	public get templatePaths(): string[] {
		return [
			...super.templatePaths,
			path.join(SHARED_DATA_ROOT, "tree-grid", "files")
		];
	}
}
module.exports = new IgcTreeGridTemplate();
