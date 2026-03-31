import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
this.packages = ["igniteui-react@~19.5.2"];
}
}
module.exports = new IgrLinearProgressTemplate();
