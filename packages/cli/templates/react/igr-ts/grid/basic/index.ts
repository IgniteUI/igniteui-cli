
import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_GRIDS_PACKAGE } from "../../constants";
import * as path from "path";

const SHARED_DATA_ROOT = path.join(__dirname, "../../../../../shared-data");

class GridTemplate extends IgniteUIForReactTemplate {
        /**
         *
         */
        constructor() {
                super(__dirname);
                this.id = "grid";
                this.name = "Grid";
                this.widget = "igGrid";
                this.description = "IgrGrid template for React";
                this.projectType = "igr-ts";
                this.components = ["Grid"];
                this.controlGroup = "Data Grids";
                this.packages = [IGNITEUI_REACT_GRIDS_PACKAGE];

                this.hasExtraConfiguration = false;
        }

        public get templatePaths(): string[] {
                return [
                        ...super.templatePaths,
                        path.join(SHARED_DATA_ROOT, "grid", "files")
                ];
        }
}
module.exports = new GridTemplate();
