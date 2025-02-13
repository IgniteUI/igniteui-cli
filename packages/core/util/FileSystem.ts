
import * as fs from "fs";
import * as glob from "glob";
import * as path from "path";
import { IFileSystem } from "../types/FileSystem";

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
		return glob.sync(path.join(dirPath, pattern), { nodir: true })
			.map(filePath => filePath.replace(/\\/g, "/"));
	}
}
