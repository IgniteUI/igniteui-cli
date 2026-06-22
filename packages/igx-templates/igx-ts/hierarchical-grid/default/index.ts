import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(__dirname, "../../../shared-data");

class IgxHierarchicalGridTemplate extends IgniteUIForAngularTemplate {
        constructor() {
                super(__dirname);
                this.components = ["Hierarchical Grid"];
                this.controlGroup = "Grids & Lists";
                this.listInComponentTemplates = true;
                this.id = "hierarchical-grid";
                this.projectType = "igx-ts";
                this.name = "Hierarchical Grid";
                this.description = "basic IgxHierarchicalGrid";
                this.packages = [IGNITEUI_ANGULAR_PACKAGE];
        }

        public get templatePaths(): string[] {
                return [
                        ...super.templatePaths,
                        path.join(SHARED_DATA_ROOT, "hierarchical-grid", "files")
                ];
        }
}
module.exports = new IgxHierarchicalGridTemplate();
