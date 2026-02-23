import { Tree } from "@angular-devkit/schematics";
import { IFileSystem } from "@igniteui/cli-core";
export declare class NgTreeFileSystem implements IFileSystem {
    private tree;
    constructor(tree: Tree);
    fileExists(filePath: string): boolean;
    readFile(filePath: string, _encoding?: string): string;
    writeFile(filePath: string, text: string): void;
    directoryExists(dirPath: string): boolean;
    /**
     * Returns a list of file paths under a directory based on a match pattern
     * @param dirPath Root dir to search in
     * @param pattern Supports only recursive wildcard `\*\*\/\*`
     * @param ignorePatterns Optional patterns to ignore for each subdirectory
     */
    glob(dirPath: string, pattern: string, ignorePatterns?: string[]): string[];
}
export declare function setVirtual(tree: Tree): void;
