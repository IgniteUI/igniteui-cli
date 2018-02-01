import { Util } from "../Util";
import { ProjectConfig } from "./../ProjectConfig";

const command = {
	command: "config",
	desc: "Get or set configuration properties",
	builder: yargs => {
		yargs.command({
			command: "get <property>",
			desc: "Get configuration properties",
			builder: {
				property: {
					describe: "Config property to get",
					type: "string"
				}
			},
			handler: command.getHandler
		}).command({
			command: "set <property> <value>",
			desc: "Set configuration properties",
			builder: {
				property: {
					describe: "Config property to set",
					type: "string"
				},
				value: {
					describe: "New value for the property",
					type: "string"
				}
			},
			handler: command.setHandler
		}).option("global", {
			alias: "g",
			type: "boolean",
			global: true,
			describe: "Specify if the global configuration should be used"
		})
		// at least one command is required
		.demand(1, "Please use either get or set command");
	},
	getHandler(argv) {
		if (!argv.global && !ProjectConfig.hasLocalConfig()) {
			Util.error("No configuration file found in this folder!", "red");
			return;
		}
		const config = ProjectConfig.getConfig(argv.global);
		if (config[argv.property] !== undefined) {
			Util.log(config[argv.property]);
		} else {
			Util.error(`No value found for "${argv.property}" property`, "red");
		}
	},
	setHandler(argv) {
		let config;

		if (argv.global) {
			config = ProjectConfig.globalConfig();
		} else {
			if (!ProjectConfig.hasLocalConfig()) {
				Util.error("No configuration file found in this folder!", "red");
				return;
			}
			config = ProjectConfig.localConfig();
		}

		if (config[argv.property]) {
			// TODO: Schema/property validation?
		}

		config[argv.property] = argv.value;
		ProjectConfig.setConfig(config, argv.global);
		Util.log(`Property "${argv.property}" set`);
	}
};

export default command;
