import { DirEntry, FileEntry, Tree } from "@angular-devkit/schematics";
import { App, FS_TOKEN, FS_TYPE_TOKEN, FsTypes, IFileSystem } from "@igniteui/cli-core";
import { minimatch } from 'minimatch';

export class NgTreeFileSystem implements IFileSystem {
	constructor(private tree: Tree) { }
	public fileExists(filePath: string): boolean {
		return this.tree.exists(filePath);
	}

	public readFile(filePath: string, _encoding?: string): string {
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
	 * @param pattern Supports only recursive wildcard `\*\*\/\*`
	 * @param ignorePattern Optional pattern to ignore for each subdirectory
	 */
	public glob(dirPath: string, pattern: string, ignorePattern?: string): string[] {
		const dir = this.tree.getDir(dirPath);
		const entries: string[] = [];

		const visitor = (_fullPath: string, entry?: Readonly<FileEntry>): void => {
			if (entry && minimatch(entry.path, pattern)) {
				entries.push(entry.path);
			}
		};

		if (ignorePattern) {
			dir.subfiles.forEach(file => {
				if (minimatch(file, pattern) && !minimatch(file, ignorePattern)) {
					entries.push(file);
				}
			});

			const recurse = (dir: DirEntry): void => {
				for (const subdirPath of dir.subdirs) {
					if (!minimatch(subdirPath, ignorePattern)) {
						const currDir = dir.dir(subdirPath);
						if (currDir.subdirs.length) {
							recurse(currDir);
							return;
						}
						currDir.visit(visitor);
					}
				}
			};

			recurse(dir);
			return entries;
		}

		dir.visit(visitor);
		return entries;
	}
}

export function setVirtual(tree: Tree) {
	App.container.set(FS_TOKEN, new NgTreeFileSystem(tree));
	App.container.set(FS_TYPE_TOKEN, FsTypes.virtual);
}
