import { WorkspaceSchema } from "@angular-devkit/core/src/experimental/workspace";
import { Rule, SchematicContext, SchematicsException, Tree } from "@angular-devkit/schematics";
import { Config, Util } from "@igniteui/cli-core";
// tslint:disable-next-line:no-implicit-dependencies
import { getWorkspace } from "@schematics/angular/utility/config";

export function createCliConfig(): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.logger.info(``);
		context.logger.warn(`Ignite UI for Angular Schematics installed`);
		context.logger.info(`- generate components using 'ng g @igniteui/angular-schematics:c'`);
		context.logger.info(`- to use as 'ng new' collection install globally 'npm i -g @igniteui/angular-schematics'`);
		context.logger.info(`Learn more: ` + Util.color(`https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli-overview.html`, "white"));
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
