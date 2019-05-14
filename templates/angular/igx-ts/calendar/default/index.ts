import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";
import { ControlExtraConfigType, ControlExtraConfiguration } from "../../../../../lib/types/index";

class IgxCalendarTemplate extends IgniteUIForAngularTemplate {
	private userExtraConfiguration: {} = {};
	constructor() {
		super(__dirname);
		this.components = ["Calendar"];
		this.controlGroup = "Scheduling";
		this.listInComponentTemplates = true;
		this.id = "calendar";
		this.projectType = "igx-ts";
		this.name = "Calendar";
		this.description = "IgxCalendar with single selection";
		this.dependencies = [
			{ import: "IgxCalendarModule", from: "igniteui-angular" }
		];

		this.hasExtraConfiguration = true;
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [{
			choices: ["Single selection", "Multi selection", "Range selection"],
			default: "Single selection",
			key: "selectionType",
			message: "Choose selection type for the igx-calendar",
			type: ControlExtraConfigType.Choice
		}];
	}

	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		let selectionType = "";
		let selectionMode = "";

		if (this.userExtraConfiguration["selectionType"]) {
			const type = this.userExtraConfiguration["selectionType"] as string;
			selectionMode = type;
			switch (type) {
				case "Single selection":
					selectionType = "";
					break;
				case "Multi selection":
					selectionType = 'selection="multi"';
					break;
				case "Range selection":
					selectionType = 'selection="range"';
					break;
			}
		}

		const extraConfig = {
			"$(selectionMode)": selectionMode,
			"$(selectionType)": selectionType
		};

		return super.generateConfig(name, { extraConfig });
	}
}
module.exports = new IgxCalendarTemplate();
