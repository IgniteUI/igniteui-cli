import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import { IGNITEUI_WEBCOMPONENTS_GRIDS_PACKAGE } from "../../constants";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(path.dirname(require.resolve("@igniteui/angular-templates/package.json")), "shared-data");

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
		this.packages = [ IGNITEUI_WEBCOMPONENTS_GRIDS_PACKAGE ];
	}

	public get templatePaths(): string[] {
		return [
			...super.templatePaths,
			path.join(SHARED_DATA_ROOT, "tree-grid", "files")
		];
	}
}
module.exports = new IgcTreeGridTemplate();
