import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrTabsTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["Tabs"];
this.controlGroup = "Layouts";
this.listInComponentTemplates = true;
this.id = "tabs";
this.projectType = "igr-ts";
this.name = "Tabs";
this.description = "basic IgrTabs";
this.packages = ["igniteui-react@~19.7.0"];
}
}
module.exports = new IgrTabsTemplate();
