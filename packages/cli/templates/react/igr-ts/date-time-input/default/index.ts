import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrDateTimeInputTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Date Time Input"];
		this.controlGroup = "Scheduling";
		this.listInComponentTemplates = true;
		this.id = "date-time-input";
		this.projectType = "igr-ts";
		this.name = "Date Time Input";
		this.description = "basic IgrDateTimeInput";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrDateTimeInputTemplate();
