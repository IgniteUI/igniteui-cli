import { Config, GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import { ConfigCommandType } from "./types";

const command: ConfigCommandType = {
	command: "config",
	describe: "gets, sets or adds a configuration property",
	builder: (yargs) => {
		return yargs
			.command({
				command: "get <property>",
				describe: "Gets a configuration property",
				builder: (yargs) => {
					return yargs.option("property", {
						describe: "Config property to get",
						type: "string"
					})
					.usage(""); // do not show any usage instructions before the commands list
				},
				handler: command.getHandler
			})
			.command({
				command: "set <property> <value>",
				describe: "Sets a configuration property",
				builder: (yargs) => {
					return yargs.option("property", {
						describe: "Config property to set",
						type: "string"
					})
					.option("value", {
						describe: "New value for the property",
						type: "string"
					})
					.usage(""); // do not show any usage instructions before the commands list
				},
				handler: command.setHandler
			})
			.command({
				command: "add <property> <value>",
				describe: "Adds a value to an existing configuration array",
				builder: (yargs) => {
					return yargs.option("property", {
						describe: "Config property to add to",
						type: "string"
					})
					.option("value", {
						describe: "New value to add",
						type: "string"
					})
					.usage(""); // do not show any usage instructions before the commands list
				},
				handler: command.addHandler
			})
			.option("global", {
				alias: "g",
				type: "boolean",
				global: true,
				describe: "Specify if the global configuration should be used"
			})
			.usage("") // do not show any usage instructions before the commands list
			// at least one command is required
			.demandCommand(1, "Please select command");
	},
	getHandler(argv) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Config"
		});

		if (!argv.global && !ProjectConfig.hasLocalConfig()) {
			Util.error("No configuration file found in this folder!", "red");
			return;
		}
		const config = ProjectConfig.getConfig(argv.global);

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig config",
			el: "subcommand: get",
			ea: `property to get: ${argv.property}, is global: ${argv.global}`,
			cd9: "get",
			cd11: !!config.skipGit,
			cd12: !!argv.global
		});

		if (config[argv.property] !== undefined) {
			Util.log(config[argv.property]);
		} else {
			Util.error(`No value found for "${argv.property}" property`, "red");
		}
	},
	setHandler(argv) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Config"
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
			t: "event",
			ec: "$ig config",
			el: "subcommand: set",
			ea: `property to set: ${argv.property}, value to set: ${argv.value}, is global: ${argv.global}`,
			cd9: "set",
			cd11: !!config.skipGit,
			cd12: !!argv.global
		});

		config[argv.property] = validationResult.value;
		ProjectConfig.setConfig(config, argv.global);
		Util.log(`Property "${argv.property}" set.`);
	},
	addHandler(argv) {
		if (!argv.skipAnalytics) {
			GoogleAnalytics.post({
				t: "screenview",
				cd: "Config"
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
				t: "event",
				ec: "$ig config",
				el: "subcommand: add",
				ea: `property to add: ${argv.property}, value to add: ${argv.value}, is global: ${argv.global}`,
				cd9: "add",
				cd11: !!config.skipGit,
				cd12: !!argv.global
			});
		}

		Util.log(`Property "${argv.property}" updated.`);
	},
	handler(_argv) {} // part of the CommandModule interface
};

export default command;
