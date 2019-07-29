import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { ScopedTree } from "@angular-devkit/schematics/src/tree/scoped";
import { NgTreeFileSystem, ProjectConfig, Util } from "@igniteui-cli/core";
import { defer } from "rxjs";

export default function(options: any): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		return defer<Promise<Tree>>(async () => {
			// TODO: ScopedTree iffy import
			ProjectConfig.virtFs = new NgTreeFileSystem(new ScopedTree(tree, options.directory));
			const config = ProjectConfig.getConfig();
			// TODO: call in ng serve directly somehow?
			await Util.execSync(
				`npm start -- --port=${config.project.defaultPort}`,
				{ cwd: options.directory, stdio: "inherit", killSignal: "SIGINT" }
			);
			return tree;
		});
	};
}
