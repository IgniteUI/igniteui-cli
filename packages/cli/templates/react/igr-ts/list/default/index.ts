import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrListTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["List"];
this.controlGroup = "Grids & Lists";
this.listInComponentTemplates = true;
this.id = "list";
this.projectType = "igr-ts";
this.name = "List";
this.description = "basic IgrList";
this.packages = ["igniteui-react@~19.5.2"];
}
}
module.exports = new IgrListTemplate();
