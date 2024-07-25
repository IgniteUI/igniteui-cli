import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcSubscriptionFormTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.id = "subscription-form";
		this.projectType = "igc-ts";
		this.name = "Subscription Form";
		this.description = "Subscription form with inputs, buttons and a checkbox inside";
	}
}
module.exports = new IgcSubscriptionFormTemplate();
