import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

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
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrTabsTemplate();
