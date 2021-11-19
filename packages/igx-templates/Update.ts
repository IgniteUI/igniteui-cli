import { App, FS_TOKEN, IFileSystem, PackageManager, ProjectConfig, Util } from "@igniteui/cli-core";
import * as path from "path";
import { getUpgradeablePackages, PackageDefinition } from "./package-resolve";

const styleExtension = ["css", "scss", "sass"];
enum RegularExpressionType {
	STYLE,
	LOGIC
}

function createExpression(expressionType: RegularExpressionType, packageName: string): string {
	if (expressionType === RegularExpressionType.LOGIC) {
		return String.raw`(from ["'])${packageName}(?<submodules>\/.*?)?(["'])`;
	} else if (expressionType === RegularExpressionType.STYLE) {
		return String.raw`(node_modules\/|[~"'])${packageName}(\/)`;
	}
}

export async function updateWorkspace(rootPath: string): Promise<boolean> {
	const fs: IFileSystem = App.container.get(FS_TOKEN);
	const upgradeable = getUpgradeablePackages();
	if (!upgradeable.length) {
		Util.log("Your app is already using packages from the Infragistics registry. You are good to go.", "green");
		return false;
	}

	const packageJsonPath = path.join(rootPath, "package.json");
	const fileString = fs.readFile(packageJsonPath);

	// check for registry user in npm
	const config = ProjectConfig.getConfig();
	if (!fileString) {
		Util.log("Package.json not found!");
		return false;
	}
	const pkgJSON = JSON.parse(fileString);

	const errorMsg = "Something went wrong, " +
		"please follow the steps in this guide: https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/ignite-ui-licensing";
	if (!PackageManager.ensureRegistryUser(config, errorMsg)) {
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
		if (workspaceConfig.projects[entry].sourceRoot) {
			// ignore projects without sourceRoot (likely older e2e proj)
			workspaces.push(path.join(rootPath, workspaceConfig.projects[entry].sourceRoot));
		}
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
	for (const packageDef of upgradeable) {
		updatePackageJSON(packageDef.trial, packageDef.licensed, pkgJSON);
	}
	fs.writeFile(packageJsonPath, Util.formatPackageJson(pkgJSON));
	updateFileImports(logicFiles, styleFiles, upgradeable, fs);
	return true;
}

function updateFileContent(fileContent: string, regexString: string, replaceWith: string): string {
	const match = fileContent.match(new RegExp(regexString));
	if (match) {
		fileContent = fileContent.replace(new RegExp(regexString, "g"),
			`$1${replaceWith}$2${match.length === 4 ? "$3" : ""}`);
	}
	return fileContent;
}

function updateFileImports(
	logicFiles: string[],
	styleFiles: string[],
	packageDefs: PackageDefinition[],
	fs: IFileSystem
): void {

	for (const file of logicFiles) {
		let fileContent = fs.readFile(file);
		let fileChange = false;
		for (const packageDef of packageDefs) {
			if (fileContent.includes(packageDef.trial)) {
				const newContent = updateFileContent(fileContent,
					createExpression(RegularExpressionType.LOGIC, packageDef.trial), packageDef.licensed);
				fileChange = fileContent !== newContent;
				fileContent = newContent;
			}
		}
		if (fileChange) {
			fs.writeFile(file, fileContent);
		}
	}
	for (const file of styleFiles) {
		let fileContent = fs.readFile(file);
		let fileChange = false;
		for (const packageDef of packageDefs) {
			if (fileContent.includes(packageDef.trial)) {
				const newContent = updateFileContent(fileContent,
					createExpression(RegularExpressionType.STYLE, packageDef.trial), packageDef.licensed);
				fileChange = fileContent !== newContent;
				fileContent = newContent;
			}
		}
		if (fileChange) {
			fs.writeFile(file, fileContent);
		}
	}
}

function updatePackageJSON(
	initName: string,
	replaceWith: string,
	pkgJSON: { dependencies: { [key: string]: string } }
): void {
	if (!pkgJSON.dependencies.hasOwnProperty(initName)) {
		return;
	}
	pkgJSON.dependencies[replaceWith] = pkgJSON.dependencies[initName];
	delete pkgJSON.dependencies[initName];
}
