// tslint:disable-next-line:no-submodule-imports
import { WorkspaceProject, WorkspaceSchema } from "@angular-devkit/core/src/workspace";
// tslint:disable-next-line:ordered-imports
import { chain, Rule, SchematicContext, Tree, SchematicsException } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
// tslint:disable-next-line:no-submodule-imports
import { getWorkspace } from "@schematics/angular/utility/config";
import { Util } from "../../lib/Util";

export interface IDependency {
	name: string;
	version: string;
}

function addPackageJsonDependencies(): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const dependencies: IDependency[] = [
			{ name: "igniteui-angular", version: "~6.2.0" },
			{ name: "web-animations-js", version: "^2.3.1" }
		];

		dependencies.forEach(d => {
			addPackageJsonDependency(tree, d.name, d.version);
			_context.logger.log("info", `Added ${d.name} to dependencies - Version: ${d.version}`);
		});

		tree.create("ignite-ui-cli.json", JSON.stringify(GetCliConfig(tree), null, 2) + "\n");
		return tree;
	};
}

function GetCliConfig(tree: Tree): Config {
	try {
		const workspace = getWorkspace(tree);
		const allProjects = getProjects(workspace);

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
	} catch {
		throw new SchematicsException("angular.json file was not found in the project.");
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

function getProjects(workspace: WorkspaceSchema): WorkspaceProject[] {
	const targetedProjects: WorkspaceProject[] = [];
	for (const projName of Object.keys(workspace.projects)) {
		const proj = workspace.projects[projName];
		if (proj.architect && proj.architect.e2e) {
			continue;
		}

		targetedProjects.push(proj);
	}

	return targetedProjects;
}

function addPackageJsonDependency(tree: Tree, pkg: string, version: string): Tree {
	const targetFile = "package.json";
	if (tree.exists(targetFile)) {
		const sourceText = tree.read(targetFile)!.toString();
		const json = JSON.parse(sourceText);

		if (!json.dependencies) {
			json.dependencies = {};
		}

		if (!json.dependencies[pkg]) {
			json.dependencies[pkg] = version;
			json.dependencies =
				Object.keys(json.dependencies)
					.sort()
					.reduce((result, key) => (result[key] = json.dependencies[key]) && result, {});
			tree.overwrite(targetFile, JSON.stringify(json, null, 2) + "\n");
		}
	}

	return tree;
}

function installPackageJsonDependencies(): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		_context.addTask(new NodePackageInstallTask());
		_context.logger.log("info", "Installing packages...");

		return tree;
	};
}

// tslint:disable-next-line:space-before-function-paren
export default function (): Rule {
	return chain([
		addPackageJsonDependencies(),
		installPackageJsonDependencies()
	]);
}
