import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
this.packages = ["igniteui-react@~19.5.2"];
}
}
module.exports = new IgrRippleTemplate();
