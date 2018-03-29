import { writeFileSync } from "fs";

const scripts = {
	postinstall: "node ./scripts/install.js",
	preuninstall: "node ./scripts/uninstall.js"
};

// tslint:disable-next-line:no-var-requires
const config = require("../package.json");
config.scripts = scripts;

writeFileSync("../package.json", JSON.stringify(config, null, 2));
