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
			{ name: "igniteui-angular", version: loadPackageVersion("igniteui-angular") || "^6.2.0" },
			{ name: "web-animations-js", version: loadPackageVersion("web-animations-js") || "^2.3.1" }
		];

		dependencies.forEach(d => {
			addPackageJsonDependency(tree, d.name, d.version);
			_context.logger.log("info", `Added ${d.name} to dependencies - Version: ${d.version}`);
		});

		return tree;
	};
}

function loadPackageVersion(packageName: string): string | null {
	try {
		return require(`${packageName}/package.json`).version;
	} catch {
		return null;
	}
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
		}

		tree.overwrite(targetFile, JSON.stringify(json, null, 2));
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
