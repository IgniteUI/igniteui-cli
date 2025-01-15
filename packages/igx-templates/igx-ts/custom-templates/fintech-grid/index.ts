import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxFinTechGridTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "fintech-grid";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "FinTech Grid";
		this.description = "Grid with simulated high-frequency data feed";
		this.packages = ["igniteui-angular-core@~19.0.0", "igniteui-angular-charts@~19.0.0"];
	}
}
module.exports = new IgxFinTechGridTemplate();
