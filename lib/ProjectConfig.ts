import * as path from "path";
import * as fs from "fs-extra";

export class ProjectConfig {

	public static configFile: string = "ignite-ui-cli.json";

	static getConfig(): Config {
		var filePath = path.join(process.cwd(), this.configFile);
		if (fs.existsSync(filePath)) {
			try {
				return require(filePath) as Config;
			} catch (error) {
				throw new Error("The " + this.configFile + " file is not parsed correctly. The following error has occurred: " + error.message)	
			}
		}
		return null;
	}
	static setConfig(config: Config) {
		var filePath = path.join(process.cwd(), this.configFile);
		if (fs.existsSync(filePath)) {
			fs.writeJsonSync(filePath, config, { spaces: 4 });
		}
	}
}