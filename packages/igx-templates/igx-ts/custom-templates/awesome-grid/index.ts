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
			{ import: "IgxGridModule", from: "igniteui-angular" },
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
				from: "igniteui-angular"
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
		this.packages = ["tslib@^1.7.1", "igniteui-angular-core@~8.2.12", "igniteui-angular-charts@~8.2.12"];
	}
}
module.exports = new IgxGridAwesomeTemplate();
