import { BaseComponent } from "@igniteui/cli-core";

class IgxNavbarComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Navbar";
		this.group = "Layouts";
		this.description = "positioned on top, represents current state and enables a user defined action";
	}
}
module.exports = new IgxNavbarComponent();
