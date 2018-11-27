// tslint:disable:no-implicit-dependencies
// tslint:disable-next-line:no-submodule-imports
import { WorkspaceSchema } from "@angular-devkit/core/src/workspace";
// tslint:disable-next-line:ordered-imports
import { chain, Rule, Tree, SchematicsException, contentTemplate, SchematicContext } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { getWorkspace } from "@schematics/angular/utility/config";
import * as fs from "fs";
import * as path from "path";
import { TypeScriptFileUpdate } from "../../lib/project-utility/TypeScriptFileUpdate";
import { TypeScriptUtils as TsUtils } from "../../lib/project-utility/TypeScriptUtils";
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
@include igx-theme($default-theme-palette);
`;

function createCliConfig(): Rule {
	return (tree: Tree, context: SchematicContext) => {
		tree.create("ignite-ui-cli.json", JSON.stringify(GetCliConfig(tree), null, 2) + "\n");
		addTypography(tree);
		addFontsToIndexHtml(tree);
		importDefaultTheme(tree);
		importBrowserAnimationModule(tree, context);

		return tree;
	};
}

function GetCliConfig(tree: Tree): Config {
	try {
		const workspace = getWorkspace(tree);
		const cliConfig: Config = require("./files/ignite-ui-cli.json");
		cliConfig.version = Util.version();
		const userPort = getPort(workspace);
		if (userPort) {
			cliConfig.project.defaultPort = userPort;
		}
		const projectType = getProjectType(workspace);
		if (projectType) {
			cliConfig.project.projectType = projectType;
		}

		return cliConfig;
	} catch (e) {
		if (e.toString().includes("Could not find (undefined)")) {
			throw new SchematicsException("angular.json was not found in the project's root");
		}

		throw new Error(e.message);
	}
}

function importDefaultTheme(tree: Tree): Tree {
	if (tree.exists("/src/styles.sass")) {
		importDefaultThemeSass(tree);
	} else if (tree.exists("/src/styles.scss")) {
		importDefaultThemeScss(tree);
	} else if (tree.exists("/src/styles.css")) {
		importDefaultThemeCss(tree);
	}

	return tree;
}

function importDefaultThemeScss(tree: Tree): Tree {
	const targetFile = "/src/styles.scss";
	let content = tree.read(targetFile).toString();

	if (!content.includes(sassImports)) {
		content += sassImports;
	}

	tree.overwrite(targetFile, content);
	return tree;
}

function importDefaultThemeSass(tree: Tree): Tree {
	const targetFile = "/src/styles.sass";
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
	const importedStylesToBuild = importDefaultThemeToBuildStyles(workspace);
	const importedStylesToTest = importDefaultThemeToTestStyles(workspace);

	if (importedStylesToBuild || importedStylesToTest) {
		tree.overwrite(targetFile, JSON.stringify(workspace, null, 2) + "\n");
	}

	return tree;
}

function importDefaultThemeToBuildStyles(workspace: WorkspaceSchema) {
	const projectName = workspace.defaultProject;
	if (projectName) {
		if (!workspace.projects[projectName].architect) {
			workspace.projects[projectName].architect = {};
		}
		if (!workspace.projects[projectName].architect.build) {
			workspace.projects[projectName].architect.build = {};
		}
		if (!workspace.projects[projectName].architect.build.options) {
			workspace.projects[projectName].architect.build.options = {};
		}
		if (!workspace.projects[projectName].architect.build.options.styles) {
			workspace.projects[projectName].architect.build.options.styles = [];
		}
		if (!workspace.projects[projectName].architect.build.options.styles.includes(cssImport)) {
			workspace.projects[projectName].architect.build.options.styles.push(cssImport);
			return true;
		}

		return false;
	}
}

function importDefaultThemeToTestStyles(workspace: WorkspaceSchema) {
	const projectName = workspace.defaultProject;
	if (projectName) {
		if (!workspace.projects[projectName].architect) {
			workspace.projects[projectName].architect = {};
		}
		if (!workspace.projects[projectName].architect.test) {
			workspace.projects[projectName].architect.test = {};
		}
		if (!workspace.projects[projectName].architect.test.options) {
			workspace.projects[projectName].architect.test.options = {};
		}
		if (!workspace.projects[projectName].architect.test.options.styles) {
			workspace.projects[projectName].architect.test.options.styles = [];
		}
		if (!workspace.projects[projectName].architect.test.options.styles.includes(cssImport)) {
			workspace.projects[projectName].architect.test.options.styles.push(cssImport);
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
	if (fs.existsSync(moduleFile)) {
		const mainModule = new TypeScriptFileUpdate(path.join(process.cwd(), moduleFile));
		mainModule.addNgModuleMeta({ import: "BrowserAnimationsModule", from: "@angular/platform-browser/animations" });
		mainModule.finalize();
		context.logger.info("Updating app.module.ts to include BrowserAnimationsModule");
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
		createCliConfig()
	]);
}
