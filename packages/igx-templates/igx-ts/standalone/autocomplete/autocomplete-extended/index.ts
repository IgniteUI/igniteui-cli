import { IgniteUIForAngularTemplate } from "../../../../IgniteUIForAngularTemplate";

class IgxAutocompleteTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Autocomplete"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "enhanced-autocomplete";
		this.projectType = "igx-ts";
		this.name = "Enhanced Autocomplete";
		this.description = "IgxAutocomplete with enhanced groups";
	}
}
module.exports = new IgxAutocompleteTemplate();
