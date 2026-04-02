import { BaseComponent } from "@igniteui/cli-core";

class IgrDatePickerComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "Date Picker";
this.group = "Scheduling";
this.description = `displays date picker component`;
}
}
module.exports = new IgrDatePickerComponent();
