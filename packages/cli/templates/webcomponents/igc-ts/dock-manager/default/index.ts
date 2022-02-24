import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcDockManagerTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["DockManager"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "dock-manager";
		this.projectType = "igc-ts";
		this.name = "Dock Manager";
		this.description = "Dock Manager with most functionalities and docking options";
		this.dependencies = [{
			import: ["defineCustomElements"],
			from: "igniteui-dockmanager/loader"
		}];
		this.packages = ["igniteui-dockmanager@~1.6.0"];
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcDockManagerTemplate();
