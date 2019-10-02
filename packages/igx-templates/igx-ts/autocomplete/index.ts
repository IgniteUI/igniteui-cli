
import { BaseComponent } from "@igniteui/cli-core";

class IgxAutocompleteComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Autocomplete";
		this.group = "Data Entry & Display";
		this.description = "enhances text input by showing an IgxDropdown with suggested options";
	}
}
module.exports = new IgxAutocompleteComponent();
