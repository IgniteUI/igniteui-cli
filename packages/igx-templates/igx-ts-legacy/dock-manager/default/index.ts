import { NPM_DOCK_MANAGER, resolvePackage } from "@igniteui/cli-core";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgcDockManagerTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Dock Manager"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.addAsNgModelDeclaration = false;
		this.id = "dock-manager";
		this.projectType = "igx-ts";
		this.name = "Dock Manager";
		this.description = "basic IgcDockManager";
		this.dependencies = [
			{ import: "<%=ClassName%>Module", from: "./src/app/<%=path%>/<%=filePrefix%>.module.ts" }
		];
		// "igniteui-dockmanager@~1.0.0":
		this.packages = [ `${resolvePackage(NPM_DOCK_MANAGER)}@~1.8.0` ];
	}
}
module.exports = new IgcDockManagerTemplate();
