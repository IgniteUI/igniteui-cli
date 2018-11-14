// tslint:disable-next-line:ordered-imports
import { chain, Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
// tslint:disable-next-line:no-implicit-dependencies
import { addPackageJsonDependency, NodeDependency, NodeDependencyType } from "schematics-utilities";

function addPackageJsonDependencies(): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const dependencies: NodeDependency[] = [
			{ type: NodeDependencyType.Default, name: "igniteui-angular", version: "^6.2.0" },
			{ type: NodeDependencyType.Default, name: "web-animations-js", version: "^2.3.1" }
		];

		dependencies.forEach(d => {
			addPackageJsonDependency(tree, d);
			_context.logger.log("info", `Added ${d.name} into ${d.type} - Version: ${d.version}`);
		});

		return tree;
	};
}

function installPackageJsonDependencies(): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		_context.addTask(new NodePackageInstallTask());
		_context.logger.log("info", "Installing packages...");

		return tree;
	};
}

export default function(): Rule {
	return chain([
		addPackageJsonDependencies(),
		installPackageJsonDependencies()
	]);
}
