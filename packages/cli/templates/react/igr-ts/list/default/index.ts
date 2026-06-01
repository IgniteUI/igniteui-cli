import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

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
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrListTemplate();
