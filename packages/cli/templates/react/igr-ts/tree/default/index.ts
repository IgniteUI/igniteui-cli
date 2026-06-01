import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrTreeTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["Tree"];
this.controlGroup = "Grids & Lists";
this.listInComponentTemplates = true;
this.id = "tree";
this.projectType = "igr-ts";
this.name = "Tree";
this.description = "basic IgrTree";
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrTreeTemplate();
