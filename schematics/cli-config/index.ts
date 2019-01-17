import { DependencyNotFoundException } from "@angular-devkit/core";
// tslint:disable-next-line:ordered-imports
import { yellow } from "@angular-devkit/core/src/terminal";
import { WorkspaceSchema } from "@angular-devkit/core/src/workspace";
import {
	chain, FileDoesNotExistException, Rule, SchematicContext,
	// tslint:disable-next-line:ordered-imports
	SchematicsException, Tree
} from "@angular-devkit/schematics";
import { getWorkspace } from "@schematics/angular/utility/config";
import chalk from "chalk";
import { TypeScriptFileUpdate } from "../../lib/project-utility/TypeScriptFileUpdate";
import { NgTreeFileSystem } from "../../lib/project-utility/TypeScriptUtils";
import { Util } from "../../lib/Util";
import { addTypography } from "../../migrations/update-3/index";

const cssImport = "node_modules/igniteui-angular/styles/igniteui-angular.css";
const sassImports =
	`
@import "~igniteui-angular/lib/core/styles/themes/index";
// Uncomment the following lines if you want to add a custom palette:
// $primary: #731963 !default;
// $secondary: #ce5712 !default;
// $app-palette: igx-palette($primary, $secondary);

@include igx-core();
@include igx-theme($default-palette);
`;

function displayVersionMismatch(): Rule {
	return (tree: Tree) => {
		const pkgJson = JSON.parse(tree.read("/node_modules/igniteui-angular/package.json").toString());
		const ngKey = "@angular/core";
		const ngCommonKey = "@angular/common";
		const ngCoreProjVer = getDependencyVersion(ngKey, tree);
		const ngCommonProjVer = getDependencyVersion(ngCommonKey, tree);
		const ngCoreVer = pkgJson.peerDependencies[ngKey];
		const ngCommonVer = pkgJson.peerDependencies[ngCommonKey];

		if (ngCoreProjVer < ngCoreVer || ngCommonProjVer < ngCommonVer) {
			// tslint:disable-next-line:no-console
			console.warn(yellow(`
WARNING Version mismatch detected - igniteui-angular is built against a newer version of @angular/core (${ngCoreVer}).
Running 'ng update' will prevent potential version conflicts.\n`));
		}
	};
}

function getDependencyVersion(pkg: string, tree: Tree): string {
	const targetFile = "/package.json";
	if (tree.exists(targetFile)) {
		const sourceText = tree.read(targetFile).toString();
		const json = JSON.parse(sourceText);

		let targetDep: any;
		if (json.dependencies[pkg]) {
			targetDep = json.dependencies[pkg];
		} else if (json.devDependencies[pkg]) {
			targetDep = json.devDependencies[pkg];
		} else {
			targetDep = json.peerDependencies[pkg];
		}
		if (!targetDep) {
			throw new DependencyNotFoundException();
		}

		return targetDep;
	}

	throw new FileDoesNotExistException(`${tree.root.path}/${targetFile}`);
}

function createCliConfig(): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.logger.info(``);
		context.logger.warn(`Ignite UI CLI installed`);
		context.logger.info(`- try it out in this project by running 'npx ig'`);
		context.logger.info(`- to run 'ig' everywhere and create new projects run 'npm install -g igniteui-cli'`);
		context.logger.info(`Learn more: ` + chalk.whiteBright(`https://github.com/IgniteUI/igniteui-cli#ignite-ui-cli`));
		context.logger.info(``);

		tree.create("ignite-ui-cli.json", JSON.stringify(GetCliConfig(tree), null, 2) + "\n");
		addTypography(tree);
		addFontsToIndexHtml(tree);
		importDefaultTheme(tree);
		importBrowserAnimationModule(tree, context);

		return tree;
	};
}

function GetCliConfig(tree: Tree): Config {
	let workspace;
	try {
		workspace = getWorkspace(tree);
	} catch (e) {
		if (e.toString().includes("Could not find (undefined)")) {
			throw new SchematicsException("angular.json was not found in the project's root");
		}
		throw new Error(e.message);
	}
	const cliConfig: Config = require("./files/ignite-ui-cli.json");
	cliConfig.version = Util.version();
	const userPort = getPort(workspace);
	if (userPort) {
		cliConfig.project.defaultPort = userPort;
	}
	return cliConfig;
}

