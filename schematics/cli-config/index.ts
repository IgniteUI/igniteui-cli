// tslint:disable-next-line:no-submodule-imports
import { WorkspaceSchema } from "@angular-devkit/core/src/workspace";
// tslint:disable-next-line:ordered-imports
import { chain, Rule, SchematicContext, Tree, SchematicsException } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { getWorkspace } from "@schematics/angular/utility/config";
import { Util } from "../../lib/Util";

export interface IDependency {
	name: string;
	version: string;
}

// TODO: add typing to options

function createCliConfig(options): Rule {
	return (tree: Tree, context: SchematicContext) => {
		tree.create("ignite-ui-cli.json", JSON.stringify(GetCliConfig(tree, options), null, 2) + "\n");
		return tree;
	};
}

function GetCliConfig(tree: Tree, options): Config {
	try {
		// TODO if options.port? || options.theme?
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
			case typeof (e) === typeof (SchematicsException):
				throw new SchematicsException("angular.json file was not found in the project.");
			default:
				throw new Error(e.message);
		}
	}
}

function getPort(workspace: WorkspaceSchema) {
	const targetProjectName = workspace.defaultProject;
	const projectServe = targetProjectName
		? workspace.projects[targetProjectName].architect.serve.options
		: null;

	if (projectServe) {
		return (projectServe as any).port;
	}
}
function getProjectType(workspace: WorkspaceSchema) {
	const targetProjectName = workspace.defaultProject;
	if (targetProjectName) {
		return workspace.projects[targetProjectName].projectType;
	}
}

// tslint:disable-next-line:space-before-function-paren
export default function (options): Rule {
	return chain([
		createCliConfig(options)
	]);
}
