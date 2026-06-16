import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(__dirname, "../../../shared-data");

class IgxGridTemplate extends IgniteUIForAngularTemplate {
        constructor() {
                super(__dirname);
                this.components = ["Grid"];
                this.controlGroup = "Grids & Lists";
                this.listInComponentTemplates = true;
                this.id = "grid";
                this.projectType = "igx-ts";
                this.name = "Grid";
                this.description = "basic IgxGrid";
                this.packages = [IGNITEUI_ANGULAR_PACKAGE];
        }

        public get templatePaths(): string[] {
                return [
                        ...super.templatePaths,
                        path.join(SHARED_DATA_ROOT, "grid", "files")
                ];
        }
}
module.exports = new IgxGridTemplate();
