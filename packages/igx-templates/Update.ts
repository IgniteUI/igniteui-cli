import { App, FS_TOKEN, IFileSystem, PackageManager, ProjectConfig, Util } from "@igniteui/cli-core";
import * as path from "path";
import { FEED_PACKAGE, NPM_PACKAGE, resolvePackage } from "./package-resolve";

const styleExtension = ["css", "scss", "sass"];
const styleExpression = String.raw`(node_modules\/|~)${NPM_PACKAGE}(\/)`;
const logicExpression = String.raw`(from ["'])${NPM_PACKAGE}(["'])`;

export async function updateWorkspace(rootPath: string): Promise<boolean> {
	if (resolvePackage() === FEED_PACKAGE) {
		return false;
	}
	const fs: IFileSystem = App.container.get(FS_TOKEN);

	const packageJsonPath = path.join(rootPath, "package.json");
	const fileString = fs.readFile(packageJsonPath);
	if (fs.directoryExists(path.join(App.workDir, rootPath, "node_modules", "@infragistics"))) {
		Util.log("@infragistics module already exists. Nothing to do here.");
		return false;
	}

	// check for registry user in npm
	const config = ProjectConfig.getConfig();
	if (fileString) {
		const pkgJSON = JSON.parse(fileString);
		const errorMsg = "Something went wrong, " +
		"please follow the steps in this guide: https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/ignite-ui-licensing.html";
		if (PackageManager.ensureRegistryUser(config, errorMsg)) {
			pkgJSON.dependencies[FEED_PACKAGE] = pkgJSON.dependencies[NPM_PACKAGE];
			delete pkgJSON.dependencies[NPM_PACKAGE];
			fs.writeFile(packageJsonPath, JSON.stringify(pkgJSON, null, 2));
		} else {
			return false;
		}
	} else {
		Util.log("Package.json not found!");
		return false;
	}

	// get all workspace roots
	const workspaces = [];
	let workspaceConfig = null;
	const workspacePath = path.join(rootPath, "angular.json");
	if (fs.fileExists(workspacePath)) {
		workspaceConfig = JSON.parse(fs.readFile(workspacePath));
	} else {
		Util.log("No angular.json file found! Aborting.");
		return false;
	}

	for (const entry of Object.keys(workspaceConfig.projects)) {
		workspaces.push(path.join(rootPath, workspaceConfig.projects[entry].sourceRoot));
	}
	// once all workspace are gotten, get all files for all workspaces
	const logicFiles = [];
	const styleFiles = [];
	for (const workspace of workspaces) {
		logicFiles.push(...fs.glob(workspace, "**/*.ts"));
		for (const extension of styleExtension) {
			styleFiles.push(...fs.glob(workspace, `**/*.${extension}`));
		}
	}
	styleFiles.push(workspacePath);

	for (const file of logicFiles) {
		rewriteFile(fs, file, logicExpression);
	}
	for (const file of styleFiles) {
		rewriteFile(fs, file, styleExpression);
	}

	return true;
}

function rewriteFile(fs: IFileSystem, fileLocation: string, regexString: string) {
	let fileContent = fs.readFile(fileLocation);
	if (fileContent.match(new RegExp(regexString))) {
		fileContent = transformFile(fileContent, regexString);
		fs.writeFile(fileLocation, fileContent);
	}
}
function transformFile(fileContent: string, regexString: string) {
	fileContent = fileContent.replace(new RegExp(regexString, "g"), `$1${FEED_PACKAGE}$2`);
	return fileContent;
}
