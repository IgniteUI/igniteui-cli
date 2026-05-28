import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrSubscriptionFormTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.listInComponentTemplates = false;
this.listInCustomTemplates = true;
this.id = "subscription-form";
this.projectType = "igr-ts";
this.name = "Subscription Form";
this.description = "Subscription form with inputs, buttons and a checkbox inside";
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrSubscriptionFormTemplate();
