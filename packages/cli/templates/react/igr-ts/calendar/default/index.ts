import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrCalendarTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["Calendar"];
this.controlGroup = "Scheduling";
this.listInComponentTemplates = true;
this.id = "calendar";
this.projectType = "igr-ts";
this.name = "Calendar";
this.description = "basic IgrCalendar";
this.packages = ["igniteui-react@~19.5.2"];
}
}
module.exports = new IgrCalendarTemplate();
