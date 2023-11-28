import { IgniteUIForAngularTemplate } from "../../../../IgniteUIForAngularTemplate";

class IgxAutocompleteTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Autocomplete"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "autocomplete";
		this.projectType = "igx-ts";
		this.name = "Simple Autocomplete";
		this.description = "Simple IgxAutocomplete";
	}
}
module.exports = new IgxAutocompleteTemplate();
