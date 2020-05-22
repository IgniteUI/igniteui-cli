// tslint:disable:no-implicit-dependencies
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { App, FS_TOKEN, FS_TYPE_TOKEN, FsTypes, IFileSystem, TypeScriptFileUpdate } from "@igniteui/cli-core";
// tslint:disable-next-line:no-submodule-imports
import { getWorkspace } from "@schematics/angular/utility/config";

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
	return (host: Tree, context: SchematicContext) => {
		const workspace = getWorkspace(host);
		const project = workspace.defaultProject ?
			workspace.projects[workspace.defaultProject] :
			workspace.projects[0];

		const moduleFile = `${project.sourceRoot}/${project.prefix}/app.module.ts`;

		context.logger.info(`Applying migration for Ignite UI CLI 5.0.0`);

		if (host.exists(moduleFile)) {
			setVirtual(host);
			const mainModule = new TypeScriptFileUpdate(moduleFile);
			mainModule.addNgModuleMeta({ import: "HammerModule", from: "@angular/platform-browser" });
			mainModule.finalize();
		}
	};
}
