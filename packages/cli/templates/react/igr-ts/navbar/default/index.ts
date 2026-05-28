import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

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
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrNavbarTemplate();
