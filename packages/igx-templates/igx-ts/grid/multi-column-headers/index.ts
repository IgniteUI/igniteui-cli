import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";
import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";

class IgxMultiColumnHeadersTemplate extends IgniteUIForAngularTemplate {
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "grid-multi-column-headers";
		this.projectType = "igx-ts";
		this.name = "Multi Column Headers";
		this.description = "IgxGrid with multiple header columns.";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
		this.hasExtraConfiguration = true;
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [{
			choices: ["Sorting", "Filtering", "Resizing", "Paging", "Column Pinning", "Moving"],
			default: "",
			key: "columnFeatures",
			message: "Choose features for the igx-grid",
			type: ControlExtraConfigType.MultiChoice
		}];
	}

	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		const columnFeatures = [];
		const columnBoolFeatures = [];
		const gridFeatures = [];
		/** starts with empty string to create a new line on join when something else is added */
		const additionalElements = [""];
		let additionalMarkup = "";
		const checkBoxBind = `[checked]="cell.value" [disabled]="true"`;
		let selectedFeatures = "";

		if (this.userExtraConfiguration["columnFeatures"]) {
			const features = this.userExtraConfiguration["columnFeatures"] as string[];
			for (const feature of this.userExtraConfiguration["columnFeatures"] as string[]) {
				switch (feature) {
					case "Sorting":
					case "Filtering":
					case "Resizing":
					case "Moving":
						const text = `[${feature.toLowerCase().replace("ing", "able")}]="true"`;
						columnFeatures.push(text);
						columnBoolFeatures.push(text);
						break;
					case "Row Selection":
						const gridFeatureText = `rowSelection="multiple"`;
						gridFeatures.push(gridFeatureText);
						break;
					case "Paging":
						additionalElements.push(`  <igx-paginator></igx-paginator>`);
						break;
				}
			}
			selectedFeatures = features.join(", ");
			additionalMarkup = additionalElements.join("\n");
		}

		const extraConfig = {
			additionalMarkup,
			checkBoxBind,
			selectedFeatures,
			columnBoolFeatures: columnBoolFeatures.join(" "),
			columnFeatures: columnFeatures.join(" "),
			gridFeatures: gridFeatures.join(" ")
		};
		return super.generateConfig(name, { extraConfig });
	}
}
module.exports = new IgxMultiColumnHeadersTemplate();
