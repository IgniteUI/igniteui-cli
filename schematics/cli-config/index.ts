// tslint:disable:no-implicit-dependencies
// tslint:disable-next-line:no-submodule-imports
import { WorkspaceSchema } from "@angular-devkit/core/src/workspace";
// tslint:disable-next-line:ordered-imports
import { chain, Rule, SchematicsException, Tree, SchematicContext } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { getWorkspace } from "@schematics/angular/utility/config";
import * as fs from "fs";
import * as path from "path";
import { TypeScriptFileUpdate } from "../../lib/project-utility/TypeScriptFileUpdate";
import { TypeScriptUtils as TsUtils } from "../../lib/project-utility/TypeScriptUtils";
import { Util } from "../../lib/Util";
import { addTypography } from "../../migrations/update-3/index";

function createCliConfig(): Rule {
	return (tree: Tree, context: SchematicContext) => {
		tree.create("ignite-ui-cli.json", JSON.stringify(GetCliConfig(tree), null, 2) + "\n");
		addTypography(tree);
		addFontsToIndexHtml(tree);
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
		switch (e) {
			case typeof e === typeof SchematicsException:
				throw new SchematicsException("angular.json was not found in the project's root.");
			default:
				throw new Error(e.message);
		}
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
		context.logger.info("BrowserAnimationsModule added to app.module.ts file");
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
