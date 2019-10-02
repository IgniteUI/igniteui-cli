import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

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
		this.dependencies = [
			{ import: "IgxGridModule", from: "igniteui-angular" },
			{ import: "IgxCheckboxModule", from: "igniteui-angular" },
			{ import: "FormsModule", from: "@angular/forms" }
		];

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
						gridFeatures.push(`[paging]="true"`);
						break;
				}
			}
			selectedFeatures = features.join(", ");
		}
		const extraConfig = {
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
