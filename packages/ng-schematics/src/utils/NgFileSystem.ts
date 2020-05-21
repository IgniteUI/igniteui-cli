import { Tree } from "@angular-devkit/schematics";
import { App, FS_TOKEN, FS_TYPE_TOKEN, FsTypes, IFileSystem } from "@igniteui/cli-core";

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
		const dir = this.tree.getDir(dirPath);
		return dir.subdirs.length || dir.subfiles.length ? true : false;
	}

	/**
	 * Returns a list of file paths under a directory based on a match pattern
	 * @param dirPath Root dir to search in
	 * @param pattern Supports only recursive wildcard '\*\*\/\*'
	 */
	public glob(dirPath: string, pattern: string): string[] {
		const dir = this.tree.getDir(dirPath);
		const entries: string[] = [];
		pattern = pattern.split("**/*").pop() || pattern;

		dir.visit((_fullPath, entry) => {
			if (entry?.path.endsWith(pattern)) {
				entries.push(entry.path);
			}
		});

		return entries;
	}
}

export function setVirtual(tree: Tree) {
	App.container.set(FS_TOKEN, new NgTreeFileSystem(tree));
	App.container.set(FS_TYPE_TOKEN, FsTypes.virtual);
}
