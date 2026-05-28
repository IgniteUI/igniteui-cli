import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrLinearProgressTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["Linear Progress"];
this.controlGroup = "Data Entry & Display";
this.listInComponentTemplates = true;
this.id = "linear-progress";
this.projectType = "igr-ts";
this.name = "Linear Progress";
this.description = "basic IgrLinearProgress";
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrLinearProgressTemplate();
