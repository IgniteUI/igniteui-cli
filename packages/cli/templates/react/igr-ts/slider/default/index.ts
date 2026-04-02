import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrSliderTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["Slider"];
this.controlGroup = "Interactions";
this.listInComponentTemplates = true;
this.id = "slider";
this.projectType = "igr-ts";
this.name = "Slider";
this.description = "basic IgrSlider";
this.packages = ["igniteui-react@~19.5.2"];
}
}
module.exports = new IgrSliderTemplate();
