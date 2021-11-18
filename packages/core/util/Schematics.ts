// tslint:disable: no-implicit-dependencies
import { workspaces } from "@angular-devkit/core";
import { Tree } from "@angular-devkit/schematics";

// TODO: Better place for these?
// current code transpiles to clean functions without imports from packages
// that core doesn't depend on, but still not the best option.

export function addClassToBody(host: Tree, className: string) {
	const indexHtml = "src/index.html";
	const bodyTagRegex = /<body[^>]*?>/;
	const classRegex = /class=["']([^"']*?)["']/;

	if (host.exists(indexHtml)) {
		let content = host.read(indexHtml).toString();
		if (!bodyTagRegex.test(content)) {
			return;
		}
		const bodyTag = bodyTagRegex.exec(content).pop();

		if (!classRegex.test(bodyTag)) {
			content = content.replace(
				bodyTag,
				bodyTag.replace(/>$/, ` class="${className}">`)
			);
		} else {
			const classes = classRegex.exec(bodyTag).pop();
			const classList = classes ? classes.split(" ") : [];
			if (classList.indexOf(className) !== -1) {
				return;
			}
			classList.push(className);
			content = content.replace(
				bodyTag,
				bodyTag.replace(classRegex, `class="${classList.join(" ")}"`)
			);
		}
		host.overwrite(indexHtml, content);
	}
}

/** Creates a schematics tree workspace host. */
export const createWorkspaceHost = (tree: Tree): workspaces.WorkspaceHost => ({
	readFile: async (path: string): Promise<string> => {
		const data = tree.read(path);
		// can use fileBufferToString
		return data?.toString();
	},
	writeFile: async (path: string, data: string): Promise<void> => {
		tree.overwrite(path, data);
	},

	isDirectory: async (path: string): Promise<boolean> =>
		!tree.exists(path) && tree.getDir(path).subfiles.length > 0,

	isFile: async (path: string): Promise<boolean> => tree.exists(path)
});
