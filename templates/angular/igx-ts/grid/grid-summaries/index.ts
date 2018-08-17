import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxGridTemplate extends IgniteUIForAngularTemplate {
    constructor() {
        super(__dirname);
        this.components = ["Grid"];
        this.controlGroup = "Grids & Lists";
        this.listInComponentTemplates = true;
        this.id = "grid-summaries";
        this.projectType = "igx-ts";
        this.name = "Grid Summaries";
        this.description = "Sample IgxGrid with summaries feature";
        this.dependencies = [
            { import: "IgxGridModule", from: "igniteui-angular", root: true },
            { import: "IgxIconModule", from: "igniteui-angular" }
        ];
    }
}
module.exports = new IgxGridTemplate();
