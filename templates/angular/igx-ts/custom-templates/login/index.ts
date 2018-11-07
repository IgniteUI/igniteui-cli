import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxLoginTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "login";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "Login view";
		this.description = "Login view";
		this.dependencies = [{
			import: ["IgxInputGroupModule", "IgxIconModule", "IgxButtonModule", "IgxRippleModule"],
			from: "igniteui-angular"
		}, {
			import: ["ReactiveFormsModule"],
			from: "@angular/forms"
		}];
	}
}
module.exports = new IgxLoginTemplate();
