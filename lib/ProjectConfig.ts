import * as fs from "fs-extra";
import * as os from "os";
import * as path from "path";
import { Util } from "./Util";

export class ProjectConfig {

	public static configFile: string = "ignite-ui-cli.json";
	public static readonly defaults: Config = require("./config/defaults.json");
	private static schemaPath = "./config/Config.schema.json";

	/** Returns true if there's a CLI config file in the current working directory */
	public static hasLocalConfig(): boolean {
		const filePath = path.join(process.cwd(), this.configFile);
		return fs.existsSync(filePath);
	}

	/**
	 * Get effective CLI configuration (merged defaults, global and local)
	 * @param global return only global values
	 */
	public static getConfig(global: boolean = false): Config {
		const filePath = path.join(process.cwd(), this.configFile);
		const config = {};

		Util.merge(config, this.defaults);
		Util.merge(config, this.globalConfig());

		if (!global) {
			Util.merge(config, this.localConfig());
		}
		return config as Config;
	}

	/**
	 * Write a configuration file (either local or global) with given `Config` object.
	 * Will create or overwrite.
	 * @param config Config object to set
	 * @param global Set global values instead
	 */
	public static setConfig(config: Config, global: boolean = false) {
		const basePath = global ? os.homedir() : process.cwd();
		const filePath = path.join(basePath, this.configFile);
		fs.writeJsonSync(filePath, config, { spaces: 4 });
	}

	/*** Get local configuration only */
	public static localConfig(): Config {
		const filePath = path.join(process.cwd(), this.configFile);
		let localConfig = {};

		if (fs.existsSync(filePath)) {
			try {
				localConfig = JSON.parse(fs.readFileSync(filePath, "utf8"));
			} catch (error) {
				throw new Error(`The ${this.configFile} file is not parsed correctly. ` +
					`The following error has occurred: ${error.message}`);
			}
		}
		return localConfig as Config;
	}

	/*** Get global configuration only */
	public static globalConfig(): Config {
		const globalConfigPath = path.join(os.homedir(), this.configFile);
		let globalConfig = {};

		if (fs.existsSync(globalConfigPath)) {
			try {
				globalConfig = require(globalConfigPath);
			} catch {
				Util.error("Invalid global config found!");
			}
		}
		return globalConfig as Config;
	}
	/*** Validates if provided value could be set to provided property against provided schema */
	public static validateProperty(property, value): {valid: boolean, value: string} {
		const schema = this.getSchema();
		if (typeof schema !== "object" && schema.properties) {
			throw new Error("Incorrect schema provided. Schema should be object");
		}

		const result = { valid: false, value: undefined };
		if (!schema.properties.hasOwnProperty(property)) {
			Util.error(`Property "${property}" is not allowed in "${schema.title}" type!`, "red");
			return  result;
		}

		const propertyType = schema.properties[property]["type"];
		if (propertyType !== "string") {
			let parsedValue: any;
			try {
				parsedValue = JSON.parse(value);
			} catch (error) {
				Util.error(`Invalid value provided for ${property} property`, "red");
				return result;
			}

			if (propertyType === "array") {
				if (Array.isArray(parsedValue)) {
					result.valid = true;
					result.value = parsedValue;
					return  result;
				} else {
					Util.error(`Provided value should be an empty array type for ${property} property`, "red");
					return result;
				}
			}

			if (typeof parsedValue !== propertyType) {
				Util.error(`Invalid value type provided for ${property} property`, "red");
				Util.error(`Value should be of type ${propertyType}`, "red");
				return result;
			}
		}
		result.valid = true;
		result.value = value;
		return result;
	}
	public static getSchema() {
		const absolutePath = path.join(__dirname, this.schemaPath);
		return  require(absolutePath);
	}
}
