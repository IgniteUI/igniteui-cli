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
	let shouldUpgradeHTML = false;

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
			shouldUpgradeHTML = true;
			break;
		case "webcomponents":
			guideLink = "https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/general-licensing";
			logicFilesExtension = "ts";
			shouldUpgradeHTML = true;
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
	const htmlFiles = [];
	pkgJsonFiles.push(...fs.glob(rootPath, `package.json`, ['node_modules', 'dist']));

	if (shouldUpgradeHTML) {
		const filePaths = fs.glob(rootPath, `*.html`, ['node_modules', 'dist']);
		if (filePaths && filePaths.length > 0) {
			htmlFiles.push(...filePaths);
		}
	}

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
					// Handle workspace patterns that may contain globs
					if (w.includes("*")) {
						// Use glob to expand the workspace pattern
						const expandedWorkspaces = fs.glob(rootPath, w);
						expandedWorkspaces.forEach(expandedWorkspace => {
							// Only add if it's a directory
							if (fs.directoryExists(expandedWorkspace)) {
								workspaces.push(expandedWorkspace);
							}
						});
					} else {
						// Direct workspace path
						const workspacePath = path.join(rootPath, w);
						if (fs.directoryExists(workspacePath)) {
							workspaces.push(workspacePath);
						}
					}
				});
			} else {
				// For React and WebComponents projects without explicit workspaces,
				// check for common project patterns like projects/* in addition to src/
				workspaces.push(path.join(rootPath, "src"));
				
				// Check for projects/* pattern common in React demo/example repositories
				// Only check if projects directory exists to avoid unnecessary glob calls
				const projectsDir = path.join(rootPath, "projects");
				if (fs.directoryExists(projectsDir)) {
					const projectsPattern = "projects/*";
					const projectsWorkspaces = fs.glob(rootPath, projectsPattern);
					projectsWorkspaces.forEach(projectPath => {
						if (fs.directoryExists(projectPath)) {
							workspaces.push(projectPath);
						}
					});
				}
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

	// For React and WebComponents projects, also include vite.config.ts files
	if (framework.toLowerCase() === "react" || framework.toLowerCase() === "webcomponents") {
		const viteConfigFiles = fs.glob(rootPath, `vite.config.ts`, ['node_modules', 'dist']);
		if (viteConfigFiles && viteConfigFiles.length > 0) {
			logicFiles.push(...viteConfigFiles);
		}
	}

	updateFileImports(logicFiles, styleFiles, upgradeable, fs);
	if (shouldUpgradeHTML) {
		updateHTMLImports(htmlFiles, upgradeable, fs);
	}
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
				// Because when including a theme inside a WC render method we need to update its import path too #1386
				const regExpressions = [...createExpressions(RegularExpressionType.LOGIC, packageDef.trial),
					...createExpressions(RegularExpressionType.STYLE, packageDef.trial)
				]
				const newContent = updateFileContent(fileContent, regExpressions, packageDef.licensed);
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

function updateWorkflows(fs: IFileSystem): void {
	type WorkflowGroup = {
		basePath: string;
		files: string[];
		oldCmd: string;
		newCmd: string;
	};

	const workflowGroups: WorkflowGroup[] = [
		{
			basePath: ".github/workflows",
			files: ["node.js.yml", "github-pages.yml"],
			oldCmd: "- run: npm i # replace with 'npm ci' after committing lock file from first install",
			newCmd: `- run: echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:_auth=\${{ secrets.NPM_AUTH_TOKEN }}" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:auth-type=legacy" >> ~/.npmrc
    - run: npm i # replace with 'npm ci' after committing lock file from first install`
		},
		{
			basePath: ".azure/workflows",
			files: ["azure-pipelines.yml"],
			oldCmd: "- script: npm i # replace with 'npm ci' after committing lock file from first install",
			newCmd: `- script: |
        echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
        echo "//packages.infragistics.com/npm/js-licensed/:_auth=$NPM_AUTH_TOKEN" >> ~/.npmrc
        echo "//packages.infragistics.com/npm/js-licensed/:auth-type=legacy" >> ~/.npmrc
      displayName: 'Authenticate'
      env:
        NPM_AUTH_TOKEN: $(NPM_AUTH_TOKEN)
    - script: npm i # replace with 'npm ci' after committing lock file from first install`
		}
	];

	for (const group of workflowGroups) {
		for (const file of group.files) {
			const path = `${group.basePath}/${file}`;
			if (fs.fileExists(path)) {
				let content = fs.readFile(path);
				if (content?.includes(group.oldCmd)) {
					content = content.replace(group.oldCmd, group.newCmd);
					fs.writeFile(path, content);
				}
			}
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
//packages.infragistics.com/npm/js-licensed/:auth-type=legacy
`;
		fs.writeFile(npmrcPath, fileContent);
	}
}

function updateHTMLImports(htmlFiles: string[], packageDefs: PackageDefinition[], fs: IFileSystem): void {
	for (const file of htmlFiles) {
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
