import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxGridAwesomeTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "awesome-grid";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "Awesome Grid";
		this.description = "Awesome IgxGrid";
		this.packages = ["igniteui-angular-core@~18.0.0", "igniteui-angular-charts@~18.0.0"];
	}
}
module.exports = new IgxGridAwesomeTemplate();
