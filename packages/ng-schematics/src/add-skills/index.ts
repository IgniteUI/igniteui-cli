import { Rule, Tree } from "@angular-devkit/schematics";
import { copyAISkillsToProject } from "@igniteui/cli-core";
import { setVirtual } from "../utils/NgFileSystem";

export default function (): Rule {
	return (tree: Tree) => {
		setVirtual(tree);
		copyAISkillsToProject();
		return tree;
	};
}
