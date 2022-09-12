export interface IFileSystem {
	fileExists(filePath: string): boolean;
	readFile(filePath: string, encoding?: BufferEncoding): string;
	writeFile(filePath: string, text: string): void;
	directoryExists(dirPath: string): boolean;
	removeDir?(dirPath: string, force: boolean, recursive?: boolean): boolean;
	/**
	 * Returns a list of file paths under a directory based on a match pattern
	 * @param dirPath Root dir to search in
	 * @param pattern Pattern to match
	 */
	glob(dirPath: string, pattern: string): string[];
}

export const FS_TOKEN: string = "fs";

export enum FsTypes {
	virtual = 0,
	physical = 1
}

export const FS_TYPE_TOKEN: string = "FS_TYPE";
