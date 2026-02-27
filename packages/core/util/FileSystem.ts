
import * as fs from "fs";
import * as glob from "glob";
import * as path from "path";
import type { IFileSystem } from "../types/FileSystem";

export class FsFileSystem implements IFileSystem {
	public fileExists(filePath: string): boolean {
		try {
			return fs.statSync(filePath).isFile();
		} catch (err) {
			return false;
		}
	}
	public readFile(filePath: string, encoding?: BufferEncoding): string {
		if (encoding) {
			return fs.readFileSync(filePath, { encoding });
		}
		return fs.readFileSync(filePath).toString();
	}
	public writeFile(filePath: string, text: string): void {
		fs.writeFileSync(filePath, text);
	}
	public directoryExists(dirPath: string): boolean {
		try {
			return fs.statSync(dirPath).isDirectory();
		} catch (e) {
			return false;
		}
	}

	public glob(dirPath: string, pattern: string): string[] {
		// NB!: glob 8+ patterns use `\` as escape only, so ensure posix-style:
		const globPattern = path.join(dirPath, pattern).replace(/\\/g, "/");
		return glob.sync(globPattern, { nodir: true });
	}
}
