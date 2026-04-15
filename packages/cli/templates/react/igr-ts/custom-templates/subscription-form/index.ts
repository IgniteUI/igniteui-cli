import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrSubscriptionFormTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.listInComponentTemplates = false;
this.listInCustomTemplates = true;
this.id = "subscription-form";
this.projectType = "igr-ts";
this.name = "Subscription Form";
this.description = "Subscription form with inputs, buttons and a checkbox inside";
this.packages = ["igniteui-react@~19.5.2"];
}
}
module.exports = new IgrSubscriptionFormTemplate();
