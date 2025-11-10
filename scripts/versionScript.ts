
import { readFileSync, writeFileSync } from "fs";
import * as path from "path";
import { generateChangelog } from "./changelogScript";

let version: string;
const packageFolders = ["cli", "core", "igx-templates", "mcp-server", "ng-schematics"];
const updatedPackages = ["@igniteui/angular-templates", "@igniteui/angular-schematics"];

function getVersion() {
	const igxPackageJson = JSON.parse(readFileSync("packages/igx-templates/igx-ts/projects/_base/files/package.json", "utf-8"));
	const versionIG = igxPackageJson.dependencies["igniteui-angular"].replace(/^[^0-9]+/, "");
	const majorMinor = versionIG.split(".").slice(0, 2).join(".");
	const versionCLI = JSON.parse(readFileSync("packages/core/package.json").toString());
	let patch = versionCLI.version;
	if (patch.indexOf("-") > -1) {
		const prerelease = patch.split("-");
		patch = `${prerelease[0].split(".").join("")}-${prerelease[1]}`;
	} else {
		patch = versionCLI.version.split(".").join("");
	}
	return `${majorMinor}.${patch}`;

}

function updatePackageJson(fileLocation: string) {
	const pkgJson = JSON.parse(readFileSync(fileLocation).toString());
	if (updatedPackages.includes(pkgJson.name)) {
		pkgJson["version"] = version;
	}
	for (const pkg of updatedPackages) {
		if (pkgJson.dependencies[pkg]) {
			const prefix = pkgJson.dependencies[pkg].match(/[~\^]/g);
			pkgJson.dependencies[pkg] = `${prefix ? prefix[0] : ""}${version}`;
		}
	}
	writeFileSync(fileLocation, JSON.stringify(pkgJson, null, 2) + "\n");
}

function main() {
	version = getVersion();
	for (const folder of packageFolders) {
		updatePackageJson(path.join("packages", folder, "package.json"));
	}
}
main();
generateChangelog(version);
