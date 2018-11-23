// tslint:disable-next-line:no-submodule-imports
import { WorkspaceSchema } from "@angular-devkit/core/src/workspace";
// tslint:disable-next-line:ordered-imports
import { chain, Rule, Tree, SchematicsException } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { getWorkspace } from "@schematics/angular/utility/config";
import { Util } from "../../lib/Util";
import { addTypography } from "../../migrations/update-3/index";

function createCliConfig(): Rule {
	return (tree: Tree) => {
		tree.create("ignite-ui-cli.json", JSON.stringify(GetCliConfig(tree), null, 2) + "\n");
		addTypography(tree);

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
export default function (): Rule {
	return chain([
		createCliConfig()
	]);
}
