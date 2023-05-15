import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcGridTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "grid";
		this.projectType = "igc-ts";
		this.name = "Grid";
		this.description = "IgcGrid with local data";
		this.packages = [
			"igniteui-webcomponents-core@~4.2.5",
			"igniteui-webcomponents-grids@~4.2.5",
			"igniteui-webcomponents-inputs@~4.2.5",
			"igniteui-webcomponents-layouts@~4.2.5"
		];
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcGridTemplate();
