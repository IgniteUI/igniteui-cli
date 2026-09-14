import { BaseComponent } from "@igniteui/cli-core";

class IgcThemeProviderComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Theme Provider";
		this.group = "Layouts";
		this.description = `Scopes a theme to its descendant components via the Lit context API`;
	}
}
module.exports = new IgcThemeProviderComponent();
