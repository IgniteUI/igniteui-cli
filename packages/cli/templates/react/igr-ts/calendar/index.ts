import { BaseComponent } from "@igniteui/cli-core";

class IgrCalendarComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "Calendar";
this.group = "Scheduling";
this.description = `displays calendar component`;
}
}
module.exports = new IgrCalendarComponent();
