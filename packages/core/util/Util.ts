import chalk from "chalk";
import { execSync, ExecSyncOptions, execFileSync } from "child_process";
import * as fs from "fs";
import * as glob from "glob";
import * as path from "path";
import through2 = require("through2");
import { BaseComponent } from "../templates/BaseComponent";
import { Component, ComponentGroup, Delimiter, FS_TOKEN, IFileSystem, Template, TemplateDelimiters } from "../types";
import { App } from "./App";
import { GoogleAnalytics } from "./GoogleAnalytics";

const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".ico"];
const applyConfig = (configuration: { [key: string]: string }) => {
	return through2((data, enc, cb) => {
		cb(null, Buffer.from(Util.applyConfigTransformation(data.toString(), configuration)));
	});
};

const noop = () => through2.obj();
export const defaultDelimiters: TemplateDelimiters = {
	content: {
		start: `$(`,
		end: `)`
	},
	path: {
		start: `__`,
		end: `__`
	}
};

export type ChoiceItem = Pick<Template | ComponentGroup, "name" | "description"> | Component;

export class Util {
	public static getCurrentDirectoryBase() {
		return path.basename(process.cwd());
	}

	public static directoryExists(dirPath) {
		return App.container.get<IFileSystem>(FS_TOKEN).directoryExists(dirPath);
	}

	public static fileExists(filePath) {
		return App.container.get<IFileSystem>(FS_TOKEN).fileExists(filePath);
	}

	public static isDirectory(dirPath): boolean {
		return fs.lstatSync(dirPath).isDirectory();
	}

	public static isFile(filePath): boolean {
		return fs.lstatSync(filePath).isFile();
	}

	public static ensureDirectoryExists(dirPath) {
		if (!this.directoryExists(dirPath)) {
			fs.mkdirSync(dirPath);
		}
	}

	public static getDirectoryNames(rootPath: string): string[] {
		// TODO: add https://github.com/davetemplin/async-file
		let folders: string[] = [];
		if (this.directoryExists(rootPath)) {
			folders = fs.readdirSync(rootPath).filter(file => fs.lstatSync(path.join(rootPath, file)).isDirectory());
		}
		return folders;
	}

	public static async processTemplates(
		sourcePath: string,
		destinationPath: string, configuration: { [key: string]: string },
		delimiters: TemplateDelimiters, validate = true): Promise<boolean> {

		sourcePath = sourcePath.replace(/\\/g, "/");
		destinationPath = destinationPath.replace(/\\/g, "/");

		if (validate && !this.validateTemplate(sourcePath, destinationPath, configuration, delimiters)) {
			return false;
		}

		return new Promise((resolve, reject) => {
			const filePaths: string[] = glob.sync(sourcePath + "/**/*", { nodir: true });
			let fileCount = filePaths.length;
			// if no files should be created, resolve
			if (fileCount === 0) {
				resolve(false);
			}
			for (const filePath of filePaths) {
				let targetPath = filePath.replace(sourcePath, destinationPath);
				targetPath = Util.applyConfigTransformation(targetPath, Util.applyDelimiters(configuration,
					delimiters.path || defaultDelimiters.path));
				Util.createDirectory(path.dirname(targetPath));
				const writeStream = fs.createWriteStream(targetPath);
				const isImage = imageExtensions.indexOf(path.extname(targetPath)) !== -1;
				fs.createReadStream(filePath)
					// for image files, just copy the content
					.pipe(!isImage ?
						applyConfig(Util.applyDelimiters(configuration, delimiters.content || defaultDelimiters.content))
						: noop())
					.pipe(writeStream);
				writeStream.on("finish", () => {
					if (--fileCount === 0) {
						resolve(true);
					}
				});
			}
		});
	}

	public static applyConfigTransformation = (data: string, configuration: { [key: string]: string }): string => {
		let key;
		// tslint:disable-next-line:forin
		for (key in configuration) {
			data = data.replace(new RegExp(Util.escapeRegExp(key), "g"), configuration[key]);
		}

		return data;
	}

	public static escapeRegExp(str): string {
		return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
	}

	/**
	 * Simple log with optional color.
	 * @param message Text to log
	 * @param colorKeyword Optional color (CSS keyword like red, green, etc.)
	 */
	public static log(message: string, colorKeyword?: string) {
		// tslint:disable:no-console
		if (colorKeyword) {
			const color = chalk.keyword(colorKeyword);
			console.log(color(message));
		} else {
			console.log(message);
		}
		// tslint:enable:no-console
	}

