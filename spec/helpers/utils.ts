import * as fs from "fs";
import * as glob from "glob";

/**
 * Deletes all files and folders under a given path
 * @param folderPath Folder path
 */
export function deleteAll(folderPath: string) {
	const files: string[] = glob.sync(folderPath + "/**/*", { nodir: true, dot: true });
	files.forEach(x => fs.unlinkSync(x));
	const folders: string[] = glob.sync(folderPath + "/**/*");
	folders.reverse().forEach(x => fs.rmdirSync(x));
}

/**
 * Resets calls on a jasmine.Spy
 * @param spy Spy method
 */
export function resetSpy(spy: any) {
	(spy as jasmine.Spy).calls.reset();
}
