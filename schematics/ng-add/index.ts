// tslint:disable-next-line:ordered-imports
import { chain, Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";

interface IDependency {
	name: string;
	version: string;
}

function addPackageJsonDependencies(): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const dependencies: IDependency[] = [
			{ name: "igniteui-angular", version: "^6.2.0" },
			{ name: "web-animations-js", version: "^2.3.1" }
		];

		dependencies.forEach(d => {
			addPackageJsonDependency(tree, "igniteui-angular", "^6.2.0");
			_context.logger.log("info", `Added ${d.name} to dependencies - Version: ${d.version}`);
		});

		return tree;
	};
}

function addPackageJsonDependency(tree: Tree, pkg: string, version: string): Tree {
	if (tree.exists("package.json")) {
		const sourceText = tree.read("package.json")!.toString();
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
		}

		tree.overwrite("package.json", JSON.stringify(json, null, 2));
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

export default function(): Rule {
	return chain([
		addPackageJsonDependencies(),
		installPackageJsonDependencies()
	]);
}
