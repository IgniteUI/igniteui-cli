import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(path.dirname(require.resolve("@igniteui/angular-templates/package.json")), "shared-data");

class IgcHierarchicalGridTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "hierarchical-grid";
		this.projectType = "igc-ts";
		this.name = "Hierarchical Grid";
		this.description = "IgcHierarchicalGrid with basic configuration";
		this.packages = [ "igniteui-webcomponents-grids@~7.2.1" ];
	}

	public get templatePaths(): string[] {
		return [
			...super.templatePaths,
			path.join(SHARED_DATA_ROOT, "hierarchical-grid", "files")
		];
	}
}
module.exports = new IgcHierarchicalGridTemplate();
