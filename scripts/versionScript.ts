
import { readFileSync, writeFileSync } from "fs";
import * as path from "path";
import { generateChangelog } from "./changelogScript";

let version: string;
let coreVersion: string;
const packageFolders = ["cli", "core", "igx-templates", "ng-schematics", "igniteui-mcp/igniteui-doc-mcp"];
const updatedPackages = ["@igniteui/angular-templates", "@igniteui/angular-schematics"];
const coreVersionedPackages = ["@igniteui/cli-core", "@igniteui/mcp-server"];
const DEP_RANGE_PREFIX = "~";

function getVersion() {
	const igxPackageJson = JSON.parse(readFileSync("packages/igx-templates/igx-ts/projects/_base/files/package.json", "utf-8"));
	const versionIG = igxPackageJson.dependencies["igniteui-angular"].replace(/^[^0-9]+/, "");
	const majorMinor = versionIG.split(".").slice(0, 2).join(".");
	const versionCLI = JSON.parse(readFileSync("packages/core/package.json").toString());
	coreVersion = versionCLI.version;
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
			pkgJson.dependencies[pkg] = `${DEP_RANGE_PREFIX}${version}`;
		}
	}
	for (const pkg of coreVersionedPackages) {
		if (pkgJson.dependencies?.[pkg]) {
			pkgJson.dependencies[pkg] = `${DEP_RANGE_PREFIX}${coreVersion}`;
		}
	}
	writeFileSync(fileLocation, JSON.stringify(pkgJson, null, 2) + "\n");
}

function updateServerJson(pkgJsonLocation: string, serverJsonLocation: string) {
	const pkgVersion = JSON.parse(readFileSync(pkgJsonLocation).toString()).version;
	const serverJson = JSON.parse(readFileSync(serverJsonLocation).toString());
	const previousVersion = serverJson.version;
	serverJson.version = pkgVersion;
	if (Array.isArray(serverJson.packages)) {
		for (const entry of serverJson.packages) {
			entry.version = pkgVersion;
		}
	}
	writeFileSync(serverJsonLocation, JSON.stringify(serverJson, null, 2) + "\n");
}

function main() {
	version = getVersion();
	for (const folder of packageFolders) {
		updatePackageJson(path.join("packages", folder, "package.json"));
	}
	updateServerJson(
		path.join("packages", "igniteui-mcp", "igniteui-doc-mcp", "package.json"),
		path.join("packages", "igniteui-mcp", "igniteui-doc-mcp", "server.json"),
	);
}
main();
generateChangelog(version);
