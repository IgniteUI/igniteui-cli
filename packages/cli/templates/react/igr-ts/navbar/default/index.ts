import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrNavbarTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["Navbar"];
this.controlGroup = "Menus";
this.listInComponentTemplates = true;
this.id = "navbar";
this.projectType = "igr-ts";
this.name = "Navbar";
this.description = "basic IgrNavbar";
this.packages = ["igniteui-react@~19.5.2"];
}
}
module.exports = new IgrNavbarTemplate();
