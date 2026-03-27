import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrDatePickerTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["DatePicker"];
this.controlGroup = "Scheduling";
this.listInComponentTemplates = true;
this.id = "date-picker";
this.projectType = "igr-ts";
this.name = "Date Picker";
this.description = "basic IgrDatePicker";
this.packages = ["igniteui-react@~19.5.2"];
}
}
module.exports = new IgrDatePickerTemplate();
