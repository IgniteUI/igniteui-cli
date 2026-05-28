import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
this.packages = ["igniteui-react@~19.7.0"];
}
}
module.exports = new IgrFormTemplate();
