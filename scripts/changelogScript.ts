import { readFileSync, unlinkSync, writeFileSync } from "fs";
import * as path from "path";

const packagesFolder = "packages";
const packageNames = {
	"cli": "igniteui-cli",
	"core": "igniteui/cli-core",
	"igx-templates": "igniteui/angular-templates",
	"ng-schematics": "igniteui/angular-schematics",
	"mcp-server": "igniteui/mcp-server"
};

function changeVersion(text: string, version?: string) {
	if (version) {
		return text.replace(/(#\s.+)(?=\(2)/m, `${version} `);
	} else {
		const match = text.match(/(\s.+)(?=\(2)/m);
		return text.replace(/(#\s.+)(?=\(2)/m, `${match[1].trim()} `);
	}
}

export function generateChangelog(version: string) {
	const folders = ["cli", "ng-schematics", "igx-templates", "core", "mcp-server"];
	let mainChangelog: any = "";
	try {
		mainChangelog = readFileSync("CHANGELOG.md");
	} catch (e) {
		// tslint:disable-next-line:no-console
		console.warn("No changelog present, creating file");
	}
	let currentLog = mainChangelog ? mainChangelog.toString() : "";
	currentLog = "\n" + currentLog;
	const mainVersion = JSON.parse(readFileSync(path.join(packagesFolder, "cli", "package.json")).toString());
	let addedLog = `# ${mainVersion.version}\n\n`;
	for (const folder of folders.reverse()) {
		// get changelog and add it to main
		const changelogPath = path.join(packagesFolder, folder, `CHANGELOG.md`);
		let changelog: any = readFileSync(changelogPath);
		changelog = changelog.toString().replace(/(# Change Log)(\s*[^#])+/g, "");
		changelog = changelog.replace(/(###)/g, "####");
		changelog = changeVersion(changelog, folder === "igx-templates" || folder === "ng-schematics" ? version : null);
		changelog = `## ${packageNames[folder]}@${changelog}\n`;
		addedLog += changelog;
		unlinkSync(changelogPath);
	}
	currentLog = addedLog + currentLog;
	writeFileSync("CHANGELOG.md", currentLog);
}
