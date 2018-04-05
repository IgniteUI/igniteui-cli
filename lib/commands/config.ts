import { GoogleAnalytic } from "../GoogleAnalytic";
import { Util } from "../Util";
import { ProjectConfig } from "./../ProjectConfig";

const command = {
	// tslint:disable:object-literal-sort-keys
	command: "config",
	desc: "gets, sets or adds a configuration property",
	builder: yargs => {
		yargs.command({
			command: "get <property>",
			desc: "Gets a configuration property",
			builder: {
				property: {
					describe: "Config property to get",
					type: "string"
				}
			},
			handler: command.getHandler
		}).command({
			command: "set <property> <value>",
			desc: "Sets a configuration property",
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
		}).command({
			command: "add <property> <value>",
			desc: "Adds a value to an existing configuration array",
			builder: {
				property: {
					describe: "Config property to add to",
					type: "string"
				},
				value: {
					describe: "New value to add",
					type: "string"
				}
			},
			handler: argv => {
				GoogleAnalytic.post({
					ea: "subcommand: add",
					ec: "$ig config",
					el: `property to add: ${argv.property}, value to add: ${argv.value}, is global: ${argv.global}`,
					t: "event"
				});
				command.addHandler(argv);
			}
		}).option("global", {
			alias: "g",
			type: "boolean",
			global: true,
			describe: "Specify if the global configuration should be used"
		})
		// at least one command is required
		.demandCommand(1, "Please select command");
	},
	// tslint:enable:object-literal-sort-keys
	getHandler(argv) {
		GoogleAnalytic.post({
			ea: "subcommand: get",
			ec: "$ig config",
			el: `property to get: ${argv.property}, is global: ${argv.global}`,
			t: "event"
		});

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
		GoogleAnalytic.post({
			ea: "subcommand: set",
			ec: "$ig config",
			el: `property to set: ${argv.property}, value to set: ${argv.value}, is global: ${argv.global}`,
			t: "event"
		});

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

		const validationResult = ProjectConfig.validateProperty(argv.property, argv.value);
		if (!validationResult.valid) {
			Util.error(validationResult.message, "red");
			return;
		}

		config[argv.property] = validationResult.value;
		ProjectConfig.setConfig(config, argv.global);
		Util.log(`Property "${argv.property}" set.`);
	},
	addHandler(argv) {
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

		if (!config[argv.property]) {
			config[argv.property] = [];
		} else if (!Array.isArray(config[argv.property])) {
			Util.error(`Configuration property "${argv.property}" is not an array, use config set instead.`, "red");
			return;
		}

		if (config[argv.property].indexOf(argv.value) !== -1) {
			Util.log(`Value already exists in "${argv.property}".`);
			return;
		}

		config[argv.property].push(argv.value);
		ProjectConfig.setConfig(config, argv.global);
		Util.log(`Property "${argv.property}" updated.`);
	}
};

export default command;
