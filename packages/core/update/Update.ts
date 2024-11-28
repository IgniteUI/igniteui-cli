import * as path from "path";
import { PackageDefinition, getUpgradeablePackages } from "./package-resolve";
import { App, ProjectConfig, Util } from "../util";
import { FS_TOKEN, IFileSystem } from "../types";
import { PackageManager } from "../packages/PackageManager";

enum RegularExpressionType {
	STYLE,
	LOGIC
}

export async function updateWorkspace(rootPath: string): Promise<boolean> {
	let guideLink = "";
	let logicFilesExtension = "";
	let styleExtensions = [];

	const config = ProjectConfig.getConfig();
	const framework = config.project.framework;
	switch (framework.toLowerCase()) {
		case "angular":
			guideLink =
				"https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/ignite-ui-licensing";
			logicFilesExtension = "ts";
			styleExtensions = ["css", "scss", "sass"];
			break;
		case "react":
			guideLink = "https://www.infragistics.com/products/ignite-ui-react/react/components/general-licensing";
			logicFilesExtension = "tsx";
			styleExtensions = ["css"];
			break;
		case "webcomponents":
			guideLink = "https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/general-licensing";
			logicFilesExtension = "ts";
			break;
		default:
			break;
	}

	const upgradeable: PackageDefinition[] = getUpgradeablePackages();
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

	const workspaces = [];
	const logicFiles = [];
	const styleFiles = [];
	const pkgJsonFiles = [];
	pkgJsonFiles.push(...fs.glob(rootPath, `package.json`, ['node_modules', 'dist']));

	let workspaceConfig = null;
	switch (framework.toLowerCase()) {
		case "angular":
			const angularJsonPath = path.join(rootPath, "angular.json");
			if (fs.fileExists(angularJsonPath)) {
				workspaceConfig = JSON.parse(fs.readFile(angularJsonPath));
				styleFiles.push(angularJsonPath);
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
			break;
		case "react":
		case "webcomponents":
			if (pkgJSON.workspaces) {
				pkgJSON.workspaces.forEach(w => {
					workspaces.push(path.join(rootPath, w));
				});
			} else {
				workspaces.push(path.join(rootPath, "src"));
			}
			break;
		default:
			break;
	}

	// once all workspaces are gotten, get all files for all workspaces
	for (const workspace of workspaces) {
		logicFiles.push(...fs.glob(workspace, `**/*.${logicFilesExtension}`));
		for (const styleExtension of styleExtensions) {
			styleFiles.push(...fs.glob(workspace, `**/*.${styleExtension}`));
		}
		pkgJsonFiles.push(...fs.glob(workspace, `**/package.json`));
	}

	updateFileImports(logicFiles, styleFiles, upgradeable, fs);
	updatePackageJsonFiles(pkgJsonFiles, upgradeable, fs);
	createNpmrc(rootPath, fs);
	updateWorkflows(fs);

	return true;
}

function updateFileContent(fileContent: string, regexStrings: string[], replaceWith: string): string {
	for (const regexString of regexStrings) {
		const match = fileContent.match(new RegExp(regexString));
		if (match) {
			fileContent = fileContent.replace(new RegExp(regexString, "g"),
				`$1${replaceWith}$2${match.length === 4 ? "$3" : ""}`);
		}
	}

	return fileContent;
}

function createExpressions(expressionType: RegularExpressionType, packageName: string): string[] {
	const regexStrings = [];
	if (expressionType === RegularExpressionType.LOGIC) {
		regexStrings.push(String.raw`(import ["'])${packageName}(?<submodules>\/.*?)?(["'])`);
		regexStrings.push(String.raw`(from ["'])${packageName}(?<submodules>\/.*?)?(["'])`);
	} else if (expressionType === RegularExpressionType.STYLE) {
		regexStrings.push(String.raw`(node_modules\/|[~"'])${packageName}(\/)`);
	}

	return regexStrings;
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
					createExpressions(RegularExpressionType.LOGIC, packageDef.trial), packageDef.licensed);
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
					createExpressions(RegularExpressionType.STYLE, packageDef.trial), packageDef.licensed);
				fileChange = fileContent !== newContent;
				fileContent = newContent;
			}
		}
		if (fileChange) {
			fs.writeFile(file, fileContent);
		}
	}
}

function updatePackageJsonFiles(
	pkgJsonFiles: string[],
	packageDefs: PackageDefinition[],
	fs: IFileSystem
): void {
	for (const pkgJsonFile of pkgJsonFiles) {
		const fileString = fs.readFile(pkgJsonFile);
		const pkgJSON = JSON.parse(fileString);
		for (const packageDef of packageDefs) {
			if (!pkgJSON.dependencies.hasOwnProperty(packageDef.trial)) {
				continue;
			}
			pkgJSON.dependencies[packageDef.licensed] = pkgJSON.dependencies[packageDef.trial];
			delete pkgJSON.dependencies[packageDef.trial];
		}
		fs.writeFile(pkgJsonFile, Util.formatPackageJson(pkgJSON));
	}
}

function updateWorkflows(
	fs: IFileSystem
): void {
	const workflowFiles = ["node.js.yml", "github-pages.yml"];
	const oldNpmInstall = "- run: npm i # replace with 'npm ci' after committing lock file from first install";
	const newNpmInstall =
`- run: echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:_auth=\${{ secrets.NPM_AUTH_TOKEN }}" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
    - run: npm i # replace with 'npm ci' after committing lock file from first install`;

	for (const fileName of workflowFiles) {
		const workflowPath = `.github/workflows/${fileName}`;
		let workflow = fs.readFile(workflowPath);
		if (workflow) {
			workflow = workflow.replace(oldNpmInstall, newNpmInstall);
			fs.writeFile(workflowPath, workflow);
		}
	}
}

function createNpmrc(
	rootPath: string,
	fs: IFileSystem
): void {
	const npmrcPath = path.join(rootPath, ".npmrc");
	if (!fs.fileExists(npmrcPath)) {
		const fileContent =
`@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/
//packages.infragistics.com/npm/js-licensed/:always-auth=true
`;
		fs.writeFile(npmrcPath, fileContent);
	}
}
