import { App, FS_TOKEN, IFileSystem, PackageManager, ProjectConfig, Util } from "@igniteui/cli-core";
import * as path from "path";
import { FEED_DOCK_MANAGER, FEED_PACKAGE, NPM_DOCK_MANAGER, NPM_PACKAGE, resolvePackage } from "./package-resolve";

const styleExtension = ["css", "scss", "sass"];
enum RegularExpressionType {
	STYLE,
	LOGIC
}

// tslint:disable: object-literal-sort-keys
const packages: { [key: string]: { trial: string, licensed: string, styleExp: string, logicExp: string } } = {
	base: {
		trial: NPM_PACKAGE,
		licensed: FEED_PACKAGE,
		styleExp: createExpression(RegularExpressionType.STYLE, NPM_PACKAGE),
		logicExp: createExpression(RegularExpressionType.LOGIC, NPM_PACKAGE)
	},
	dockManager: {
		trial: NPM_DOCK_MANAGER,
		licensed: FEED_DOCK_MANAGER,
		styleExp: createExpression(RegularExpressionType.STYLE, NPM_DOCK_MANAGER),
		logicExp: createExpression(RegularExpressionType.LOGIC, NPM_DOCK_MANAGER)
	}
};

function createExpression(expressionType: RegularExpressionType, packageName: string): string {
	if (expressionType === RegularExpressionType.LOGIC) {
		return String.raw`(from ["'])${packageName}(?<submodules>\/.*?)?(["'])`;
	} else if (expressionType === RegularExpressionType.STYLE) {
		return String.raw`(node_modules\/|~)${packageName}(\/)`;
	}
}

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
			updatePackageJSON(NPM_PACKAGE, FEED_PACKAGE, pkgJSON);
			updatePackageJSON(NPM_DOCK_MANAGER, FEED_DOCK_MANAGER, pkgJSON);
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

	updateFileImports(logicFiles, styleFiles, fs);

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
	fs: IFileSystem
): void {

	for (const file of logicFiles) {
		let fileContent = fs.readFile(file);
		// tslint:disable-next-line: forin
		for (const key in packages) {
			fileContent = updateFileContent(fileContent, packages[key].logicExp, packages[key].licensed);
		}
		fs.writeFile(file, fileContent);
	}
	for (const file of styleFiles) {
		let fileContent = fs.readFile(file);
		// tslint:disable-next-line: forin
		for (const key in packages) {
			fileContent = updateFileContent(fileContent, packages[key].styleExp, packages[key].licensed);
		}
		fs.writeFile(file, fileContent);
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
	pkgJSON.dependencies =
		Object.keys(pkgJSON.dependencies)
			.sort()
			.reduce((result, key) => (result[key] = pkgJSON.dependencies[key]) && result, {});
}
