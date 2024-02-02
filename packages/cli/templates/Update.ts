import { App, FS_TOKEN, IFileSystem, PackageManager, ProjectConfig, PackageDefinition, Util } from "@igniteui/cli-core";
import * as path from "path";
import { getReactUpgradeablePackages } from "./react/package-resolve";
import { getWebcomponentsUpgradeablePackages } from "./webcomponents/package-resolve";

export async function updateWorkspace(rootPath: string): Promise<boolean> {
	let guideLink = "";
	let logicFilesExtension = "";
	let upgradeable: PackageDefinition[] = [];

	const config = ProjectConfig.getConfig();
	const framework = config.project.framework;
	switch (framework.toLowerCase()) {
		// case "angular":
		// 	guideLink =
		// 	  "https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/ignite-ui-licensing";
		// 	break;
		case "react":
			guideLink = "https://www.infragistics.com/products/ignite-ui-react/react/components/general-licensing";
			logicFilesExtension = "tsx";
			upgradeable = getReactUpgradeablePackages();
			break;
		case "webcomponents":
			guideLink = "https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/general-licensing";
			logicFilesExtension = "ts";
			upgradeable = getWebcomponentsUpgradeablePackages();
			break;
		default:
			break;
	}

	if (!upgradeable.length) {
		Util.log("Your app is already using packages from the Infragistics registry. You are good to go.", "green");
		return false;
	}

	const packageJsonPath = path.join(rootPath, "package.json");
	const fs: IFileSystem = App.container.get(FS_TOKEN);
	const fileString = fs.readFile(packageJsonPath);

	if (!fileString) {
		Util.log("Package.json not found!");
		return false;
	}
	const pkgJSON = JSON.parse(fileString);

	const errorMsg = "Something went wrong, please follow the steps in this guide: " + guideLink;
	if (!PackageManager.ensureRegistryUser(config, errorMsg)) {
		return false;
	}

	const workspace = path.join(rootPath, "src");
	const logicFiles = [];
	logicFiles.push(...fs.glob(workspace, "**/*." + logicFilesExtension));
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
