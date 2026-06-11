import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(__dirname, "../../../../cli/shared-data");

class IgxPivotGridTemplate extends IgniteUIForAngularTemplate {
        constructor() {
                super(__dirname);
                this.components = ["Pivot Grid"];
                this.controlGroup = "Grids & Lists";
                this.listInComponentTemplates = true;
                this.id = "pivot-grid";
                this.projectType = "igx-ts";
                this.name = "Pivot Grid";
                this.packages = [IGNITEUI_ANGULAR_PACKAGE];
        }

        public get templatePaths(): string[] {
                return [
                        ...super.templatePaths,
                        path.join(SHARED_DATA_ROOT, "pivot-grid", "files")
                ];
        }
}
module.exports = new IgxPivotGridTemplate();
