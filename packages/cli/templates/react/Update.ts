import { App, FS_TOKEN, IFileSystem, PackageManager, ProjectConfig, Util } from "@igniteui/cli-core";
import * as path from "path";
import { getUpgradeablePackages, PackageDefinition } from "./package-resolve";

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
		"please follow the steps in this guide: https://www.infragistics.com/products/ignite-ui-react/react/components/general-licensing";
	if (!PackageManager.ensureRegistryUser(config, errorMsg)) {
		return false;
	}

	const workspace = path.join(rootPath, "src");
	const logicFiles = [];
	logicFiles.push(...fs.glob(workspace, "**/*.tsx"));
	for (const packageDef of upgradeable) {
		updatePackageJSON(packageDef.trial, packageDef.licensed, pkgJSON);
	}
	fs.writeFile(packageJsonPath, Util.formatPackageJson(pkgJSON));
	updateFileImports(logicFiles, upgradeable, fs);
	createNpmrc(rootPath, fs);
	updateWorkflows(fs);
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
	packageDefs: PackageDefinition[],
	fs: IFileSystem
): void {

	for (const file of logicFiles) {
		let fileContent = fs.readFile(file);
		let fileChange = false;
		for (const packageDef of packageDefs) {
			if (fileContent.includes(packageDef.trial)) {
				const regexFrom = String.raw`(from ["'])${packageDef.trial}(?<submodules>\/.*?)?(["'])`;
				let newContent = updateFileContent(fileContent, regexFrom, packageDef.licensed);
				const regexImport = String.raw`(import ["'])${packageDef.trial}(?<submodules>\/.*?)?(["'])`;
				newContent = updateFileContent(newContent, regexImport, packageDef.licensed);
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
	// update dependencies
	if (!pkgJSON.dependencies.hasOwnProperty(initName)) {
		return;
	}
	pkgJSON.dependencies[replaceWith] = pkgJSON.dependencies[initName];
	delete pkgJSON.dependencies[initName];

	// add "infragistics-login" script
	const scripts = pkgJSON["scripts"];
	scripts["infragistics-login"] = "echo \"IMPORTANT: When prompted for username enter in this format `name!!domain.com`\" && npm adduser --registry=https://packages.infragistics.com/npm/js-licensed/ --scope=@infragistics --always-auth";
}

function updateWorkflows(
	fs: IFileSystem
): void {
	const workflowPath = ".github/workflows/node.js.yml";
	let workflow = fs.readFile(workflowPath);
	if (workflow) {
		const oldNmpInstall = "- run: npm i # replace with \'npm ci\' after committing lock file from first install";
		const newNpmInstall =
`- run: echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:_auth=\${{ secrets.NPM_AUTH_TOKEN }}" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
    - run: npm i # replace with \'npm ci\' after committing lock file from first install`;
		workflow = workflow.replace(oldNmpInstall, newNpmInstall);
		fs.writeFile(workflowPath, workflow);
	}
}

function createNpmrc(
	rootPath: string,
	fs: IFileSystem
): void {
	const npmrcPath = path.join(rootPath, ".npmrc");
	const fileContent =
`@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/
//packages.infragistics.com/npm/js-licensed/:always-auth=true
`;
	fs.writeFile(npmrcPath, fileContent);
}
