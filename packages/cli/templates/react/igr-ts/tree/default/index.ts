import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
this.packages = ["igniteui-react@~19.7.0"];
}
}
module.exports = new IgrTreeTemplate();
