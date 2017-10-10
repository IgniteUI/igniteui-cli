import { BaseComponent } from "../../../../lib/BaseComponent";

//TODO: rename ComboComponent to IgComboComponent?
class ComboComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Combo";
		this.group = "Editors";
	}
}
module.exports = new ComboComponent();