
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
		const dir = path.dirname(filePath);
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}
		fs.writeFileSync(filePath, text);
	}
	public directoryExists(dirPath: string): boolean {
		try {
			return fs.statSync(dirPath).isDirectory();
		} catch (e) {
			return false;
		}
	}

	public glob(dirPath: string, pattern: string, ignorePatterns?: string[]): string[] {
		// NB!: glob 8+ patterns use `\` as escape only, so ensure posix-style:
		const globPattern = path.join(dirPath, pattern).replace(/\\/g, "/");
		// anchored to dirPath, so a project that itself lives under e.g. a `dist` folder is not ignored;
		// when dirPath has a wildcard the anchor is its parent, since the wildcard can match an ignored folder
		const wildcard = dirPath.indexOf("*");
		const ignoreRoot = wildcard < 0 ? dirPath : path.dirname(dirPath.slice(0, wildcard) + "x");
		const ignore = ignorePatterns?.map(p => path.join(ignoreRoot, "**", p, "**").replace(/\\/g, "/"));
		return glob.sync(globPattern, { nodir: true, ignore });
	}
}
