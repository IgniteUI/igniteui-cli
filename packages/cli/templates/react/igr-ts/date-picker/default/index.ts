import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrDatePickerTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["Date Picker"];
this.controlGroup = "Scheduling";
this.listInComponentTemplates = true;
this.id = "date-picker";
this.projectType = "igr-ts";
this.name = "Date Picker";
this.description = "basic IgrDatePicker";
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrDatePickerTemplate();
