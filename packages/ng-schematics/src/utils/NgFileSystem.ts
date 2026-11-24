import { DirEntry, FileEntry, Tree } from "@angular-devkit/schematics";
import { App, FS_TOKEN, FS_TYPE_TOKEN, FsTypes, IFileSystem } from "@igniteui/cli-core";
import { minimatch } from 'minimatch';
import * as path from "path";

export class NgTreeFileSystem implements IFileSystem {
	constructor(private tree: Tree) { }
	public fileExists(filePath: string): boolean {
		return this.tree.exists(filePath);
	}

	public readFile(filePath: string, _encoding?: string): string {
		return (this.tree.read(filePath) || "").toString();
	}

	public writeFile(filePath: string, text: string): void {
		this.tree.exists(filePath)
			? this.tree.overwrite(filePath, text)
			: this.tree.create(filePath, text);
	}

	public directoryExists(dirPath: string): boolean {
		const dir = this.tree.getDir(dirPath);
		return dir.subdirs.length || dir.subfiles.length ? true : false;
	}

	/**
	 * Returns a list of file paths under a directory based on a match pattern
	 * @param dirPath Root dir to search in
	 * @param pattern Supports only recursive wildcard `\*\*\/\*`
	 * @param ignorePatterns Optional patterns to ignore for each subdirectory
	 */
	public glob(dirPath: string, pattern: string, ignorePatterns?: string[]): string[] {
		const dir = this.tree.getDir(dirPath);
		const entries: string[] = [];

		const visitor = (_fullPath: string, entry?: Readonly<FileEntry> | null): void => {
			if (entry && minimatch(entry.path, pattern)) {
				entries.push(entry.path);
			}
		};

		if (ignorePatterns?.length) {
			const recurse = (current: DirEntry): void => {
				for (const file of current.subfiles) {
					const filePath = path.posix.join(current.path, file);
					if (minimatch(path.posix.relative(dir.path, filePath), pattern)) {
						entries.push(filePath);
					}
				}
				for (const subdirPath of current.subdirs) {
					if (ignorePatterns.every(p => !minimatch(subdirPath, p))) {
						recurse(current.dir(subdirPath));
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
