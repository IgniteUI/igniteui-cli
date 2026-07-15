import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrCircularProgressTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["Circular Progress"];
this.controlGroup = "Data Entry & Display";
this.listInComponentTemplates = true;
this.id = "circular-progress";
this.projectType = "igr-ts";
this.name = "Circular Progress";
this.description = "basic IgrCircularProgress";
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrCircularProgressTemplate();
