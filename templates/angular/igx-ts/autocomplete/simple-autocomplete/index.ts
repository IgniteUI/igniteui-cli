import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxAutocompleteTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Autocomplete"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "autocomplete";
		this.projectType = "igx-ts";
		this.name = "Autocomplete";
		this.description = "Basic IgxAutocomplete sample";
		this.dependencies = [{
			import: ["IgxAutocompleteModule", "IgxDropDownModule", "IgxInputGroupModule"],
			from: "igniteui-angular"
		}, {
			declare: ["$(ClassName)PipeStartsWith"],
			from: "./../pipes/__name__.pipe.ts"
		}];
	}
}
module.exports = new IgxAutocompleteTemplate();
