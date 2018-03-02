import chalk from "chalk";
import { exec, execSync } from "child_process";
import * as fs from "fs";
import * as fsExtra from "fs-extra";
import * as glob from "glob";
import * as path from "path";
import through2 = require("through2");
const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".ico"];
const applyConfig = (configuration: { [key: string]: string }) => {
	return through2((data, enc, cb) => {
		cb(null, new Buffer(Util.applyConfigTransformation(data.toString(), configuration)));
	});
};

class Util {
	public static getCurrentDirectoryBase() {
		return path.basename(process.cwd());
	}

	public static directoryExists(filePath) {
		try {
			return fs.statSync(filePath).isDirectory();
		} catch (err) {
			return false;
		}
	}
	public static fileExists(filePath) {
		try {
			return fs.statSync(filePath).isFile();
		} catch (err) {
			return false;
		}
	}
	public static isDirectory(dirPath): boolean {
		return fs.lstatSync(dirPath).isDirectory();
	}

	public static isFile(filePath): boolean {
		return fs.lstatSync(filePath).isFile();
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
		pathsConfiguration: { [key: string]: string }) {

		// TODO: Rework with glob...
		if (!Util.directoryExists(destinationPath)) {
			fs.mkdirSync(destinationPath);
		}

		if (fs.existsSync(sourcePath)) {
			const items = fs.readdirSync(sourcePath);
			let folders;
			let itemsLeft = 0;

			folders = Util.getDirectoryNames(sourcePath);
			for (const folder of folders) {
				let sourceFolderName;
				let destinationFolderName;
				sourceFolderName = destinationFolderName = folder;
				if (sourceFolderName === "__path__" && configuration.hasOwnProperty("__path__")) {
					destinationFolderName = configuration["__path__"];
				}
				if (!Util.directoryExists(path.join(destinationPath, destinationFolderName))) {
					fs.mkdirSync(path.join(destinationPath, destinationFolderName));
				}
				//TODO: This call should have await!
				await Util.processTemplates(
					path.join(sourcePath, sourceFolderName),
					path.join(destinationPath, destinationFolderName),
					configuration,
					pathsConfiguration);
			}
			return new Promise<boolean>((resolve, reject) => {
				//var itemsLeft = items.length - folders.length;
				if (folders.length === items.length) {
					resolve(true);
				}
				for (const element of items) {
					let key;
					if (Util.isFile(path.join(sourcePath, element))) {
						itemsLeft++;
						// temporary recognize image extensions
						//TODO use grep module to select files which need to be processed via pipe and copy others directly.
						const currentFileExtension = path.extname(path.join(sourcePath, element));
						if (imageExtensions.indexOf(currentFileExtension) !== -1) {
							fsExtra.copySync(path.join(sourcePath, element), path.join(destinationPath, element));
							if (--itemsLeft === 0) {
								resolve(true);
							}
							continue;
						}

						// tslint:disable-next-line:forin
						for (key in pathsConfiguration) {
							// we need to recalculate relative path for every single file,
							// so we don't overwrite the pathsConfiguration but reuse them for every single file
							configuration[key] = path.relative(destinationPath, pathsConfiguration[key]);
						}

						let fileName: string = element;
						if (configuration.hasOwnProperty("__name__")) {
							fileName = element.replace("__name__", configuration["__name__"]);
						}
						const writeStream = fs.createWriteStream(path.join(destinationPath, fileName));
						fs.createReadStream(path.join(sourcePath, element))
							.pipe(applyConfig(configuration))
							.pipe(writeStream);
						writeStream.on("finish", () => {
							if (--itemsLeft === 0) {
								resolve(true);
							}
						});
					}
				}
			});
		} else {
			return new Promise<boolean>((resolve, reject) => {
				resolve(false);
			});
		}
	}

	public static validateTemplate(
		sourcePath: string,
		destinationPath: string, configuration: { [key: string]: string },
		pathsConfiguration: { [key: string]: string }): boolean {

		sourcePath = sourcePath.replace(/\\/g, "/");
		destinationPath = destinationPath.replace(/\\/g, "/");

		let paths: string[] = glob.sync(sourcePath + "/**/*", { nodir: true });
		// TODO: D.P Temporary ignoring asset files
		const ignorePaths: string[] = glob.sync(sourcePath + "/**/+(assets|data)/**/*", { nodir: true });
		paths = paths.filter(x => ignorePaths.indexOf(x) === -1);

		for (let filePath of paths) {
			filePath = filePath.replace(sourcePath, destinationPath);
			if (configuration.hasOwnProperty("__path__")) {
				filePath = filePath.replace("__path__", configuration["__path__"]);
			}
			if (configuration.hasOwnProperty("__name__")) {
				filePath = filePath.replace("__name__", configuration["__name__"]);
			}
			if (fs.existsSync(filePath)) {
				this.error(path.relative(process.cwd(), filePath) + " already exists!", "red");
				return false;
			}
		}
		return true;
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
		// tslint:disable:no-console
		if (colorKeyword) {
			const color = chalk.keyword(colorKeyword);
			console.error(color(message));
		} else {
			console.error(message);
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

	public static version() {
		const configuration = require("../package.json");
		const logo = fs.readFileSync(__dirname + "/../ignite-ui-cli.txt");
		logo.toString().split("\n").forEach(line => {
			// tslint:disable:no-console
			console.log(line);
		});
		console.log("Ignite UI CLI version: " + configuration.version);
		console.log("OS: " + this.getOSFriendlyName(process.platform));
		// tslint:enable:no-console
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
	 */
	public static lowerDashed(text: string) {
		return text.replace(/\s+/g, "-").toLowerCase();
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
		for (const key of Object.keys(source)) {
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
				target[key] = source[key];
			}
		}
	}

	/**
	 * Execute synchronous command with options
	 * @param command Command to be executed
	 * @param options Command options
	 */
	public static exec(command: string, options?: any) {
		return execSync(command, options);
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
}

export { Util };
