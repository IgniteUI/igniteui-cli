import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrFormTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["Form"];
this.controlGroup = "Data Entry & Display";
this.listInComponentTemplates = true;
this.id = "form";
this.projectType = "igr-ts";
this.name = "Form";
this.description = "basic IgrForm";
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrFormTemplate();