function importDefaultTheme(tree: Tree): Tree {
	if (tree.exists("/src/styles.sass")) {
		importDefaultThemeSass(tree, "sass");
	} else if (tree.exists("/src/styles.scss")) {
		importDefaultThemeSass(tree, "scss");
	} else if (tree.exists("/src/styles.css")) {
		importDefaultThemeCss(tree);
	}

	return tree;
}

function importDefaultThemeSass(tree: Tree, ext: string): Tree {
	const targetFile = `/src/styles.${ext}`;
	let content = tree.read(targetFile).toString();

	if (!content.includes(sassImports)) {
		content += sassImports;
	}

	tree.overwrite(targetFile, content);
	return tree;
}

function importDefaultThemeCss(tree: Tree): Tree {
	const targetFile = "/angular.json";
	const workspace = getWorkspace(tree);
	const importedStylesToBuild = importDefaultThemeToAngularWorkspace(workspace, "build");
	const importedStylesToTest = importDefaultThemeToAngularWorkspace(workspace, "test");

	if (importedStylesToBuild || importedStylesToTest) {
		tree.overwrite(targetFile, JSON.stringify(workspace, null, 2) + "\n");
	}

	return tree;
}

function importDefaultThemeToAngularWorkspace(workspace: WorkspaceSchema, key: string) {
	const projectName = workspace.defaultProject;
	if (projectName) {
		if (!workspace.projects[projectName].architect) {
			workspace.projects[projectName].architect = {};
		}
		if (!workspace.projects[projectName].architect[key]) {
			workspace.projects[projectName].architect[key] = {};
		}
		if (!workspace.projects[projectName].architect[key].options) {
			workspace.projects[projectName].architect[key].options = {};
		}
		if (!workspace.projects[projectName].architect[key].options.styles) {
			workspace.projects[projectName].architect[key].options.styles = [];
		}
		if (!workspace.projects[projectName].architect[key].options.styles.includes(cssImport)) {
			workspace.projects[projectName].architect[key].options.styles.push(cssImport);
			return true;
		}

		return false;
	}
}

function addFontsToIndexHtml(tree: Tree) {
	const titillium = '<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">';
	const materialIcons = '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
	const targetFile = "/src/index.html";
	if (tree.exists(targetFile)) {
		let content = tree.read(targetFile).toString();
		if (!content.includes(titillium)) {
			content = content.replace("</head>", `  ${titillium}\n</head>`);
		}
		if (!content.includes(materialIcons)) {
			content = content.replace("</head>", `  ${materialIcons}\n</head>`);
		}

		tree.overwrite(targetFile, content);
	}

	return tree;
}

function importBrowserAnimationModule(tree: Tree, context: SchematicContext) {
	const moduleFile = "./src/app/app.module.ts";
	if (tree.exists(moduleFile)) {
		// const mainModule = new TypeScriptFileUpdate(path.join(process.cwd(), moduleFile));
		const mainModule = new TypeScriptFileUpdate(moduleFile, new NgTreeFileSystem(tree));
		mainModule.addNgModuleMeta({ import: "BrowserAnimationsModule", from: "@angular/platform-browser/animations" });
		mainModule.finalize();
	}
}

function getPort(workspace: WorkspaceSchema) {
	const targetProjectName = workspace.defaultProject;
	const projectServe = targetProjectName
		? workspace.projects[targetProjectName].architect.serve.options
		: null;

	if (projectServe) {
		return projectServe.port;
	}
}
function getProjectType(workspace: WorkspaceSchema) {
	const targetProjectName = workspace.defaultProject;
	if (targetProjectName) {
		return workspace.projects[targetProjectName].projectType;
	}
}

// tslint:disable-next-line:space-before-function-paren
export default function (): Rule {
	return chain([
		createCliConfig(),
		displayVersionMismatch()
	]);
}
