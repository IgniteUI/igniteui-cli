
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxAutocompleteComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Autocomplete";
		this.group = "Data Entry & Display";
	}
}
module.exports = new IgxAutocompleteComponent();
