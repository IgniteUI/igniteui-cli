import { workspaces } from "@angular-devkit/core";
import { ProjectDefinition } from "@angular-devkit/core/src/workspace";
import { Rule, SchematicContext, SchematicsException, Tree } from "@angular-devkit/schematics";
import { Config, createWorkspaceHost, Util } from "@igniteui/cli-core";
import { getProjects } from "./theme-import";

export function createCliConfig(): Rule {
	return async (tree: Tree, context: SchematicContext) => {
		context.logger.info(``);
		context.logger.warn(`Ignite UI for Angular Schematics installed`);
		context.logger.info(`- generate components using 'ng g @igniteui/angular-schematics:c'`);
		context.logger.info(`- to use as 'ng new' collection install globally 'npm i -g @igniteui/angular-schematics'`);
		context.logger.info(`Learn more: ` + Util.color(`https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli-overview.html`, "white"));
		context.logger.info(``);

		const config = await GetCliConfig(tree);
		tree.create("ignite-ui-cli.json", JSON.stringify(config, null, 2) + "\n");
	};
}

async function GetCliConfig(tree: Tree): Promise<Config> {
	let workspace: workspaces.WorkspaceDefinition;
	try {
		({ workspace } = await workspaces.readWorkspace("/", createWorkspaceHost(tree)));
	} catch (e) {
		if (e.toString().includes("Could not find (undefined)")) {
			throw new SchematicsException("angular.json was not found in the project's root");
		}
		throw new Error(e.message);
	}
	const cliConfig: Config = require("../cli-config/files/ignite-ui-cli.json");
	cliConfig.version = Util.version();
	const projects = await getProjects(tree);
	const userPort = getPort(projects.values().next().value);
	if (userPort) {
		cliConfig.project.defaultPort = userPort;
	}
	return cliConfig;
}

function getPort(project: ProjectDefinition) {
	const projectServe = project?.targets.get("serve")?.options;

	if (projectServe) {
		return projectServe.port as number;
	}
}
