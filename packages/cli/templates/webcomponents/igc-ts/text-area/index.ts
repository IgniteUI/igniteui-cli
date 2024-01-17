import { BaseComponent, TypeScriptFileUpdate } from "@igniteui/cli-core";

class IgcTextareaComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Text area";
		this.group = "Data Entry & Display";
		this.description = `Basic text area component`;
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcTextareaComponent();
