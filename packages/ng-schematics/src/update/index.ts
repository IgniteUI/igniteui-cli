import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { updateWorkspace } from "@igniteui/cli-core";
import { defer } from "rxjs";
import { setVirtual } from "../utils/NgFileSystem";

export default function update(_options: any): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		setVirtual(tree);
		return defer(async () => {
			await updateWorkspace();
			return tree;
		});
	};
}
