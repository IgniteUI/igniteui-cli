import { BaseComponent } from "@igniteui/cli-core";

class IgrToggleButtonComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Toggle Button";
		this.group = "Data Entry & Display";
		this.description = `a button that exposes selected state, usable standalone or within a button group`;
	}
}
module.exports = new IgrToggleButtonComponent();
