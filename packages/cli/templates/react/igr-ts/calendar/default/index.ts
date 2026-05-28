import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

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
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrCalendarTemplate();
