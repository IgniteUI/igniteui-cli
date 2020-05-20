export interface IFileSystem {
	fileExists(filePath: string): boolean;
	readFile(filePath: string, encoding?: string): string;
	writeFile(filePath: string, text: string): void;
	directoryExists(dirPath: string): boolean;
	listDirectoryEntries(dirPath: string): string[];
}

export const FS_TOKEN: string = "fs";

export enum FsTypes {
	virtual = 0,
	physical = 1
}

export const FS_TYPE_TOKEN: string = "FS_TYPE";
