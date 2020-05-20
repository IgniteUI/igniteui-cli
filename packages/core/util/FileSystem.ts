
import * as fs from "fs";
import { IFileSystem } from "../types/FileSystem";

export class FsFileSystem implements IFileSystem {
	public fileExists(filePath: string): boolean {
		return fs.existsSync(filePath);
	}
	public readFile(filePath: string, encoding?: string): string {
		if (encoding) {
			return fs.readFileSync(filePath, encoding);
		}
		return fs.readFileSync(filePath).toString();
	}
	public writeFile(filePath: string, text: string): void {
		fs.writeFileSync(filePath, text);
	}
	public directoryExists(dirPath: string): boolean {
		return fs.statSync(dirPath).isDirectory();
	}
	public listDirectoryEntries(dirPath: string): string[] {
		return fs.
	}
}
