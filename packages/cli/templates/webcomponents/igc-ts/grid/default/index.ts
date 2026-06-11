import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(__dirname, "../../../../../shared-data");

class IgcGridTemplate extends IgniteUIForWebComponentsTemplate {
        constructor() {
                super(__dirname);
                this.components = ["Grid"];
                this.controlGroup = "Grids & Lists";
                this.listInComponentTemplates = true;
                this.id = "grid";
                this.projectType = "igc-ts";
                this.name = "Grid";
                this.description = "IgcGrid with local data";
                this.packages = [ "igniteui-webcomponents-grids@~7.1.0" ];
        }

        public get templatePaths(): string[] {
                return [
                        ...super.templatePaths,
                        path.join(SHARED_DATA_ROOT, "grid", "files")
                ];
        }
}
module.exports = new IgcGridTemplate();
