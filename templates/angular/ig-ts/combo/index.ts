import { BaseComponent } from "../../../../lib/BaseComponent";

//TODO: rename ComboComponent to IgComboComponent?
class ComboComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Combo";
		this.group = "Data Entry";
		this.description = "igCombo is a full-featured combo box control.";
	}
}
module.exports = new ComboComponent();
