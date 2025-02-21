import * as fs from "fs";
import * as glob from "glob";

/**
 * Deletes all files and folders under a given path
 * @param folderPath Folder path
 */
export function deleteAll(folderPath: string) {
	const files: string[] = glob.sync(folderPath + "/**/*", { dot: true, nodir: true })
		.map(filePath => filePath.replace(/\\/g, "/"));
	files.forEach(x => fs.unlinkSync(x));
	const folders: string[] = glob.sync(folderPath + "/**/*", { dot: true })
		.map(filePath => filePath.replace(/\\/g, "/"));
	folders.reverse().forEach(x => fs.rmdirSync(x));
}

/**
 * Compares if all source files are present in a target directory, returns the diff.
 * @param folderPath1 Path to source folder
 * @param folderPath2 Path to target folder
 * @param transform1 Transform to apply on source file paths
 * @param transform2 Transform to apply on target file paths
 */
export function filesDiff(
	folderPath1: string,
	folderPath2: string,
	transform1?: (val: string) => string,
	transform2?: (val: string) => string
): string[] {
	let files1: string[] = glob.sync("**/*", {cwd: folderPath1, dot: true, nodir: true })
		.map(filePath => filePath.replace(/\\/g, "/"));
	let files2: string[] = glob.sync("**/*", {cwd: folderPath1, dot: true, nodir: true })
		.map(filePath => filePath.replace(/\\/g, "/"));
	if (transform1) {
		files1 = files1.map(transform1);
	}
	if (transform2) {
		files2 = files2.map(transform1);
	}
	return files2.filter(x => files1.indexOf(x) === -1);
}

/**
 * Resets calls on a jasmine.Spy
 * @param spy Spy method
 */
export function resetSpy(spy: any) {
	(spy as jasmine.Spy).calls.reset();
}
