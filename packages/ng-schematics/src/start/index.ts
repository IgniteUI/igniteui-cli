import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { ScopedTree } from "@angular-devkit/schematics/src/tree/scoped";
import { ProjectConfig, Util } from "@igniteui/cli-core";
import { defer } from "rxjs";
import { setVirtual } from "../utils/NgFileSystem";

export default function(options: any): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		return defer(async () => {
			// TODO: ScopedTree iffy import
			setVirtual(options.directory ? new ScopedTree(tree, options.directory) : tree);
			const config = ProjectConfig.getConfig();
			// TODO: call in ng serve directly somehow?
			await Util.execSync(
				`npm start -- --port=${config.project.defaultPort}`,
				// tslint:disable:object-literal-sort-keys
				{ cwd: options.directory, stdio: "inherit", killSignal: "SIGINT" }
			);
			return tree;
		});
	};
}
