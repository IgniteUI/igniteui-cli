import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

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
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrSliderTemplate();
