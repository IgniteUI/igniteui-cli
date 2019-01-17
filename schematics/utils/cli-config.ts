// tslint:disable-next-line:no-submodule-imports
import { WorkspaceSchema } from "@angular-devkit/core/src/workspace";
// tslint:disable-next-line:no-implicit-dependencies
import { Rule, SchematicContext, SchematicsException, Tree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-implicit-dependencies
import { getWorkspace } from "@schematics/angular/utility/config";
import chalk from "chalk";
import { Util } from "../../lib/Util";

export function createCliConfig(): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.logger.info(``);
		context.logger.warn(`Ignite UI CLI installed`);
		context.logger.info(`- try it out in this project by running 'npx ig'`);
		context.logger.info(`- to run 'ig' everywhere and create new projects run 'npm install -g igniteui-cli'`);
		context.logger.info(`Learn more: ` + chalk.whiteBright(`https://github.com/IgniteUI/igniteui-cli#ignite-ui-cli`));
		context.logger.info(``);

		tree.create("ignite-ui-cli.json", JSON.stringify(GetCliConfig(tree), null, 2) + "\n");

		return tree;
	};
}

function GetCliConfig(tree: Tree): Config {
	let workspace: any;
	try {
		workspace = getWorkspace(tree);
	} catch (e) {
		if (e.toString().includes("Could not find (undefined)")) {
			throw new SchematicsException("angular.json was not found in the project's root");
		}
		throw new Error(e.message);
	}
	const cliConfig: Config = require("../cli-config/files/ignite-ui-cli.json");
	cliConfig.version = Util.version();
	const userPort = getPort(workspace);
	if (userPort) {
		cliConfig.project.defaultPort = userPort;
	}
	return cliConfig;
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
