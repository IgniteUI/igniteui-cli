import { BaseComponent } from "../../../../lib/BaseComponent";

class ComboComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Combo";
		this.group = "Data Entry";
		this.description = "The igCombo is a full-featured combo box control.";
	}
}
module.exports = new ComboComponent();