	/**
	 * Error log with optional color.
	 * @param message Error to log
	 * @param colorKeyword Optional color (CSS keyword like red, green, etc.)
	 */
	public static error(message: string, colorKeyword?: string) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: `error: ${message}`
		});

		// tslint:disable:no-console
		if (colorKeyword) {
			const color = chalk.keyword(colorKeyword);
			console.error(color(message));
		} else {
			console.error(message);
		}
		// tslint:enable:no-console
	}

	/**
	 * Log a warning with optional color.
	 * @param message warn to log
	 * @param colorKeyword Optional color (CSS keyword like red, green, etc.)
	 */
	public static warn(message: string, colorKeyword?: string) {
		// tslint:disable:no-console
		if (colorKeyword) {
			const color = chalk.keyword(colorKeyword);
			console.warn(color(message));
		} else {
			console.warn(message);
		}
		// tslint:enable:no-console
	}

	public static greenCheck() {
		if (process.platform.startsWith("win")) {
			return chalk.green("√");
		} else {
			return chalk.green("✔");
		}
	}

	public static formatPackageJson(json: { dependencies: { [key: string]: string } }, sort = true): string {
		if (sort) {
			json.dependencies =
			Object.keys(json.dependencies)
				.sort()
				.reduce((result, key) => (result[key] = json.dependencies[key]) && result, {});
		}
		return JSON.stringify(json, null, 2) + "\n";
	}

	public static formatAngularJsonOptions(json:
		{
			projects: {
				architect: {
					build: {
						options: {
							styles: any[],
							scripts: Array<{ input: string, bundleName: string }>
						}
					}
				}
			}
		}): string {
		return JSON.stringify(json, null, 2) + "\n";
	}

	public static version(filePath?: string): string {
		const configuration = require(filePath || "../package.json");
		return configuration.version;
	}

	public static showVersion(filePath) {
		const logo = fs.readFileSync(filePath);
		logo.toString().split("\n").forEach(line => {
			this.log(line);
		});
		this.log("Ignite UI CLI version: " + this.version());
		this.log("OS: " + this.getOSFriendlyName(process.platform));
	}

	public static getOSFriendlyName(platform: string): string {
		let os = "";
		switch (platform) {
			case "win32":
				os = "Windows";
				break;
			case "darwin":
				os = "Mac OS";
				break;
			case "freebsd":
				os = "FreeBSD";
				break;
			default:
				os = "Unknown OS";
				break;
		}
		return os;
	}

	/**
	 * lower-dashed string
	 * Add dash on the place of empty spaces and between lower and upper case letters.
	 */
	public static lowerDashed(text: string) {
		const regex = new RegExp("[\\s]+|([\\p{Ll}\\p{Nd}](?=[\\p{Lu}]))", "gu");
		const result = text.trim()
				.replace(regex, "$1-")
				.toLowerCase();
		return result;
	}

	/**
	 * Checks if a giver string consists of alphanumeric characters, dashes and spaces only
	 * and also starts with a letter.
	 * @param name Text to check
	 */
	public static isAlphanumericExt(name: string) {
		return /^[\sa-zA-Z][\w\s\-]*$/.test(name);
	}

	/**
	 * Separate provided name to words on each space and/or dash and capitalize first letter of each
	 * resulting word.
	 * @param name Text to convert to proper class name
	 */
	public static className(name: string): string {
		return name.replace(/\w[^-\s]*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1)).replace(/[-\s]/g, "");
	}

	/**
	 * Simple object merge - deep nested objects and arrays (of primitive values only)
	 * @param target Object to merge values into
	 * @param source Object to merge values from
	 */
	public static merge(target: any, source: any) {
		if (!source) {
			return target;
		}

		for (const key of Object.keys(source)) {
			// Skip keys that can affect the prototype of objects to avoid prototype pollution vulnerabilities
			if (key === "__proto__" || key === "constructor") {
				continue;
			}

			const sourceKeyIsArray = Array.isArray(source[key]);
			const targetHasThisKey = target.hasOwnProperty(key);

			if (typeof source[key] === "object" && !sourceKeyIsArray) {
				// object value:
				if (!targetHasThisKey) {
					target[key] = {};
				}
				this.merge(target[key], source[key]);
			} else if (sourceKeyIsArray) {
				//	array value:
				if (targetHasThisKey) {
					// skip array merge on target type mismatch:
					if (!Array.isArray(target[key])) {
						continue;
					}
					for (const item of source[key]) {
						if (target[key].indexOf(item) === -1) {
							target[key].push(item);
						}
					}
				} else {
					target[key] = (source[key] as any[]).slice(0);
				}
			} else {
				// primitive value:
				if (source.hasOwnProperty(key)) {
					target[key] = source[key];
				}
			}
		}
	}

	/**
	 * Execute synchronous command with options
	 * @param command Command to be executed
	 * @param options Command options
	 * @throws {Error} On timeout or non-zero exit code. Error has 'status', 'signal', 'output', 'stdout', 'stderr'
	 */
	public static execSync(command: string, options?: ExecSyncOptions) {
		try {
			return execSync(command, options);
		} catch (error) {
			// execSync may throw an error during process interruption
			// if this happens - stderr will end with "^C" which was appended in the checkExecSyncError function
			// this means that a SIGINT was attempted and failed
			// npm may be involved in this as it works just fine with any other node process
			if (error.stderr && error.stderr.toString().endsWith() === "^C") {
				return process.exit();
			}

			// if SIGINT killed the process with no errors
			// 3221225786 - cmd- Ctrl+C
			// 128 - bash - invalid argument to exit
			// 130 - bash - Ctrl+C
			// 255 - bash - exit status out of range
			if (error.status === 3221225786 || error.status > 128) {
				return process.exit();
			}

			throw error;
		}
	}

	/**
	 * Initialize git for a project, located in the provided directory and commit it.
	 * @param parentRoot Parent directory root of the project.
	 * @param projectName Project name.
	 */
	public static gitInit(parentRoot, projectName) {
		try {
			const options: any = { cwd: path.join(parentRoot, projectName), stdio: [process.stdin, "ignore", "ignore"] };
			Util.execSync("git init", options);
			Util.execSync("git add .", options);
			execFileSync("git", ["commit", "-m", `Initial commit for project: ${projectName}`], options);
			Util.log(Util.greenCheck() + " Git Initialized and Project '" + projectName + "' Committed");
		} catch (error) {
			Util.error("Git initialization failed. Install Git in order to automatically commit the project.", "yellow");
		}
	}

	/**
	 * Truncating text to fit console viewPort and appending specified truncate characters at the end
	 * to indicate text is truncated.
	 * @param text Text to be used.
	 * @param limit max viewPort.
	 * @param truncateCount How many characters to be replaced at the text end with a specified truncateChar.
	 * @param truncateChar Char to use for truncated text.
	 */
	public static truncate(text: string, limit: number, count = 3, truncateChar = ".") {
		//adjust for console characters prior description
		if (text.length > limit) {
			text = text.slice(0, (limit - count)).trim() + truncateChar.repeat(count);
		}
		return text;
	}

	/**
	 * to indicate text is truncated.
	 * @param text Text to be used.
	 * @param startIndex Apply color from this index on.
	 */
	public static addColor(text: string, startIndex: number) {
		const name = text.slice(0, startIndex);
		const separatedDescription = text.slice(startIndex);
		return name + chalk.gray(`${separatedDescription}`);
	}

	/**
	 * Returns a colored text
	 */
	public static color(text: string, colorKeyword: string) {
		const color = chalk.keyword(colorKeyword);
		return color(text);
	}

	public static getAvailableName(
		defaultName: string, isApp: boolean, framework?: string, projectType?: string): string {

		const baseLength = defaultName.length;
		let specificPath = "";

		if (framework === "angular" && projectType === "igx-ts") {
			specificPath = path.join("src", "app");
		} else if (framework === "angular" && projectType === "ig-ts") {
			specificPath = path.join("src", "app", "components");
		} else if (framework === "react" && projectType === "es6") {
			specificPath = path.join("src", "components");
		} else if (framework === "react" && projectType === "igr-es6") {
			specificPath = path.join("src", "views");
		} else if (framework === "react" && projectType === "igr-ts") {
			specificPath = path.join("src", "app");
		} else if (framework === "webcomponents" && projectType === "igc-ts") {
			specificPath = path.join("src", "app");
		}

		if (isApp) {
			while (Util.directoryExists(path.join(App.workDir, defaultName))) {
				defaultName = Util.incrementName(defaultName, baseLength);
			}
		} else {
			while (Util.directoryExists(path.join(App.workDir, specificPath, Util.lowerDashed(defaultName)))) {
				defaultName = Util.incrementName(defaultName, baseLength);
			}
		}
		return defaultName;
	}

	/**
	 * Creates all folders in a given absolute path. Starts from cwd
	 * @param targetDir Absolute path to folder to create
	 * @throws Throws on `EACCES`, `EISDIR`
	 */
	public static createDirectory(targetDir: string) {
		// start from current
		let curDir = process.cwd();
		if (path.isAbsolute(targetDir)) {
			// strip target to relative
			targetDir = path.relative(curDir, targetDir);
		}

		// split target into parts and go through
		targetDir.split(path.sep).forEach(childDir => {
			curDir = path.resolve(curDir, childDir);
			try {
				fs.mkdirSync(curDir);
			} catch (err) {
				// reuse catch rather than another one from `this.directoryExists`
				if (err.code === "EEXIST") {
					return;
				}
				this.error(`Failed to create ${curDir}`, "red");
				this.error(err.message, "red");
				throw err;
			}
		});
	}

	/**
	 * Extracts the name (last part) from a path and trims.
	 * @param fileName Path-like name, e.g. /path/to/my component
	 */
	public static nameFromPath(fileName: string) {
		const parts = path.parse(fileName);
		const name = parts.name + parts.ext;
		// trim name itself to avoid creating awkward component names
		return name.trim();
	}

	public static camelCase(str: string) {
		if (!str) {
			return null;
		}
		const result = this.className(str);
		return result[0].toLowerCase() + result.substring(1, result.length);
	}

	/**
	 * Generate relative path from target file to another
	 * Adds "./" to avoid node module resolution conflicts
	 * @param targetPath Target file (root path)
	 * @param filePath File to generate relative path to
	 * @param posix Require path in posix style (/-separated)
	 * @param removeExt Strip file extension
	 */
	public static relativePath(targetPath: string, filePath: string, posix: boolean, removeExt = true): string {
		if (!targetPath.endsWith(path.win32.sep) && !targetPath.endsWith(path.posix.sep)) {
			// path.relative splits by fragments, must be dirname w/ trailing to work both down and up
			targetPath = path.win32.dirname(targetPath) + path.sep;
		}

		// use win32 api as it handles both formats
		let relativePath: string = path.win32.relative(targetPath, filePath);

		if (removeExt) {
			relativePath = relativePath.replace(path.win32.extname(relativePath), "");
		}

		if (posix) {
			relativePath = path.posix.join(...relativePath.split(path.win32.sep));
			relativePath = relativePath.startsWith(".") ? relativePath : "./" + relativePath;
		} else {
			relativePath = path.win32.join(...relativePath.split(path.win32.sep));
			relativePath = relativePath.startsWith(".") ? relativePath : ".\\" + relativePath;
		}

		return relativePath;
	}

	public static formatChoices(items: ChoiceItem[], padding = 3): Array<{name: string, value: string, short: string}> {
		const choiceItems = [];
		const leftPadding = 2;
		const rightPadding = 1;

		const maxNameLength = Math.max(...items.map(x => x.name.length)) + padding;
		const targetNameLength = Math.max(18, maxNameLength);
		let description: string;
		for (const item of items) {
			const choiceItem = {
				name: "",
				short: item.name,
				value: item.name
			};
			choiceItem.name = item.name;
			if (item instanceof BaseComponent && item.templates.length <= 1) {
				description = item.templates[0].description || "";
			} else {
				description = item.description || "";
			}
			if (description !== "") {
				choiceItem.name = item.name  +  Util.addColor(".".repeat(targetNameLength - item.name.length), 0);
				const max = process.stdout.columns - targetNameLength - leftPadding - rightPadding;
				description = Util.truncate(description, max, 3, ".");
				description = Util.addColor(description, 0);
				choiceItem.name += description;
			}
			choiceItems.push(choiceItem);
		}
		return choiceItems;
	}

	public static applyDelimiters(config: {[key: string]: string }, delimiter: Delimiter) {
		const obj = {};
		for (const key of Object.keys(config)) {
			obj[`${delimiter.start}${key}${delimiter.end}`] = config[key];
		}
		return obj;
	}

	private static incrementName(name: string, baseLength: number): string {
		const text: string = name.slice(0, baseLength);
		const number: number = parseInt(name.slice(baseLength + 1), 10) || 0;
		return `${text} ${number + 1}`;
	}

	private static propertyByPath(object: any, propPath: string) {
		if (!propPath) {
			return object;
		}
		const pathParts = propPath.split(".");
		const currentProp = pathParts.shift();
		if (currentProp in object) {
			return this.propertyByPath(object[currentProp], pathParts.join("."));
		}
	}

	private static validateTemplate(
		sourcePath: string,
		destinationPath: string, configuration: { [key: string]: string },
		delimiters: TemplateDelimiters): boolean {

		sourcePath = sourcePath.replace(/\\/g, "/");
		destinationPath = destinationPath.replace(/\\/g, "/");

		let paths: string[] = glob.sync(sourcePath + "/**/*", { nodir: true });
		// TODO: D.P Temporary ignoring asset files
		const ignorePaths: string[] = glob.sync(sourcePath + "/**/+(assets|data)/**/*", { nodir: true });
		paths = paths.filter(x => ignorePaths.indexOf(x) === -1);

		for (let filePath of paths) {
			filePath = filePath.replace(sourcePath, destinationPath);
			filePath = Util.applyConfigTransformation(filePath, Util.applyDelimiters(configuration,
				delimiters.path || defaultDelimiters.path));
			if (fs.existsSync(filePath)) {
				this.error(path.relative(process.cwd(), filePath) + " already exists!", "red");
				return false;
			}
		}
		return true;
	}
}
