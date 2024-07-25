// tslint:disable:no-implicit-dependencies
import { workspaces } from "@angular-devkit/core";
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { App, createWorkspaceHost, FS_TOKEN, FS_TYPE_TOKEN, FsTypes, IFileSystem, TypeScriptUtils } from "@igniteui/cli-core";
import { AngularTypeScriptFileUpdate } from "@igniteui/angular-templates";

//#region Temp duplicate of schematics pack fs
export class NgTreeFileSystem implements IFileSystem {
	constructor(private tree: Tree) { }

	public fileExists(filePath: string): boolean {
		return this.tree.exists(filePath);
	}

	public readFile(filePath: string, encoding?: string): string {
		return (this.tree.read(filePath) || "").toString();
	}

	public writeFile(filePath: string, text: string): void {
		return this.tree.overwrite(filePath, text);
	}

	public directoryExists(dirPath: string): boolean {
		return this.tree.exists(dirPath);
	}

	public glob(dirPath: string, pattern: string): string[] {
		return [];
	}
}

export function setVirtual(tree: Tree) {
	App.container.set(FS_TOKEN, new NgTreeFileSystem(tree));
	App.container.set(FS_TYPE_TOKEN, FsTypes.virtual);
}
//#endregion

export default function(): Rule {
	return async (tree: Tree, context: SchematicContext) => {
		const { workspace } = await workspaces.readWorkspace("/", createWorkspaceHost(tree));
		const project = workspace.extensions.defaultProject ?
			workspace.projects.get(workspace.extensions.defaultProject as string) :
			workspace.projects.values().next().value as workspaces.ProjectDefinition;

		const moduleFile = `${project.sourceRoot}/${project.prefix}/app.module.ts`;

		context.logger.info(`Applying migration for Ignite UI CLI 5.0.0`);

		if (tree.exists(moduleFile)) {
			setVirtual(tree);
			const mainModule = new AngularTypeScriptFileUpdate(moduleFile, false, { indentSize: 2 });
			mainModule.addNgModuleMeta(
				{ import: "HammerModule", from: "@angular/platform-browser" },
				null, // vars
				true // multiline
			);
			TypeScriptUtils.saveFile(moduleFile, mainModule.finalize());
		}
	};
}
