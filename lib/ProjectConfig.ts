import * as fs from "fs-extra";
import * as path from "path";

export class ProjectConfig {

	public static configFile: string = "ignite-ui-cli.json";

	public static getConfig(): Config {
		const filePath = path.join(process.cwd(), this.configFile);
		if (fs.existsSync(filePath)) {
			try {
				return JSON.parse(fs.readFileSync(filePath, "utf8")) as Config;
			} catch (error) {
				throw new Error(`The ${this.configFile} file is not parsed correctly. ` +
					`The following error has occurred: ${error.message}`);
			}
		}
		return null;
	}
	public static setConfig(config: Config) {
		const filePath = path.join(process.cwd(), this.configFile);
		if (fs.existsSync(filePath)) {
			fs.writeJsonSync(filePath, config, { spaces: 4 });
		}
	}
}
