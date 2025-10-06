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
		this.dependencies = [
			{ import: "IgxGridModule", from: "<%=igxPackage%>" },
			{
				import: [
					"IgxProgressBarModule",
					"IgxIconModule",
					"IgxAvatarModule",
					"IgxBadgeModule",
					"IgxSwitchModule",
					"IgxInputGroupModule",
					"IgxButtonModule"
				],
				from: "<%=igxPackage%>"
			},
			{
				import: [
					"IgxSparklineModule",
					"IgxSparklineCoreModule"
				],
				from: "igniteui-angular-charts"
			},
			{ import: "FormsModule", from: "@angular/forms" }
		];
		this.packages = ["igniteui-angular-core@~20.1.0", "igniteui-angular-charts@~20.1.0"];
	}
}
module.exports = new IgxGridAwesomeTemplate();
