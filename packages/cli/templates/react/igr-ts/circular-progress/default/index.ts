import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
this.packages = ["igniteui-react@~19.5.2"];
}
}
module.exports = new IgrCircularProgressTemplate();
