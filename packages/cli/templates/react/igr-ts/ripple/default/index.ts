import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrRippleTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["Ripple"];
this.controlGroup = "Interactions";
this.listInComponentTemplates = true;
this.id = "ripple";
this.projectType = "igr-ts";
this.name = "Ripple";
this.description = "basic IgrRipple";
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrRippleTemplate();
