import { Config, GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";

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
		GoogleAnalytics.post({
			cd: "Config",
			t: "screenview"
		});

		if (!argv.global && !ProjectConfig.hasLocalConfig()) {
			Util.error("No configuration file found in this folder!", "red");
			return;
		}
		const config = ProjectConfig.getConfig(argv.global);

		GoogleAnalytics.post({
			cd9: "get",
			cd11: !!config.skipGit,
			cd12: !!argv.global,
			ec: "$ig config",
			el: "subcommand: get",
			ea: `property to get: ${argv.property}, is global: ${argv.global}`,
			t: "event"
		});

		if (config[argv.property] !== undefined) {
			Util.log(config[argv.property]);
		} else {
			Util.error(`No value found for "${argv.property}" property`, "red");
		}
	},
	setHandler(argv) {
		GoogleAnalytics.post({
			cd: "Config",
			t: "screenview",
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

		GoogleAnalytics.post({
			cd9: "set",
			cd11: !!config.skipGit,
			cd12: !!argv.global,
			ec: "$ig config",
			el: "subcommand: set",
			ea: `property to set: ${argv.property}, value to set: ${argv.value}, is global: ${argv.global}`,
			t: "event"
		});

		config[argv.property] = validationResult.value;
		ProjectConfig.setConfig(config, argv.global);
		Util.log(`Property "${argv.property}" set.`);
	},
	addHandler(argv) {
		if (!argv.skipAnalytics) {
			GoogleAnalytics.post({
				cd: "Config",
				t: "screenview"
			});
		}

		let config: Config;

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

		if (!argv.skipAnalytics) {
			GoogleAnalytics.post({
				cd9: "add",
				cd11: !!config.skipGit,
				cd12: !!argv.global,
				ec: "$ig config",
				el: "subcommand: add",
				ea: `property to add: ${argv.property}, value to add: ${argv.value}, is global: ${argv.global}`,
				t: "event"
			});
		}

		Util.log(`Property "${argv.property}" updated.`);
	}
};

export default command;
