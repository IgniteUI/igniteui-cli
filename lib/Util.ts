import chalk from "chalk";
import * as fs from "fs";
import * as fsExtra from "fs-extra";
import * as path from "path";
import through2 = require("through2");
const imageExtensions = [".png", ".jpg", "jpeg", "gif", "bmp"];
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
							fsExtra.copy(path.join(sourcePath, element), path.join(destinationPath, element));
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

	/**
	 * lower-dashed string
	 */
	public static lowerDashed(text: string) {
	return text.replace(/\s+/g, "-").toLowerCase();
	}
}

export { Util };
