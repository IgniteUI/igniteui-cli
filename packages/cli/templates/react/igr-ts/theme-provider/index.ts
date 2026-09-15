import { BaseComponent } from "@igniteui/cli-core";

class IgrThemeProviderComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Theme Provider";
		this.group = "Layouts";
		this.description = `provides theme and palette settings to descendant components`;
	}
}
module.exports = new IgrThemeProviderComponent();
