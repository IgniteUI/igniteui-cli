import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxGridCRMTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "crm-grid";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "CRM Grid";
		this.description = "CRM IgxGrid";
		this.packages = ["igniteui-angular-core@~20.1.0", "igniteui-angular-charts@~20.1.0"];
	}
}
module.exports = new IgxGridCRMTemplate();
