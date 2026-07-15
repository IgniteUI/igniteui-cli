import { writeFileSync } from "fs";

const scripts = {
	postinstall: "node ./scripts/install.js",
	preuninstall: "node ./scripts/uninstall.js"
};

const config = require("../packages/cli/package.json");
config.scripts = scripts;
const schematicsConfig = require("../packages/ng-schematics/package.json");
Object.assign(schematicsConfig.scripts, scripts);

writeFileSync("./packages/cli/package.json", JSON.stringify(config, null, 2));
writeFileSync("./packages/ng-schematics/package.json", JSON.stringify(schematicsConfig, null, 2));
