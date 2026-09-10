import { BaseComponent } from "@igniteui/cli-core";

class IgxCardComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Card";
		this.group = "Layouts";
		this.description = "a sheet of material that serves as an entry point to more detailed information";
	}
}
module.exports = new IgxCardComponent();
