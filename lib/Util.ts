import * as fs from "fs";
import * as path from "path";
import * as fsExtra from "fs-extra";
const through2 = require('through2');
const imageExtensions = [".png", ".jpg", "jpeg", "gif", "bmp"];
 const applyConfig = (configuration: { [key: string]: string }) => {
	 return through2((data, enc, cb) => {  
		 cb(null, new Buffer(Util.applyConfigTransformation(data.toString(), configuration)));
	});
 }

class Util {
  static getCurrentDirectoryBase() {
    return path.basename(process.cwd());
  }

  static directoryExists(filePath) {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
  static isDirectory(dirPath) : boolean {
	  return  fs.lstatSync(dirPath).isDirectory();
  }
	static isFile(filePath) : boolean {
	  return  fs.lstatSync(filePath).isFile();
  }
  static getDirectoryNames(rootPath : string): string[] {
    // TODO: add https://github.com/davetemplin/async-file
		var folders : string[] = [];
    if (this.directoryExists(rootPath)) {
      folders = fs.readdirSync(rootPath).filter(file => fs.lstatSync(path.join(rootPath, file)).isDirectory());
    }
		return folders;
  }
  static async processTemplates(sourcePath: string, 
	destinationPath: string, configuration: { [key: string]: string }, 
	pathsConfiguration: { [key: string]: string } ) {
	
	if (!Util.directoryExists(destinationPath)) {
		fs.mkdirSync(destinationPath);
	}
	
	if (fs.existsSync(sourcePath)) {
		var items = fs.readdirSync(sourcePath), folders,
			  itemsLeft = 0;
		folders = Util.getDirectoryNames(sourcePath);
		for (var f = 0; f < folders.length; f++) {
			var sourceFolderName, destinationFolderName;
			sourceFolderName = destinationFolderName = folders[f];
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
			if (folders.length == items.length) {
				resolve(true);
			}
			for (var i = 0; i < items.length; i++) {
				var element = items[i], key;
				if (Util.isFile(path.join(sourcePath, element))) {
					itemsLeft++;
					//Temporary recognize image extensions
					//TODO use grep module to select files which need to be processed via pipe and copy others directly. 
					var currentFileExtension = path.extname(path.join(sourcePath, element));
					if (imageExtensions.indexOf(currentFileExtension) !== -1) {
						fsExtra.copy(path.join(sourcePath, element), path.join(destinationPath, element));
						if (--itemsLeft == 0) {
							resolve(true);
						}
						continue;	
					}

					for (key in pathsConfiguration) {
						//We need to recalculate relative path for every single file,
						//so we don't overwrite the pathsConfiguration but reuse them for every single file
						configuration[key] = path.relative(destinationPath, pathsConfiguration[key]);
					}

					let fileName: string  = element;
					if (configuration.hasOwnProperty("__name__")) {
						fileName = element.replace("__name__", configuration["__name__"]);
					}
					var writeStream = fs.createWriteStream(path.join(destinationPath, fileName));
					fs.createReadStream(path.join(sourcePath, element))
						.pipe(applyConfig(configuration))
						.pipe(writeStream);
					writeStream.on("finish", () => {
						if (--itemsLeft == 0) {
							resolve(true);
						}
					});
				}
			}
		});
	} else {
		return new Promise<boolean>((resolve, reject) => {
			resolve(false);
		})
	}
  }
  static applyConfigTransformation = function (data: string, configuration: { [key: string]: string }): string {
		var key;
		for (key in configuration) {
			data = data.replace(new RegExp(Util.escapeRegExp(key), "g"), configuration[key]);
		}

	return data;
  }
  static escapeRegExp(str): string {
	  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  }
};

export { Util };